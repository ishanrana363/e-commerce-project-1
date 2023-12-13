const nodemailer = require("nodemailer")

const sentEmail = async (emailTo,emailText,emailSub) =>{
    let transporter = nodemailer.createTransport({
        host:"mail.teamrabbil.com",
        port : 25,
        secure:false,
        auth:{
            user : "info@teamrabbil.com",
            pass : '~sR4[bhaC[Qs'
        },
        tls: {rejectUnauthorized: false},
    })
    let mailOption = {
        from : "MERN E-Commerce Solution <info@teamrabbil.com> ",
        to:emailTo,
        subject: emailSub ,
        text: emailText
    }
    return await transporter.sendMail(mailOption)
}
module.exports = sentEmail;