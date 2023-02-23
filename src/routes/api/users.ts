/**
 * ROUTER OF USERS
 */
import express from "express";
const router = express.Router()

//store
router.post("/",(req, res)=>{
    res.send("dio bastardo schifoso animale")
})
//show
router.get("/:id",(req, res)=>{
})

//update
router.put("/:id",(req, res)=>{
})

//delete
router.delete("/:id",(req, res)=>{
})

module.exports = router

