import { clerkClient, getAuth } from "@clerk/express";
import { CreateUser, GetUserById } from "../models/User";


export async function getMe(req, res, next) {
    try {
        const userId = req.userId;

        const user = await GetUserById(userId);
        if (!user)
            return res.status(401).json({ message: "User not found." });
        
        res.status(200).json(user);
    } catch(error) {
        res.status(500)
        next()
    };
};

export async function authCallback(req, res, next) {
    try {
        const { userId:clerkId } = getAuth(req);

        if (!clerkId)
            return res.status(401).json({ message: "Unauthorized." });

        let user = await GetUserById(clerkId);
        if (!user) {
            const clerkUser = await clerkClient.users.getUser(clerkId);

            user = await CreateUser({ 
                clerkId, 
                name:
                    clerkUser.firstName 
                        ? `${clerkUser.firstName} ${clerkUser.lastName || ""}`.trim() 
                        : clerkUser.emailAddresses[0]?.emailAddress.split("@")[0], 
                email: clerkUser.emailAddresses[0]?.emailAddress,
                avatar: clerkUser.imageUrl,
            })
        };
        
        res.json(user);

    } catch(error) {
        res.status(500)
        next(error);
    };
};