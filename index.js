const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));


//app.get('/', function(req, res){
//res.send('Olá Mundo');
//});
var server = app.listen(port);

app.get('/lutadores',function(req,res){
    res.render('GerenciadorLutadores');
    });

app.get('/',function(req,res){
    res.render('home');
    });

app.get('/login',function(req,res){
    res.render('login');
    });  
        
app.get('/cadastro',function(req,res){
    res.render('cadastro');
    });  

app.get('/formulario', (req, res) => {
    res.render('formulario'); // Substitua 'formulario' pelo nome do seu arquivo de modelo (por exemplo, 'formulario.ejs' ou 'formulario.pug')
    });    

    
    
