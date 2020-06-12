const express = require("express")
const app=express()
const configRoutes=require("./routes")
const static=express.static(__dirname+"/public")
app.use("/Public",static)
configRoutes(app)
app.listen(3000,()=>{
    console.log("Server On!!!")
})