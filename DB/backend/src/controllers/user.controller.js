const express = require('express')
const router = express.Router();
const User = require("../models/user.model")

router.get("/",async(req,res)=>{
    try {
        const user = await User.find().lean().exec()

        return res.status(200).send({user})
    } catch (err) {
        res.status(500).send({message: err.message});
    }
})


router.post("/create",async(req,res)=>{
    try {
        const user = await User.create(req.body)
        return res.status(201).send(user)
    } catch (err) {
        return res.status(500).send({message:err.message});
    }
})

router.get("/:id",async(req,res)=>{
    try {
            const user = await User.findById(req.params.id).lean().exec()

            return res.status(200).send({user})
    } catch (err) {
        return res.status(500).send({message:err.message});
    }
})

router.patch("/:id/edit",async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()

        return res.status(200).send({user})
} catch (err) {
    return res.status(500).send({message:err.message});
}
})

router.get("/:id/addresses",async(req,res)=>{
    try {
            const user = await User.findById(req.params.id).lean().exec()

            return res.status(200).send(user.address)
    } catch (err) {
        return res.status(500).send({message:err.message});
    }
})

router.patch("/:id/addresses/create",async(req,res)=>{
    try {
        const add_address = await User.updateOne({_id:req.params.id},{$push:{address:req.body}})
        if(add_address.acknowledged===true){
            const user = await User.findById(req.params.id).lean().exec()
            return res.status(200).send(user.address)
        }
    } catch (err) {
        return res.status(500).send({message:err.message});
    }
})

router.patch("/:id/addresses/idx/edit",async(req,res)=>{
    try {
        const update_address = await User.updateOne({_id:req.params.id,"address._id":req.params.idx},{$set:{"address.$":req.body}})
        if(update_address.acknowledged===true){
            const user = await User.findById(req.params.id).lean().exec()
            return res.status(200).send(user.address)
        }
    } catch (err) {
        return res.status(500).send({message:err.message});
    }
})





module.exports = router