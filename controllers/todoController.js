module.exports = function(app){

app.get('/todo', (req,res) => {
    
    res.render('todo');

});

app.post('/todo',(req,res) => {
    
    res.end('It Works!!');

});

app.delete('/todo',(req,res) => {
    
    res.end('It Works!!');

});

};