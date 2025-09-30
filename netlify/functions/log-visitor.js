import { Client } from "pg";

export async function handler(event) {
    try {
        let body = {};

        if (event.httpMethod === "POST" && event.body) {
            try {
                body = JSON.parse(event.body);
            } catch {
                body = {};
            }
        }

        // Ensure required fields
        const country = body.country || "Unknown";
        const city = body.city || "Unknown";
        const page = body.page || "home";
        const timestamp = body.timestamp || new Date().toISOString();

        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false },
        });

        await client.connect();
        await client.query(
            `INSERT INTO visitors (country, city, page, timestamp) VALUES ($1, $2, $3, $4)`,
            [country, city, page, timestamp]
        );
        await client.end();

        return { statusCode: 200, body: JSON.stringify({ success: true, data: { country, city, page, timestamp } }) };
    } catch (err) {
        console.error("Function failed:", err);
        return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
    }
}
