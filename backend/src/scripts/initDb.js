import { pool } from "../config/database.js";

import { UserTableQuery } from "../models/User.js";
import { ChatTableQuery, ChatParticipantsTableQuery, AddLastMessageQuery } from "../models/Chat.js";
import { MessageTableQuery } from "../models/Message.js";

const initDb = async () => {
    try {
        console.log("Initializing database...");
        await pool.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
        await pool.query(UserTableQuery);
        await pool.query(ChatTableQuery);
        await pool.query(ChatParticipantsTableQuery);
        await pool.query(MessageTableQuery);
        await pool.query(AddLastMessageQuery);

        console.log("Database initalized successfully.");
    } catch(error) {
        console.error("Database initialization failed:",error.message);
    };
};

initDb();