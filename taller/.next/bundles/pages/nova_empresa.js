
          window.__NEXT_REGISTER_PAGE('/nova_empresa', function() {
            var comp = module.exports =
webpackJsonp([7],{

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _link = __webpack_require__(569);

var _link2 = _interopRequireDefault(_link);

var _Drawer = __webpack_require__(602);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = __webpack_require__(570);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _RaisedButton = __webpack_require__(563);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FloatingActionButton = __webpack_require__(629);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _menu = __webpack_require__(631);

var _menu2 = _interopRequireDefault(_menu);

var _paths = __webpack_require__(632);

var _paths2 = _interopRequireDefault(_paths);

var _Header = __webpack_require__(633);

var _Header2 = _interopRequireDefault(_Header);

var _MuiThemeProvider = __webpack_require__(634);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = __webpack_require__(582);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _reactTapEventPlugin = __webpack_require__(668);

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

			return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: muiTheme, __source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, _react2.default.createElement('div', { style: style, __source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, _react2.default.createElement(_Header2.default, { titulo: this.props.titulo, __source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}), _react2.default.createElement(_FloatingActionButton2.default, {
				label: 'Toggle Drawer',
				onTouchTap: this.toggle,
				style: buttonStyle,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, _react2.default.createElement(_menu2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			})), _react2.default.createElement(_Drawer2.default, { open: this.state.open, style: { width: this.state.drawerWidth }, __source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, _react2.default.createElement(_link2.default, { href: _paths2.default.home, __source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, _react2.default.createElement(_MenuItem2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, 'Login')), _react2.default.createElement(_link2.default, { href: _paths2.default.nova_conta, __source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, _react2.default.createElement(_MenuItem2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			}, 'Nova conta')), _react2.default.createElement(_link2.default, { href: _paths2.default.dashboard, __source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, _react2.default.createElement(_MenuItem2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, 'Dashboard')), _react2.default.createElement(_link2.default, { href: _paths2.default.novo_pedido, __source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, _react2.default.createElement(_MenuItem2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, 'Novo Pedido')), _react2.default.createElement(_link2.default, { href: _paths2.default.nova_empresa, __source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			}, _react2.default.createElement(_MenuItem2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}, 'Nova Empresa'))), this.props.children));
		}
	}]);

	return Layout;
}(_react2.default.Component);

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/taller/components/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/taller/components/Layout.js"); } } })();

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//Preciso acessar esses caminhos tanto no servidor como no cliente, 
//mantenho tudo aqui pra que a aplicação continue DRY

var root = '/';

var paths = {
	home: root,
	nova_conta: root + 'nova_conta',
	dashboard: root + 'dashboard',
	nova_empresa: root + 'nova_empresa',
	pedido: root + 'pedido',
	novo_pedido: root + 'novo_pedido'
};

exports.default = paths;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/taller/utils/paths.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/taller/utils/paths.js"); } } })();

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(569);

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

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(702);


/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(587);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(563);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _link = __webpack_require__(569);

var _link2 = _interopRequireDefault(_link);

var _paths = __webpack_require__(632);

var _paths2 = _interopRequireDefault(_paths);

var _Layout = __webpack_require__(599);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/pages/nova_empresa.js?entry';


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

var Login = function Login() {
	return _react2.default.createElement(_Layout2.default, { titulo: 'Nova empresa', descricao: 'Cadastro de empresa', __source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}, _react2.default.createElement('div', { style: style.global, __source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, _react2.default.createElement('form', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}, _react2.default.createElement(_TextField2.default, { hintText: 'Nome fantasia', __source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 28
		}
	}), _react2.default.createElement(_TextField2.default, { hintText: 'CNPJ', __source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 30
		}
	}), _react2.default.createElement('div', { style: style.form, __source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}, _react2.default.createElement(_RaisedButton2.default, { label: 'Cadastrar', primary: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	})))));
};

exports.default = Login;

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

