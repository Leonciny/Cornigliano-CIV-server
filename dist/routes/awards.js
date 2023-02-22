"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
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