//Como next.js usa server e client side rendering, guardo aqui o caminho de todas URLS, para manter a aplicação DRY

let root = '/';

const paths = {
	home: root,
	nova_conta: root + 'nova_conta',
	dashboard: root + 'dashboard',
	nova_empresa: root + 'nova_empresa',
	novo_pedido: root + 'novo_pedido'
};

export default paths;