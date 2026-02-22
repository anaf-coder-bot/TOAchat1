import { pool } from "../config/database.js";

export const UserTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        clerkId TEXT PRIMARY KEY NOT NULL,
        name VARCHAR(50),
        email TEXT NOT NULL,
        avatar TEXT,
        isDeleted BOOLEAN DEFAULT FALSE,
        createdAt TIMESTAMP DEFAULT NOW(),
        updatedAt TIMESTAMP DEFAULT NOW()
    );
`;

export const GetUserById = async (clerkId) => (await pool.query(`SELECT * FROM users WHERE clerkId = $1`, [clerkId])).rows[0];

export const CreateUser = async ({ clerkId, name, email, avatar }) => 
    (await pool.query(`
        INSERT INTO users (clerkId, name, email, avatar)
        VALUES ($1, $2, $3, $4) RETURNING *;
    `, [clerkId, name, email, avatar])).rows[0];
