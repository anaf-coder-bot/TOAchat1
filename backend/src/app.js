import express from "express";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/authRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import { clerkMiddleware } from "@clerk/express";

const app = express();

app.use(express.json());
app.use(clerkMiddleware());

app.get("/health", (req, res) => {
    res.json({status:"ok", message:"server is running"})
});

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

export default app;