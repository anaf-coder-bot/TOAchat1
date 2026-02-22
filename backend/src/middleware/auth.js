import { getAuth, requireAuth } from "@clerk/express";
import { GetUserById } from "../models/User";

export const protectRoute = [
    requireAuth(),
    async (req, res, next) => {
        try {
            const { userId:clerkId } = getAuth(req);
            if (!clerkId) return res.status(401).json({ message: "Unauthorized - invalid token" });

            const user = await GetUserById(clerkId);
            if (!user) return res.status(400).json({ message: "User not found." });

            req.userId = clerkId;
            next();

        } catch(error) {
            console.error("Error in protect route middleware.",error.message);
            res.status(500).json({ message: "Internal server error." });
        }
    },
];