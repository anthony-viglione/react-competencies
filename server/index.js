require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const massive = require('massive');

const app = express();

app.use(bodyParser.json());

app.listen(3001,()=>{`Helo Mark2 ready on port 3001`})