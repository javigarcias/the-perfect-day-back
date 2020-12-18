const { Event, User, Commerce } = require('../models');

const EventController = {

    async createImageBitmap(req,res){
        try {
            const event = await Event.create({
                name: req.body.name,
                date: req.body.date,
                city: req.body.city,
                UserId: req.user.id
            });
            await event.addCommerce(req.body.commerce);
            res.send ({
                message: 'Event created successfully'
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

module.exports = EventController;