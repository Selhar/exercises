
          window.__NEXT_REGISTER_PAGE('/dashboard', function() {
            var comp = module.exports =
webpackJsonp([7],{

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

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(684);


/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(565);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Layout = __webpack_require__(602);

var _Layout2 = _interopRequireDefault(_Layout);

var _Table = __webpack_require__(685);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/pages/dashboard.js?entry';


var style = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '80vh'
};

var Dashboard = function Dashboard() {
	return _react2.default.createElement(_Layout2.default, { titulo: 'Dashboard', __source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, _react2.default.createElement('div', { style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, _react2.default.createElement(_Table.Table, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}, _react2.default.createElement(_Table.TableHeader, { displaySelectAll: false, adjustForCheckbox: false, __source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}, _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, _react2.default.createElement(_Table.TableHeaderColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}, 'Nome fantasia'), _react2.default.createElement(_Table.TableHeaderColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}, 'CNPJ'), _react2.default.createElement(_Table.TableHeaderColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 28
		}
	}, 'Qtd. Pedidos'))), _react2.default.createElement(_Table.TableBody, { displayRowCheckbox: false, __source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}, _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 33
		}
	}, 'Drupatec solu\xE7\xF5es'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 34
		}
	}, '28.354.669/0001-09'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}, '1')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 37
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 38
		}
	}, 'BRFoods'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	}, '35.577.109/0001-70'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 40
		}
	}, '4')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 42
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 43
		}
	}, 'PasquePag'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 44
		}
	}, '34.763.818/0001-88'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 45
		}
	}, '0')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 47
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 48
		}
	}, 'ClubSocial'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 49
		}
	}, '21.211.526/0001-90'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 50
		}
	}, '2')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 52
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 53
		}
	}, 'Bamerindus'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 54
		}
	}, '87.487.918/0001-95'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 55
		}
	}, '1'))))));
};

