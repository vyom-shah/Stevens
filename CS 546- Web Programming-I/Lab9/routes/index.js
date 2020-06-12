const prime=require("./prime")
const constructMethod=app=>{
    app.use("/",prime)
}
module.exports=constructMethod