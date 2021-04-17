const express = require('express')
const userRouter = require('../backend/app/router/userRouter');
const homeRouter = require('../backend/app/router/homeRouter');
const path  =  require('path'); 
const app = express()


app.use('/api/v1/static', express.static(path.join(__dirname, 'public')))
// console.log(path.join(__dirname, 'public'))
app.use(express.json())

 
app.get('/', function (req, res) {
  res.end('<h1>this app heading</h1>')
})
// waheguru
//jksdfds; kdsfgdsk fjksdbfds fksdbfjds fjksdbfds, fdsbfdskf dslbfs
// app.get('/users',getAllUser); // get all user
// app.get('/user/:id', getUser); //get user
// app.post('/user', createUser);  //create user
// app.patch('/user/:id', updateUser); // updateUser
// app.delete('/user/:id', deleteUser);  // delete user


app.use("/api/v1/user", userRouter);

app.use("/api/v1", homeRouter);


// app.use("/api/v1/post", postRouter)

app.listen(4000,()=>{      
    console.log('server is running');

})
