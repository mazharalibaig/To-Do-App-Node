var express = require('express');
var bodyParser = require('body-parser');
var todoControllers = require('./controllers/todoController');
var portNumber = process.env.PORT || 3000;

var app = express();

// setup template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//firing controllers
todoControllers(app);

//listen to port    
app.listen(portNumber, () => {
    console.log('You are listening to port 3000');
});