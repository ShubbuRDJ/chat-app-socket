const express = require('express');
const cors = require('cors');
const { mongoConnect } = require('./app/config');
const userAuthRoutes = require('./app/routes/userAuthRoute');
const userRoutes = require('./app/routes/userRoutes');
const messageRoutes = require('./app/routes/messagesRoutes');
const socket = require('socket.io');


const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

// ***************user auth route ******************
app.use('/api/auth',userAuthRoutes);
// ***************user route ******************
app.use('/api/user',userRoutes);
// ***************message route ******************
app.use('/api/message',messageRoutes);

app.get('/',(req,res)=>{
    res.send({server:"Express server setup successfully"})
})


mongoConnect();

const port = process.env.PORT || 5000;
const server = app.listen(port,()=>console.log(`Server is running on port ${port}`));

// socket code 

const io = socket(server,{
    cors:{
        origin:'http://localhost:3000',
        credentials:true
    }
})

global.onlineUsers = new Map();

io.on('connection',(socket)=>{
    global.chatSocket = socket;
    socket.on('add-user',(userId)=>{
        onlineUsers.set(userId,socket.id)
    })
    socket.on('send-msg',(data)=>{
        const sendUserSocket = onlineUsers.get(data.to);
        if(sendUserSocket){
            socket.to(sendUserSocket).emit("msg-recieve",data.message)
        }
    })
})