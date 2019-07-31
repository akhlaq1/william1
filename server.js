const express = require('express');
const app = express();
const path=require('path')


app.use(express.static(__dirname+'/node_modules'));

app.use(express.static(__dirname+'/js'));
app.use(express.static(__dirname+'/css'));
app.use(express.static(__dirname+'/font-awesome'));
app.use(express.static(__dirname+'/fonts'));
app.use(express.static(__dirname+'/img'));


app.listen(port=8080);
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

console.log("Express server working")
