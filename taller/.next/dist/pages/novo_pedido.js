'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Table = require('material-ui/Table');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/pages/novo_pedido.js?entry';


var style = {
	tabela: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	},
	novoPedido: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	}
};

var Dashboard = function Dashboard() {
	return _react2.default.createElement(_Layout2.default, { titulo: 'Novo pedido', __source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}, _react2.default.createElement('div', { style: style.novoPedido, __source: {
			fileName: _jsxFileName,
			lineNumber: 33
		}
	}, _react2.default.createElement(_SelectField2.default, { floatingLabelText: 'Selecione uma empresa', __source: {
			fileName: _jsxFileName,
			lineNumber: 34
		}
	}, _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'Never', __source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}), _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: 'Every Night', __source: {
			fileName: _jsxFileName,
			lineNumber: 36
		}
	}), _react2.default.createElement(_MenuItem2.default, { value: 3, primaryText: 'Weeknights', __source: {
			fileName: _jsxFileName,
			lineNumber: 37
		}
	}), _react2.default.createElement(_MenuItem2.default, { value: 4, primaryText: 'Weekends', __source: {
			fileName: _jsxFileName,
			lineNumber: 38
		}
	}), _react2.default.createElement(_MenuItem2.default, { value: 5, primaryText: 'Weekly', __source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	})), _react2.default.createElement(_SelectField2.default, { floatingLabelText: 'Selecione um produto', __source: {
			fileName: _jsxFileName,
			lineNumber: 41
		}
	}, _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'Never', __source: {
			fileName: _jsxFileName,
			lineNumber: 42
		}
	}), _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: 'Every Night', __source: {
			fileName: _jsxFileName,
			lineNumber: 43
		}
	}), _react2.default.createElement(_MenuItem2.default, { value: 3, primaryText: 'Weeknights', __source: {
			fileName: _jsxFileName,
			lineNumber: 44
		}
	}), _react2.default.createElement(_MenuItem2.default, { value: 4, primaryText: 'Weekends', __source: {
			fileName: _jsxFileName,
			lineNumber: 45
		}
	}), _react2.default.createElement(_MenuItem2.default, { value: 5, primaryText: 'Weekly', __source: {
			fileName: _jsxFileName,
			lineNumber: 46
		}
	})), _react2.default.createElement(_TextField2.default, { hintText: 'Qtd', __source: {
			fileName: _jsxFileName,
			lineNumber: 48
		}
	}), _react2.default.createElement(_RaisedButton2.default, { label: 'Adicionar', primary: true, style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 49
		}
	})), _react2.default.createElement('div', { style: style.tabela, __source: {
			fileName: _jsxFileName,
			lineNumber: 51
		}
	}, _react2.default.createElement(_Table.Table, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 52
		}
	}, _react2.default.createElement(_Table.TableHeader, { displaySelectAll: false, adjustForCheckbox: false, __source: {
			fileName: _jsxFileName,
			lineNumber: 53
		}
	}, _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 54
		}
	}, _react2.default.createElement(_Table.TableHeaderColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 55
		}
	}, 'Nome fantasia'), _react2.default.createElement(_Table.TableHeaderColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 56
		}
	}, 'CNPJ'), _react2.default.createElement(_Table.TableHeaderColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 57
		}
	}, 'Qtd. Pedidos'))), _react2.default.createElement(_Table.TableBody, { displayRowCheckbox: false, __source: {
			fileName: _jsxFileName,
			lineNumber: 60
		}
	}, _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 61
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 62
		}
	}, 'Drupatec solu\xE7\xF5es'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 63
		}
	}, '28.354.669/0001-09'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 64
		}
	}, '1')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 66
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 67
		}
	}, 'BRFoods'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 68
		}
	}, '35.577.109/0001-70'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 69
		}
	}, '4')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 71
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 72
		}
	}, 'PasquePag'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 73
		}
	}, '34.763.818/0001-88'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 74
		}
	}, '0')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 76
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 77
		}
	}, 'ClubSocial'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 78
		}
	}, '21.211.526/0001-90'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 79
		}
	}, '2')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 81
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 82
		}
	}, 'Bamerindus'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 83
		}
	}, '87.487.918/0001-95'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 84
		}
	}, '1')))), _react2.default.createElement(_RaisedButton2.default, { label: 'Fechar pedido', primary: true, style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 88
		}
	})));
};

exports.default = Dashboard;