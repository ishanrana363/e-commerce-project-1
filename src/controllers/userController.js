const {userOtpService, userVerifyLoginService} = require("../services/profileService");
const {now} = require("mongoose");
const {token} = require("morgan");


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
            httponly : false
        }
        // Set Cookie With Response
        res.cookie('token',result["token"],cookie);
        res.status(200).json(result);
    }else {
        res.status(200).json(result);
    }
}
exports.userLogout= async (req,res)=>{

}
exports.saveProfile = async (req,res)=>{

}
exports.updateProfile = async (req,res) =>{

}

exports.userProfileRead = async (req,res) =>{

}






































