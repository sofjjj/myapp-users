import app from "./app";
import { logger } from "@myapp/common";

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  logger.info(`users service listening`, { port: PORT });
});
