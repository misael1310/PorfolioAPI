import { Router } from "express";
import { postRoutes } from "routes/post-routes";

const appRouter = Router();
appRouter.use(postRoutes);

export { appRouter };
