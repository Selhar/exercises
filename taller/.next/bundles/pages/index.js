
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

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

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(581);


/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _paths = __webpack_require__(556);

var _paths2 = _interopRequireDefault(_paths);

var _Home = __webpack_require__(582);

var _Home2 = _interopRequireDefault(_Home);

var _TextField = __webpack_require__(564);

var _TextField2 = _interopRequireDefault(_TextField);

var _Layout = __webpack_require__(603);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/pages/index.js?entry';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, { titulo: 'Taller', descricao: 'Tela de login', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(_Home2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/taller/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/taller/pages/index.js"); } } })();
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
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(563);

var _Header2 = _interopRequireDefault(_Header);

var _Login = __webpack_require__(585);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/components/Home.js';


var style = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '80vh'
};

var Home = function Home() {
	return _react2.default.createElement('div', { style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, _react2.default.createElement(_Login2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}));
};

exports.default = Home;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/taller/components/Home.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/taller/components/Home.js"); } } })();

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _link = __webpack_require__(557);

var _link2 = _interopRequireDefault(_link);

var _paths = __webpack_require__(556);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/taller/components/Login.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/taller/components/Login.js"); } } })();

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

/***/ })

},[580]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWxzL3BhdGhzLmpzPzIxN2IwMmIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/MjE3YjAyYiIsIndlYnBhY2s6Ly8vLi9wYWdlcz8yMTdiMDJiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS5qcz8yMTdiMDJiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4uanM/MjE3YjAyYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz8yMTdiMDJiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vUHJlY2lzbyBhY2Vzc2FyIGVzc2VzIGNhbWluaG9zIHRhbnRvIG5vIHNlcnZpZG9yIGNvbW8gbm8gY2xpZW50ZSwgXG4vL21hbnRlbmhvIHR1ZG8gYXF1aSBwcmEgcXVlIGEgYXBsaWNhw6fDo28gY29udGludWUgRFJZXG5cbmxldCByb290ID0gJy8nO1xuXG5jb25zdCBwYXRocyA9IHtcblx0aG9tZTogW3Jvb3QsICdMb2dpbiddLFxuXHRub3ZhX2NvbnRhOiBbcm9vdCArICdub3ZhX2NvbnRhJywgJ05vdmEgY29udGEnXSxcblx0ZGFzaGJvYXJkOiBbcm9vdCArICdkYXNoYm9hcmQnLCAnRGFzaGJvYXJkJ10sXG5cdG5vdmFfZW1wcmVzYTogW3Jvb3QgKyAnbm92YV9lbXByZXNhJywgJ05vdmEgZW1wcmVzYSddLFxuXHRwZWRpZG86IFtyb290ICsgJ3BlZGlkbycsICdQZWRpZG9zJ10sXG5cdG5vdm9fcGVkaWRvOiBbcm9vdCArICdub3ZvX3BlZGlkbycsICdOb3ZvIHBlZGlkbyddLFxuXHRtaW5oYV9jb250YTogW3Jvb3QgKyAnbWluaGFfY29udGEnLCAnTWluaGEgY29udGEnXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhdGhzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL3BhdGhzLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3Qgc3R5bGVUYWxsZXIgPSB7XG5cdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdGZvbnRGYW1pbHk6ICdcIkFsZWdyZXlhXCIsIHNlcmlmJyxcblx0Zm9udFN0eWxlOiAnaXRhbGljJyxcblx0Zm9udFdlaWdodDogJ2JvbGQnLFxuXHR0ZXh0VHJhbnNmb3JtOiAnbG93ZXJjYXNlJyxcblx0bGV0dGVyU3BhY2luZzogJy0wLjAxZW0nLFxuXHRmb250U2l6ZTogJzIuNWVtJ1xufVxuXG5jb25zdCBzdHlsZUhlYWRlciA9IHtcblx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0Zm9udFNpemU6ICcyLjVlbScsXG5cdGZvbnRXZWlnaHQ6ICdib2xkJyxcbn1cblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiAoXG5cdDxkaXY+XG5cdFx0PEhlYWQ+XG5cdFx0XHQ8dGl0bGU+e3Byb3BzLnRpdHVsbyB8fCAnJ308L3RpdGxlPlxuXHRcdFx0PG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuZGVzY3JpY2FvfSAvPlxuXHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIi8+XG5cdFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZWdyZXlhXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5wbmdcIiAvPlxuXHRcdDwvSGVhZD5cblx0XHQ8aDEgc3R5bGU9e1xuXHRcdFx0cHJvcHMudGl0dWxvLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PSAndGFsbGVyJyBcblx0XHRcdD8gc3R5bGVUYWxsZXIgXG5cdFx0XHQ6IHN0eWxlSGVhZGVyXG5cdFx0fT5cblx0XHRcdHtwcm9wcy50aXR1bG99XG5cdFx0PC9oMT5cblx0PC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHBhdGhzIGZyb20gJy4uL3V0aWxzL3BhdGhzJztcbmltcG9ydCBIb21lIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ21hdGVyaWFsLXVpL1RleHRGaWVsZCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IHRpdHVsbz1cIlRhbGxlclwiIGRlc2NyaWNhbz1cIlRlbGEgZGUgbG9naW5cIj5cbiAgICAgICAgPEhvbWUgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbic7XG5cbmNvbnN0IHN0eWxlID0geyAgXG5cdGRpc3BsYXk6ICdmbGV4Jyxcblx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0aGVpZ2h0OiAnODB2aCdcbn07XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG5cdDxkaXYgc3R5bGU9e3N0eWxlfT5cblx0XHQ8TG9naW4gLz5cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSG9tZS5qcyIsImltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBwYXRocyBmcm9tICcuLi91dGlscy9wYXRocyc7XG5cbmNvbnN0IG1lbnNhZ2VtX2Vycm8gPSBcIkVzdGUgY2FtcG8gw6kgb2JyaWdhdMOzcmlvXCI7XG5cbmNvbnN0IHN0eWxlID0ge1xuXHRcbn07XG5cbmNvbnN0IGJ1dHRvblN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxufTtcblxuY29uc3QgaW5kaXZpZHVhbEJ1dHRvblN0eWxlID0ge1xuXHR3aWR0aDogJzUwJScsXG5cdGZvbnRTaXplOiAnMXZ3J1xufTtcblxuY29uc3QgSGVhZGVyID0ge1xuXHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0dG9wOiAnMjVweCcsXG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGxvZ2luOiBcIlwiLFxuXHRcdFx0c2VuaGE6IFwiXCIsXG5cdFx0XHRlcnJvU2VuaGE6IFwiXCIsXG5cdFx0XHRlcnJvTG9naW46IFwiXCIsXG5cdFx0fTtcblxuXHRcdHRoaXMudmFsaWRhSW5wdXQgPSB0aGlzLnZhbGlkYUlucHV0LmJpbmQodGhpcyk7XG5cdH1cblx0XG5cdHZhbGlkYUlucHV0KCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuXHRcdGlmKHRoaXMuc3RhdGUubG9naW4gPT0gXCJcIil7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlcnJvTG9naW46IG1lbnNhZ2VtX2Vycm99KTtcblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2Vycm9Mb2dpbjogXCJcIn0pO1xuXHRcdH1cblx0XHRpZih0aGlzLnN0YXRlLnNlbmhhID09IFwiXCIpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZXJyb1NlbmhhOiBtZW5zYWdlbV9lcnJvfSk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlcnJvU2VuaGE6IFwiXCJ9KTtcblx0XHR9XG5cdH1cblxuXHRnZXJlbmNpYUlucHV0KGV2ZW50bykge1xuICBcdGNvbnN0IG5hbWUgPSBldmVudG8udGFyZ2V0Lm5hbWU7XG4gIFx0Y29uc3QgdmFsdWUgPSBldmVudG8udGFyZ2V0LnZhbHVlO1xuICBcdHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9KTtcblx0fVxuXG4gIHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17c3R5bGV9PlxuXHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHQ8VGV4dEZpZWxkIFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudG8pID0+IHRoaXMuZ2VyZW5jaWFJbnB1dChldmVudG8pfVxuXHRcdFx0XHRcdFx0bmFtZT1cImxvZ2luXCJcblx0XHRcdFx0XHRcdGZsb2F0aW5nTGFiZWxUZXh0PVwiTG9naW5cIlxuXHRcdFx0XHRcdFx0aGludFRleHQ9XCJMb2dpblwiIFxuXHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubG9naW59XG5cdFx0XHRcdFx0XHRlcnJvclRleHQ9e3RoaXMuc3RhdGUuZXJyb0xvZ2lufVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHQ8VGV4dEZpZWxkIFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudG8pID0+IHRoaXMuZ2VyZW5jaWFJbnB1dChldmVudG8pfVxuXHRcdFx0XHRcdFx0bmFtZT1cInNlbmhhXCJcblx0XHRcdFx0XHRcdGZsb2F0aW5nTGFiZWxUZXh0PVwiU2VuaGFcIlxuXHRcdFx0XHRcdFx0aGludFRleHQ9XCJTZW5oYVwiIFxuXHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCIgXG5cdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zZW5oYX1cblx0XHRcdFx0XHRcdGVycm9yVGV4dD17dGhpcy5zdGF0ZS5lcnJvU2VuaGF9IC8+XG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17YnV0dG9uU3R5bGV9PlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj17cGF0aHNbJ25vdmFfY29udGEnXVswXX0+XG5cdFx0XHRcdFx0XHRcdDxSYWlzZWRCdXR0b24gXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e2luZGl2aWR1YWxCdXR0b25TdHlsZX0gXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJOb3ZhIGNvbnRhXCJcblx0XHRcdFx0XHRcdFx0XHRzZWNvbmRhcnk9e3RydWV9IC8+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8UmFpc2VkQnV0dG9uIFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17aW5kaXZpZHVhbEJ1dHRvblN0eWxlfSBcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJMb2dpblwiIFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLnZhbGlkYUlucHV0fVxuXHRcdFx0XHRcdFx0XHRwcmltYXJ5PXt0cnVlfSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ8L2Rpdj5cblx0KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTG9naW4uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IERyYXdlciBmcm9tICdtYXRlcmlhbC11aS9EcmF3ZXInO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBGbG9hdGluZ0FjdGlvbkJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbG9hdGluZ0FjdGlvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL25hdmlnYXRpb24vbWVudSc7XG5pbXBvcnQgcGF0aHMgZnJvbSAnLi4vdXRpbHMvcGF0aHMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJztcbmltcG9ydCBpbmplY3RUYXBFdmVudFBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJztcblxuY29uc3QgbXVpVGhlbWUgPSBnZXRNdWlUaGVtZSh7IHVzZXJBZ2VudDogZmFsc2UgfSlcblxuY29uc3Qgc3R5bGUgPSB7XG5cdG1hcmdpbjogJzE1cHgnLFxuXHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0bWluSGVpZ2h0OiAnOTV2aCcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdG9wZW46IGZhbHNlLFxuXHRcdGRyYXdlcldpZHRoOiAnMCdcblx0fTtcblx0XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBcdHRyeSB7XG5cdFx0XHRpbmplY3RUYXBFdmVudFBsdWdpbigpO1xuXHRcdH0gY2F0Y2goZXJyb3Ipe1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0fTtcbiAgXHR9XG5cblx0dG9nZ2xlID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoKHByZXZpb3VzU3RhdGUsIHByb3BzKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRvcGVuOiAhcHJldmlvdXNTdGF0ZS5vcGVuLFxuXHRcdFx0XHRkcmF3ZXJXaWR0aDogcHJldmlvdXNTdGF0ZS5vcGVuID8gJzAnIDogJzI2MHB4J1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cbiAgcmVuZGVyKCkge1xuXHRcdGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuXHRcdFx0bWFyZ2luTGVmdDogdGhpcy5zdGF0ZS5kcmF3ZXJXaWR0aCwgXG5cdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJywgXG5cdFx0XHR0b3A6ICcwJ1xuXHRcdH1cblxuXHRcdGxldCByb3V0ZXMgPSBbXTtcblx0XHRmb3IobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwYXRocykpIHtcblx0XHRcdHJvdXRlcy5wdXNoKFxuXHRcdFx0XHQ8TGluayBocmVmPXtwYXRoc1trZXldWzBdfT5cblx0XHRcdFx0XHQ8TWVudUl0ZW0+e3BhdGhzW2tleV1bMV19PC9NZW51SXRlbT5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0KVxuXHRcdH1cblxuICAgIHJldHVybiAoXG4gICAgICA8TXVpVGhlbWVQcm92aWRlciBtdWlUaGVtZT17bXVpVGhlbWV9PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZX0+XG5cdFx0XHRcdFx0PEhlYWRlciB0aXR1bG89e3RoaXMucHJvcHMudGl0dWxvfS8+XG5cdFx0XHRcdFx0PEZsb2F0aW5nQWN0aW9uQnV0dG9uIFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJUb2dnbGUgRHJhd2VyXCIgXG5cdFx0XHRcdFx0XHRvblRvdWNoVGFwPXt0aGlzLnRvZ2dsZX0gXG5cdFx0XHRcdFx0XHRzdHlsZT17YnV0dG9uU3R5bGV9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PE1lbnVJY29uIC8+XG5cdFx0XHRcdFx0PC9GbG9hdGluZ0FjdGlvbkJ1dHRvbj5cblx0XHRcdFx0XHQ8RHJhd2VyIG9wZW49e3RoaXMuc3RhdGUub3Blbn0gc3R5bGU9e3t3aWR0aDogdGhpcy5zdGF0ZS5kcmF3ZXJXaWR0aH19PlxuXHRcdFx0XHRcdFx0e3JvdXRlc31cblx0XHRcdFx0XHQ8L0RyYXdlcj5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PC9kaXY+XG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUNBO0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFLQTtBQUxBO0FBS0E7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBOzs7OztBQUpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFOQTtBQUNBO0FBS0E7QUFDQTs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQU5BO0FBUUE7QUFSQTtBQUNBOztBQU9BO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBUEE7QUFRQTtBQVJBO0FBQ0E7O0FBT0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBU0E7QUFUQTtBQUNBOzs7OztBQS9EQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQWFBOztBQUVBO0FBQ0E7QUFEQTtBQUlBOzs7Ozs7QUFkQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBRUE7Ozs7QUFZQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBUEE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTs7QUFJQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOzs7OztBQXJEQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        