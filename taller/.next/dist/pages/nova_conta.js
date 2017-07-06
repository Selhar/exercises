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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/pages/nova_conta.js?entry';

var style = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '80vh'
};

var buttonStyle = {
	width: '100%'
};

var individualButtonStyle = {
	width: '50%'
};

var nova_conta = function nova_conta() {
	return _react2.default.createElement(_Layout2.default, { titulo: 'Nova conta', descricao: 'Cria\xE7\xE3o de nova conta', __source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, _react2.default.createElement('div', { style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, _react2.default.createElement('form', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, _react2.default.createElement(_TextField2.default, { hintText: 'E-mail', __source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}), _react2.default.createElement(_TextField2.default, { hintText: 'Senha', __source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}), _react2.default.createElement(_TextField2.default, { hintText: 'Repetir senha', __source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 28
		}
	}), _react2.default.createElement(_RaisedButton2.default, {
		style: individualButtonStyle,
		label: 'Limpar',
		secondary: true,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}), _react2.default.createElement(_RaisedButton2.default, {
		style: individualButtonStyle,
		label: 'Confirmar',
		primary: true,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 34
		}
	}))));
};

exports.default = nova_conta;