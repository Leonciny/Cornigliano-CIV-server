/**
 * ROUTER OF USERS
 */
const express = require("express")
const router = express.Router()
/**
 * index of users contains all users 
 */
router.get("/",(req: any, res: { send: (arg0: string) => void; })=>{
    console.log("lista users");
    res.send("lista users!");
})
/**
 * this is the view of a single user 
 */
router.get("/:id",(req: { params: { id: string; }; }, res: { send: (arg0: string) => void; })=>{
    console.log("user: "+req.params.id);
    res.send("user "+req.params.id);
})

module.exports = router

