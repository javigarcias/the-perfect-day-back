const { Opinion,Commerce, User, Sequelize } = require('../models');
const Op = Sequelize.Op;


const OpinionController = {

    async create(req,res){
        try {
            const opinion = await Opinion.create({
                UserId: req.body.UserId,
                CommerceId: req.body.CommerceId,
                vote: req.body.vote,
                opinion: req.body.opinion
            });
            res.send ({
                message: 'Opinion created successfully',
                opinion
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to create the opinion'
            })           
        }
    },

    async getByCommerce(req,res){
        
        try {
            const opinions = await Opinion.findAll({
                where: {
                    CommerceId: req.params.id
                }
            });
            res.status(200).send(opinions);
            
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to get the opinions'
            })      
        }
    },
    async getAll(req,res) {
        try {
            const opinions = await Opinion.findAll({
                attributes:['vote', 'opinion'],
                include: [{
                    model:Commerce,
                    attributes:['name', 'image']
                },
                {
                    model: User,
                    attributes: ['name']
                }
            ]
            });
            res.status(200).send(opinions);
        } catch (error) {
            console.error(error);
            res.status(500).send({ error,message: 'There was a problem trying to get opinions' });
            
        }
    },

}

module.exports = OpinionController;