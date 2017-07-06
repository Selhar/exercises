webpackHotUpdate(0,{

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _RaisedButton = __webpack_require__(655);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _RaisedButton2.default;

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(111);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(544);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _simpleAssign = __webpack_require__(543);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(94);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(545);

var _transitions2 = _interopRequireDefault(_transitions);

var _colorManipulator = __webpack_require__(557);

var _EnhancedButton = __webpack_require__(614);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _Paper = __webpack_require__(641);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateLabel(props, propName, componentName) {
  if (true) {
    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
    }
  }
}

function getStyles(props, context, state) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      button = _context$muiTheme.button,
      raisedButton = _context$muiTheme.raisedButton,
      borderRadius = _context$muiTheme.borderRadius;
  var disabled = props.disabled,
      disabledBackgroundColor = props.disabledBackgroundColor,
      disabledLabelColor = props.disabledLabelColor,
      fullWidth = props.fullWidth,
      icon = props.icon,
      label = props.label,
      labelPosition = props.labelPosition,
      primary = props.primary,
      secondary = props.secondary,
      style = props.style;


  var amount = primary || secondary ? 0.4 : 0.08;

  var backgroundColor = raisedButton.color;
  var labelColor = raisedButton.textColor;

  if (disabled) {
    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
    labelColor = disabledLabelColor || raisedButton.disabledTextColor;
  } else if (primary) {
    backgroundColor = raisedButton.primaryColor;
    labelColor = raisedButton.primaryTextColor;
  } else if (secondary) {
    backgroundColor = raisedButton.secondaryColor;
    labelColor = raisedButton.secondaryTextColor;
  } else {
    if (props.backgroundColor) {
      backgroundColor = props.backgroundColor;
    }
    if (props.labelColor) {
      labelColor = props.labelColor;
    }
  }

  var buttonHeight = style && style.height || button.height;

  return {
    root: {
      display: 'inline-block',
      transition: _transitions2.default.easeOut(),
      minWidth: fullWidth ? '100%' : button.minWidth
    },
    button: {
      height: buttonHeight,
      lineHeight: buttonHeight + 'px',
      width: '100%',
      padding: 0,
      borderRadius: borderRadius,
      transition: _transitions2.default.easeOut(),
      backgroundColor: backgroundColor,
      // That's the default value for a button but not a link
      textAlign: 'center'
    },
    label: {
      position: 'relative',
      opacity: 1,
      fontSize: raisedButton.fontSize,
      letterSpacing: 0,
      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
      fontWeight: raisedButton.fontWeight,
      margin: 0,
      userSelect: 'none',
      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
      color: labelColor
    },
    icon: {
      verticalAlign: 'middle',
      marginLeft: label && labelPosition !== 'before' ? 12 : 0,
      marginRight: label && labelPosition === 'before' ? 12 : 0
    },
    overlay: {
      height: buttonHeight,
      borderRadius: borderRadius,
      backgroundColor: (state.keyboardFocused || state.hovered) && !disabled && (0, _colorManipulator.fade)(labelColor, amount),
      transition: _transitions2.default.easeOut(),
      top: 0
    },
    ripple: {
      color: labelColor,
      opacity: !(primary || secondary) ? 0.1 : 0.16
    }
  };
}

