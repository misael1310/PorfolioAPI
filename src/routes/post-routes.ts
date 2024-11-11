import { Router } from "express";
import { post_list } from "controllers/post-controller";

const postRoutes = Router();
postRoutes.get("/posts", post_list);

export { postRoutes };
