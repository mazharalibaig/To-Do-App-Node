var mongoose = require('mongoose');

var data = [{item: 'Task no.1'},{item: 'Task no.2'},{item: 'Task no.3'}];
var bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://mazhar_ali_baig:Maryam09@cluster0.zvl25.mongodb.net/todo-database?retryWrites=true&w=majority',{useNewUrlParser: true});

// Constructing Schema

const todoSchema = new mongoose.Schema({

    item: String

});

var Todo = mongoose.model('Todo', todoSchema);

var itemOne = Todo({item: "Buy me them flowers bro!"}).save((err) => {

    if(err)
        throw err;

    else
        console.log("Item saved!");

})

var urlencodedParser = bodyParser.urlencoded({ extended: true });

// console.log(data);

module.exports = function(app){

app.get('/todo', (req,res) => {

    // console.log(data);
    
    res.render('todo',{todos: data});

});

app.post('/todo',urlencodedParser,(req,res) => {

    data.push(req.body);

    res.render('todo', {todos: data});

});

app.delete('/todo/:item',(req,res) => {

    data = data.filter((todo) => {

        console.log(todo.item.replace(/ /g,"-"));

        console.log(req.params.item);

        return todo.item.trim().replace(/ /g,"-") !== req.params.item;

    });

    console.log('Updated List!!')
    console.log(data);

    res.render('todo', {todos: data});

});

};