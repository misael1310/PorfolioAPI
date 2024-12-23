"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
const postQueries_1 = require("../models/Post/postQueries");
class PostRepository {
    dbConnection;
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }
    mapToPostResponse(PostDB) {
        const posts = PostDB.map((post) => {
            const { idpost, post_title, post_content, bannerBackground, bannerPicture, bannerAlt, initial, sm, md, lg, xl, } = post;
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
    async getAll() {
        const postQueryResult = await this.dbConnection.queryRows(postQueries_1.selectAllPosts);
        return this.mapToPostResponse(postQueryResult);
    }
    async getPostByID(postID) {
        const result = await this.dbConnection.queryRows(postQueries_1.selectPostById, [
            postID,
        ]);
        const [post] = this.mapToPostResponse(result);
        if (!post)
            throw new Error("Post not found");
        return post;
    }
}
exports.PostRepository = PostRepository;
//# sourceMappingURL=postRepository.js.map