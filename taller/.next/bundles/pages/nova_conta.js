
          window.__NEXT_REGISTER_PAGE('/nova_conta', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(578);


/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = __webpack_require__(579);

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

var _TextField = __webpack_require__(580);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(561);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Layout = __webpack_require__(597);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/pages/nova_conta.js?entry';


var mensagem_erro = "Este campo é obrigatório";

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
			email: "",
			emailError: "",
			senha_1: "",
			senha_1Error: "",
			senha_2: "",
			senha_2Error: ""
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
					lineNumber: 63
				}
			}, _react2.default.createElement('div', { style: style, __source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, _react2.default.createElement('form', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, _react2.default.createElement(_TextField2.default, {
				onChange: function onChange(evento) {
					return _this2.gerenciaInput(evento);
				},
				hintText: 'E-mail',
				type: 'text',
				name: 'email',
				floatingLabelText: 'E-mail',
				value: this.state.email,
				errorText: this.state.emailError,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}), _react2.default.createElement('br', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 75
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
					lineNumber: 76
				}
			}), _react2.default.createElement('br', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 85
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
					lineNumber: 86
				}
			}), _react2.default.createElement('br', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 95
				}
			}), _react2.default.createElement(_RaisedButton2.default, {
				style: individualButtonStyle,
				label: 'Limpar',
				secondary: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 96
				}
			}), _react2.default.createElement(_RaisedButton2.default, {
				style: individualButtonStyle,
				label: 'Confirmar',
				onClick: this.validaInput,
				primary: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 101
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

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = __webpack_require__(238);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(40);

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var _link = __webpack_require__(566);

var _link2 = _interopRequireDefault(_link);

var _Drawer = __webpack_require__(600);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = __webpack_require__(604);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _RaisedButton = __webpack_require__(561);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FloatingActionButton = __webpack_require__(632);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _menu = __webpack_require__(634);

var _menu2 = _interopRequireDefault(_menu);

var _paths = __webpack_require__(635);

var _paths2 = _interopRequireDefault(_paths);

var _Header = __webpack_require__(636);

var _Header2 = _interopRequireDefault(_Header);

var _MuiThemeProvider = __webpack_require__(637);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = __webpack_require__(572);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _reactTapEventPlugin = __webpack_require__(671);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/components/Layout.js';


var muiTheme = (0, _getMuiTheme2.default)({ userAgent: false });

var style = {
	margin: '15px',
	position: 'relative',
	minHeight: '95vh'
};

var Layout = function (_React$Component) {
	(0, _inherits3.default)(Layout, _React$Component);

	function Layout() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Layout);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			open: false,
			drawerWidth: '0'
		}, _this.toggle = function () {
			_this.setState(function (previousState, props) {
				return {
					open: !previousState.open,
					drawerWidth: previousState.open ? '0' : '260px'
				};
			});
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Layout, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			try {
				(0, _reactTapEventPlugin2.default)();
			} catch (error) {
				console.log(error);
			};
		}
	}, {
		key: 'render',
		value: function render() {
			var buttonStyle = {
				marginLeft: this.state.drawerWidth,
				position: 'absolute',
				top: '0'
			};

			var routes = [];
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(_paths2.default)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var key = _step.value;

					routes.push(_react2.default.createElement(_link2.default, { href: _paths2.default[key][0], __source: {
							fileName: _jsxFileName,
							lineNumber: 55
						}
					}, _react2.default.createElement(_MenuItem2.default, {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 56
						}
					}, _paths2.default[key][1])));
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: muiTheme, __source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, _react2.default.createElement('div', { style: style, __source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, _react2.default.createElement(_Header2.default, { titulo: this.props.titulo, __source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}), _react2.default.createElement(_FloatingActionButton2.default, {
				label: 'Toggle Drawer',
				onTouchTap: this.toggle,
				style: buttonStyle,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, _react2.default.createElement(_menu2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			})), _react2.default.createElement(_Drawer2.default, { open: this.state.open, style: { width: this.state.drawerWidth }, __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, routes), this.props.children));
		}
	}]);

	return Layout;
}(_react2.default.Component);

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/taller/components/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/taller/components/Layout.js"); } } })();

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//Preciso acessar esses caminhos tanto no servidor como no cliente, 
//mantenho tudo aqui pra que a aplicação continue DRY

var root = '/';

var paths = {
	home: [root, 'Login'],
	nova_conta: [root + 'nova_conta', 'Nova conta'],
	dashboard: [root + 'dashboard', 'Dashboard'],
	nova_empresa: [root + 'nova_empresa', 'Nova empresa'],
	pedido: [root + 'pedido', 'Pedidos'],
	novo_pedido: [root + 'novo_pedido', 'Novo pedido'],
	minha_conta: [root + 'minha_conta', 'Minha conta']
};

