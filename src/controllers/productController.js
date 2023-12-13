
const {productCategoryService,
    productBrandService,
    productSliderService,
    productByBrandService,
    productByRemarkService,
    productBySimilerListService,
    productDetailsService,
    productByKeywordService,
    ListByKeywordService,
    productReviewListService
} =
    require("../services/productService")


exports.productCategoryList =async (req,res) =>{
    let result = await productCategoryService();
    res.status(200).json(result)
}


exports.productBrandList =async (req,res) =>{
    let result = await productBrandService();
    res.status(200).json(result)
}


exports.productSliderList =async (req,res)=>{
    let result = await productSliderService();
    res.status(200).json(result)
}


exports.productByBrandList = async(req,res)=>{
    let result = await productByBrandService(req);
    res.status(200).json(result)
}


exports.productByCategoryList =async (req,res)=>{
    let result = await productCategoryService(req);
    res.status(200).json(result)
}


exports.productByRemarkList = async (req,res)=>{
    let result = await productByRemarkService(req)
    res.status(200).json(result)
}


exports.productByKeyword = async (req,res)=>{
    let result = await ListByKeywordService(req);
    res.status(200).json(result)
}
exports.productBySimilerList = async (req,res)=> {
    let result = await productBySimilerListService(req);
    res.status(200).json(result)
}

exports.productDetails = async (req,res) => {
    let result = await productDetailsService(req);
    res.status(200).json(result)
}
exports.productReviewList = async (req,res) => {
    let result = await productReviewListService(req)
    res.status(200).json(result);
}

exports.productReviewCreate = async () => {

}
