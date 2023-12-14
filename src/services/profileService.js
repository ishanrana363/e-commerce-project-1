const SendEmailUtility = require("../utility/emailHelper");
const userModel = require("../models/usersModel");
const profilesModel = require("../models/profilesModel")
const {EncodeToken} = require("../utility/tokenHelper");
const userOtpService = async (req) => {
    try {
        let email = req.params.email;
        let code = Math.floor(100000 + Math.random() * 900000 )
        let emailText = ` Your verification code is = ${code} `
        let emailSub = " Your verification "
        await SendEmailUtility(email,emailText,emailSub)
        await userModel.updateOne( {email:email}, { $set : { otp:code}}, { upsert:true } )
        return {
            status : "success",
            message : "  6 digit otp has been send  "
        }
    }
    catch (e) {
        return {
            status : "fail",
            message : "something worng "
        }
    }
}

const userVerifyLoginService = async (req) => {
    try {
        let email=req.params.email;
        let otp=req.params.otp;
        // User Count
        let total=await userModel.find({email:email,otp:otp}).count('total');
        console.log(total)
        if(total===1){
            // User ID Read
            let user_id=await userModel.find({email:email,otp:otp}).select('_id');
            // User Token Create
            let token=EncodeToken(email,user_id[0]['_id'].toString())
            // OTP Code Update To 0
            await userModel.updateOne({email:email},{$set:{otp:"0"}})
            return {status:"success", message:"Valid OTP",token:token}
        }
        else{
            return {status:"fail", message:"Invalid OTP"}
        }

    }catch (e) {
        return {status:"fail", message:"Invalid OTP"}
    }

};




const saveProfileService = async (req) => {
    try {
        let user_id = req.headers.user_id;
        console.log(user_id)
        let reqBody = req.body;
        reqBody.userID = user_id;
        console.log(reqBody)
        let data = await profilesModel.updateOne({userID:user_id},{$set:reqBody},{upsert:true})
        return {
            status : "success",
            data : data
        }
    }catch (e) {
        return {status:"fail", data : e.toString()}
    }
}

const userProfileReadService = async (req) => {
    try {
        let user_id = req.headers.user_id;
        console.log(user_id)
        let data = await profilesModel.find({userID:user_id});
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


const userProfileDeleteService = async (req) => {
    try {
        let user_id = req.headers.user_id;
        console.log(user_id)
        let data = await profilesModel.deleteOne({userID:user_id});
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


module.exports = {
    userOtpService,
    userVerifyLoginService,
    saveProfileService,
    userProfileReadService,
    userProfileDeleteService
}















