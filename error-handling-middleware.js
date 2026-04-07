import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send("Home page");
});

app.get('/users', (req, res) => {
  res.send("Users page");
});

app.get('/error', (req, res,next) => {
  const error = new Error('');
  next(error);
});

app.use(( error,req,res,next)=>{

  res.status(error.status||500).send( "Internal Server Error");
});

app.listen(8900, () => {
  console.log("Server is running on port 8900");
});
