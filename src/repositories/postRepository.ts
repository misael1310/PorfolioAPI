import { Database } from "../models/dataBase";
import { Repository } from "../models/baseRepositoryModel";
import { PostResponse } from "../models/Post/PostResponse";
import { PostDB } from "../models/Post/PostDB";
import { selectAllPosts, selectPostById } from "../models/Post/postQueries";

export class PostRepository implements Repository<PostResponse> {
  constructor(private dbConnection: Database) {}

  private mapToPostResponse(PostDB: PostDB[]): PostResponse[] {
    const posts: PostResponse[] = PostDB.map((post) => {
      const {
        idpost,
        post_title,
        post_content,
        bannerBackground,
        bannerPicture,
        bannerAlt,
        initial,
        sm,
        md,
        lg,
        xl,
      } = post;

      return {
        idpost,
        post_title,
        post_content,
        bannerBackground,
        bannerPicture,
        bannerAlt,
        bannerSources: {
          initial,
          sm,
          md,
          lg,
          xl,
        },
      };
    });
    return posts;
  }

  async getAll(): Promise<PostResponse[]> {
    const postQueryResult =
      await this.dbConnection.queryRows<PostDB>(selectAllPosts);

    return this.mapToPostResponse(postQueryResult);
  }

  async getPostByID(postID: string): Promise<PostResponse> {
    const result = await this.dbConnection.queryRows<PostDB>(selectPostById, [
      postID,
    ]);
    const [post] = this.mapToPostResponse(result);

    if (!post) throw new Error("Post not found");
    return post;
  }
}
