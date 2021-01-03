const { Opinion } = require('../models');

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
                message: 'There was a problem trying to create the event'
            })           
        }
    }

}

module.exports = OpinionController;