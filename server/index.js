require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const massive = require('massive');

const app = express();

app.use(bodyParser.json());

const { CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(3001,()=>{console.log(`Helo Mark2 ready on port 3001`)})
})

app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)
app.get('/getposts/:id', ctrl.getPosts)
app.get('/getsinglepost/:id', ctrl.getsinglepost)
