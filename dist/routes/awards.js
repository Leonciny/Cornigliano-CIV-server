"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    console.log("lista awards");
    res.send("lista awards!");
});
router.get("/:id", (req, res) => {
    console.log("award: " + req.params.id);
    res.send("award " + req.params.id);
});
module.exports = router;
//# sourceMappingURL=awards.js.map