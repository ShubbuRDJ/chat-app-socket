const express = require('express');
const cors = require('cors');
const { mongoConnect } = require('./app/config');
const userAuthRoutes = require('./app/routes/userAuthRoute');
const userRoutes = require('./app/routes/userRoutes');
const messageRoutes = require('./app/routes/messagesRoutes');


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
app.listen(port,()=>console.log(`Server is running on port ${port}`));