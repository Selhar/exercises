'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _paths = require('../utils/paths');

var _paths2 = _interopRequireDefault(_paths);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/pages/nova_empresa.js?entry';


var style = {
	global: {
		margin: '15px',
		position: 'relative',
		minHeight: '55vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	},
	form: {
		width: '300px'
	}
};

var Login = function Login() {
	return _react2.default.createElement(_Layout2.default, { titulo: 'Nova empresa', descricao: 'Cadastro de empresa', __source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}, _react2.default.createElement('div', { style: style.global, __source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, _react2.default.createElement('form', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}, _react2.default.createElement(_TextField2.default, { hintText: 'Nome fantasia', __source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 28
		}
	}), _react2.default.createElement(_TextField2.default, { hintText: 'CNPJ', __source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 30
		}
	}), _react2.default.createElement('div', { style: style.form, __source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}, _react2.default.createElement(_RaisedButton2.default, { label: 'Cadastrar', primary: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	})))));
};

exports.default = Login;