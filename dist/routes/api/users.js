"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/", (req, res) => {
    res.send("dio bastardo schifoso animale");
});
router.get("/:id", (req, res) => {
});
router.put("/:id", (req, res) => {
});
router.delete("/:id", (req, res) => {
});
module.exports = router;
//# sourceMappingURL=users.js.map