'use strict';


const crudModel = require('../models/digimonCrudModel');

const createNeWItem = async (req, res) => {
    const {
        name,
        img,
        level
    } = req.body;
    crudModel.find({ name: name }, (error, data) => {
        if (data.length > 0) {
            res.send('already have it');
        } else {

            const newDigimon = new crudModel({
                name: name,
                img: img,
                level: level
            })
            newDigimon.save();
            res.send(newDigimon)
        }

    })
}


const getNeWItem = async (req, res) => {
    crudModel.find({}, (error, data) => {
        res.send(data);
    })
}

const deleteNeWItem = async (req, res) => {
    const name = req.params.name;
    crudModel.deleteOne({name:name},(error, data) => {
        if (error) {
            res.send(error)
        } else {
            res.send(data)
        }
    })
}

const updateNeWItem = async (req, res) => {
    const name = req.params.name;
    const {level} = req.body;
    crudModel.findOne({name:name},(error,data)=>{
        if(error){
         res.send(error);
        }else{
         
            data.level=level,
            data.save();
            res.send(data)

        }
    })

}

module.exports = {
    createNeWItem,
    getNeWItem,
    deleteNeWItem,
    updateNeWItem
}