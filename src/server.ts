import express from "express"
import process from "process"
import dotenv from "dotenv"
import bodyParser from "body-parser";
import cors from "cors"
import path from "path"
import * as fs from "fs";


dotenv.config({path : `.env`})

const app = express(),
      PORT = process.env.PORT

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
        res.send("ds+èhèdrhdrthr");
})
/**
 * ROUTERS
 */
const routesDir: string = "./routes/api/";
const routes=["awards","users","purchases","achieveds","shops"]

routes.forEach((route) =>
    app.use(`/api/${route}`, require(routesDir + route))
)
app.listen(PORT);
