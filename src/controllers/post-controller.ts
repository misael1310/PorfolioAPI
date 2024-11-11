import asyncHandler from "express-async-handler";
import { PostRepository } from "repositories/postRepository";
import { DbConnection } from "database/dbConnection";

const post = new PostRepository(DbConnection);

const post_list = asyncHandler(async (_, res) => {
  const posts = await post.getAll();
  res.json(posts);
});

export { post_list };
