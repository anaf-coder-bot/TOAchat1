import { pool } from "../config/database.js";

export const ChatTableQuery = `
    CREATE TABLE IF NOT EXISTS chat (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        lastMessageAt TIMESTAMP DEFAULT NOW(),
        isDeleted BOOLEAN DEFAULT FALSE,
        createdAt TIMESTAMP DEFAULT NOW(),
        updatedAt TIMESTAMP DEFAULT NOW()
    );
`;

export const ChatParticipantsTableQuery = `
    CREATE TABLE IF NOT EXISTS participants (
        chatId UUID REFERENCES chat(id) ON DELETE SET NULL,
        userId TEXT REFERENCES users(clerkId) ON DELETE SET NULL,
        PRIMARY KEY (chatId, userId)
    );
`;

export const AddLastMessageQuery = `
    ALTER TABLE chat
    ADD COLUMN lastMessage UUID REFERENCES message(id) ON DELETE SET NULL
`;