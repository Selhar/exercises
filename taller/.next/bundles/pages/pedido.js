
          window.__NEXT_REGISTER_PAGE('/pedido', function() {
            var comp = module.exports =
webpackJsonp([6],{

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

/***/ 599:
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

var _Drawer = __webpack_require__(600);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = __webpack_require__(604);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _RaisedButton = __webpack_require__(562);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FloatingActionButton = __webpack_require__(632);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _menu = __webpack_require__(634);

var _menu2 = _interopRequireDefault(_menu);

var _paths = __webpack_require__(567);

var _paths2 = _interopRequireDefault(_paths);

var _Header = __webpack_require__(635);

var _Header2 = _interopRequireDefault(_Header);

var _MuiThemeProvider = __webpack_require__(636);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = __webpack_require__(573);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _reactTapEventPlugin = __webpack_require__(670);

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

var _RaisedButton = __webpack_require__(562);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Layout = __webpack_require__(599);

var _Layout2 = _interopRequireDefault(_Layout);

var _TextField = __webpack_require__(580);

var _TextField2 = _interopRequireDefault(_TextField);

var _SelectField = __webpack_require__(681);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(604);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Table = __webpack_require__(689);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/pages/pedido.js?entry';


var style = {
	tabela: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	},
	novoPedido: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	}
};

var Dashboard = function Dashboard() {
	return _react2.default.createElement(_Layout2.default, { titulo: 'Meus pedidos', __source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}, _react2.default.createElement('div', { style: style.novoPedido, __source: {
			fileName: _jsxFileName,
			lineNumber: 33
		}
	}, _react2.default.createElement(_TextField2.default, { hintText: 'CNPJ', __source: {
			fileName: _jsxFileName,
			lineNumber: 34
		}
	}), _react2.default.createElement(_TextField2.default, { hintText: 'Pedido', __source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}), _react2.default.createElement(_RaisedButton2.default, { label: 'Filtrar', primary: true, style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 36
		}
	})), _react2.default.createElement('div', { style: style.tabela, __source: {
			fileName: _jsxFileName,
			lineNumber: 38
		}
	}, _react2.default.createElement(_Table.Table, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	}, _react2.default.createElement(_Table.TableHeader, { displaySelectAll: false, adjustForCheckbox: false, __source: {
			fileName: _jsxFileName,
			lineNumber: 40
		}
	}, _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 41
		}
	}, _react2.default.createElement(_Table.TableHeaderColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 42
		}
	}, 'C\xF3digo do pedido'), _react2.default.createElement(_Table.TableHeaderColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 43
		}
	}, 'Itens do pedido'), _react2.default.createElement(_Table.TableHeaderColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 44
		}
	}, 'A\xE7\xF5es'))), _react2.default.createElement(_Table.TableBody, { displayRowCheckbox: false, __source: {
			fileName: _jsxFileName,
			lineNumber: 47
		}
	}, _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 48
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 49
		}
	}, '20'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 50
		}
	}, 'PLACEHOLDER'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 51
		}
	}, 'PLACEHOLDER'))))));
};

