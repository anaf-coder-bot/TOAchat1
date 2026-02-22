import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const postgresUrl = process.env.DATABASE_URL;
if (!postgresUrl)
throw new Error("Postgres environment variable is not defined.");

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export const connectDB = async () => {
    try {
        pool.connect()
        console.log("Postgres connected.")
    } catch(error) {
        console.error("Database connection failed.",error.message);
        process.exit(1);
    };
};
