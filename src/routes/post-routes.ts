import { Router } from "express";
import { getPosts, getPostById } from "../controllers/post-controller";

const postRoutes = Router();
postRoutes.get("/posts", getPosts);
postRoutes.get("/post/:postID", getPostById);

export { postRoutes };
