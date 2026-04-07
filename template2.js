import express from 'express';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/add-users', (req, res) => {
  res.render("addUsers");
});

app.post('/submit-users', (req, res) => {
  console.log(req.body);
  res.render('submitUsers', req.body);
});
app.listen(4700, () => {
  console.log("Server is running on port 4700");
});