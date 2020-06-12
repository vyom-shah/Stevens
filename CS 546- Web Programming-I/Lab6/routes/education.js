const express = require('express');
const router = express.Router();
const educationn=
[
    {
        "School Name":"Stevens Institute of Technology",
        "degree":"Computer Science",
        "favouriteClass":"CS-546: Web Programming",
        "favouriteMemory":"Sitting in library and studying for hours"
    },
    {
        "School Name":"G H Patel College of Engineering and Technology",
        "degree":"Computer Engineering",
        "favouriteClass":"Algorithms",
        "favouriteMemory":"The best in class and projects i ever did"

    },
    {
        "School name":"Anandalaya Educational Society",
        "degree":"High school diploma",
        "favouriteClass":"Chemistry",
        "favouriteMemory":"The organic chemistry part was the best"
    }
]
router.get('/',(req, res) => {
    res.json(educationn);
});
module.exports=router;