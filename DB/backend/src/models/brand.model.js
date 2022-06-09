const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema(
    {
        name:{type:String, required:true},
        products_Id:{type:mongoose.Schema.Types.ObjectId,ref:"product"}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const brand = mongoose.model("brands", brandSchema)

module.exports = brand