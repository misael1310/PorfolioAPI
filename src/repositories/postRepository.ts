import { Database } from "models/dataBase";
import { Repository } from "models/baseRepositoryModel";
import { Post } from "models/postModel";

export class PostRepository implements Repository<Post> {
  private selectAllPost = "SELECT * FROM post";

  constructor(private dbConnection: Database) {}

  async getAll(): Promise<Post[]> {
    const posts = await this.dbConnection.queryRows<Post>(this.selectAllPost);
    return posts;
  }
}