exports.default = paths;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/taller/utils/paths.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/taller/utils/paths.js"); } } })();

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(566);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/components/Header.js';


var styleTaller = {
	textAlign: 'center',
	fontFamily: '"Alegreya", serif',
	fontStyle: 'italic',
	fontWeight: 'bold',
	textTransform: 'lowercase',
	letterSpacing: '-0.01em',
	fontSize: '2.5em'
};

var styleHeader = {
	textAlign: 'center',
	fontSize: '2.5em',
	fontWeight: 'bold'
};

var Header = function Header(props) {
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, _react2.default.createElement(_head2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, _react2.default.createElement('title', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}, props.titulo || ''), _react2.default.createElement('meta', { name: 'description', content: props.descricao, __source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Alegreya', rel: 'stylesheet', __source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}), _react2.default.createElement('link', { rel: 'icon', href: '/static/favicon.png', __source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	})), _react2.default.createElement('h1', { style: props.titulo.toString().toLowerCase() == 'taller' ? styleTaller : styleHeader, __source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}, props.titulo));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/taller/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/taller/components/Header.js"); } } })();

/***/ })

},[577]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9ub3ZhX2NvbnRhLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbm92YV9jb250YS5qcz85NmY2ZWFlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzk2ZjZlYWUiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcGF0aHMuanM/OTZmNmVhZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz85NmY2ZWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jb25zdCBtZW5zYWdlbV9lcnJvID0gXCJFc3RlIGNhbXBvIMOpIG9icmlnYXTDs3Jpb1wiO1xuXG5jb25zdCBzdHlsZSA9IHtcblx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRoZWlnaHQ6ICc4MHZoJ1xufTtcblxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG59O1xuXG5jb25zdCBpbmRpdmlkdWFsQnV0dG9uU3R5bGUgPSB7XG5cdHdpZHRoOiAnNTAlJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdmFfY29udGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRlbWFpbDogXCJcIixcblx0XHRcdGVtYWlsRXJyb3I6IFwiXCIsXG5cdFx0XHRzZW5oYV8xOiBcIlwiLFxuXHRcdFx0c2VuaGFfMUVycm9yOiBcIlwiLFxuXHRcdFx0c2VuaGFfMjogXCJcIixcblx0XHRcdHNlbmhhXzJFcnJvcjogXCJcIixcblx0XHR9O1xuXG5cdFx0dGhpcy52YWxpZGFJbnB1dCA9IHRoaXMudmFsaWRhSW5wdXQuYmluZCh0aGlzKTtcblx0fVxuXG5cdHZhbGlkYUlucHV0KCkge1xuXHRcdGlmKHRoaXMuc3RhdGUuZW1haWwgPT0gXCJcIil7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlbWFpbEVycm9yOiBtZW5zYWdlbV9lcnJvfSk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlbWFpbEVycm9yOiBcIlwifSk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuc3RhdGUuc2VuaGFfMSA9PSBcIlwiKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3NlbmhhXzFFcnJvcjogbWVuc2FnZW1fZXJyb30pO1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7c2VuaGFfMUVycm9yOiBcIlwifSk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuc3RhdGUuc2VuaGFfMiA9PSBcIlwiKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3NlbmhhXzJFcnJvcjogbWVuc2FnZW1fZXJyb30pO1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7c2VuaGFfMkVycm9yOiBcIlwifSk7XG5cdFx0fVxuXHR9XG5cblx0Z2VyZW5jaWFJbnB1dChldmVudG8pIHtcblx0XHRjb25zdCBuYW1lID0gZXZlbnRvLnRhcmdldC5uYW1lO1xuXHRcdGNvbnN0IHZhbHVlID0gZXZlbnRvLnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PExheW91dCB0aXR1bG89XCJOb3ZhIGNvbnRhXCIgZGVzY3JpY2FvPVwiQ3JpYcOnw6NvIGRlIG5vdmEgY29udGFcIj5cblx0XHRcdFx0PGRpdiBzdHlsZT17c3R5bGV9PlxuXHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZCBcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudG8pID0+IHRoaXMuZ2VyZW5jaWFJbnB1dChldmVudG8pfVxuXHRcdFx0XHRcdFx0XHRoaW50VGV4dD1cIkUtbWFpbFwiXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdFx0ZmxvYXRpbmdMYWJlbFRleHQ9XCJFLW1haWxcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cblx0XHRcdFx0XHRcdFx0ZXJyb3JUZXh0PXt0aGlzLnN0YXRlLmVtYWlsRXJyb3J9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHQ8VGV4dEZpZWxkIFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50bykgPT4gdGhpcy5nZXJlbmNpYUlucHV0KGV2ZW50byl9XG5cdFx0XHRcdFx0XHRcdGhpbnRUZXh0PVwiU2VuaGFcIiBcblx0XHRcdFx0XHRcdFx0bmFtZT1cInNlbmhhXzFcIlxuXHRcdFx0XHRcdFx0XHRmbG9hdGluZ0xhYmVsVGV4dD1cIlNlbmhhXCJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc2VuaGFfMX1cblx0XHRcdFx0XHRcdFx0ZXJyb3JUZXh0PXt0aGlzLnN0YXRlLnNlbmhhXzFFcnJvcn1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdDxUZXh0RmllbGQgXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnRvKSA9PiB0aGlzLmdlcmVuY2lhSW5wdXQoZXZlbnRvKX1cblx0XHRcdFx0XHRcdFx0aGludFRleHQ9XCJSZXBldGlyIHNlbmhhXCIgXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJzZW5oYV8yXCJcblx0XHRcdFx0XHRcdFx0ZmxvYXRpbmdMYWJlbFRleHQ9XCJSZXBldGlyIHNlbmhhXCJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc2VuaGFfMn1cblx0XHRcdFx0XHRcdFx0ZXJyb3JUZXh0PXt0aGlzLnN0YXRlLnNlbmhhXzJFcnJvcn1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdDxSYWlzZWRCdXR0b24gXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtpbmRpdmlkdWFsQnV0dG9uU3R5bGV9IFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkxpbXBhclwiIFxuXHRcdFx0XHRcdFx0XHRzZWNvbmRhcnk9e3RydWV9IFxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYWlzZWRCdXR0b24gXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtpbmRpdmlkdWFsQnV0dG9uU3R5bGV9IFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNvbmZpcm1hclwiIFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLnZhbGlkYUlucHV0fVxuXHRcdFx0XHRcdFx0XHRwcmltYXJ5PXt0cnVlfSBcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGF5b3V0PlxuXHQpfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL25vdmFfY29udGEuanM/ZW50cnkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IERyYXdlciBmcm9tICdtYXRlcmlhbC11aS9EcmF3ZXInO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBGbG9hdGluZ0FjdGlvbkJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbG9hdGluZ0FjdGlvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL25hdmlnYXRpb24vbWVudSc7XG5pbXBvcnQgcGF0aHMgZnJvbSAnLi4vdXRpbHMvcGF0aHMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJztcbmltcG9ydCBpbmplY3RUYXBFdmVudFBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJztcblxuY29uc3QgbXVpVGhlbWUgPSBnZXRNdWlUaGVtZSh7IHVzZXJBZ2VudDogZmFsc2UgfSlcblxuY29uc3Qgc3R5bGUgPSB7XG5cdG1hcmdpbjogJzE1cHgnLFxuXHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0bWluSGVpZ2h0OiAnOTV2aCcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdG9wZW46IGZhbHNlLFxuXHRcdGRyYXdlcldpZHRoOiAnMCdcblx0fTtcblx0XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBcdHRyeSB7XG5cdFx0XHRpbmplY3RUYXBFdmVudFBsdWdpbigpO1xuXHRcdH0gY2F0Y2goZXJyb3Ipe1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0fTtcbiAgXHR9XG5cblx0dG9nZ2xlID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoKHByZXZpb3VzU3RhdGUsIHByb3BzKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRvcGVuOiAhcHJldmlvdXNTdGF0ZS5vcGVuLFxuXHRcdFx0XHRkcmF3ZXJXaWR0aDogcHJldmlvdXNTdGF0ZS5vcGVuID8gJzAnIDogJzI2MHB4J1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cbiAgcmVuZGVyKCkge1xuXHRcdGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuXHRcdFx0bWFyZ2luTGVmdDogdGhpcy5zdGF0ZS5kcmF3ZXJXaWR0aCwgXG5cdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJywgXG5cdFx0XHR0b3A6ICcwJ1xuXHRcdH1cblxuXHRcdGxldCByb3V0ZXMgPSBbXTtcblx0XHRmb3IobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwYXRocykpIHtcblx0XHRcdHJvdXRlcy5wdXNoKFxuXHRcdFx0XHQ8TGluayBocmVmPXtwYXRoc1trZXldWzBdfT5cblx0XHRcdFx0XHQ8TWVudUl0ZW0+e3BhdGhzW2tleV1bMV19PC9NZW51SXRlbT5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0KVxuXHRcdH1cblxuICAgIHJldHVybiAoXG4gICAgICA8TXVpVGhlbWVQcm92aWRlciBtdWlUaGVtZT17bXVpVGhlbWV9PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZX0+XG5cdFx0XHRcdFx0PEhlYWRlciB0aXR1bG89e3RoaXMucHJvcHMudGl0dWxvfS8+XG5cdFx0XHRcdFx0PEZsb2F0aW5nQWN0aW9uQnV0dG9uIFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJUb2dnbGUgRHJhd2VyXCIgXG5cdFx0XHRcdFx0XHRvblRvdWNoVGFwPXt0aGlzLnRvZ2dsZX0gXG5cdFx0XHRcdFx0XHRzdHlsZT17YnV0dG9uU3R5bGV9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PE1lbnVJY29uIC8+XG5cdFx0XHRcdFx0PC9GbG9hdGluZ0FjdGlvbkJ1dHRvbj5cblx0XHRcdFx0XHQ8RHJhd2VyIG9wZW49e3RoaXMuc3RhdGUub3Blbn0gc3R5bGU9e3t3aWR0aDogdGhpcy5zdGF0ZS5kcmF3ZXJXaWR0aH19PlxuXHRcdFx0XHRcdFx0e3JvdXRlc31cblx0XHRcdFx0XHQ8L0RyYXdlcj5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PC9kaXY+XG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwiLy9QcmVjaXNvIGFjZXNzYXIgZXNzZXMgY2FtaW5ob3MgdGFudG8gbm8gc2Vydmlkb3IgY29tbyBubyBjbGllbnRlLCBcbi8vbWFudGVuaG8gdHVkbyBhcXVpIHByYSBxdWUgYSBhcGxpY2HDp8OjbyBjb250aW51ZSBEUllcblxubGV0IHJvb3QgPSAnLyc7XG5cbmNvbnN0IHBhdGhzID0ge1xuXHRob21lOiBbcm9vdCwgJ0xvZ2luJ10sXG5cdG5vdmFfY29udGE6IFtyb290ICsgJ25vdmFfY29udGEnLCAnTm92YSBjb250YSddLFxuXHRkYXNoYm9hcmQ6IFtyb290ICsgJ2Rhc2hib2FyZCcsICdEYXNoYm9hcmQnXSxcblx0bm92YV9lbXByZXNhOiBbcm9vdCArICdub3ZhX2VtcHJlc2EnLCAnTm92YSBlbXByZXNhJ10sXG5cdHBlZGlkbzogW3Jvb3QgKyAncGVkaWRvJywgJ1BlZGlkb3MnXSxcblx0bm92b19wZWRpZG86IFtyb290ICsgJ25vdm9fcGVkaWRvJywgJ05vdm8gcGVkaWRvJ10sXG5cdG1pbmhhX2NvbnRhOiBbcm9vdCArICdtaW5oYV9jb250YScsICdNaW5oYSBjb250YSddLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGF0aHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvcGF0aHMuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBzdHlsZVRhbGxlciA9IHtcblx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0Zm9udEZhbWlseTogJ1wiQWxlZ3JleWFcIiwgc2VyaWYnLFxuXHRmb250U3R5bGU6ICdpdGFsaWMnLFxuXHRmb250V2VpZ2h0OiAnYm9sZCcsXG5cdHRleHRUcmFuc2Zvcm06ICdsb3dlcmNhc2UnLFxuXHRsZXR0ZXJTcGFjaW5nOiAnLTAuMDFlbScsXG5cdGZvbnRTaXplOiAnMi41ZW0nXG59XG5cbmNvbnN0IHN0eWxlSGVhZGVyID0ge1xuXHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHRmb250U2l6ZTogJzIuNWVtJyxcblx0Zm9udFdlaWdodDogJ2JvbGQnLFxufVxuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IChcblx0PGRpdj5cblx0XHQ8SGVhZD5cblx0XHRcdDx0aXRsZT57cHJvcHMudGl0dWxvIHx8ICcnfTwvdGl0bGU+XG5cdFx0XHQ8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwcm9wcy5kZXNjcmljYW99IC8+XG5cdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiLz5cblx0XHRcdDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxlZ3JleWFcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cblx0XHRcdDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLnBuZ1wiIC8+XG5cdFx0PC9IZWFkPlxuXHRcdDxoMSBzdHlsZT17XG5cdFx0XHRwcm9wcy50aXR1bG8udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09ICd0YWxsZXInIFxuXHRcdFx0PyBzdHlsZVRhbGxlciBcblx0XHRcdDogc3R5bGVIZWFkZXJcblx0XHR9PlxuXHRcdFx0e3Byb3BzLnRpdHVsb31cblx0XHQ8L2gxPlxuXHQ8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUkE7QUFDQTtBQU9BO0FBQ0E7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTs7QUFRQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTs7QUFRQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTs7QUFRQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBOztBQUpBO0FBU0E7QUFUQTtBQUNBOzs7OztBQWhGQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQWFBOztBQUVBO0FBQ0E7QUFEQTtBQUlBOzs7Ozs7QUFkQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBRUE7Ozs7QUFZQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBUEE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTs7QUFJQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOzs7OztBQXJEQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUNBO0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFLQTtBQUxBO0FBS0E7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        