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

var _Table = require('material-ui/Table');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/pages/dashboard.js?entry';


var style = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '80vh'
};

var Dashboard = function Dashboard() {
	return _react2.default.createElement(_Layout2.default, { titulo: 'Dashboard', __source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, _react2.default.createElement('div', { style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, _react2.default.createElement(_Table.Table, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}, _react2.default.createElement(_Table.TableHeader, { displaySelectAll: false, adjustForCheckbox: false, __source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}, _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, _react2.default.createElement(_Table.TableHeaderColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}, 'Nome fantasia'), _react2.default.createElement(_Table.TableHeaderColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}, 'CNPJ'), _react2.default.createElement(_Table.TableHeaderColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 28
		}
	}, 'Qtd. Pedidos'))), _react2.default.createElement(_Table.TableBody, { displayRowCheckbox: false, __source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}, _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 33
		}
	}, 'Drupatec solu\xE7\xF5es'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 34
		}
	}, '28.354.669/0001-09'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}, '1')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 37
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 38
		}
	}, 'BRFoods'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	}, '35.577.109/0001-70'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 40
		}
	}, '4')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 42
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 43
		}
	}, 'PasquePag'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 44
		}
	}, '34.763.818/0001-88'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 45
		}
	}, '0')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 47
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 48
		}
	}, 'ClubSocial'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 49
		}
	}, '21.211.526/0001-90'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 50
		}
	}, '2')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 52
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 53
		}
	}, 'Bamerindus'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 54
		}
	}, '87.487.918/0001-95'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 55
		}
	}, '1'))))));
};

exports.default = Dashboard;