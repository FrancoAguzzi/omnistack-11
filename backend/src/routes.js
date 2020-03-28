const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

// Importing Controllers
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// DataBase Connection
const connection = require('./database/connection');

const routes = express.Router();

// ONG Routes
routes.get('/ongs', OngController.index);


routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);

// Incident Routes
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentController.delete);

// Profile Route
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

// Session Route
routes.post('/sessions', SessionController.create);

module.exports = routes;

// Rota / Recurso

// Query Params x Route Params x Request Body
// request.query acessa parâmetros query
// request.params acessa parâmetros route
// request.body acessa request body