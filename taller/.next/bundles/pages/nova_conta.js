
          window.__NEXT_REGISTER_PAGE('/nova_conta', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 556:
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

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(557);

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

/***/ }),

/***/ 603:
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

var _link = __webpack_require__(557);

var _link2 = _interopRequireDefault(_link);

var _Drawer = __webpack_require__(604);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = __webpack_require__(608);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _RaisedButton = __webpack_require__(565);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FloatingActionButton = __webpack_require__(636);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _menu = __webpack_require__(638);

var _menu2 = _interopRequireDefault(_menu);

var _paths = __webpack_require__(556);

var _paths2 = _interopRequireDefault(_paths);

var _Header = __webpack_require__(563);

var _Header2 = _interopRequireDefault(_Header);

var _MuiThemeProvider = __webpack_require__(639);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = __webpack_require__(575);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _reactTapEventPlugin = __webpack_require__(673);

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

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(680);


/***/ }),

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

},[679]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9ub3ZhX2NvbnRhLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvcGF0aHMuanM/YzQyMzkzOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz9jNDIzOTM5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzP2M0MjM5MzkiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbm92YV9jb250YS5qcz9jNDIzOTM5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vUHJlY2lzbyBhY2Vzc2FyIGVzc2VzIGNhbWluaG9zIHRhbnRvIG5vIHNlcnZpZG9yIGNvbW8gbm8gY2xpZW50ZSwgXG4vL21hbnRlbmhvIHR1ZG8gYXF1aSBwcmEgcXVlIGEgYXBsaWNhw6fDo28gY29udGludWUgRFJZXG5cbmxldCByb290ID0gJy8nO1xuXG5jb25zdCBwYXRocyA9IHtcblx0aG9tZTogW3Jvb3QsICdMb2dpbiddLFxuXHRub3ZhX2NvbnRhOiBbcm9vdCArICdub3ZhX2NvbnRhJywgJ05vdmEgY29udGEnXSxcblx0ZGFzaGJvYXJkOiBbcm9vdCArICdkYXNoYm9hcmQnLCAnRGFzaGJvYXJkJ10sXG5cdG5vdmFfZW1wcmVzYTogW3Jvb3QgKyAnbm92YV9lbXByZXNhJywgJ05vdmEgZW1wcmVzYSddLFxuXHRwZWRpZG86IFtyb290ICsgJ3BlZGlkbycsICdQZWRpZG9zJ10sXG5cdG5vdm9fcGVkaWRvOiBbcm9vdCArICdub3ZvX3BlZGlkbycsICdOb3ZvIHBlZGlkbyddLFxuXHRtaW5oYV9jb250YTogW3Jvb3QgKyAnbWluaGFfY29udGEnLCAnTWluaGEgY29udGEnXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhdGhzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL3BhdGhzLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3Qgc3R5bGVUYWxsZXIgPSB7XG5cdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdGZvbnRGYW1pbHk6ICdcIkFsZWdyZXlhXCIsIHNlcmlmJyxcblx0Zm9udFN0eWxlOiAnaXRhbGljJyxcblx0Zm9udFdlaWdodDogJ2JvbGQnLFxuXHR0ZXh0VHJhbnNmb3JtOiAnbG93ZXJjYXNlJyxcblx0bGV0dGVyU3BhY2luZzogJy0wLjAxZW0nLFxuXHRmb250U2l6ZTogJzIuNWVtJ1xufVxuXG5jb25zdCBzdHlsZUhlYWRlciA9IHtcblx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0Zm9udFNpemU6ICcyLjVlbScsXG5cdGZvbnRXZWlnaHQ6ICdib2xkJyxcbn1cblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiAoXG5cdDxkaXY+XG5cdFx0PEhlYWQ+XG5cdFx0XHQ8dGl0bGU+e3Byb3BzLnRpdHVsbyB8fCAnJ308L3RpdGxlPlxuXHRcdFx0PG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuZGVzY3JpY2FvfSAvPlxuXHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIi8+XG5cdFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZWdyZXlhXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5wbmdcIiAvPlxuXHRcdDwvSGVhZD5cblx0XHQ8aDEgc3R5bGU9e1xuXHRcdFx0cHJvcHMudGl0dWxvLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PSAndGFsbGVyJyBcblx0XHRcdD8gc3R5bGVUYWxsZXIgXG5cdFx0XHQ6IHN0eWxlSGVhZGVyXG5cdFx0fT5cblx0XHRcdHtwcm9wcy50aXR1bG99XG5cdFx0PC9oMT5cblx0PC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBEcmF3ZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRHJhd2VyJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdtYXRlcmlhbC11aS9NZW51SXRlbSc7XG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbic7XG5pbXBvcnQgRmxvYXRpbmdBY3Rpb25CdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxvYXRpbmdBY3Rpb25CdXR0b24nO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL21lbnUnO1xuaW1wb3J0IHBhdGhzIGZyb20gJy4uL3V0aWxzL3BhdGhzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXInO1xuaW1wb3J0IGdldE11aVRoZW1lIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9nZXRNdWlUaGVtZSc7XG5pbXBvcnQgaW5qZWN0VGFwRXZlbnRQbHVnaW4gZnJvbSAncmVhY3QtdGFwLWV2ZW50LXBsdWdpbic7XG5cbmNvbnN0IG11aVRoZW1lID0gZ2V0TXVpVGhlbWUoeyB1c2VyQWdlbnQ6IGZhbHNlIH0pXG5cbmNvbnN0IHN0eWxlID0ge1xuXHRtYXJnaW46ICcxNXB4Jyxcblx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdG1pbkhlaWdodDogJzk1dmgnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRvcGVuOiBmYWxzZSxcblx0XHRkcmF3ZXJXaWR0aDogJzAnXG5cdH07XG5cdFxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgXHR0cnkge1xuXHRcdFx0aW5qZWN0VGFwRXZlbnRQbHVnaW4oKTtcblx0XHR9IGNhdGNoKGVycm9yKXtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdH07XG4gIFx0fVxuXG5cdHRvZ2dsZSA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKChwcmV2aW91c1N0YXRlLCBwcm9wcykgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0b3BlbjogIXByZXZpb3VzU3RhdGUub3Blbixcblx0XHRcdFx0ZHJhd2VyV2lkdGg6IHByZXZpb3VzU3RhdGUub3BlbiA/ICcwJyA6ICcyNjBweCdcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG4gIHJlbmRlcigpIHtcblx0XHRjb25zdCBidXR0b25TdHlsZSA9IHtcblx0XHRcdG1hcmdpbkxlZnQ6IHRoaXMuc3RhdGUuZHJhd2VyV2lkdGgsIFxuXHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsIFxuXHRcdFx0dG9wOiAnMCdcblx0XHR9XG5cblx0XHRsZXQgcm91dGVzID0gW107XG5cdFx0Zm9yKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocGF0aHMpKSB7XG5cdFx0XHRyb3V0ZXMucHVzaChcblx0XHRcdFx0PExpbmsgaHJlZj17cGF0aHNba2V5XVswXX0+XG5cdFx0XHRcdFx0PE1lbnVJdGVtPntwYXRoc1trZXldWzFdfTwvTWVudUl0ZW0+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdClcblx0XHR9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE11aVRoZW1lUHJvdmlkZXIgbXVpVGhlbWU9e211aVRoZW1lfT5cblx0XHRcdFx0PGRpdiBzdHlsZT17c3R5bGV9PlxuXHRcdFx0XHRcdDxIZWFkZXIgdGl0dWxvPXt0aGlzLnByb3BzLnRpdHVsb30vPlxuXHRcdFx0XHRcdDxGbG9hdGluZ0FjdGlvbkJ1dHRvbiBcblx0XHRcdFx0XHRcdGxhYmVsPVwiVG9nZ2xlIERyYXdlclwiIFxuXHRcdFx0XHRcdFx0b25Ub3VjaFRhcD17dGhpcy50b2dnbGV9IFxuXHRcdFx0XHRcdFx0c3R5bGU9e2J1dHRvblN0eWxlfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxNZW51SWNvbiAvPlxuXHRcdFx0XHRcdDwvRmxvYXRpbmdBY3Rpb25CdXR0b24+XG5cdFx0XHRcdFx0PERyYXdlciBvcGVuPXt0aGlzLnN0YXRlLm9wZW59IHN0eWxlPXt7d2lkdGg6IHRoaXMuc3RhdGUuZHJhd2VyV2lkdGh9fT5cblx0XHRcdFx0XHRcdHtyb3V0ZXN9XG5cdFx0XHRcdFx0PC9EcmF3ZXI+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdDwvZGl2PlxuICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xheW91dC5qcyIsImltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jb25zdCBvcmlnaW5hbF9zdGF0ZSA9IHtcblx0XHRcdGVtYWlsOiBcIlwiLFxuXHRcdFx0ZW1haWxFcnJvcjogXCJcIixcblx0XHRcdHNlbmhhXzE6IFwiXCIsXG5cdFx0XHRzZW5oYV8xRXJyb3I6IFwiXCIsXG5cdFx0XHRzZW5oYV8yOiBcIlwiLFxuXHRcdFx0c2VuaGFfMkVycm9yOiBcIlwiLFxufTtcblxuY29uc3Qgc3R5bGUgPSB7XG5cdGRpc3BsYXk6ICdmbGV4Jyxcblx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0aGVpZ2h0OiAnODB2aCdcbn07XG5cbmNvbnN0IGJ1dHRvblN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxufTtcblxuY29uc3QgaW5kaXZpZHVhbEJ1dHRvblN0eWxlID0ge1xuXHR3aWR0aDogJzUwJScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3ZhX2NvbnRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0b3JpZ2luYWxfc3RhdGVcblx0XHR9O1xuXG5cdFx0dGhpcy52YWxpZGFJbnB1dCA9IHRoaXMudmFsaWRhSW5wdXQuYmluZCh0aGlzKTtcblx0fVxuXG5cdHZhbGlkYUlucHV0KCkge1xuXHRcdGlmKHRoaXMuc3RhdGUuZW1haWwgPT0gXCJcIil7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlbWFpbEVycm9yOiBtZW5zYWdlbV9lcnJvfSk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlbWFpbEVycm9yOiBcIlwifSk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuc3RhdGUuc2VuaGFfMSA9PSBcIlwiKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3NlbmhhXzFFcnJvcjogbWVuc2FnZW1fZXJyb30pO1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7c2VuaGFfMUVycm9yOiBcIlwifSk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuc3RhdGUuc2VuaGFfMiA9PSBcIlwiKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3NlbmhhXzJFcnJvcjogbWVuc2FnZW1fZXJyb30pO1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7c2VuaGFfMkVycm9yOiBcIlwifSk7XG5cdFx0fVxuXHR9XG5cblx0Z2VyZW5jaWFJbnB1dChldmVudG8pIHtcblx0XHRjb25zdCBuYW1lID0gZXZlbnRvLnRhcmdldC5uYW1lO1xuXHRcdGNvbnN0IHZhbHVlID0gZXZlbnRvLnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PExheW91dCB0aXR1bG89XCJOb3ZhIGNvbnRhXCIgZGVzY3JpY2FvPVwiQ3JpYcOnw6NvIGRlIG5vdmEgY29udGFcIj5cblx0XHRcdFx0PGRpdiBzdHlsZT17c3R5bGV9PlxuXHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZCBcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudG8pID0+IHRoaXMuZ2VyZW5jaWFJbnB1dChldmVudG8pfVxuXHRcdFx0XHRcdFx0XHRoaW50VGV4dD1cIkUtbWFpbFwiXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRcdGZsb2F0aW5nTGFiZWxUZXh0PVwiRS1tYWlsXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG5cdFx0XHRcdFx0XHRcdGVycm9yVGV4dD17dGhpcy5zdGF0ZS5lcnJvTG9naW59XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHQ8VGV4dEZpZWxkIFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50bykgPT4gdGhpcy5nZXJlbmNpYUlucHV0KGV2ZW50byl9XG5cdFx0XHRcdFx0XHRcdGhpbnRUZXh0PVwiU2VuaGFcIiBcblx0XHRcdFx0XHRcdFx0bmFtZT1cInNlbmhhXzFcIlxuXHRcdFx0XHRcdFx0XHRmbG9hdGluZ0xhYmVsVGV4dD1cIlNlbmhhXCJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc2VuaGFfMX1cblx0XHRcdFx0XHRcdFx0ZXJyb3JUZXh0PXt0aGlzLnN0YXRlLnNlbmhhXzFFcnJvcn1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdDxUZXh0RmllbGQgXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnRvKSA9PiB0aGlzLmdlcmVuY2lhSW5wdXQoZXZlbnRvKX1cblx0XHRcdFx0XHRcdFx0aGludFRleHQ9XCJSZXBldGlyIHNlbmhhXCIgXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJzZW5oYV8yXCJcblx0XHRcdFx0XHRcdFx0ZmxvYXRpbmdMYWJlbFRleHQ9XCJSZXBldGlyIHNlbmhhXCJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc2VuaGFfMn1cblx0XHRcdFx0XHRcdFx0ZXJyb3JUZXh0PXt0aGlzLnN0YXRlLnNlbmhhXzJFcnJvcn1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdDxSYWlzZWRCdXR0b24gXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtpbmRpdmlkdWFsQnV0dG9uU3R5bGV9IFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkxpbXBhclwiIFxuXHRcdFx0XHRcdFx0XHRzZWNvbmRhcnk9e3RydWV9IFxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYWlzZWRCdXR0b24gXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtpbmRpdmlkdWFsQnV0dG9uU3R5bGV9IFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNvbmZpcm1hclwiIFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLnZhbGlkYUlucHV0fVxuXHRcdFx0XHRcdFx0XHRwcmltYXJ5PXt0cnVlfSBcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGF5b3V0PlxuXHQpfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL25vdmFfY29udGEuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUtBO0FBTEE7QUFLQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFBQTtBQURBO0FBYUE7O0FBRUE7QUFDQTtBQURBO0FBSUE7Ozs7OztBQWRBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFFQTs7OztBQVlBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFMQTtBQUNBO0FBSUE7QUFQQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBOztBQUhBO0FBS0E7QUFMQTtBQUNBOztBQUlBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBR0E7Ozs7O0FBckRBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUxBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUhBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUdBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7O0FBUUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7O0FBUUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7O0FBUUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQUE7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTs7QUFKQTtBQVNBO0FBVEE7QUFDQTs7Ozs7QUEzRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        