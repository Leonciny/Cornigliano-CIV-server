"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const process_1 = __importDefault(require("process"));
dotenv_1.default.config({ path: `${__dirname}/.env` });
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process_1.default.env.HOST,
    user: process_1.default.env.USER,
    password: process_1.default.env.PASSWORD,
    database: process_1.default.env.DATABASE,
});
module.exports = connection;
