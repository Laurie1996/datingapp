const express = require('express');
const app = express();
const port = 8000;

app.use('/static', express.static(__dirname + '/static'));

app.set('view engine', 'pug');

app.set('views','views');

app.get('/',(req,res)=> {

  res.render('index.pug', {title:'Hey!', message: 'Hello There!'});
})

app.listen(port, () => console.log('Running my NOdeJS server at'));