var RaisedButton = function (_Component) {
  (0, _inherits3.default)(RaisedButton, _Component);

  function RaisedButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RaisedButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RaisedButton.__proto__ || (0, _getPrototypeOf2.default)(RaisedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      keyboardFocused: false,
      touched: false,
      initialZDepth: 0,
      zDepth: 0
    }, _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.setState({
          zDepth: _this.state.initialZDepth + 1
        });
      }
      if (_this.props.onMouseDown) {
        _this.props.onMouseDown(event);
      }
    }, _this.handleMouseUp = function (event) {
      _this.setState({
        zDepth: _this.state.initialZDepth
      });
      if (_this.props.onMouseUp) {
        _this.props.onMouseUp(event);
      }
    }, _this.handleMouseLeave = function (event) {
      if (!_this.state.keyboardFocused) {
        _this.setState({
          zDepth: _this.state.initialZDepth,
          hovered: false
        });
      }
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseEnter = function (event) {
      if (!_this.state.keyboardFocused && !_this.state.touched) {
        _this.setState({
          hovered: true
        });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _this.handleTouchStart = function (event) {
      _this.setState({
        touched: true,
        zDepth: _this.state.initialZDepth + 1
      });

      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }
    }, _this.handleTouchEnd = function (event) {
      _this.setState({
        touched: true,
        zDepth: _this.state.initialZDepth
      });

      if (_this.props.onTouchEnd) {
        _this.props.onTouchEnd(event);
      }
    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
      var zDepth = keyboardFocused && !_this.props.disabled ? _this.state.initialZDepth + 1 : _this.state.initialZDepth;

      _this.setState({
        zDepth: zDepth,
        keyboardFocused: keyboardFocused
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RaisedButton, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var zDepth = this.props.disabled ? 0 : 1;
      this.setState({
        zDepth: zDepth,
        initialZDepth: zDepth
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var zDepth = nextProps.disabled ? 0 : 1;
      var nextState = {
        zDepth: zDepth,
        initialZDepth: zDepth
      };

      if (nextProps.disabled) {
        nextState.hovered = false;
      }

      this.setState(nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          backgroundColor = _props.backgroundColor,
          buttonStyle = _props.buttonStyle,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          disabledBackgroundColor = _props.disabledBackgroundColor,
          disabledLabelColor = _props.disabledLabelColor,
          fullWidth = _props.fullWidth,
          icon = _props.icon,
          label = _props.label,
          labelColor = _props.labelColor,
          labelPosition = _props.labelPosition,
          labelStyle = _props.labelStyle,
          overlayStyle = _props.overlayStyle,
          primary = _props.primary,
          rippleStyle = _props.rippleStyle,
          secondary = _props.secondary,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'buttonStyle', 'children', 'className', 'disabled', 'disabledBackgroundColor', 'disabledLabelColor', 'fullWidth', 'icon', 'label', 'labelColor', 'labelPosition', 'labelStyle', 'overlayStyle', 'primary', 'rippleStyle', 'secondary', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var mergedRippleStyles = (0, _simpleAssign2.default)({}, styles.ripple, rippleStyle);

      var buttonEventHandlers = disabled ? {} : {
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onMouseLeave: this.handleMouseLeave,
        onMouseEnter: this.handleMouseEnter,
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd,
        onKeyboardFocus: this.handleKeyboardFocus
      };

      var labelElement = label && _react2.default.createElement(
        'span',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)), key: 'labelElement' },
        label
      );

      var iconCloned = icon && (0, _react.cloneElement)(icon, {
        color: icon.props.color || styles.label.color,
        style: (0, _simpleAssign2.default)(styles.icon, icon.props.style),
        key: 'iconCloned'
      });

      // Place label before or after children.
      var enhancedButtonChildren = labelPosition === 'before' ? [labelElement, iconCloned, children] : [children, iconCloned, labelElement];

      return _react2.default.createElement(
        _Paper2.default,
        {
          className: className,
          style: (0, _simpleAssign2.default)(styles.root, style),
          zDepth: this.state.zDepth
        },
        _react2.default.createElement(
          _EnhancedButton2.default,
          (0, _extends3.default)({}, other, buttonEventHandlers, {
            ref: 'container',
            disabled: disabled,
            style: (0, _simpleAssign2.default)(styles.button, buttonStyle),
            focusRippleColor: mergedRippleStyles.color,
            touchRippleColor: mergedRippleStyles.color,
            focusRippleOpacity: mergedRippleStyles.opacity,
            touchRippleOpacity: mergedRippleStyles.opacity
          }),
          _react2.default.createElement(
            'div',
            {
              ref: 'overlay',
              style: prepareStyles((0, _simpleAssign2.default)(styles.overlay, overlayStyle))
            },
            enhancedButtonChildren
          )
        )
      );
    }
  }]);
  return RaisedButton;
}(_react.Component);

