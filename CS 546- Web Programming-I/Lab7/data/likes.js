const mongoCollections=require("./collections");
const posts=mongoCollections.posts;
const animals=mongoCollections.animals;

const like = async function like(id,postId)
{
    if(!id || id.length == 0) 
        throw "You must provide an id to search for";
    if(id.constructor !== String)
        throw "id not of proper type";       
    if(id == undefined || id == null) 
        throw "id is undefined or null";
    if(!postId || postId.length == 0) 
        throw "You must provide an id to search for";
    if(postId.constructor !== String)
        throw "id not of proper type";       
    if(postId == undefined || postId == null) 
        throw "id is undefined or null";
    
    let animalsCollection=await animals();
    let postsCollection=await posts();
    //let animallss=await animalsCollection.findOne({_id:id})
    let posttss=await postsCollection.findOne({_id:postId})
    let pTitle=posttss.title
    let pId=posttss._id
    postJson={
        id:pId,
        title:pTitle
    }
    let findAndUpdate = await animalsCollection.findOneAndUpdate(
        {_id:id},
        {$addToSet:{likes:postJson}},
        //https://docs.mongodb.com/manual/reference/operator/update/addToSet/
        {returnOriginal:false}
    )
    return findAndUpdate
  
}
const dislike = async function dislike(id){
    if(!id || id.length == 0) 
        throw "You must provide an id to search for";
    if(id.constructor !== String)
        throw "id not of proper type";       
    if(id == undefined || id == null) 
        throw "id is undefined or null";
    
    let animalsCollection=await animals();
    let postsCollection=await posts();    
    //let animallss=await animalsCollection.findOne({_id:id})
    let posttss=await postsCollection.findOne({_id:postId})
    let pTitle=posttss.title
    let pId=posttss._id
    postJson={
        id:pId,
        title:pTitle
    }
    let findAndUpdate = await animalsCollection.findOneAndUpdate(
        {_id:id},
        {$pull:{likes:postJson}},
        {returnOriginal:false}
    )
    return findAndUpdate


}
module.exports={
    like,
    dislike
}
