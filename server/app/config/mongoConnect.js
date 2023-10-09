const mongoose = require('mongoose');


module.exports.mongoConnect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true,});
        console.log('Mongo Database connected successfully');
    } catch (error) {
        // console.log(error);
        console.log('Error in Database connection');
    }
}