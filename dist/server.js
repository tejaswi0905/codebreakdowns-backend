import { app } from "./app.js";
const port = process.env.PORT || 3000;
const startServer = () => {
    try {
        app.listen(port, () => {
            console.log(`Server started successfully and running on port ${port}`);
        });
    }
    catch (error) {
        console.error("Failed to start error ", error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=server.js.map