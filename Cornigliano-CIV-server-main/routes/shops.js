/**
 * ROUTER OF SHOPS
 */
const express = require("express")
const router = express.Router()
/**
 * index of shops contains all shops 
 */
router.get("/",(req,res)=>{
    console.log("lista negozi");
    res.send("lista negozi!");
})
/**
 * it is the view of a single shop
 */
router.get("/:id",(req,res)=>{
    console.log("negozio: "+req.params.id);
    res.send("negozio "+req.params.id);
})

module.exports = router

