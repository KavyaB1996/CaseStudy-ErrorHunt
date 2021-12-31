const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
// Part #1 Point 2
var bodyParser = require('body-parser');

// Part #2 Point 6 
const nav = require('./public/js/nav');

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
// Part #1 Point 3
const homeRouter = require('./src/routes/homerouter');
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 



app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 
// Part #2 Point 7
app.use(cors());

app.use('/login',loginRouter); 

app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){
    // Part #2 Point 6 
    res.render('index',{nav});
    
});





app.listen(5000,()=>{
    // Part #1 Point 5
    console.log("Server Ready on 5000");
});