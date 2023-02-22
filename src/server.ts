import express from "express"
import process from "process"
import dotenv from "dotenv"
import bodyParser from "body-parser";
import cors from "cors"
import path from "path"


dotenv.config({path : `.env`})

const app = express(),
      PORT = process.env.PORT

app.use(cors());
app.use(bodyParser.json());


app.get("/", (req, res) => {

})

/**
 * ROUTERS
 */
const awardRouter =require("./routes/api/awards")
app.use("/api/awards",awardRouter)
const userRouter =require("./routes/api/users")
app.use("/api/users",userRouter)
const purchaseRouter =require("./routes/api/purchases")
app.use("/api/purchases",purchaseRouter)
const shopRouter =require("./routes/api/shops")
app.use("/api/shops",shopRouter)

app.listen(PORT);
