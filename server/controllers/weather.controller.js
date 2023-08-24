const Weather = require('../models/weather.model');
Model.MongooseQuery() //each query will follow this structure



module.exports.createWeather = (request, response) => {
    Weather.create(request.body)
        .then(weather => response.json(weather))
        .catch(err => response.json(err));
}

module.exports.findAllWeather = (req, res) => {
    Weather.find()
        .then((allWeather) => {
            res.json(allWeather)
        })
        .catch((err) => {
            res.json({ message: 'Something is not right', error: err })
        });
}

module.exports.getWeather = (req, res) => {
    Weather.findOne({_id:req.params.id})
        .then(weather => res.json(weather))
        .catch(err => res.json(err));
}

module.exports.updateWeather = (request, response) => {
    Weather.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedWeather => response.json(updatedWeather))
        .catch(err => response.json(err))
}

module.exports.deleteWeather = (request, response) => {
    Weather.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}