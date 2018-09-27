const Rooms = require('./../../schemas/rooms');

module.exports  = (req, res) => {
    Rooms   
         .find()
         .then((rooms) =>{
             return res.render('rooms/index', {
                 title: 'Rooms - ChatSchool Admin',
                 rooms,
                 user_logged: req.user
             })
         })
         .catch((error) => {
             return res.send('Erro: ' + error);
         })
};