"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
var connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    database: "typescript-deathmatch",
    password: ''
});
connection.connect((err) => {
    if (err) {
        console.log(err.stack);
        return;
    }
    console.log('[MYSQL] Connected Database - Thread ID: ' + connection.threadId);
});
//# sourceMappingURL=mysql.js.map