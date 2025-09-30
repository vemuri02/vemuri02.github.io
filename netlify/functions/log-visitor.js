import fetch from "node-fetch";
import { Client } from "pg";

export async function handler(event, context) {
    try {
        const userAgent = event.headers['user-agent'] || '';

        // 1️⃣ Ignore Netlify prerendering / bots
        if (
            userAgent.includes('HeadlessChrome') ||
            userAgent.toLowerCase().includes('netlify')
        ) {
            console.log("Prerender/bot request ignored");
            return {
                statusCode: 200,
                body: JSON.stringify({ success: true, note: 'Prerender/bot ignored' })
            };
        }

        // 2️⃣ Get visitor IP (Netlify header first)
        const ip =
            event.headers["x-nf-client-connection-ip"] ||
            event.headers["x-forwarded-for"]?.split(",")[0] ||
            event.headers["client-ip"] ||
            "";

        // 3️⃣ Only call geo API if we have a real IP
        let geo = { country_name: "Unknown", city: "Unknown" };
        if (ip) {
            try {
                const res = await fetch(`https://ipapi.co/${ip}/json/`);
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

        // 5️⃣ Connect to Neon DB and insert
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
