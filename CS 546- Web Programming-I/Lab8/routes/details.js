const express=require("express")
const router=express.Router()
const axios=require("axios")
router.get("/:id",async(req,res)=>{
    let id=req.params.id;
    let title="Person Found"
    try{
        let people={}
        let peopledata=await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json")
        if(peopledata.status==200)
        {
            let data=peopledata.data;
            for(let i in data)
            {
                if(data[i].id==Number(id))
                {
                    people=data[i]
                    break;
                }
            }
        }
        else
            throw " couldn't find the details"
        res.render("details/details",{people:people,title:title})
    }
    catch(e)
    {
        res.status(404).json({error:e});
    }
})
module.exports=router