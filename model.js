import express from 'express';
import { userList } from './model/userModel.js';
import { handleUsers } from './controller/userController.js';

const app = express();

app.set('view engine', 'ejs');

app.get('/users1',handleUsers)
app.listen(4800, () => {
  console.log("Server is running on port 4800");
});