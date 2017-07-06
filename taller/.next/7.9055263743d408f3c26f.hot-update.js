webpackHotUpdate(7,{

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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy45MDU1MjYzNzQzZDQwOGYzYzI2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbm92YV9lbXByZXNhLmpzP2IxMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRleHRGaWVsZCBmcm9tICdtYXRlcmlhbC11aS9UZXh0RmllbGQnO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHBhdGhzIGZyb20gJy4uL3V0aWxzL3BhdGhzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgICBnbG9iYWw6IHtcblx0ICAgIG1hcmdpbjogJzE1cHgnLFxuXHQgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdCAgICBtaW5IZWlnaHQ6ICc1NXZoJyxcblx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gICAgZm9ybToge1xuICAgICAgICB3aWR0aDogJzMwMHB4JyxcbiAgICB9XG59O1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IChcbiAgICA8TGF5b3V0IHRpdHVsbz1cIk5vdmEgZW1wcmVzYVwiIGRlc2NyaWNhbz1cIkNhZGFzdHJvIGRlIGVtcHJlc2FcIj5cblxuXHQ8ZGl2IHN0eWxlPXtzdHlsZS5nbG9iYWx9PlxuXHRcdDxmb3JtPlxuXHRcdFx0PFRleHRGaWVsZCBoaW50VGV4dD1cIk5vbWUgZmFudGFzaWFcIiAvPlxuXHRcdFx0PGJyIC8+XG5cdFx0XHQ8VGV4dEZpZWxkIGhpbnRUZXh0PVwiQ05QSlwiIC8+XG5cdFx0XHQ8YnIgLz5cblx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlLmZvcm19PlxuXHRcdFx0XHQ8UmFpc2VkQnV0dG9uIGxhYmVsPVwiQ2FkYXN0cmFyXCIgcHJpbWFyeT17dHJ1ZX0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZm9ybT5cblx0PC9kaXY+IFxuICAgIDwvTGF5b3V0PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvbm92YV9lbXByZXNhLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVJBOztBQVNBO0FBQUE7QUFWQTtBQUNBO0FBYUE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9