import { Client } from "pg";

export async function handler(event) {
    try {
        let body = {};

        if (event.httpMethod === "POST" && event.body) {
            body = JSON.parse(event.body);
        } else {
            // fallback for GET requests with query params
            body = {
                country: "Unknown",
                city: "Unknown",
                page: event.queryStringParameters?.page || "home",
                timestamp: new Date().toISOString(),
            };
        }

        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false },
        });

        await client.connect();
        await client.query(
            `INSERT INTO visitors (country, city, page, timestamp) VALUES ($1, $2, $3, $4)`,
            [body.country, body.city, body.page, body.timestamp]
        );
        await client.end();

        return { statusCode: 200, body: JSON.stringify({ success: true, data: body }) };
    } catch (err) {
        console.error("Function failed:", err);
        return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
    }
}
