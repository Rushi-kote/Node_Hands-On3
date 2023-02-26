const express = require("express");
const {homeController,aboutController,loginController} = require('./Controllers/HomeController');
const app = express();
// const Router = express.Router();

// Router.route("/").get(homeController);
app.use(express.json());
const MiddeleWare = (req,res,next)=>{
    console.log("First Middleware");
    next();
}

const checkBodyMiddleWare = (req,res,next)=>{
    if(!req.body.name){
        return res.status(500).json({
            status:"fail",
            massage:"Please provide name in order to proceed further!!"
        })
    }
    next();
}


app.route('/').get(MiddeleWare ,homeController);
app.route('/about').get(MiddeleWare ,aboutController);
app.route('/login').post(MiddeleWare,checkBodyMiddleWare ,loginController);




module.exports= app;