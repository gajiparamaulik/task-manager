import express from "express";

const app = express();

// Router Imports
import healthCheckRouter from "./routes/healthCheck.routes.js";

app.use("/api/V1/healthcheck", healthCheckRouter);

export default app;