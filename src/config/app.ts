import express from "express";
import cors from "cors";
import { appRouter } from "./router";
import { corsOptions } from "./corsOptions";

const App = () => {
  const app = express();
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(appRouter);
  return app;
};

export { App };
