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
    crudModel.remove({name:name},(error, data) => {
        if (error) {
            res.send(error)
        } else {
            crudModel.find({}, (error, data) => {
                res.send(data);
            })
        }
    })
}

const updateNeWItem = async (req, res) => {
    const id = req.params.id;
    const {level,name} = req.body;
    crudModel.findOne({_id:id},(error,data)=>{
        if(error){
         res.send(error);
        }else{
            data.name=name,
            data.level=level,
            data.save().then(()=>{
                crudModel.find({}, (error, data) => {
                    res.send(data);
                })
            })
           

        }
    })

}

module.exports = {
    createNeWItem,
    getNeWItem,
    deleteNeWItem,
    updateNeWItem
}