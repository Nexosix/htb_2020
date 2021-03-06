global.__basedir = __dirname;

const express = require("express");
const cors = require('cors');

const app = express();
const port = 1337;

app.use(cors());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.use('/api', require('./api'));

app.listen(port, () => { console.log(`Super Duper HTB App is listening on port ${port}`) });