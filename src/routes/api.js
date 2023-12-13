const express =  require("express");
const router = express.Router()
const productController = require("../controllers/productController")

// Product

router.get("/product-brand-list",productController.productBrandList);
router.get("/product-category-list",productController.productCategoryList);
router.get("/product-slider-list",productController.productSliderList);
router.get("/product-brand-by-list/:BrandID",productController.productByBrandList);
router.get("/product-category-by-list/:CategoryID",productController.productByCategoryList);
router.get("/product-similar-by-list/:CategoryID",productController.productBySimilerList);
router.get("/product-keyword-by-list/:Keyword",productController.productByKeyword);
router.get("/product-remark-list/:remark",productController.productByRemarkList);
router.get("/product-details/:productID",productController.productDetails);
router.get("/product-review-list/:productID",productController.productReviewList);
router.post("/create-product-review-list/:productID",productController.productReviewCreate);



module.exports = router