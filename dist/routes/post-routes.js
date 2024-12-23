"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoutes = void 0;
const express_1 = require("express");
const post_controller_1 = require("../controllers/post-controller");
const postRoutes = (0, express_1.Router)();
exports.postRoutes = postRoutes;
postRoutes.get("/posts", post_controller_1.getPosts);
postRoutes.get("/post/:postID", post_controller_1.getPostById);
//# sourceMappingURL=post-routes.js.map