const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use('/user', require('./auth/auth.module'));
app.use('/films', require('./films/films.module'));

(async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.DB, { useNewUrlParser: true });
        console.log('db is running');
    } catch (error) {
        console.log('db is not running');
        console.log(error.message);
    }
})();

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server run in port ${port}`);
});