module.exports = (req,res,next) => {
    req
       .checkParams('id','Field id is required.')
       .notEmpty()
       .isMongoId;
    
    let errors = req.validateErrors();

    if(!errors){
        return next();
    }

    return res.redirect('/users');
}