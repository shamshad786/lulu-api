const express = require('express');
const app = express()
const mongoose = require('mongoose');
const cors = require('cors')
const loginRouter =  require('./routes/loginRoute');
const port = process.env.PORT || 4040;

mongoose.connect("mongodb://mantri:98pqfajx6bdjvDF8@ac-l3rviqp-shard-00-00.g6ol3u4.mongodb.net:27017,ac-l3rviqp-shard-00-01.g6ol3u4.mongodb.net:27017,ac-l3rviqp-shard-00-02.g6ol3u4.mongodb.net:27017/lulumall?ssl=true&replicaSet=atlas-bxgwoj-shard-0&authSource=admin&retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
}).then( ()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log('Failed to Connect Database: '+err);
});

app.use('/home', (req,res)=>{
    res.send('hello')
})

app.use(express.json());
app.use(cors());
app.use('/api/v1/login', loginRouter);

app.listen(port, ()=>{
    console.log(`server run on ${port}`);
});

