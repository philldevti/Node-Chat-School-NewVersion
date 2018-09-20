const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const hbs = require('express-hbs');

module.exports = (app) => {
    app.set('port', 9000);
    app.set('host', '127.0.0.1');
    app.set('views',path.join(__dirname, './../../../build/views'));
    app.set('view engine', 'hbs');

    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(methodOverride('_method'));
    app.use(expressSession({
        secret: 'K@Q#EKJQWEKJ@!K#K@!HK',
        resave: false,
        saveUninitialized: false
    }));
    app.use(expressValidator());

    app.engine('hbs', hbs.express4({
        defaultLayout: path.join(app.get('views'), 'layouts/main.hbs'),
        partialsDir: path.join(app.get('views'),'partials'),
        layoutsDir: path.join(app.get('views'), 'layouts')
    }));
}