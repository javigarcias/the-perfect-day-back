const {User} = require('../models');

const UserController = {

    async register(req,res){
        try {
            const user = User.create(req.body);
            res.status(201).send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send({ error,message: 'There was a problem trying to create the user' });
        }
    }
}

module.exports = UserController;