const Users = require('./../../schemas/users');

module.exports = (req, res) =>{
    Users
         .authenticate()(req.body.email, req.body.password, (error, user, options) => {
            if(error){
                return res.send('Error:' + error);
            }

            return req.login(user, (err) =>{
                if(err){
                    return res.send('Error:' + err);
                }
                return res.redirect('/');
            });
         });
}