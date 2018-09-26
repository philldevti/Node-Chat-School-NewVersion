module.exports = (app) => {
    app.use('/', require('./routes/main'));
    app.use('/users', require('./routes/users'));
    app.use('/rooms', require('./routes/rooms'));
}