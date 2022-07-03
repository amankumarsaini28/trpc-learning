import express from "express";
import {
  createExpressMiddleware,
  CreateExpressContextOptions,
} from "@trpc/server/adapters/express";
import { appRouter } from "./rpc/router";

const app = express();

const createContext = ({ req, res }: CreateExpressContextOptions) => ({});

app.use("/isActive", (req, res) => res.send("OK"));

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(8000, () => console.log(`http://localhost:8080/isActive`));
