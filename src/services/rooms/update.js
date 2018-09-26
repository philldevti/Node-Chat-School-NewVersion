const Rooms = require('./../../schemas/rooms');

module.exports  = (req, res) => {

    req.body.enable = req.body.enable ? 'true' : 'false';

    Rooms
         .findByIdAndUpdate(req.params.id, req.body)
         .then((room) => {
             return res.redirect('/rooms');
         })
         .catch((error) => {
             return res.send('Error: ' + error);
         })
};