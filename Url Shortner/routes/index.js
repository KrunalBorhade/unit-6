const express = require("express");

const router = express.Router();

const url = require("../models/url");

router.get('/:code', async(req,res) => {
    try{
        const URL = await url.findOne({ urlCode: req.params.code });
        if(URL){
            return res.redirect(URL.longUrl);
        }
        else{
            return res.status(404).json('No url found');
        }
    }
    catch(err){
        console.error(err);
        res.status(500).json('Server error');
    }
})

module.exports = router;