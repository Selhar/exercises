
          window.__NEXT_REGISTER_PAGE('/novo_pedido', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(591);


/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(563);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Layout = __webpack_require__(599);

var _Layout2 = _interopRequireDefault(_Layout);

var _TextField = __webpack_require__(587);

var _TextField2 = _interopRequireDefault(_TextField);

var _SelectField = __webpack_require__(679);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(570);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Table = __webpack_require__(687);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/pages/novo_pedido.js?entry';


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
	return _react2.default.createElement(_Layout2.default, { titulo: 'Novo pedido', __source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}, _react2.default.createElement('div', { style: style.novoPedido, __source: {
			fileName: _jsxFileName,
			lineNumber: 33
		}
	}, _react2.default.createElement(_SelectField2.default, { floatingLabelText: 'Selecione uma empresa', __source: {
			fileName: _jsxFileName,
			lineNumber: 34
		}
	}, _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'Never', __source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}), _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: 'Every Night', __source: {
			fileName: _jsxFileName,
			lineNumber: 36
		}
	}), _react2.default.createElement(_MenuItem2.default, { value: 3, primaryText: 'Weeknights', __source: {
			fileName: _jsxFileName,
			lineNumber: 37
		}
	}), _react2.default.createElement(_MenuItem2.default, { value: 4, primaryText: 'Weekends', __source: {
			fileName: _jsxFileName,
			lineNumber: 38
		}
	}), _react2.default.createElement(_MenuItem2.default, { value: 5, primaryText: 'Weekly', __source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	})), _react2.default.createElement(_SelectField2.default, { floatingLabelText: 'Selecione um produto', __source: {
			fileName: _jsxFileName,
			lineNumber: 41
		}
	}, _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'Never', __source: {
			fileName: _jsxFileName,
			lineNumber: 42
		}
	}), _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: 'Every Night', __source: {
			fileName: _jsxFileName,
			lineNumber: 43
		}
	}), _react2.default.createElement(_MenuItem2.default, { value: 3, primaryText: 'Weeknights', __source: {
			fileName: _jsxFileName,
			lineNumber: 44
		}
	}), _react2.default.createElement(_MenuItem2.default, { value: 4, primaryText: 'Weekends', __source: {
			fileName: _jsxFileName,
			lineNumber: 45
		}
	}), _react2.default.createElement(_MenuItem2.default, { value: 5, primaryText: 'Weekly', __source: {
			fileName: _jsxFileName,
			lineNumber: 46
		}
	})), _react2.default.createElement(_TextField2.default, { hintText: 'Qtd', __source: {
			fileName: _jsxFileName,
			lineNumber: 48
		}
	}), _react2.default.createElement(_RaisedButton2.default, { label: 'Adicionar', primary: true, style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 49
		}
	})), _react2.default.createElement('div', { style: style.tabela, __source: {
			fileName: _jsxFileName,
			lineNumber: 51
		}
	}, _react2.default.createElement(_Table.Table, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 52
		}
	}, _react2.default.createElement(_Table.TableHeader, { displaySelectAll: false, adjustForCheckbox: false, __source: {
			fileName: _jsxFileName,
			lineNumber: 53
		}
	}, _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 54
		}
	}, _react2.default.createElement(_Table.TableHeaderColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 55
		}
	}, 'Nome fantasia'), _react2.default.createElement(_Table.TableHeaderColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 56
		}
	}, 'CNPJ'), _react2.default.createElement(_Table.TableHeaderColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 57
		}
	}, 'Qtd. Pedidos'))), _react2.default.createElement(_Table.TableBody, { displayRowCheckbox: false, __source: {
			fileName: _jsxFileName,
			lineNumber: 60
		}
	}, _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 61
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 62
		}
	}, 'Drupatec solu\xE7\xF5es'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 63
		}
	}, '28.354.669/0001-09'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 64
		}
	}, '1')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 66
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 67
		}
	}, 'BRFoods'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 68
		}
	}, '35.577.109/0001-70'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 69
		}
	}, '4')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 71
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 72
		}
	}, 'PasquePag'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 73
		}
	}, '34.763.818/0001-88'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 74
		}
	}, '0')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 76
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 77
		}
	}, 'ClubSocial'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 78
		}
	}, '21.211.526/0001-90'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 79
		}
	}, '2')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 81
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 82
		}
	}, 'Bamerindus'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 83
		}
	}, '87.487.918/0001-95'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 84
		}
	}, '1')))), _react2.default.createElement(_RaisedButton2.default, { label: 'Fechar pedido', primary: true, style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 88
		}
	})));
};

