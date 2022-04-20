const express = require('express');
const routes = express.Router();
const controle = require('../controller/UsuarioCont');

routes.route('/usuario').get(controle.listar);
routes.route('/usuario').post(controle.incluir);
routes.route('/usuario').put(controle.alterar);
routes.route('/usuario/:id').delete(controle.excluir);
routes.route('/usuario/:id').get(controle.obterPeloId);
routes.route('/usuario/filtro/:filtro').get(controle.filtrar);



module.exports = routes;
