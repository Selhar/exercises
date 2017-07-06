'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _paths = require('../utils/paths');

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/components/Header.js';


var style = {
	marginRight: 15
};

var Header = function Header() {
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement(_link2.default, { href: _paths2.default.home, __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, _react2.default.createElement('a', { style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, 'Login')), _react2.default.createElement(_link2.default, { href: _paths2.default.nova_conta, __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement('a', { style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, 'Nova conta')));
};

exports.default = Header;