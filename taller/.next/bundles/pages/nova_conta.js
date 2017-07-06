
          window.__NEXT_REGISTER_PAGE('/nova_conta', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(551);


/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(552);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(561);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = __webpack_require__(587);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = __webpack_require__(588);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/selhar/Documents/projetos/exercises/taller/pages/nova_conta.js?entry';


var style = {
	minHeight: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};

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

var muiTheme = (0, _getMuiTheme2.default)({ userAgent: false });

var nova_conta = function nova_conta() {
	return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: muiTheme, __source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}, _react2.default.createElement('div', { style: style, __source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}, _react2.default.createElement('form', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 33
		}
	}, _react2.default.createElement(_TextField2.default, { hintText: 'E-mail', __source: {
			fileName: _jsxFileName,
			lineNumber: 34
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}), _react2.default.createElement(_TextField2.default, { hintText: 'Senha', __source: {
			fileName: _jsxFileName,
			lineNumber: 36
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 37
		}
	}), _react2.default.createElement(_TextField2.default, { hintText: 'Repetir senha', __source: {
			fileName: _jsxFileName,
			lineNumber: 38
		}
	}), _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	}), _react2.default.createElement(_RaisedButton2.default, { style: individualButtonStyle, label: 'Limpar', secondary: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 40
		}
	}), _react2.default.createElement(_RaisedButton2.default, { style: individualButtonStyle, label: 'Confirmar', primary: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 41
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

},[550]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9ub3ZhX2NvbnRhLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbm92YV9jb250YS5qcz82M2FhYmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBNdWlUaGVtZVByb3ZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyJztcbmltcG9ydCBnZXRNdWlUaGVtZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvZ2V0TXVpVGhlbWUnO1xuXG5jb25zdCBzdHlsZSA9IHtcblx0bWluSGVpZ2h0OiAnMTAwdmgnLFxuXHRkaXNwbGF5OiAnZmxleCcsXG5cdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblx0YWxpZ25JdGVtczogJ2NlbnRlcidcbn07XG5cbmNvbnN0IGJ1dHRvblN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxufTtcblxuY29uc3QgaW5kaXZpZHVhbEJ1dHRvblN0eWxlID0ge1xuXHR3aWR0aDogJzUwJScsXG5cdGZvbnRTaXplOiAnMXZ3J1xufTtcblxuY29uc3QgSGVhZGVyID0ge1xuXHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0dG9wOiAnMjVweCcsXG5cdFxufVxuXG5jb25zdCBtdWlUaGVtZSA9IGdldE11aVRoZW1lKHsgdXNlckFnZW50OiBmYWxzZSB9KTtcblxuY29uc3Qgbm92YV9jb250YSA9ICgpID0+IChcblx0PE11aVRoZW1lUHJvdmlkZXIgbXVpVGhlbWU9e211aVRoZW1lfT5cblx0XHQ8ZGl2IHN0eWxlPXtzdHlsZX0+XG5cdFx0XHQ8Zm9ybT5cblx0XHRcdFx0PFRleHRGaWVsZCBoaW50VGV4dD1cIkUtbWFpbFwiIC8+XG5cdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQ8VGV4dEZpZWxkIGhpbnRUZXh0PVwiU2VuaGFcIiAvPlxuXHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0PFRleHRGaWVsZCBoaW50VGV4dD1cIlJlcGV0aXIgc2VuaGFcIiAvPlxuXHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0PFJhaXNlZEJ1dHRvbiBzdHlsZT17aW5kaXZpZHVhbEJ1dHRvblN0eWxlfSBsYWJlbD1cIkxpbXBhclwiIHNlY29uZGFyeT17dHJ1ZX0gLz5cblx0XHRcdFx0PFJhaXNlZEJ1dHRvbiBzdHlsZT17aW5kaXZpZHVhbEJ1dHRvblN0eWxlfSBsYWJlbD1cIkNvbmZpcm1hclwiIHByaW1hcnk9e3RydWV9IC8+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9kaXY+XG5cblx0PC9NdWlUaGVtZVByb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgbm92YV9jb250YTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9ub3ZhX2NvbnRhLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFPQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        