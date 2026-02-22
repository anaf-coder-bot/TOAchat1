import { pool } from "../config/database.js";

export const UserTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        clerkId TEXT PRIMARY KEY NOT NULL,
        name VARCHAR(50) NOT NULL,
        email TEXT NOT NULL,
        avatar TEXT,
        isDeleted BOOLEAN DEFAULT FALSE,
        createdAt TIMESTAMP DEFAULT NOW(),
        updatedAt TIMESTAMP DEFAULT NOW()
    );
`;