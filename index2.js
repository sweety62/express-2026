import express from 'express';
import home from './pages2/home.js';
import login from './pages2/login.js';
import submit from './pages2/submit.js';
const app = express();

app.get('/', (req, res) => {
  res.send(home());
});

app.get('/login', (req, res) => {
  res.send(login());
});

app.post('/submit', (req, res) => {
  res.send(submit());
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});