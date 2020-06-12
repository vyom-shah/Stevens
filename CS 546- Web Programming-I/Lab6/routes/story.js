const express = require('express');
const router = express.Router();

const storyy={
    "storyTitle": "Life in the valley",
    "story": "For generations the people of the forest had huddled around the flickering fireside telling stories and singing songs \n about their life of abundance in the valley. How the land’s temperate \n fertility had sheltered and nurtured the scattered tribes that made their homes along the banks of the river. How children played \n timelessly in the lush glades while the women gathered fruits and the men ventured forth with spears and nets in search of food."
  }
router.get('/',(req, res) => {
    res.json(storyy);
});
module.exports=router;