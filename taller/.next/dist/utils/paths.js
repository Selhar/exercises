'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
//Preciso acessar esses caminhos tanto no servidor como no cliente, mantenho tudo aqui pra que a aplicação continue DRY

var root = '/';

var paths = {
	home: root,
	nova_conta: root + 'nova_conta',
	dashboard: root + 'dashboard',
	nova_empresa: root + 'nova_empresa',
	novo_pedido: root + 'novo_pedido'
};

exports.default = paths;