import express from "express";
import { add, detaill, List, remove, update } from "../controllers/Products";
import { addCate,read} from "../controllers/Category";
const router = express.Router();
//router
router.get("/tin-tuc", (req, res, next) => {
  console.log("home Page");
  res.send("<P>trang chủ</p>");
});
router.get("/products",List);
router.get("/product/:id",detaill);
router.post("/Add/prduct",add)  
router.delete("/products/:id",remove)
router.put("/products/:id",update)
router.post("/category",addCate)
router.get("/category/:id",read)
export default router;
