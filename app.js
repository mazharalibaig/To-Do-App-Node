var express = require('express');
var bodyParser = require('body-parser');
var todoControllers = require('./controllers/todoController');

var app = express();

// setup template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//firing controllers

todoControllers(app);

//listen to port    
app.listen(3000, () => {
    console.log('You are listening to port 3000');
});