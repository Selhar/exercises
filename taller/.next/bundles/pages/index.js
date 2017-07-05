
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(544);


/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(545);

var _link2 = _interopRequireDefault(_link);

var _paths = __webpack_require__(548);

var _paths2 = _interopRequireDefault(_paths);

var _Header = __webpack_require__(549);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/custom-server-express/pages/index.js?entry';

exports.default = function () {
  return _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/custom-server-express/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/custom-server-express/pages/index.js"); } } })();
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

/***/ 548:
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/custom-server-express/utils/paths.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/custom-server-express/utils/paths.js"); } } })();

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(545);

var _link2 = _interopRequireDefault(_link);

var _paths = __webpack_require__(548);

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/custom-server-express/components/Header.js';


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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/selhar/Documents/projetos/exercises/custom-server-express/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/selhar/Documents/projetos/exercises/custom-server-express/components/Header.js"); } } })();

/***/ })

},[543]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzQwZDg1NzUiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcGF0aHMuanM/NDBkODU3NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz80MGQ4NTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBwYXRocyBmcm9tICcuLi91dGlscy9wYXRocyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8dWw+XG4gICAgPEhlYWRlciAvPlxuICA8L3VsPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCIvL0NvbW8gbmV4dC5qcyB1c2Egc2VydmVyIGUgY2xpZW50IHNpZGUgcmVuZGVyaW5nLCBndWFyZG8gYXF1aSBvIGNhbWluaG8gZGUgdG9kYXMgVVJMUywgcGFyYSBtYW50ZXIgYSBhcGxpY2HDp8OjbyBEUllcblxubGV0IHJvb3QgPSAnLyc7XG5cbmNvbnN0IHBhdGhzID0ge1xuXHRob21lOiByb290LFxuXHRub3ZhX2NvbnRhOiByb290ICsgJ25vdmFfY29udGEnLFxuXHRkYXNoYm9hcmQ6IHJvb3QgKyAnZGFzaGJvYXJkJyxcblx0bm92YV9lbXByZXNhOiByb290ICsgJ25vdmFfZW1wcmVzYScsXG5cdG5vdm9fcGVkaWRvOiByb290ICsgJ25vdm9fcGVkaWRvJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGF0aHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvcGF0aHMuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgcGF0aHMgZnJvbSAnLi4vdXRpbHMvcGF0aHMnO1xuXG5jb25zdCBzdHlsZSA9IHtcblx0bWFyZ2luUmlnaHQ6IDE1XG59XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcblx0PGRpdj5cblx0XHQ8TGluayBocmVmPXtwYXRocy5ob21lfT5cblx0XHRcdDxhIHN0eWxlPXtzdHlsZX0+TG9naW48L2E+XG5cdFx0XHQ8L0xpbms+XG5cdFx0PExpbmsgaHJlZj17cGF0aHMubm92YV9jb250YX0+XG5cdFx0XHQ8YSBzdHlsZT17c3R5bGV9Pk5vdmEgY29udGE8L2E+XG5cdFx0PC9MaW5rPlxuXHQ8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        