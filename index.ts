import express from "express"
import process from "process"
import dotenv from "dotenv"
import bodyParser from "body-parser";
import cors from "cors"

dotenv.config({path : `${__dirname}/.env`})

const app = express(),
      PORT = process.env.PORT

app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, function () {
	console.log(`Server listening on port ${PORT}`);
})
console.log()