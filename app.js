const express = require("express");
const axios = require("axios");
const dotenv=require('dotenv').config()
const app = express();
const port = 3000; 
const nazmul=require('./routes/nazmul')

app.use(express.json());
app.use('/nazmul',nazmul)

app.listen(port,process.env.IP, () => {
    console.log(`Server running on port ${port}`);
});
