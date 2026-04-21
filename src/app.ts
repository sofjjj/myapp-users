import express from "express";
import { HealthCheckResponse, logger } from "@myapp/common";

const app = express();

app.get("/healthz", (_req, res) => {
  const body: HealthCheckResponse = {
    status: "ok",
    service: "users",
    timestamp: new Date().toISOString(),
  };
  logger.info("healthz called", { service: "users" });
  res.json(body);
});

export default app;
