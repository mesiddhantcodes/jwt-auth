const express = require('express');
const mongoose = require('mongoose');
const authRoutes=require('./routes/authRoutes');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
// view engineF
app.set('view engine', 'ejs');

// database connection
// const dbURI = '';
// const dburl='mongodb+srv://mesiddhant:<test123>@cluster0.phbuxbe.mongodb.net/node-auth'
mongoose.connect('mongodb://0.0.0.0:27017/node-auth').then((res) => {
  console.log("Database connected...");
}).catch((err) => {
  console.log("Error in connecting database : ", err);
});
// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes)
app.listen(3000, () => {
  console.log(`Listening at port ${3000}`);
});