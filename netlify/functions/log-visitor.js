// netlify/functions/log-visitor.js

import fetch from "node-fetch";
import { Client } from "pg"; // PostgreSQL client for Neon

export async function handler(event, context) {
    // 1. Get visitor IP from headers
    const ip = event.headers["x-forwarded-for"]?.split(",")[0] || "";

    // 2. Convert IP -> location (no IP storage)
    const geo = await fetch(`https://ipapi.co/${ip}/json/`).then(r => r.json());

    const data = {
        country: geo.country_name || "Unknown",
        city: geo.city || "Unknown",
        page: event.queryStringParameters.page || "home",
        timestamp: new Date().toISOString()
    };

    // 3. Connect to Neon and save data
    const client = new Client({
        connectionString: process.env.DATABASE_URL, // from Neon
        ssl: { rejectUnauthorized: false }
    });

    await client.connect();
    await client.query(
        `INSERT INTO visitors (country, city, page, timestamp) VALUES ($1, $2, $3, $4)`,
        [data.country, data.city, data.page, data.timestamp]
    );
    await client.end();

    return {
        statusCode: 200,
        body: JSON.stringify({ success: true })
    };
}
