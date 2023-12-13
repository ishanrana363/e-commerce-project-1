const SendEmailUtility = require("../utility/emailHelper");
const userModel = require("../models/usersModel")
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



const userLogoutService = async () => {

}
const saveProfileService = async () => {

}

const userProfileReadService = async () => {

}


module.exports = {
    userOtpService,
    userVerifyLoginService,
    userLogoutService,
    saveProfileService,
    userProfileReadService
}















