const express = require('express');

const OngController = require('./constrollers/OngController');
const IncidentController = require('./constrollers/IncidentController');
const ProfileController = require('./constrollers/ProfileController');
const SessionController = require('./constrollers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile/', ProfileController.index);

module.exports = routes;