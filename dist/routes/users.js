"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    console.log("lista users");
    res.send("lista users!");
});
router.get("/:id", (req, res) => {
    console.log("user: " + req.params.id);
    res.send("user " + req.params.id);
});
module.exports = router;
//# sourceMappingURL=users.js.map