import express from "express"
import process from "process"
import dotenv from "dotenv"
import bodyParser from "body-parser";
import cors from "cors"

dotenv.config({path : `${__dirname}/.env`})
const connection = require('./database/connection')
const app = express(),
      PORT = process.env.PORT

app.use(cors());
app.use(bodyParser.json());


app.get("/", (req, res) => {
    let sql = 'SELECT * FROM users';
    connection.query(sql, (err: any, result: any) => {

        console.log(result);
        res.send("ds+èhèdrhdrthr");
    });
})

/**
 * ROUTERS
 */
const awardRouter =require("./src/routes/awards")
app.use("/awards",awardRouter)
const userRouter =require("./src/routes/users")
app.use("/users",userRouter) 
const purchaseRouter =require("./src/routes/purchases")
app.use("/purchases",purchaseRouter) 
const shopRouter =require("./src/routes/shops")
app.use("/shops",shopRouter) 
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
})