import { pool } from "../config/database.js";

export const MessageTableQuery = `
    CREATE TABLE IF NOT EXISTS message (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        chat UUID NOT NULL REFERENCES chat(id),
        sender TEXT NOT NULL REFERENCES users(clerkId),
        text TEXT NOT NULL,
        createdAt TIMESTAMP DEFAULT NOW(),
        updatedAt TIMESTAMP DEFAULT NOW()
    );
`;