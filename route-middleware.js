import express from 'express';
const app = express();

function checkAgeRouteMiddleware(req, res, next) {
  console.log(req.query.age);
  if (!req.query.age || req.query.age < 18) {
    res.send('<h1>Alert!you are not allowed to use this website</h1>');
  } else {
    next();
  }
}

function checkURLRouteMiddleware(req, res, next) {
  console.log("this request url is:",req.url);
  next();
}




 app.get('/', (req, res) => {
   res.send('<h1> Home page</h1>');
 });

 app.get('/login',checkURLRouteMiddleware , (req, res) => {
   res.send('<h1> Login page</h1>');
 });

 app.get('/user',checkAgeRouteMiddleware , checkURLRouteMiddleware,(req, res) => {
   res.send('<h1>  User page</h1>');
 });

  app.get('/product',checkURLRouteMiddleware , (req, res) => {
   res.send('<h1>  Product page</h1>');
 });



 app.listen(6600, () => {
   console.log('Server is running on port 6600');
 });
