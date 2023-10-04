const express = require('express');
const router = express.Router();
const Anuncios = require('../../models/Anuncios');

router.get('/', async (req, res, next) => {

    try{
        const anuncios = await Anuncios.find();

        res.json({
            results: anuncios
        });
    } catch(err){
        next(err);
    };
    
});



module.exports = router;