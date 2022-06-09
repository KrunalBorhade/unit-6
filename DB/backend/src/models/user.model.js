const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name:{type:String, required:true},
        age:{type:Number, required:true},
        address:[
            {
                line_1:{type:String, required:true},
                line_2:{type:String, required:true},
                city:{type:String, required:true},
                country:{type:String, required:false},
                type:{type:String, required:false}
            }
        ]
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const user = mongoose.model("users",userSchema)

module.exports = user