const {SaveWishListService,removeWishListService, WishListService} = require("../services/wishesService");
exports.wishList = async (req,res)=>{

}
exports.wishList = async (req,res)=>{
    let result = await WishListService(req);
    res.status(200).json(result)
}
exports.createWishList = async (req,res)=>{
    let result = await SaveWishListService(req)
    res.status(201).json(result)
}
exports.removeWishList = async (req,res)=>{
    let result = await removeWishListService(req)
    res.status(201).json(result)
}