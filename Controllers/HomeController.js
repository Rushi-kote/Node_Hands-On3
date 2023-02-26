
exports.homeController = (req,res)=>{
    res.status(200).json({
     status:"success",
     massege:"Welcome to the home Screen"
    });
    res.end();
 }

exports.aboutController =(req,res)=>{
    res.status(200).json({
        status:"success",
        massege:"You are on the about Screen"
    });
    res.end();
}

exports.loginController =(req,res)=>{
    res.status(200).json({
        status:"success",
        massege:"You are logged in succesfully"
    });
    res.end();
}