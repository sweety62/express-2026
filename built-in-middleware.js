import { resolve } from 'dns';
import express from 'express';
import path from 'path';
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  const filepath = path.resolve('view/home2.html');
  res.sendFile(filepath);
});

app.get('/login', (req, res) => {
  res.send(`<form action="/submit" method="post">
                <input type="text" placeholder="Enter your name"  name="name"/>
                <input type="text" placeholder="Enter your email" name="email"/>
                <input type="text" placeholder="Enter your password" name="password"/>
                <button>login</button>
            </form>`
  );
});

app.post('/submit', (req, res) => {
  console.log("user login details", req.body);
  res.send("Submit page");
});

app.get('/user', (req, res) => {
  res.send("User page");
});

  app.listen(5500, () => {
    console.log("Server is running on port 5500");
  });