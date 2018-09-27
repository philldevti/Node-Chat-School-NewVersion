module.exports = (req,res) => {
    res.render('main/index', {
        title: 'ChatSchool - Admin',
        user_logged: req.user
    });
};