import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("home",{name:"sweety",ytchannel:"sweety kumari"});
});

app.listen(4400, () => {
  console.log("Server is running on port 4400");
});