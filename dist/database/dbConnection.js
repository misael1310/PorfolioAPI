"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConnection = void 0;
const Mysql_1 = require("./Mysql");
const dbConfig_1 = require("../config/dbConfig");
exports.DbConnection = new Mysql_1.Mysql(dbConfig_1.dbConfig);
//# sourceMappingURL=dbConnection.js.map