//Preciso acessar esses caminhos tanto no servidor como no cliente, 
//mantenho tudo aqui pra que a aplicação continue DRY

let root = '/';

const paths = {
	home: root,
	nova_conta: root + 'nova_conta',
	dashboard: root + 'dashboard',
	nova_empresa: root + 'nova_empresa',
	pedido: root + 'pedido',
	novo_pedido: root + 'novo_pedido',
};

export default paths;