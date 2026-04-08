import express from 'express';
import userData from './users.json' with{type: 'json'};
const app = express();

app.get("/",(req,resp)=>{
  console.log(userData);
  resp.send(userData);
})

app.get("/user/:id",(req,resp)=>{
  const id = req.params.id;
  console.log(id);
  let filteredData = userData.find(user => user.id === parseInt(id));
  resp.send(filteredData);
})

app.get("/username/:name",(req,resp)=>{
  const name = req.params.name;
  console.log(name);
  let filteredData = userData.find(user => user.name === name);
  resp.send(filteredData);
})




app.listen(6900,()=>{
  console.log("Server is running on port 6900");
})