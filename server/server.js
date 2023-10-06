const express = require('express');
const cors = require('cors');
const { mongoConnect } = require('./mongoConnect');


const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send({server:"Express server setup successfully"})
})

mongoConnect();

const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`Server is running on port ${port}`));