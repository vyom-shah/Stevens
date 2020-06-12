const search=require("./search")
const details=require("./details")

const constructorMethod=app=>{
    app.get("/",(req,res)=>{
        let title="People Finder"
        res.render("details/home",{title})
    })
    app.post("/search",search)
    app.use("/details",details)
    app.use("*",(req,res)=>{
        res.status(404).render("details/error",{error:{status:404,message:"Error 404! Page not found"}})
    })
}
module.exports=constructorMethod;