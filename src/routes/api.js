const express =  require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware")

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

// User

router.get("/user-otp/:email",userController.userOtp);
router.get("/user-verify/:email/:otp",userController.userVerifyLogin);
router.get("/logout-profile", authMiddleware, userController.userLogout);
router.post("/create-profile" , authMiddleware, userController.createProfile);
router.post("/update-profile",authMiddleware, userController.updateProfile);
router.get("/read-profile",authMiddleware, userController.userProfileRead);
router.delete("/delete-profile",authMiddleware, userController.userProfileDelete);




module.exports = router