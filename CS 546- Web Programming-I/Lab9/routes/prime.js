const express=require("express")
const router=express.Router()
var path=require('path')

router.get("/",async (req,res)=>{
    try{
        res.sendFile(path.resolve("Public/index.html"))
    }catch(e){
        console.log("Exception arised",e)
        res.json({error:e})
    }
})
module.exports=router;