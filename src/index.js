const express = require('express');
require('./db/mongoose');
const UserRouter = require('./router/user');
const TaskRouter = require('./router/task');

const app = express();
const port = process.env.PORT

app.use(express.json())
app.use(UserRouter)
app.use(TaskRouter)

app.listen(port,()=>{
    console.log("Server Listening on port :"+port);
})

const Task = require('./models/tasks');
const User = require('./models/users');

