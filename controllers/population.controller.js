import populationModel from "../models/population.model.js"


class populationWorld{
    static  getAllData=async(req,res)=>{
        const data= await populationModel.find()
        res.send(data)

    }

    static createData=async(req,res)=>{
        // console.log(req.body)
        const{CountryName,CountryCode,Year,Value}=req.body
        // console.log(CountryName,CountryCode,Year,Value)
          
        const data=new populationModel({
            "Country Name":CountryName,
            "Country Code":CountryCode,
            Year:Year,
            Value:Value
        })
        const result=await data.save();

        res.send(result)
    }

    static getOneData=async(req,res)=>{
        const Id=req.params.id
        console.log(Id)
         
        const result=await populationModel.findById({_id:Id})
        //  console.log(result)
        res.send(result)
    }

    static deleteData=async(req,res)=>{
        console.log(req.params.id)
        const result=await populationModel.deleteOne({_id:req.params.id})
        res.send(result)
    }

    static updateData=async(req,res)=>{
        console.log(req.params.id)
        const result=await populationModel.findOneAndUpdate({_id:req.params.id},{"Country Name":req.body.CountryName,"Country Code":req.body.CountryCode,Year:req.body.Year,Value:req.body.Value})
        res.send(result)
    }
}


export default populationWorld;