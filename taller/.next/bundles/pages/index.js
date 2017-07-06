
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//Preciso acessar esses caminhos tanto no servidor como no cliente, mantenho tudo aqui pra que a aplicação continue DRY

var root = '/';

var paths = {
	home: root,
	nova_conta: root + 'nova_conta',
	dashboard: root + 'dashboard',
	nova_empresa: root + 'nova_empresa',
	novo_pedido: root + 'novo_pedido'
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

var _Layout = __webpack_require__(602);

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

var Login = function Login() {
	return _react2.default.createElement('div', { style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}, _react2.default.createElement('form', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}, _react2.default.createElement(_TextField2.default, { hintText: 'Login', __source: {
			fileName: _jsxFileName,
			lineNumber: 28
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}), _react2.default.createElement(_TextField2.default, { hintText: 'Senha', __source: {
			fileName: _jsxFileName,
			lineNumber: 30
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}), _react2.default.createElement('div', { style: buttonStyle, __source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}, _react2.default.createElement(_link2.default, { href: _paths2.default.nova_conta, __source: {
			fileName: _jsxFileName,
			lineNumber: 33
		}
	}, _react2.default.createElement(_RaisedButton2.default, { style: individualButtonStyle, label: 'Nova conta', secondary: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 34
		}
	})), _react2.default.createElement(_RaisedButton2.default, { style: individualButtonStyle, label: 'Login', primary: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 36
		}
	}))));
};

exports.default = Login;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/taller/components/Login.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/taller/components/Login.js"); } } })();

/***/ }),

/***/ 602:
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

var _link = __webpack_require__(557);

var _link2 = _interopRequireDefault(_link);

var _Drawer = __webpack_require__(603);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = __webpack_require__(607);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _RaisedButton = __webpack_require__(565);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FloatingActionButton = __webpack_require__(635);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _menu = __webpack_require__(637);

var _menu2 = _interopRequireDefault(_menu);

var _paths = __webpack_require__(556);

var _paths2 = _interopRequireDefault(_paths);

var _Header = __webpack_require__(563);

var _Header2 = _interopRequireDefault(_Header);

var _MuiThemeProvider = __webpack_require__(638);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = __webpack_require__(575);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _reactTapEventPlugin = __webpack_require__(672);

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
			}, 'Nova conta'))), this.props.children));
		}
	}]);

	return Layout;
}(_react2.default.Component);

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/taller/components/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/taller/components/Layout.js"); } } })();

