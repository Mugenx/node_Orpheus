var express = require('express');
var reload = require('reload');
var app = express();

app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');


app.locals.siteTitle = 'ALMS';

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/equiplist'));


var server = app.listen(app.get('port'), function () {
    console.log('GO to http://localhost:' + app.get('port'));
});

reload(server, app);
