const Users = require('./../../schemas/users');

module.exports = (req,res) => {
    req.body.slug = req.body.name.toLowerCase().replace(/ /g, '-');

    Users   
         .register(req.body, req.body.password, (error, account) =>{
            if(!error){
                return res.send('Error: ' + error);
            }

            return res.redirect('/users');
         })
        //  .create(req.body)
        //  .then((user) => {
        //     return res.redirect('/users');
        //  })
        //  .catch((error) => {
        //     return res.send('Error: ' + error);
        //  })
};