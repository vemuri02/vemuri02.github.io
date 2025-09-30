// netlify/functions/log-visitor.js

import fetch from "node-fetch";
import { Client } from "pg";

export async function handler(event, context) {
    try {
        // 1️⃣ Get visitor IP safely
        // Netlify passes x-forwarded-for for real visitors
        let ip = event.headers["x-forwarded-for"]?.split(",")[0]
            || event.headers["client-ip"]
            || "";

        // 2️⃣ Use a test IP if IP is empty (useful in dev / gh-pages preview)
        const isProd = process.env.CONTEXT === "production";
        const geoIP = ip || (isProd ? "" : "8.8.8.8"); // Google DNS for testing

        // 3️⃣ Fetch location safely
        let geo = { country_name: "Unknown", city: "Unknown" };
        if (geoIP) {
            try {
                const res = await fetch(`https://ipapi.co/${geoIP}/json/`);
                geo = await res.json();
            } catch (err) {
                console.error("Geo lookup failed:", err);
            }
        }

        // 4️⃣ Prepare data
        const data = {
            country: geo.country_name || "Unknown",
            city: geo.city || "Unknown",
            page: event.queryStringParameters?.page || "home",
            timestamp: new Date().toISOString()
        };

        // 5️⃣ Connect to Neon and insert
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        });

        try {
            await client.connect();
            await client.query(
                `INSERT INTO visitors (country, city, page, timestamp) VALUES ($1, $2, $3, $4)`,
                [data.country, data.city, data.page, data.timestamp]
            );
        } finally {
            await client.end();
        }

        // 6️⃣ Return success
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, data })
        };

    } catch (err) {
        console.error("Function failed:", err);

        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to log visitor", details: err.message })
        };
    }
}
