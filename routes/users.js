/**
 * ROUTER OF USERS
 */
const express = require("express")
const router = express.Router()
/**
 * index of users contains all users 
 */
router.get("/",(req,res)=>{
    console.log("lista users");
    res.send("lista users!");
})
/**
 * this is the view of a single user 
 */
router.get("/:id",(req,res)=>{
    console.log("user: "+req.params.id);
    res.send("user "+req.params.id);
})

module.exports = router

