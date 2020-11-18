var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var URL = require('../MONGODB_KEYS');
// var data = [{item: 'Task no.1'},{item: 'Task no.2'},{item: 'Task no.3'}];

mongoose.connect(URL,{useNewUrlParser: true});

// Constructing Schema
const todoSchema = new mongoose.Schema({

    item: String

});

var Todo = mongoose.model('Todo', todoSchema);

// var itemOne = Todo({item: "Buy me them flowers bro!"}).save((err) => {

//     if(err)
//         throw err;

//     else
//         console.log("Item saved!");

// })

var urlencodedParser = bodyParser.urlencoded({ extended: true });

// console.log(data);

module.exports = function(app){

app.get('/todo', (req,res) => {

    // Getting data from MongoDB

    Todo.find({}, (err,data) => {

        if(err)
            throw err;
        
        res.render('todo',{todos: data});

    });
    
    // res.render('todo',{todos: data});

});

app.post('/todo',urlencodedParser,(req,res) => {

    // Adding to Database

    var item = Todo(req.body).save((err,data) => {

        if(err)
            throw err;

        res.render('todo', {todos: data});

    });

    // data.push(req.body);

    //res.render('todo', {todos: data});

});

app.delete('/todo/:item',(req,res) => {

    Todo.find({item: req.params.item.trim().replace( /\-/g," ")}).remove((err,data) => {

        if(err)
            throw err;

        res.render('todo', {todos: data});

    });

    // data = data.filter((todo) => {

    //     // console.log(todo.item.replace(/ /g,"-"));

    //     // console.log(req.params.item);

    //     return todo.item.trim().replace(/ /g,"-") !== req.params.item;

    // });

    // console.log('Updated List!!')
    // console.log(data);

});

};