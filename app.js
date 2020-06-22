// import modules

var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path');


var app = express();

const route = require('./routes/route');


//connect to db 
mongoose.connect('mongodb://localhost:27017/personnelist');

mongoose.connection.on('connected',(err)=>{
    console.log('Connected to Database');
});

mongoose.connection.on('error',()=>{
    if(err){
        console.log('Error Connecting to Database') + err;
    }
    
});

// port no
const port =3000;

// add cors
app.use(cors());

// add body parser
app.use(bodyparser.json());


//static files
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api',route);

//testing server
app.get('/',(req,res)=>{
    res.send('Foobar');
});

app.listen(port,()=>{
    console.log('Server Started at port' + port);
});