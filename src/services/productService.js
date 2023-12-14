const brandsModel = require("../models/brandsModel");
const categoriesModel = require("../models/categoriesModel");
const productsModel = require("../models/productsModel");
const productDetailsModel = require("../models/productDetailsModel");
const productSlidersModel = require("../models/productSlidersModel");
const reviewModel = require("../models/reviewModel")
const mongoose = require("mongoose");

const productCategoryService =async () => {
    try {
        let data = await categoriesModel.find();
        return {
            status : "success",
            data : data
        };
    }catch (e) {
        return {
            status : "fail",
            data : e.toString()
        };
    }
};

const productBrandService = async () => {
    try {
        let data = await brandsModel.find();
        return {
            status : "success",
            data : data
        };
    }catch (e) {
        return {
            status : "fail",
            data : e.toString()
        };
    }
}


const productSliderService =async () => {
    try {
        let data = await productSlidersModel.find();
         return {
            status : "success",
            data : data
        };
    }catch (e) {
        return {
            status : "fail",
            data : e.toString()
        };
    }
}


const productByBrandService = async (req) => {
    try {
        let BrandID = new mongoose.Types.ObjectId(req.params.BrandID);
        let matchStage = { $match : {brandID:BrandID} };
        let joinBrandId = {
            $lookup : {from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let joinCategoryId = {
            $lookup: {from: "categories",localField: "categoryID",foreignField: "_id",as: "category"}};
        let brandUnwind = { $unwind:"$brand"};
        let categoryUnwind = { $unwind:"$category"};
        let projectStage = {
            $project : {
                "brand._id" : 0,
                "category._id" : 0,
                "categoryID" : 0,
                "brandID" : 0
            }
        }
        let data = await productsModel.aggregate([
            matchStage,joinBrandId,joinCategoryId,brandUnwind,categoryUnwind,projectStage
        ])
        return{
            status:"success",
            data : data
        }
    }catch (e) {
        return {
            status:"fail",
            data : e.toString()
        }
    }
}

const productByCategoryService = async (req) => {
    try {
        let categoryID = new mongoose.Types.ObjectId(req.params.categoryID);
        let matchStage = { $match : {CategoryID:categoryID} };
        let joinBrandID = {
            $lookup : { from:"brands",localField:"brandID",foreignField:"_id",as:"brand" }
        }
        let joinCategoryID = {
            $lookup : {
                from : "categories", localField:"categoryID", foreignField:"_id", as :"category"
            }
        }
        let unwindBrand = {$unwind : "$brand"};
        let unwindCategory = {$unwind : "$category"};
        let projection = {
            $project: {
                "brand._id" : 0,
                "category._id" : 0,
                "categoryID" : 0,
                "brandID" : 0
            }
        }
        let data = await productsModel.aggregate([
            matchStage,joinBrandID,joinCategoryID,unwindBrand,unwindCategory,projection
        ])
        return {
            status:"success",
            data : data
        }
    }catch (e) {
        return {
            status:"fail",
            data : e.toString()
        }
    }
}

const productByRemarkService = async (req) => {
    try {
        let remark = req.params.remark;
        let matchStage = { $match:{ remark: remark }};
        let joinBrandID = {
            $lookup : { from : "brands",localField:"brandID", foreignField:"_id", as:"brand" }};
        let joinCategoryID = {
            $lookup : { from:"categories",localField:"categoryID",foreignField:"_id", as : "category" }
        };
        let unwindBrand = { $unwind:"$brand" };
        let unwindCategory = { $unwind:"$category" }
        let data = await productsModel.aggregate([
            matchStage,
            joinBrandID,
            joinCategoryID,
            unwindBrand,
            unwindCategory
        ])
        return{
            status:"success",
            data:data
        }
    }catch (e) {
        return {
            status : "fail",
            data : e.toString()
        }
    }
};



const ListByKeywordService = async (req) => {
    try{
        let SearchRegex={"$regex":req.params.Keyword, "$options":"i"}
        let SearchParams=[{title:SearchRegex},{shortDes:SearchRegex}]
        let SearchQuery={$or:SearchParams}

        let MatchStage={$match:SearchQuery}

        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data= await  productsModel.aggregate([
            MatchStage, JoinWithBrandStage,JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage,ProjectionStage
        ])
        return {status:"success",data:data}
    }catch (e) {
        return {status:"fail",data:e}.toString()
    }

}
const productBySimilerListService = async (req) => {
    try {
        let CategoryID = new mongoose.Types.ObjectId(req.params.CategoryID);
        let matchStage = {$match : {categoryID:CategoryID}};
        let limitStage = { $limit:22 };
        let joinBrandID = {
            $lookup : { from :"brands",localField:"brandID",foreignField:"_id",as:"brand" }};
        let joinCategoryID = {
            $lookup :  {from:"categories", localField : "categoryID" , foreignField : "_id" , as : "category" }
        }
        let unwindBrandID = { $unwind:"$brand" };
        let unwindCategoryID = { $unwind:"$category" }
        let data = await productsModel.aggregate([
            matchStage,
            limitStage,
            joinBrandID,
            joinCategoryID,
            unwindBrandID,
            unwindCategoryID
        ])
        console.log(data)
        return {
            status:"success",
            data : data
        }
    }
    catch (e) {
        return {
            status : "fail",
            data : e.toString()
        }
    }
}

const productDetailsService = async (req) => {
    try {
        let ProductID = new mongoose.Types.ObjectId(req.params.productID);
        let matchStage = { $match : { _id : ProductID }};
        let joinBrandID = {
            $lookup : { from : "brands" , localField : 'brandID' , foreignField : "_id" , as : "brand" }};
        let joinCategoryID = {
            $lookup : {
                from : "categories" , localField : "categoryID" , foreignField : "_id" , as : "category"
            }
        }
        let joinDetails = {
            $lookup : {
                from :"productsdetails" , localField : "_id" , foreignField : "productID" , as : "productDetails"
            }
        };
        let unwindBrandID = { $unwind:"$brand" };
        let unwindCategoryID = { $unwind:"$category" };
        let unwindProductDetails = { $unwind:"$productDetails" };
        let data = await productsModel.aggregate([
            matchStage,
            joinBrandID,
            joinCategoryID,
            joinDetails,
            unwindBrandID,
            unwindCategoryID,
            unwindProductDetails
        ])
        return {
            status : "success",
            data : data
        }
    }
    catch (e) {
        return {
            status : "fail",
            data : e.toString()
        }
    }
}

const ReviewListService = async (req) =>{
    try {
        let ProductID = new mongoose.Types.ObjectId(req.params.productID);
        let matchStage = { $match : { productID:ProductID } };
        let joinWithProfile = {
            $lookup : {
                from :"profiles" , localField : "userID" , foreignField : "userID", as : "profile"
            }
        }
        let unwindProfile = { $unwind : "$profile" }
        let data = await reviewModel.aggregate([
            matchStage,
            joinWithProfile,
            unwindProfile
        ])
        return{
            status : "success",
            data : data
        }

    }
    catch (e) {
        return {
            status : "fail",
            data : e.toString()
        }
    }
}

const productReviewCreateService = async () => {

}

module.exports = {
    productCategoryService,
    productBrandService,
    productSliderService,
    productByCategoryService,
    productByBrandService,
    productByRemarkService,
    ListByKeywordService,
    productBySimilerListService,
    productDetailsService,
    ReviewListService,
    productReviewCreateService
}















