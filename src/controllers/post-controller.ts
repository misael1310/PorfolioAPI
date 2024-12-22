import asyncHandler from "express-async-handler";
import { PostRepository } from "repositories/postRepository";
import { DbConnection } from "database/dbConnection";
import { Request, Response } from "express";

const post = new PostRepository(DbConnection);

interface singlePostParams {
  postID: string;
}

const getPostById = asyncHandler(
  async (req: Request<singlePostParams>, res: Response) => {
    const { postID } = req.params;

    const result = await post.getPostByID(postID);
    if (!result) {
      res.status(404).json({ message: "Post not found" });
      return;
    }
    res.json(result);
  },
);

const getPosts = asyncHandler(async (_, res: Response) => {
  const posts = await post.getAll();
  res.json(posts);
});

export { getPosts, getPostById };
