const express = require('express');
const Router = new express.Router();
const perfumeController = require('../controllers/perfumeController');


Router.get('/', perfumeController.get);
Router.post('/', perfumeController.create);
Router.delete('/', perfumeController.delete);
Router.patch('/', perfumeController.update);


module.exports = Router;