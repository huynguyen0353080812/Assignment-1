import Products from "../models/product";
export const List = async (req, res) => {
  try {
    const data = await Products.find();
    res.json(data);
  } catch (error) {
    res.status(400).json({
      error: "Không có sản phẩm nào",
    });
  }
};
export const detaill = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const product = await Products.findOne({ _id: id });
    res.json(product);
  } catch (error) {
    res.status(400).json({
      error: "không tìm thấy sản phẩm",
    });
  }
};

export const remove = (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id);
    const prduct = data.filter((item) => item.id !== Number(id));
    res.json(prduct);
  } catch (error) {
    res.status(400).json({
      error: "không tìm thấy sản phẩm",
    });
  }
};
export const update = async (req, res) => {
  try {
    const product = await new Products.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
  } catch (error) {
    res.status(400).json({
      error: "không tìm thấy sản phẩm",
    });
  }
};
export const add = async (req, res) => {
  try {
    const product = await new Products(req.body).save();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      error: "Không thêm được sản phẩm",
    });
  }
};
