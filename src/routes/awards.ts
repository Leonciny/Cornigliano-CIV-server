/**
 * ROUTER OF AWARDS
 */
const express = require("express")
const router = express.Router()
/**
 * index of awards contains all awards available and not
 */
router.get("/",(req,res)=>{
    console.log("lista awards");
    res.send("lista awards!");
})
/**
 * it is the view of a single award
 */
router.get("/:id",(req,res)=>{
    console.log("award: "+req.params.id);
    res.send("award "+req.params.id);
})

module.exports = router
