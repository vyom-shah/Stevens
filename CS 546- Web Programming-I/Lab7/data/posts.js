const mongoCollections = require("./collections");
//var mongodb = require('mongodb');
const posts = mongoCollections.posts;
const animals = mongoCollections.animals;
//const ObjectId = require('mongodb').ObjectId

const create = async function create(title, author, content) {
    if (!title || title.length == 0)
        throw "You must provide a title for animal";
    if (title.constructor !== String)
        throw "title not of proper type";
    if (title == null || title == undefined)
        throw "The title is null or undefined";
    if (!author || author.length == 0)
        throw "You must provide an author to create";
    if (author.constructor !== String)
        throw "author not of proper type";
    if (author == undefined || author == null)
        throw "author is undefined or null";
    if (!content || content.length == 0)
        throw "You must provide a content to create";
    if (content.constructor !== String)
        throw "content not of proper type";
    if (content == undefined || content == null)
        throw "content is undefined or null";

    const animalscollection = await animals();
    author = new require('mongodb').ObjectID(author);
    const postscollection = await posts();
    let newPosts = {
        title: title,
        author: author,
        content: content
    };
    const insertInfo = await postscollection.insertOne(newPosts);
    if(insertInfo.insertedCount == 0) throw "Not successful";

    let animallss = await animalscollection.findOne({ _id: author });
    authorsName = animallss.name;

    let answer = {
        "id": author,
        "name": authorsName
    };
    insertInfo.ops[0].author = answer;
    return insertInfo.ops[0]
}

const getAll = async function getall() {
    //const animalscollection = await animals();
    const postscollection = await posts();
    const gettall = await postscollection.find({}).toArray();
    return gettall;
}

const get = async function get(id) {
    if (!id || id.length == 0)
        throw "You must provide an id to search for";
    if (id.constructor !== String)
        throw "id not of proper type";
    if (id == undefined || id == null)
        throw "id is undefined or null";
    //const animalscollection = await animals();
    const postscollection = await posts();
    id = new require('mongodb').ObjectID(id);
    let postss = await postscollection.findOne({ _id: id });
    
    return await postss;

}

const remove = async function remove(id) {
    if (!id || id.length == 0)
        throw "You must provide an id to search for";
    if (id.constructor !== String)
        throw "id not of proper type";
    if (id == undefined || id == null)
        throw "id is undefined or null";
    let newid = new require('mongodb').ObjectID(id);
    const postscollection = await posts();
    let post = await this.get(id);
    const deletionInfo = await postscollection.deleteOne({ _id: newid })
    if (deletionInfo.deletedCount === 0) {
        throw "Cannot delete"
    }

    console.log(deletionInfo.deletedCount);

    let answer = {
        deleted: "true",
        data: post
    }
    return answer
}

const updates = async function updates(id, newTitle, newContent) {
    if (!id || id.length == 0)
        throw "You must provide an id to search for";
    if (id.constructor !== String)
        throw "id not of proper type";
    if (id == undefined || id == null)
        throw "id is undefined or is null";
    // if (!newTitle || newTitle.length == 0)
    //     throw "You must provide a title to search for";
    if (newTitle.constructor !== String)
        throw "title not of proper type";
    if (newTitle == undefined && newContent == undefined )
        throw "new title is undefined or is null";
    // if (!newContent || newContent.length == 0)
    //     throw "You must provide a content to search for";
    if (newContent.constructor !== String)
        throw "content not of proper type";
    if (newTitle==null || newContent == null)
        throw "new content is undefined or is null";

    id = new require('mongodb').ObjectID(id);
    const postCollection = await posts();
    //let postsss = await postCollection.findOne({ _id: id })
    let updateInfo
    //console.log("Hello1")
    if (newTitle && newContent) {
      //  console.log("Hello1234")
        updateInfo = await postCollection.findOneAndUpdate(
            { _id: id },
            { $set: { title: newTitle, content: newContent } },
            { returnOriginal: false }
        )
    }
    else if (newTitle) {
        updateInfo = await postCollection.findOneAndUpdate(
            { _id: id },
            { $set: { title: newTitle } },
            { returnOriginal: false }
        )
    }
    else if (newContent) {
        updateInfo = await postCollection.findOneAndUpdate(
            { _id: id },
            { $set: { content: newContent } },
            { returnOriginal: false }
        )
    }
    if (!updateInfo.ok) {
        throw "Cannot update"
    }
    result = updateInfo.value
    // const animalCollection = await animals()
    // let animalresult = await animalCollection.findOne({ _id: result.author });
    // authorsname = animalresult.name;
    // let authorJson = {
    //     "_id": result.author,
    //     "name": authorsName
    // }
    // result.author = authorJson
    return result;

}
module.exports = {
    create,
    getAll,
    get,
    remove,
    updates
}