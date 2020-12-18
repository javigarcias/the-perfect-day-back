const { Commerce } = require('../models');


const CommerceController = {

    async register(req,res){
        try {
            const commerce = Commerce.create(req.body);
            res.status(201).send(commerce);
        } catch (error) {
            console.error(error);
            res.status(500).send({ error,message: 'There was a problem trying to create the commerce' });
        }
    },

    async getAll(req,res) {
        try {
            const commerces = Commerce.findAll();
            res.status(201).send(commerces);
        } catch (error) {
            console.error(error);
            res.status(500).send({ error,message: 'There was a problem trying to get commerces' });
            
        }
    }

}

module.exports = CommerceController;