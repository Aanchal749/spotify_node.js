const mongoose =require("mongoose");


const musicSchema = new mongoose.Schema({
    uri:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    artist:{
        type:mongoose.Schema.Types.ObjectID,
        ref:"user",
        required:String
    }
    })

    const musicModel = mongoose.model("music",musicSchema)

    module.exports=musicModel;