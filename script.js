import express from "express";

const app = express();

//function checkRoute(req, res, next)=> {
  //console.log(req.url);
  //next();
//}

app.use((req, res, next) => {
  console.log( "user is accessing"+req.url +"page");
  next();
});

app.get("/", (req, res) => {
  res.send(" Home Page");
})


app.get("/user", (req, res) => {
  res.send(" user Page");
})


app.get("/product", (req, res) => {
  res.send(" product Page");
})

app.listen(4500, () => {
  console.log("Server running on http://localhost:4500");
});