/***/ })

},[580]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWxzL3BhdGhzLmpzP2QxZTFkOTIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/ZDFlMWQ5MiIsIndlYnBhY2s6Ly8vLi9wYWdlcz9kMWUxZDkyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS5qcz9kMWUxZDkyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4uanM/ZDFlMWQ5MiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9kMWUxZDkyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vUHJlY2lzbyBhY2Vzc2FyIGVzc2VzIGNhbWluaG9zIHRhbnRvIG5vIHNlcnZpZG9yIGNvbW8gbm8gY2xpZW50ZSwgbWFudGVuaG8gdHVkbyBhcXVpIHByYSBxdWUgYSBhcGxpY2HDp8OjbyBjb250aW51ZSBEUllcblxubGV0IHJvb3QgPSAnLyc7XG5cbmNvbnN0IHBhdGhzID0ge1xuXHRob21lOiByb290LFxuXHRub3ZhX2NvbnRhOiByb290ICsgJ25vdmFfY29udGEnLFxuXHRkYXNoYm9hcmQ6IHJvb3QgKyAnZGFzaGJvYXJkJyxcblx0bm92YV9lbXByZXNhOiByb290ICsgJ25vdmFfZW1wcmVzYScsXG5cdG5vdm9fcGVkaWRvOiByb290ICsgJ25vdm9fcGVkaWRvJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGF0aHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvcGF0aHMuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBzdHlsZVRhbGxlciA9IHtcblx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0Zm9udEZhbWlseTogJ1wiQWxlZ3JleWFcIiwgc2VyaWYnLFxuXHRmb250U3R5bGU6ICdpdGFsaWMnLFxuXHRmb250V2VpZ2h0OiAnYm9sZCcsXG5cdHRleHRUcmFuc2Zvcm06ICdsb3dlcmNhc2UnLFxuXHRsZXR0ZXJTcGFjaW5nOiAnLTAuMDFlbScsXG5cdGZvbnRTaXplOiAnMi41ZW0nXG59XG5cbmNvbnN0IHN0eWxlSGVhZGVyID0ge1xuXHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHRmb250U2l6ZTogJzIuNWVtJyxcblx0Zm9udFdlaWdodDogJ2JvbGQnLFxufVxuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IChcblx0PGRpdj5cblx0XHQ8SGVhZD5cblx0XHRcdDx0aXRsZT57cHJvcHMudGl0dWxvIHx8ICcnfTwvdGl0bGU+XG5cdFx0XHQ8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwcm9wcy5kZXNjcmljYW99IC8+XG5cdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiLz5cblx0XHRcdDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxlZ3JleWFcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cblx0XHRcdDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLnBuZ1wiIC8+XG5cdFx0PC9IZWFkPlxuXHRcdDxoMSBzdHlsZT17XG5cdFx0XHRwcm9wcy50aXR1bG8udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09ICd0YWxsZXInIFxuXHRcdFx0PyBzdHlsZVRhbGxlciBcblx0XHRcdDogc3R5bGVIZWFkZXJcblx0XHR9PlxuXHRcdFx0e3Byb3BzLnRpdHVsb31cblx0XHQ8L2gxPlxuXHQ8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgcGF0aHMgZnJvbSAnLi4vdXRpbHMvcGF0aHMnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgdGl0dWxvPVwiVGFsbGVyXCIgZGVzY3JpY2FvPVwiVGVsYSBkZSBsb2dpblwiPlxuICAgICAgICA8SG9tZSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luJztcblxuY29uc3Qgc3R5bGUgPSB7ICBcblx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRoZWlnaHQ6ICc4MHZoJ1xufTtcblxuY29uc3QgSG9tZSA9ICgpID0+IChcblx0PGRpdiBzdHlsZT17c3R5bGV9PlxuXHRcdDxMb2dpbiAvPlxuXHQ8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Ib21lLmpzIiwiaW1wb3J0IFRleHRGaWVsZCBmcm9tICdtYXRlcmlhbC11aS9UZXh0RmllbGQnO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHBhdGhzIGZyb20gJy4uL3V0aWxzL3BhdGhzJztcblxuY29uc3Qgc3R5bGUgPSB7XG5cdFxufTtcblxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG59O1xuXG5jb25zdCBpbmRpdmlkdWFsQnV0dG9uU3R5bGUgPSB7XG5cdHdpZHRoOiAnNTAlJyxcblx0Zm9udFNpemU6ICcxdncnXG59O1xuXG5jb25zdCBIZWFkZXIgPSB7XG5cdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHR0b3A6ICcyNXB4Jyxcblx0XG59XG5cbmNvbnN0IExvZ2luID0gKCkgPT4gKFxuXHQ8ZGl2IHN0eWxlPXtzdHlsZX0+XG5cdFx0PGZvcm0+XG5cdFx0XHQ8VGV4dEZpZWxkIGhpbnRUZXh0PVwiTG9naW5cIiAvPlxuXHRcdFx0PGJyIC8+XG5cdFx0XHQ8VGV4dEZpZWxkIGhpbnRUZXh0PVwiU2VuaGFcIiAvPlxuXHRcdFx0PGJyIC8+XG5cdFx0XHQ8ZGl2IHN0eWxlPXtidXR0b25TdHlsZX0+XG5cdFx0XHRcdDxMaW5rIGhyZWY9e3BhdGhzLm5vdmFfY29udGF9PlxuXHRcdFx0XHRcdDxSYWlzZWRCdXR0b24gc3R5bGU9e2luZGl2aWR1YWxCdXR0b25TdHlsZX0gbGFiZWw9XCJOb3ZhIGNvbnRhXCIgc2Vjb25kYXJ5PXt0cnVlfSAvPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxSYWlzZWRCdXR0b24gc3R5bGU9e2luZGl2aWR1YWxCdXR0b25TdHlsZX0gbGFiZWw9XCJMb2dpblwiIHByaW1hcnk9e3RydWV9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Zvcm0+XG5cdDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Mb2dpbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgRHJhd2VyIGZyb20gJ21hdGVyaWFsLXVpL0RyYXdlcic7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudUl0ZW0nO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IEZsb2F0aW5nQWN0aW9uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0Zsb2F0aW5nQWN0aW9uQnV0dG9uJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9tZW51JztcbmltcG9ydCBwYXRocyBmcm9tICcuLi91dGlscy9wYXRocyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBNdWlUaGVtZVByb3ZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyJztcbmltcG9ydCBnZXRNdWlUaGVtZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvZ2V0TXVpVGhlbWUnO1xuaW1wb3J0IGluamVjdFRhcEV2ZW50UGx1Z2luIGZyb20gJ3JlYWN0LXRhcC1ldmVudC1wbHVnaW4nO1xuXG5jb25zdCBtdWlUaGVtZSA9IGdldE11aVRoZW1lKHsgdXNlckFnZW50OiBmYWxzZSB9KVxuXG5jb25zdCBzdHlsZSA9IHtcblx0bWFyZ2luOiAnMTVweCcsXG5cdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHRtaW5IZWlnaHQ6ICc5NXZoJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0b3BlbjogZmFsc2UsXG5cdFx0ZHJhd2VyV2lkdGg6ICcwJ1xuXHR9O1xuXHRcblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIFx0dHJ5IHtcblx0XHRcdGluamVjdFRhcEV2ZW50UGx1Z2luKCk7XG5cdFx0fSBjYXRjaChlcnJvcil7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9O1xuICBcdH1cblxuXHR0b2dnbGUgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSgocHJldmlvdXNTdGF0ZSwgcHJvcHMpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG9wZW46ICFwcmV2aW91c1N0YXRlLm9wZW4sXG5cdFx0XHRcdGRyYXdlcldpZHRoOiBwcmV2aW91c1N0YXRlLm9wZW4gPyAnMCcgOiAnMjYwcHgnXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuICByZW5kZXIoKSB7XG5cdFx0Y29uc3QgYnV0dG9uU3R5bGUgPSB7XG5cdFx0XHRtYXJnaW5MZWZ0OiB0aGlzLnN0YXRlLmRyYXdlcldpZHRoLCBcblx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBcblx0XHRcdHRvcDogJzAnXG5cdFx0fVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIG11aVRoZW1lPXttdWlUaGVtZX0+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlfT5cblx0XHRcdFx0XHQ8SGVhZGVyIHRpdHVsbz17dGhpcy5wcm9wcy50aXR1bG99Lz5cblx0XHRcdFx0XHQ8RmxvYXRpbmdBY3Rpb25CdXR0b24gXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlRvZ2dsZSBEcmF3ZXJcIiBcblx0XHRcdFx0XHRcdG9uVG91Y2hUYXA9e3RoaXMudG9nZ2xlfSBcblx0XHRcdFx0XHRcdHN0eWxlPXtidXR0b25TdHlsZX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8TWVudUljb24gLz5cblx0XHRcdFx0XHQ8L0Zsb2F0aW5nQWN0aW9uQnV0dG9uPlxuXHRcdFx0XHRcdDxEcmF3ZXIgb3Blbj17dGhpcy5zdGF0ZS5vcGVufSBzdHlsZT17e3dpZHRoOiB0aGlzLnN0YXRlLmRyYXdlcldpZHRofX0+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPXtwYXRocy5ob21lfT5cblx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtPkxvZ2luPC9NZW51SXRlbT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e3BhdGhzLm5vdmFfY29udGF9PlxuXHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0+Tm92YSBjb250YTwvTWVudUl0ZW0+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9EcmF3ZXI+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdDwvZGl2PlxuICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xheW91dC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUNBO0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFLQTtBQUxBO0FBS0E7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBOzs7OztBQUpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFhQTs7QUFFQTtBQUNBO0FBREE7QUFJQTs7Ozs7O0FBZEE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUVBOzs7O0FBWUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUxBO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTs7QUFJQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUE5Q0E7QUFDQTtBQURBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        