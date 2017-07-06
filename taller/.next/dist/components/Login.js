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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/components/Login.js';


var style = {};

var buttonStyle = {
	width: '100%'
};

var individualButtonStyle = {
	width: '50%',
	fontSize: '1vw'
};

var Login = function Login() {
	return _react2.default.createElement('div', { style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}, _react2.default.createElement(_TextField2.default, { hintText: 'Login', __source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}), _react2.default.createElement(_TextField2.default, { hintText: 'Senha', __source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}), _react2.default.createElement('div', { style: buttonStyle, __source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, _react2.default.createElement(_RaisedButton2.default, { style: individualButtonStyle, label: 'Nova conta', secondary: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}), _react2.default.createElement(_RaisedButton2.default, { style: individualButtonStyle, label: 'Login', primary: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	})));
};

exports.default = Login;