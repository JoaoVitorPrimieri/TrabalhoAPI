const express = require('express');
const routes = express.Router();
const controle = require('../controller/MaquinaCont');

routes.route('/maquina').get(controle.listar);
routes.route('/maquina').post(controle.incluir);
routes.route('/maquina').put(controle.alterar);
routes.route('/maquina/:id').delete(controle.excluir);
routes.route('/maquina/:id').get(controle.obterPeloId);
routes.route('/maquina/filtro/:filtro').get(controle.filtrar);



module.exports = routes;
