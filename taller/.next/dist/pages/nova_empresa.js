'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

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


var mensagem_erro = "Este campo é obrigatório";

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

var Nova_empresa = function (_React$Component) {
	(0, _inherits3.default)(Nova_empresa, _React$Component);

	function Nova_empresa(props) {
		(0, _classCallCheck3.default)(this, Nova_empresa);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Nova_empresa.__proto__ || (0, _getPrototypeOf2.default)(Nova_empresa)).call(this, props));

		_this.state = {
			nome_fantasia: "",
			nome_fantasiaErro: "",
			cnpj: "",
			cnpjErro: ""
		};

		_this.validaInput = _this.validaInput.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(Nova_empresa, [{
		key: 'validaInput',
		value: function validaInput() {
			if (this.state.nome_fantasia == "") {
				this.setState({ nome_fantasiaErro: mensagem_erro });
			} else {
				this.setState({ nome_fantasiaErro: "" });
			}
			if (this.state.cnpj == "") {
				this.setState({ cnpjErro: mensagem_erro });
			} else {
				this.setState({ cnpjErro: "" });
			}
		}
	}, {
		key: 'gerenciaInput',
		value: function gerenciaInput(evento) {
			var name = evento.target.name;
			var value = evento.target.value;
			this.setState((0, _defineProperty3.default)({}, name, value));
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(_Layout2.default, { titulo: 'Nova empresa', descricao: 'Cadastro de empresa', __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement('div', { style: style.global, __source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, _react2.default.createElement('form', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, _react2.default.createElement(_TextField2.default, {
				hintText: 'Nome fantasia',
				onChange: function onChange(evento) {
					return _this2.gerenciaInput(evento);
				},
				name: 'nome_fantasia',
				floatingLabelText: 'Nome fantasia',
				value: this.state.nome_fantasia,
				errorText: this.state.nome_fantasiaErro,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}), _react2.default.createElement('br', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}), _react2.default.createElement(_TextField2.default, {
				hintText: 'cnpj',
				onChange: function onChange(evento) {
					return _this2.gerenciaInput(evento);
				},
				name: 'cnpj',
				floatingLabelText: 'CNPJ',
				value: this.state.cnpj,
				errorText: this.state.cnpjErro,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}), _react2.default.createElement('br', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}), _react2.default.createElement('div', { style: style.form, __source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, _react2.default.createElement(_RaisedButton2.default, {
				label: 'Cadastrar',
				primary: true,
				onClick: this.validaInput,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			})))));
		}
	}]);

	return Nova_empresa;
}(_react2.default.Component);

exports.default = Nova_empresa;