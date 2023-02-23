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


app.get("/", (req, res) => {
    res.send("ca")
})

/**
 * ROUTERS
 */
const awardRouter =require("./routes/awards")
app.use("/awards",awardRouter)
const userRouter =require("./routes/users")
app.use("/users",userRouter) 
const purchaseRouter =require("./routes/purchases")
app.use("/purchases",purchaseRouter) 
const shopRouter =require("./routes/shops")
app.use("/shops",shopRouter) 
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
})