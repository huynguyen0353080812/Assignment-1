import mongoose,{ ObjectId } from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type: String,
    },
    price:{
        type: Number
    },
    category:{
        type: ObjectId,
        ref:'category'
    }
},{timestamps:true});
export default mongoose.model('Productss',productSchema) 