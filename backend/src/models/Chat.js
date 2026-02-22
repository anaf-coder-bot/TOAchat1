import { pool } from "../config/database.js";

export const ChatTableQuery = `
    CREATE TABLE IF NOT EXISTS chat (
        id UUID PRIMARY KEY DEFAULT uuid_generat_v4(),
        participants TEXT[] NOT NULL REFERENCES users(clerkId),
        lastMessage UUID NOT NULL REFERENCES message(id),
        lastMessageAt TIMESTAMP DEFAULT NOW(),
        isDeleted BOOLEAN DEFAULT FALSE,
        createdAt TIMESTAMP DEFAULT NOW(),
        updatedAt TIMESTAMP DEFAULT NOW()
    );
`;