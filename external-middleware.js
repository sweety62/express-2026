import express from 'express';

import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.get('/',(req,res) => {
  res.send("Home page");
});

app.get('/users',(req,res) => {
  res.send("Users page");
});


app.get('/wait',(req,res)=>{

  setTimeout(() => {
    res.send("result after 1 second");
    
  }, 1000);

});

app.listen(9900, () => {
  console.log("Server is running on port 9900");
});
