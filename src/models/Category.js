import mongoose from "mongoose";

const CategoriesSchema = mongoose.Schema({
    name:{
        type: String,
    }
},{timestamps:true});
export default mongoose.model('Categorie',CategoriesSchema) 