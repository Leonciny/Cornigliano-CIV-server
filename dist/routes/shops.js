"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    console.log("lista negozi");
    res.send("lista negozi!");
});
router.get("/:id", (req, res) => {
    console.log("negozio: " + req.params.id);
    res.send("negozio " + req.params.id);
});
module.exports = router;
//# sourceMappingURL=shops.js.map