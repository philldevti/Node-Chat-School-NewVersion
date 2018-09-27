const Users = require('./../../schemas/users');

module.exports = (req, res) =>{
    return res.render('login/index', {
        title: 'Login - ChatSchool Admin'
    });
}
