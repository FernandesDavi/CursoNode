
var http = require('http');

http.createServer(function(req,res){
    if(req.url == "/produtos"){
        res.end("<html><body><h1>Listando os Produtos</h1></body></html>")
    }else{
        res.end("<html><body>Home da casa do Codigo</body></html>");
    }
   }).listen(3000,"localhost");
 

console.log("Servidor On");