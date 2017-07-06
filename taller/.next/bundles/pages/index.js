
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//Como next.js usa server e client side rendering, guardo aqui o caminho de todas URLS, para manter a aplicação DRY

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

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(566);


/***/ }),

/***/ 566:
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

var _link = __webpack_require__(554);

var _link2 = _interopRequireDefault(_link);

var _paths = __webpack_require__(555);

var _paths2 = _interopRequireDefault(_paths);

var _Home = __webpack_require__(653);

var _Home2 = _interopRequireDefault(_Home);

var _reactTapEventPlugin = __webpack_require__(570);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _MuiThemeProvider = __webpack_require__(576);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = __webpack_require__(556);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _AppBar = __webpack_require__(610);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _TextField = __webpack_require__(643);

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/pages/index.js?entry';


//Material UI tem um delay enorme pra onClick no celular, essa é uma solução
try {
  (0, _reactTapEventPlugin2.default)();
} catch (error) {}

var muiTheme = (0, _getMuiTheme2.default)({ userAgent: false });

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: muiTheme, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_Home2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })));
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

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(554);

var _link2 = _interopRequireDefault(_link);

var _paths = __webpack_require__(555);

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/components/Header.js';


var style = {
	marginRight: 15
};

var Header = function Header() {
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement(_link2.default, { href: _paths2.default.home, __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, _react2.default.createElement('a', { style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, 'Login')), _react2.default.createElement(_link2.default, { href: _paths2.default.nova_conta, __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement('a', { style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, 'Nova conta')));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/taller/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/taller/components/Header.js"); } } })();

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(643);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(654);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/components/Login.js';


var style = {};

var Login = function Login() {
	return _react2.default.createElement('div', { style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(_TextField2.default, { hintText: 'Login', __source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}), _react2.default.createElement(_TextField2.default, { hintText: 'Password', __source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}), _react2.default.createElement(_RaisedButton2.default, { label: 'Primary', primary: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}), _react2.default.createElement(_RaisedButton2.default, { label: 'Secondary', secondary: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}));
};

exports.default = Login;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/taller/components/Login.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/taller/components/Login.js"); } } })();

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(569);

var _Header2 = _interopRequireDefault(_Header);

var _Login = __webpack_require__(652);

var _Login2 = _interopRequireDefault(_Login);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/components/Home.js';


var style = {
	minHeight: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};

var Home = function Home() {
	return _react2.default.createElement('div', { style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement(_head2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, _react2.default.createElement('title', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, 'Taller teste t\xE9cnico'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	})), _react2.default.createElement(_Login2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}));
};

exports.default = Home;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/taller/components/Home.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/taller/components/Home.js"); } } })();

/***/ })

},[565]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWxzL3BhdGhzLmpzP2I4NjlmZDUiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/Yjg2OWZkNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz9iODY5ZmQ1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4uanM/Yjg2OWZkNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUuanM/Yjg2OWZkNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0NvbW8gbmV4dC5qcyB1c2Egc2VydmVyIGUgY2xpZW50IHNpZGUgcmVuZGVyaW5nLCBndWFyZG8gYXF1aSBvIGNhbWluaG8gZGUgdG9kYXMgVVJMUywgcGFyYSBtYW50ZXIgYSBhcGxpY2HDp8OjbyBEUllcblxubGV0IHJvb3QgPSAnLyc7XG5cbmNvbnN0IHBhdGhzID0ge1xuXHRob21lOiByb290LFxuXHRub3ZhX2NvbnRhOiByb290ICsgJ25vdmFfY29udGEnLFxuXHRkYXNoYm9hcmQ6IHJvb3QgKyAnZGFzaGJvYXJkJyxcblx0bm92YV9lbXByZXNhOiByb290ICsgJ25vdmFfZW1wcmVzYScsXG5cdG5vdm9fcGVkaWRvOiByb290ICsgJ25vdm9fcGVkaWRvJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGF0aHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvcGF0aHMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgcGF0aHMgZnJvbSAnLi4vdXRpbHMvcGF0aHMnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lJztcbmltcG9ydCBpbmplY3RUYXBFdmVudFBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJztcbmltcG9ydCBNdWlUaGVtZVByb3ZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyJztcbmltcG9ydCBnZXRNdWlUaGVtZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvZ2V0TXVpVGhlbWUnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdtYXRlcmlhbC11aS9BcHBCYXInO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdtYXRlcmlhbC11aS9UZXh0RmllbGQnO1xuXG4vL01hdGVyaWFsIFVJIHRlbSB1bSBkZWxheSBlbm9ybWUgcHJhIG9uQ2xpY2sgbm8gY2VsdWxhciwgZXNzYSDDqSB1bWEgc29sdcOnw6NvXG50cnkgeyBcbiAgaW5qZWN0VGFwRXZlbnRQbHVnaW4oKTsgXG59IGNhdGNoIChlcnJvcikgeyAgfVxuXG5jb25zdCBtdWlUaGVtZSA9IGdldE11aVRoZW1lKHsgdXNlckFnZW50OiBmYWxzZSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIG11aVRoZW1lPXttdWlUaGVtZX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhvbWUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgcGF0aHMgZnJvbSAnLi4vdXRpbHMvcGF0aHMnO1xuXG5jb25zdCBzdHlsZSA9IHtcblx0bWFyZ2luUmlnaHQ6IDE1XG59XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcblx0PGRpdj5cblx0XHQ8TGluayBocmVmPXtwYXRocy5ob21lfT5cblx0XHRcdDxhIHN0eWxlPXtzdHlsZX0+TG9naW48L2E+XG5cdFx0XHQ8L0xpbms+XG5cdFx0PExpbmsgaHJlZj17cGF0aHMubm92YV9jb250YX0+XG5cdFx0XHQ8YSBzdHlsZT17c3R5bGV9Pk5vdmEgY29udGE8L2E+XG5cdFx0PC9MaW5rPlxuXHQ8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgVGV4dEZpZWxkIGZyb20gJ21hdGVyaWFsLXVpL1RleHRGaWVsZCc7XG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbic7XG5cbmNvbnN0IHN0eWxlID0geyAgXG59O1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IChcblx0PGRpdiBzdHlsZT17c3R5bGV9PlxuXHRcdDxUZXh0RmllbGQgaGludFRleHQ9XCJMb2dpblwiIC8+XG5cdFx0PGJyIC8+XG5cdFx0PFRleHRGaWVsZCBoaW50VGV4dD1cIlBhc3N3b3JkXCIgLz5cblx0XHQ8YnIgLz5cbiAgICA8UmFpc2VkQnV0dG9uIGxhYmVsPVwiUHJpbWFyeVwiIHByaW1hcnk9e3RydWV9IC8+XG4gICAgPFJhaXNlZEJ1dHRvbiBsYWJlbD1cIlNlY29uZGFyeVwiIHNlY29uZGFyeT17dHJ1ZX0gLz5cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xvZ2luLmpzIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBzdHlsZSA9IHsgIFxuXHRcdG1pbkhlaWdodDogJzEwMHZoJyxcblx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInXG59O1xuXG5jb25zdCBIb21lID0gKCkgPT4gKFxuXHQ8ZGl2IHN0eWxlPXtzdHlsZX0+XG5cdFx0PEhlYWQ+XG5cdFx0XHQ8dGl0bGU+VGFsbGVyIHRlc3RlIHTDqWNuaWNvPC90aXRsZT5cblx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIvPlxuXHRcdDwvSGVhZD5cblxuXHRcdHsvKjxIZWFkZXIgLz4qL31cblx0XHQ8TG9naW4gLz5cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSG9tZS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFJQTtBQUpBO0FBQUE7Ozs7O0FBTEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBSkE7QUFJQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        