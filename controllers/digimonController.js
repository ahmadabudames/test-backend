'use strict';

const axios=require('axios');


const digimonModels=require('../models/digimonModel');

const getDataDigimon=async(req,res)=>{

    axios.get('https://digimon-api.vercel.app/api/digimon').then(response=>{
        const responseData=response.data.map(dig=>{
            return new digimonModels(dig);
        })
        res.send(responseData)
    }).catch(error=>{
        console.log('we have error');
        console.log(error);
    })
}

module.exports={
    getDataDigimon
};