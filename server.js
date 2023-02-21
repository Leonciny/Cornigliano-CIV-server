"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const process_1 = __importDefault(require("process"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config({ path: `${__dirname}/.env` });
const connection = require('./database/connection');
const app = (0, express_1.default)(), PORT = process_1.default.env.PORT;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    let sql = 'SELECT * FROM users';
    connection.query(sql, (err, result) => {
        console.log(result);
        res.send('Inventory received');
    });
});
const awardRouter = require("./routes/awards");
app.use("/awards", awardRouter);
const userRouter = require("./routes/users");
app.use("/users", userRouter);
const purchaseRouter = require("./routes/purchases");
app.use("/purchases", purchaseRouter);
const shopRouter = require("./routes/shops");
app.use("/shops", shopRouter);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
