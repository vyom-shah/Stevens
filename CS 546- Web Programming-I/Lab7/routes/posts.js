const express=require("express");
const router=express.Router();
const data=require("../data");
const postsData=data.posts;

router.get("/",async(req,res)=>{
    try{
        const posts=await postsData.getAll();
        res.json(posts);
    }
    catch(e)
    {
        res.status(500).json({error:e});
    }
    
});
router.post("/",async(req,res)=>{
    const postReqData=req.body;
    try{
        const {title,author,content}=postReqData
        const postData=await postsData.create(title,author,content);
        res.status(200).json(postData)
    }
    catch(e)
    {
        res.status(400).json({error:e});
    }
});
router.get("/:id",async(req,res)=>{
    try{
        const post=await postsData.get(req.params.id);
        res.status(200).json(post)
    }
    catch(e)
    {
        res.status(404).json({error:e})
    }
});
router.put("/:id",async(req,res)=>{
    try{
        const postData=req.body;
        const {newTitle,newContent}=postData
        const postt = await postsData.updates(req.params.id,newTitle,newContent)
        res.json(postt)
    }
    catch(e)
    {
        if(e=='0') res.status(404).json({error:'No post found with that id'});
        else res.status(400).json({error:e})
    }
});
router.delete("/:id",async(req,res)=>{
    try{
        const post=await postsData.remove(req.params.id)
        res.json(post)
    }
    catch(e)
    {
        res.status(404).json({error:e})
   }
});
module.exports=router;