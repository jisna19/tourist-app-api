const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "areaCode":String,
        "description":String,
        "bestTime":String
    }
)

let touristsmodel=("tourists",schema)
module.exports={touristsmodel}