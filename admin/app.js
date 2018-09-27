    const express = require('express');
    const path = require('path');

    const app = express();

    const env = path.join(__dirname, './src/configs/env', process.env.NODE_ENV || 'development');

    require(env)(app);

    require('./src')(app);
    
    app.listen(app.get('port'), app.get('host'), () => {
        console.log('Express server has been started at port: ', app.get('port'))
    })