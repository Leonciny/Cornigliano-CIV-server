/**
 * ROUTER OF AWARDS
 */
const express = require("express")
const router = express.Router()
/**
 * index of awards contains all awards available and not
 */
router.get("/",(req: any, res: { send: (arg0: string) => void; })=>{
    console.log("lista awards");
    res.send("lista awards!");
})
/**
 * it is the view of a single award
 */
router.get("/:id",(req: { params: { id: string; }; }, res: { send: (arg0: string) => void; })=>{
    console.log("award: "+req.params.id);
    res.send("award "+req.params.id);
})

module.exports = router
