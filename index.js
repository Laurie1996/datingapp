
const express= require('express');
const app = express();
const port = 8000;

app.use('/static',express.static('public'));

app.get('/',(req, res)=> {
  res.write('<p>Hello World!<p>');
  res.end();
});

app.listen(port, () => console.log('Running my NOdeJS server at'));
