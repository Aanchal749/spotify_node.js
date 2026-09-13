const mongoose = require("mongoose");

async function connectdb(){
    try{
        await mongoose.connect(process.env.MONGO_URL)
    console.log("connected to the database")
    } catch (error){
        console.error("database connectio error:",error)
    }
}

module.exports = connectdb;