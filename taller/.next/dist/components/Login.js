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

var Login = function Login() {
	return _react2.default.createElement('div', { style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(_TextField2.default, { hintText: 'Login', __source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}), _react2.default.createElement(_TextField2.default, { hintText: 'Password', __source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}), _react2.default.createElement(_RaisedButton2.default, { label: 'Primary', primary: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}), _react2.default.createElement(_RaisedButton2.default, { label: 'Secondary', secondary: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}));
};

exports.default = Login;