const express = require("express");
const router = express.Router();
const data = require("../data");
const animalsData = data.animals;

router.post("/",async(req,res)=>{
    const animals=req.body;
    console.log(animals);
   try{
        // const {name,type}=animals
        const addAnimal=await animalsData.create(animals.name,animals.animalType);
        res.status(200).json(addAnimal);
    }
    catch(e)
    {
        res.status(400).json({error:e});
    }

});
router.get("/",async (req,res)=>{
    try{
        const animals=await animalsData.getAll();
        res.json(animals);
    }
    catch(e)
    {
        res.status(500).json({error:e});
        
    }
});


router.get("/:id",async(req,res)=>{
    try{
        const animal=await animalsData.get(req.params.id);
        res.status(200).json(animal)
    }
    catch(e)
    {
        res.status(404).json({error:e})
    }
});
router.put("/:id",async(req,res)=>{
    try{
        const animalData=req.body;
        //const {newData,newType} = animalData
        if(!animalData) throw "missing body"
        if(!req.params.id) throw "Id params missing"
        const animal=await animalsData.update(req.params.id,animalData.newName,animalData.newType)
        res.json(animal)
    }   
    catch(e)
    {
        if(e=='0') res.status(404).json({error:"No Animal found with that id"})
        else res.status(400).json({error:e});
    }
});

router.delete("/:id",async(req,res)=>{
    try{
        let deleteanimal=await animalsData.remove(req.params.id)
        res.json(deleteanimal)
    }
    catch(e)
    {
        res.status(404).json({error:e});
    }
})
module.exports=router;