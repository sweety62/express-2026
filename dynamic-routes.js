import express from 'express';

const app = express();

app.get("/",(req,resp)=>{
  const users = ["Alice", "Bob", "Charlie"];
  let data = `<ul>`;
  for(let i=0;i<users.length;i++){

    data += `<li><a href = "user/${users[i]}">${users[i]}</a></li>`;
    console.log(users[i]);
  }
  data += `</ul>`;
  resp.send(data);
})

app.get("/user/:name",(req,resp)=>{
  const userName = req.params.name;
  resp.send(`This is the profile page of ${userName}`);
})

app.listen(6800,()=>{
  console.log("Server is running on port 6800");
})