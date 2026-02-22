import { pool } from "../config/database.js";

export const MessageTableQuery = `
    CREATE TABLE IF NOT EXISTS message (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        chat UUID REFERENCES chat(id) ON DELETE SET NULL,
        sender TEXT REFERENCES users(clerkId) ON DELETE SET NULL,
        text TEXT NOT NULL,
        isDeleted BOOLEAN DEFAULT FALSE,
        createdAt TIMESTAMP DEFAULT NOW(),
        updatedAt TIMESTAMP DEFAULT NOW()
    );
`;