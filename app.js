//importando o express 
var express = require('express');

//Criando a var app para chamar os métodos do express
var app = express();

//setando a view engine => EJS
app.set('view engine', 'ejs');

//Config path do arquivos estáticos
app.use(express.static('./public'));


app.get('/', function(req,res){
    res.render('home/index.ejs');
});

app.get('/admin', function(req,res){
    res.render('admin/form_add_noticia');
});

app.get('/noticias', function(req,res){
    res.render('noticias/noticia');
});

app.listen(process.env.PORT || 5000, function(){
    console.log("Servidor rodando com Express");
});

// process.env.PORT => Porta alocada pelo heroku 
// 5000 => Porta para um servidor node local 











