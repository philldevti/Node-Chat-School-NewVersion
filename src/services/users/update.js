const Users = require('./../../schemas/users');

module.exports = (req,res) => {
    Users
        .findByIdAndUpdate(req.params.id, req.body)
        .then((user) => {
            return res.redirect('/users')
        })
        .catch((error)=>{
            return res.send('Error: '+ error);
        });
};