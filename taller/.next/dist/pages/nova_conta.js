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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/pages/nova_conta.js?entry';


var original_state = {
	email: "",
	emailError: "",
	senha_1: "",
	senha_1Error: "",
	senha_2: "",
	senha_2Error: ""
};

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

var Nova_conta = function (_React$Component) {
	(0, _inherits3.default)(Nova_conta, _React$Component);

	function Nova_conta(props) {
		(0, _classCallCheck3.default)(this, Nova_conta);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Nova_conta.__proto__ || (0, _getPrototypeOf2.default)(Nova_conta)).call(this, props));

		_this.state = {
			original_state: original_state
		};

		_this.validaInput = _this.validaInput.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(Nova_conta, [{
		key: 'validaInput',
		value: function validaInput() {
			if (this.state.email == "") {
				this.setState({ emailError: mensagem_erro });
			} else {
				this.setState({ emailError: "" });
			}
			if (this.state.senha_1 == "") {
				this.setState({ senha_1Error: mensagem_erro });
			} else {
				this.setState({ senha_1Error: "" });
			}
			if (this.state.senha_2 == "") {
				this.setState({ senha_2Error: mensagem_erro });
			} else {
				this.setState({ senha_2Error: "" });
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

			return _react2.default.createElement(_Layout2.default, { titulo: 'Nova conta', descricao: 'Cria\xE7\xE3o de nova conta', __source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, _react2.default.createElement('div', { style: style, __source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, _react2.default.createElement('form', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, _react2.default.createElement(_TextField2.default, {
				onChange: function onChange(evento) {
					return _this2.gerenciaInput(evento);
				},
				hintText: 'E-mail',
				type: 'email',
				name: 'email',
				floatingLabelText: 'E-mail',
				value: this.state.email,
				errorText: this.state.erroLogin,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			}), _react2.default.createElement('br', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}), _react2.default.createElement(_TextField2.default, {
				onChange: function onChange(evento) {
					return _this2.gerenciaInput(evento);
				},
				hintText: 'Senha',
				name: 'senha_1',
				floatingLabelText: 'Senha',
				type: 'password',
				value: this.state.senha_1,
				errorText: this.state.senha_1Error,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}), _react2.default.createElement('br', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 87
				}
			}), _react2.default.createElement(_TextField2.default, {
				onChange: function onChange(evento) {
					return _this2.gerenciaInput(evento);
				},
				hintText: 'Repetir senha',
				name: 'senha_2',
				floatingLabelText: 'Repetir senha',
				type: 'password',
				value: this.state.senha_2,
				errorText: this.state.senha_2Error,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}), _react2.default.createElement('br', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 97
				}
			}), _react2.default.createElement(_RaisedButton2.default, {
				style: individualButtonStyle,
				label: 'Limpar',
				secondary: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 98
				}
			}), _react2.default.createElement(_RaisedButton2.default, {
				style: individualButtonStyle,
				label: 'Confirmar',
				onClick: this.validaInput,
				primary: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 103
				}
			}))));
		}
	}]);

	return Nova_conta;
}(_react2.default.Component);

exports.default = Nova_conta;