"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const env_1 = require("./env");
const { host, user, password, database } = env_1.ENV;
exports.dbConfig = {
    host,
    user,
    password,
    database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};
//# sourceMappingURL=dbConfig.js.map