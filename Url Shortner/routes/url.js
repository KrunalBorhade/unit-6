const express = require("express");
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');
const url = require("../models/url");

router.post('/shorten', async(req,res) => {
    const { longUrl } = req.body;
    const baseUrl = config.get('baseUrl');

    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json('invalid base url');
    }

    
    const urlCode = shortid.generate();


    if(validUrl.isUri(longUrl)){
        try{
            let URL = await url.findOne({ longUrl });
            if(URL)
            {
                res.json(URL)
            }
            else{
                const shortUrl = baseUrl + "/" + urlCode;

                URL = new url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });

                await URL.save();
                res.json(URL);
            }
        }
        catch(err){
            console.error(err);
            res.status(500).json("Server error");
        }
    }
    else{
        res.status(401).json("Invalid long url");
    }
})


module.exports = router;