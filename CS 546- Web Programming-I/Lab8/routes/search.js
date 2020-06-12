const express=require("express")
const router=express.Router()
const axios=require("axios")
router.post("/search",async(req,res)=>{
    let personName=req.body["personName"];
    if(personName){
        let title="People Found"
        let people=new Array();
        let peopledata=await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json")
        if(peopledata.status==200)
        {
            let count=0;
            let data=peopledata.data;
            for(let i in data)
            {
                //https://stackoverflow.com/questions/32968705/how-to-check-lowercase-in-indexof
                if((data[i].firstName.toLowerCase()).indexOf(personName.toLowerCase()) !== -1 || (data[i].lastName.toLowerCase()).indexOf(personName.toLowerCase()) !== -1)
                {
                    people.push(data[i]);
                    count++;
                    if(count>=20)
                    {
                        break;
                    }
                }
            }
            res.render("details/search",{people:people,title:title,personName:personName})
        }
        else{
            res.status(400).render("details/error",{error:{status:400,message:"Not Found"}})
        }
    }
})
module.exports=router