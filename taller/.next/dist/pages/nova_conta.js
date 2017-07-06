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

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/pages/nova_conta.js?entry';


var style = {
	minHeight: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};

var buttonStyle = {
	width: '100%'
};

var individualButtonStyle = {
	width: '50%',
	fontSize: '1vw'
};

var Header = {
	position: 'absolute',
	top: '25px'

};

var muiTheme = (0, _getMuiTheme2.default)({ userAgent: false });

var nova_conta = function nova_conta() {
	return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: muiTheme, __source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}, _react2.default.createElement('div', { style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}, _react2.default.createElement('form', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 33
		}
	}, _react2.default.createElement(_TextField2.default, { hintText: 'E-mail', __source: {
			fileName: _jsxFileName,
			lineNumber: 34
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}), _react2.default.createElement(_TextField2.default, { hintText: 'Senha', __source: {
			fileName: _jsxFileName,
			lineNumber: 36
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 37
		}
	}), _react2.default.createElement(_TextField2.default, { hintText: 'Repetir senha', __source: {
			fileName: _jsxFileName,
			lineNumber: 38
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	}), _react2.default.createElement(_RaisedButton2.default, { style: individualButtonStyle, label: 'Limpar', secondary: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 40
		}
	}), _react2.default.createElement(_RaisedButton2.default, { style: individualButtonStyle, label: 'Confirmar', primary: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 41
		}
	}))));
};

exports.default = nova_conta;