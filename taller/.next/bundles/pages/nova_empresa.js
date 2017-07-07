
          window.__NEXT_REGISTER_PAGE('/nova_empresa', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 567:
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

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(579);


/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = __webpack_require__(580);

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

var _TextField = __webpack_require__(581);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(562);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _link = __webpack_require__(558);

var _link2 = _interopRequireDefault(_link);

var _paths = __webpack_require__(567);

var _paths2 = _interopRequireDefault(_paths);

var _Layout = __webpack_require__(600);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/taller/pages/nova_empresa.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/taller/pages/nova_empresa.js"); } } })();
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
    })(module.exports.default || module.exports, "/nova_empresa")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 600:
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

var _link = __webpack_require__(558);

var _link2 = _interopRequireDefault(_link);

var _Drawer = __webpack_require__(601);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = __webpack_require__(605);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _RaisedButton = __webpack_require__(562);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FloatingActionButton = __webpack_require__(633);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _menu = __webpack_require__(635);

var _menu2 = _interopRequireDefault(_menu);

var _paths = __webpack_require__(567);

var _paths2 = _interopRequireDefault(_paths);

var _Header = __webpack_require__(636);

var _Header2 = _interopRequireDefault(_Header);

var _MuiThemeProvider = __webpack_require__(637);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = __webpack_require__(573);

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

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(558);

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

},[578]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9ub3ZhX2VtcHJlc2EuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9wYXRocy5qcz8xOGVlZGFjIiwid2VicGFjazovLy8uL3BhZ2VzL25vdmFfZW1wcmVzYS5qcz8xOGVlZGFjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzE4ZWVkYWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/MThlZWRhYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1ByZWNpc28gYWNlc3NhciBlc3NlcyBjYW1pbmhvcyB0YW50byBubyBzZXJ2aWRvciBjb21vIG5vIGNsaWVudGUsIFxuLy9tYW50ZW5obyB0dWRvIGFxdWkgcHJhIHF1ZSBhIGFwbGljYcOnw6NvIGNvbnRpbnVlIERSWVxuXG5sZXQgcm9vdCA9ICcvJztcblxuY29uc3QgcGF0aHMgPSB7XG5cdGhvbWU6IFtyb290LCAnTG9naW4nXSxcblx0bm92YV9jb250YTogW3Jvb3QgKyAnbm92YV9jb250YScsICdOb3ZhIGNvbnRhJ10sXG5cdGRhc2hib2FyZDogW3Jvb3QgKyAnZGFzaGJvYXJkJywgJ0Rhc2hib2FyZCddLFxuXHRub3ZhX2VtcHJlc2E6IFtyb290ICsgJ25vdmFfZW1wcmVzYScsICdOb3ZhIGVtcHJlc2EnXSxcblx0cGVkaWRvOiBbcm9vdCArICdwZWRpZG8nLCAnUGVkaWRvcyddLFxuXHRub3ZvX3BlZGlkbzogW3Jvb3QgKyAnbm92b19wZWRpZG8nLCAnTm92byBwZWRpZG8nXSxcblx0bWluaGFfY29udGE6IFtyb290ICsgJ21pbmhhX2NvbnRhJywgJ01pbmhhIGNvbnRhJ10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYXRocztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9wYXRocy5qcyIsImltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBwYXRocyBmcm9tICcuLi91dGlscy9wYXRocyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuY29uc3QgbWVuc2FnZW1fZXJybyA9IFwiRXN0ZSBjYW1wbyDDqSBvYnJpZ2F0w7NyaW9cIjtcblxuY29uc3Qgc3R5bGUgPSB7XG4gICAgZ2xvYmFsOiB7XG5cdCAgICBtYXJnaW46ICcxNXB4Jyxcblx0ICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHQgICAgbWluSGVpZ2h0OiAnNTV2aCcsXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgICAgd2lkdGg6ICczMDBweCcsXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm92YV9lbXByZXNhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRub21lX2ZhbnRhc2lhOiBcIlwiLFxuXHRcdFx0bm9tZV9mYW50YXNpYUVycm86IFwiXCIsXG5cdFx0XHRjbnBqOiBcIlwiLFxuXHRcdFx0Y25wakVycm86IFwiXCJcblx0XHR9XG5cblx0XHR0aGlzLnZhbGlkYUlucHV0ID0gdGhpcy52YWxpZGFJbnB1dC5iaW5kKHRoaXMpO1xuXHR9XG5cblx0dmFsaWRhSW5wdXQoKSB7XG5cdFx0aWYodGhpcy5zdGF0ZS5ub21lX2ZhbnRhc2lhID09IFwiXCIpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7bm9tZV9mYW50YXNpYUVycm86IG1lbnNhZ2VtX2Vycm99KTtcblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe25vbWVfZmFudGFzaWFFcnJvOiBcIlwifSk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuc3RhdGUuY25waiA9PSBcIlwiKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2NucGpFcnJvOiBtZW5zYWdlbV9lcnJvfSk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtjbnBqRXJybzogXCJcIn0pO1xuXHRcdH1cblx0fVxuXG5cdGdlcmVuY2lhSW5wdXQoZXZlbnRvKSB7XG5cdFx0Y29uc3QgbmFtZSA9IGV2ZW50by50YXJnZXQubmFtZTtcblx0XHRjb25zdCB2YWx1ZSA9IGV2ZW50by50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0IHRpdHVsbz1cIk5vdmEgZW1wcmVzYVwiIGRlc2NyaWNhbz1cIkNhZGFzdHJvIGRlIGVtcHJlc2FcIj5cblx0XHRcdFx0PGRpdiBzdHlsZT17c3R5bGUuZ2xvYmFsfT5cblx0XHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHRcdDxUZXh0RmllbGQgXG5cdFx0XHRcdFx0XHRcdGhpbnRUZXh0PVwiTm9tZSBmYW50YXNpYVwiIFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50bykgPT4gdGhpcy5nZXJlbmNpYUlucHV0KGV2ZW50byl9XG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJub21lX2ZhbnRhc2lhXCJcblx0XHRcdFx0XHRcdFx0ZmxvYXRpbmdMYWJlbFRleHQ9XCJOb21lIGZhbnRhc2lhXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubm9tZV9mYW50YXNpYX1cblx0XHRcdFx0XHRcdFx0ZXJyb3JUZXh0PXt0aGlzLnN0YXRlLm5vbWVfZmFudGFzaWFFcnJvfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZCBcblx0XHRcdFx0XHRcdFx0aGludFRleHQ9XCJjbnBqXCIgXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnRvKSA9PiB0aGlzLmdlcmVuY2lhSW5wdXQoZXZlbnRvKX1cblx0XHRcdFx0XHRcdFx0bmFtZT1cImNucGpcIlxuXHRcdFx0XHRcdFx0XHRmbG9hdGluZ0xhYmVsVGV4dD1cIkNOUEpcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5jbnBqfVxuXHRcdFx0XHRcdFx0XHRlcnJvclRleHQ9e3RoaXMuc3RhdGUuY25wakVycm99XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZS5mb3JtfT5cblx0XHRcdFx0XHRcdFx0PFJhaXNlZEJ1dHRvbiBcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNhZGFzdHJhclwiIFxuXHRcdFx0XHRcdFx0XHRcdHByaW1hcnk9e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy52YWxpZGFJbnB1dH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDwvZGl2PiBcblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9ub3ZhX2VtcHJlc2EuanM/ZW50cnkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IERyYXdlciBmcm9tICdtYXRlcmlhbC11aS9EcmF3ZXInO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBGbG9hdGluZ0FjdGlvbkJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbG9hdGluZ0FjdGlvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL25hdmlnYXRpb24vbWVudSc7XG5pbXBvcnQgcGF0aHMgZnJvbSAnLi4vdXRpbHMvcGF0aHMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJztcbmltcG9ydCBpbmplY3RUYXBFdmVudFBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJztcblxuY29uc3QgbXVpVGhlbWUgPSBnZXRNdWlUaGVtZSh7IHVzZXJBZ2VudDogZmFsc2UgfSlcblxuY29uc3Qgc3R5bGUgPSB7XG5cdG1hcmdpbjogJzE1cHgnLFxuXHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0bWluSGVpZ2h0OiAnOTV2aCcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdG9wZW46IGZhbHNlLFxuXHRcdGRyYXdlcldpZHRoOiAnMCdcblx0fTtcblx0XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBcdHRyeSB7XG5cdFx0XHRpbmplY3RUYXBFdmVudFBsdWdpbigpO1xuXHRcdH0gY2F0Y2goZXJyb3Ipe1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0fTtcbiAgXHR9XG5cblx0dG9nZ2xlID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoKHByZXZpb3VzU3RhdGUsIHByb3BzKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRvcGVuOiAhcHJldmlvdXNTdGF0ZS5vcGVuLFxuXHRcdFx0XHRkcmF3ZXJXaWR0aDogcHJldmlvdXNTdGF0ZS5vcGVuID8gJzAnIDogJzI2MHB4J1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cbiAgcmVuZGVyKCkge1xuXHRcdGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuXHRcdFx0bWFyZ2luTGVmdDogdGhpcy5zdGF0ZS5kcmF3ZXJXaWR0aCwgXG5cdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJywgXG5cdFx0XHR0b3A6ICcwJ1xuXHRcdH1cblxuXHRcdGxldCByb3V0ZXMgPSBbXTtcblx0XHRmb3IobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwYXRocykpIHtcblx0XHRcdHJvdXRlcy5wdXNoKFxuXHRcdFx0XHQ8TGluayBocmVmPXtwYXRoc1trZXldWzBdfT5cblx0XHRcdFx0XHQ8TWVudUl0ZW0+e3BhdGhzW2tleV1bMV19PC9NZW51SXRlbT5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0KVxuXHRcdH1cblxuICAgIHJldHVybiAoXG4gICAgICA8TXVpVGhlbWVQcm92aWRlciBtdWlUaGVtZT17bXVpVGhlbWV9PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZX0+XG5cdFx0XHRcdFx0PEhlYWRlciB0aXR1bG89e3RoaXMucHJvcHMudGl0dWxvfS8+XG5cdFx0XHRcdFx0PEZsb2F0aW5nQWN0aW9uQnV0dG9uIFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJUb2dnbGUgRHJhd2VyXCIgXG5cdFx0XHRcdFx0XHRvblRvdWNoVGFwPXt0aGlzLnRvZ2dsZX0gXG5cdFx0XHRcdFx0XHRzdHlsZT17YnV0dG9uU3R5bGV9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PE1lbnVJY29uIC8+XG5cdFx0XHRcdFx0PC9GbG9hdGluZ0FjdGlvbkJ1dHRvbj5cblx0XHRcdFx0XHQ8RHJhd2VyIG9wZW49e3RoaXMuc3RhdGUub3Blbn0gc3R5bGU9e3t3aWR0aDogdGhpcy5zdGF0ZS5kcmF3ZXJXaWR0aH19PlxuXHRcdFx0XHRcdFx0e3JvdXRlc31cblx0XHRcdFx0XHQ8L0RyYXdlcj5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PC9kaXY+XG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3Qgc3R5bGVUYWxsZXIgPSB7XG5cdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdGZvbnRGYW1pbHk6ICdcIkFsZWdyZXlhXCIsIHNlcmlmJyxcblx0Zm9udFN0eWxlOiAnaXRhbGljJyxcblx0Zm9udFdlaWdodDogJ2JvbGQnLFxuXHR0ZXh0VHJhbnNmb3JtOiAnbG93ZXJjYXNlJyxcblx0bGV0dGVyU3BhY2luZzogJy0wLjAxZW0nLFxuXHRmb250U2l6ZTogJzIuNWVtJ1xufVxuXG5jb25zdCBzdHlsZUhlYWRlciA9IHtcblx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0Zm9udFNpemU6ICcyLjVlbScsXG5cdGZvbnRXZWlnaHQ6ICdib2xkJyxcbn1cblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiAoXG5cdDxkaXY+XG5cdFx0PEhlYWQ+XG5cdFx0XHQ8dGl0bGU+e3Byb3BzLnRpdHVsbyB8fCAnJ308L3RpdGxlPlxuXHRcdFx0PG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuZGVzY3JpY2FvfSAvPlxuXHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIi8+XG5cdFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZWdyZXlhXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5wbmdcIiAvPlxuXHRcdDwvSGVhZD5cblx0XHQ8aDEgc3R5bGU9e1xuXHRcdFx0cHJvcHMudGl0dWxvLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PSAndGFsbGVyJyBcblx0XHRcdD8gc3R5bGVUYWxsZXIgXG5cdFx0XHQ6IHN0eWxlSGVhZGVyXG5cdFx0fT5cblx0XHRcdHtwcm9wcy50aXR1bG99XG5cdFx0PC9oMT5cblx0PC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUkE7O0FBU0E7QUFBQTtBQVZBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQU5BO0FBQ0E7QUFLQTtBQUNBOzs7OztBQUdBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBTkE7QUFRQTtBQVJBO0FBQ0E7O0FBT0E7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQU5BO0FBUUE7QUFSQTtBQUNBOztBQU9BO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7O0FBSEE7QUFVQTtBQVZBO0FBQ0E7Ozs7O0FBekRBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFBQTtBQURBO0FBYUE7O0FBRUE7QUFDQTtBQURBO0FBSUE7Ozs7OztBQWRBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFFQTs7OztBQVlBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFMQTtBQUNBO0FBSUE7QUFQQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBOztBQUhBO0FBS0E7QUFMQTtBQUNBOztBQUlBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBR0E7Ozs7O0FBckRBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUtBO0FBTEE7QUFLQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        