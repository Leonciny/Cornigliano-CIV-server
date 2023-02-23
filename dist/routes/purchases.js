"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    console.log("lista acquisti");
    res.send("lista acquisti!");
});
router.get("/:id", (req, res) => {
    console.log("acquisto: " + req.params.id);
    res.send("acquisto " + req.params.id);
});
module.exports = router;
//# sourceMappingURL=purchases.js.map