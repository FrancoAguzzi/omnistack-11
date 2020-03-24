const express = require('express');

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
routes.post('/ongs', OngController.create);

// Incident Routes
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

// Profile Route
routes.get('/profile', ProfileController.index);

// Session Route
routes.post('/sessions', SessionController.create);

module.exports = routes;

// Rota / Recurso

// Query Params x Route Params x Request Body
// request.query acessa parâmetros query
// request.params acessa parâmetros route
// request.body acessa request body