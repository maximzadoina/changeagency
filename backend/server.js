const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: 'data.env' });
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
console.log(uri+'test uri')
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("mongodb connection established");
})

const showcasesRouter=require('./routes/showcases')
const articlesRouter=require('./routes/articles')
app.use('/showcases',showcasesRouter);
app.use('/articles',articlesRouter);

app.listen(port, () => {
    console.log(`server started on port: ${port}`)
})