const Users = require('./../../schemas/users');

module.exports = (req,res) => {
    req.body.slug = req.body.name.toLowerCase().replace(/ /g, '-');

    Users   
         .create(req.body)
         .then((user) => {
            return res.redirect('/users');
         })
         .catch((error) => {
            return res.send('Error: ' + error);
         })
};