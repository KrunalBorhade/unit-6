const express = require('express')
const router = express.Router();
const Brand = require("../models/brand.model")

router.get("/",async(req,res)=>{
    try {
        const brand = await Brand.find().lean().exec()

        return res.status(200).send({brand})
    } catch (err) {
        res.status(500).send({message: err.message});
    }
})

router.post("/create",async(req,res)=>{
    try {
        const brand = await Brand.create(req.body)
    } catch (err) {
        return res.status(500).send({message:err.message});
    }
})

router.get("/:id",async(req,res)=>{
    try {
            const brand = await Brand.findById(req.params.id).lean().exec()

            return res.status(200).send({brand})
    } catch (err) {
        return res.status(500).send({message:err.message});
    }
})

router.patch("/:id/edit",async(req,res)=>{
    try {
        const brand = await Brand.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()

        return res.status(200).send({brand})
} catch (err) {
    return res.status(500).send({message:err.message});
}
})



module.exports = router