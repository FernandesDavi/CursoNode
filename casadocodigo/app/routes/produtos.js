module.exports = function(app){
app.get('/produtos',function(req,res){
    var mysql = require('mysql');
    res.render("produtos/lista");
});
}