import Categories from "../models/Category"
import product from "../models/product"
export const addCate = async (req,res)=>{
    try {
        const Cate =await new Categories(req.body).save()
        res.json(Cate)
    } catch (error) {
        res.status(400).json({
            error: 'Không thêm được danh mục'
        })
    }
}
export const read = async (req, res) => {
    try {
        const category = await Categories.findOne({_id: req.params.id}).exec();
        const products = await product.find({category: category}).populate('category').select("-category").exec();
        res.json({
            category,
            products
        });
    } catch (error) {
        res.status(400).json({
            error: 'Không tìm được danh mục'
        })
    }
}