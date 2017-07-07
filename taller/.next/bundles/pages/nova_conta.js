
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

var nova_conta = function nova_conta() {
	return _react2.default.createElement(_Layout2.default, { titulo: 'Nova conta', descricao: 'Cria\xE7\xE3o de nova conta', __source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, _react2.default.createElement('div', { style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, _react2.default.createElement('form', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, _react2.default.createElement(_TextField2.default, { hintText: 'E-mail', __source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}), _react2.default.createElement(_TextField2.default, { hintText: 'Senha', __source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}), _react2.default.createElement(_TextField2.default, { hintText: 'Repetir senha', __source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 28
		}
	}), _react2.default.createElement(_RaisedButton2.default, {
		style: individualButtonStyle,
		label: 'Limpar',
		secondary: true,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}), _react2.default.createElement(_RaisedButton2.default, {
		style: individualButtonStyle,
		label: 'Confirmar',
		primary: true,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 34
		}
	}))));
};

exports.default = nova_conta;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9ub3ZhX2NvbnRhLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvcGF0aHMuanM/NDE3NzI5YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz80MTc3MjljIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzQxNzcyOWMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbm92YV9jb250YS5qcz80MTc3MjljIl0sInNvdXJjZXNDb250ZW50IjpbIi8vUHJlY2lzbyBhY2Vzc2FyIGVzc2VzIGNhbWluaG9zIHRhbnRvIG5vIHNlcnZpZG9yIGNvbW8gbm8gY2xpZW50ZSwgXG4vL21hbnRlbmhvIHR1ZG8gYXF1aSBwcmEgcXVlIGEgYXBsaWNhw6fDo28gY29udGludWUgRFJZXG5cbmxldCByb290ID0gJy8nO1xuXG5jb25zdCBwYXRocyA9IHtcblx0aG9tZTogW3Jvb3QsICdMb2dpbiddLFxuXHRub3ZhX2NvbnRhOiBbcm9vdCArICdub3ZhX2NvbnRhJywgJ05vdmEgY29udGEnXSxcblx0ZGFzaGJvYXJkOiBbcm9vdCArICdkYXNoYm9hcmQnLCAnRGFzaGJvYXJkJ10sXG5cdG5vdmFfZW1wcmVzYTogW3Jvb3QgKyAnbm92YV9lbXByZXNhJywgJ05vdmEgZW1wcmVzYSddLFxuXHRwZWRpZG86IFtyb290ICsgJ3BlZGlkbycsICdQZWRpZG9zJ10sXG5cdG5vdm9fcGVkaWRvOiBbcm9vdCArICdub3ZvX3BlZGlkbycsICdOb3ZvIHBlZGlkbyddLFxuXHRtaW5oYV9jb250YTogW3Jvb3QgKyAnbWluaGFfY29udGEnLCAnTWluaGEgY29udGEnXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhdGhzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL3BhdGhzLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3Qgc3R5bGVUYWxsZXIgPSB7XG5cdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdGZvbnRGYW1pbHk6ICdcIkFsZWdyZXlhXCIsIHNlcmlmJyxcblx0Zm9udFN0eWxlOiAnaXRhbGljJyxcblx0Zm9udFdlaWdodDogJ2JvbGQnLFxuXHR0ZXh0VHJhbnNmb3JtOiAnbG93ZXJjYXNlJyxcblx0bGV0dGVyU3BhY2luZzogJy0wLjAxZW0nLFxuXHRmb250U2l6ZTogJzIuNWVtJ1xufVxuXG5jb25zdCBzdHlsZUhlYWRlciA9IHtcblx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0Zm9udFNpemU6ICcyLjVlbScsXG5cdGZvbnRXZWlnaHQ6ICdib2xkJyxcbn1cblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiAoXG5cdDxkaXY+XG5cdFx0PEhlYWQ+XG5cdFx0XHQ8dGl0bGU+e3Byb3BzLnRpdHVsbyB8fCAnJ308L3RpdGxlPlxuXHRcdFx0PG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuZGVzY3JpY2FvfSAvPlxuXHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIi8+XG5cdFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZWdyZXlhXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5wbmdcIiAvPlxuXHRcdDwvSGVhZD5cblx0XHQ8aDEgc3R5bGU9e1xuXHRcdFx0cHJvcHMudGl0dWxvLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PSAndGFsbGVyJyBcblx0XHRcdD8gc3R5bGVUYWxsZXIgXG5cdFx0XHQ6IHN0eWxlSGVhZGVyXG5cdFx0fT5cblx0XHRcdHtwcm9wcy50aXR1bG99XG5cdFx0PC9oMT5cblx0PC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBEcmF3ZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRHJhd2VyJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdtYXRlcmlhbC11aS9NZW51SXRlbSc7XG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbic7XG5pbXBvcnQgRmxvYXRpbmdBY3Rpb25CdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxvYXRpbmdBY3Rpb25CdXR0b24nO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL21lbnUnO1xuaW1wb3J0IHBhdGhzIGZyb20gJy4uL3V0aWxzL3BhdGhzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXInO1xuaW1wb3J0IGdldE11aVRoZW1lIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9nZXRNdWlUaGVtZSc7XG5pbXBvcnQgaW5qZWN0VGFwRXZlbnRQbHVnaW4gZnJvbSAncmVhY3QtdGFwLWV2ZW50LXBsdWdpbic7XG5cbmNvbnN0IG11aVRoZW1lID0gZ2V0TXVpVGhlbWUoeyB1c2VyQWdlbnQ6IGZhbHNlIH0pXG5cbmNvbnN0IHN0eWxlID0ge1xuXHRtYXJnaW46ICcxNXB4Jyxcblx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdG1pbkhlaWdodDogJzk1dmgnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRvcGVuOiBmYWxzZSxcblx0XHRkcmF3ZXJXaWR0aDogJzAnXG5cdH07XG5cdFxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgXHR0cnkge1xuXHRcdFx0aW5qZWN0VGFwRXZlbnRQbHVnaW4oKTtcblx0XHR9IGNhdGNoKGVycm9yKXtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdH07XG4gIFx0fVxuXG5cdHRvZ2dsZSA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKChwcmV2aW91c1N0YXRlLCBwcm9wcykgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0b3BlbjogIXByZXZpb3VzU3RhdGUub3Blbixcblx0XHRcdFx0ZHJhd2VyV2lkdGg6IHByZXZpb3VzU3RhdGUub3BlbiA/ICcwJyA6ICcyNjBweCdcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG4gIHJlbmRlcigpIHtcblx0XHRjb25zdCBidXR0b25TdHlsZSA9IHtcblx0XHRcdG1hcmdpbkxlZnQ6IHRoaXMuc3RhdGUuZHJhd2VyV2lkdGgsIFxuXHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsIFxuXHRcdFx0dG9wOiAnMCdcblx0XHR9XG5cblx0XHRsZXQgcm91dGVzID0gW107XG5cdFx0Zm9yKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocGF0aHMpKSB7XG5cdFx0XHRyb3V0ZXMucHVzaChcblx0XHRcdFx0PExpbmsgaHJlZj17cGF0aHNba2V5XVswXX0+XG5cdFx0XHRcdFx0PE1lbnVJdGVtPntwYXRoc1trZXldWzFdfTwvTWVudUl0ZW0+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdClcblx0XHR9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE11aVRoZW1lUHJvdmlkZXIgbXVpVGhlbWU9e211aVRoZW1lfT5cblx0XHRcdFx0PGRpdiBzdHlsZT17c3R5bGV9PlxuXHRcdFx0XHRcdDxIZWFkZXIgdGl0dWxvPXt0aGlzLnByb3BzLnRpdHVsb30vPlxuXHRcdFx0XHRcdDxGbG9hdGluZ0FjdGlvbkJ1dHRvbiBcblx0XHRcdFx0XHRcdGxhYmVsPVwiVG9nZ2xlIERyYXdlclwiIFxuXHRcdFx0XHRcdFx0b25Ub3VjaFRhcD17dGhpcy50b2dnbGV9IFxuXHRcdFx0XHRcdFx0c3R5bGU9e2J1dHRvblN0eWxlfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxNZW51SWNvbiAvPlxuXHRcdFx0XHRcdDwvRmxvYXRpbmdBY3Rpb25CdXR0b24+XG5cdFx0XHRcdFx0PERyYXdlciBvcGVuPXt0aGlzLnN0YXRlLm9wZW59IHN0eWxlPXt7d2lkdGg6IHRoaXMuc3RhdGUuZHJhd2VyV2lkdGh9fT5cblx0XHRcdFx0XHRcdHtyb3V0ZXN9XG5cdFx0XHRcdFx0PC9EcmF3ZXI+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdDwvZGl2PlxuICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xheW91dC5qcyIsImltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuY29uc3Qgc3R5bGUgPSB7XG5cdGRpc3BsYXk6ICdmbGV4Jyxcblx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0aGVpZ2h0OiAnODB2aCdcbn07XG5cbmNvbnN0IGJ1dHRvblN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxufTtcblxuY29uc3QgaW5kaXZpZHVhbEJ1dHRvblN0eWxlID0ge1xuXHR3aWR0aDogJzUwJScsXG59O1xuXG5jb25zdCBub3ZhX2NvbnRhID0gKCkgPT4gKFxuXHQ8TGF5b3V0IHRpdHVsbz1cIk5vdmEgY29udGFcIiBkZXNjcmljYW89XCJDcmlhw6fDo28gZGUgbm92YSBjb250YVwiPlxuXHRcdDxkaXYgc3R5bGU9e3N0eWxlfT5cblx0XHRcdDxmb3JtPlxuXHRcdFx0XHQ8VGV4dEZpZWxkIGhpbnRUZXh0PVwiRS1tYWlsXCIgLz5cblx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdDxUZXh0RmllbGQgaGludFRleHQ9XCJTZW5oYVwiIC8+XG5cdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQ8VGV4dEZpZWxkIGhpbnRUZXh0PVwiUmVwZXRpciBzZW5oYVwiIC8+XG5cdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQ8UmFpc2VkQnV0dG9uIFxuXHRcdFx0XHRcdHN0eWxlPXtpbmRpdmlkdWFsQnV0dG9uU3R5bGV9IFxuXHRcdFx0XHRcdGxhYmVsPVwiTGltcGFyXCIgXG5cdFx0XHRcdFx0c2Vjb25kYXJ5PXt0cnVlfSBcblx0XHRcdFx0Lz5cblx0XHRcdFx0PFJhaXNlZEJ1dHRvbiBcblx0XHRcdFx0XHRzdHlsZT17aW5kaXZpZHVhbEJ1dHRvblN0eWxlfSBcblx0XHRcdFx0XHRsYWJlbD1cIkNvbmZpcm1hclwiIFxuXHRcdFx0XHRcdHByaW1hcnk9e3RydWV9IFxuXHRcdFx0XHQvPlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvZGl2PlxuXHQ8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IG5vdmFfY29udGE7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvbm92YV9jb250YS5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBS0E7QUFMQTtBQUtBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFhQTs7QUFFQTtBQUNBO0FBREE7QUFJQTs7Ozs7O0FBZEE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUVBOzs7O0FBWUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUxBO0FBQ0E7QUFJQTtBQVBBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7O0FBSUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFHQTs7Ozs7QUFyREE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQUE7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7O0FBSEE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        