"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mysql = void 0;
const promise_1 = require("mysql2/promise");
class Mysql {
    conn;
    credentials;
    constructor(credentials) {
        this.credentials = credentials;
        this.conn = (0, promise_1.createPool)(this.credentials);
    }
    ensureConnection() {
        if (!this.conn)
            this.conn = (0, promise_1.createPool)(this.credentials);
    }
    async queryRows(query, values) {
        if (!query)
            throw new Error("Query is required");
        this.ensureConnection();
        const [result] = await this.conn.query(query, values);
        return result;
    }
}
exports.Mysql = Mysql;
//# sourceMappingURL=Mysql.js.map