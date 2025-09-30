import { Client } from "pg";

export async function handler(event) {
    try {
        // Expecting POST JSON with country, city, page, timestamp
        const body = JSON.parse(event.body);

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

        return { statusCode: 200, body: JSON.stringify({ success: true }) };
    } catch (err) {
        console.error("Function failed:", err);
        return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
    }
}
