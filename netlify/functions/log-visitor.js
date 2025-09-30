import { Client } from "pg";

export async function handler(event) {
    let client;
    try {
        // 1️⃣ Parse incoming POST body safely
        let body = {};
        if (event.httpMethod === "POST" && event.body) {
            try {
                body = JSON.parse(event.body);
            } catch (err) {
                console.error("Failed to parse JSON body:", err);
                body = {};
            }
        }

        // 2️⃣ Set defaults
        const country = body.country || "Unknown";
        const city = body.city || "Unknown";
        const page = body.page || "home";
        const timestamp = body.timestamp || new Date().toISOString();

        console.log("Logging visitor:", { country, city, page, timestamp });

        // 3️⃣ Connect to database
        client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false },
        });

        await client.connect();

        await client.query(
            `INSERT INTO visitors (country, city, page, timestamp) VALUES ($1, $2, $3, $4)`,
            [country, city, page, timestamp]
        );

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, data: { country, city, page, timestamp } }),
        };
    } catch (err) {
        console.error("Function failed:", err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message }),
        };
    } finally {
        if (client) {
            try { await client.end(); } catch { }
        }
    }
}
