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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/components/Login.js';


var mensagem_erro = "Este campo é obrigatório";

var style = {};

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

var Login = function (_React$Component) {
	(0, _inherits3.default)(Login, _React$Component);

	function Login(props) {
		(0, _classCallCheck3.default)(this, Login);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this, props));

		_this.state = {
			login: "",
			senha: "",
			erroSenha: "",
			erroLogin: ""
		};

		_this.validaInput = _this.validaInput.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(Login, [{
		key: 'validaInput',
		value: function validaInput() {
			console.log(this.state);
			if (this.state.login == "") {
				this.setState({ erroLogin: mensagem_erro });
			} else {
				this.setState({ erroLogin: "" });
			}
			if (this.state.senha == "") {
				this.setState({ erroSenha: mensagem_erro });
			} else {
				this.setState({ erroSenha: "" });
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

			return _react2.default.createElement('div', { style: style, __source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, _react2.default.createElement('form', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, _react2.default.createElement(_TextField2.default, {
				onChange: function onChange(evento) {
					return _this2.gerenciaInput(evento);
				},
				name: 'login',
				floatingLabelText: 'Login',
				hintText: 'Login',
				value: this.state.login,
				errorText: this.state.erroLogin,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}), _react2.default.createElement('br', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}), _react2.default.createElement(_TextField2.default, {
				onChange: function onChange(evento) {
					return _this2.gerenciaInput(evento);
				},
				name: 'senha',
				floatingLabelText: 'Senha',
				hintText: 'Senha',
				type: 'password',
				value: this.state.senha,
				errorText: this.state.erroSenha, __source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}), _react2.default.createElement('br', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 81
				}
			}), _react2.default.createElement('div', { style: buttonStyle, __source: {
					fileName: _jsxFileName,
					lineNumber: 82
				}
			}, _react2.default.createElement(_link2.default, { href: _paths2.default['nova_conta'][0], __source: {
					fileName: _jsxFileName,
					lineNumber: 83
				}
			}, _react2.default.createElement(_RaisedButton2.default, {
				style: individualButtonStyle,
				label: 'Nova conta',
				secondary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			})), _react2.default.createElement(_RaisedButton2.default, {
				style: individualButtonStyle,
				label: 'Login',
				onClick: this.validaInput,
				primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 89
				}
			}))));
		}
	}]);

	return Login;
}(_react2.default.Component);

exports.default = Login;