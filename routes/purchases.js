/**
 * ROUTER OF PURCHASES
 */
const express = require("express")
const router = express.Router()
/**
 * index of purchases contains all purchases
 */
router.get("/",(req,res)=>{
    console.log("lista acquisti");
    res.send("lista acquisti!");
})
/**
 * it is the view of a single purchase
 */
router.get("/:id",(req,res)=>{
    console.log("acquisto: "+req.params.id);
    res.send("acquisto "+req.params.id);
})

module.exports = router