/***/ })

},[701]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9ub3ZhX2VtcHJlc2EuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz80ODYxODIzIiwid2VicGFjazovLy8uL3V0aWxzL3BhdGhzLmpzPzQ4NjE4MjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NDg2MTgyMyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ub3ZhX2VtcHJlc2EuanM/NDg2MTgyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IERyYXdlciBmcm9tICdtYXRlcmlhbC11aS9EcmF3ZXInO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBGbG9hdGluZ0FjdGlvbkJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbG9hdGluZ0FjdGlvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL25hdmlnYXRpb24vbWVudSc7XG5pbXBvcnQgcGF0aHMgZnJvbSAnLi4vdXRpbHMvcGF0aHMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJztcbmltcG9ydCBpbmplY3RUYXBFdmVudFBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJztcblxuY29uc3QgbXVpVGhlbWUgPSBnZXRNdWlUaGVtZSh7IHVzZXJBZ2VudDogZmFsc2UgfSlcblxuY29uc3Qgc3R5bGUgPSB7XG5cdG1hcmdpbjogJzE1cHgnLFxuXHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0bWluSGVpZ2h0OiAnOTV2aCcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdG9wZW46IGZhbHNlLFxuXHRcdGRyYXdlcldpZHRoOiAnMCdcblx0fTtcblx0XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBcdHRyeSB7XG5cdFx0XHRpbmplY3RUYXBFdmVudFBsdWdpbigpO1xuXHRcdH0gY2F0Y2goZXJyb3Ipe1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0fTtcbiAgXHR9XG5cblx0dG9nZ2xlID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoKHByZXZpb3VzU3RhdGUsIHByb3BzKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRvcGVuOiAhcHJldmlvdXNTdGF0ZS5vcGVuLFxuXHRcdFx0XHRkcmF3ZXJXaWR0aDogcHJldmlvdXNTdGF0ZS5vcGVuID8gJzAnIDogJzI2MHB4J1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cbiAgcmVuZGVyKCkge1xuXHRcdGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuXHRcdFx0bWFyZ2luTGVmdDogdGhpcy5zdGF0ZS5kcmF3ZXJXaWR0aCwgXG5cdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJywgXG5cdFx0XHR0b3A6ICcwJ1xuXHRcdH1cblxuICAgIHJldHVybiAoXG4gICAgICA8TXVpVGhlbWVQcm92aWRlciBtdWlUaGVtZT17bXVpVGhlbWV9PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZX0+XG5cdFx0XHRcdFx0PEhlYWRlciB0aXR1bG89e3RoaXMucHJvcHMudGl0dWxvfS8+XG5cdFx0XHRcdFx0PEZsb2F0aW5nQWN0aW9uQnV0dG9uIFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJUb2dnbGUgRHJhd2VyXCIgXG5cdFx0XHRcdFx0XHRvblRvdWNoVGFwPXt0aGlzLnRvZ2dsZX0gXG5cdFx0XHRcdFx0XHRzdHlsZT17YnV0dG9uU3R5bGV9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PE1lbnVJY29uIC8+XG5cdFx0XHRcdFx0PC9GbG9hdGluZ0FjdGlvbkJ1dHRvbj5cblx0XHRcdFx0XHQ8RHJhd2VyIG9wZW49e3RoaXMuc3RhdGUub3Blbn0gc3R5bGU9e3t3aWR0aDogdGhpcy5zdGF0ZS5kcmF3ZXJXaWR0aH19PlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj17cGF0aHMuaG9tZX0+XG5cdFx0XHRcdFx0XHRcdDxNZW51SXRlbT5Mb2dpbjwvTWVudUl0ZW0+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPXtwYXRocy5ub3ZhX2NvbnRhfT5cblx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtPk5vdmEgY29udGE8L01lbnVJdGVtPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj17cGF0aHMuZGFzaGJvYXJkfT5cblx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtPkRhc2hib2FyZDwvTWVudUl0ZW0+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPXtwYXRocy5ub3ZvX3BlZGlkb30+XG5cdFx0XHRcdFx0XHRcdDxNZW51SXRlbT5Ob3ZvIFBlZGlkbzwvTWVudUl0ZW0+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPXtwYXRocy5ub3ZhX2VtcHJlc2F9PlxuXHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0+Tm92YSBFbXByZXNhPC9NZW51SXRlbT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L0RyYXdlcj5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PC9kaXY+XG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwiLy9QcmVjaXNvIGFjZXNzYXIgZXNzZXMgY2FtaW5ob3MgdGFudG8gbm8gc2Vydmlkb3IgY29tbyBubyBjbGllbnRlLCBcbi8vbWFudGVuaG8gdHVkbyBhcXVpIHByYSBxdWUgYSBhcGxpY2HDp8OjbyBjb250aW51ZSBEUllcblxubGV0IHJvb3QgPSAnLyc7XG5cbmNvbnN0IHBhdGhzID0ge1xuXHRob21lOiByb290LFxuXHRub3ZhX2NvbnRhOiByb290ICsgJ25vdmFfY29udGEnLFxuXHRkYXNoYm9hcmQ6IHJvb3QgKyAnZGFzaGJvYXJkJyxcblx0bm92YV9lbXByZXNhOiByb290ICsgJ25vdmFfZW1wcmVzYScsXG5cdHBlZGlkbzogcm9vdCArICdwZWRpZG8nLFxuXHRub3ZvX3BlZGlkbzogcm9vdCArICdub3ZvX3BlZGlkbycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYXRocztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9wYXRocy5qcyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNvbnN0IHN0eWxlVGFsbGVyID0ge1xuXHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHRmb250RmFtaWx5OiAnXCJBbGVncmV5YVwiLCBzZXJpZicsXG5cdGZvbnRTdHlsZTogJ2l0YWxpYycsXG5cdGZvbnRXZWlnaHQ6ICdib2xkJyxcblx0dGV4dFRyYW5zZm9ybTogJ2xvd2VyY2FzZScsXG5cdGxldHRlclNwYWNpbmc6ICctMC4wMWVtJyxcblx0Zm9udFNpemU6ICcyLjVlbSdcbn1cblxuY29uc3Qgc3R5bGVIZWFkZXIgPSB7XG5cdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdGZvbnRTaXplOiAnMi41ZW0nLFxuXHRmb250V2VpZ2h0OiAnYm9sZCcsXG59XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxIZWFkPlxuXHRcdFx0PHRpdGxlPntwcm9wcy50aXR1bG8gfHwgJyd9PC90aXRsZT5cblx0XHRcdDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb3BzLmRlc2NyaWNhb30gLz5cblx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIvPlxuXHRcdFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGVncmV5YVwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuXHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24ucG5nXCIgLz5cblx0XHQ8L0hlYWQ+XG5cdFx0PGgxIHN0eWxlPXtcblx0XHRcdHByb3BzLnRpdHVsby50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgPT0gJ3RhbGxlcicgXG5cdFx0XHQ/IHN0eWxlVGFsbGVyIFxuXHRcdFx0OiBzdHlsZUhlYWRlclxuXHRcdH0+XG5cdFx0XHR7cHJvcHMudGl0dWxvfVxuXHRcdDwvaDE+XG5cdDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBwYXRocyBmcm9tICcuLi91dGlscy9wYXRocyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuY29uc3Qgc3R5bGUgPSB7XG4gICAgZ2xvYmFsOiB7XG5cdCAgICBtYXJnaW46ICcxNXB4Jyxcblx0ICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHQgICAgbWluSGVpZ2h0OiAnNTV2aCcsXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgICAgd2lkdGg6ICczMDBweCcsXG4gICAgfVxufTtcblxuY29uc3QgTG9naW4gPSAoKSA9PiAoXG4gICAgPExheW91dCB0aXR1bG89XCJOb3ZhIGVtcHJlc2FcIiBkZXNjcmljYW89XCJDYWRhc3RybyBkZSBlbXByZXNhXCI+XG5cblx0PGRpdiBzdHlsZT17c3R5bGUuZ2xvYmFsfT5cblx0XHQ8Zm9ybT5cblx0XHRcdDxUZXh0RmllbGQgaGludFRleHQ9XCJOb21lIGZhbnRhc2lhXCIgLz5cblx0XHRcdDxiciAvPlxuXHRcdFx0PFRleHRGaWVsZCBoaW50VGV4dD1cIkNOUEpcIiAvPlxuXHRcdFx0PGJyIC8+XG5cdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZS5mb3JtfT5cblx0XHRcdFx0PFJhaXNlZEJ1dHRvbiBsYWJlbD1cIkNhZGFzdHJhclwiIHByaW1hcnk9e3RydWV9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Zvcm0+XG5cdDwvZGl2PiBcbiAgICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL25vdmFfZW1wcmVzYS5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFBQTtBQURBO0FBYUE7O0FBRUE7QUFDQTtBQURBO0FBSUE7Ozs7OztBQWRBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFFQTs7OztBQVlBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFMQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7O0FBSUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBdkRBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUtBO0FBTEE7QUFLQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVJBOztBQVNBO0FBQUE7QUFWQTtBQUNBO0FBYUE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        