
import express from "express";
const router = express.Router()
//index
router.get("/",( req, res)=>{
    res.send("dio bastardo schifoso animale")
})
//store
router.post("/",(req, res)=>{
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

