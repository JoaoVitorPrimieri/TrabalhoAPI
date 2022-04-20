const express = require('express');
const routes = express.Router();
const controle = require('../controller/AgendamentoCont');

routes.route('/agendamento').get(controle.listar);
routes.route('/agendamento').post(controle.incluir);
routes.route('/agendamento').put(controle.alterar);
routes.route('/agendamento/:id').delete(controle.excluir);
routes.route('/agendamento/:id').get(controle.obterPeloId);
routes.route('/agendamento/filtro/:filtro').get(controle.filtrar);



module.exports = routes;
