module.exports = (app ) =>{
    app.use('/users', require('./routes/users'));
    app.use('/rooms', require('./routes/rooms'));
}