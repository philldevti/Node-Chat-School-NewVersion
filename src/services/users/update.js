const Users = require('./../../schemas/users');

module.exports = (req,res) => {
    Users
         .findById(req.params.id)
         .then((user) =>{
            user.password = req.body.password;
            user.setPassword(user.password, (err, updated, passErr) =>{
                if(err || passErr){
                    return res.send('Error: ' + error);
                }

                user.save();
                user.email = req.body.email;
                user.name = req.body.name;

                user.save();

                return res.redirect('/users');
            });
         })
         .catch((error) => {
             return res.send('Error: ' + error);
         });
    // Users
        
    //     .findByIdAndUpdate(req.params.id, req.body)
    //     .then((user) => {
    //         return res.redirect('/users')
    //     })
    //     .catch((error)=>{
    //         return res.send('Error: '+ error);
    //     });
};