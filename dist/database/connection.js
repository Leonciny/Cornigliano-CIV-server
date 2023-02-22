"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const process_1 = __importDefault(require("process"));
dotenv_1.default.config({ path: `.env` });
const mysql = require('mysql');
console.log("cas");
const connection = mysql.createConnection({
    host: process_1.default.env.DB_HOST,
    user: process_1.default.env.DB_USER,
    password: process_1.default.env.DB_PASSWORD,
    database: process_1.default.env.DB_DATABASE
});
connection.connect();
module.exports = connection;
//# sourceMappingURL=connection.js.map