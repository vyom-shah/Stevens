const mongoCollections=require("../mongoCollections");
const animals = mongoCollections.animals;
const { ObjectId } = require("mongodb");

module.exports = {
    async create(name,animalType){
        const animalCollection = await animals();
        // if(arguments.length !=2 )
        //     throw "There must be two arguments"; 
        if(!name || name.length == 0) 
            throw "You must provide a name for animal";
        if(name.constructor !== String)
            throw "Name not of proper type";
        if (name == null || name == undefined)
            throw "The name string is null or undefined";
        // if(name.length == 0)
        //     throw "The length of name is zero"
        if(!animalType||Array.isArray(animalType) || animalType.length==0)
            throw "You must provide an array of Animal type";
        if (animalType == null || animalType == undefined)
            throw "The animalType string is null or undefined";
        
        let newanimal = {
            name: name,
            animalType: animalType
        };
        const insertInfo = await animalCollection.insertOne(newanimal);
        if(insertInfo.insertedCount === 0) 
            throw "Could not insert animal";

        return await animalCollection.findOne({
            _id: ObjectId(insertInfo.insertedId)
        });
    },

    async getAll(){
        const animalCollection = await animals();
        const gettall = await animalCollection.find({}).toArray();
        return gettall;
    },

    async get(id){
        if(!id || id.length == 0) 
            throw "You must provide an id to search for";
        if(id.constructor !== String)
            throw "id not of proper type";       
        if(id == undefined || id == null) 
            throw "id is undefined or null"; 

        var newid = new require('mongodb').ObjectID(id);
        const animalCollection = await animals();
        const animallss = await animalCollection.findOne({_id:newid});
        if(animallss == null)
            throw "No entry with that id";

        return animallss;
    },

    async remove(id){
        if(!id || id.length==0) 
            throw "You must provide an id to search for";
        if(id.constructor !== String)
            throw "id not of proper type";       
        if(id == undefined || id==null) 
            throw "id is undefined or null"; 
        
        const animalCollection = await animals();
        var newid = new require('mongodb').ObjectID(id);
        
        const todelete= await this.get(id);
        const deletionInfo = await animalCollection.removeOne({ _id : newid});
        if(deletionInfo == null)
            throw "No animal exists with that id exists";
        if(deletionInfo.deletedCount == 0)
        {
            throw "Could not delete successfully";
        }
        else{
            return todelete;
        }    
    },
    
    async rename(id,newName){
        // if(arguments.length !=2 )
        //     throw "There must be two arguments"; 
        if (!id || id.length==0) 
            throw "You must provide an id to search for";
        if(id.constructor !== String)
            throw "id not of proper type";       
        if(id == undefined || id == null)
            throw "id is undefined or is null";
        if(!newName || newName.length == 0) 
            throw "You must provide a name to search for";
        if(newName.constructor !== String)
            throw "newName not of proper type";       
        if(newName == undefined || id == null)
            throw "new name is undefined or is null";

        const animalCollection = await animals();
        let newid = new require('mongodb').ObjectID(id);
        const updatedAnimal={
            $set: { name: newName }
        };
        const updatedInfo = await animalCollection.updateOne({_id:newid},updatedAnimal);
        if(updatedInfo.modifiedCount == 0)
        {
            throw "Could not update successfully";
        }
        return await animalCollection.findOne({
            _id: newid
        });
    }
};