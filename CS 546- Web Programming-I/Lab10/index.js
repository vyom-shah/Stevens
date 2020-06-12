const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const exphbs=require("express-handlebars")
const configRoutes=require("./routes")
const cookieParser=require("cookie-parser")
const session=require("express-session")
const path=require("path")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cookieParser())
const static=express.static(path.join(__dirname,'/public'))
app.use("/public",static)
app.engine("handlebars",exphbs({defaultLayout:"main"}))
app.set("view engine","handlebars")
app.use(session({
    key: 'AuthCookie',
    secret: 'upintheair',
    resave: false,
    saveUninitialized: false
  }))
app.use('*',(req,res,next)=>{
    console.log("[%s]: %s %s (%s)",
    new Date().toUTCString(),
    req.method,
    req.originalUrl,
    `${req.session.user ? "" : "Non-"}Authenticated User`
    )
    next()
})
configRoutes(app)
app.use((req,res,next)=>{
    res.status(404).json({error:"Not found"})
})
app.listen(3000,()=>{
    console.log("Server on!")
})