exports.default = Dashboard;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/taller/pages/novo_pedido.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/taller/pages/novo_pedido.js"); } } })();
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
    })(module.exports.default || module.exports, "/novo_pedido")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

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
			}, 'Novo Pedido'))), this.props.children));
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
//Preciso acessar esses caminhos tanto no servidor como no cliente, mantenho tudo aqui pra que a aplicação continue DRY

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

/***/ })

},[590]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9ub3ZvX3BlZGlkby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL25vdm9fcGVkaWRvLmpzPzhiZDgyNzkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanM/OGJkODI3OSIsIndlYnBhY2s6Ly8vLi91dGlscy9wYXRocy5qcz84YmQ4Mjc5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzhiZDgyNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdtYXRlcmlhbC11aS9UZXh0RmllbGQnO1xuaW1wb3J0IFNlbGVjdEZpZWxkIGZyb20gJ21hdGVyaWFsLXVpL1NlbGVjdEZpZWxkJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdtYXRlcmlhbC11aS9NZW51SXRlbSc7XG5pbXBvcnQge1xuICBUYWJsZSxcbiAgVGFibGVCb2R5LFxuICBUYWJsZUhlYWRlcixcbiAgVGFibGVIZWFkZXJDb2x1bW4sXG4gIFRhYmxlUm93LFxuICBUYWJsZVJvd0NvbHVtbixcbn0gZnJvbSAnbWF0ZXJpYWwtdWkvVGFibGUnO1xuXG5jb25zdCBzdHlsZSA9IHtcblx0dGFiZWxhOiB7XG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcblx0fSxcblx0bm92b1BlZGlkbzoge1xuXHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG5cdH1cbn07XG5cbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IChcblx0PExheW91dCB0aXR1bG89XCJOb3ZvIHBlZGlkb1wiPlxuXHRcdFx0PGRpdiBzdHlsZT17c3R5bGUubm92b1BlZGlkb30+XG5cdFx0XHRcdDxTZWxlY3RGaWVsZCBmbG9hdGluZ0xhYmVsVGV4dD1cIlNlbGVjaW9uZSB1bWEgZW1wcmVzYVwiPlxuXHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT17MX0gcHJpbWFyeVRleHQ9XCJOZXZlclwiIC8+XG5cdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPXsyfSBwcmltYXJ5VGV4dD1cIkV2ZXJ5IE5pZ2h0XCIgLz5cblx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9ezN9IHByaW1hcnlUZXh0PVwiV2Vla25pZ2h0c1wiIC8+XG5cdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPXs0fSBwcmltYXJ5VGV4dD1cIldlZWtlbmRzXCIgLz5cblx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9ezV9IHByaW1hcnlUZXh0PVwiV2Vla2x5XCIgLz5cblx0XHRcdFx0PC9TZWxlY3RGaWVsZD5cblx0XHRcdFx0PFNlbGVjdEZpZWxkIGZsb2F0aW5nTGFiZWxUZXh0PVwiU2VsZWNpb25lIHVtIHByb2R1dG9cIj5cblx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9ezF9IHByaW1hcnlUZXh0PVwiTmV2ZXJcIiAvPlxuXHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT17Mn0gcHJpbWFyeVRleHQ9XCJFdmVyeSBOaWdodFwiIC8+XG5cdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPXszfSBwcmltYXJ5VGV4dD1cIldlZWtuaWdodHNcIiAvPlxuXHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT17NH0gcHJpbWFyeVRleHQ9XCJXZWVrZW5kc1wiIC8+XG5cdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPXs1fSBwcmltYXJ5VGV4dD1cIldlZWtseVwiIC8+XG5cdFx0XHRcdDwvU2VsZWN0RmllbGQ+XG5cdFx0XHRcdDxUZXh0RmllbGQgaGludFRleHQ9XCJRdGRcIi8+XG4gICAgXHRcdFx0PFJhaXNlZEJ1dHRvbiBsYWJlbD1cIkFkaWNpb25hclwiIHByaW1hcnk9e3RydWV9IHN0eWxlPXtzdHlsZX0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBzdHlsZT17c3R5bGUudGFiZWxhfT5cblx0XHRcdDxUYWJsZT5cbiAgICBcdFx0PFRhYmxlSGVhZGVyIGRpc3BsYXlTZWxlY3RBbGw9e2ZhbHNlfSBhZGp1c3RGb3JDaGVja2JveD17ZmFsc2V9ID5cblx0XHRcdFx0XHQ8VGFibGVSb3c+XG5cdFx0XHRcdFx0XHQ8VGFibGVIZWFkZXJDb2x1bW4+Tm9tZSBmYW50YXNpYTwvVGFibGVIZWFkZXJDb2x1bW4+XG5cdFx0XHRcdFx0XHQ8VGFibGVIZWFkZXJDb2x1bW4+Q05QSjwvVGFibGVIZWFkZXJDb2x1bW4+XG5cdFx0XHRcdFx0XHQ8VGFibGVIZWFkZXJDb2x1bW4+UXRkLiBQZWRpZG9zPC9UYWJsZUhlYWRlckNvbHVtbj5cblx0XHRcdFx0XHQ8L1RhYmxlUm93PlxuXHRcdFx0XHQ8L1RhYmxlSGVhZGVyPlxuXHRcdFx0XHQ8VGFibGVCb2R5IGRpc3BsYXlSb3dDaGVja2JveD17ZmFsc2V9ID5cblx0XHRcdFx0XHQ8VGFibGVSb3c+XG5cdFx0XHRcdFx0XHQ8VGFibGVSb3dDb2x1bW4+RHJ1cGF0ZWMgc29sdcOnw7VlczwvVGFibGVSb3dDb2x1bW4+XG5cdFx0XHRcdFx0XHQ8VGFibGVSb3dDb2x1bW4+MjguMzU0LjY2OS8wMDAxLTA5PC9UYWJsZVJvd0NvbHVtbj5cblx0XHRcdFx0XHRcdDxUYWJsZVJvd0NvbHVtbj4xPC9UYWJsZVJvd0NvbHVtbj5cblx0XHRcdFx0XHQ8L1RhYmxlUm93PlxuXHRcdFx0XHRcdDxUYWJsZVJvdz5cblx0XHRcdFx0XHRcdDxUYWJsZVJvd0NvbHVtbj5CUkZvb2RzPC9UYWJsZVJvd0NvbHVtbj5cblx0XHRcdFx0XHRcdDxUYWJsZVJvd0NvbHVtbj4zNS41NzcuMTA5LzAwMDEtNzA8L1RhYmxlUm93Q29sdW1uPlxuXHRcdFx0XHRcdFx0PFRhYmxlUm93Q29sdW1uPjQ8L1RhYmxlUm93Q29sdW1uPlxuXHRcdFx0XHRcdDwvVGFibGVSb3c+XG5cdFx0XHRcdFx0PFRhYmxlUm93PlxuXHRcdFx0XHRcdFx0PFRhYmxlUm93Q29sdW1uPlBhc3F1ZVBhZzwvVGFibGVSb3dDb2x1bW4+XG5cdFx0XHRcdFx0XHQ8VGFibGVSb3dDb2x1bW4+MzQuNzYzLjgxOC8wMDAxLTg4PC9UYWJsZVJvd0NvbHVtbj5cblx0XHRcdFx0XHRcdDxUYWJsZVJvd0NvbHVtbj4wPC9UYWJsZVJvd0NvbHVtbj5cblx0XHRcdFx0XHQ8L1RhYmxlUm93PlxuXHRcdFx0XHRcdDxUYWJsZVJvdz5cblx0XHRcdFx0XHRcdDxUYWJsZVJvd0NvbHVtbj5DbHViU29jaWFsPC9UYWJsZVJvd0NvbHVtbj5cblx0XHRcdFx0XHRcdDxUYWJsZVJvd0NvbHVtbj4yMS4yMTEuNTI2LzAwMDEtOTA8L1RhYmxlUm93Q29sdW1uPlxuXHRcdFx0XHRcdFx0PFRhYmxlUm93Q29sdW1uPjI8L1RhYmxlUm93Q29sdW1uPlxuXHRcdFx0XHRcdDwvVGFibGVSb3c+XG5cdFx0XHRcdFx0PFRhYmxlUm93PlxuXHRcdFx0XHRcdFx0PFRhYmxlUm93Q29sdW1uPkJhbWVyaW5kdXM8L1RhYmxlUm93Q29sdW1uPlxuXHRcdFx0XHRcdFx0PFRhYmxlUm93Q29sdW1uPjg3LjQ4Ny45MTgvMDAwMS05NTwvVGFibGVSb3dDb2x1bW4+XG5cdFx0XHRcdFx0XHQ8VGFibGVSb3dDb2x1bW4+MTwvVGFibGVSb3dDb2x1bW4+XG5cdFx0XHRcdFx0PC9UYWJsZVJvdz5cblx0XHRcdFx0PC9UYWJsZUJvZHk+XG5cdFx0XHQ8L1RhYmxlPlxuXHRcdFx0PFJhaXNlZEJ1dHRvbiBsYWJlbD1cIkZlY2hhciBwZWRpZG9cIiBwcmltYXJ5PXt0cnVlfSBzdHlsZT17c3R5bGV9IC8+XG5cdFx0PC9kaXY+XG5cdDwvTGF5b3V0PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL25vdm9fcGVkaWRvLmpzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBEcmF3ZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRHJhd2VyJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdtYXRlcmlhbC11aS9NZW51SXRlbSc7XG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbic7XG5pbXBvcnQgRmxvYXRpbmdBY3Rpb25CdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxvYXRpbmdBY3Rpb25CdXR0b24nO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL21lbnUnO1xuaW1wb3J0IHBhdGhzIGZyb20gJy4uL3V0aWxzL3BhdGhzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXInO1xuaW1wb3J0IGdldE11aVRoZW1lIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9nZXRNdWlUaGVtZSc7XG5pbXBvcnQgaW5qZWN0VGFwRXZlbnRQbHVnaW4gZnJvbSAncmVhY3QtdGFwLWV2ZW50LXBsdWdpbic7XG5cbmNvbnN0IG11aVRoZW1lID0gZ2V0TXVpVGhlbWUoeyB1c2VyQWdlbnQ6IGZhbHNlIH0pXG5cbmNvbnN0IHN0eWxlID0ge1xuXHRtYXJnaW46ICcxNXB4Jyxcblx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdG1pbkhlaWdodDogJzk1dmgnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRvcGVuOiBmYWxzZSxcblx0XHRkcmF3ZXJXaWR0aDogJzAnXG5cdH07XG5cdFxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgXHR0cnkge1xuXHRcdFx0aW5qZWN0VGFwRXZlbnRQbHVnaW4oKTtcblx0XHR9IGNhdGNoKGVycm9yKXtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdH07XG4gIFx0fVxuXG5cdHRvZ2dsZSA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKChwcmV2aW91c1N0YXRlLCBwcm9wcykgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0b3BlbjogIXByZXZpb3VzU3RhdGUub3Blbixcblx0XHRcdFx0ZHJhd2VyV2lkdGg6IHByZXZpb3VzU3RhdGUub3BlbiA/ICcwJyA6ICcyNjBweCdcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG4gIHJlbmRlcigpIHtcblx0XHRjb25zdCBidXR0b25TdHlsZSA9IHtcblx0XHRcdG1hcmdpbkxlZnQ6IHRoaXMuc3RhdGUuZHJhd2VyV2lkdGgsIFxuXHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsIFxuXHRcdFx0dG9wOiAnMCdcblx0XHR9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE11aVRoZW1lUHJvdmlkZXIgbXVpVGhlbWU9e211aVRoZW1lfT5cblx0XHRcdFx0PGRpdiBzdHlsZT17c3R5bGV9PlxuXHRcdFx0XHRcdDxIZWFkZXIgdGl0dWxvPXt0aGlzLnByb3BzLnRpdHVsb30vPlxuXHRcdFx0XHRcdDxGbG9hdGluZ0FjdGlvbkJ1dHRvbiBcblx0XHRcdFx0XHRcdGxhYmVsPVwiVG9nZ2xlIERyYXdlclwiIFxuXHRcdFx0XHRcdFx0b25Ub3VjaFRhcD17dGhpcy50b2dnbGV9IFxuXHRcdFx0XHRcdFx0c3R5bGU9e2J1dHRvblN0eWxlfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxNZW51SWNvbiAvPlxuXHRcdFx0XHRcdDwvRmxvYXRpbmdBY3Rpb25CdXR0b24+XG5cdFx0XHRcdFx0PERyYXdlciBvcGVuPXt0aGlzLnN0YXRlLm9wZW59IHN0eWxlPXt7d2lkdGg6IHRoaXMuc3RhdGUuZHJhd2VyV2lkdGh9fT5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e3BhdGhzLmhvbWV9PlxuXHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0+TG9naW48L01lbnVJdGVtPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj17cGF0aHMubm92YV9jb250YX0+XG5cdFx0XHRcdFx0XHRcdDxNZW51SXRlbT5Ob3ZhIGNvbnRhPC9NZW51SXRlbT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e3BhdGhzLmRhc2hib2FyZH0+XG5cdFx0XHRcdFx0XHRcdDxNZW51SXRlbT5EYXNoYm9hcmQ8L01lbnVJdGVtPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj17cGF0aHMubm92b19wZWRpZG99PlxuXHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0+Tm92byBQZWRpZG88L01lbnVJdGVtPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvRHJhd2VyPlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0XHQ8L2Rpdj5cbiAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYXlvdXQuanMiLCIvL1ByZWNpc28gYWNlc3NhciBlc3NlcyBjYW1pbmhvcyB0YW50byBubyBzZXJ2aWRvciBjb21vIG5vIGNsaWVudGUsIG1hbnRlbmhvIHR1ZG8gYXF1aSBwcmEgcXVlIGEgYXBsaWNhw6fDo28gY29udGludWUgRFJZXG5cbmxldCByb290ID0gJy8nO1xuXG5jb25zdCBwYXRocyA9IHtcblx0aG9tZTogcm9vdCxcblx0bm92YV9jb250YTogcm9vdCArICdub3ZhX2NvbnRhJyxcblx0ZGFzaGJvYXJkOiByb290ICsgJ2Rhc2hib2FyZCcsXG5cdG5vdmFfZW1wcmVzYTogcm9vdCArICdub3ZhX2VtcHJlc2EnLFxuXHRwZWRpZG86IHJvb3QgKyAncGVkaWRvJyxcblx0bm92b19wZWRpZG86IHJvb3QgKyAnbm92b19wZWRpZG8nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGF0aHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvcGF0aHMuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBzdHlsZVRhbGxlciA9IHtcblx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0Zm9udEZhbWlseTogJ1wiQWxlZ3JleWFcIiwgc2VyaWYnLFxuXHRmb250U3R5bGU6ICdpdGFsaWMnLFxuXHRmb250V2VpZ2h0OiAnYm9sZCcsXG5cdHRleHRUcmFuc2Zvcm06ICdsb3dlcmNhc2UnLFxuXHRsZXR0ZXJTcGFjaW5nOiAnLTAuMDFlbScsXG5cdGZvbnRTaXplOiAnMi41ZW0nXG59XG5cbmNvbnN0IHN0eWxlSGVhZGVyID0ge1xuXHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHRmb250U2l6ZTogJzIuNWVtJyxcblx0Zm9udFdlaWdodDogJ2JvbGQnLFxufVxuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IChcblx0PGRpdj5cblx0XHQ8SGVhZD5cblx0XHRcdDx0aXRsZT57cHJvcHMudGl0dWxvIHx8ICcnfTwvdGl0bGU+XG5cdFx0XHQ8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwcm9wcy5kZXNjcmljYW99IC8+XG5cdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiLz5cblx0XHRcdDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxlZ3JleWFcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cblx0XHRcdDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLnBuZ1wiIC8+XG5cdFx0PC9IZWFkPlxuXHRcdDxoMSBzdHlsZT17XG5cdFx0XHRwcm9wcy50aXR1bG8udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09ICd0YWxsZXInIFxuXHRcdFx0PyBzdHlsZVRhbGxlciBcblx0XHRcdDogc3R5bGVIZWFkZXJcblx0XHR9PlxuXHRcdFx0e3Byb3BzLnRpdHVsb31cblx0XHQ8L2gxPlxuXHQ8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFNQTtBQUNBOzs7Ozs7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUxBOztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFQQTtBQUNBO0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBOztBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQWFBOztBQUVBO0FBQ0E7QUFEQTtBQUlBOzs7Ozs7QUFkQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBRUE7Ozs7QUFZQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBTEE7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBOztBQUhBO0FBS0E7QUFMQTtBQUNBOztBQUlBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFwREE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUtBO0FBTEE7QUFLQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        