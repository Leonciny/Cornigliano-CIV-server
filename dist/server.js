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
dotenv_1.default.config({ path: `.env` });
const app = (0, express_1.default)(), PORT = process_1.default.env.PORT;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.send("ds+èhèdrhdrthr");
});
const awardRouter = require("./routes/api/awards");
app.use("/api/awards", awardRouter);
const userRouter = require("./routes/api/users");
app.use("/api/users", userRouter);
const purchaseRouter = require("./routes/api/purchases");
app.use("/api/purchases", purchaseRouter);
const shopRouter = require("./routes/api/shops");
app.use("/api/shops", shopRouter);
app.listen(PORT);
//# sourceMappingURL=server.js.map