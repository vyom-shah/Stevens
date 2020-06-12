const mongoCollections=require("./collections");
var mongodb = require('mongodb');
const animals=mongoCollections.animals;
const posts=mongoCollections.posts;

const create=async function create(name,animalType){
    
    const animalCollection = await animals();
    if(!name || name.length == 0) 
        throw "You must provide a name for animal";
    if(name.constructor !== String)
        throw "Name not of proper type";
    if (name == null || name == undefined)
        throw "The name string is null or undefined";
    if(animalType.constructor !== String)
        throw "Type not of proper type";
    if (animalType == null || animalType == undefined)
        throw "The animalType string is null or undefined";
    
    let newanimal = {
        name: name,
        animalType: animalType,
        likes:[]
    };
    const insertInfo = await animalCollection.insertOne(newanimal);
    if(insertInfo.insertedCount === 0) 
        throw "Could not insert animal";

    const postCollection=await posts();
    const postsArrayWhereId=await postCollection.find({_id:insertInfo.ops[0]._id}).toArray();
    insertInfo.ops[0].posts=postsArrayWhereId;
    return insertInfo.ops[0]
}
const getAll=async function getAll(){
    const animalCollection = await animals();
    const postCollection=await posts();

    const gettall = await animalCollection.find({}).toArray();
    for(let animal of gettall){
        let posted=await postCollection.find({author:animal._id}).project({title:1}).toArray()//got from stack overflow
        animal.posts=posted;
    }
    return gettall;
}
const get=async function get(id){
    if(!id || id.length == 0) 
        throw "You must provide an id to search for";
    if(id.constructor !== String)
        throw "id not of proper type";       
    if(id == undefined || id == null) 
        throw "id is undefined or null"; 

    var newid = new require('mongodb').ObjectID(id);
    const animalCollection = await animals();
    const postCollection=await posts();
    const animallss = await animalCollection.findOne({_id:newid});
    if(animallss == null)
        throw "No entry with that id";
    const postss = await postCollection.find({author:newid},{_id:1,title:1}).toArray();
    animallss.posts=postss;
    return animallss;
}

const remove=async function remove(id){
    const todelete= await this.get(id);
    if(!id || id.length==0) 
        throw "You must provide an id to search for";
    if(id.constructor !== String)
        throw "id not of proper type";       
    if(id == undefined || id==null) 
        throw "id is undefined or null"; 
    
    const animalCollection = await animals();
    
    const postsCollection=await posts();
    
    var newid = new require('mongodb').ObjectID(id);
    
    let animalcheck = await animalCollection.findOne({_id:newid})
    if(animalcheck===null) throw "0";
    const deletionInfo = await animalCollection.removeOne({ _id : newid});
    if(deletionInfo.deletedCount == 0)
    {
        throw "Could not delete successfully";
    }
    const postremoved= await postsCollection.removeMany({author:newid})
    if(postremoved == null)
        throw "No posts exists with that id";
    // if(postremoved.deletedCount == 0)
    // {
    //     throw "Could not delete successfully";
    // }

    let answer = {
        deleted: "true",
        data: todelete
    }
    return answer;      
}

const update = async function update(id,newName,newType){
    if (!id || id.length==0) 
        throw "You must provide an id to search for";
    if(id.constructor !== String)
        throw "id not of proper type";       
    if(id == undefined || id == null)
        throw "id is undefined or is null";
    if(!newName || newName.length == 0) 
        throw "You must provide a name to search for";
    if(newName.constructor !== String)
        throw "name not of proper type";       
    if(newName == undefined && newType == undefined)
        throw "newName and newTpye is undefined or is null";
    if(!newType || newType.length == 0) 
        throw "You must provide a Type to search for";
    if(newType.constructor !== String)
        throw "newType not of proper type";       
    if(newName == null || newType == null)
        throw "nameName or newType is undefined or is null";

    const animalCollection = await animals();
    let newid = new require('mongodb').ObjectID(id);
    //let animalcheck=await animalCollection.findOne({_id:newid});
    let updateInfo;
    if(newName && newType)
    {
        updateInfo = await animalCollection.findOneAndUpdate(
            {_id:newid},
            {$set : {name:newName,animalType:newType}},
            {returnOriginal:false}
        )
    }
    else if(newName)
    {
        updateInfo = await animalCollection.findOneAndUpdate(
            {_id:newid},
            {$set : {name:newName}},
            {returnOriginal:false}
        )    
    }
    else if(newType)
    {
        updateInfo=await animalCollection.findOneAndUpdate(
            {_id:newid},
            {$set:{type:newType}},
            {returnOriginal:false}
        )    
    }
    if(!updateInfo.ok){
        throw "Could not Update"
    }
    return updateInfo.value;
}
module.exports={
    create,
    getAll,
    get,
    remove,
    update
}