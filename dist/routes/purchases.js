"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
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