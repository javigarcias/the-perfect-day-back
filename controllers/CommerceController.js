const { Commerce, Sequelize } = require('../models');
const Op = Sequelize.Op;


const CommerceController = {

    async register(req,res){
        try {
            const commerce = await Commerce.create(req.body);
            res.status(201).send(commerce);
        } catch (error) {
            console.error(error);
            res.status(500).send({ error,message: 'There was a problem trying to create the commerce' });
        }
    },

    async getAll(req,res) {
        try {
            const commerces = await Commerce.findAll();
            res.status(200).send(commerces);
        } catch (error) {
            console.error(error);
            res.status(500).send({ error,message: 'There was a problem trying to get commerces' });
            
        }
    },

    async getByName(req, res) {
      try {
          const commerces = await Commerce.findAll({
              where: {
                  name: {
                      [Op.like]: `%${req.params.name}%`
                  }
              }
          });
          res.status(200).send(commerces);
      } catch (error) {
        console.error(error);
        res.status(500).send({ error,message: 'There was a problem trying to get commerces' });
      }
      
    },

    async getRestaurants(req, res) {
        try {
            const restaurants = await Commerce.findAll({ where: { type: 'restaurantes' }});
            res.status(200).send(restaurants);        
        } catch (error) {
            console.error(error);
            res.status(500).send({ error,message: 'There was a problem trying to get restaurants' });
        }
    },

    async getPhotographers(req, res) {
        try {
            const photographers = await Commerce.findAll({ where: { type: 'fotografia' }});
            res.status(200).send(photographers);        
        } catch (error) {
            console.error(error);
            res.status(500).send({ error,message: 'There was a problem trying to get photographers' });
        }
    },

    async getBeauty(req, res) {
        try {
            const beauty = await Commerce.findAll({ where: { type: 'belleza' }});
            res.status(200).send(beauty);        
        } catch (error) {
            console.error(error);
            res.status(500).send({ error,message: 'There was a problem trying to get stylists' });
        }
    },

    async getFlorist(req, res) {
        try {
            const florist = await Commerce.findAll({ where: { type: 'floristerias' }});
            res.status(200).send(florist);        
        } catch (error) {
            console.error(error);
            res.status(500).send({ error,message: 'There was a problem trying to get stylists' });
        }
    },

    async getTypeAndCity(req, res) {
        try {
            const commerces = await Commerce.findAll({
                where: {
                  [Op.and]: [
                    { type: req.body.type },
                    { city: req.body.city }
                  ]
                }
              });
              res.status(200).send(commerces);
        } catch (error) {
            console.error(error);
            res.status(500).send({ error,message: 'There was a problem trying to get commerces' });
        }
    }



}

module.exports = CommerceController;