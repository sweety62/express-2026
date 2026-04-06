import express from 'express';

const app = express();

/*function agecheck(req, res, next) {

  if (!req.query.age || req.query.age < 18) {
    res.send('<h1>Access denied. You must be at least 18 years old.</h1>');
  } else {
    next();
  }
}

app.use(agecheck);*/


function ipcheck(req, resp, next) {

  const ip = req.socket.remoteAddress;
  console.log( ip);

  if(ip.includes('192.168.1.')) {
    next();
  } else {
    resp.send('<h1>Access denied. Your IP is not allowed.</h1>');
  }
}

app.use(ipcheck);






app.get('/', (req, resp) => {
  resp.send('<h1> Home page</h1>');
});

app.get('/login', (req, resp) => {
  resp.send('<h1> Login page</h1>');
});

app.get('/about', (req, resp) => {
  resp.send('<h1>  About page</h1>');
});

app.listen(5600, () => {
  console.log('Server is running on port 5600');
});
