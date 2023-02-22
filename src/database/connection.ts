import dotenv from "dotenv";
import process from "process";

dotenv.config({path : `.env`})
const mysql = require('mysql')
console.log("cas")
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user:  process.env.DB_USER,
    password:  process.env.DB_PASSWORD,
    database:  process.env.DB_DATABASE
})
connection.connect()

module.exports = connection