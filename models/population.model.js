import mongoose from "mongoose";

const populationSchema=mongoose.Schema({
    "Country Name":{type:String,required:true},
    "Country Code":{type:String,required:true},
    Year:{type:String,required:true},
    Value:{type:String,required:true},
})


const populationModel=mongoose.model('mydata',populationSchema)


export default populationModel