exports.default = Dashboard;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/taller/pages/dashboard.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/taller/pages/dashboard.js"); } } })();
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
    })(module.exports.default || module.exports, "/dashboard")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

},[683]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9kYXNoYm9hcmQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9wYXRocy5qcz8wYWI4ODA1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzBhYjg4MDUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanM/MGFiODgwNSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQuanM/MGFiODgwNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1ByZWNpc28gYWNlc3NhciBlc3NlcyBjYW1pbmhvcyB0YW50byBubyBzZXJ2aWRvciBjb21vIG5vIGNsaWVudGUsIG1hbnRlbmhvIHR1ZG8gYXF1aSBwcmEgcXVlIGEgYXBsaWNhw6fDo28gY29udGludWUgRFJZXG5cbmxldCByb290ID0gJy8nO1xuXG5jb25zdCBwYXRocyA9IHtcblx0aG9tZTogcm9vdCxcblx0bm92YV9jb250YTogcm9vdCArICdub3ZhX2NvbnRhJyxcblx0ZGFzaGJvYXJkOiByb290ICsgJ2Rhc2hib2FyZCcsXG5cdG5vdmFfZW1wcmVzYTogcm9vdCArICdub3ZhX2VtcHJlc2EnLFxuXHRub3ZvX3BlZGlkbzogcm9vdCArICdub3ZvX3BlZGlkbydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhdGhzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL3BhdGhzLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3Qgc3R5bGVUYWxsZXIgPSB7XG5cdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdGZvbnRGYW1pbHk6ICdcIkFsZWdyZXlhXCIsIHNlcmlmJyxcblx0Zm9udFN0eWxlOiAnaXRhbGljJyxcblx0Zm9udFdlaWdodDogJ2JvbGQnLFxuXHR0ZXh0VHJhbnNmb3JtOiAnbG93ZXJjYXNlJyxcblx0bGV0dGVyU3BhY2luZzogJy0wLjAxZW0nLFxuXHRmb250U2l6ZTogJzIuNWVtJ1xufVxuXG5jb25zdCBzdHlsZUhlYWRlciA9IHtcblx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0Zm9udFNpemU6ICcyLjVlbScsXG5cdGZvbnRXZWlnaHQ6ICdib2xkJyxcbn1cblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiAoXG5cdDxkaXY+XG5cdFx0PEhlYWQ+XG5cdFx0XHQ8dGl0bGU+e3Byb3BzLnRpdHVsbyB8fCAnJ308L3RpdGxlPlxuXHRcdFx0PG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuZGVzY3JpY2FvfSAvPlxuXHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIi8+XG5cdFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZWdyZXlhXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5wbmdcIiAvPlxuXHRcdDwvSGVhZD5cblx0XHQ8aDEgc3R5bGU9e1xuXHRcdFx0cHJvcHMudGl0dWxvLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PSAndGFsbGVyJyBcblx0XHRcdD8gc3R5bGVUYWxsZXIgXG5cdFx0XHQ6IHN0eWxlSGVhZGVyXG5cdFx0fT5cblx0XHRcdHtwcm9wcy50aXR1bG99XG5cdFx0PC9oMT5cblx0PC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBEcmF3ZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRHJhd2VyJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdtYXRlcmlhbC11aS9NZW51SXRlbSc7XG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbic7XG5pbXBvcnQgRmxvYXRpbmdBY3Rpb25CdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxvYXRpbmdBY3Rpb25CdXR0b24nO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL21lbnUnO1xuaW1wb3J0IHBhdGhzIGZyb20gJy4uL3V0aWxzL3BhdGhzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXInO1xuaW1wb3J0IGdldE11aVRoZW1lIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9nZXRNdWlUaGVtZSc7XG5pbXBvcnQgaW5qZWN0VGFwRXZlbnRQbHVnaW4gZnJvbSAncmVhY3QtdGFwLWV2ZW50LXBsdWdpbic7XG5cbmNvbnN0IG11aVRoZW1lID0gZ2V0TXVpVGhlbWUoeyB1c2VyQWdlbnQ6IGZhbHNlIH0pXG5cbmNvbnN0IHN0eWxlID0ge1xuXHRtYXJnaW46ICcxNXB4Jyxcblx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdG1pbkhlaWdodDogJzk1dmgnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRvcGVuOiBmYWxzZSxcblx0XHRkcmF3ZXJXaWR0aDogJzAnXG5cdH07XG5cdFxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgXHR0cnkge1xuXHRcdFx0aW5qZWN0VGFwRXZlbnRQbHVnaW4oKTtcblx0XHR9IGNhdGNoKGVycm9yKXtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdH07XG4gIFx0fVxuXG5cdHRvZ2dsZSA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKChwcmV2aW91c1N0YXRlLCBwcm9wcykgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0b3BlbjogIXByZXZpb3VzU3RhdGUub3Blbixcblx0XHRcdFx0ZHJhd2VyV2lkdGg6IHByZXZpb3VzU3RhdGUub3BlbiA/ICcwJyA6ICcyNjBweCdcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG4gIHJlbmRlcigpIHtcblx0XHRjb25zdCBidXR0b25TdHlsZSA9IHtcblx0XHRcdG1hcmdpbkxlZnQ6IHRoaXMuc3RhdGUuZHJhd2VyV2lkdGgsIFxuXHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsIFxuXHRcdFx0dG9wOiAnMCdcblx0XHR9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE11aVRoZW1lUHJvdmlkZXIgbXVpVGhlbWU9e211aVRoZW1lfT5cblx0XHRcdFx0PGRpdiBzdHlsZT17c3R5bGV9PlxuXHRcdFx0XHRcdDxIZWFkZXIgdGl0dWxvPXt0aGlzLnByb3BzLnRpdHVsb30vPlxuXHRcdFx0XHRcdDxGbG9hdGluZ0FjdGlvbkJ1dHRvbiBcblx0XHRcdFx0XHRcdGxhYmVsPVwiVG9nZ2xlIERyYXdlclwiIFxuXHRcdFx0XHRcdFx0b25Ub3VjaFRhcD17dGhpcy50b2dnbGV9IFxuXHRcdFx0XHRcdFx0c3R5bGU9e2J1dHRvblN0eWxlfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxNZW51SWNvbiAvPlxuXHRcdFx0XHRcdDwvRmxvYXRpbmdBY3Rpb25CdXR0b24+XG5cdFx0XHRcdFx0PERyYXdlciBvcGVuPXt0aGlzLnN0YXRlLm9wZW59IHN0eWxlPXt7d2lkdGg6IHRoaXMuc3RhdGUuZHJhd2VyV2lkdGh9fT5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e3BhdGhzLmhvbWV9PlxuXHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0+TG9naW48L01lbnVJdGVtPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj17cGF0aHMubm92YV9jb250YX0+XG5cdFx0XHRcdFx0XHRcdDxNZW51SXRlbT5Ob3ZhIGNvbnRhPC9NZW51SXRlbT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L0RyYXdlcj5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PC9kaXY+XG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHtcbiAgVGFibGUsXG4gIFRhYmxlQm9keSxcbiAgVGFibGVIZWFkZXIsXG4gIFRhYmxlSGVhZGVyQ29sdW1uLFxuICBUYWJsZVJvdyxcbiAgVGFibGVSb3dDb2x1bW4sXG59IGZyb20gJ21hdGVyaWFsLXVpL1RhYmxlJztcblxuY29uc3Qgc3R5bGUgPSB7XG5cdGRpc3BsYXk6ICdmbGV4Jyxcblx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0aGVpZ2h0OiAnODB2aCdcbn07XG5cbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IChcblx0PExheW91dCB0aXR1bG89XCJEYXNoYm9hcmRcIj5cblx0XHQ8ZGl2IHN0eWxlPXtzdHlsZX0+XG5cdFx0XHQ8VGFibGU+XG4gICAgXHRcdDxUYWJsZUhlYWRlciBkaXNwbGF5U2VsZWN0QWxsPXtmYWxzZX0gYWRqdXN0Rm9yQ2hlY2tib3g9e2ZhbHNlfSA+XG5cdFx0XHRcdFx0PFRhYmxlUm93PlxuXHRcdFx0XHRcdFx0PFRhYmxlSGVhZGVyQ29sdW1uPk5vbWUgZmFudGFzaWE8L1RhYmxlSGVhZGVyQ29sdW1uPlxuXHRcdFx0XHRcdFx0PFRhYmxlSGVhZGVyQ29sdW1uPkNOUEo8L1RhYmxlSGVhZGVyQ29sdW1uPlxuXHRcdFx0XHRcdFx0PFRhYmxlSGVhZGVyQ29sdW1uPlF0ZC4gUGVkaWRvczwvVGFibGVIZWFkZXJDb2x1bW4+XG5cdFx0XHRcdFx0PC9UYWJsZVJvdz5cblx0XHRcdFx0PC9UYWJsZUhlYWRlcj5cblx0XHRcdFx0PFRhYmxlQm9keSBkaXNwbGF5Um93Q2hlY2tib3g9e2ZhbHNlfSA+XG5cdFx0XHRcdFx0PFRhYmxlUm93PlxuXHRcdFx0XHRcdFx0PFRhYmxlUm93Q29sdW1uPkRydXBhdGVjIHNvbHXDp8O1ZXM8L1RhYmxlUm93Q29sdW1uPlxuXHRcdFx0XHRcdFx0PFRhYmxlUm93Q29sdW1uPjI4LjM1NC42NjkvMDAwMS0wOTwvVGFibGVSb3dDb2x1bW4+XG5cdFx0XHRcdFx0XHQ8VGFibGVSb3dDb2x1bW4+MTwvVGFibGVSb3dDb2x1bW4+XG5cdFx0XHRcdFx0PC9UYWJsZVJvdz5cblx0XHRcdFx0XHQ8VGFibGVSb3c+XG5cdFx0XHRcdFx0XHQ8VGFibGVSb3dDb2x1bW4+QlJGb29kczwvVGFibGVSb3dDb2x1bW4+XG5cdFx0XHRcdFx0XHQ8VGFibGVSb3dDb2x1bW4+MzUuNTc3LjEwOS8wMDAxLTcwPC9UYWJsZVJvd0NvbHVtbj5cblx0XHRcdFx0XHRcdDxUYWJsZVJvd0NvbHVtbj40PC9UYWJsZVJvd0NvbHVtbj5cblx0XHRcdFx0XHQ8L1RhYmxlUm93PlxuXHRcdFx0XHRcdDxUYWJsZVJvdz5cblx0XHRcdFx0XHRcdDxUYWJsZVJvd0NvbHVtbj5QYXNxdWVQYWc8L1RhYmxlUm93Q29sdW1uPlxuXHRcdFx0XHRcdFx0PFRhYmxlUm93Q29sdW1uPjM0Ljc2My44MTgvMDAwMS04ODwvVGFibGVSb3dDb2x1bW4+XG5cdFx0XHRcdFx0XHQ8VGFibGVSb3dDb2x1bW4+MDwvVGFibGVSb3dDb2x1bW4+XG5cdFx0XHRcdFx0PC9UYWJsZVJvdz5cblx0XHRcdFx0XHQ8VGFibGVSb3c+XG5cdFx0XHRcdFx0XHQ8VGFibGVSb3dDb2x1bW4+Q2x1YlNvY2lhbDwvVGFibGVSb3dDb2x1bW4+XG5cdFx0XHRcdFx0XHQ8VGFibGVSb3dDb2x1bW4+MjEuMjExLjUyNi8wMDAxLTkwPC9UYWJsZVJvd0NvbHVtbj5cblx0XHRcdFx0XHRcdDxUYWJsZVJvd0NvbHVtbj4yPC9UYWJsZVJvd0NvbHVtbj5cblx0XHRcdFx0XHQ8L1RhYmxlUm93PlxuXHRcdFx0XHRcdDxUYWJsZVJvdz5cblx0XHRcdFx0XHRcdDxUYWJsZVJvd0NvbHVtbj5CYW1lcmluZHVzPC9UYWJsZVJvd0NvbHVtbj5cblx0XHRcdFx0XHRcdDxUYWJsZVJvd0NvbHVtbj44Ny40ODcuOTE4LzAwMDEtOTU8L1RhYmxlUm93Q29sdW1uPlxuXHRcdFx0XHRcdFx0PFRhYmxlUm93Q29sdW1uPjE8L1RhYmxlUm93Q29sdW1uPlxuXHRcdFx0XHRcdDwvVGFibGVSb3c+XG5cdFx0XHRcdDwvVGFibGVCb2R5PlxuXHRcdFx0PC9UYWJsZT5cblx0XHQ8L2Rpdj5cblx0PC9MYXlvdXQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZGFzaGJvYXJkLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUtBO0FBTEE7QUFLQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQWFBOztBQUVBO0FBQ0E7QUFEQTtBQUlBOzs7Ozs7QUFkQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBRUE7Ozs7QUFZQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBTEE7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBOztBQUhBO0FBS0E7QUFMQTtBQUNBOztBQUlBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQTlDQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBTUE7QUFDQTs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        