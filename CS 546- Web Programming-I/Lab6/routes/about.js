const express = require('express');
const router = express.Router();

const aboutt={
        "name":"Vyom Amitkumar Shah",
        "cwid":"10446209",
        "biography":"Learning since then the idea to pursue my career in the field of computer science emerged.",
        "favourite shows":["F.R.I.E.N.D.S","Suits","House of Cards","The Blacklist"],
        "hobbies":["Watching TV Series","Photography","Playing Table Tennis","Reading Books"]
    
}
router.get('/', (req, res)=>{
    res.json(aboutt);
});
module.exports=router;