exports.default = Dashboard;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/taller/pages/pedido.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/taller/pages/pedido.js"); } } })();
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
    })(module.exports.default || module.exports, "/pedido")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

},[679]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9wZWRpZG8uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9wYXRocy5qcz84MWJkNjhkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzgxYmQ2OGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/ODFiZDY4ZCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wZWRpZG8uanM/ODFiZDY4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1ByZWNpc28gYWNlc3NhciBlc3NlcyBjYW1pbmhvcyB0YW50byBubyBzZXJ2aWRvciBjb21vIG5vIGNsaWVudGUsIFxuLy9tYW50ZW5obyB0dWRvIGFxdWkgcHJhIHF1ZSBhIGFwbGljYcOnw6NvIGNvbnRpbnVlIERSWVxuXG5sZXQgcm9vdCA9ICcvJztcblxuY29uc3QgcGF0aHMgPSB7XG5cdGhvbWU6IFtyb290LCAnTG9naW4nXSxcblx0bm92YV9jb250YTogW3Jvb3QgKyAnbm92YV9jb250YScsICdOb3ZhIGNvbnRhJ10sXG5cdGRhc2hib2FyZDogW3Jvb3QgKyAnZGFzaGJvYXJkJywgJ0Rhc2hib2FyZCddLFxuXHRub3ZhX2VtcHJlc2E6IFtyb290ICsgJ25vdmFfZW1wcmVzYScsICdOb3ZhIGVtcHJlc2EnXSxcblx0cGVkaWRvOiBbcm9vdCArICdwZWRpZG8nLCAnUGVkaWRvcyddLFxuXHRub3ZvX3BlZGlkbzogW3Jvb3QgKyAnbm92b19wZWRpZG8nLCAnTm92byBwZWRpZG8nXSxcblx0bWluaGFfY29udGE6IFtyb290ICsgJ21pbmhhX2NvbnRhJywgJ01pbmhhIGNvbnRhJ10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYXRocztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9wYXRocy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgRHJhd2VyIGZyb20gJ21hdGVyaWFsLXVpL0RyYXdlcic7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudUl0ZW0nO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IEZsb2F0aW5nQWN0aW9uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0Zsb2F0aW5nQWN0aW9uQnV0dG9uJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9tZW51JztcbmltcG9ydCBwYXRocyBmcm9tICcuLi91dGlscy9wYXRocyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBNdWlUaGVtZVByb3ZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyJztcbmltcG9ydCBnZXRNdWlUaGVtZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvZ2V0TXVpVGhlbWUnO1xuaW1wb3J0IGluamVjdFRhcEV2ZW50UGx1Z2luIGZyb20gJ3JlYWN0LXRhcC1ldmVudC1wbHVnaW4nO1xuXG5jb25zdCBtdWlUaGVtZSA9IGdldE11aVRoZW1lKHsgdXNlckFnZW50OiBmYWxzZSB9KVxuXG5jb25zdCBzdHlsZSA9IHtcblx0bWFyZ2luOiAnMTVweCcsXG5cdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHRtaW5IZWlnaHQ6ICc5NXZoJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0b3BlbjogZmFsc2UsXG5cdFx0ZHJhd2VyV2lkdGg6ICcwJ1xuXHR9O1xuXHRcblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIFx0dHJ5IHtcblx0XHRcdGluamVjdFRhcEV2ZW50UGx1Z2luKCk7XG5cdFx0fSBjYXRjaChlcnJvcil7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9O1xuICBcdH1cblxuXHR0b2dnbGUgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSgocHJldmlvdXNTdGF0ZSwgcHJvcHMpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG9wZW46ICFwcmV2aW91c1N0YXRlLm9wZW4sXG5cdFx0XHRcdGRyYXdlcldpZHRoOiBwcmV2aW91c1N0YXRlLm9wZW4gPyAnMCcgOiAnMjYwcHgnXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuICByZW5kZXIoKSB7XG5cdFx0Y29uc3QgYnV0dG9uU3R5bGUgPSB7XG5cdFx0XHRtYXJnaW5MZWZ0OiB0aGlzLnN0YXRlLmRyYXdlcldpZHRoLCBcblx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBcblx0XHRcdHRvcDogJzAnXG5cdFx0fVxuXG5cdFx0bGV0IHJvdXRlcyA9IFtdO1xuXHRcdGZvcihsZXQga2V5IG9mIE9iamVjdC5rZXlzKHBhdGhzKSkge1xuXHRcdFx0cm91dGVzLnB1c2goXG5cdFx0XHRcdDxMaW5rIGhyZWY9e3BhdGhzW2tleV1bMF19PlxuXHRcdFx0XHRcdDxNZW51SXRlbT57cGF0aHNba2V5XVsxXX08L01lbnVJdGVtPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHQpXG5cdFx0fVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIG11aVRoZW1lPXttdWlUaGVtZX0+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlfT5cblx0XHRcdFx0XHQ8SGVhZGVyIHRpdHVsbz17dGhpcy5wcm9wcy50aXR1bG99Lz5cblx0XHRcdFx0XHQ8RmxvYXRpbmdBY3Rpb25CdXR0b24gXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlRvZ2dsZSBEcmF3ZXJcIiBcblx0XHRcdFx0XHRcdG9uVG91Y2hUYXA9e3RoaXMudG9nZ2xlfSBcblx0XHRcdFx0XHRcdHN0eWxlPXtidXR0b25TdHlsZX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8TWVudUljb24gLz5cblx0XHRcdFx0XHQ8L0Zsb2F0aW5nQWN0aW9uQnV0dG9uPlxuXHRcdFx0XHRcdDxEcmF3ZXIgb3Blbj17dGhpcy5zdGF0ZS5vcGVufSBzdHlsZT17e3dpZHRoOiB0aGlzLnN0YXRlLmRyYXdlcldpZHRofX0+XG5cdFx0XHRcdFx0XHR7cm91dGVzfVxuXHRcdFx0XHRcdDwvRHJhd2VyPlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0XHQ8L2Rpdj5cbiAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBzdHlsZVRhbGxlciA9IHtcblx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0Zm9udEZhbWlseTogJ1wiQWxlZ3JleWFcIiwgc2VyaWYnLFxuXHRmb250U3R5bGU6ICdpdGFsaWMnLFxuXHRmb250V2VpZ2h0OiAnYm9sZCcsXG5cdHRleHRUcmFuc2Zvcm06ICdsb3dlcmNhc2UnLFxuXHRsZXR0ZXJTcGFjaW5nOiAnLTAuMDFlbScsXG5cdGZvbnRTaXplOiAnMi41ZW0nXG59XG5cbmNvbnN0IHN0eWxlSGVhZGVyID0ge1xuXHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHRmb250U2l6ZTogJzIuNWVtJyxcblx0Zm9udFdlaWdodDogJ2JvbGQnLFxufVxuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IChcblx0PGRpdj5cblx0XHQ8SGVhZD5cblx0XHRcdDx0aXRsZT57cHJvcHMudGl0dWxvIHx8ICcnfTwvdGl0bGU+XG5cdFx0XHQ8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwcm9wcy5kZXNjcmljYW99IC8+XG5cdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiLz5cblx0XHRcdDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxlZ3JleWFcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cblx0XHRcdDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLnBuZ1wiIC8+XG5cdFx0PC9IZWFkPlxuXHRcdDxoMSBzdHlsZT17XG5cdFx0XHRwcm9wcy50aXR1bG8udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09ICd0YWxsZXInIFxuXHRcdFx0PyBzdHlsZVRhbGxlciBcblx0XHRcdDogc3R5bGVIZWFkZXJcblx0XHR9PlxuXHRcdFx0e3Byb3BzLnRpdHVsb31cblx0XHQ8L2gxPlxuXHQ8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ21hdGVyaWFsLXVpL1RleHRGaWVsZCc7XG5pbXBvcnQgU2VsZWN0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvU2VsZWN0RmllbGQnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcbmltcG9ydCB7XG4gIFRhYmxlLFxuICBUYWJsZUJvZHksXG4gIFRhYmxlSGVhZGVyLFxuICBUYWJsZUhlYWRlckNvbHVtbixcbiAgVGFibGVSb3csXG4gIFRhYmxlUm93Q29sdW1uLFxufSBmcm9tICdtYXRlcmlhbC11aS9UYWJsZSc7XG5cbmNvbnN0IHN0eWxlID0ge1xuXHR0YWJlbGE6IHtcblx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuXHR9LFxuXHRub3ZvUGVkaWRvOiB7XG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcblx0fVxufTtcblxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4gKFxuXHQ8TGF5b3V0IHRpdHVsbz1cIk1ldXMgcGVkaWRvc1wiPlxuXHRcdFx0PGRpdiBzdHlsZT17c3R5bGUubm92b1BlZGlkb30+XG5cdFx0XHRcdDxUZXh0RmllbGQgaGludFRleHQ9XCJDTlBKXCIvPlxuXHRcdFx0XHQ8VGV4dEZpZWxkIGhpbnRUZXh0PVwiUGVkaWRvXCIvPlxuICAgIFx0XHQ8UmFpc2VkQnV0dG9uIGxhYmVsPVwiRmlsdHJhclwiIHByaW1hcnk9e3RydWV9IHN0eWxlPXtzdHlsZX0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBzdHlsZT17c3R5bGUudGFiZWxhfT5cblx0XHRcdFx0PFRhYmxlPlxuXHRcdFx0XHRcdDxUYWJsZUhlYWRlciBkaXNwbGF5U2VsZWN0QWxsPXtmYWxzZX0gYWRqdXN0Rm9yQ2hlY2tib3g9e2ZhbHNlfSA+XG5cdFx0XHRcdFx0XHQ8VGFibGVSb3c+XG5cdFx0XHRcdFx0XHRcdDxUYWJsZUhlYWRlckNvbHVtbj5Dw7NkaWdvIGRvIHBlZGlkbzwvVGFibGVIZWFkZXJDb2x1bW4+XG5cdFx0XHRcdFx0XHRcdDxUYWJsZUhlYWRlckNvbHVtbj5JdGVucyBkbyBwZWRpZG88L1RhYmxlSGVhZGVyQ29sdW1uPlxuXHRcdFx0XHRcdFx0XHQ8VGFibGVIZWFkZXJDb2x1bW4+QcOnw7VlczwvVGFibGVIZWFkZXJDb2x1bW4+XG5cdFx0XHRcdFx0XHQ8L1RhYmxlUm93PlxuXHRcdFx0XHRcdDwvVGFibGVIZWFkZXI+XG5cdFx0XHRcdFx0PFRhYmxlQm9keSBkaXNwbGF5Um93Q2hlY2tib3g9e2ZhbHNlfSA+XG5cdFx0XHRcdFx0XHQ8VGFibGVSb3c+XG5cdFx0XHRcdFx0XHRcdDxUYWJsZVJvd0NvbHVtbj4yMDwvVGFibGVSb3dDb2x1bW4+XG5cdFx0XHRcdFx0XHRcdDxUYWJsZVJvd0NvbHVtbj5QTEFDRUhPTERFUjwvVGFibGVSb3dDb2x1bW4+XG5cdFx0XHRcdFx0XHRcdDxUYWJsZVJvd0NvbHVtbj5QTEFDRUhPTERFUjwvVGFibGVSb3dDb2x1bW4+XG5cdFx0XHRcdFx0XHQ8L1RhYmxlUm93PlxuXHRcdFx0XHRcdDwvVGFibGVCb2R5PlxuXHRcdFx0XHQ8L1RhYmxlPlxuXHRcdDwvZGl2PlxuXHQ8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9wZWRpZG8uanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFBQTtBQURBO0FBYUE7O0FBRUE7QUFDQTtBQURBO0FBSUE7Ozs7OztBQWRBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFFQTs7OztBQVlBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFMQTtBQUNBO0FBSUE7QUFQQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBOztBQUhBO0FBS0E7QUFMQTtBQUNBOztBQUlBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBR0E7Ozs7O0FBckRBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUtBO0FBTEE7QUFLQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFNQTtBQUNBOzs7Ozs7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUxBOztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFQQTtBQUNBO0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        