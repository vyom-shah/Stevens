const Users=require('../data/users')
const bcrypt=require('bcryptjs')
const session=require('express-session')
var sessionChecker=(req,res,next)=>{
    if(req.session&&req.cookies.AuthCookie){
        if(req.session&&req.cookies.AuthCookie){
            next()
        }
    } else{
        res.render('login',{message:"Not logged in"})
    }
};
const constructorMethod=app=>{
    app.get('/',sessionChecker,(req,res)=>{
        res.redirect('/private')
        return
    })
    app.post('/login',(req,res)=>{
        let username=req.body.username
        let password=req.body.password
        if(username&&password){
            for(let user of Users){
                if(user.username==username){
                    if(bcrypt.compareSync(password,user.hashedPassword)){
                        
                        req.session.user={"username":user.username,"password":user.hashedPassword}
                        res.redirect('/private')
                        return
                    }
                }
            }
            res.status(401).render('login',{message:"credentials doesn't match"})
        }
    })
    app.get('/private',sessionChecker,(req,res)=>{
       
//        let ser=req.session
//        if(ser.username) {
//            console.log(req.session.user)
            var u=req.session
            var us=u.user
            var username=us.username
            for(let user of Users){
                if(user.username==username){
                    var people={
                        _id:user._id,
                        firstName:user.firstName,
                        lastName:user.lastName,
                        username:user.username,
                        profession:user.profession,
                        bio:user.bio
                    }
                    break;
                }
            }
            res.render('details',{people:people})
//        }else {
//            res.render('login')
//    }

        return
    })
    app.get('/loggedOut',(req,res)=>{
        if(req.session.user){
            req.session.destroy()
            res.clearCookie('AuthCookie')
            res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
            res.render('loggedOut',{message:"You are logged out"})
        }
    })
    
}
module.exports=constructorMethod