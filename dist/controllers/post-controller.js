"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostById = exports.getPosts = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const postRepository_1 = require("../repositories/postRepository");
const dbConnection_1 = require("../database/dbConnection");
const post = new postRepository_1.PostRepository(dbConnection_1.DbConnection);
const getPostById = (0, express_async_handler_1.default)(async (req, res) => {
    const { postID } = req.params;
    const result = await post.getPostByID(postID);
    if (!result) {
        res.status(404).json({ message: "Post not found" });
        return;
    }
    res.json(result);
});
exports.getPostById = getPostById;
const getPosts = (0, express_async_handler_1.default)(async (_, res) => {
    const posts = await post.getAll();
    res.json(posts);
});
exports.getPosts = getPosts;
//# sourceMappingURL=post-controller.js.map