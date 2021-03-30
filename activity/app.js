const express = require('express')
const userRouter = require('../activity/app/router/userRouter');
const app = express()

app.use(express.json())

 
app.get('/', function (req, res) {
  res.end('<h1>this app heading</h1>')
})


   


//jksdfds; kdsfgdsk fjksdbfds fksdbfjds fjksdbfds, fdsbfdskf dslbfs
// app.get('/users',getAllUser); // get all user
// app.get('/user/:id', getUser); //get user
// app.post('/user', createUser);  //create user
// app.patch('/user/:id', updateUser); // updateUser
// app.delete('/user/:id', deleteUser);  // delete user


app.use("/api/v1/user", userRouter);


// app.use("/api/v1/post", postRouter)

app.listen(3000,()=>{      
    console.log('server is running');

})