RaisedButton.muiName = 'RaisedButton';
RaisedButton.defaultProps = {
  disabled: false,
  labelPosition: 'after',
  fullWidth: false,
  primary: false,
  secondary: false
};
RaisedButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
RaisedButton.propTypes =  true ? {
  /**
   * Override the default background color for the button,
   * but not the default disabled background color
   * (use `disabledBackgroundColor` for this).
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * Override the inline-styles of the button element.
   */
  buttonStyle: _propTypes2.default.object,
  /**
   * The content of the button.
   * If a label is provided via the `label` prop, the text within the label
   * will be displayed in addition to the content provided here.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
    * The element to use as the container for the RaisedButton. Either a string to
    * use a DOM element or a ReactElement. This is useful for wrapping the
    * RaisedButton in a custom Link component. If a ReactElement is given, ensure
    * that it passes all of its given props through to the underlying DOM
    * element and renders its children prop for proper integration.
    */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * If true, the element's ripple effect will be disabled.
   */
  disableTouchRipple: _propTypes2.default.bool,
  /**
   * If true, the button will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Override the default background color for the button
   * when it is disabled.
   */
  disabledBackgroundColor: _propTypes2.default.string,
  /**
   * The color of the button's label when the button is disabled.
   */
  disabledLabelColor: _propTypes2.default.string,
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * The URL to link to when the button is clicked.
   */
  href: _propTypes2.default.string,
  /**
   * An icon to be displayed within the button.
   */
  icon: _propTypes2.default.node,
  /**
   * The label to be displayed within the button.
   * If content is provided via the `children` prop, that content will be
   * displayed in addition to the label provided here.
   */
  label: validateLabel,
  /**
   * The color of the button's label.
   */
  labelColor: _propTypes2.default.string,
  /**
   * The position of the button's label relative to the button's `children`.
   */
  labelPosition: _propTypes2.default.oneOf(['before', 'after']),
  /**
   * Override the inline-styles of the button's label element.
   */
  labelStyle: _propTypes2.default.object,
  /** @ignore */
  onMouseDown: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onMouseUp: _propTypes2.default.func,
  /** @ignore */
  onTouchEnd: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Callback function fired when the button is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the button.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * Override the inline style of the button overlay.
   */
  overlayStyle: _propTypes2.default.object,
  /**
   * If true, the button will use the theme's primary color.
   */
  primary: _propTypes2.default.bool,
  /**
   * Override the inline style of the ripple element.
   */
  rippleStyle: _propTypes2.default.object,
  /**
   * If true, the button will use the theme's secondary color.
   * If both `secondary` and `primary` are true, the button will use
   * the theme's primary color.
   */
  secondary: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = RaisedButton;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43YjhkYmE4MTZhYTk2YjgzNWVmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbi9pbmRleC5qcz9lZDEzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9SYWlzZWRCdXR0b24vUmFpc2VkQnV0dG9uLmpzPzA5MTciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX1JhaXNlZEJ1dHRvbiA9IHJlcXVpcmUoJy4vUmFpc2VkQnV0dG9uJyk7XG5cbnZhciBfUmFpc2VkQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JhaXNlZEJ1dHRvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9SYWlzZWRCdXR0b24yLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2NTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbnZhciBfY29sb3JNYW5pcHVsYXRvciA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbG9yTWFuaXB1bGF0b3InKTtcblxudmFyIF9FbmhhbmNlZEJ1dHRvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFsL0VuaGFuY2VkQnV0dG9uJyk7XG5cbnZhciBfRW5oYW5jZWRCdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW5oYW5jZWRCdXR0b24pO1xuXG52YXIgX1BhcGVyID0gcmVxdWlyZSgnLi4vUGFwZXInKTtcblxudmFyIF9QYXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYXBlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTGFiZWwocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFwcm9wcy5jaGlsZHJlbiAmJiBwcm9wcy5sYWJlbCAhPT0gMCAmJiAhcHJvcHMubGFiZWwgJiYgIXByb3BzLmljb24pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1JlcXVpcmVkIHByb3AgbGFiZWwgb3IgY2hpbGRyZW4gb3IgaWNvbiB3YXMgbm90IHNwZWNpZmllZCBpbiAnICsgY29tcG9uZW50TmFtZSArICcuJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCwgc3RhdGUpIHtcbiAgdmFyIF9jb250ZXh0JG11aVRoZW1lID0gY29udGV4dC5tdWlUaGVtZSxcbiAgICAgIGJhc2VUaGVtZSA9IF9jb250ZXh0JG11aVRoZW1lLmJhc2VUaGVtZSxcbiAgICAgIGJ1dHRvbiA9IF9jb250ZXh0JG11aVRoZW1lLmJ1dHRvbixcbiAgICAgIHJhaXNlZEJ1dHRvbiA9IF9jb250ZXh0JG11aVRoZW1lLnJhaXNlZEJ1dHRvbixcbiAgICAgIGJvcmRlclJhZGl1cyA9IF9jb250ZXh0JG11aVRoZW1lLmJvcmRlclJhZGl1cztcbiAgdmFyIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlZEJhY2tncm91bmRDb2xvciA9IHByb3BzLmRpc2FibGVkQmFja2dyb3VuZENvbG9yLFxuICAgICAgZGlzYWJsZWRMYWJlbENvbG9yID0gcHJvcHMuZGlzYWJsZWRMYWJlbENvbG9yLFxuICAgICAgZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgaWNvbiA9IHByb3BzLmljb24sXG4gICAgICBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgICAgbGFiZWxQb3NpdGlvbiA9IHByb3BzLmxhYmVsUG9zaXRpb24sXG4gICAgICBwcmltYXJ5ID0gcHJvcHMucHJpbWFyeSxcbiAgICAgIHNlY29uZGFyeSA9IHByb3BzLnNlY29uZGFyeSxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGU7XG5cblxuICB2YXIgYW1vdW50ID0gcHJpbWFyeSB8fCBzZWNvbmRhcnkgPyAwLjQgOiAwLjA4O1xuXG4gIHZhciBiYWNrZ3JvdW5kQ29sb3IgPSByYWlzZWRCdXR0b24uY29sb3I7XG4gIHZhciBsYWJlbENvbG9yID0gcmFpc2VkQnV0dG9uLnRleHRDb2xvcjtcblxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSBkaXNhYmxlZEJhY2tncm91bmRDb2xvciB8fCByYWlzZWRCdXR0b24uZGlzYWJsZWRDb2xvcjtcbiAgICBsYWJlbENvbG9yID0gZGlzYWJsZWRMYWJlbENvbG9yIHx8IHJhaXNlZEJ1dHRvbi5kaXNhYmxlZFRleHRDb2xvcjtcbiAgfSBlbHNlIGlmIChwcmltYXJ5KSB7XG4gICAgYmFja2dyb3VuZENvbG9yID0gcmFpc2VkQnV0dG9uLnByaW1hcnlDb2xvcjtcbiAgICBsYWJlbENvbG9yID0gcmFpc2VkQnV0dG9uLnByaW1hcnlUZXh0Q29sb3I7XG4gIH0gZWxzZSBpZiAoc2Vjb25kYXJ5KSB7XG4gICAgYmFja2dyb3VuZENvbG9yID0gcmFpc2VkQnV0dG9uLnNlY29uZGFyeUNvbG9yO1xuICAgIGxhYmVsQ29sb3IgPSByYWlzZWRCdXR0b24uc2Vjb25kYXJ5VGV4dENvbG9yO1xuICB9IGVsc2Uge1xuICAgIGlmIChwcm9wcy5iYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICAgIGJhY2tncm91bmRDb2xvciA9IHByb3BzLmJhY2tncm91bmRDb2xvcjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmxhYmVsQ29sb3IpIHtcbiAgICAgIGxhYmVsQ29sb3IgPSBwcm9wcy5sYWJlbENvbG9yO1xuICAgIH1cbiAgfVxuXG4gIHZhciBidXR0b25IZWlnaHQgPSBzdHlsZSAmJiBzdHlsZS5oZWlnaHQgfHwgYnV0dG9uLmhlaWdodDtcblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIG1pbldpZHRoOiBmdWxsV2lkdGggPyAnMTAwJScgOiBidXR0b24ubWluV2lkdGhcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgaGVpZ2h0OiBidXR0b25IZWlnaHQsXG4gICAgICBsaW5lSGVpZ2h0OiBidXR0b25IZWlnaHQgKyAncHgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcbiAgICAgIC8vIFRoYXQncyB0aGUgZGVmYXVsdCB2YWx1ZSBmb3IgYSBidXR0b24gYnV0IG5vdCBhIGxpbmtcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBmb250U2l6ZTogcmFpc2VkQnV0dG9uLmZvbnRTaXplLFxuICAgICAgbGV0dGVyU3BhY2luZzogMCxcbiAgICAgIHRleHRUcmFuc2Zvcm06IHJhaXNlZEJ1dHRvbi50ZXh0VHJhbnNmb3JtIHx8IGJ1dHRvbi50ZXh0VHJhbnNmb3JtIHx8ICd1cHBlcmNhc2UnLFxuICAgICAgZm9udFdlaWdodDogcmFpc2VkQnV0dG9uLmZvbnRXZWlnaHQsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICBwYWRkaW5nTGVmdDogaWNvbiAmJiBsYWJlbFBvc2l0aW9uICE9PSAnYmVmb3JlJyA/IDggOiBiYXNlVGhlbWUuc3BhY2luZy5kZXNrdG9wR3V0dGVyTGVzcyxcbiAgICAgIHBhZGRpbmdSaWdodDogaWNvbiAmJiBsYWJlbFBvc2l0aW9uID09PSAnYmVmb3JlJyA/IDggOiBiYXNlVGhlbWUuc3BhY2luZy5kZXNrdG9wR3V0dGVyTGVzcyxcbiAgICAgIGNvbG9yOiBsYWJlbENvbG9yXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIG1hcmdpbkxlZnQ6IGxhYmVsICYmIGxhYmVsUG9zaXRpb24gIT09ICdiZWZvcmUnID8gMTIgOiAwLFxuICAgICAgbWFyZ2luUmlnaHQ6IGxhYmVsICYmIGxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnID8gMTIgOiAwXG4gICAgfSxcbiAgICBvdmVybGF5OiB7XG4gICAgICBoZWlnaHQ6IGJ1dHRvbkhlaWdodCxcbiAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAoc3RhdGUua2V5Ym9hcmRGb2N1c2VkIHx8IHN0YXRlLmhvdmVyZWQpICYmICFkaXNhYmxlZCAmJiAoMCwgX2NvbG9yTWFuaXB1bGF0b3IuZmFkZSkobGFiZWxDb2xvciwgYW1vdW50KSxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICB0b3A6IDBcbiAgICB9LFxuICAgIHJpcHBsZToge1xuICAgICAgY29sb3I6IGxhYmVsQ29sb3IsXG4gICAgICBvcGFjaXR5OiAhKHByaW1hcnkgfHwgc2Vjb25kYXJ5KSA/IDAuMSA6IDAuMTZcbiAgICB9XG4gIH07XG59XG5cbnZhciBSYWlzZWRCdXR0b24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShSYWlzZWRCdXR0b24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJhaXNlZEJ1dHRvbigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBSYWlzZWRCdXR0b24pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gUmFpc2VkQnV0dG9uLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShSYWlzZWRCdXR0b24pKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdmVyZWQ6IGZhbHNlLFxuICAgICAga2V5Ym9hcmRGb2N1c2VkOiBmYWxzZSxcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxuICAgICAgaW5pdGlhbFpEZXB0aDogMCxcbiAgICAgIHpEZXB0aDogMFxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gb25seSBsaXN0ZW4gdG8gbGVmdCBjbGlja3NcbiAgICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHpEZXB0aDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aCArIDFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZURvd24pIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlVXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgekRlcHRoOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoXG4gICAgICB9KTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlVXApIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmtleWJvYXJkRm9jdXNlZCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgekRlcHRoOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoLFxuICAgICAgICAgIGhvdmVyZWQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VMZWF2ZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMuc3RhdGUua2V5Ym9hcmRGb2N1c2VkICYmICFfdGhpcy5zdGF0ZS50b3VjaGVkKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBob3ZlcmVkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VFbnRlcikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdG91Y2hlZDogdHJ1ZSxcbiAgICAgICAgekRlcHRoOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoICsgMVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblRvdWNoU3RhcnQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Ub3VjaFN0YXJ0KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVUb3VjaEVuZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0b3VjaGVkOiB0cnVlLFxuICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGhcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Ub3VjaEVuZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vblRvdWNoRW5kKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVLZXlib2FyZEZvY3VzID0gZnVuY3Rpb24gKGV2ZW50LCBrZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgIHZhciB6RGVwdGggPSBrZXlib2FyZEZvY3VzZWQgJiYgIV90aGlzLnByb3BzLmRpc2FibGVkID8gX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aCArIDEgOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHpEZXB0aDogekRlcHRoLFxuICAgICAgICBrZXlib2FyZEZvY3VzZWQ6IGtleWJvYXJkRm9jdXNlZFxuICAgICAgfSk7XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFJhaXNlZEJ1dHRvbiwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB2YXIgekRlcHRoID0gdGhpcy5wcm9wcy5kaXNhYmxlZCA/IDAgOiAxO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHpEZXB0aDogekRlcHRoLFxuICAgICAgICBpbml0aWFsWkRlcHRoOiB6RGVwdGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdmFyIHpEZXB0aCA9IG5leHRQcm9wcy5kaXNhYmxlZCA/IDAgOiAxO1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgekRlcHRoOiB6RGVwdGgsXG4gICAgICAgIGluaXRpYWxaRGVwdGg6IHpEZXB0aFxuICAgICAgfTtcblxuICAgICAgaWYgKG5leHRQcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICBuZXh0U3RhdGUuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yID0gX3Byb3BzLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICBidXR0b25TdHlsZSA9IF9wcm9wcy5idXR0b25TdHlsZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICAgIGRpc2FibGVkQmFja2dyb3VuZENvbG9yID0gX3Byb3BzLmRpc2FibGVkQmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgIGRpc2FibGVkTGFiZWxDb2xvciA9IF9wcm9wcy5kaXNhYmxlZExhYmVsQ29sb3IsXG4gICAgICAgICAgZnVsbFdpZHRoID0gX3Byb3BzLmZ1bGxXaWR0aCxcbiAgICAgICAgICBpY29uID0gX3Byb3BzLmljb24sXG4gICAgICAgICAgbGFiZWwgPSBfcHJvcHMubGFiZWwsXG4gICAgICAgICAgbGFiZWxDb2xvciA9IF9wcm9wcy5sYWJlbENvbG9yLFxuICAgICAgICAgIGxhYmVsUG9zaXRpb24gPSBfcHJvcHMubGFiZWxQb3NpdGlvbixcbiAgICAgICAgICBsYWJlbFN0eWxlID0gX3Byb3BzLmxhYmVsU3R5bGUsXG4gICAgICAgICAgb3ZlcmxheVN0eWxlID0gX3Byb3BzLm92ZXJsYXlTdHlsZSxcbiAgICAgICAgICBwcmltYXJ5ID0gX3Byb3BzLnByaW1hcnksXG4gICAgICAgICAgcmlwcGxlU3R5bGUgPSBfcHJvcHMucmlwcGxlU3R5bGUsXG4gICAgICAgICAgc2Vjb25kYXJ5ID0gX3Byb3BzLnNlY29uZGFyeSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydiYWNrZ3JvdW5kQ29sb3InLCAnYnV0dG9uU3R5bGUnLCAnY2hpbGRyZW4nLCAnY2xhc3NOYW1lJywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVkQmFja2dyb3VuZENvbG9yJywgJ2Rpc2FibGVkTGFiZWxDb2xvcicsICdmdWxsV2lkdGgnLCAnaWNvbicsICdsYWJlbCcsICdsYWJlbENvbG9yJywgJ2xhYmVsUG9zaXRpb24nLCAnbGFiZWxTdHlsZScsICdvdmVybGF5U3R5bGUnLCAncHJpbWFyeScsICdyaXBwbGVTdHlsZScsICdzZWNvbmRhcnknLCAnc3R5bGUnXSk7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCwgdGhpcy5zdGF0ZSk7XG4gICAgICB2YXIgbWVyZ2VkUmlwcGxlU3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMucmlwcGxlLCByaXBwbGVTdHlsZSk7XG5cbiAgICAgIHZhciBidXR0b25FdmVudEhhbmRsZXJzID0gZGlzYWJsZWQgPyB7fSA6IHtcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duLFxuICAgICAgICBvbk1vdXNlVXA6IHRoaXMuaGFuZGxlTW91c2VVcCxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUsXG4gICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5oYW5kbGVNb3VzZUVudGVyLFxuICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcbiAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZCxcbiAgICAgICAgb25LZXlib2FyZEZvY3VzOiB0aGlzLmhhbmRsZUtleWJvYXJkRm9jdXNcbiAgICAgIH07XG5cbiAgICAgIHZhciBsYWJlbEVsZW1lbnQgPSBsYWJlbCAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMubGFiZWwsIGxhYmVsU3R5bGUpKSwga2V5OiAnbGFiZWxFbGVtZW50JyB9LFxuICAgICAgICBsYWJlbFxuICAgICAgKTtcblxuICAgICAgdmFyIGljb25DbG9uZWQgPSBpY29uICYmICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShpY29uLCB7XG4gICAgICAgIGNvbG9yOiBpY29uLnByb3BzLmNvbG9yIHx8IHN0eWxlcy5sYWJlbC5jb2xvcixcbiAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuaWNvbiwgaWNvbi5wcm9wcy5zdHlsZSksXG4gICAgICAgIGtleTogJ2ljb25DbG9uZWQnXG4gICAgICB9KTtcblxuICAgICAgLy8gUGxhY2UgbGFiZWwgYmVmb3JlIG9yIGFmdGVyIGNoaWxkcmVuLlxuICAgICAgdmFyIGVuaGFuY2VkQnV0dG9uQ2hpbGRyZW4gPSBsYWJlbFBvc2l0aW9uID09PSAnYmVmb3JlJyA/IFtsYWJlbEVsZW1lbnQsIGljb25DbG9uZWQsIGNoaWxkcmVuXSA6IFtjaGlsZHJlbiwgaWNvbkNsb25lZCwgbGFiZWxFbGVtZW50XTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfUGFwZXIyLmRlZmF1bHQsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCBzdHlsZSksXG4gICAgICAgICAgekRlcHRoOiB0aGlzLnN0YXRlLnpEZXB0aFxuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfRW5oYW5jZWRCdXR0b24yLmRlZmF1bHQsXG4gICAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIGJ1dHRvbkV2ZW50SGFuZGxlcnMsIHtcbiAgICAgICAgICAgIHJlZjogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5idXR0b24sIGJ1dHRvblN0eWxlKSxcbiAgICAgICAgICAgIGZvY3VzUmlwcGxlQ29sb3I6IG1lcmdlZFJpcHBsZVN0eWxlcy5jb2xvcixcbiAgICAgICAgICAgIHRvdWNoUmlwcGxlQ29sb3I6IG1lcmdlZFJpcHBsZVN0eWxlcy5jb2xvcixcbiAgICAgICAgICAgIGZvY3VzUmlwcGxlT3BhY2l0eTogbWVyZ2VkUmlwcGxlU3R5bGVzLm9wYWNpdHksXG4gICAgICAgICAgICB0b3VjaFJpcHBsZU9wYWNpdHk6IG1lcmdlZFJpcHBsZVN0eWxlcy5vcGFjaXR5XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiAnb3ZlcmxheScsXG4gICAgICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMub3ZlcmxheSwgb3ZlcmxheVN0eWxlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmhhbmNlZEJ1dHRvbkNoaWxkcmVuXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gUmFpc2VkQnV0dG9uO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuUmFpc2VkQnV0dG9uLm11aU5hbWUgPSAnUmFpc2VkQnV0dG9uJztcblJhaXNlZEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgbGFiZWxQb3NpdGlvbjogJ2FmdGVyJyxcbiAgZnVsbFdpZHRoOiBmYWxzZSxcbiAgcHJpbWFyeTogZmFsc2UsXG4gIHNlY29uZGFyeTogZmFsc2Vcbn07XG5SYWlzZWRCdXR0b24uY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblJhaXNlZEJ1dHRvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBiYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgYnV0dG9uLFxuICAgKiBidXQgbm90IHRoZSBkZWZhdWx0IGRpc2FibGVkIGJhY2tncm91bmQgY29sb3JcbiAgICogKHVzZSBgZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3JgIGZvciB0aGlzKS5cbiAgICovXG4gIGJhY2tncm91bmRDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgYnV0dG9uIGVsZW1lbnQuXG4gICAqL1xuICBidXR0b25TdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgYnV0dG9uLlxuICAgKiBJZiBhIGxhYmVsIGlzIHByb3ZpZGVkIHZpYSB0aGUgYGxhYmVsYCBwcm9wLCB0aGUgdGV4dCB3aXRoaW4gdGhlIGxhYmVsXG4gICAqIHdpbGwgYmUgZGlzcGxheWVkIGluIGFkZGl0aW9uIHRvIHRoZSBjb250ZW50IHByb3ZpZGVkIGhlcmUuXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIENTUyBjbGFzcyBuYW1lIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICAqIFRoZSBlbGVtZW50IHRvIHVzZSBhcyB0aGUgY29udGFpbmVyIGZvciB0aGUgUmFpc2VkQnV0dG9uLiBFaXRoZXIgYSBzdHJpbmcgdG9cbiAgICAqIHVzZSBhIERPTSBlbGVtZW50IG9yIGEgUmVhY3RFbGVtZW50LiBUaGlzIGlzIHVzZWZ1bCBmb3Igd3JhcHBpbmcgdGhlXG4gICAgKiBSYWlzZWRCdXR0b24gaW4gYSBjdXN0b20gTGluayBjb21wb25lbnQuIElmIGEgUmVhY3RFbGVtZW50IGlzIGdpdmVuLCBlbnN1cmVcbiAgICAqIHRoYXQgaXQgcGFzc2VzIGFsbCBvZiBpdHMgZ2l2ZW4gcHJvcHMgdGhyb3VnaCB0byB0aGUgdW5kZXJseWluZyBET01cbiAgICAqIGVsZW1lbnQgYW5kIHJlbmRlcnMgaXRzIGNoaWxkcmVuIHByb3AgZm9yIHByb3BlciBpbnRlZ3JhdGlvbi5cbiAgICAqL1xuICBjb250YWluZXJFbGVtZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudF0pLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGVsZW1lbnQncyByaXBwbGUgZWZmZWN0IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlVG91Y2hSaXBwbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBiYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgYnV0dG9uXG4gICAqIHdoZW4gaXQgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZEJhY2tncm91bmRDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGJ1dHRvbidzIGxhYmVsIHdoZW4gdGhlIGJ1dHRvbiBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkTGFiZWxDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgYnV0dG9uIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxuICAgKi9cbiAgZnVsbFdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgVVJMIHRvIGxpbmsgdG8gd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICBocmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIEFuIGljb24gdG8gYmUgZGlzcGxheWVkIHdpdGhpbiB0aGUgYnV0dG9uLlxuICAgKi9cbiAgaWNvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIGxhYmVsIHRvIGJlIGRpc3BsYXllZCB3aXRoaW4gdGhlIGJ1dHRvbi5cbiAgICogSWYgY29udGVudCBpcyBwcm92aWRlZCB2aWEgdGhlIGBjaGlsZHJlbmAgcHJvcCwgdGhhdCBjb250ZW50IHdpbGwgYmVcbiAgICogZGlzcGxheWVkIGluIGFkZGl0aW9uIHRvIHRoZSBsYWJlbCBwcm92aWRlZCBoZXJlLlxuICAgKi9cbiAgbGFiZWw6IHZhbGlkYXRlTGFiZWwsXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGJ1dHRvbidzIGxhYmVsLlxuICAgKi9cbiAgbGFiZWxDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIGJ1dHRvbidzIGxhYmVsIHJlbGF0aXZlIHRvIHRoZSBidXR0b24ncyBgY2hpbGRyZW5gLlxuICAgKi9cbiAgbGFiZWxQb3NpdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ2JlZm9yZScsICdhZnRlciddKSxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBidXR0b24ncyBsYWJlbCBlbGVtZW50LlxuICAgKi9cbiAgbGFiZWxTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VEb3duOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VFbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlTGVhdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZVVwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uVG91Y2hFbmQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Ub3VjaFN0YXJ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIHRoZSBidXR0b24gaXMgdG91Y2gtdGFwcGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBidXR0b24uXG4gICAqL1xuICBvblRvdWNoVGFwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lIHN0eWxlIG9mIHRoZSBidXR0b24gb3ZlcmxheS5cbiAgICovXG4gIG92ZXJsYXlTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgYnV0dG9uIHdpbGwgdXNlIHRoZSB0aGVtZSdzIHByaW1hcnkgY29sb3IuXG4gICAqL1xuICBwcmltYXJ5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lIHN0eWxlIG9mIHRoZSByaXBwbGUgZWxlbWVudC5cbiAgICovXG4gIHJpcHBsZVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCB1c2UgdGhlIHRoZW1lJ3Mgc2Vjb25kYXJ5IGNvbG9yLlxuICAgKiBJZiBib3RoIGBzZWNvbmRhcnlgIGFuZCBgcHJpbWFyeWAgYXJlIHRydWUsIHRoZSBidXR0b24gd2lsbCB1c2VcbiAgICogdGhlIHRoZW1lJ3MgcHJpbWFyeSBjb2xvci5cbiAgICovXG4gIHNlY29uZGFyeTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gUmFpc2VkQnV0dG9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbi9SYWlzZWRCdXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDY1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9