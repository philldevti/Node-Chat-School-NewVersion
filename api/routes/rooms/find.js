var Rooms = require('./../../model/rooms');

module.exports = (req, res) => {
    Rooms
        .find({})
        .then((rooms) =>{
            if(!rooms){
                return res
                        .status(404)
                        .json({
                            status: false,
                            rooms
                        });
            }
            
            return res
                     .status(200)
                     .json({
                         status: false,
                         rooms
                     });
        })
        .catch((error ) =>{
            return res
                     .status(500)
                     .json({
                         status: true,
                         error
                     })
        });
};