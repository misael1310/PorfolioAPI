import { dbConnection } from "database/dbConnection";
import { Repository } from "models/baseRepositoryModel";
import { Post } from "models/postModel";

export class PostRepository implements Repository<Post> {
  private selectAllPost = "SELECT * FROM post";

  async getAll(): Promise<Post[]> {
    const [posts] = await dbConnection.query<Post[]>(this.selectAllPost);
    await dbConnection.end();

    return posts;
  }
}
