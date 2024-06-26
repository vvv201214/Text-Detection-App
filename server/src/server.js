const mongoose = require("mongoose");
const dotenv = require('dotenv');
const path = require("path");

dotenv.config({path: path.resolve(__dirname, '../config.env')});

const app = require('./app');


console.log(process.env.DEV_DB);

const dB = process.env.DEV_DB
// ?.replace('<password>',process.env.DEV_DB_PASSWORD!);

const PORT = process.env.PORT || 8080;


console.log(dB);
mongoose.connect(dB).then(()=>{
    console.log('Database Connected!');
});

const server = app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`)
});