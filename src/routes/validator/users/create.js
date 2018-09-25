module.exports = (req,res,next) => {
    req
       .checkBody('name','Field name is required.')
       .notEmpty();
    req
       .checkBody('email','Field email is required.')
       .notEmpty()
       .isEmail();
    req
       .checkBody('password','Field password is required.')
       .notEmpty();
    
       let errors = req.validateErrors();

       if(!errors){
           return next();
       }

       return res.redirect('/users/new');
}