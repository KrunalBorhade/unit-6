const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name:{type:String, required:true},
        brand_Id:{type:mongoose.Schema.Types.ObjectId,ref:"brand"}

    },
    {
        timestamps:true,
        versionKey:false
    }
)

const product = mongoose.model("products", productSchema)

module.exports = product