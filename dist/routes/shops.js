"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
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