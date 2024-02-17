const express = require('express');
const port = 80;
const db = require('./config/mongoose');
const app = express();
const cors = require('cors');

app.use(express.urlencoded());
app.use(cors());
app.use('/', require('./routes/index.js'));

app.listen(port, (err)=>{
    if(err){console.log(err);
    return;
}
    console.log(`port is running on port ${port}`)
})