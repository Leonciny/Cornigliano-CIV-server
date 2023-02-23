import express from "express";

/**
 * ROUTER OF AWARDS
 */

const router = express.Router()
//index
router.get("/",( req, res)=>{
    res.send("dio bastardo schifoso animale")
})
//store
router.post("/",(req, res)=>{
})

module.exports = router
