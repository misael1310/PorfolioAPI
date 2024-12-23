"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
const env_1 = require("./env");
const allowedOrigins = env_1.ENV.allowOrigins?.split(",");
const corsOptions = {
    origin: allowedOrigins,
    methods: "GET",
};
exports.corsOptions = corsOptions;
//# sourceMappingURL=corsOptions.js.map