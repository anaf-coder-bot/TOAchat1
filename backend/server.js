import app from "./src/app.js";
import { connectDB } from "./src/config/database.js";

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server running on Port:",PORT);
    });
}).catch(error => {
    console.error("Failed to connect with postgres.",error.message);
    process.exit(1);
});
