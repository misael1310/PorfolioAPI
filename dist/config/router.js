"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = require("express");
const post_routes_1 = require("../routes/post-routes");
const appRouter = (0, express_1.Router)();
exports.appRouter = appRouter;
appRouter.use(post_routes_1.postRoutes);
//# sourceMappingURL=router.js.map