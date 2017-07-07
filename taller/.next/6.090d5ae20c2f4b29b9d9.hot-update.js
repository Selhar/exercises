webpackHotUpdate(6,{

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = __webpack_require__(586);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(47);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(564);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(565);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Layout = __webpack_require__(603);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/taller/pages/nova_conta.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/taller/pages/nova_conta.js"); } } })();
    (function (Component, route) {
      if (!module.hot) return
      if (false) return

      var qs = __webpack_require__(69)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/nova_conta")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4wOTBkNWFlMjBjMmY0YjI5YjlkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbm92YV9jb250YS5qcz84N2ZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jb25zdCBvcmlnaW5hbF9zdGF0ZSA9IHtcblx0XHRcdGVtYWlsOiBcIlwiLFxuXHRcdFx0ZW1haWxFcnJvcjogXCJcIixcblx0XHRcdHNlbmhhXzE6IFwiXCIsXG5cdFx0XHRzZW5oYV8xRXJyb3I6IFwiXCIsXG5cdFx0XHRzZW5oYV8yOiBcIlwiLFxuXHRcdFx0c2VuaGFfMkVycm9yOiBcIlwiLFxufTtcblxuY29uc3Qgc3R5bGUgPSB7XG5cdGRpc3BsYXk6ICdmbGV4Jyxcblx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0aGVpZ2h0OiAnODB2aCdcbn07XG5cbmNvbnN0IGJ1dHRvblN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxufTtcblxuY29uc3QgaW5kaXZpZHVhbEJ1dHRvblN0eWxlID0ge1xuXHR3aWR0aDogJzUwJScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3ZhX2NvbnRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0b3JpZ2luYWxfc3RhdGVcblx0XHR9O1xuXG5cdFx0dGhpcy52YWxpZGFJbnB1dCA9IHRoaXMudmFsaWRhSW5wdXQuYmluZCh0aGlzKTtcblx0fVxuXG5cdHZhbGlkYUlucHV0KCkge1xuXHRcdGlmKHRoaXMuc3RhdGUuZW1haWwgPT0gXCJcIil7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlbWFpbEVycm9yOiBtZW5zYWdlbV9lcnJvfSk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlbWFpbEVycm9yOiBcIlwifSk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuc3RhdGUuc2VuaGFfMSA9PSBcIlwiKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3NlbmhhXzFFcnJvcjogbWVuc2FnZW1fZXJyb30pO1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7c2VuaGFfMUVycm9yOiBcIlwifSk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuc3RhdGUuc2VuaGFfMiA9PSBcIlwiKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3NlbmhhXzJFcnJvcjogbWVuc2FnZW1fZXJyb30pO1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7c2VuaGFfMkVycm9yOiBcIlwifSk7XG5cdFx0fVxuXHR9XG5cblx0Z2VyZW5jaWFJbnB1dChldmVudG8pIHtcblx0XHRjb25zdCBuYW1lID0gZXZlbnRvLnRhcmdldC5uYW1lO1xuXHRcdGNvbnN0IHZhbHVlID0gZXZlbnRvLnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PExheW91dCB0aXR1bG89XCJOb3ZhIGNvbnRhXCIgZGVzY3JpY2FvPVwiQ3JpYcOnw6NvIGRlIG5vdmEgY29udGFcIj5cblx0XHRcdFx0PGRpdiBzdHlsZT17c3R5bGV9PlxuXHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZCBcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudG8pID0+IHRoaXMuZ2VyZW5jaWFJbnB1dChldmVudG8pfVxuXHRcdFx0XHRcdFx0XHRoaW50VGV4dD1cIkUtbWFpbFwiXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRcdGZsb2F0aW5nTGFiZWxUZXh0PVwiRS1tYWlsXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG5cdFx0XHRcdFx0XHRcdGVycm9yVGV4dD17dGhpcy5zdGF0ZS5lcnJvTG9naW59XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHQ8VGV4dEZpZWxkIFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50bykgPT4gdGhpcy5nZXJlbmNpYUlucHV0KGV2ZW50byl9XG5cdFx0XHRcdFx0XHRcdGhpbnRUZXh0PVwiU2VuaGFcIiBcblx0XHRcdFx0XHRcdFx0bmFtZT1cInNlbmhhXzFcIlxuXHRcdFx0XHRcdFx0XHRmbG9hdGluZ0xhYmVsVGV4dD1cIlNlbmhhXCJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc2VuaGFfMX1cblx0XHRcdFx0XHRcdFx0ZXJyb3JUZXh0PXt0aGlzLnN0YXRlLnNlbmhhXzFFcnJvcn1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdDxUZXh0RmllbGQgXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnRvKSA9PiB0aGlzLmdlcmVuY2lhSW5wdXQoZXZlbnRvKX1cblx0XHRcdFx0XHRcdFx0aGludFRleHQ9XCJSZXBldGlyIHNlbmhhXCIgXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJzZW5oYV8yXCJcblx0XHRcdFx0XHRcdFx0ZmxvYXRpbmdMYWJlbFRleHQ9XCJSZXBldGlyIHNlbmhhXCJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc2VuaGFfMn1cblx0XHRcdFx0XHRcdFx0ZXJyb3JUZXh0PXt0aGlzLnN0YXRlLnNlbmhhXzJFcnJvcn1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdDxSYWlzZWRCdXR0b24gXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtpbmRpdmlkdWFsQnV0dG9uU3R5bGV9IFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkxpbXBhclwiIFxuXHRcdFx0XHRcdFx0XHRzZWNvbmRhcnk9e3RydWV9IFxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYWlzZWRCdXR0b24gXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtpbmRpdmlkdWFsQnV0dG9uU3R5bGV9IFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNvbmZpcm1hclwiIFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLnZhbGlkYUlucHV0fVxuXHRcdFx0XHRcdFx0XHRwcmltYXJ5PXt0cnVlfSBcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGF5b3V0PlxuXHQpfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL25vdmFfY29udGEuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBSEE7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTs7QUFRQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTs7QUFRQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTs7QUFRQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBOztBQUpBO0FBU0E7QUFUQTtBQUNBOzs7OztBQTNFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==