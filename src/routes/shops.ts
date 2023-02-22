/**
 * ROUTER OF SHOPS
 */
import express from "express";
const router = express.Router()
/**
 * index of shops contains all shops 
 */
router.get("/",(req: any, res: { send: (arg0: string) => void; })=>{
    console.log("lista negozi");
    res.send("lista negozi!");
})
/**
 * it is the view of a single shop
 */
router.get("/:id",(req: { params: { id: string; }; }, res: { send: (arg0: string) => void; })=>{
    console.log("negozio: "+req.params.id);
    res.send("negozio "+req.params.id);
})

module.exports = router

