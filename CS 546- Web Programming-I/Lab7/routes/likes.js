const express=require("express");
const router=express.Router();
const data=require("../data");
const likesData=data.likes;

router.post("/:id",async(req,res)=>{
    try{
        const likeThePost= await likesData.like(req.body.animalId,req.query.postId)
        res.json(likeThePost);
    }catch(e){
        res.status(404).json({error:e});
    }    
});
router.delete("/:id",async(req,res)=>{
    try{
        const dislikedThePost=await likesData.dislike(req.body.animalId,req.query.postId)
        res.json(dislikedThePost);
    }catch(e){
        res.status(404).json({error:e});
    }
});
module.exports=router;