webpackHotUpdate(7,{

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(608);

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
			lineNumber: 20
		}
	}, _react2.default.createElement('div', { style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, _react2.default.createElement(_Table.Table, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, _react2.default.createElement(_Table.TableHeader, { displaySelectAll: false, __source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}, _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}, _react2.default.createElement(_Table.TableHeaderColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, 'Nome fantasia'), _react2.default.createElement(_Table.TableHeaderColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}, 'CNPJ'), _react2.default.createElement(_Table.TableHeaderColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}, 'Qtd. Pedidos'))), _react2.default.createElement(_Table.TableBody, { displayRowCheckbox: false, __source: {
			fileName: _jsxFileName,
			lineNumber: 30
		}
	}, _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}, 'Drupatec solu\xE7\xF5es'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 33
		}
	}, '28.354.669/0001-09'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 34
		}
	}, '1')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 36
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 37
		}
	}, 'BRFoods'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 38
		}
	}, '35.577.109/0001-70'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	}, '4')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 41
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 42
		}
	}, 'PasquePag'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 43
		}
	}, '34.763.818/0001-88'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 44
		}
	}, '0')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 46
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 47
		}
	}, 'ClubSocial'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 48
		}
	}, '21.211.526/0001-90'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 49
		}
	}, '2')), _react2.default.createElement(_Table.TableRow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 51
		}
	}, _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 52
		}
	}, 'Bamerindus'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 53
		}
	}, '87.487.918/0001-95'), _react2.default.createElement(_Table.TableRowColumn, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 54
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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5lNjBhODcxZjFmMTM4Y2E2ZjYzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGFzaGJvYXJkLmpzPzAxZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHtcbiAgVGFibGUsXG4gIFRhYmxlQm9keSxcbiAgVGFibGVIZWFkZXIsXG4gIFRhYmxlSGVhZGVyQ29sdW1uLFxuICBUYWJsZVJvdyxcbiAgVGFibGVSb3dDb2x1bW4sXG59IGZyb20gJ21hdGVyaWFsLXVpL1RhYmxlJztcblxuY29uc3Qgc3R5bGUgPSB7XG5cdGRpc3BsYXk6ICdmbGV4Jyxcblx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0aGVpZ2h0OiAnODB2aCdcbn07XG5cbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IChcblx0PExheW91dCB0aXR1bG89XCJEYXNoYm9hcmRcIj5cblx0XHQ8ZGl2IHN0eWxlPXtzdHlsZX0+XG5cdFx0XHQ8VGFibGU+XG4gICAgXHRcdDxUYWJsZUhlYWRlciBkaXNwbGF5U2VsZWN0QWxsPXtmYWxzZX0gPlxuXHRcdFx0XHRcdDxUYWJsZVJvdz5cblx0XHRcdFx0XHRcdDxUYWJsZUhlYWRlckNvbHVtbj5Ob21lIGZhbnRhc2lhPC9UYWJsZUhlYWRlckNvbHVtbj5cblx0XHRcdFx0XHRcdDxUYWJsZUhlYWRlckNvbHVtbj5DTlBKPC9UYWJsZUhlYWRlckNvbHVtbj5cblx0XHRcdFx0XHRcdDxUYWJsZUhlYWRlckNvbHVtbj5RdGQuIFBlZGlkb3M8L1RhYmxlSGVhZGVyQ29sdW1uPlxuXHRcdFx0XHRcdDwvVGFibGVSb3c+XG5cdFx0XHRcdDwvVGFibGVIZWFkZXI+XG5cdFx0XHRcdDxUYWJsZUJvZHkgZGlzcGxheVJvd0NoZWNrYm94PXtmYWxzZX0gPlxuXHRcdFx0XHRcdDxUYWJsZVJvdz5cblx0XHRcdFx0XHRcdDxUYWJsZVJvd0NvbHVtbj5EcnVwYXRlYyBzb2x1w6fDtWVzPC9UYWJsZVJvd0NvbHVtbj5cblx0XHRcdFx0XHRcdDxUYWJsZVJvd0NvbHVtbj4yOC4zNTQuNjY5LzAwMDEtMDk8L1RhYmxlUm93Q29sdW1uPlxuXHRcdFx0XHRcdFx0PFRhYmxlUm93Q29sdW1uPjE8L1RhYmxlUm93Q29sdW1uPlxuXHRcdFx0XHRcdDwvVGFibGVSb3c+XG5cdFx0XHRcdFx0PFRhYmxlUm93PlxuXHRcdFx0XHRcdFx0PFRhYmxlUm93Q29sdW1uPkJSRm9vZHM8L1RhYmxlUm93Q29sdW1uPlxuXHRcdFx0XHRcdFx0PFRhYmxlUm93Q29sdW1uPjM1LjU3Ny4xMDkvMDAwMS03MDwvVGFibGVSb3dDb2x1bW4+XG5cdFx0XHRcdFx0XHQ8VGFibGVSb3dDb2x1bW4+NDwvVGFibGVSb3dDb2x1bW4+XG5cdFx0XHRcdFx0PC9UYWJsZVJvdz5cblx0XHRcdFx0XHQ8VGFibGVSb3c+XG5cdFx0XHRcdFx0XHQ8VGFibGVSb3dDb2x1bW4+UGFzcXVlUGFnPC9UYWJsZVJvd0NvbHVtbj5cblx0XHRcdFx0XHRcdDxUYWJsZVJvd0NvbHVtbj4zNC43NjMuODE4LzAwMDEtODg8L1RhYmxlUm93Q29sdW1uPlxuXHRcdFx0XHRcdFx0PFRhYmxlUm93Q29sdW1uPjA8L1RhYmxlUm93Q29sdW1uPlxuXHRcdFx0XHRcdDwvVGFibGVSb3c+XG5cdFx0XHRcdFx0PFRhYmxlUm93PlxuXHRcdFx0XHRcdFx0PFRhYmxlUm93Q29sdW1uPkNsdWJTb2NpYWw8L1RhYmxlUm93Q29sdW1uPlxuXHRcdFx0XHRcdFx0PFRhYmxlUm93Q29sdW1uPjIxLjIxMS41MjYvMDAwMS05MDwvVGFibGVSb3dDb2x1bW4+XG5cdFx0XHRcdFx0XHQ8VGFibGVSb3dDb2x1bW4+MjwvVGFibGVSb3dDb2x1bW4+XG5cdFx0XHRcdFx0PC9UYWJsZVJvdz5cblx0XHRcdFx0XHQ8VGFibGVSb3c+XG5cdFx0XHRcdFx0XHQ8VGFibGVSb3dDb2x1bW4+QmFtZXJpbmR1czwvVGFibGVSb3dDb2x1bW4+XG5cdFx0XHRcdFx0XHQ8VGFibGVSb3dDb2x1bW4+ODcuNDg3LjkxOC8wMDAxLTk1PC9UYWJsZVJvd0NvbHVtbj5cblx0XHRcdFx0XHRcdDxUYWJsZVJvd0NvbHVtbj4xPC9UYWJsZVJvd0NvbHVtbj5cblx0XHRcdFx0XHQ8L1RhYmxlUm93PlxuXHRcdFx0XHQ8L1RhYmxlQm9keT5cblx0XHRcdDwvVGFibGU+XG5cdFx0PC9kaXY+XG5cdDwvTGF5b3V0PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2Rhc2hib2FyZC5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBTUE7QUFDQTs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==