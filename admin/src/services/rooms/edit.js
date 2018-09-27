const Rooms = require('./../../schemas/rooms');

module.exports  = (req, res) => {
    Rooms
         .findOne({
             slug: req.params.slug
         })
         .then((room) =>{
            if(!room){
                return res.status(404).end();
            }

            return res.render('rooms/edit',{
                title: 'Rooms - ChatSchoool Admin',
                room,
                user_logged: req.user
            });
         })
         .catch((error) =>{
            return res.send('Error: ' + error);
         });
};