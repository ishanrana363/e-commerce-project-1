const {userOtpService, userVerifyLoginService, saveProfileService, userProfileReadService, userProfileDeleteService} = require("../services/profileService");

const profilesModel = require("../models/profilesModel")

exports.userOtp = async (req,res)=>{
    let result = await userOtpService(req);
    res.status(200).json(result);
}
exports.userVerifyLogin = async (req,res)=>{
    let result = await userVerifyLoginService(req);
    if (result["status"]==="success"){
        // cookie options
        let cookie = {
            expires : new Date( Date.now() + 24*60*60*1000 ),
            httpOnly : false
        }
        // Set Cookie With Response
        res.cookie('token',result["token"],cookie);
        res.status(200).json(result);
    }else {
        res.status(200).json(result);
    }
}
exports.userLogout= async (req,res)=>{
    // cookie option
    let cookie = {
        expires : new Date( Date.now() - 24*60*60*1000 ),
        httpOnly : false
    }
    // cookie remove
    res.cookie("token","",cookie);
    res.status(200).json({
        status : "success",
        message : "User logout successfully "
    });
}
exports.createProfile = async (req,res)=>{
    let result = await saveProfileService(req);
    res.status(201).json({
        status : "success",
        data : result
    })
}
exports.updateProfile = async (req,res)=>{
    let result = await saveProfileService(req);
    res.status(201).json({
        status : "success",
        data : result
    })
}
exports.userProfileRead = async (req,res) =>{
    let result = await userProfileReadService(req)
    res.status(200).json(result)
}

exports.userProfileDelete = async (req,res) =>{
    let result = await userProfileDeleteService(req)
    res.status(200).json(result)
}





































