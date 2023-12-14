const wishesModel = require("../models/wishesModel")
const mongoose = require("mongoose");

const WishListService = async (req) => {

    try {
        let user_id= new mongoose.Types.ObjectId(req.headers.user_id);
        let matchStage={$match:{userID:user_id}}


        let JoinStageProduct={$lookup:{from:"products",localField:"productID",foreignField:"_id",as:"product"}}
        let unwindProductStage={$unwind:"$product"};


        let JoinStageBrand={$lookup:{from:"brands",localField:"product.brandID",foreignField:"_id",as:"brand"}}
        let unwindBrandStage={$unwind:"$brand"};



        let JoinStageCategory={
            $lookup:{from:"categories",localField:"product.categoryID",foreignField:"_id",as:"category"}
        }
        let unwindCategoryStage={$unwind:"$category"};



        let projectionStage={$project:{
                '_id':0,'userID':0,'createAt':0,'updatedAt':0, 'product._id':0,
                'product.categoryID':0,'product.brandID':0,
                'brand._id':0,'category._id':0,
            }
        }

        let data=await wishesModel.aggregate([
            matchStage,
            JoinStageProduct,
            unwindProductStage,
            JoinStageBrand,
            unwindBrandStage,
            JoinStageCategory,
            unwindCategoryStage,
            projectionStage
        ])

        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

const SaveWishListService = async (req) => {
    try {
        let user_id=req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID=user_id;
         await wishesModel.updateOne(reqBody,{$set:reqBody},{upsert:true})
        return {status:"success",message:"Wish List Save Success"}
    }
    catch (e) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

const removeWishListService = async (req) => {
    try {
        let user_id=req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID=user_id;
        await wishesModel.deleteOne(reqBody)
        return {status:"success",message:"Wish List Remove Successfully"}
    }
    catch (e) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

module.exports = {
    WishListService,
    SaveWishListService,
    removeWishListService
}

















