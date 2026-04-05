



import express from "express";
import path from "path";

const app = express();

const abspath = path.resolve("view");
const publicpath = path.resolve("public");

app.use(express.static(publicpath));

app.get("/", (req, res) => {
  
  res.sendFile(abspath+"/home.html");
});

app.get("/login", (req, res) => {
  
  res.sendFile(abspath+"/login.html");
});

app.get("/about", (req, res) => {
 ;
  res.sendFile(abspath+"/about.html");
});


app.use((req, res) => {
  
  res.status(404).sendFile(abspath+"/404.html");
});



app.listen(3500, () => {
  console.log("Server running on http://localhost:3500");
});
  