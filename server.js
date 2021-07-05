'use strict';


const express = require('express')

const cors = require('cors');
require('dotenv').config();
const app = express()

const mongoose = require('mongoose');

const digimons = require('./controllers/digimonController')


mongoose.connect('mongodb://localhost:27017/digimon', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
});
app.use(express.json());
app.use(cors())

const Crud=require('./controllers/digimonCrudController');


const PORT = process.env.PORT;
app.get('/digimon', digimons.getDataDigimon)

app.post('/digimon/favorite',Crud.createNeWItem)
app.get('/digimon/favorite',Crud.getNeWItem)
app.delete('/digimon/favorite/:name',Crud.deleteNeWItem)
app.put('/digimon/favorite/:name',Crud.updateNeWItem)
app.get('/',
    function (req, res) {
        res.send('Hello World')
    })

app.listen(PORT)