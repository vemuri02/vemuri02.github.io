// netlify/functions/log-visitor.js

import fetch from "node-fetch";
import { Client } from "pg";

export async function handler(event, context) {
    try {
        // 1️⃣ Get visitor IP safely
        const ip = event.headers["x-forwarded-for"]?.split(",")[0] || "";

        // 2️⃣ Fetch location safely
        let geo = { country_name: "Unknown", city: "Unknown" };
        if (ip) {
            try {
                const res = await fetch(`https://ipapi.co/${ip}/json/`);
                geo = await res.json();
            } catch (err) {
                console.error("Geo lookup failed:", err);
            }
        }

        const data = {
            country: geo.country_name || "Unknown",
            city: geo.city || "Unknown",
            page: event.queryStringParameters?.page || "home",
            timestamp: new Date().toISOString()
        };

        // 3️⃣ Connect to Neon safely
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

        // 4️⃣ Return success
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true })
        };

    } catch (err) {
        console.error("Function failed:", err);

        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to log visitor", details: err.message })
        };
    }
}
