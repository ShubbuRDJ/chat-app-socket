const { User } = require("../model")
const { responseData } = require("../utils/responseData/responseData")


module.exports.isEmailExists = async (req,res,next)=>{
    const {email} = req.body
    try {
        const isEmail = await User.exists({email})
        if(isEmail){
            return res.status(400).send(responseData.failure("Sorry, the email address you provided is already registered."))
        }
        else{
            return next();
        }
    } catch (error) {
        return res.status(500).send(responseData.failure("Internal server error",500))
    }
}

module.exports.isUserNameExists = async (req,res,next)=>{
    const {userName} = req.body
    try {
        const isUserName = await User.exists({userName})
        if(isUserName){
            return res.status(400).send(responseData.failure("Sorry, userName you provided is already registered."));
        }
        else{
            return next();
        }
    } catch (error) {
        return res.status(500).send(responseData.failure("Internal server error",500))
    }
}

module.exports.isValidUserName = async (req,res,next)=>{
    const {userName} = req.body
    try {
        const isUserName = await User.exists({userName})
        if(!isUserName){
            return res.status(400).send(responseData.failure("Sorry, userName not found."));
        }
        else{
            return next();
        }
    } catch (error) {
        return res.status(500).send(responseData.failure("Internal server error",500))
    }
}
