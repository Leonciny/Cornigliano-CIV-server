import dotenv from "dotenv";
import process from "process";

dotenv.config({path : `${__dirname}/.env`})
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: process.env.HOST,
    user:  process.env.USER,
    password:  process.env.PASSWORD,
    database:  process.env.DATABASE,
})
connection.connect()
module.exports = connection