webpackHotUpdate(0,{

/***/ 676:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tableRowColumn = context.muiTheme.tableRowColumn;


  var styles = {
    root: {
      paddingLeft: tableRowColumn.spacing,
      paddingRight: tableRowColumn.spacing,
      height: tableRowColumn.height,
      textAlign: 'left',
      fontSize: 13,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    }
  };

  if (_react2.default.Children.count(props.children) === 1 && !isNaN(props.children)) {
    styles.textAlign = 'right';
  }

  return styles;
}

var TableRowColumn = function (_Component) {
  (0, _inherits3.default)(TableRowColumn, _Component);

  function TableRowColumn() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableRowColumn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TableRowColumn.__proto__ || (0, _getPrototypeOf2.default)(TableRowColumn)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.onClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event, _this.props.columnNumber);
      }
    }, _this.onMouseEnter = function (event) {
      if (_this.props.hoverable) {
        _this.setState({ hovered: true });
        if (_this.props.onHover) {
          _this.props.onHover(event, _this.props.columnNumber);
        }
      }
    }, _this.onMouseLeave = function (event) {
      if (_this.props.hoverable) {
        _this.setState({ hovered: false });
        if (_this.props.onHoverExit) {
          _this.props.onHoverExit(event, _this.props.columnNumber);
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TableRowColumn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          columnNumber = _props.columnNumber,
          hoverable = _props.hoverable,
          onClick = _props.onClick,
          onHover = _props.onHover,
          onHoverExit = _props.onHoverExit,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'columnNumber', 'hoverable', 'onClick', 'onHover', 'onHoverExit', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var handlers = {
        onClick: this.onClick,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave
      };

      return _react2.default.createElement(
        'td',
        (0, _extends3.default)({
          className: className,
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
        }, handlers, other),
        children
      );
    }
  }]);
  return TableRowColumn;
}(_react.Component);

TableRowColumn.defaultProps = {
  hoverable: false
};
TableRowColumn.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
TableRowColumn.propTypes =  true ? {
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   * Number to identify the header row. This property
   * is automatically populated when used with TableHeader.
   */
  columnNumber: _propTypes2.default.number,
  /**
   * @ignore
   * If true, this column responds to hover events.
   */
  hoverable: _propTypes2.default.bool,
  /** @ignore */
  onClick: _propTypes2.default.func,
  /** @ignore */
  onHover: _propTypes2.default.func,
  /**
   * @ignore
   * Callback function for hover exit event.
   */
  onHoverExit: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = TableRowColumn;

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Checkbox = __webpack_require__(692);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Checkbox2.default;

/***/ }),

/***/ 678:
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

var _Tooltip = __webpack_require__(623);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tableHeaderColumn = context.muiTheme.tableHeaderColumn;


  return {
    root: {
      fontWeight: 'normal',
      fontSize: 12,
      paddingLeft: tableHeaderColumn.spacing,
      paddingRight: tableHeaderColumn.spacing,
      height: tableHeaderColumn.height,
      textAlign: 'left',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      color: tableHeaderColumn.textColor,
      position: 'relative'
    },
    tooltip: {
      boxSizing: 'border-box',
      marginTop: tableHeaderColumn.height / 2
    }
  };
}

var TableHeaderColumn = function (_Component) {
  (0, _inherits3.default)(TableHeaderColumn, _Component);

  function TableHeaderColumn() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableHeaderColumn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TableHeaderColumn.__proto__ || (0, _getPrototypeOf2.default)(TableHeaderColumn)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.onMouseEnter = function () {
      if (_this.props.tooltip !== undefined) {
        _this.setState({ hovered: true });
      }
    }, _this.onMouseLeave = function () {
      if (_this.props.tooltip !== undefined) {
        _this.setState({ hovered: false });
      }
    }, _this.onClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event, _this.props.columnNumber);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TableHeaderColumn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          columnNumber = _props.columnNumber,
          hoverable = _props.hoverable,
          onClick = _props.onClick,
          onHover = _props.onHover,
          onHoverExit = _props.onHoverExit,
          style = _props.style,
          tooltip = _props.tooltip,
          tooltipStyle = _props.tooltipStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'columnNumber', 'hoverable', 'onClick', 'onHover', 'onHoverExit', 'style', 'tooltip', 'tooltipStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var handlers = {
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onClick: this.onClick
      };

      var tooltipNode = void 0;

      if (tooltip !== undefined) {
        tooltipNode = _react2.default.createElement(_Tooltip2.default, {
          label: tooltip,
          show: this.state.hovered,
          style: (0, _simpleAssign2.default)(styles.tooltip, tooltipStyle)
        });
      }

      return _react2.default.createElement(
        'th',
        (0, _extends3.default)({
          className: className,
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
        }, handlers, other),
        tooltipNode,
        children
      );
    }
  }]);
  return TableHeaderColumn;
}(_react.Component);

TableHeaderColumn.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
TableHeaderColumn.propTypes =  true ? {
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Number to identify the header row. This property
   * is automatically populated when used with TableHeader.
   */
  columnNumber: _propTypes2.default.number,
  /**
   * @ignore
   * Not used here but we need to remove it from the root element.
   */
  hoverable: _propTypes2.default.bool,
  /** @ignore */
  onClick: _propTypes2.default.func,
  /**
   * @ignore
   * Not used here but we need to remove it from the root element.
   */
  onHover: _propTypes2.default.func,
  /**
   * @ignore
   * Not used here but we need to remove it from the root element.
   */
  onHoverExit: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The string to supply to the tooltip. If not
   * string is supplied no tooltip will be shown.
   */
  tooltip: _propTypes2.default.string,
  /**
   * Additional styling that can be applied to the tooltip.
   */
  tooltipStyle: _propTypes2.default.object
} : {};
exports.default = TableHeaderColumn;

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _SelectField = __webpack_require__(682);

var _SelectField2 = _interopRequireDefault(_SelectField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SelectField2.default;

/***/ }),

/***/ 682:
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

var _TextField = __webpack_require__(580);

var _TextField2 = _interopRequireDefault(_TextField);

var _DropDownMenu = __webpack_require__(683);

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props) {
  return {
    label: {
      paddingLeft: 0,
      top: props.floatingLabelText ? 6 : -4
    },
    icon: {
      right: 0,
      top: props.floatingLabelText ? 8 : 0
    },
    hideDropDownUnderline: {
      borderTop: 'none'
    },
    dropDownMenu: {
      display: 'block'
    }
  };
}

var SelectField = function (_Component) {
  (0, _inherits3.default)(SelectField, _Component);

  function SelectField() {
    (0, _classCallCheck3.default)(this, SelectField);
    return (0, _possibleConstructorReturn3.default)(this, (SelectField.__proto__ || (0, _getPrototypeOf2.default)(SelectField)).apply(this, arguments));
  }

  (0, _createClass3.default)(SelectField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          autoWidth = _props.autoWidth,
          multiple = _props.multiple,
          children = _props.children,
          style = _props.style,
          labelStyle = _props.labelStyle,
          iconStyle = _props.iconStyle,
          id = _props.id,
          underlineDisabledStyle = _props.underlineDisabledStyle,
          underlineFocusStyle = _props.underlineFocusStyle,
          menuItemStyle = _props.menuItemStyle,
          selectedMenuItemStyle = _props.selectedMenuItemStyle,
          underlineStyle = _props.underlineStyle,
          dropDownMenuProps = _props.dropDownMenuProps,
          errorStyle = _props.errorStyle,
          disabled = _props.disabled,
          floatingLabelFixed = _props.floatingLabelFixed,
          floatingLabelText = _props.floatingLabelText,
          floatingLabelStyle = _props.floatingLabelStyle,
          hintStyle = _props.hintStyle,
          hintText = _props.hintText,
          fullWidth = _props.fullWidth,
          errorText = _props.errorText,
          listStyle = _props.listStyle,
          maxHeight = _props.maxHeight,
          menuStyle = _props.menuStyle,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          onChange = _props.onChange,
          selectionRenderer = _props.selectionRenderer,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['autoWidth', 'multiple', 'children', 'style', 'labelStyle', 'iconStyle', 'id', 'underlineDisabledStyle', 'underlineFocusStyle', 'menuItemStyle', 'selectedMenuItemStyle', 'underlineStyle', 'dropDownMenuProps', 'errorStyle', 'disabled', 'floatingLabelFixed', 'floatingLabelText', 'floatingLabelStyle', 'hintStyle', 'hintText', 'fullWidth', 'errorText', 'listStyle', 'maxHeight', 'menuStyle', 'onFocus', 'onBlur', 'onChange', 'selectionRenderer', 'value']);


      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        _TextField2.default,
        (0, _extends3.default)({}, other, {
          style: style,
          disabled: disabled,
          floatingLabelFixed: floatingLabelFixed,
          floatingLabelText: floatingLabelText,
          floatingLabelStyle: floatingLabelStyle,
          hintStyle: hintStyle,
          hintText: !hintText && !floatingLabelText ? ' ' : hintText,
          fullWidth: fullWidth,
          errorText: errorText,
          underlineStyle: underlineStyle,
          errorStyle: errorStyle,
          onFocus: onFocus,
          onBlur: onBlur,
          id: id,
          underlineDisabledStyle: underlineDisabledStyle,
          underlineFocusStyle: underlineFocusStyle
        }),
        _react2.default.createElement(
          _DropDownMenu2.default,
          (0, _extends3.default)({
            disabled: disabled,
            style: (0, _simpleAssign2.default)(styles.dropDownMenu, menuStyle),
            labelStyle: (0, _simpleAssign2.default)(styles.label, labelStyle),
            iconStyle: (0, _simpleAssign2.default)(styles.icon, iconStyle),
            menuItemStyle: menuItemStyle,
            selectedMenuItemStyle: selectedMenuItemStyle,
            underlineStyle: styles.hideDropDownUnderline,
            listStyle: listStyle,
            autoWidth: autoWidth,
            value: value,
            onChange: onChange,
            maxHeight: maxHeight,
            multiple: multiple,
            selectionRenderer: selectionRenderer
          }, dropDownMenuProps),
          children
        )
      );
    }
  }]);
  return SelectField;
}(_react.Component);

SelectField.defaultProps = {
  autoWidth: false,
  disabled: false,
  fullWidth: false,
  multiple: false
};
SelectField.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
SelectField.propTypes =  true ? {
  /**
   * If true, the width will automatically be set according to the
   * items inside the menu.
   * To control the width in CSS instead, leave this prop set to `false`.
   */
  autoWidth: _propTypes2.default.bool,
  /**
   * The `MenuItem` elements to populate the select field with.
   * If the menu items have a `label` prop, that value will
   * represent the selected menu item in the rendered select field.
   */
  children: _propTypes2.default.node,
  /**
   * If true, the select field will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Object that can handle and override any property of component DropDownMenu.
   */
  dropDownMenuProps: _propTypes2.default.object,
  /**
   * Override the inline-styles of the error element.
   */
  errorStyle: _propTypes2.default.object,
  /**
   * The error content to display.
   */
  errorText: _propTypes2.default.node,
  /**
   * If true, the floating label will float even when no value is selected.
   */
  floatingLabelFixed: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the floating label.
   */
  floatingLabelStyle: _propTypes2.default.object,
  /**
   * The content of the floating label.
   */
  floatingLabelText: _propTypes2.default.node,
  /**
   * If true, the select field will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the hint element.
   */
  hintStyle: _propTypes2.default.object,
  /**
   * The hint content to display.
   */
  hintText: _propTypes2.default.node,
  /**
   * Override the inline-styles of the icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * The id prop for the text field.
   */
  id: _propTypes2.default.string,
  /**
   * Override the label style when the select field is inactive.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underlying `List` element.
   */
  listStyle: _propTypes2.default.object,
  /**
   * Override the default max-height of the underlying `DropDownMenu` element.
   */
  maxHeight: _propTypes2.default.number,
  /**
   * Override the inline-styles of menu items.
   */
  menuItemStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underlying `DropDownMenu` element.
   */
  menuStyle: _propTypes2.default.object,
  /**
   * If true, `value` must be an array and the menu will support
   * multiple selections.
   */
  multiple: _propTypes2.default.bool,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event TouchTap event targeting the menu item
   * that was selected.
   * @param {number} key The index of the selected menu item, or undefined
   * if `multiple` is true.
   * @param {any} payload If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   */
  onChange: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /**
   * Override the inline-styles of selected menu items.
   */
  selectedMenuItemStyle: _propTypes2.default.object,
  /**
   * Customize the rendering of the selected item.
   *
   * @param {any} value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   * @param {any} menuItem The selected `MenuItem`.
   * If `multiple` is true, this will be an array with the `MenuItem`s matching the `value`s parameter.
   */
  selectionRenderer: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underline element when the select
   * field is disabled.
   */
  underlineDisabledStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underline element when the select field
   * is focused.
   */
  underlineFocusStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underline element.
   */
  underlineStyle: _propTypes2.default.object,
  /**
   * If `multiple` is true, an array of the `value`s of the selected
   * menu items. Otherwise, the `value` of the selected menu item.
   * If provided, the menu will be a controlled component.
   */
  value: _propTypes2.default.any
} : {};
exports.default = SelectField;

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuItem = exports.DropDownMenu = undefined;

var _DropDownMenu2 = __webpack_require__(684);

var _DropDownMenu3 = _interopRequireDefault(_DropDownMenu2);

var _MenuItem2 = __webpack_require__(605);

var _MenuItem3 = _interopRequireDefault(_MenuItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DropDownMenu = _DropDownMenu3.default;
exports.MenuItem = _MenuItem3.default;
exports.default = _DropDownMenu3.default;

/***/ }),

/***/ 684:
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

var _reactDom = __webpack_require__(199);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _transitions = __webpack_require__(545);

var _transitions2 = _interopRequireDefault(_transitions);

var _arrowDropDown = __webpack_require__(685);

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _Menu = __webpack_require__(629);

var _Menu2 = _interopRequireDefault(_Menu);

var _ClearFix = __webpack_require__(686);

var _ClearFix2 = _interopRequireDefault(_ClearFix);

var _Popover = __webpack_require__(606);

var _Popover2 = _interopRequireDefault(_Popover);

var _PopoverAnimationVertical = __webpack_require__(688);

var _PopoverAnimationVertical2 = _interopRequireDefault(_PopoverAnimationVertical);

var _keycode = __webpack_require__(557);

var _keycode2 = _interopRequireDefault(_keycode);

var _events = __webpack_require__(563);

var _events2 = _interopRequireDefault(_events);

var _IconButton = __webpack_require__(620);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _propTypes3 = __webpack_require__(546);

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var disabled = props.disabled;

  var spacing = context.muiTheme.baseTheme.spacing;
  var palette = context.muiTheme.baseTheme.palette;
  var accentColor = context.muiTheme.dropDownMenu.accentColor;
  return {
    control: {
      cursor: disabled ? 'not-allowed' : 'pointer',
      height: '100%',
      position: 'relative',
      width: '100%'
    },
    icon: {
      fill: accentColor,
      position: 'absolute',
      right: spacing.desktopGutterLess,
      top: (spacing.iconSize - 24) / 2 + spacing.desktopGutterMini / 2
    },
    iconChildren: {
      fill: 'inherit'
    },
    label: {
      color: disabled ? palette.disabledColor : palette.textColor,
      height: spacing.desktopToolbarHeight + 'px',
      lineHeight: spacing.desktopToolbarHeight + 'px',
      overflow: 'hidden',
      opacity: 1,
      position: 'relative',
      paddingLeft: spacing.desktopGutter,
      paddingRight: spacing.iconSize * 2 + spacing.desktopGutterMini,
      textOverflow: 'ellipsis',
      top: 0,
      whiteSpace: 'nowrap'
    },
    labelWhenOpen: {
      opacity: 0,
      top: spacing.desktopToolbarHeight / 8
    },
    root: {
      display: 'inline-block',
      fontSize: spacing.desktopDropDownMenuFontSize,
      height: spacing.desktopSubheaderHeight,
      fontFamily: context.muiTheme.baseTheme.fontFamily,
      outline: 'none',
      position: 'relative',
      transition: _transitions2.default.easeOut()
    },
    rootWhenOpen: {
      opacity: 1
    },
    underline: {
      borderTop: 'solid 1px ' + accentColor,
      bottom: 1,
      left: 0,
      margin: '-1px ' + spacing.desktopGutter + 'px',
      right: 0,
      position: 'absolute'
    }
  };
}

var DropDownMenu = function (_Component) {
  (0, _inherits3.default)(DropDownMenu, _Component);

  function DropDownMenu() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DropDownMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DropDownMenu.__proto__ || (0, _getPrototypeOf2.default)(DropDownMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.rootNode = undefined, _this.arrowNode = undefined, _this.handleTouchTapControl = function (event) {
      event.preventDefault();
      if (!_this.props.disabled) {
        _this.setState({
          open: !_this.state.open,
          anchorEl: _this.rootNode
        });
      }
    }, _this.handleRequestCloseMenu = function () {
      _this.close(false);
    }, _this.handleEscKeyDownMenu = function () {
      _this.close(true);
    }, _this.handleKeyDown = function (event) {
      switch ((0, _keycode2.default)(event)) {
        case 'up':
        case 'down':
        case 'space':
        case 'enter':
          event.preventDefault();
          _this.setState({
            open: true,
            anchorEl: _this.rootNode
          });
          break;
      }
    }, _this.handleItemTouchTap = function (event, child, index) {
      if (_this.props.multiple) {
        if (!_this.state.open) {
          _this.setState({ open: true });
        }
      } else {
        event.persist();
        _this.setState({
          open: false
        }, function () {
          if (_this.props.onChange) {
            _this.props.onChange(event, index, child.props.value);
          }

          _this.close(_events2.default.isKeyboard(event));
        });
      }
    }, _this.handleChange = function (event, value) {
      if (_this.props.multiple && _this.props.onChange) {
        _this.props.onChange(event, undefined, value);
      }
    }, _this.close = function (isKeyboard) {
      _this.setState({
        open: false
      }, function () {
        if (_this.props.onClose) {
          _this.props.onClose();
        }

        if (isKeyboard) {
          var dropArrow = _this.arrowNode;
          var dropNode = _reactDom2.default.findDOMNode(dropArrow);
          dropNode.focus();
          dropArrow.setKeyboardFocus(true);
        }
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // The nested styles for drop-down-menu are modified by toolbar and possibly
  // other user components, so it will give full access to its js styles rather
  // than just the parent.


  (0, _createClass3.default)(DropDownMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.autoWidth) {
        this.setWidth();
      }
      if (this.props.openImmediately) {
        // TODO: Temporary fix to make openImmediately work with popover.
        /* eslint-disable react/no-did-mount-set-state */
        setTimeout(function () {
          return _this2.setState({
            open: true,
            anchorEl: _this2.rootNode
          });
        }, 0);
        /* eslint-enable react/no-did-mount-set-state */
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      if (this.props.autoWidth) {
        this.setWidth();
      }
    }
  }, {
    key: 'getInputNode',


    /**
     * This method is deprecated but still here because the TextField
     * need it in order to work. TODO: That will be addressed later.
     */
    value: function getInputNode() {
      var _this3 = this;

      var rootNode = this.rootNode;

      rootNode.focus = function () {
        if (!_this3.props.disabled) {
          _this3.setState({
            open: !_this3.state.open,
            anchorEl: _this3.rootNode
          });
        }
      };

      return rootNode;
    }
  }, {
    key: 'setWidth',
    value: function setWidth() {
      var el = this.rootNode;
      if (!this.props.style || !this.props.style.hasOwnProperty('width')) {
        el.style.width = 'auto';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          animated = _props.animated,
          animation = _props.animation,
          autoWidth = _props.autoWidth,
          multiple = _props.multiple,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          iconStyle = _props.iconStyle,
          labelStyle = _props.labelStyle,
          listStyle = _props.listStyle,
          maxHeight = _props.maxHeight,
          menuStyleProp = _props.menuStyle,
          selectionRenderer = _props.selectionRenderer,
          onClose = _props.onClose,
          openImmediately = _props.openImmediately,
          menuItemStyle = _props.menuItemStyle,
          selectedMenuItemStyle = _props.selectedMenuItemStyle,
          style = _props.style,
          underlineStyle = _props.underlineStyle,
          value = _props.value,
          iconButton = _props.iconButton,
          anchorOrigin = _props.anchorOrigin,
          targetOrigin = _props.targetOrigin,
          other = (0, _objectWithoutProperties3.default)(_props, ['animated', 'animation', 'autoWidth', 'multiple', 'children', 'className', 'disabled', 'iconStyle', 'labelStyle', 'listStyle', 'maxHeight', 'menuStyle', 'selectionRenderer', 'onClose', 'openImmediately', 'menuItemStyle', 'selectedMenuItemStyle', 'style', 'underlineStyle', 'value', 'iconButton', 'anchorOrigin', 'targetOrigin']);
      var _state = this.state,
          anchorEl = _state.anchorEl,
          open = _state.open;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var displayValue = '';
      if (!multiple) {
        _react2.default.Children.forEach(children, function (child) {
          if (child && value === child.props.value) {
            if (selectionRenderer) {
              displayValue = selectionRenderer(value, child);
            } else {
              // This will need to be improved (in case primaryText is a node)
              displayValue = child.props.label || child.props.primaryText;
            }
          }
        });
      } else {
        var values = [];
        var selectionRendererChildren = [];
        _react2.default.Children.forEach(children, function (child) {
          if (child && value && value.indexOf(child.props.value) > -1) {
            if (selectionRenderer) {
              values.push(child.props.value);
              selectionRendererChildren.push(child);
            } else {
              values.push(child.props.label || child.props.primaryText);
            }
          }
        });

        displayValue = [];
        if (selectionRenderer) {
          displayValue = selectionRenderer(values, selectionRendererChildren);
        } else {
          displayValue = values.join(', ');
        }
      }

      var menuStyle = void 0;
      if (anchorEl && !autoWidth) {
        menuStyle = (0, _simpleAssign2.default)({
          width: anchorEl.clientWidth
        }, menuStyleProp);
      } else {
        menuStyle = menuStyleProp;
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, {
          ref: function ref(node) {
            _this4.rootNode = node;
          },
          className: className,
          style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, open && styles.rootWhenOpen, style))
        }),
        _react2.default.createElement(
          _ClearFix2.default,
          { style: styles.control, onTouchTap: this.handleTouchTapControl },
          _react2.default.createElement(
            'div',
            { style: prepareStyles((0, _simpleAssign2.default)({}, styles.label, open && styles.labelWhenOpen, labelStyle)) },
            displayValue
          ),
          _react2.default.createElement(
            _IconButton2.default,
            {
              disabled: disabled,
              onKeyDown: this.handleKeyDown,
              ref: function ref(node) {
                _this4.arrowNode = node;
              },
              style: (0, _simpleAssign2.default)({}, styles.icon, iconStyle),
              iconStyle: styles.iconChildren
            },
            iconButton
          ),
          _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, styles.underline, underlineStyle)) })
        ),
        _react2.default.createElement(
          _Popover2.default,
          {
            anchorOrigin: anchorOrigin,
            targetOrigin: targetOrigin,
            anchorEl: anchorEl,
            animation: animation || _PopoverAnimationVertical2.default,
            open: open,
            animated: animated,
            onRequestClose: this.handleRequestCloseMenu
          },
          _react2.default.createElement(
            _Menu2.default,
            {
              multiple: multiple,
              maxHeight: maxHeight,
              desktop: true,
              value: value,
              onEscKeyDown: this.handleEscKeyDownMenu,
              style: menuStyle,
              listStyle: listStyle,
              onItemTouchTap: this.handleItemTouchTap,
              onChange: this.handleChange,
              menuItemStyle: menuItemStyle,
              selectedMenuItemStyle: selectedMenuItemStyle,
              autoWidth: autoWidth,
              width: !autoWidth && menuStyle ? menuStyle.width : null
            },
            children
          )
        )
      );
    }
  }]);
  return DropDownMenu;
}(_react.Component);

DropDownMenu.muiName = 'DropDownMenu';
DropDownMenu.defaultProps = {
  animated: true,
  autoWidth: true,
  disabled: false,
  iconButton: _react2.default.createElement(_arrowDropDown2.default, null),
  openImmediately: false,
  maxHeight: 500,
  multiple: false,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  }
};
DropDownMenu.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
DropDownMenu.propTypes =  true ? {
  /**
   * This is the point on the anchor that the popover's
   * `targetOrigin` will attach to.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * If true, the popover will apply transitions when
   * it gets added to the DOM.
   */
  animated: _propTypes2.default.bool,
  /**
   * Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * The width will automatically be set according to the items inside the menu.
   * To control this width in css instead, set this prop to `false`.
   */
  autoWidth: _propTypes2.default.bool,
  /**
   * The `MenuItem`s to populate the `Menu` with. If the `MenuItems` have the
   * prop `label` that value will be used to render the representation of that
   * item within the field.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Disables the menu.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Overrides default `SvgIcon` dropdown arrow component.
   */
  iconButton: _propTypes2.default.node,
  /**
   * Overrides the styles of icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Overrides the styles of label when the `DropDownMenu` is inactive.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * The style object to use to override underlying list style.
   */
  listStyle: _propTypes2.default.object,
  /**
   * The maximum height of the `Menu` when it is displayed.
   */
  maxHeight: _propTypes2.default.number,
  /**
   * Override the inline-styles of menu items.
   */
  menuItemStyle: _propTypes2.default.object,
  /**
   * Overrides the styles of `Menu` when the `DropDownMenu` is displayed.
   */
  menuStyle: _propTypes2.default.object,
  /**
   * If true, `value` must be an array and the menu will support
   * multiple selections.
   */
  multiple: _propTypes2.default.bool,
  /**
   * Callback function fired when a menu item is clicked, other than the one currently selected.
   *
   * @param {object} event TouchTap event targeting the menu item that was clicked.
   * @param {number} key The index of the clicked menu item in the `children` collection.
   * @param {any} value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback function fired when the menu is closed.
   */
  onClose: _propTypes2.default.func,
  /**
   * Set to true to have the `DropDownMenu` automatically open on mount.
   */
  openImmediately: _propTypes2.default.bool,
  /**
   * Override the inline-styles of selected menu items.
   */
  selectedMenuItemStyle: _propTypes2.default.object,
  /**
   * Callback function fired when a menu item is clicked, other than the one currently selected.
   *
   * @param {any} value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   * @param {any} menuItem The selected `MenuItem`.
   * If `multiple` is true, this will be an array with the `MenuItem`s matching the `value`s parameter.
   */
  selectionRenderer: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * This is the point on the popover which will attach to
   * the anchor's origin.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * Overrides the inline-styles of the underline.
   */
  underlineStyle: _propTypes2.default.object,
  /**
   * If `multiple` is true, an array of the `value`s of the selected
   * menu items. Otherwise, the `value` of the selected menu item.
   * If provided, the menu will be a controlled component.
   */
  value: _propTypes2.default.any
} : {};
exports.default = DropDownMenu;

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(554);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(555);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationArrowDropDown = function NavigationArrowDropDown(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7 10l5 5 5-5z' })
  );
};
NavigationArrowDropDown = (0, _pure2.default)(NavigationArrowDropDown);
NavigationArrowDropDown.displayName = 'NavigationArrowDropDown';
NavigationArrowDropDown.muiName = 'SvgIcon';

exports.default = NavigationArrowDropDown;

/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(111);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(544);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(94);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BeforeAfterWrapper = __webpack_require__(687);

var _BeforeAfterWrapper2 = _interopRequireDefault(_BeforeAfterWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  before: {
    content: "' '",
    display: 'table'
  },
  after: {
    content: "' '",
    clear: 'both',
    display: 'table'
  }
};

var ClearFix = function ClearFix(_ref) {
  var style = _ref.style,
      children = _ref.children,
      other = (0, _objectWithoutProperties3.default)(_ref, ['style', 'children']);
  return _react2.default.createElement(
    _BeforeAfterWrapper2.default,
    (0, _extends3.default)({}, other, {
      beforeStyle: styles.before,
      afterStyle: styles.after,
      style: style
    }),
    children
  );
};

ClearFix.muiName = 'ClearFix';

ClearFix.propTypes =  true ? {
  children: _propTypes2.default.node,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};

exports.default = ClearFix;

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  BeforeAfterWrapper
 *    An alternative for the ::before and ::after css pseudo-elements for
 *    components whose styles are defined in javascript instead of css.
 *
 *  Usage: For the element that we want to apply before and after elements to,
 *    wrap its children with BeforeAfterWrapper. For example:
 *
 *                                            <Paper>
 *  <Paper>                                     <div> // See notice
 *    <BeforeAfterWrapper>        renders         <div/> // before element
 *      [children of paper]       ------>         [children of paper]
 *    </BeforeAfterWrapper>                       <div/> // after element
 *  </Paper>                                    </div>
 *                                            </Paper>
 *
 *  Notice: Notice that this div bundles together our elements. If the element
 *    that we want to apply before and after elements is a HTML tag (i.e. a
 *    div, p, or button tag), we can avoid this extra nesting by passing using
 *    the BeforeAfterWrapper in place of said tag like so:
 *
 *  <p>
 *    <BeforeAfterWrapper>   do this instead   <BeforeAfterWrapper elementType='p'>
 *      [children of p]          ------>         [children of p]
 *    </BeforeAfterWrapper>                    </BeforeAfterWrapper>
 *  </p>
 *
 *  BeforeAfterWrapper features spread functionality. This means that we can
 *  pass HTML tag properties directly into the BeforeAfterWrapper tag.
 *
 *  When using BeforeAfterWrapper, ensure that the parent of the beforeElement
 *  and afterElement have a defined style position.
 */

var styles = {
  box: {
    boxSizing: 'border-box'
  }
};

var BeforeAfterWrapper = function (_Component) {
  (0, _inherits3.default)(BeforeAfterWrapper, _Component);

  function BeforeAfterWrapper() {
    (0, _classCallCheck3.default)(this, BeforeAfterWrapper);
    return (0, _possibleConstructorReturn3.default)(this, (BeforeAfterWrapper.__proto__ || (0, _getPrototypeOf2.default)(BeforeAfterWrapper)).apply(this, arguments));
  }

  (0, _createClass3.default)(BeforeAfterWrapper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          beforeStyle = _props.beforeStyle,
          afterStyle = _props.afterStyle,
          beforeElementType = _props.beforeElementType,
          afterElementType = _props.afterElementType,
          elementType = _props.elementType,
          other = (0, _objectWithoutProperties3.default)(_props, ['beforeStyle', 'afterStyle', 'beforeElementType', 'afterElementType', 'elementType']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var beforeElement = void 0;
      var afterElement = void 0;

      if (beforeStyle) {
        beforeElement = _react2.default.createElement(this.props.beforeElementType, {
          style: prepareStyles((0, _simpleAssign2.default)({}, styles.box, beforeStyle)),
          key: '::before'
        });
      }

      if (afterStyle) {
        afterElement = _react2.default.createElement(this.props.afterElementType, {
          style: prepareStyles((0, _simpleAssign2.default)({}, styles.box, afterStyle)),
          key: '::after'
        });
      }

      var children = [beforeElement, this.props.children, afterElement];

      var props = other;
      props.style = prepareStyles((0, _simpleAssign2.default)({}, this.props.style));

      return _react2.default.createElement(this.props.elementType, props, children);
    }
  }]);
  return BeforeAfterWrapper;
}(_react.Component);

BeforeAfterWrapper.defaultProps = {
  beforeElementType: 'div',
  afterElementType: 'div',
  elementType: 'div'
};
BeforeAfterWrapper.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
BeforeAfterWrapper.propTypes =  true ? {
  afterElementType: _propTypes2.default.string,
  afterStyle: _propTypes2.default.object,
  beforeElementType: _propTypes2.default.string,
  beforeStyle: _propTypes2.default.object,
  children: _propTypes2.default.node,
  elementType: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = BeforeAfterWrapper;

/***/ }),

/***/ 688:
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

var _simpleAssign = __webpack_require__(543);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(94);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paper = __webpack_require__(551);

var _Paper2 = _interopRequireDefault(_Paper);

var _transitions = __webpack_require__(545);

var _transitions2 = _interopRequireDefault(_transitions);

var _propTypes3 = __webpack_require__(546);

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var targetOrigin = props.targetOrigin;
  var open = state.open;
  var muiTheme = context.muiTheme;

  var horizontal = targetOrigin.horizontal.replace('middle', 'vertical');

  return {
    root: {
      position: 'fixed',
      zIndex: muiTheme.zIndex.popover,
      opacity: open ? 1 : 0,
      transform: open ? 'scaleY(1)' : 'scaleY(0)',
      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
      transition: _transitions2.default.easeOut('450ms', ['transform', 'opacity']),
      maxHeight: '100%'
    }
  };
}

var PopoverAnimationVertical = function (_Component) {
  (0, _inherits3.default)(PopoverAnimationVertical, _Component);

  function PopoverAnimationVertical() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PopoverAnimationVertical);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PopoverAnimationVertical.__proto__ || (0, _getPrototypeOf2.default)(PopoverAnimationVertical)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PopoverAnimationVertical, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ open: true }); // eslint-disable-line react/no-did-mount-set-state
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        open: nextProps.open
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          zDepth = _props.zDepth;


      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement(
        _Paper2.default,
        {
          style: (0, _simpleAssign2.default)(styles.root, style),
          zDepth: zDepth,
          className: className
        },
        this.props.children
      );
    }
  }]);
  return PopoverAnimationVertical;
}(_react.Component);

PopoverAnimationVertical.defaultProps = {
  style: {},
  zDepth: 1
};
PopoverAnimationVertical.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
PopoverAnimationVertical.propTypes =  true ? {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  open: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  targetOrigin: _propTypes4.default.origin.isRequired,
  zDepth: _propTypes4.default.zDepth
} : {};
exports.default = PopoverAnimationVertical;

/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TableRowColumn = exports.TableRow = exports.TableHeaderColumn = exports.TableHeader = exports.TableFooter = exports.TableBody = exports.Table = undefined;

var _Table2 = __webpack_require__(690);

var _Table3 = _interopRequireDefault(_Table2);

var _TableBody2 = __webpack_require__(691);

var _TableBody3 = _interopRequireDefault(_TableBody2);

var _TableFooter2 = __webpack_require__(696);

var _TableFooter3 = _interopRequireDefault(_TableFooter2);

var _TableHeader2 = __webpack_require__(697);

var _TableHeader3 = _interopRequireDefault(_TableHeader2);

var _TableHeaderColumn2 = __webpack_require__(678);

var _TableHeaderColumn3 = _interopRequireDefault(_TableHeaderColumn2);

var _TableRow2 = __webpack_require__(698);

var _TableRow3 = _interopRequireDefault(_TableRow2);

var _TableRowColumn2 = __webpack_require__(676);

var _TableRowColumn3 = _interopRequireDefault(_TableRowColumn2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Table = _Table3.default;
exports.TableBody = _TableBody3.default;
exports.TableFooter = _TableFooter3.default;
exports.TableHeader = _TableHeader3.default;
exports.TableHeaderColumn = _TableHeaderColumn3.default;
exports.TableRow = _TableRow3.default;
exports.TableRowColumn = _TableRowColumn3.default;
exports.default = _Table3.default;

/***/ }),

/***/ 690:
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

var _simpleAssign = __webpack_require__(543);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(94);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(548);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      table = _context$muiTheme.table;


  return {
    root: {
      backgroundColor: table.backgroundColor,
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      tableLayout: 'fixed',
      fontFamily: baseTheme.fontFamily
    },
    bodyTable: {
      height: props.fixedHeader || props.fixedFooter ? props.height : 'auto',
      overflowX: 'hidden',
      overflowY: 'auto'
    },
    tableWrapper: {
      height: props.fixedHeader || props.fixedFooter ? 'auto' : props.height,
      overflow: 'auto'
    }
  };
}

var Table = function (_Component) {
  (0, _inherits3.default)(Table, _Component);

  function Table() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Table);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      allRowsSelected: false
    }, _this.onCellClick = function (rowNumber, columnNumber, event) {
      if (_this.props.onCellClick) _this.props.onCellClick(rowNumber, columnNumber, event);
    }, _this.onCellHover = function (rowNumber, columnNumber, event) {
      if (_this.props.onCellHover) _this.props.onCellHover(rowNumber, columnNumber, event);
    }, _this.onCellHoverExit = function (rowNumber, columnNumber, event) {
      if (_this.props.onCellHoverExit) _this.props.onCellHoverExit(rowNumber, columnNumber, event);
    }, _this.onRowHover = function (rowNumber) {
      if (_this.props.onRowHover) _this.props.onRowHover(rowNumber);
    }, _this.onRowHoverExit = function (rowNumber) {
      if (_this.props.onRowHoverExit) _this.props.onRowHoverExit(rowNumber);
    }, _this.onRowSelection = function (selectedRows) {
      if (_this.state.allRowsSelected) {
        _this.setState({ allRowsSelected: false });
      }

      if (_this.props.onRowSelection) {
        _this.props.onRowSelection(selectedRows);
      }
    }, _this.onSelectAll = function () {
      if (_this.props.onRowSelection) {
        if (!_this.state.allRowsSelected) {
          _this.props.onRowSelection('all');
        } else {
          _this.props.onRowSelection('none');
        }
      }

      _this.setState({ allRowsSelected: !_this.state.allRowsSelected });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Table, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.allRowsSelected) {
        this.setState({ allRowsSelected: true });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.allRowsSelected !== nextProps.allRowsSelected) {
        this.setState({ allRowsSelected: nextProps.allRowsSelected });
      }
    }
  }, {
    key: 'isScrollbarVisible',
    value: function isScrollbarVisible() {
      var tableDivHeight = this.refs.tableDiv.clientHeight;
      var tableBodyHeight = this.refs.tableBody.clientHeight;

      return tableBodyHeight > tableDivHeight;
    }
  }, {
    key: 'createTableHeader',
    value: function createTableHeader(base) {
      return _react2.default.cloneElement(base, {
        enableSelectAll: base.props.enableSelectAll && this.props.selectable && this.props.multiSelectable,
        onSelectAll: this.onSelectAll,
        selectAllSelected: this.state.allRowsSelected
      });
    }
  }, {
    key: 'createTableBody',
    value: function createTableBody(base) {
      return _react2.default.cloneElement(base, {
        allRowsSelected: this.state.allRowsSelected,
        multiSelectable: this.props.multiSelectable,
        onCellClick: this.onCellClick,
        onCellHover: this.onCellHover,
        onCellHoverExit: this.onCellHoverExit,
        onRowHover: this.onRowHover,
        onRowHoverExit: this.onRowHoverExit,
        onRowSelection: this.onRowSelection,
        selectable: this.props.selectable,
        style: (0, _simpleAssign2.default)({ height: this.props.height }, base.props.style)
      });
    }
  }, {
    key: 'createTableFooter',
    value: function createTableFooter(base) {
      return base;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          fixedFooter = _props.fixedFooter,
          fixedHeader = _props.fixedHeader,
          style = _props.style,
          wrapperStyle = _props.wrapperStyle,
          headerStyle = _props.headerStyle,
          bodyStyle = _props.bodyStyle,
          footerStyle = _props.footerStyle;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var tHead = void 0;
      var tFoot = void 0;
      var tBody = void 0;

      _react2.default.Children.forEach(children, function (child) {
        if (!_react2.default.isValidElement(child)) return;

        var muiName = child.type.muiName;

        if (muiName === 'TableBody') {
          tBody = _this2.createTableBody(child);
        } else if (muiName === 'TableHeader') {
          tHead = _this2.createTableHeader(child);
        } else if (muiName === 'TableFooter') {
          tFoot = _this2.createTableFooter(child);
        } else {
           true ? (0, _warning2.default)(false, 'Material-UI: Children of the Table component must be TableBody or TableHeader or TableFooter.\n           Nothing is rendered.') : void 0;
        }
      });

      // If we could not find a table-header and a table-body, do not attempt to display anything.
      if (!tBody && !tHead) return null;

      var mergedTableStyle = (0, _simpleAssign2.default)(styles.root, style);
      var headerTable = void 0;
      var footerTable = void 0;
      var inlineHeader = void 0;
      var inlineFooter = void 0;

      if (fixedHeader) {
        headerTable = _react2.default.createElement(
          'div',
          { style: prepareStyles((0, _simpleAssign2.default)({}, headerStyle)) },
          _react2.default.createElement(
            'table',
            { className: className, style: mergedTableStyle },
            tHead
          )
        );
      } else {
        inlineHeader = tHead;
      }

      if (tFoot !== undefined) {
        if (fixedFooter) {
          footerTable = _react2.default.createElement(
            'div',
            { style: prepareStyles((0, _simpleAssign2.default)({}, footerStyle)) },
            _react2.default.createElement(
              'table',
              { className: className, style: prepareStyles(mergedTableStyle) },
              tFoot
            )
          );
        } else {
          inlineFooter = tFoot;
        }
      }

      return _react2.default.createElement(
        'div',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.tableWrapper, wrapperStyle)) },
        headerTable,
        _react2.default.createElement(
          'div',
          { style: prepareStyles((0, _simpleAssign2.default)(styles.bodyTable, bodyStyle)), ref: 'tableDiv' },
          _react2.default.createElement(
            'table',
            { className: className, style: mergedTableStyle, ref: 'tableBody' },
            inlineHeader,
            inlineFooter,
            tBody
          )
        ),
        footerTable
      );
    }
  }]);
  return Table;
}(_react.Component);

Table.defaultProps = {
  allRowsSelected: false,
  fixedFooter: true,
  fixedHeader: true,
  height: 'inherit',
  multiSelectable: false,
  selectable: true
};
Table.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
Table.propTypes =  true ? {
  /**
   * Set to true to indicate that all rows should be selected.
   */
  allRowsSelected: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the body's table element.
   */
  bodyStyle: _propTypes2.default.object,
  /**
   * Children passed to table.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If true, the footer will appear fixed below the table.
   * The default value is true.
   */
  fixedFooter: _propTypes2.default.bool,
  /**
   * If true, the header will appear fixed above the table.
   * The default value is true.
   */
  fixedHeader: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the footer's table element.
   */
  footerStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the header's table element.
   */
  headerStyle: _propTypes2.default.object,
  /**
   * The height of the table.
   */
  height: _propTypes2.default.string,
  /**
   * If true, multiple table rows can be selected.
   * CTRL/CMD+Click and SHIFT+Click are valid actions.
   * The default value is false.
   */
  multiSelectable: _propTypes2.default.bool,
  /**
   * Called when a row cell is clicked.
   * rowNumber is the row number and columnId is
   * the column number or the column key.
   */
  onCellClick: _propTypes2.default.func,
  /**
   * Called when a table cell is hovered.
   * rowNumber is the row number of the hovered row
   * and columnId is the column number or the column key of the cell.
   */
  onCellHover: _propTypes2.default.func,
  /**
   * Called when a table cell is no longer hovered.
   * rowNumber is the row number of the row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHoverExit: _propTypes2.default.func,
  /**
   * Called when a table row is hovered.
   * rowNumber is the row number of the hovered row.
   */
  onRowHover: _propTypes2.default.func,
  /**
   * Called when a table row is no longer hovered.
   * rowNumber is the row number of the row that is no longer hovered.
   */
  onRowHoverExit: _propTypes2.default.func,
  /**
   * Called when a row is selected.
   * selectedRows is an array of all row selections.
   * IF all rows have been selected, the string "all"
   * will be returned instead to indicate that all rows have been selected.
   */
  onRowSelection: _propTypes2.default.func,
  /**
   * If true, table rows can be selected.
   * If multiple row selection is desired, enable multiSelectable.
   * The default value is true.
   */
  selectable: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of the table's wrapper element.
   */
  wrapperStyle: _propTypes2.default.object
} : {};
exports.default = Table;

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(544);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _toConsumableArray2 = __webpack_require__(95);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = __webpack_require__(106);

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__(111);

var _extends3 = _interopRequireDefault(_extends2);

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

var _Checkbox = __webpack_require__(677);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _TableRowColumn = __webpack_require__(676);

var _TableRowColumn2 = _interopRequireDefault(_TableRowColumn);

var _ClickAwayListener = __webpack_require__(630);

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBody = function (_Component) {
  (0, _inherits3.default)(TableBody, _Component);

  function TableBody() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableBody);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TableBody.__proto__ || (0, _getPrototypeOf2.default)(TableBody)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedRows: []
    }, _this.isControlled = false, _this.handleClickAway = function () {
      if (_this.props.deselectOnClickaway && _this.state.selectedRows.length > 0) {
        var selectedRows = [];
        _this.setState({ selectedRows: selectedRows });
        if (_this.props.onRowSelection) {
          _this.props.onRowSelection(selectedRows);
        }
      }
    }, _this.onRowClick = function (event, rowNumber) {
      event.stopPropagation();

      if (_this.props.selectable) {
        // Prevent text selection while selecting rows.
        window.getSelection().removeAllRanges();
        _this.processRowSelection(event, rowNumber);
      }
    }, _this.onCellClick = function (event, rowNumber, columnNumber) {
      event.stopPropagation();
      if (_this.props.onCellClick) {
        _this.props.onCellClick(rowNumber, _this.getColumnId(columnNumber), event);
      }
    }, _this.onCellHover = function (event, rowNumber, columnNumber) {
      if (_this.props.onCellHover) {
        _this.props.onCellHover(rowNumber, _this.getColumnId(columnNumber), event);
      }
      _this.onRowHover(event, rowNumber);
    }, _this.onCellHoverExit = function (event, rowNumber, columnNumber) {
      if (_this.props.onCellHoverExit) {
        _this.props.onCellHoverExit(rowNumber, _this.getColumnId(columnNumber), event);
      }
      _this.onRowHoverExit(event, rowNumber);
    }, _this.onRowHover = function (event, rowNumber) {
      if (_this.props.onRowHover) {
        _this.props.onRowHover(rowNumber);
      }
    }, _this.onRowHoverExit = function (event, rowNumber) {
      if (_this.props.onRowHoverExit) {
        _this.props.onRowHoverExit(rowNumber);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TableBody, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.preScanRows) {
        this.setState({
          selectedRows: this.getSelectedRows(this.props)
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.preScanRows) {
        this.setState({ // eslint-disable-line react/no-did-mount-set-state
          selectedRows: this.getSelectedRows(this.props)
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.allRowsSelected !== nextProps.allRowsSelected) {
        if (!nextProps.allRowsSelected) {
          this.setState({
            selectedRows: []
          });
          return;
        }
      }

      this.setState({
        selectedRows: this.getSelectedRows(nextProps)
      });
    }
  }, {
    key: 'createRows',
    value: function createRows() {
      var _this2 = this;

      var numChildren = _react2.default.Children.count(this.props.children);
      var rowNumber = 0;
      var handlers = {
        onCellClick: this.onCellClick,
        onCellHover: this.onCellHover,
        onCellHoverExit: this.onCellHoverExit,
        onRowHover: this.onRowHover,
        onRowHoverExit: this.onRowHoverExit,
        onRowClick: this.onRowClick
      };

      return _react2.default.Children.map(this.props.children, function (child) {
        if (_react2.default.isValidElement(child)) {
          var props = {
            hoverable: _this2.props.showRowHover,
            selected: _this2.isRowSelected(rowNumber),
            striped: _this2.props.stripedRows && rowNumber % 2 === 0,
            rowNumber: rowNumber++
          };

          if (rowNumber === numChildren) {
            props.displayBorder = false;
          }

          var children = [_this2.createRowCheckboxColumn(props)];

          _react2.default.Children.forEach(child.props.children, function (child) {
            children.push(child);
          });

          return _react2.default.cloneElement(child, (0, _extends3.default)({}, props, handlers), children);
        }
      });
    }
  }, {
    key: 'createRowCheckboxColumn',
    value: function createRowCheckboxColumn(rowProps) {
      if (!this.props.displayRowCheckbox) {
        return null;
      }

      var name = rowProps.rowNumber + '-cb';
      var disabled = !this.props.selectable;

      return _react2.default.createElement(
        _TableRowColumn2.default,
        {
          key: name,
          columnNumber: 0,
          style: {
            width: 24,
            cursor: disabled ? 'default' : 'inherit'
          }
        },
        _react2.default.createElement(_Checkbox2.default, {
          name: name,
          value: 'selected',
          disabled: disabled,
          checked: rowProps.selected
        })
      );
    }
  }, {
    key: 'getSelectedRows',
    value: function getSelectedRows(props) {
      var _this3 = this;

      var selectedRows = [];

      if (props.selectable) {
        var index = 0;
        _react2.default.Children.forEach(props.children, function (child) {
          if (_react2.default.isValidElement(child)) {
            if (child.props.selected !== undefined) {
              _this3.isControlled = true;
            }

            if (child.props.selected && (selectedRows.length === 0 || props.multiSelectable)) {
              selectedRows.push(index);
            }

            index++;
          }
        });
      }

      return selectedRows;
    }
  }, {
    key: 'isRowSelected',
    value: function isRowSelected(rowNumber) {
      var _this4 = this;

      if (this.props.allRowsSelected) {
        return true;
      }

      return this.state.selectedRows.some(function (row) {
        if ((typeof row === 'undefined' ? 'undefined' : (0, _typeof3.default)(row)) === 'object') {
          if (_this4.isValueInRange(rowNumber, row)) {
            return true;
          }
        } else {
          if (row === rowNumber) {
            return true;
          }
        }

        return false;
      });
    }
  }, {
    key: 'isValueInRange',
    value: function isValueInRange(value, range) {
      if (!range) return false;

      if (range.start <= value && value <= range.end || range.end <= value && value <= range.start) {
        return true;
      }

      return false;
    }
  }, {
    key: 'processRowSelection',
    value: function processRowSelection(event, rowNumber) {
      var selectedRows = [].concat((0, _toConsumableArray3.default)(this.state.selectedRows));

      if (event.shiftKey && this.props.multiSelectable && selectedRows.length > 0) {
        var lastIndex = selectedRows.length - 1;
        var lastSelection = selectedRows[lastIndex];

        if ((typeof lastSelection === 'undefined' ? 'undefined' : (0, _typeof3.default)(lastSelection)) === 'object') {
          lastSelection.end = rowNumber;
        } else {
          selectedRows.splice(lastIndex, 1, {
            start: lastSelection,
            end: rowNumber
          });
        }
      } else if ((event.ctrlKey && !event.metaKey || event.metaKey && !event.ctrlKey) && this.props.multiSelectable) {
        var idx = selectedRows.indexOf(rowNumber);
        if (idx < 0) {
          var foundRange = false;
          for (var i = 0; i < selectedRows.length; i++) {
            var range = selectedRows[i];
            if ((typeof range === 'undefined' ? 'undefined' : (0, _typeof3.default)(range)) !== 'object') continue;

            if (this.isValueInRange(rowNumber, range)) {
              var _selectedRows;

              foundRange = true;
              var values = this.splitRange(range, rowNumber);
              (_selectedRows = selectedRows).splice.apply(_selectedRows, [i, 1].concat((0, _toConsumableArray3.default)(values)));
            }
          }

          if (!foundRange) selectedRows.push(rowNumber);
        } else {
          selectedRows.splice(idx, 1);
        }
      } else {
        if (selectedRows.length === 1 && selectedRows[0] === rowNumber) {
          selectedRows = [];
        } else {
          selectedRows = [rowNumber];
        }
      }

      if (!this.isControlled) {
        this.setState({ selectedRows: selectedRows });
      }

      if (this.props.onRowSelection) {
        this.props.onRowSelection(this.flattenRanges(selectedRows));
      }
    }
  }, {
    key: 'splitRange',
    value: function splitRange(range, splitPoint) {
      var splitValues = [];
      var startOffset = range.start - splitPoint;
      var endOffset = range.end - splitPoint;

      // Process start half
      splitValues.push.apply(splitValues, (0, _toConsumableArray3.default)(this.genRangeOfValues(splitPoint, startOffset)));

      // Process end half
      splitValues.push.apply(splitValues, (0, _toConsumableArray3.default)(this.genRangeOfValues(splitPoint, endOffset)));

      return splitValues;
    }
  }, {
    key: 'genRangeOfValues',
    value: function genRangeOfValues(start, offset) {
      var values = [];
      var dir = offset > 0 ? -1 : 1; // This forces offset to approach 0 from either direction.
      while (offset !== 0) {
        values.push(start + offset);
        offset += dir;
      }

      return values;
    }
  }, {
    key: 'flattenRanges',
    value: function flattenRanges(selectedRows) {
      var _this5 = this;

      return selectedRows.reduce(function (rows, row) {
        if ((typeof row === 'undefined' ? 'undefined' : (0, _typeof3.default)(row)) === 'object') {
          var values = _this5.genRangeOfValues(row.end, row.start - row.end);
          rows.push.apply(rows, [row.end].concat((0, _toConsumableArray3.default)(values)));
        } else {
          rows.push(row);
        }

        return rows;
      }, []).sort();
    }
  }, {
    key: 'getColumnId',
    value: function getColumnId(columnNumber) {
      return columnNumber - 1;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          allRowsSelected = _props.allRowsSelected,
          multiSelectable = _props.multiSelectable,
          onCellClick = _props.onCellClick,
          onCellHover = _props.onCellHover,
          onCellHoverExit = _props.onCellHoverExit,
          onRowHover = _props.onRowHover,
          onRowHoverExit = _props.onRowHoverExit,
          onRowSelection = _props.onRowSelection,
          selectable = _props.selectable,
          deselectOnClickaway = _props.deselectOnClickaway,
          showRowHover = _props.showRowHover,
          stripedRows = _props.stripedRows,
          displayRowCheckbox = _props.displayRowCheckbox,
          preScanRows = _props.preScanRows,
          other = (0, _objectWithoutProperties3.default)(_props, ['style', 'allRowsSelected', 'multiSelectable', 'onCellClick', 'onCellHover', 'onCellHoverExit', 'onRowHover', 'onRowHoverExit', 'onRowSelection', 'selectable', 'deselectOnClickaway', 'showRowHover', 'stripedRows', 'displayRowCheckbox', 'preScanRows']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      return _react2.default.createElement(
        _ClickAwayListener2.default,
        { onClickAway: this.handleClickAway },
        _react2.default.createElement(
          'tbody',
          (0, _extends3.default)({ style: prepareStyles((0, _simpleAssign2.default)({}, style)) }, other),
          this.createRows()
        )
      );
    }
  }]);
  return TableBody;
}(_react.Component);

TableBody.muiName = 'TableBody';
TableBody.defaultProps = {
  allRowsSelected: false,
  deselectOnClickaway: true,
  displayRowCheckbox: true,
  multiSelectable: false,
  preScanRows: true,
  selectable: true,
  style: {}
};
TableBody.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
TableBody.propTypes =  true ? {
  /**
   * @ignore
   * Set to true to indicate that all rows should be selected.
   */
  allRowsSelected: _propTypes2.default.bool,
  /**
   * Children passed to table body.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Controls whether or not to deselect all selected
   * rows after clicking outside the table.
   */
  deselectOnClickaway: _propTypes2.default.bool,
  /**
   * Controls the display of the row checkbox. The default value is true.
   */
  displayRowCheckbox: _propTypes2.default.bool,
  /**
   * @ignore
   * If true, multiple table rows can be selected.
   * CTRL/CMD+Click and SHIFT+Click are valid actions.
   * The default value is false.
   */
  multiSelectable: _propTypes2.default.bool,
  /**
   * @ignore
   * Callback function for when a cell is clicked.
   */
  onCellClick: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table cell is hovered. rowNumber
   * is the row number of the hovered row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHover: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table cell is no longer hovered.
   * rowNumber is the row number of the row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHoverExit: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table row is hovered.
   * rowNumber is the row number of the hovered row.
   */
  onRowHover: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table row is no longer
   * hovered. rowNumber is the row number of the row
   * that is no longer hovered.
   */
  onRowHoverExit: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a row is selected. selectedRows is an
   * array of all row selections. If all rows have been selected,
   * the string "all" will be returned instead to indicate that
   * all rows have been selected.
   */
  onRowSelection: _propTypes2.default.func,
  /**
   * Controls whether or not the rows are pre-scanned to determine
   * initial state. If your table has a large number of rows and
   * you are experiencing a delay in rendering, turn off this property.
   */
  preScanRows: _propTypes2.default.bool,
  /**
   * @ignore
   * If true, table rows can be selected. If multiple
   * row selection is desired, enable multiSelectable.
   * The default value is true.
   */
  selectable: _propTypes2.default.bool,
  /**
   * If true, table rows will be highlighted when
   * the cursor is hovering over the row. The default
   * value is false.
   */
  showRowHover: _propTypes2.default.bool,
  /**
   * If true, every other table row starting
   * with the first row will be striped. The default value is false.
   */
  stripedRows: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = TableBody;

/***/ }),

/***/ 692:
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

var _EnhancedSwitch = __webpack_require__(693);

var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

var _transitions = __webpack_require__(545);

var _transitions2 = _interopRequireDefault(_transitions);

var _checkBoxOutlineBlank = __webpack_require__(694);

var _checkBoxOutlineBlank2 = _interopRequireDefault(_checkBoxOutlineBlank);

var _checkBox = __webpack_require__(695);

var _checkBox2 = _interopRequireDefault(_checkBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var checkbox = context.muiTheme.checkbox;

  var checkboxSize = 24;

  return {
    icon: {
      height: checkboxSize,
      width: checkboxSize
    },
    check: {
      position: 'absolute',
      opacity: 0,
      transform: 'scale(0)',
      transitionOrigin: '50% 50%',
      transition: _transitions2.default.easeOut('450ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('0ms', 'transform', '450ms'),
      fill: checkbox.checkedColor
    },
    checkWhenSwitched: {
      opacity: 1,
      transform: 'scale(1)',
      transition: _transitions2.default.easeOut('0ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('800ms', 'transform', '0ms')
    },
    checkWhenDisabled: {
      fill: checkbox.disabledColor
    },
    box: {
      position: 'absolute',
      opacity: 1,
      fill: checkbox.boxColor,
      transition: _transitions2.default.easeOut('1000ms', 'opacity', '200ms')
    },
    boxWhenSwitched: {
      opacity: 0,
      transition: _transitions2.default.easeOut('650ms', 'opacity', '150ms'),
      fill: checkbox.checkedColor
    },
    boxWhenDisabled: {
      fill: props.checked ? 'transparent' : checkbox.disabledColor
    },
    label: {
      color: props.disabled ? checkbox.labelDisabledColor : checkbox.labelColor
    }
  };
}

var Checkbox = function (_Component) {
  (0, _inherits3.default)(Checkbox, _Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Checkbox.__proto__ || (0, _getPrototypeOf2.default)(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      switched: false
    }, _this.handleStateChange = function (newSwitched) {
      _this.setState({
        switched: newSwitched
      });
    }, _this.handleCheck = function (event, isInputChecked) {
      if (_this.props.onCheck) {
        _this.props.onCheck(event, isInputChecked);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          checked = _props.checked,
          defaultChecked = _props.defaultChecked,
          valueLink = _props.valueLink;


      if (checked || defaultChecked || valueLink && valueLink.value) {
        this.setState({
          switched: true
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.checked !== nextProps.checked) {
        this.setState({
          switched: nextProps.checked
        });
      }
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.refs.enhancedSwitch.isSwitched();
    }
  }, {
    key: 'setChecked',
    value: function setChecked(newCheckedValue) {
      this.refs.enhancedSwitch.setSwitched(newCheckedValue);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          iconStyle = _props2.iconStyle,
          onCheck = _props2.onCheck,
          checkedIcon = _props2.checkedIcon,
          uncheckedIcon = _props2.uncheckedIcon,
          other = (0, _objectWithoutProperties3.default)(_props2, ['iconStyle', 'onCheck', 'checkedIcon', 'uncheckedIcon']);

      var styles = getStyles(this.props, this.context);
      var boxStyles = (0, _simpleAssign2.default)(styles.box, this.state.switched && styles.boxWhenSwitched, iconStyle, this.props.disabled && styles.boxWhenDisabled);
      var checkStyles = (0, _simpleAssign2.default)(styles.check, this.state.switched && styles.checkWhenSwitched, iconStyle, this.props.disabled && styles.checkWhenDisabled);

      var checkedElement = checkedIcon ? _react2.default.cloneElement(checkedIcon, {
        style: (0, _simpleAssign2.default)(checkStyles, checkedIcon.props.style)
      }) : _react2.default.createElement(_checkBox2.default, {
        style: checkStyles
      });

      var unCheckedElement = uncheckedIcon ? _react2.default.cloneElement(uncheckedIcon, {
        style: (0, _simpleAssign2.default)(boxStyles, uncheckedIcon.props.style)
      }) : _react2.default.createElement(_checkBoxOutlineBlank2.default, {
        style: boxStyles
      });

      var checkboxElement = _react2.default.createElement(
        'div',
        null,
        unCheckedElement,
        checkedElement
      );

      var rippleColor = this.state.switched ? checkStyles.fill : boxStyles.fill;
      var mergedIconStyle = (0, _simpleAssign2.default)(styles.icon, iconStyle);

      var labelStyle = (0, _simpleAssign2.default)(styles.label, this.props.labelStyle);

      var enhancedSwitchProps = {
        ref: 'enhancedSwitch',
        inputType: 'checkbox',
        switched: this.state.switched,
        switchElement: checkboxElement,
        rippleColor: rippleColor,
        iconStyle: mergedIconStyle,
        onSwitch: this.handleCheck,
        labelStyle: labelStyle,
        onParentShouldUpdate: this.handleStateChange,
        labelPosition: this.props.labelPosition
      };

      return _react2.default.createElement(_EnhancedSwitch2.default, (0, _extends3.default)({}, other, enhancedSwitchProps));
    }
  }]);
  return Checkbox;
}(_react.Component);

Checkbox.defaultProps = {
  labelPosition: 'right',
  disabled: false
};
Checkbox.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
Checkbox.propTypes =  true ? {
  /**
   * Checkbox is checked if true.
   */
  checked: _propTypes2.default.bool,
  /**
   * The SvgIcon to use for the checked state.
   * This is useful to create icon toggles.
   */
  checkedIcon: _propTypes2.default.element,
  /**
   * The default state of our checkbox component.
   * **Warning:** This cannot be used in conjunction with `checked`.
   * Decide between using a controlled or uncontrolled input element and remove one of these props.
   * More info: https://fb.me/react-controlled-components
   */
  defaultChecked: _propTypes2.default.bool,
  /**
   * Disabled if true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Overrides the inline-styles of the icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Overrides the inline-styles of the input element.
   */
  inputStyle: _propTypes2.default.object,
  /**
   * Where the label will be placed next to the checkbox.
   */
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * Overrides the inline-styles of the Checkbox element label.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * Callback function that is fired when the checkbox is checked.
   *
   * @param {object} event `change` event targeting the underlying checkbox `input`.
   * @param {boolean} isInputChecked The `checked` value of the underlying checkbox `input`.
   */
  onCheck: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The SvgIcon to use for the unchecked state.
   * This is useful to create icon toggles.
   */
  uncheckedIcon: _propTypes2.default.element,
  /**
   * ValueLink for when using controlled checkbox.
   */
  valueLink: _propTypes2.default.object
} : {};
exports.default = Checkbox;

/***/ }),

/***/ 693:
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

var _reactEventListener = __webpack_require__(556);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = __webpack_require__(557);

var _keycode2 = _interopRequireDefault(_keycode);

var _transitions = __webpack_require__(545);

var _transitions2 = _interopRequireDefault(_transitions);

var _FocusRipple = __webpack_require__(589);

var _FocusRipple2 = _interopRequireDefault(_FocusRipple);

var _TouchRipple = __webpack_require__(594);

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

var _Paper = __webpack_require__(551);

var _Paper2 = _interopRequireDefault(_Paper);

var _warning = __webpack_require__(548);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var baseTheme = context.muiTheme.baseTheme;


  return {
    root: {
      cursor: props.disabled ? 'not-allowed' : 'pointer',
      position: 'relative',
      overflow: 'visible',
      display: 'table',
      height: 'auto',
      width: '100%'
    },
    input: {
      position: 'absolute',
      cursor: 'inherit',
      pointerEvents: 'all',
      opacity: 0,
      width: '100%',
      height: '100%',
      zIndex: 2,
      left: 0,
      boxSizing: 'border-box',
      padding: 0,
      margin: 0
    },
    controls: {
      display: 'flex',
      width: '100%',
      height: '100%'
    },
    label: {
      float: 'left',
      position: 'relative',
      display: 'block',
      width: 'calc(100% - 60px)',
      lineHeight: '24px',
      color: baseTheme.palette.textColor,
      fontFamily: baseTheme.fontFamily
    },
    wrap: {
      transition: _transitions2.default.easeOut(),
      float: 'left',
      position: 'relative',
      display: 'block',
      flexShrink: 0,
      width: 60 - baseTheme.spacing.desktopGutterLess,
      marginRight: props.labelPosition === 'right' ? baseTheme.spacing.desktopGutterLess : 0,
      marginLeft: props.labelPosition === 'left' ? baseTheme.spacing.desktopGutterLess : 0
    },
    ripple: {
      color: props.rippleColor || baseTheme.palette.primary1Color,
      height: '200%',
      width: '200%',
      top: -12,
      left: -12
    }
  };
}

var EnhancedSwitch = function (_Component) {
  (0, _inherits3.default)(EnhancedSwitch, _Component);

  function EnhancedSwitch() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EnhancedSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedSwitch.__proto__ || (0, _getPrototypeOf2.default)(EnhancedSwitch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isKeyboardFocused: false
    }, _this.handleChange = function (event) {
      _this.tabPressed = false;
      _this.setState({
        isKeyboardFocused: false
      });

      var isInputChecked = _this.refs.checkbox.checked;

      if (!_this.props.hasOwnProperty('checked') && _this.props.onParentShouldUpdate) {
        _this.props.onParentShouldUpdate(isInputChecked);
      }

      if (_this.props.onSwitch) {
        _this.props.onSwitch(event, isInputChecked);
      }
    }, _this.handleKeyDown = function (event) {
      var code = (0, _keycode2.default)(event);

      if (code === 'tab') {
        _this.tabPressed = true;
      }
      if (_this.state.isKeyboardFocused && code === 'space') {
        _this.handleChange(event);
      }
    }, _this.handleKeyUp = function (event) {
      if (_this.state.isKeyboardFocused && (0, _keycode2.default)(event) === 'space') {
        _this.handleChange(event);
      }
    }, _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.refs.touchRipple.start(event);
      }
    }, _this.handleMouseUp = function () {
      _this.refs.touchRipple.end();
    }, _this.handleMouseLeave = function () {
      _this.refs.touchRipple.end();
    }, _this.handleTouchStart = function (event) {
      _this.refs.touchRipple.start(event);
    }, _this.handleTouchEnd = function () {
      _this.refs.touchRipple.end();
    }, _this.handleBlur = function (event) {
      _this.setState({
        isKeyboardFocused: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleFocus = function (event) {
      // setTimeout is needed becuase the focus event fires first
      // Wait so that we can capture if this was a keyboard focus
      // or touch focus
      setTimeout(function () {
        if (_this.tabPressed) {
          _this.setState({
            isKeyboardFocused: true
          });
        }
      }, 150);

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EnhancedSwitch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var inputNode = this.refs.checkbox;
      if ((!this.props.switched || inputNode.checked !== this.props.switched) && this.props.onParentShouldUpdate) {
        this.props.onParentShouldUpdate(inputNode.checked);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var hasCheckedProp = nextProps.hasOwnProperty('checked');
      var hasNewDefaultProp = nextProps.hasOwnProperty('defaultChecked') && nextProps.defaultChecked !== this.props.defaultChecked;

      if (hasCheckedProp || hasNewDefaultProp) {
        var switched = nextProps.checked || nextProps.defaultChecked || false;

        this.setState({
          switched: switched
        });

        if (this.props.onParentShouldUpdate && switched !== this.props.switched) {
          this.props.onParentShouldUpdate(switched);
        }
      }
    }
  }, {
    key: 'isSwitched',
    value: function isSwitched() {
      return this.refs.checkbox.checked;
    }

    // no callback here because there is no event

  }, {
    key: 'setSwitched',
    value: function setSwitched(newSwitchedValue) {
      if (!this.props.hasOwnProperty('checked') || this.props.checked === false) {
        if (this.props.onParentShouldUpdate) {
          this.props.onParentShouldUpdate(newSwitchedValue);
        }
        this.refs.checkbox.checked = newSwitchedValue;
      } else {
         true ? (0, _warning2.default)(false, 'Material-UI: Cannot call set method while checked is defined as a property.') : void 0;
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.checkbox.value;
    }

    // Checkbox inputs only use SPACE to change their state. Using ENTER will
    // update the ui but not the input.


    /**
     * Because both the ripples and the checkbox input cannot share pointer
     * events, the checkbox input takes control of pointer events and calls
     * ripple animations manually.
     */

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          value = _props.value,
          iconStyle = _props.iconStyle,
          inputStyle = _props.inputStyle,
          inputType = _props.inputType,
          label = _props.label,
          labelStyle = _props.labelStyle,
          labelPosition = _props.labelPosition,
          onSwitch = _props.onSwitch,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onMouseUp = _props.onMouseUp,
          onMouseDown = _props.onMouseDown,
          onMouseLeave = _props.onMouseLeave,
          onTouchStart = _props.onTouchStart,
          onTouchEnd = _props.onTouchEnd,
          onParentShouldUpdate = _props.onParentShouldUpdate,
          disabled = _props.disabled,
          disableTouchRipple = _props.disableTouchRipple,
          disableFocusRipple = _props.disableFocusRipple,
          className = _props.className,
          rippleColor = _props.rippleColor,
          rippleStyle = _props.rippleStyle,
          style = _props.style,
          switched = _props.switched,
          switchElement = _props.switchElement,
          thumbStyle = _props.thumbStyle,
          trackStyle = _props.trackStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['name', 'value', 'iconStyle', 'inputStyle', 'inputType', 'label', 'labelStyle', 'labelPosition', 'onSwitch', 'onBlur', 'onFocus', 'onMouseUp', 'onMouseDown', 'onMouseLeave', 'onTouchStart', 'onTouchEnd', 'onParentShouldUpdate', 'disabled', 'disableTouchRipple', 'disableFocusRipple', 'className', 'rippleColor', 'rippleStyle', 'style', 'switched', 'switchElement', 'thumbStyle', 'trackStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var wrapStyles = (0, _simpleAssign2.default)(styles.wrap, iconStyle);
      var mergedRippleStyle = (0, _simpleAssign2.default)(styles.ripple, rippleStyle);

      if (thumbStyle) {
        wrapStyles.marginLeft /= 2;
        wrapStyles.marginRight /= 2;
      }

      var labelElement = label && _react2.default.createElement(
        'label',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)) },
        label
      );

      var showTouchRipple = !disabled && !disableTouchRipple;
      var showFocusRipple = !disabled && !disableFocusRipple;

      var touchRipple = _react2.default.createElement(_TouchRipple2.default, {
        ref: 'touchRipple',
        key: 'touchRipple',
        style: mergedRippleStyle,
        color: mergedRippleStyle.color,
        muiTheme: this.context.muiTheme,
        centerRipple: true
      });

      var focusRipple = _react2.default.createElement(_FocusRipple2.default, {
        key: 'focusRipple',
        innerStyle: mergedRippleStyle,
        color: mergedRippleStyle.color,
        muiTheme: this.context.muiTheme,
        show: this.state.isKeyboardFocused
      });

      var ripples = [showTouchRipple ? touchRipple : null, showFocusRipple ? focusRipple : null];

      var inputElement = _react2.default.createElement('input', (0, _extends3.default)({}, other, {
        ref: 'checkbox',
        type: inputType,
        style: prepareStyles((0, _simpleAssign2.default)(styles.input, inputStyle)),
        name: name,
        value: value,
        disabled: disabled,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onChange: this.handleChange,
        onMouseUp: showTouchRipple && this.handleMouseUp,
        onMouseDown: showTouchRipple && this.handleMouseDown,
        onMouseLeave: showTouchRipple && this.handleMouseLeave,
        onTouchStart: showTouchRipple && this.handleTouchStart,
        onTouchEnd: showTouchRipple && this.handleTouchEnd
      }));

      // If toggle component (indicated by whether the style includes thumb) manually lay out
      // elements in order to nest ripple elements
      var switchOrThumbElement = !thumbStyle ? _react2.default.createElement(
        'div',
        { style: prepareStyles(wrapStyles) },
        switchElement,
        ripples
      ) : _react2.default.createElement(
        'div',
        { style: prepareStyles(wrapStyles) },
        _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, trackStyle)) }),
        _react2.default.createElement(
          _Paper2.default,
          { style: thumbStyle, zDepth: 1, circle: true },
          ' ',
          ripples,
          ' '
        )
      );

      var elementsInOrder = labelPosition === 'right' ? _react2.default.createElement(
        'div',
        { style: styles.controls },
        switchOrThumbElement,
        labelElement
      ) : _react2.default.createElement(
        'div',
        { style: styles.controls },
        labelElement,
        switchOrThumbElement
      );

      return _react2.default.createElement(
        'div',
        { ref: 'root', className: className, style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
        _react2.default.createElement(_reactEventListener2.default, {
          target: 'window',
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp
        }),
        inputElement,
        elementsInOrder
      );
    }
  }]);
  return EnhancedSwitch;
}(_react.Component);

EnhancedSwitch.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
EnhancedSwitch.propTypes =  true ? {
  checked: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  defaultChecked: _propTypes2.default.bool,
  disableFocusRipple: _propTypes2.default.bool,
  disableTouchRipple: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  iconStyle: _propTypes2.default.object,
  inputStyle: _propTypes2.default.object,
  inputType: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.node,
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  labelStyle: _propTypes2.default.object,
  name: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onMouseUp: _propTypes2.default.func,
  onParentShouldUpdate: _propTypes2.default.func,
  onSwitch: _propTypes2.default.func,
  onTouchEnd: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  rippleColor: _propTypes2.default.string,
  rippleStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  switchElement: _propTypes2.default.element.isRequired,
  switched: _propTypes2.default.bool.isRequired,
  thumbStyle: _propTypes2.default.object,
  trackStyle: _propTypes2.default.object,
  value: _propTypes2.default.any
} : {};
exports.default = EnhancedSwitch;

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(554);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(555);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleCheckBoxOutlineBlank = function ToggleCheckBoxOutlineBlank(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' })
  );
};
ToggleCheckBoxOutlineBlank = (0, _pure2.default)(ToggleCheckBoxOutlineBlank);
ToggleCheckBoxOutlineBlank.displayName = 'ToggleCheckBoxOutlineBlank';
ToggleCheckBoxOutlineBlank.muiName = 'SvgIcon';

exports.default = ToggleCheckBoxOutlineBlank;

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(554);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(555);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleCheckBox = function ToggleCheckBox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
  );
};
ToggleCheckBox = (0, _pure2.default)(ToggleCheckBox);
ToggleCheckBox.displayName = 'ToggleCheckBox';
ToggleCheckBox.muiName = 'SvgIcon';

exports.default = ToggleCheckBox;

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(111);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(95);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _TableRowColumn = __webpack_require__(676);

var _TableRowColumn2 = _interopRequireDefault(_TableRowColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tableFooter = context.muiTheme.tableFooter;


  return {
    cell: {
      borderTop: '1px solid ' + tableFooter.borderColor,
      verticalAlign: 'bottom',
      padding: 20,
      textAlign: 'left',
      whiteSpace: 'nowrap'
    }
  };
}

var TableFooter = function (_Component) {
  (0, _inherits3.default)(TableFooter, _Component);

  function TableFooter() {
    (0, _classCallCheck3.default)(this, TableFooter);
    return (0, _possibleConstructorReturn3.default)(this, (TableFooter.__proto__ || (0, _getPrototypeOf2.default)(TableFooter)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableFooter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          adjustForCheckbox = _props.adjustForCheckbox,
          children = _props.children,
          className = _props.className,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['adjustForCheckbox', 'children', 'className', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var footerRows = _react2.default.Children.map(children, function (child, rowNumber) {
        var newChildProps = {
          displayBorder: false,
          key: 'f-' + rowNumber,
          rowNumber: rowNumber,
          style: (0, _simpleAssign2.default)({}, styles.cell, child.props.style)
        };

        var newDescendants = void 0;

        if (adjustForCheckbox) {
          newDescendants = [_react2.default.createElement(_TableRowColumn2.default, { key: 'fpcb' + rowNumber, style: { width: 24 } })].concat((0, _toConsumableArray3.default)(_react2.default.Children.toArray(child.props.children)));
        } else {
          newDescendants = child.props.children;
        }

        return _react2.default.cloneElement(child, newChildProps, newDescendants);
      });

      return _react2.default.createElement(
        'tfoot',
        (0, _extends3.default)({ className: className, style: prepareStyles((0, _simpleAssign2.default)({}, style)) }, other),
        footerRows
      );
    }
  }]);
  return TableFooter;
}(_react.Component);

TableFooter.muiName = 'TableFooter';
TableFooter.defaultProps = {
  adjustForCheckbox: true,
  style: {}
};
TableFooter.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
TableFooter.propTypes =  true ? {
  /**
   * @ignore
   * Controls whether or not header rows should be adjusted
   * for a checkbox column. If the select all checkbox is true,
   * this property will not influence the number of columns.
   * This is mainly useful for "super header" rows so that
   * the checkbox column does not create an offset that needs
   * to be accounted for manually.
   */
  adjustForCheckbox: _propTypes2.default.bool,
  /**
   * Children passed to table footer.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = TableFooter;

/***/ }),

/***/ 697:
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

var _simpleAssign = __webpack_require__(543);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(94);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Checkbox = __webpack_require__(677);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _TableHeaderColumn = __webpack_require__(678);

var _TableHeaderColumn2 = _interopRequireDefault(_TableHeaderColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tableHeader = context.muiTheme.tableHeader;


  return {
    root: {
      borderBottom: '1px solid ' + tableHeader.borderColor
    }
  };
}

var TableHeader = function (_Component) {
  (0, _inherits3.default)(TableHeader, _Component);

  function TableHeader() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TableHeader.__proto__ || (0, _getPrototypeOf2.default)(TableHeader)).call.apply(_ref, [this].concat(args))), _this), _this.handleCheckAll = function (event, checked) {
      if (_this.props.onSelectAll) {
        _this.props.onSelectAll(checked);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TableHeader, [{
    key: 'createSuperHeaderRows',
    value: function createSuperHeaderRows() {
      var numChildren = _react2.default.Children.count(this.props.children);
      if (numChildren === 1) return undefined;

      var superHeaders = [];
      for (var index = 0; index < numChildren - 1; index++) {
        var child = this.props.children[index];

        if (!_react2.default.isValidElement(child)) continue;

        var props = {
          key: 'sh' + index,
          rowNumber: index
        };
        superHeaders.push(this.createSuperHeaderRow(child, props));
      }

      if (superHeaders.length) return superHeaders;
    }
  }, {
    key: 'createSuperHeaderRow',
    value: function createSuperHeaderRow(child, props) {
      var children = [];
      if (this.props.adjustForCheckbox) {
        children.push(this.getCheckboxPlaceholder(props));
      }
      _react2.default.Children.forEach(child.props.children, function (child) {
        children.push(child);
      });

      return _react2.default.cloneElement(child, props, children);
    }
  }, {
    key: 'createBaseHeaderRow',
    value: function createBaseHeaderRow() {
      var childrenArray = _react2.default.Children.toArray(this.props.children);
      var numChildren = childrenArray.length;
      if (numChildren < 1) {
        return null;
      }

      var child = childrenArray[numChildren - 1];

      var props = {
        key: 'h' + numChildren,
        rowNumber: numChildren
      };

      var children = [this.getSelectAllCheckboxColumn(props)];
      _react2.default.Children.forEach(child.props.children, function (child) {
        children.push(child);
      });

      return _react2.default.cloneElement(child, props, children);
    }
  }, {
    key: 'getCheckboxPlaceholder',
    value: function getCheckboxPlaceholder(props) {
      if (!this.props.adjustForCheckbox) return null;

      var disabled = !this.props.enableSelectAll;
      var key = 'hpcb' + props.rowNumber;
      return _react2.default.createElement(_TableHeaderColumn2.default, {
        key: key,
        style: {
          width: 24,
          cursor: disabled ? 'default' : 'inherit'
        }
      });
    }
  }, {
    key: 'getSelectAllCheckboxColumn',
    value: function getSelectAllCheckboxColumn(props) {
      if (!this.props.displaySelectAll) return this.getCheckboxPlaceholder(props);

      var disabled = !this.props.enableSelectAll;
      var checkbox = _react2.default.createElement(_Checkbox2.default, {
        key: 'selectallcb',
        name: 'selectallcb',
        value: 'selected',
        disabled: disabled,
        checked: this.props.selectAllSelected,
        onCheck: this.handleCheckAll
      });

      var key = 'hpcb' + props.rowNumber;
      return _react2.default.createElement(
        _TableHeaderColumn2.default,
        {
          key: key,
          style: {
            width: 24,
            cursor: disabled ? 'not-allowed' : 'inherit'
          }
        },
        checkbox
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var superHeaderRows = this.createSuperHeaderRows();
      var baseHeaderRow = this.createBaseHeaderRow();

      return _react2.default.createElement(
        'thead',
        { className: className, style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
        superHeaderRows,
        baseHeaderRow
      );
    }
  }]);
  return TableHeader;
}(_react.Component);

TableHeader.muiName = 'TableHeader';
TableHeader.defaultProps = {
  adjustForCheckbox: true,
  displaySelectAll: true,
  enableSelectAll: true,
  selectAllSelected: false
};
TableHeader.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
TableHeader.propTypes =  true ? {
  /**
   * Controls whether or not header rows should be
   * adjusted for a checkbox column. If the select all
   * checkbox is true, this property will not influence
   * the number of columns. This is mainly useful for
   * "super header" rows so that the checkbox column
   * does not create an offset that needs to be accounted
   * for manually.
   */
  adjustForCheckbox: _propTypes2.default.bool,
  /**
   * Children passed to table header.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Controls whether or not the select all checkbox is displayed.
   */
  displaySelectAll: _propTypes2.default.bool,
  /**
   * If set to true, the select all button will be interactable.
   * If set to false, the button will not be interactable.
   * To hide the checkbox, set displaySelectAll to false.
   */
  enableSelectAll: _propTypes2.default.bool,
  /**
   * @ignore
   * Callback when select all has been checked.
   */
  onSelectAll: _propTypes2.default.func,
  /**
   * @ignore
   * True when select all has been checked.
   */
  selectAllSelected: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = TableHeader;

/***/ }),

/***/ 698:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var tableRow = context.muiTheme.tableRow;


  var cellBgColor = 'inherit';
  if (props.hovered || state.hovered) {
    cellBgColor = tableRow.hoverColor;
  } else if (props.selected) {
    cellBgColor = tableRow.selectedColor;
  } else if (props.striped) {
    cellBgColor = tableRow.stripeColor;
  }

  return {
    root: {
      borderBottom: props.displayBorder && '1px solid ' + tableRow.borderColor,
      color: tableRow.textColor,
      height: tableRow.height
    },
    cell: {
      backgroundColor: cellBgColor
    }
  };
}

var TableRow = function (_Component) {
  (0, _inherits3.default)(TableRow, _Component);

  function TableRow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TableRow.__proto__ || (0, _getPrototypeOf2.default)(TableRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.onCellClick = function (event, columnIndex) {
      if (_this.props.selectable && _this.props.onCellClick) {
        _this.props.onCellClick(event, _this.props.rowNumber, columnIndex);
      }
      event.ctrlKey = true;
      _this.onRowClick(event);
    }, _this.onCellHover = function (event, columnIndex) {
      if (_this.props.hoverable) {
        _this.setState({ hovered: true });
        if (_this.props.onCellHover) _this.props.onCellHover(event, _this.props.rowNumber, columnIndex);
        _this.onRowHover(event);
      }
    }, _this.onCellHoverExit = function (event, columnIndex) {
      if (_this.props.hoverable) {
        _this.setState({ hovered: false });
        if (_this.props.onCellHoverExit) _this.props.onCellHoverExit(event, _this.props.rowNumber, columnIndex);
        _this.onRowHoverExit(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TableRow, [{
    key: 'onRowClick',
    value: function onRowClick(event) {
      if (this.props.selectable && this.props.onRowClick) {
        this.props.onRowClick(event, this.props.rowNumber);
      }
    }
  }, {
    key: 'onRowHover',
    value: function onRowHover(event) {
      if (this.props.onRowHover) {
        this.props.onRowHover(event, this.props.rowNumber);
      }
    }
  }, {
    key: 'onRowHoverExit',
    value: function onRowHoverExit(event) {
      if (this.props.onRowHoverExit) {
        this.props.onRowHoverExit(event, this.props.rowNumber);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          displayBorder = _props.displayBorder,
          hoverable = _props.hoverable,
          hovered = _props.hovered,
          onCellClick = _props.onCellClick,
          onCellHover = _props.onCellHover,
          onCellHoverExit = _props.onCellHoverExit,
          onRowClick = _props.onRowClick,
          onRowHover = _props.onRowHover,
          onRowHoverExit = _props.onRowHoverExit,
          rowNumber = _props.rowNumber,
          selectable = _props.selectable,
          selected = _props.selected,
          striped = _props.striped,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['className', 'displayBorder', 'hoverable', 'hovered', 'onCellClick', 'onCellHover', 'onCellHoverExit', 'onRowClick', 'onRowHover', 'onRowHoverExit', 'rowNumber', 'selectable', 'selected', 'striped', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      var rowColumns = _react2.default.Children.map(this.props.children, function (child, columnNumber) {
        if (_react2.default.isValidElement(child)) {
          return _react2.default.cloneElement(child, {
            columnNumber: columnNumber,
            hoverable: _this2.props.hoverable,
            key: _this2.props.rowNumber + '-' + columnNumber,
            onClick: _this2.onCellClick,
            onHover: _this2.onCellHover,
            onHoverExit: _this2.onCellHoverExit,
            style: (0, _simpleAssign2.default)({}, styles.cell, child.props.style)
          });
        }
      });

      return _react2.default.createElement(
        'tr',
        (0, _extends3.default)({
          className: className,
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
        }, other),
        rowColumns
      );
    }
  }]);
  return TableRow;
}(_react.Component);

TableRow.defaultProps = {
  displayBorder: true,
  hoverable: false,
  hovered: false,
  selectable: true,
  striped: false
};
TableRow.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
TableRow.propTypes =  true ? {
  /**
   * Children passed to table row.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If true, row border will be displayed for the row.
   * If false, no border will be drawn.
   */
  displayBorder: _propTypes2.default.bool,
  /**
   * Controls whether or not the row responds to hover events.
   */
  hoverable: _propTypes2.default.bool,
  /**
   * Controls whether or not the row should be rendered as being
   * hovered. This property is evaluated in addition to this.state.hovered
   * and can be used to synchronize the hovered state with some other
   * external events.
   */
  hovered: _propTypes2.default.bool,
  /**
   * @ignore
   * Called when a row cell is clicked.
   * rowNumber is the row number and columnId is
   * the column number or the column key.
   */
  onCellClick: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table cell is hovered.
   * rowNumber is the row number of the hovered row
   * and columnId is the column number or the column key of the cell.
   */
  onCellHover: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table cell is no longer hovered.
   * rowNumber is the row number of the row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHoverExit: _propTypes2.default.func,
  /**
   * @ignore
   * Called when row is clicked.
   */
  onRowClick: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table row is hovered.
   * rowNumber is the row number of the hovered row.
   */
  onRowHover: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table row is no longer hovered.
   * rowNumber is the row number of the row that is no longer hovered.
   */
  onRowHoverExit: _propTypes2.default.func,
  /**
   * Number to identify the row. This property is
   * automatically populated when used with the TableBody component.
   */
  rowNumber: _propTypes2.default.number,
  /**
   * If true, table rows can be selected. If multiple row
   * selection is desired, enable multiSelectable.
   * The default value is true.
   */
  selectable: _propTypes2.default.bool,
  /**
   * Indicates that a particular row is selected.
   * This property can be used to programmatically select rows.
   */
  selected: _propTypes2.default.bool,
  /**
   * Indicates whether or not the row is striped.
   */
  striped: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = TableRow;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jNGJjYjM3YzllMzZjZjFiNTg4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1RhYmxlL1RhYmxlUm93Q29sdW1uLmpzPzY4ODJhOTkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL0NoZWNrYm94L2luZGV4LmpzPzBlYzEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1RhYmxlL1RhYmxlSGVhZGVyQ29sdW1uLmpzPzRlYTciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1NlbGVjdEZpZWxkL2luZGV4LmpzPzNiMDciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1NlbGVjdEZpZWxkL1NlbGVjdEZpZWxkLmpzP2Q0OTciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL0Ryb3BEb3duTWVudS9pbmRleC5qcz84MTA5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9Ecm9wRG93bk1lbnUvRHJvcERvd25NZW51LmpzPzYyNmYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2Fycm93LWRyb3AtZG93bi5qcz8zZWY5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9pbnRlcm5hbC9DbGVhckZpeC5qcz9lMDAxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9pbnRlcm5hbC9CZWZvcmVBZnRlcldyYXBwZXIuanM/MWQwOCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvUG9wb3Zlci9Qb3BvdmVyQW5pbWF0aW9uVmVydGljYWwuanM/NWNkYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvVGFibGUvaW5kZXguanM/ZTZmMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvVGFibGUvVGFibGUuanM/MWExMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvVGFibGUvVGFibGVCb2R5LmpzP2VhNTAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL0NoZWNrYm94L0NoZWNrYm94LmpzP2ZkMjE3ODAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL2ludGVybmFsL0VuaGFuY2VkU3dpdGNoLmpzP2ZkMjE3ODAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL3N2Zy1pY29ucy90b2dnbGUvY2hlY2stYm94LW91dGxpbmUtYmxhbmsuanM/ZmQyMTc4MCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvc3ZnLWljb25zL3RvZ2dsZS9jaGVjay1ib3guanM/ZmQyMTc4MCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvVGFibGUvVGFibGVGb290ZXIuanM/ZmQyMTc4MCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvVGFibGUvVGFibGVIZWFkZXIuanM/ZmQyMTc4MCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvVGFibGUvVGFibGVSb3cuanM/ZmQyMTc4MCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0KSB7XG4gIHZhciB0YWJsZVJvd0NvbHVtbiA9IGNvbnRleHQubXVpVGhlbWUudGFibGVSb3dDb2x1bW47XG5cblxuICB2YXIgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiB0YWJsZVJvd0NvbHVtbi5zcGFjaW5nLFxuICAgICAgcGFkZGluZ1JpZ2h0OiB0YWJsZVJvd0NvbHVtbi5zcGFjaW5nLFxuICAgICAgaGVpZ2h0OiB0YWJsZVJvd0NvbHVtbi5oZWlnaHQsXG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnXG4gICAgfVxuICB9O1xuXG4gIGlmIChfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uY291bnQocHJvcHMuY2hpbGRyZW4pID09PSAxICYmICFpc05hTihwcm9wcy5jaGlsZHJlbikpIHtcbiAgICBzdHlsZXMudGV4dEFsaWduID0gJ3JpZ2h0JztcbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbnZhciBUYWJsZVJvd0NvbHVtbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFRhYmxlUm93Q29sdW1uLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUYWJsZVJvd0NvbHVtbigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBUYWJsZVJvd0NvbHVtbik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBUYWJsZVJvd0NvbHVtbi5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoVGFibGVSb3dDb2x1bW4pKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdmVyZWQ6IGZhbHNlXG4gICAgfSwgX3RoaXMub25DbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25DbGljayhldmVudCwgX3RoaXMucHJvcHMuY29sdW1uTnVtYmVyKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5vbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5ob3ZlcmFibGUpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiB0cnVlIH0pO1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25Ib3Zlcikge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uSG92ZXIoZXZlbnQsIF90aGlzLnByb3BzLmNvbHVtbk51bWJlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfdGhpcy5vbk1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5ob3ZlcmFibGUpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uSG92ZXJFeGl0KSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25Ib3ZlckV4aXQoZXZlbnQsIF90aGlzLnByb3BzLmNvbHVtbk51bWJlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoVGFibGVSb3dDb2x1bW4sIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBjb2x1bW5OdW1iZXIgPSBfcHJvcHMuY29sdW1uTnVtYmVyLFxuICAgICAgICAgIGhvdmVyYWJsZSA9IF9wcm9wcy5ob3ZlcmFibGUsXG4gICAgICAgICAgb25DbGljayA9IF9wcm9wcy5vbkNsaWNrLFxuICAgICAgICAgIG9uSG92ZXIgPSBfcHJvcHMub25Ib3ZlcixcbiAgICAgICAgICBvbkhvdmVyRXhpdCA9IF9wcm9wcy5vbkhvdmVyRXhpdCxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydjaGlsZHJlbicsICdjbGFzc05hbWUnLCAnY29sdW1uTnVtYmVyJywgJ2hvdmVyYWJsZScsICdvbkNsaWNrJywgJ29uSG92ZXInLCAnb25Ib3ZlckV4aXQnLCAnc3R5bGUnXSk7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG5cbiAgICAgIHZhciBoYW5kbGVycyA9IHtcbiAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMub25Nb3VzZUVudGVyLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMub25Nb3VzZUxlYXZlXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICd0ZCcsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKVxuICAgICAgICB9LCBoYW5kbGVycywgb3RoZXIpLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFRhYmxlUm93Q29sdW1uO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuVGFibGVSb3dDb2x1bW4uZGVmYXVsdFByb3BzID0ge1xuICBob3ZlcmFibGU6IGZhbHNlXG59O1xuVGFibGVSb3dDb2x1bW4uY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblRhYmxlUm93Q29sdW1uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogTnVtYmVyIHRvIGlkZW50aWZ5IHRoZSBoZWFkZXIgcm93LiBUaGlzIHByb3BlcnR5XG4gICAqIGlzIGF1dG9tYXRpY2FsbHkgcG9wdWxhdGVkIHdoZW4gdXNlZCB3aXRoIFRhYmxlSGVhZGVyLlxuICAgKi9cbiAgY29sdW1uTnVtYmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogSWYgdHJ1ZSwgdGhpcyBjb2x1bW4gcmVzcG9uZHMgdG8gaG92ZXIgZXZlbnRzLlxuICAgKi9cbiAgaG92ZXJhYmxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Ib3ZlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmb3IgaG92ZXIgZXhpdCBldmVudC5cbiAgICovXG4gIG9uSG92ZXJFeGl0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBUYWJsZVJvd0NvbHVtbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9UYWJsZS9UYWJsZVJvd0NvbHVtbi5qc1xuLy8gbW9kdWxlIGlkID0gNjc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9DaGVja2JveCA9IHJlcXVpcmUoJy4vQ2hlY2tib3gnKTtcblxudmFyIF9DaGVja2JveDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DaGVja2JveCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9DaGVja2JveDIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9DaGVja2JveC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX1Rvb2x0aXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9Ub29sdGlwJyk7XG5cbnZhciBfVG9vbHRpcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ub29sdGlwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0KSB7XG4gIHZhciB0YWJsZUhlYWRlckNvbHVtbiA9IGNvbnRleHQubXVpVGhlbWUudGFibGVIZWFkZXJDb2x1bW47XG5cblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgcGFkZGluZ0xlZnQ6IHRhYmxlSGVhZGVyQ29sdW1uLnNwYWNpbmcsXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRhYmxlSGVhZGVyQ29sdW1uLnNwYWNpbmcsXG4gICAgICBoZWlnaHQ6IHRhYmxlSGVhZGVyQ29sdW1uLmhlaWdodCxcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICBjb2xvcjogdGFibGVIZWFkZXJDb2x1bW4udGV4dENvbG9yLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9LFxuICAgIHRvb2x0aXA6IHtcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luVG9wOiB0YWJsZUhlYWRlckNvbHVtbi5oZWlnaHQgLyAyXG4gICAgfVxuICB9O1xufVxuXG52YXIgVGFibGVIZWFkZXJDb2x1bW4gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShUYWJsZUhlYWRlckNvbHVtbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVGFibGVIZWFkZXJDb2x1bW4oKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgVGFibGVIZWFkZXJDb2x1bW4pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gVGFibGVIZWFkZXJDb2x1bW4uX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFRhYmxlSGVhZGVyQ29sdW1uKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBob3ZlcmVkOiBmYWxzZVxuICAgIH0sIF90aGlzLm9uTW91c2VFbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy50b29sdGlwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH0sIF90aGlzLm9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy50b29sdGlwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DbGljaykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCBfdGhpcy5wcm9wcy5jb2x1bW5OdW1iZXIpO1xuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShUYWJsZUhlYWRlckNvbHVtbiwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIGNvbHVtbk51bWJlciA9IF9wcm9wcy5jb2x1bW5OdW1iZXIsXG4gICAgICAgICAgaG92ZXJhYmxlID0gX3Byb3BzLmhvdmVyYWJsZSxcbiAgICAgICAgICBvbkNsaWNrID0gX3Byb3BzLm9uQ2xpY2ssXG4gICAgICAgICAgb25Ib3ZlciA9IF9wcm9wcy5vbkhvdmVyLFxuICAgICAgICAgIG9uSG92ZXJFeGl0ID0gX3Byb3BzLm9uSG92ZXJFeGl0LFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIHRvb2x0aXAgPSBfcHJvcHMudG9vbHRpcCxcbiAgICAgICAgICB0b29sdGlwU3R5bGUgPSBfcHJvcHMudG9vbHRpcFN0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2NoaWxkcmVuJywgJ2NsYXNzTmFtZScsICdjb2x1bW5OdW1iZXInLCAnaG92ZXJhYmxlJywgJ29uQ2xpY2snLCAnb25Ib3ZlcicsICdvbkhvdmVyRXhpdCcsICdzdHlsZScsICd0b29sdGlwJywgJ3Rvb2x0aXBTdHlsZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcblxuICAgICAgdmFyIGhhbmRsZXJzID0ge1xuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMub25Nb3VzZUVudGVyLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMub25Nb3VzZUxlYXZlLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2tcbiAgICAgIH07XG5cbiAgICAgIHZhciB0b29sdGlwTm9kZSA9IHZvaWQgMDtcblxuICAgICAgaWYgKHRvb2x0aXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0b29sdGlwTm9kZSA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Ub29sdGlwMi5kZWZhdWx0LCB7XG4gICAgICAgICAgbGFiZWw6IHRvb2x0aXAsXG4gICAgICAgICAgc2hvdzogdGhpcy5zdGF0ZS5ob3ZlcmVkLFxuICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnRvb2x0aXAsIHRvb2x0aXBTdHlsZSlcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3RoJyxcbiAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCBzdHlsZSkpXG4gICAgICAgIH0sIGhhbmRsZXJzLCBvdGhlciksXG4gICAgICAgIHRvb2x0aXBOb2RlLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFRhYmxlSGVhZGVyQ29sdW1uO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuVGFibGVIZWFkZXJDb2x1bW4uY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblRhYmxlSGVhZGVyQ29sdW1uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIE51bWJlciB0byBpZGVudGlmeSB0aGUgaGVhZGVyIHJvdy4gVGhpcyBwcm9wZXJ0eVxuICAgKiBpcyBhdXRvbWF0aWNhbGx5IHBvcHVsYXRlZCB3aGVuIHVzZWQgd2l0aCBUYWJsZUhlYWRlci5cbiAgICovXG4gIGNvbHVtbk51bWJlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIE5vdCB1c2VkIGhlcmUgYnV0IHdlIG5lZWQgdG8gcmVtb3ZlIGl0IGZyb20gdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGhvdmVyYWJsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbkNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIE5vdCB1c2VkIGhlcmUgYnV0IHdlIG5lZWQgdG8gcmVtb3ZlIGl0IGZyb20gdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIG9uSG92ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogTm90IHVzZWQgaGVyZSBidXQgd2UgbmVlZCB0byByZW1vdmUgaXQgZnJvbSB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgb25Ib3ZlckV4aXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgc3RyaW5nIHRvIHN1cHBseSB0byB0aGUgdG9vbHRpcC4gSWYgbm90XG4gICAqIHN0cmluZyBpcyBzdXBwbGllZCBubyB0b29sdGlwIHdpbGwgYmUgc2hvd24uXG4gICAqL1xuICB0b29sdGlwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgc3R5bGluZyB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgdG9vbHRpcFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gVGFibGVIZWFkZXJDb2x1bW47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvVGFibGUvVGFibGVIZWFkZXJDb2x1bW4uanNcbi8vIG1vZHVsZSBpZCA9IDY3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfU2VsZWN0RmllbGQgPSByZXF1aXJlKCcuL1NlbGVjdEZpZWxkJyk7XG5cbnZhciBfU2VsZWN0RmllbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2VsZWN0RmllbGQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfU2VsZWN0RmllbGQyLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvU2VsZWN0RmllbGQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9UZXh0RmllbGQgPSByZXF1aXJlKCcuLi9UZXh0RmllbGQnKTtcblxudmFyIF9UZXh0RmllbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dEZpZWxkKTtcblxudmFyIF9Ecm9wRG93bk1lbnUgPSByZXF1aXJlKCcuLi9Ecm9wRG93bk1lbnUnKTtcblxudmFyIF9Ecm9wRG93bk1lbnUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcERvd25NZW51KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiAwLFxuICAgICAgdG9wOiBwcm9wcy5mbG9hdGluZ0xhYmVsVGV4dCA/IDYgOiAtNFxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgcmlnaHQ6IDAsXG4gICAgICB0b3A6IHByb3BzLmZsb2F0aW5nTGFiZWxUZXh0ID8gOCA6IDBcbiAgICB9LFxuICAgIGhpZGVEcm9wRG93blVuZGVybGluZToge1xuICAgICAgYm9yZGVyVG9wOiAnbm9uZSdcbiAgICB9LFxuICAgIGRyb3BEb3duTWVudToge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH1cbiAgfTtcbn1cblxudmFyIFNlbGVjdEZpZWxkID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoU2VsZWN0RmllbGQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNlbGVjdEZpZWxkKCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFNlbGVjdEZpZWxkKTtcbiAgICByZXR1cm4gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoU2VsZWN0RmllbGQuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFNlbGVjdEZpZWxkKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShTZWxlY3RGaWVsZCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhdXRvV2lkdGggPSBfcHJvcHMuYXV0b1dpZHRoLFxuICAgICAgICAgIG11bHRpcGxlID0gX3Byb3BzLm11bHRpcGxlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIGxhYmVsU3R5bGUgPSBfcHJvcHMubGFiZWxTdHlsZSxcbiAgICAgICAgICBpY29uU3R5bGUgPSBfcHJvcHMuaWNvblN0eWxlLFxuICAgICAgICAgIGlkID0gX3Byb3BzLmlkLFxuICAgICAgICAgIHVuZGVybGluZURpc2FibGVkU3R5bGUgPSBfcHJvcHMudW5kZXJsaW5lRGlzYWJsZWRTdHlsZSxcbiAgICAgICAgICB1bmRlcmxpbmVGb2N1c1N0eWxlID0gX3Byb3BzLnVuZGVybGluZUZvY3VzU3R5bGUsXG4gICAgICAgICAgbWVudUl0ZW1TdHlsZSA9IF9wcm9wcy5tZW51SXRlbVN0eWxlLFxuICAgICAgICAgIHNlbGVjdGVkTWVudUl0ZW1TdHlsZSA9IF9wcm9wcy5zZWxlY3RlZE1lbnVJdGVtU3R5bGUsXG4gICAgICAgICAgdW5kZXJsaW5lU3R5bGUgPSBfcHJvcHMudW5kZXJsaW5lU3R5bGUsXG4gICAgICAgICAgZHJvcERvd25NZW51UHJvcHMgPSBfcHJvcHMuZHJvcERvd25NZW51UHJvcHMsXG4gICAgICAgICAgZXJyb3JTdHlsZSA9IF9wcm9wcy5lcnJvclN0eWxlLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxGaXhlZCA9IF9wcm9wcy5mbG9hdGluZ0xhYmVsRml4ZWQsXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQgPSBfcHJvcHMuZmxvYXRpbmdMYWJlbFRleHQsXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbFN0eWxlID0gX3Byb3BzLmZsb2F0aW5nTGFiZWxTdHlsZSxcbiAgICAgICAgICBoaW50U3R5bGUgPSBfcHJvcHMuaGludFN0eWxlLFxuICAgICAgICAgIGhpbnRUZXh0ID0gX3Byb3BzLmhpbnRUZXh0LFxuICAgICAgICAgIGZ1bGxXaWR0aCA9IF9wcm9wcy5mdWxsV2lkdGgsXG4gICAgICAgICAgZXJyb3JUZXh0ID0gX3Byb3BzLmVycm9yVGV4dCxcbiAgICAgICAgICBsaXN0U3R5bGUgPSBfcHJvcHMubGlzdFN0eWxlLFxuICAgICAgICAgIG1heEhlaWdodCA9IF9wcm9wcy5tYXhIZWlnaHQsXG4gICAgICAgICAgbWVudVN0eWxlID0gX3Byb3BzLm1lbnVTdHlsZSxcbiAgICAgICAgICBvbkZvY3VzID0gX3Byb3BzLm9uRm9jdXMsXG4gICAgICAgICAgb25CbHVyID0gX3Byb3BzLm9uQmx1cixcbiAgICAgICAgICBvbkNoYW5nZSA9IF9wcm9wcy5vbkNoYW5nZSxcbiAgICAgICAgICBzZWxlY3Rpb25SZW5kZXJlciA9IF9wcm9wcy5zZWxlY3Rpb25SZW5kZXJlcixcbiAgICAgICAgICB2YWx1ZSA9IF9wcm9wcy52YWx1ZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydhdXRvV2lkdGgnLCAnbXVsdGlwbGUnLCAnY2hpbGRyZW4nLCAnc3R5bGUnLCAnbGFiZWxTdHlsZScsICdpY29uU3R5bGUnLCAnaWQnLCAndW5kZXJsaW5lRGlzYWJsZWRTdHlsZScsICd1bmRlcmxpbmVGb2N1c1N0eWxlJywgJ21lbnVJdGVtU3R5bGUnLCAnc2VsZWN0ZWRNZW51SXRlbVN0eWxlJywgJ3VuZGVybGluZVN0eWxlJywgJ2Ryb3BEb3duTWVudVByb3BzJywgJ2Vycm9yU3R5bGUnLCAnZGlzYWJsZWQnLCAnZmxvYXRpbmdMYWJlbEZpeGVkJywgJ2Zsb2F0aW5nTGFiZWxUZXh0JywgJ2Zsb2F0aW5nTGFiZWxTdHlsZScsICdoaW50U3R5bGUnLCAnaGludFRleHQnLCAnZnVsbFdpZHRoJywgJ2Vycm9yVGV4dCcsICdsaXN0U3R5bGUnLCAnbWF4SGVpZ2h0JywgJ21lbnVTdHlsZScsICdvbkZvY3VzJywgJ29uQmx1cicsICdvbkNoYW5nZScsICdzZWxlY3Rpb25SZW5kZXJlcicsICd2YWx1ZSddKTtcblxuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1RleHRGaWVsZDIuZGVmYXVsdCxcbiAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxGaXhlZDogZmxvYXRpbmdMYWJlbEZpeGVkLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0OiBmbG9hdGluZ0xhYmVsVGV4dCxcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsU3R5bGU6IGZsb2F0aW5nTGFiZWxTdHlsZSxcbiAgICAgICAgICBoaW50U3R5bGU6IGhpbnRTdHlsZSxcbiAgICAgICAgICBoaW50VGV4dDogIWhpbnRUZXh0ICYmICFmbG9hdGluZ0xhYmVsVGV4dCA/ICcgJyA6IGhpbnRUZXh0LFxuICAgICAgICAgIGZ1bGxXaWR0aDogZnVsbFdpZHRoLFxuICAgICAgICAgIGVycm9yVGV4dDogZXJyb3JUZXh0LFxuICAgICAgICAgIHVuZGVybGluZVN0eWxlOiB1bmRlcmxpbmVTdHlsZSxcbiAgICAgICAgICBlcnJvclN0eWxlOiBlcnJvclN0eWxlLFxuICAgICAgICAgIG9uRm9jdXM6IG9uRm9jdXMsXG4gICAgICAgICAgb25CbHVyOiBvbkJsdXIsXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIHVuZGVybGluZURpc2FibGVkU3R5bGU6IHVuZGVybGluZURpc2FibGVkU3R5bGUsXG4gICAgICAgICAgdW5kZXJsaW5lRm9jdXNTdHlsZTogdW5kZXJsaW5lRm9jdXNTdHlsZVxuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX0Ryb3BEb3duTWVudTIuZGVmYXVsdCxcbiAgICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHtcbiAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmRyb3BEb3duTWVudSwgbWVudVN0eWxlKSxcbiAgICAgICAgICAgIGxhYmVsU3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMubGFiZWwsIGxhYmVsU3R5bGUpLFxuICAgICAgICAgICAgaWNvblN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmljb24sIGljb25TdHlsZSksXG4gICAgICAgICAgICBtZW51SXRlbVN0eWxlOiBtZW51SXRlbVN0eWxlLFxuICAgICAgICAgICAgc2VsZWN0ZWRNZW51SXRlbVN0eWxlOiBzZWxlY3RlZE1lbnVJdGVtU3R5bGUsXG4gICAgICAgICAgICB1bmRlcmxpbmVTdHlsZTogc3R5bGVzLmhpZGVEcm9wRG93blVuZGVybGluZSxcbiAgICAgICAgICAgIGxpc3RTdHlsZTogbGlzdFN0eWxlLFxuICAgICAgICAgICAgYXV0b1dpZHRoOiBhdXRvV2lkdGgsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCxcbiAgICAgICAgICAgIG11bHRpcGxlOiBtdWx0aXBsZSxcbiAgICAgICAgICAgIHNlbGVjdGlvblJlbmRlcmVyOiBzZWxlY3Rpb25SZW5kZXJlclxuICAgICAgICAgIH0sIGRyb3BEb3duTWVudVByb3BzKSxcbiAgICAgICAgICBjaGlsZHJlblxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU2VsZWN0RmllbGQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5TZWxlY3RGaWVsZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGF1dG9XaWR0aDogZmFsc2UsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZnVsbFdpZHRoOiBmYWxzZSxcbiAgbXVsdGlwbGU6IGZhbHNlXG59O1xuU2VsZWN0RmllbGQuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblNlbGVjdEZpZWxkLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSB3aWR0aCB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgc2V0IGFjY29yZGluZyB0byB0aGVcbiAgICogaXRlbXMgaW5zaWRlIHRoZSBtZW51LlxuICAgKiBUbyBjb250cm9sIHRoZSB3aWR0aCBpbiBDU1MgaW5zdGVhZCwgbGVhdmUgdGhpcyBwcm9wIHNldCB0byBgZmFsc2VgLlxuICAgKi9cbiAgYXV0b1dpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgYE1lbnVJdGVtYCBlbGVtZW50cyB0byBwb3B1bGF0ZSB0aGUgc2VsZWN0IGZpZWxkIHdpdGguXG4gICAqIElmIHRoZSBtZW51IGl0ZW1zIGhhdmUgYSBgbGFiZWxgIHByb3AsIHRoYXQgdmFsdWUgd2lsbFxuICAgKiByZXByZXNlbnQgdGhlIHNlbGVjdGVkIG1lbnUgaXRlbSBpbiB0aGUgcmVuZGVyZWQgc2VsZWN0IGZpZWxkLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBzZWxlY3QgZmllbGQgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPYmplY3QgdGhhdCBjYW4gaGFuZGxlIGFuZCBvdmVycmlkZSBhbnkgcHJvcGVydHkgb2YgY29tcG9uZW50IERyb3BEb3duTWVudS5cbiAgICovXG4gIGRyb3BEb3duTWVudVByb3BzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBlcnJvciBlbGVtZW50LlxuICAgKi9cbiAgZXJyb3JTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgZXJyb3IgY29udGVudCB0byBkaXNwbGF5LlxuICAgKi9cbiAgZXJyb3JUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgZmxvYXRpbmcgbGFiZWwgd2lsbCBmbG9hdCBldmVuIHdoZW4gbm8gdmFsdWUgaXMgc2VsZWN0ZWQuXG4gICAqL1xuICBmbG9hdGluZ0xhYmVsRml4ZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICAqL1xuICBmbG9hdGluZ0xhYmVsVGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIHNlbGVjdCBmaWVsZCB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGZ1bGxXaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGhpbnQgZWxlbWVudC5cbiAgICovXG4gIGhpbnRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgaGludCBjb250ZW50IHRvIGRpc3BsYXkuXG4gICAqL1xuICBoaW50VGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGljb24gZWxlbWVudC5cbiAgICovXG4gIGljb25TdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgaWQgcHJvcCBmb3IgdGhlIHRleHQgZmllbGQuXG4gICAqL1xuICBpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgbGFiZWwgc3R5bGUgd2hlbiB0aGUgc2VsZWN0IGZpZWxkIGlzIGluYWN0aXZlLlxuICAgKi9cbiAgbGFiZWxTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdW5kZXJseWluZyBgTGlzdGAgZWxlbWVudC5cbiAgICovXG4gIGxpc3RTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBtYXgtaGVpZ2h0IG9mIHRoZSB1bmRlcmx5aW5nIGBEcm9wRG93bk1lbnVgIGVsZW1lbnQuXG4gICAqL1xuICBtYXhIZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgbWVudSBpdGVtcy5cbiAgICovXG4gIG1lbnVJdGVtU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHVuZGVybHlpbmcgYERyb3BEb3duTWVudWAgZWxlbWVudC5cbiAgICovXG4gIG1lbnVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBgdmFsdWVgIG11c3QgYmUgYW4gYXJyYXkgYW5kIHRoZSBtZW51IHdpbGwgc3VwcG9ydFxuICAgKiBtdWx0aXBsZSBzZWxlY3Rpb25zLlxuICAgKi9cbiAgbXVsdGlwbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25CbHVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIGEgbWVudSBpdGVtIGlzIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBtZW51IGl0ZW1cbiAgICogdGhhdCB3YXMgc2VsZWN0ZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBrZXkgVGhlIGluZGV4IG9mIHRoZSBzZWxlY3RlZCBtZW51IGl0ZW0sIG9yIHVuZGVmaW5lZFxuICAgKiBpZiBgbXVsdGlwbGVgIGlzIHRydWUuXG4gICAqIEBwYXJhbSB7YW55fSBwYXlsb2FkIElmIGBtdWx0aXBsZWAgaXMgdHJ1ZSwgdGhlIG1lbnUncyBgdmFsdWVgXG4gICAqIGFycmF5IHdpdGggZWl0aGVyIHRoZSBtZW51IGl0ZW0ncyBgdmFsdWVgIGFkZGVkIChpZlxuICAgKiBpdCB3YXNuJ3QgYWxyZWFkeSBzZWxlY3RlZCkgb3Igb21pdHRlZCAoaWYgaXQgd2FzIGFscmVhZHkgc2VsZWN0ZWQpLlxuICAgKiBPdGhlcndpc2UsIHRoZSBgdmFsdWVgIG9mIHRoZSBtZW51IGl0ZW0uXG4gICAqL1xuICBvbkNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbkZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiBzZWxlY3RlZCBtZW51IGl0ZW1zLlxuICAgKi9cbiAgc2VsZWN0ZWRNZW51SXRlbVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIEN1c3RvbWl6ZSB0aGUgcmVuZGVyaW5nIG9mIHRoZSBzZWxlY3RlZCBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgSWYgYG11bHRpcGxlYCBpcyB0cnVlLCB0aGUgbWVudSdzIGB2YWx1ZWBcbiAgICogYXJyYXkgd2l0aCBlaXRoZXIgdGhlIG1lbnUgaXRlbSdzIGB2YWx1ZWAgYWRkZWQgKGlmXG4gICAqIGl0IHdhc24ndCBhbHJlYWR5IHNlbGVjdGVkKSBvciBvbWl0dGVkIChpZiBpdCB3YXMgYWxyZWFkeSBzZWxlY3RlZCkuXG4gICAqIE90aGVyd2lzZSwgdGhlIGB2YWx1ZWAgb2YgdGhlIG1lbnUgaXRlbS5cbiAgICogQHBhcmFtIHthbnl9IG1lbnVJdGVtIFRoZSBzZWxlY3RlZCBgTWVudUl0ZW1gLlxuICAgKiBJZiBgbXVsdGlwbGVgIGlzIHRydWUsIHRoaXMgd2lsbCBiZSBhbiBhcnJheSB3aXRoIHRoZSBgTWVudUl0ZW1gcyBtYXRjaGluZyB0aGUgYHZhbHVlYHMgcGFyYW1ldGVyLlxuICAgKi9cbiAgc2VsZWN0aW9uUmVuZGVyZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdW5kZXJsaW5lIGVsZW1lbnQgd2hlbiB0aGUgc2VsZWN0XG4gICAqIGZpZWxkIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgdW5kZXJsaW5lRGlzYWJsZWRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdW5kZXJsaW5lIGVsZW1lbnQgd2hlbiB0aGUgc2VsZWN0IGZpZWxkXG4gICAqIGlzIGZvY3VzZWQuXG4gICAqL1xuICB1bmRlcmxpbmVGb2N1c1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSB1bmRlcmxpbmUgZWxlbWVudC5cbiAgICovXG4gIHVuZGVybGluZVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIGBtdWx0aXBsZWAgaXMgdHJ1ZSwgYW4gYXJyYXkgb2YgdGhlIGB2YWx1ZWBzIG9mIHRoZSBzZWxlY3RlZFxuICAgKiBtZW51IGl0ZW1zLiBPdGhlcndpc2UsIHRoZSBgdmFsdWVgIG9mIHRoZSBzZWxlY3RlZCBtZW51IGl0ZW0uXG4gICAqIElmIHByb3ZpZGVkLCB0aGUgbWVudSB3aWxsIGJlIGEgY29udHJvbGxlZCBjb21wb25lbnQuXG4gICAqL1xuICB2YWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnlcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNlbGVjdEZpZWxkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1NlbGVjdEZpZWxkL1NlbGVjdEZpZWxkLmpzXG4vLyBtb2R1bGUgaWQgPSA2ODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5NZW51SXRlbSA9IGV4cG9ydHMuRHJvcERvd25NZW51ID0gdW5kZWZpbmVkO1xuXG52YXIgX0Ryb3BEb3duTWVudTIgPSByZXF1aXJlKCcuL0Ryb3BEb3duTWVudScpO1xuXG52YXIgX0Ryb3BEb3duTWVudTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ecm9wRG93bk1lbnUyKTtcblxudmFyIF9NZW51SXRlbTIgPSByZXF1aXJlKCcuLi9NZW51SXRlbS9NZW51SXRlbScpO1xuXG52YXIgX01lbnVJdGVtMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnVJdGVtMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuRHJvcERvd25NZW51ID0gX0Ryb3BEb3duTWVudTMuZGVmYXVsdDtcbmV4cG9ydHMuTWVudUl0ZW0gPSBfTWVudUl0ZW0zLmRlZmF1bHQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfRHJvcERvd25NZW51My5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL0Ryb3BEb3duTWVudS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX2Fycm93RHJvcERvd24gPSByZXF1aXJlKCcuLi9zdmctaWNvbnMvbmF2aWdhdGlvbi9hcnJvdy1kcm9wLWRvd24nKTtcblxudmFyIF9hcnJvd0Ryb3BEb3duMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fycm93RHJvcERvd24pO1xuXG52YXIgX01lbnUgPSByZXF1aXJlKCcuLi9NZW51L01lbnUnKTtcblxudmFyIF9NZW51MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnUpO1xuXG52YXIgX0NsZWFyRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvQ2xlYXJGaXgnKTtcblxudmFyIF9DbGVhckZpeDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DbGVhckZpeCk7XG5cbnZhciBfUG9wb3ZlciA9IHJlcXVpcmUoJy4uL1BvcG92ZXIvUG9wb3ZlcicpO1xuXG52YXIgX1BvcG92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9wb3Zlcik7XG5cbnZhciBfUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsID0gcmVxdWlyZSgnLi4vUG9wb3Zlci9Qb3BvdmVyQW5pbWF0aW9uVmVydGljYWwnKTtcblxudmFyIF9Qb3BvdmVyQW5pbWF0aW9uVmVydGljYWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsKTtcblxudmFyIF9rZXljb2RlID0gcmVxdWlyZSgna2V5Y29kZScpO1xuXG52YXIgX2tleWNvZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5Y29kZSk7XG5cbnZhciBfZXZlbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvZXZlbnRzJyk7XG5cbnZhciBfZXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50cyk7XG5cbnZhciBfSWNvbkJ1dHRvbiA9IHJlcXVpcmUoJy4uL0ljb25CdXR0b24nKTtcblxudmFyIF9JY29uQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ljb25CdXR0b24pO1xuXG52YXIgX3Byb3BUeXBlczMgPSByZXF1aXJlKCcuLi91dGlscy9wcm9wVHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzMyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCkge1xuICB2YXIgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZDtcblxuICB2YXIgc3BhY2luZyA9IGNvbnRleHQubXVpVGhlbWUuYmFzZVRoZW1lLnNwYWNpbmc7XG4gIHZhciBwYWxldHRlID0gY29udGV4dC5tdWlUaGVtZS5iYXNlVGhlbWUucGFsZXR0ZTtcbiAgdmFyIGFjY2VudENvbG9yID0gY29udGV4dC5tdWlUaGVtZS5kcm9wRG93bk1lbnUuYWNjZW50Q29sb3I7XG4gIHJldHVybiB7XG4gICAgY29udHJvbDoge1xuICAgICAgY3Vyc29yOiBkaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcicsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgZmlsbDogYWNjZW50Q29sb3IsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHJpZ2h0OiBzcGFjaW5nLmRlc2t0b3BHdXR0ZXJMZXNzLFxuICAgICAgdG9wOiAoc3BhY2luZy5pY29uU2l6ZSAtIDI0KSAvIDIgKyBzcGFjaW5nLmRlc2t0b3BHdXR0ZXJNaW5pIC8gMlxuICAgIH0sXG4gICAgaWNvbkNoaWxkcmVuOiB7XG4gICAgICBmaWxsOiAnaW5oZXJpdCdcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICBjb2xvcjogZGlzYWJsZWQgPyBwYWxldHRlLmRpc2FibGVkQ29sb3IgOiBwYWxldHRlLnRleHRDb2xvcixcbiAgICAgIGhlaWdodDogc3BhY2luZy5kZXNrdG9wVG9vbGJhckhlaWdodCArICdweCcsXG4gICAgICBsaW5lSGVpZ2h0OiBzcGFjaW5nLmRlc2t0b3BUb29sYmFySGVpZ2h0ICsgJ3B4JyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nLmRlc2t0b3BHdXR0ZXIsXG4gICAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcuaWNvblNpemUgKiAyICsgc3BhY2luZy5kZXNrdG9wR3V0dGVyTWluaSxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gICAgfSxcbiAgICBsYWJlbFdoZW5PcGVuOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgdG9wOiBzcGFjaW5nLmRlc2t0b3BUb29sYmFySGVpZ2h0IC8gOFxuICAgIH0sXG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmb250U2l6ZTogc3BhY2luZy5kZXNrdG9wRHJvcERvd25NZW51Rm9udFNpemUsXG4gICAgICBoZWlnaHQ6IHNwYWNpbmcuZGVza3RvcFN1YmhlYWRlckhlaWdodCxcbiAgICAgIGZvbnRGYW1pbHk6IGNvbnRleHQubXVpVGhlbWUuYmFzZVRoZW1lLmZvbnRGYW1pbHksXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KClcbiAgICB9LFxuICAgIHJvb3RXaGVuT3Blbjoge1xuICAgICAgb3BhY2l0eTogMVxuICAgIH0sXG4gICAgdW5kZXJsaW5lOiB7XG4gICAgICBib3JkZXJUb3A6ICdzb2xpZCAxcHggJyArIGFjY2VudENvbG9yLFxuICAgICAgYm90dG9tOiAxLFxuICAgICAgbGVmdDogMCxcbiAgICAgIG1hcmdpbjogJy0xcHggJyArIHNwYWNpbmcuZGVza3RvcEd1dHRlciArICdweCcsXG4gICAgICByaWdodDogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfVxuICB9O1xufVxuXG52YXIgRHJvcERvd25NZW51ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoRHJvcERvd25NZW51LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEcm9wRG93bk1lbnUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgRHJvcERvd25NZW51KTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IERyb3BEb3duTWVudS5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoRHJvcERvd25NZW51KSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH0sIF90aGlzLnJvb3ROb2RlID0gdW5kZWZpbmVkLCBfdGhpcy5hcnJvd05vZGUgPSB1bmRlZmluZWQsIF90aGlzLmhhbmRsZVRvdWNoVGFwQ29udHJvbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICghX3RoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG9wZW46ICFfdGhpcy5zdGF0ZS5vcGVuLFxuICAgICAgICAgIGFuY2hvckVsOiBfdGhpcy5yb290Tm9kZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2VNZW51ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2xvc2UoZmFsc2UpO1xuICAgIH0sIF90aGlzLmhhbmRsZUVzY0tleURvd25NZW51ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2xvc2UodHJ1ZSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgc3dpdGNoICgoMCwgX2tleWNvZGUyLmRlZmF1bHQpKGV2ZW50KSkge1xuICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICBjYXNlICdzcGFjZSc6XG4gICAgICAgIGNhc2UgJ2VudGVyJzpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBhbmNob3JFbDogX3RoaXMucm9vdE5vZGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVJdGVtVG91Y2hUYXAgPSBmdW5jdGlvbiAoZXZlbnQsIGNoaWxkLCBpbmRleCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm11bHRpcGxlKSB7XG4gICAgICAgIGlmICghX3RoaXMuc3RhdGUub3Blbikge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnQucGVyc2lzdCgpO1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIGluZGV4LCBjaGlsZC5wcm9wcy52YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMuY2xvc2UoX2V2ZW50czIuZGVmYXVsdC5pc0tleWJvYXJkKGV2ZW50KSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCwgdmFsdWUpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5tdWx0aXBsZSAmJiBfdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdW5kZWZpbmVkLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuY2xvc2UgPSBmdW5jdGlvbiAoaXNLZXlib2FyZCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25DbG9zZSkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0tleWJvYXJkKSB7XG4gICAgICAgICAgdmFyIGRyb3BBcnJvdyA9IF90aGlzLmFycm93Tm9kZTtcbiAgICAgICAgICB2YXIgZHJvcE5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoZHJvcEFycm93KTtcbiAgICAgICAgICBkcm9wTm9kZS5mb2N1cygpO1xuICAgICAgICAgIGRyb3BBcnJvdy5zZXRLZXlib2FyZEZvY3VzKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgLy8gVGhlIG5lc3RlZCBzdHlsZXMgZm9yIGRyb3AtZG93bi1tZW51IGFyZSBtb2RpZmllZCBieSB0b29sYmFyIGFuZCBwb3NzaWJseVxuICAvLyBvdGhlciB1c2VyIGNvbXBvbmVudHMsIHNvIGl0IHdpbGwgZ2l2ZSBmdWxsIGFjY2VzcyB0byBpdHMganMgc3R5bGVzIHJhdGhlclxuICAvLyB0aGFuIGp1c3QgdGhlIHBhcmVudC5cblxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKERyb3BEb3duTWVudSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9XaWR0aCkge1xuICAgICAgICB0aGlzLnNldFdpZHRoKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5vcGVuSW1tZWRpYXRlbHkpIHtcbiAgICAgICAgLy8gVE9ETzogVGVtcG9yYXJ5IGZpeCB0byBtYWtlIG9wZW5JbW1lZGlhdGVseSB3b3JrIHdpdGggcG9wb3Zlci5cbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGlkLW1vdW50LXNldC1zdGF0ZSAqL1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBhbmNob3JFbDogX3RoaXMyLnJvb3ROb2RlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDApO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0L25vLWRpZC1tb3VudC1zZXQtc3RhdGUgKi9cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9XaWR0aCkge1xuICAgICAgICB0aGlzLnNldFdpZHRoKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SW5wdXROb2RlJyxcblxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgZGVwcmVjYXRlZCBidXQgc3RpbGwgaGVyZSBiZWNhdXNlIHRoZSBUZXh0RmllbGRcbiAgICAgKiBuZWVkIGl0IGluIG9yZGVyIHRvIHdvcmsuIFRPRE86IFRoYXQgd2lsbCBiZSBhZGRyZXNzZWQgbGF0ZXIuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldElucHV0Tm9kZSgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgcm9vdE5vZGUgPSB0aGlzLnJvb3ROb2RlO1xuXG4gICAgICByb290Tm9kZS5mb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFfdGhpczMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBfdGhpczMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbjogIV90aGlzMy5zdGF0ZS5vcGVuLFxuICAgICAgICAgICAgYW5jaG9yRWw6IF90aGlzMy5yb290Tm9kZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gcm9vdE5vZGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0V2lkdGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRXaWR0aCgpIHtcbiAgICAgIHZhciBlbCA9IHRoaXMucm9vdE5vZGU7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuc3R5bGUgfHwgIXRoaXMucHJvcHMuc3R5bGUuaGFzT3duUHJvcGVydHkoJ3dpZHRoJykpIHtcbiAgICAgICAgZWwuc3R5bGUud2lkdGggPSAnYXV0byc7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFuaW1hdGVkID0gX3Byb3BzLmFuaW1hdGVkLFxuICAgICAgICAgIGFuaW1hdGlvbiA9IF9wcm9wcy5hbmltYXRpb24sXG4gICAgICAgICAgYXV0b1dpZHRoID0gX3Byb3BzLmF1dG9XaWR0aCxcbiAgICAgICAgICBtdWx0aXBsZSA9IF9wcm9wcy5tdWx0aXBsZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICAgIGljb25TdHlsZSA9IF9wcm9wcy5pY29uU3R5bGUsXG4gICAgICAgICAgbGFiZWxTdHlsZSA9IF9wcm9wcy5sYWJlbFN0eWxlLFxuICAgICAgICAgIGxpc3RTdHlsZSA9IF9wcm9wcy5saXN0U3R5bGUsXG4gICAgICAgICAgbWF4SGVpZ2h0ID0gX3Byb3BzLm1heEhlaWdodCxcbiAgICAgICAgICBtZW51U3R5bGVQcm9wID0gX3Byb3BzLm1lbnVTdHlsZSxcbiAgICAgICAgICBzZWxlY3Rpb25SZW5kZXJlciA9IF9wcm9wcy5zZWxlY3Rpb25SZW5kZXJlcixcbiAgICAgICAgICBvbkNsb3NlID0gX3Byb3BzLm9uQ2xvc2UsXG4gICAgICAgICAgb3BlbkltbWVkaWF0ZWx5ID0gX3Byb3BzLm9wZW5JbW1lZGlhdGVseSxcbiAgICAgICAgICBtZW51SXRlbVN0eWxlID0gX3Byb3BzLm1lbnVJdGVtU3R5bGUsXG4gICAgICAgICAgc2VsZWN0ZWRNZW51SXRlbVN0eWxlID0gX3Byb3BzLnNlbGVjdGVkTWVudUl0ZW1TdHlsZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICB1bmRlcmxpbmVTdHlsZSA9IF9wcm9wcy51bmRlcmxpbmVTdHlsZSxcbiAgICAgICAgICB2YWx1ZSA9IF9wcm9wcy52YWx1ZSxcbiAgICAgICAgICBpY29uQnV0dG9uID0gX3Byb3BzLmljb25CdXR0b24sXG4gICAgICAgICAgYW5jaG9yT3JpZ2luID0gX3Byb3BzLmFuY2hvck9yaWdpbixcbiAgICAgICAgICB0YXJnZXRPcmlnaW4gPSBfcHJvcHMudGFyZ2V0T3JpZ2luLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2FuaW1hdGVkJywgJ2FuaW1hdGlvbicsICdhdXRvV2lkdGgnLCAnbXVsdGlwbGUnLCAnY2hpbGRyZW4nLCAnY2xhc3NOYW1lJywgJ2Rpc2FibGVkJywgJ2ljb25TdHlsZScsICdsYWJlbFN0eWxlJywgJ2xpc3RTdHlsZScsICdtYXhIZWlnaHQnLCAnbWVudVN0eWxlJywgJ3NlbGVjdGlvblJlbmRlcmVyJywgJ29uQ2xvc2UnLCAnb3BlbkltbWVkaWF0ZWx5JywgJ21lbnVJdGVtU3R5bGUnLCAnc2VsZWN0ZWRNZW51SXRlbVN0eWxlJywgJ3N0eWxlJywgJ3VuZGVybGluZVN0eWxlJywgJ3ZhbHVlJywgJ2ljb25CdXR0b24nLCAnYW5jaG9yT3JpZ2luJywgJ3RhcmdldE9yaWdpbiddKTtcbiAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGFuY2hvckVsID0gX3N0YXRlLmFuY2hvckVsLFxuICAgICAgICAgIG9wZW4gPSBfc3RhdGUub3BlbjtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcblxuICAgICAgdmFyIGRpc3BsYXlWYWx1ZSA9ICcnO1xuICAgICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgaWYgKGNoaWxkICYmIHZhbHVlID09PSBjaGlsZC5wcm9wcy52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHNlbGVjdGlvblJlbmRlcmVyKSB7XG4gICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZSA9IHNlbGVjdGlvblJlbmRlcmVyKHZhbHVlLCBjaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgbmVlZCB0byBiZSBpbXByb3ZlZCAoaW4gY2FzZSBwcmltYXJ5VGV4dCBpcyBhIG5vZGUpXG4gICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZSA9IGNoaWxkLnByb3BzLmxhYmVsIHx8IGNoaWxkLnByb3BzLnByaW1hcnlUZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICAgIHZhciBzZWxlY3Rpb25SZW5kZXJlckNoaWxkcmVuID0gW107XG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICBpZiAoY2hpbGQgJiYgdmFsdWUgJiYgdmFsdWUuaW5kZXhPZihjaGlsZC5wcm9wcy52YWx1ZSkgPiAtMSkge1xuICAgICAgICAgICAgaWYgKHNlbGVjdGlvblJlbmRlcmVyKSB7XG4gICAgICAgICAgICAgIHZhbHVlcy5wdXNoKGNoaWxkLnByb3BzLnZhbHVlKTtcbiAgICAgICAgICAgICAgc2VsZWN0aW9uUmVuZGVyZXJDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbHVlcy5wdXNoKGNoaWxkLnByb3BzLmxhYmVsIHx8IGNoaWxkLnByb3BzLnByaW1hcnlUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpc3BsYXlWYWx1ZSA9IFtdO1xuICAgICAgICBpZiAoc2VsZWN0aW9uUmVuZGVyZXIpIHtcbiAgICAgICAgICBkaXNwbGF5VmFsdWUgPSBzZWxlY3Rpb25SZW5kZXJlcih2YWx1ZXMsIHNlbGVjdGlvblJlbmRlcmVyQ2hpbGRyZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BsYXlWYWx1ZSA9IHZhbHVlcy5qb2luKCcsICcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBtZW51U3R5bGUgPSB2b2lkIDA7XG4gICAgICBpZiAoYW5jaG9yRWwgJiYgIWF1dG9XaWR0aCkge1xuICAgICAgICBtZW51U3R5bGUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe1xuICAgICAgICAgIHdpZHRoOiBhbmNob3JFbC5jbGllbnRXaWR0aFxuICAgICAgICB9LCBtZW51U3R5bGVQcm9wKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbnVTdHlsZSA9IG1lbnVTdHlsZVByb3A7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7XG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xuICAgICAgICAgICAgX3RoaXM0LnJvb3ROb2RlID0gbm9kZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLnJvb3QsIG9wZW4gJiYgc3R5bGVzLnJvb3RXaGVuT3Blbiwgc3R5bGUpKVxuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX0NsZWFyRml4Mi5kZWZhdWx0LFxuICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5jb250cm9sLCBvblRvdWNoVGFwOiB0aGlzLmhhbmRsZVRvdWNoVGFwQ29udHJvbCB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLmxhYmVsLCBvcGVuICYmIHN0eWxlcy5sYWJlbFdoZW5PcGVuLCBsYWJlbFN0eWxlKSkgfSxcbiAgICAgICAgICAgIGRpc3BsYXlWYWx1ZVxuICAgICAgICAgICksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBfSWNvbkJ1dHRvbjIuZGVmYXVsdCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xuICAgICAgICAgICAgICAgIF90aGlzNC5hcnJvd05vZGUgPSBub2RlO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuaWNvbiwgaWNvblN0eWxlKSxcbiAgICAgICAgICAgICAgaWNvblN0eWxlOiBzdHlsZXMuaWNvbkNoaWxkcmVuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbkJ1dHRvblxuICAgICAgICAgICksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMudW5kZXJsaW5lLCB1bmRlcmxpbmVTdHlsZSkpIH0pXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9Qb3BvdmVyMi5kZWZhdWx0LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFuY2hvck9yaWdpbjogYW5jaG9yT3JpZ2luLFxuICAgICAgICAgICAgdGFyZ2V0T3JpZ2luOiB0YXJnZXRPcmlnaW4sXG4gICAgICAgICAgICBhbmNob3JFbDogYW5jaG9yRWwsXG4gICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGlvbiB8fCBfUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsMi5kZWZhdWx0LFxuICAgICAgICAgICAgb3Blbjogb3BlbixcbiAgICAgICAgICAgIGFuaW1hdGVkOiBhbmltYXRlZCxcbiAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlOiB0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZU1lbnVcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX01lbnUyLmRlZmF1bHQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG11bHRpcGxlOiBtdWx0aXBsZSxcbiAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHQsXG4gICAgICAgICAgICAgIGRlc2t0b3A6IHRydWUsXG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgb25Fc2NLZXlEb3duOiB0aGlzLmhhbmRsZUVzY0tleURvd25NZW51LFxuICAgICAgICAgICAgICBzdHlsZTogbWVudVN0eWxlLFxuICAgICAgICAgICAgICBsaXN0U3R5bGU6IGxpc3RTdHlsZSxcbiAgICAgICAgICAgICAgb25JdGVtVG91Y2hUYXA6IHRoaXMuaGFuZGxlSXRlbVRvdWNoVGFwLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgIG1lbnVJdGVtU3R5bGU6IG1lbnVJdGVtU3R5bGUsXG4gICAgICAgICAgICAgIHNlbGVjdGVkTWVudUl0ZW1TdHlsZTogc2VsZWN0ZWRNZW51SXRlbVN0eWxlLFxuICAgICAgICAgICAgICBhdXRvV2lkdGg6IGF1dG9XaWR0aCxcbiAgICAgICAgICAgICAgd2lkdGg6ICFhdXRvV2lkdGggJiYgbWVudVN0eWxlID8gbWVudVN0eWxlLndpZHRoIDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRHJvcERvd25NZW51O1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuRHJvcERvd25NZW51Lm11aU5hbWUgPSAnRHJvcERvd25NZW51JztcbkRyb3BEb3duTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFuaW1hdGVkOiB0cnVlLFxuICBhdXRvV2lkdGg6IHRydWUsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgaWNvbkJ1dHRvbjogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2Fycm93RHJvcERvd24yLmRlZmF1bHQsIG51bGwpLFxuICBvcGVuSW1tZWRpYXRlbHk6IGZhbHNlLFxuICBtYXhIZWlnaHQ6IDUwMCxcbiAgbXVsdGlwbGU6IGZhbHNlLFxuICBhbmNob3JPcmlnaW46IHtcbiAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgaG9yaXpvbnRhbDogJ2xlZnQnXG4gIH1cbn07XG5Ecm9wRG93bk1lbnUuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcbkRyb3BEb3duTWVudS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBwb2ludCBvbiB0aGUgYW5jaG9yIHRoYXQgdGhlIHBvcG92ZXInc1xuICAgKiBgdGFyZ2V0T3JpZ2luYCB3aWxsIGF0dGFjaCB0by5cbiAgICogT3B0aW9uczpcbiAgICogdmVydGljYWw6IFt0b3AsIGNlbnRlciwgYm90dG9tXVxuICAgKiBob3Jpem9udGFsOiBbbGVmdCwgbWlkZGxlLCByaWdodF0uXG4gICAqL1xuICBhbmNob3JPcmlnaW46IF9wcm9wVHlwZXM0LmRlZmF1bHQub3JpZ2luLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIHBvcG92ZXIgd2lsbCBhcHBseSB0cmFuc2l0aW9ucyB3aGVuXG4gICAqIGl0IGdldHMgYWRkZWQgdG8gdGhlIERPTS5cbiAgICovXG4gIGFuaW1hdGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBhbmltYXRpb24gY29tcG9uZW50IHVzZWQuXG4gICAqL1xuICBhbmltYXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIFRoZSB3aWR0aCB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgc2V0IGFjY29yZGluZyB0byB0aGUgaXRlbXMgaW5zaWRlIHRoZSBtZW51LlxuICAgKiBUbyBjb250cm9sIHRoaXMgd2lkdGggaW4gY3NzIGluc3RlYWQsIHNldCB0aGlzIHByb3AgdG8gYGZhbHNlYC5cbiAgICovXG4gIGF1dG9XaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIGBNZW51SXRlbWBzIHRvIHBvcHVsYXRlIHRoZSBgTWVudWAgd2l0aC4gSWYgdGhlIGBNZW51SXRlbXNgIGhhdmUgdGhlXG4gICAqIHByb3AgYGxhYmVsYCB0aGF0IHZhbHVlIHdpbGwgYmUgdXNlZCB0byByZW5kZXIgdGhlIHJlcHJlc2VudGF0aW9uIG9mIHRoYXRcbiAgICogaXRlbSB3aXRoaW4gdGhlIGZpZWxkLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBtZW51LlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlcyBkZWZhdWx0IGBTdmdJY29uYCBkcm9wZG93biBhcnJvdyBjb21wb25lbnQuXG4gICAqL1xuICBpY29uQnV0dG9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIHN0eWxlcyBvZiBpY29uIGVsZW1lbnQuXG4gICAqL1xuICBpY29uU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSBzdHlsZXMgb2YgbGFiZWwgd2hlbiB0aGUgYERyb3BEb3duTWVudWAgaXMgaW5hY3RpdmUuXG4gICAqL1xuICBsYWJlbFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBvYmplY3QgdG8gdXNlIHRvIG92ZXJyaWRlIHVuZGVybHlpbmcgbGlzdCBzdHlsZS5cbiAgICovXG4gIGxpc3RTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBoZWlnaHQgb2YgdGhlIGBNZW51YCB3aGVuIGl0IGlzIGRpc3BsYXllZC5cbiAgICovXG4gIG1heEhlaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiBtZW51IGl0ZW1zLlxuICAgKi9cbiAgbWVudUl0ZW1TdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIHN0eWxlcyBvZiBgTWVudWAgd2hlbiB0aGUgYERyb3BEb3duTWVudWAgaXMgZGlzcGxheWVkLlxuICAgKi9cbiAgbWVudVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIHRydWUsIGB2YWx1ZWAgbXVzdCBiZSBhbiBhcnJheSBhbmQgdGhlIG1lbnUgd2lsbCBzdXBwb3J0XG4gICAqIG11bHRpcGxlIHNlbGVjdGlvbnMuXG4gICAqL1xuICBtdWx0aXBsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiBhIG1lbnUgaXRlbSBpcyBjbGlja2VkLCBvdGhlciB0aGFuIHRoZSBvbmUgY3VycmVudGx5IHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBtZW51IGl0ZW0gdGhhdCB3YXMgY2xpY2tlZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGtleSBUaGUgaW5kZXggb2YgdGhlIGNsaWNrZWQgbWVudSBpdGVtIGluIHRoZSBgY2hpbGRyZW5gIGNvbGxlY3Rpb24uXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZSBJZiBgbXVsdGlwbGVgIGlzIHRydWUsIHRoZSBtZW51J3MgYHZhbHVlYFxuICAgKiBhcnJheSB3aXRoIGVpdGhlciB0aGUgbWVudSBpdGVtJ3MgYHZhbHVlYCBhZGRlZCAoaWZcbiAgICogaXQgd2Fzbid0IGFscmVhZHkgc2VsZWN0ZWQpIG9yIG9taXR0ZWQgKGlmIGl0IHdhcyBhbHJlYWR5IHNlbGVjdGVkKS5cbiAgICogT3RoZXJ3aXNlLCB0aGUgYHZhbHVlYCBvZiB0aGUgbWVudSBpdGVtLlxuICAgKi9cbiAgb25DaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gdGhlIG1lbnUgaXMgY2xvc2VkLlxuICAgKi9cbiAgb25DbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gaGF2ZSB0aGUgYERyb3BEb3duTWVudWAgYXV0b21hdGljYWxseSBvcGVuIG9uIG1vdW50LlxuICAgKi9cbiAgb3BlbkltbWVkaWF0ZWx5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiBzZWxlY3RlZCBtZW51IGl0ZW1zLlxuICAgKi9cbiAgc2VsZWN0ZWRNZW51SXRlbVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gYSBtZW51IGl0ZW0gaXMgY2xpY2tlZCwgb3RoZXIgdGhhbiB0aGUgb25lIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlIElmIGBtdWx0aXBsZWAgaXMgdHJ1ZSwgdGhlIG1lbnUncyBgdmFsdWVgXG4gICAqIGFycmF5IHdpdGggZWl0aGVyIHRoZSBtZW51IGl0ZW0ncyBgdmFsdWVgIGFkZGVkIChpZlxuICAgKiBpdCB3YXNuJ3QgYWxyZWFkeSBzZWxlY3RlZCkgb3Igb21pdHRlZCAoaWYgaXQgd2FzIGFscmVhZHkgc2VsZWN0ZWQpLlxuICAgKiBPdGhlcndpc2UsIHRoZSBgdmFsdWVgIG9mIHRoZSBtZW51IGl0ZW0uXG4gICAqIEBwYXJhbSB7YW55fSBtZW51SXRlbSBUaGUgc2VsZWN0ZWQgYE1lbnVJdGVtYC5cbiAgICogSWYgYG11bHRpcGxlYCBpcyB0cnVlLCB0aGlzIHdpbGwgYmUgYW4gYXJyYXkgd2l0aCB0aGUgYE1lbnVJdGVtYHMgbWF0Y2hpbmcgdGhlIGB2YWx1ZWBzIHBhcmFtZXRlci5cbiAgICovXG4gIHNlbGVjdGlvblJlbmRlcmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgcG9pbnQgb24gdGhlIHBvcG92ZXIgd2hpY2ggd2lsbCBhdHRhY2ggdG9cbiAgICogdGhlIGFuY2hvcidzIG9yaWdpbi5cbiAgICogT3B0aW9uczpcbiAgICogdmVydGljYWw6IFt0b3AsIGNlbnRlciwgYm90dG9tXVxuICAgKiBob3Jpem9udGFsOiBbbGVmdCwgbWlkZGxlLCByaWdodF0uXG4gICAqL1xuICB0YXJnZXRPcmlnaW46IF9wcm9wVHlwZXM0LmRlZmF1bHQub3JpZ2luLFxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSB1bmRlcmxpbmUuXG4gICAqL1xuICB1bmRlcmxpbmVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiBgbXVsdGlwbGVgIGlzIHRydWUsIGFuIGFycmF5IG9mIHRoZSBgdmFsdWVgcyBvZiB0aGUgc2VsZWN0ZWRcbiAgICogbWVudSBpdGVtcy4gT3RoZXJ3aXNlLCB0aGUgYHZhbHVlYCBvZiB0aGUgc2VsZWN0ZWQgbWVudSBpdGVtLlxuICAgKiBJZiBwcm92aWRlZCwgdGhlIG1lbnUgd2lsbCBiZSBhIGNvbnRyb2xsZWQgY29tcG9uZW50LlxuICAgKi9cbiAgdmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBEcm9wRG93bk1lbnU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvRHJvcERvd25NZW51L0Ryb3BEb3duTWVudS5qc1xuLy8gbW9kdWxlIGlkID0gNjg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3B1cmUgPSByZXF1aXJlKCdyZWNvbXBvc2UvcHVyZScpO1xuXG52YXIgX3B1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHVyZSk7XG5cbnZhciBfU3ZnSWNvbiA9IHJlcXVpcmUoJy4uLy4uL1N2Z0ljb24nKTtcblxudmFyIF9TdmdJY29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N2Z0ljb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTmF2aWdhdGlvbkFycm93RHJvcERvd24gPSBmdW5jdGlvbiBOYXZpZ2F0aW9uQXJyb3dEcm9wRG93bihwcm9wcykge1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX1N2Z0ljb24yLmRlZmF1bHQsXG4gICAgcHJvcHMsXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdNNyAxMGw1IDUgNS01eicgfSlcbiAgKTtcbn07XG5OYXZpZ2F0aW9uQXJyb3dEcm9wRG93biA9ICgwLCBfcHVyZTIuZGVmYXVsdCkoTmF2aWdhdGlvbkFycm93RHJvcERvd24pO1xuTmF2aWdhdGlvbkFycm93RHJvcERvd24uZGlzcGxheU5hbWUgPSAnTmF2aWdhdGlvbkFycm93RHJvcERvd24nO1xuTmF2aWdhdGlvbkFycm93RHJvcERvd24ubXVpTmFtZSA9ICdTdmdJY29uJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gTmF2aWdhdGlvbkFycm93RHJvcERvd247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvc3ZnLWljb25zL25hdmlnYXRpb24vYXJyb3ctZHJvcC1kb3duLmpzXG4vLyBtb2R1bGUgaWQgPSA2ODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX0JlZm9yZUFmdGVyV3JhcHBlciA9IHJlcXVpcmUoJy4vQmVmb3JlQWZ0ZXJXcmFwcGVyJyk7XG5cbnZhciBfQmVmb3JlQWZ0ZXJXcmFwcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JlZm9yZUFmdGVyV3JhcHBlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzdHlsZXMgPSB7XG4gIGJlZm9yZToge1xuICAgIGNvbnRlbnQ6IFwiJyAnXCIsXG4gICAgZGlzcGxheTogJ3RhYmxlJ1xuICB9LFxuICBhZnRlcjoge1xuICAgIGNvbnRlbnQ6IFwiJyAnXCIsXG4gICAgY2xlYXI6ICdib3RoJyxcbiAgICBkaXNwbGF5OiAndGFibGUnXG4gIH1cbn07XG5cbnZhciBDbGVhckZpeCA9IGZ1bmN0aW9uIENsZWFyRml4KF9yZWYpIHtcbiAgdmFyIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3JlZiwgWydzdHlsZScsICdjaGlsZHJlbiddKTtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgIF9CZWZvcmVBZnRlcldyYXBwZXIyLmRlZmF1bHQsXG4gICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgIGJlZm9yZVN0eWxlOiBzdHlsZXMuYmVmb3JlLFxuICAgICAgYWZ0ZXJTdHlsZTogc3R5bGVzLmFmdGVyLFxuICAgICAgc3R5bGU6IHN0eWxlXG4gICAgfSksXG4gICAgY2hpbGRyZW5cbiAgKTtcbn07XG5cbkNsZWFyRml4Lm11aU5hbWUgPSAnQ2xlYXJGaXgnO1xuXG5DbGVhckZpeC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENsZWFyRml4O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL2ludGVybmFsL0NsZWFyRml4LmpzXG4vLyBtb2R1bGUgaWQgPSA2ODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiAgQmVmb3JlQWZ0ZXJXcmFwcGVyXG4gKiAgICBBbiBhbHRlcm5hdGl2ZSBmb3IgdGhlIDo6YmVmb3JlIGFuZCA6OmFmdGVyIGNzcyBwc2V1ZG8tZWxlbWVudHMgZm9yXG4gKiAgICBjb21wb25lbnRzIHdob3NlIHN0eWxlcyBhcmUgZGVmaW5lZCBpbiBqYXZhc2NyaXB0IGluc3RlYWQgb2YgY3NzLlxuICpcbiAqICBVc2FnZTogRm9yIHRoZSBlbGVtZW50IHRoYXQgd2Ugd2FudCB0byBhcHBseSBiZWZvcmUgYW5kIGFmdGVyIGVsZW1lbnRzIHRvLFxuICogICAgd3JhcCBpdHMgY2hpbGRyZW4gd2l0aCBCZWZvcmVBZnRlcldyYXBwZXIuIEZvciBleGFtcGxlOlxuICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXI+XG4gKiAgPFBhcGVyPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiAvLyBTZWUgbm90aWNlXG4gKiAgICA8QmVmb3JlQWZ0ZXJXcmFwcGVyPiAgICAgICAgcmVuZGVycyAgICAgICAgIDxkaXYvPiAvLyBiZWZvcmUgZWxlbWVudFxuICogICAgICBbY2hpbGRyZW4gb2YgcGFwZXJdICAgICAgIC0tLS0tLT4gICAgICAgICBbY2hpbGRyZW4gb2YgcGFwZXJdXG4gKiAgICA8L0JlZm9yZUFmdGVyV3JhcHBlcj4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYvPiAvLyBhZnRlciBlbGVtZW50XG4gKiAgPC9QYXBlcj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICpcbiAqICBOb3RpY2U6IE5vdGljZSB0aGF0IHRoaXMgZGl2IGJ1bmRsZXMgdG9nZXRoZXIgb3VyIGVsZW1lbnRzLiBJZiB0aGUgZWxlbWVudFxuICogICAgdGhhdCB3ZSB3YW50IHRvIGFwcGx5IGJlZm9yZSBhbmQgYWZ0ZXIgZWxlbWVudHMgaXMgYSBIVE1MIHRhZyAoaS5lLiBhXG4gKiAgICBkaXYsIHAsIG9yIGJ1dHRvbiB0YWcpLCB3ZSBjYW4gYXZvaWQgdGhpcyBleHRyYSBuZXN0aW5nIGJ5IHBhc3NpbmcgdXNpbmdcbiAqICAgIHRoZSBCZWZvcmVBZnRlcldyYXBwZXIgaW4gcGxhY2Ugb2Ygc2FpZCB0YWcgbGlrZSBzbzpcbiAqXG4gKiAgPHA+XG4gKiAgICA8QmVmb3JlQWZ0ZXJXcmFwcGVyPiAgIGRvIHRoaXMgaW5zdGVhZCAgIDxCZWZvcmVBZnRlcldyYXBwZXIgZWxlbWVudFR5cGU9J3AnPlxuICogICAgICBbY2hpbGRyZW4gb2YgcF0gICAgICAgICAgLS0tLS0tPiAgICAgICAgIFtjaGlsZHJlbiBvZiBwXVxuICogICAgPC9CZWZvcmVBZnRlcldyYXBwZXI+ICAgICAgICAgICAgICAgICAgICA8L0JlZm9yZUFmdGVyV3JhcHBlcj5cbiAqICA8L3A+XG4gKlxuICogIEJlZm9yZUFmdGVyV3JhcHBlciBmZWF0dXJlcyBzcHJlYWQgZnVuY3Rpb25hbGl0eS4gVGhpcyBtZWFucyB0aGF0IHdlIGNhblxuICogIHBhc3MgSFRNTCB0YWcgcHJvcGVydGllcyBkaXJlY3RseSBpbnRvIHRoZSBCZWZvcmVBZnRlcldyYXBwZXIgdGFnLlxuICpcbiAqICBXaGVuIHVzaW5nIEJlZm9yZUFmdGVyV3JhcHBlciwgZW5zdXJlIHRoYXQgdGhlIHBhcmVudCBvZiB0aGUgYmVmb3JlRWxlbWVudFxuICogIGFuZCBhZnRlckVsZW1lbnQgaGF2ZSBhIGRlZmluZWQgc3R5bGUgcG9zaXRpb24uXG4gKi9cblxudmFyIHN0eWxlcyA9IHtcbiAgYm94OiB7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgfVxufTtcblxudmFyIEJlZm9yZUFmdGVyV3JhcHBlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKEJlZm9yZUFmdGVyV3JhcHBlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQmVmb3JlQWZ0ZXJXcmFwcGVyKCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEJlZm9yZUFmdGVyV3JhcHBlcik7XG4gICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKEJlZm9yZUFmdGVyV3JhcHBlci5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoQmVmb3JlQWZ0ZXJXcmFwcGVyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShCZWZvcmVBZnRlcldyYXBwZXIsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYmVmb3JlU3R5bGUgPSBfcHJvcHMuYmVmb3JlU3R5bGUsXG4gICAgICAgICAgYWZ0ZXJTdHlsZSA9IF9wcm9wcy5hZnRlclN0eWxlLFxuICAgICAgICAgIGJlZm9yZUVsZW1lbnRUeXBlID0gX3Byb3BzLmJlZm9yZUVsZW1lbnRUeXBlLFxuICAgICAgICAgIGFmdGVyRWxlbWVudFR5cGUgPSBfcHJvcHMuYWZ0ZXJFbGVtZW50VHlwZSxcbiAgICAgICAgICBlbGVtZW50VHlwZSA9IF9wcm9wcy5lbGVtZW50VHlwZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydiZWZvcmVTdHlsZScsICdhZnRlclN0eWxlJywgJ2JlZm9yZUVsZW1lbnRUeXBlJywgJ2FmdGVyRWxlbWVudFR5cGUnLCAnZWxlbWVudFR5cGUnXSk7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG5cbiAgICAgIHZhciBiZWZvcmVFbGVtZW50ID0gdm9pZCAwO1xuICAgICAgdmFyIGFmdGVyRWxlbWVudCA9IHZvaWQgMDtcblxuICAgICAgaWYgKGJlZm9yZVN0eWxlKSB7XG4gICAgICAgIGJlZm9yZUVsZW1lbnQgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmJlZm9yZUVsZW1lbnRUeXBlLCB7XG4gICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuYm94LCBiZWZvcmVTdHlsZSkpLFxuICAgICAgICAgIGtleTogJzo6YmVmb3JlJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFmdGVyU3R5bGUpIHtcbiAgICAgICAgYWZ0ZXJFbGVtZW50ID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5hZnRlckVsZW1lbnRUeXBlLCB7XG4gICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuYm94LCBhZnRlclN0eWxlKSksXG4gICAgICAgICAga2V5OiAnOjphZnRlcidcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZHJlbiA9IFtiZWZvcmVFbGVtZW50LCB0aGlzLnByb3BzLmNoaWxkcmVuLCBhZnRlckVsZW1lbnRdO1xuXG4gICAgICB2YXIgcHJvcHMgPSBvdGhlcjtcbiAgICAgIHByb3BzLnN0eWxlID0gcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHRoaXMucHJvcHMuc3R5bGUpKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMuZWxlbWVudFR5cGUsIHByb3BzLCBjaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBCZWZvcmVBZnRlcldyYXBwZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5CZWZvcmVBZnRlcldyYXBwZXIuZGVmYXVsdFByb3BzID0ge1xuICBiZWZvcmVFbGVtZW50VHlwZTogJ2RpdicsXG4gIGFmdGVyRWxlbWVudFR5cGU6ICdkaXYnLFxuICBlbGVtZW50VHlwZTogJ2Rpdidcbn07XG5CZWZvcmVBZnRlcldyYXBwZXIuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcbkJlZm9yZUFmdGVyV3JhcHBlci5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGFmdGVyRWxlbWVudFR5cGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBhZnRlclN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgYmVmb3JlRWxlbWVudFR5cGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBiZWZvcmVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIGVsZW1lbnRUeXBlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IEJlZm9yZUFmdGVyV3JhcHBlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9pbnRlcm5hbC9CZWZvcmVBZnRlcldyYXBwZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9QYXBlciA9IHJlcXVpcmUoJy4uL1BhcGVyJyk7XG5cbnZhciBfUGFwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFwZXIpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX3Byb3BUeXBlczMgPSByZXF1aXJlKCcuLi91dGlscy9wcm9wVHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzMyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCwgc3RhdGUpIHtcbiAgdmFyIHRhcmdldE9yaWdpbiA9IHByb3BzLnRhcmdldE9yaWdpbjtcbiAgdmFyIG9wZW4gPSBzdGF0ZS5vcGVuO1xuICB2YXIgbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lO1xuXG4gIHZhciBob3Jpem9udGFsID0gdGFyZ2V0T3JpZ2luLmhvcml6b250YWwucmVwbGFjZSgnbWlkZGxlJywgJ3ZlcnRpY2FsJyk7XG5cbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIHpJbmRleDogbXVpVGhlbWUuekluZGV4LnBvcG92ZXIsXG4gICAgICBvcGFjaXR5OiBvcGVuID8gMSA6IDAsXG4gICAgICB0cmFuc2Zvcm06IG9wZW4gPyAnc2NhbGVZKDEpJyA6ICdzY2FsZVkoMCknLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiBob3Jpem9udGFsICsgJyAnICsgdGFyZ2V0T3JpZ2luLnZlcnRpY2FsLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzQ1MG1zJywgWyd0cmFuc2Zvcm0nLCAnb3BhY2l0eSddKSxcbiAgICAgIG1heEhlaWdodDogJzEwMCUnXG4gICAgfVxuICB9O1xufVxuXG52YXIgUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQb3BvdmVyQW5pbWF0aW9uVmVydGljYWwoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbC5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShQb3BvdmVyQW5pbWF0aW9uVmVydGljYWwsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L25vLWRpZC1tb3VudC1zZXQtc3RhdGVcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVuOiBuZXh0UHJvcHMub3BlblxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICB6RGVwdGggPSBfcHJvcHMuekRlcHRoO1xuXG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzLnN0YXRlKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfUGFwZXIyLmRlZmF1bHQsXG4gICAgICAgIHtcbiAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCBzdHlsZSksXG4gICAgICAgICAgekRlcHRoOiB6RGVwdGgsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7fSxcbiAgekRlcHRoOiAxXG59O1xuUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5Qb3BvdmVyQW5pbWF0aW9uVmVydGljYWwucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBvcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHRhcmdldE9yaWdpbjogX3Byb3BUeXBlczQuZGVmYXVsdC5vcmlnaW4uaXNSZXF1aXJlZCxcbiAgekRlcHRoOiBfcHJvcFR5cGVzNC5kZWZhdWx0LnpEZXB0aFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1BvcG92ZXIvUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsLmpzXG4vLyBtb2R1bGUgaWQgPSA2ODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5UYWJsZVJvd0NvbHVtbiA9IGV4cG9ydHMuVGFibGVSb3cgPSBleHBvcnRzLlRhYmxlSGVhZGVyQ29sdW1uID0gZXhwb3J0cy5UYWJsZUhlYWRlciA9IGV4cG9ydHMuVGFibGVGb290ZXIgPSBleHBvcnRzLlRhYmxlQm9keSA9IGV4cG9ydHMuVGFibGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfVGFibGUyID0gcmVxdWlyZSgnLi9UYWJsZScpO1xuXG52YXIgX1RhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RhYmxlMik7XG5cbnZhciBfVGFibGVCb2R5MiA9IHJlcXVpcmUoJy4vVGFibGVCb2R5Jyk7XG5cbnZhciBfVGFibGVCb2R5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RhYmxlQm9keTIpO1xuXG52YXIgX1RhYmxlRm9vdGVyMiA9IHJlcXVpcmUoJy4vVGFibGVGb290ZXInKTtcblxudmFyIF9UYWJsZUZvb3RlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYWJsZUZvb3RlcjIpO1xuXG52YXIgX1RhYmxlSGVhZGVyMiA9IHJlcXVpcmUoJy4vVGFibGVIZWFkZXInKTtcblxudmFyIF9UYWJsZUhlYWRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYWJsZUhlYWRlcjIpO1xuXG52YXIgX1RhYmxlSGVhZGVyQ29sdW1uMiA9IHJlcXVpcmUoJy4vVGFibGVIZWFkZXJDb2x1bW4nKTtcblxudmFyIF9UYWJsZUhlYWRlckNvbHVtbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYWJsZUhlYWRlckNvbHVtbjIpO1xuXG52YXIgX1RhYmxlUm93MiA9IHJlcXVpcmUoJy4vVGFibGVSb3cnKTtcblxudmFyIF9UYWJsZVJvdzMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYWJsZVJvdzIpO1xuXG52YXIgX1RhYmxlUm93Q29sdW1uMiA9IHJlcXVpcmUoJy4vVGFibGVSb3dDb2x1bW4nKTtcblxudmFyIF9UYWJsZVJvd0NvbHVtbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYWJsZVJvd0NvbHVtbjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLlRhYmxlID0gX1RhYmxlMy5kZWZhdWx0O1xuZXhwb3J0cy5UYWJsZUJvZHkgPSBfVGFibGVCb2R5My5kZWZhdWx0O1xuZXhwb3J0cy5UYWJsZUZvb3RlciA9IF9UYWJsZUZvb3RlcjMuZGVmYXVsdDtcbmV4cG9ydHMuVGFibGVIZWFkZXIgPSBfVGFibGVIZWFkZXIzLmRlZmF1bHQ7XG5leHBvcnRzLlRhYmxlSGVhZGVyQ29sdW1uID0gX1RhYmxlSGVhZGVyQ29sdW1uMy5kZWZhdWx0O1xuZXhwb3J0cy5UYWJsZVJvdyA9IF9UYWJsZVJvdzMuZGVmYXVsdDtcbmV4cG9ydHMuVGFibGVSb3dDb2x1bW4gPSBfVGFibGVSb3dDb2x1bW4zLmRlZmF1bHQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfVGFibGUzLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvVGFibGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCkge1xuICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLFxuICAgICAgYmFzZVRoZW1lID0gX2NvbnRleHQkbXVpVGhlbWUuYmFzZVRoZW1lLFxuICAgICAgdGFibGUgPSBfY29udGV4dCRtdWlUaGVtZS50YWJsZTtcblxuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0YWJsZS5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScsXG4gICAgICBib3JkZXJTcGFjaW5nOiAwLFxuICAgICAgdGFibGVMYXlvdXQ6ICdmaXhlZCcsXG4gICAgICBmb250RmFtaWx5OiBiYXNlVGhlbWUuZm9udEZhbWlseVxuICAgIH0sXG4gICAgYm9keVRhYmxlOiB7XG4gICAgICBoZWlnaHQ6IHByb3BzLmZpeGVkSGVhZGVyIHx8IHByb3BzLmZpeGVkRm9vdGVyID8gcHJvcHMuaGVpZ2h0IDogJ2F1dG8nLFxuICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgIG92ZXJmbG93WTogJ2F1dG8nXG4gICAgfSxcbiAgICB0YWJsZVdyYXBwZXI6IHtcbiAgICAgIGhlaWdodDogcHJvcHMuZml4ZWRIZWFkZXIgfHwgcHJvcHMuZml4ZWRGb290ZXIgPyAnYXV0bycgOiBwcm9wcy5oZWlnaHQsXG4gICAgICBvdmVyZmxvdzogJ2F1dG8nXG4gICAgfVxuICB9O1xufVxuXG52YXIgVGFibGUgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShUYWJsZSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVGFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgVGFibGUpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gVGFibGUuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFRhYmxlKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBhbGxSb3dzU2VsZWN0ZWQ6IGZhbHNlXG4gICAgfSwgX3RoaXMub25DZWxsQ2xpY2sgPSBmdW5jdGlvbiAocm93TnVtYmVyLCBjb2x1bW5OdW1iZXIsIGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DZWxsQ2xpY2spIF90aGlzLnByb3BzLm9uQ2VsbENsaWNrKHJvd051bWJlciwgY29sdW1uTnVtYmVyLCBldmVudCk7XG4gICAgfSwgX3RoaXMub25DZWxsSG92ZXIgPSBmdW5jdGlvbiAocm93TnVtYmVyLCBjb2x1bW5OdW1iZXIsIGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DZWxsSG92ZXIpIF90aGlzLnByb3BzLm9uQ2VsbEhvdmVyKHJvd051bWJlciwgY29sdW1uTnVtYmVyLCBldmVudCk7XG4gICAgfSwgX3RoaXMub25DZWxsSG92ZXJFeGl0ID0gZnVuY3Rpb24gKHJvd051bWJlciwgY29sdW1uTnVtYmVyLCBldmVudCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2VsbEhvdmVyRXhpdCkgX3RoaXMucHJvcHMub25DZWxsSG92ZXJFeGl0KHJvd051bWJlciwgY29sdW1uTnVtYmVyLCBldmVudCk7XG4gICAgfSwgX3RoaXMub25Sb3dIb3ZlciA9IGZ1bmN0aW9uIChyb3dOdW1iZXIpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblJvd0hvdmVyKSBfdGhpcy5wcm9wcy5vblJvd0hvdmVyKHJvd051bWJlcik7XG4gICAgfSwgX3RoaXMub25Sb3dIb3ZlckV4aXQgPSBmdW5jdGlvbiAocm93TnVtYmVyKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Sb3dIb3ZlckV4aXQpIF90aGlzLnByb3BzLm9uUm93SG92ZXJFeGl0KHJvd051bWJlcik7XG4gICAgfSwgX3RoaXMub25Sb3dTZWxlY3Rpb24gPSBmdW5jdGlvbiAoc2VsZWN0ZWRSb3dzKSB7XG4gICAgICBpZiAoX3RoaXMuc3RhdGUuYWxsUm93c1NlbGVjdGVkKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgYWxsUm93c1NlbGVjdGVkOiBmYWxzZSB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uUm93U2VsZWN0aW9uKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uUm93U2VsZWN0aW9uKHNlbGVjdGVkUm93cyk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMub25TZWxlY3RBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Sb3dTZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5hbGxSb3dzU2VsZWN0ZWQpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vblJvd1NlbGVjdGlvbignYWxsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25Sb3dTZWxlY3Rpb24oJ25vbmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGFsbFJvd3NTZWxlY3RlZDogIV90aGlzLnN0YXRlLmFsbFJvd3NTZWxlY3RlZCB9KTtcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoVGFibGUsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuYWxsUm93c1NlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGxSb3dzU2VsZWN0ZWQ6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hbGxSb3dzU2VsZWN0ZWQgIT09IG5leHRQcm9wcy5hbGxSb3dzU2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFsbFJvd3NTZWxlY3RlZDogbmV4dFByb3BzLmFsbFJvd3NTZWxlY3RlZCB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc1Njcm9sbGJhclZpc2libGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1Njcm9sbGJhclZpc2libGUoKSB7XG4gICAgICB2YXIgdGFibGVEaXZIZWlnaHQgPSB0aGlzLnJlZnMudGFibGVEaXYuY2xpZW50SGVpZ2h0O1xuICAgICAgdmFyIHRhYmxlQm9keUhlaWdodCA9IHRoaXMucmVmcy50YWJsZUJvZHkuY2xpZW50SGVpZ2h0O1xuXG4gICAgICByZXR1cm4gdGFibGVCb2R5SGVpZ2h0ID4gdGFibGVEaXZIZWlnaHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlVGFibGVIZWFkZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVUYWJsZUhlYWRlcihiYXNlKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChiYXNlLCB7XG4gICAgICAgIGVuYWJsZVNlbGVjdEFsbDogYmFzZS5wcm9wcy5lbmFibGVTZWxlY3RBbGwgJiYgdGhpcy5wcm9wcy5zZWxlY3RhYmxlICYmIHRoaXMucHJvcHMubXVsdGlTZWxlY3RhYmxlLFxuICAgICAgICBvblNlbGVjdEFsbDogdGhpcy5vblNlbGVjdEFsbCxcbiAgICAgICAgc2VsZWN0QWxsU2VsZWN0ZWQ6IHRoaXMuc3RhdGUuYWxsUm93c1NlbGVjdGVkXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVUYWJsZUJvZHknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVUYWJsZUJvZHkoYmFzZSkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYmFzZSwge1xuICAgICAgICBhbGxSb3dzU2VsZWN0ZWQ6IHRoaXMuc3RhdGUuYWxsUm93c1NlbGVjdGVkLFxuICAgICAgICBtdWx0aVNlbGVjdGFibGU6IHRoaXMucHJvcHMubXVsdGlTZWxlY3RhYmxlLFxuICAgICAgICBvbkNlbGxDbGljazogdGhpcy5vbkNlbGxDbGljayxcbiAgICAgICAgb25DZWxsSG92ZXI6IHRoaXMub25DZWxsSG92ZXIsXG4gICAgICAgIG9uQ2VsbEhvdmVyRXhpdDogdGhpcy5vbkNlbGxIb3ZlckV4aXQsXG4gICAgICAgIG9uUm93SG92ZXI6IHRoaXMub25Sb3dIb3ZlcixcbiAgICAgICAgb25Sb3dIb3ZlckV4aXQ6IHRoaXMub25Sb3dIb3ZlckV4aXQsXG4gICAgICAgIG9uUm93U2VsZWN0aW9uOiB0aGlzLm9uUm93U2VsZWN0aW9uLFxuICAgICAgICBzZWxlY3RhYmxlOiB0aGlzLnByb3BzLnNlbGVjdGFibGUsXG4gICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoeyBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IH0sIGJhc2UucHJvcHMuc3R5bGUpXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVUYWJsZUZvb3RlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVRhYmxlRm9vdGVyKGJhc2UpIHtcbiAgICAgIHJldHVybiBiYXNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIGZpeGVkRm9vdGVyID0gX3Byb3BzLmZpeGVkRm9vdGVyLFxuICAgICAgICAgIGZpeGVkSGVhZGVyID0gX3Byb3BzLmZpeGVkSGVhZGVyLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IF9wcm9wcy53cmFwcGVyU3R5bGUsXG4gICAgICAgICAgaGVhZGVyU3R5bGUgPSBfcHJvcHMuaGVhZGVyU3R5bGUsXG4gICAgICAgICAgYm9keVN0eWxlID0gX3Byb3BzLmJvZHlTdHlsZSxcbiAgICAgICAgICBmb290ZXJTdHlsZSA9IF9wcm9wcy5mb290ZXJTdHlsZTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcblxuICAgICAgdmFyIHRIZWFkID0gdm9pZCAwO1xuICAgICAgdmFyIHRGb290ID0gdm9pZCAwO1xuICAgICAgdmFyIHRCb2R5ID0gdm9pZCAwO1xuXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmICghX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBtdWlOYW1lID0gY2hpbGQudHlwZS5tdWlOYW1lO1xuXG4gICAgICAgIGlmIChtdWlOYW1lID09PSAnVGFibGVCb2R5Jykge1xuICAgICAgICAgIHRCb2R5ID0gX3RoaXMyLmNyZWF0ZVRhYmxlQm9keShjaGlsZCk7XG4gICAgICAgIH0gZWxzZSBpZiAobXVpTmFtZSA9PT0gJ1RhYmxlSGVhZGVyJykge1xuICAgICAgICAgIHRIZWFkID0gX3RoaXMyLmNyZWF0ZVRhYmxlSGVhZGVyKGNoaWxkKTtcbiAgICAgICAgfSBlbHNlIGlmIChtdWlOYW1lID09PSAnVGFibGVGb290ZXInKSB7XG4gICAgICAgICAgdEZvb3QgPSBfdGhpczIuY3JlYXRlVGFibGVGb290ZXIoY2hpbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdNYXRlcmlhbC1VSTogQ2hpbGRyZW4gb2YgdGhlIFRhYmxlIGNvbXBvbmVudCBtdXN0IGJlIFRhYmxlQm9keSBvciBUYWJsZUhlYWRlciBvciBUYWJsZUZvb3Rlci5cXG4gICAgICAgICAgIE5vdGhpbmcgaXMgcmVuZGVyZWQuJykgOiB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBJZiB3ZSBjb3VsZCBub3QgZmluZCBhIHRhYmxlLWhlYWRlciBhbmQgYSB0YWJsZS1ib2R5LCBkbyBub3QgYXR0ZW1wdCB0byBkaXNwbGF5IGFueXRoaW5nLlxuICAgICAgaWYgKCF0Qm9keSAmJiAhdEhlYWQpIHJldHVybiBudWxsO1xuXG4gICAgICB2YXIgbWVyZ2VkVGFibGVTdHlsZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpO1xuICAgICAgdmFyIGhlYWRlclRhYmxlID0gdm9pZCAwO1xuICAgICAgdmFyIGZvb3RlclRhYmxlID0gdm9pZCAwO1xuICAgICAgdmFyIGlubGluZUhlYWRlciA9IHZvaWQgMDtcbiAgICAgIHZhciBpbmxpbmVGb290ZXIgPSB2b2lkIDA7XG5cbiAgICAgIGlmIChmaXhlZEhlYWRlcikge1xuICAgICAgICBoZWFkZXJUYWJsZSA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBoZWFkZXJTdHlsZSkpIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAndGFibGUnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgc3R5bGU6IG1lcmdlZFRhYmxlU3R5bGUgfSxcbiAgICAgICAgICAgIHRIZWFkXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5saW5lSGVhZGVyID0gdEhlYWQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0Rm9vdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChmaXhlZEZvb3Rlcikge1xuICAgICAgICAgIGZvb3RlclRhYmxlID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBmb290ZXJTdHlsZSkpIH0sXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ3RhYmxlJyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgc3R5bGU6IHByZXBhcmVTdHlsZXMobWVyZ2VkVGFibGVTdHlsZSkgfSxcbiAgICAgICAgICAgICAgdEZvb3RcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlubGluZUZvb3RlciA9IHRGb290O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy50YWJsZVdyYXBwZXIsIHdyYXBwZXJTdHlsZSkpIH0sXG4gICAgICAgIGhlYWRlclRhYmxlLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuYm9keVRhYmxlLCBib2R5U3R5bGUpKSwgcmVmOiAndGFibGVEaXYnIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAndGFibGUnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgc3R5bGU6IG1lcmdlZFRhYmxlU3R5bGUsIHJlZjogJ3RhYmxlQm9keScgfSxcbiAgICAgICAgICAgIGlubGluZUhlYWRlcixcbiAgICAgICAgICAgIGlubGluZUZvb3RlcixcbiAgICAgICAgICAgIHRCb2R5XG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBmb290ZXJUYWJsZVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFRhYmxlO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuVGFibGUuZGVmYXVsdFByb3BzID0ge1xuICBhbGxSb3dzU2VsZWN0ZWQ6IGZhbHNlLFxuICBmaXhlZEZvb3RlcjogdHJ1ZSxcbiAgZml4ZWRIZWFkZXI6IHRydWUsXG4gIGhlaWdodDogJ2luaGVyaXQnLFxuICBtdWx0aVNlbGVjdGFibGU6IGZhbHNlLFxuICBzZWxlY3RhYmxlOiB0cnVlXG59O1xuVGFibGUuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblRhYmxlLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIGluZGljYXRlIHRoYXQgYWxsIHJvd3Mgc2hvdWxkIGJlIHNlbGVjdGVkLlxuICAgKi9cbiAgYWxsUm93c1NlbGVjdGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgYm9keSdzIHRhYmxlIGVsZW1lbnQuXG4gICAqL1xuICBib2R5U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogQ2hpbGRyZW4gcGFzc2VkIHRvIHRhYmxlLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBmb290ZXIgd2lsbCBhcHBlYXIgZml4ZWQgYmVsb3cgdGhlIHRhYmxlLlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB0cnVlLlxuICAgKi9cbiAgZml4ZWRGb290ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBoZWFkZXIgd2lsbCBhcHBlYXIgZml4ZWQgYWJvdmUgdGhlIHRhYmxlLlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB0cnVlLlxuICAgKi9cbiAgZml4ZWRIZWFkZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBmb290ZXIncyB0YWJsZSBlbGVtZW50LlxuICAgKi9cbiAgZm9vdGVyU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGhlYWRlcidzIHRhYmxlIGVsZW1lbnQuXG4gICAqL1xuICBoZWFkZXJTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSB0YWJsZS5cbiAgICovXG4gIGhlaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBtdWx0aXBsZSB0YWJsZSByb3dzIGNhbiBiZSBzZWxlY3RlZC5cbiAgICogQ1RSTC9DTUQrQ2xpY2sgYW5kIFNISUZUK0NsaWNrIGFyZSB2YWxpZCBhY3Rpb25zLlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cbiAgICovXG4gIG11bHRpU2VsZWN0YWJsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSByb3cgY2VsbCBpcyBjbGlja2VkLlxuICAgKiByb3dOdW1iZXIgaXMgdGhlIHJvdyBudW1iZXIgYW5kIGNvbHVtbklkIGlzXG4gICAqIHRoZSBjb2x1bW4gbnVtYmVyIG9yIHRoZSBjb2x1bW4ga2V5LlxuICAgKi9cbiAgb25DZWxsQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgdGFibGUgY2VsbCBpcyBob3ZlcmVkLlxuICAgKiByb3dOdW1iZXIgaXMgdGhlIHJvdyBudW1iZXIgb2YgdGhlIGhvdmVyZWQgcm93XG4gICAqIGFuZCBjb2x1bW5JZCBpcyB0aGUgY29sdW1uIG51bWJlciBvciB0aGUgY29sdW1uIGtleSBvZiB0aGUgY2VsbC5cbiAgICovXG4gIG9uQ2VsbEhvdmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIHRhYmxlIGNlbGwgaXMgbm8gbG9uZ2VyIGhvdmVyZWQuXG4gICAqIHJvd051bWJlciBpcyB0aGUgcm93IG51bWJlciBvZiB0aGUgcm93IGFuZCBjb2x1bW5JZFxuICAgKiBpcyB0aGUgY29sdW1uIG51bWJlciBvciB0aGUgY29sdW1uIGtleSBvZiB0aGUgY2VsbC5cbiAgICovXG4gIG9uQ2VsbEhvdmVyRXhpdDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSB0YWJsZSByb3cgaXMgaG92ZXJlZC5cbiAgICogcm93TnVtYmVyIGlzIHRoZSByb3cgbnVtYmVyIG9mIHRoZSBob3ZlcmVkIHJvdy5cbiAgICovXG4gIG9uUm93SG92ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgdGFibGUgcm93IGlzIG5vIGxvbmdlciBob3ZlcmVkLlxuICAgKiByb3dOdW1iZXIgaXMgdGhlIHJvdyBudW1iZXIgb2YgdGhlIHJvdyB0aGF0IGlzIG5vIGxvbmdlciBob3ZlcmVkLlxuICAgKi9cbiAgb25Sb3dIb3ZlckV4aXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgcm93IGlzIHNlbGVjdGVkLlxuICAgKiBzZWxlY3RlZFJvd3MgaXMgYW4gYXJyYXkgb2YgYWxsIHJvdyBzZWxlY3Rpb25zLlxuICAgKiBJRiBhbGwgcm93cyBoYXZlIGJlZW4gc2VsZWN0ZWQsIHRoZSBzdHJpbmcgXCJhbGxcIlxuICAgKiB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQgdG8gaW5kaWNhdGUgdGhhdCBhbGwgcm93cyBoYXZlIGJlZW4gc2VsZWN0ZWQuXG4gICAqL1xuICBvblJvd1NlbGVjdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGFibGUgcm93cyBjYW4gYmUgc2VsZWN0ZWQuXG4gICAqIElmIG11bHRpcGxlIHJvdyBzZWxlY3Rpb24gaXMgZGVzaXJlZCwgZW5hYmxlIG11bHRpU2VsZWN0YWJsZS5cbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgdHJ1ZS5cbiAgICovXG4gIHNlbGVjdGFibGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdGFibGUncyB3cmFwcGVyIGVsZW1lbnQuXG4gICAqL1xuICB3cmFwcGVyU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBUYWJsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9UYWJsZS9UYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNjkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheScpO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvQ29uc3VtYWJsZUFycmF5Mik7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YnKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfQ2hlY2tib3ggPSByZXF1aXJlKCcuLi9DaGVja2JveCcpO1xuXG52YXIgX0NoZWNrYm94MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NoZWNrYm94KTtcblxudmFyIF9UYWJsZVJvd0NvbHVtbiA9IHJlcXVpcmUoJy4vVGFibGVSb3dDb2x1bW4nKTtcblxudmFyIF9UYWJsZVJvd0NvbHVtbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYWJsZVJvd0NvbHVtbik7XG5cbnZhciBfQ2xpY2tBd2F5TGlzdGVuZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9DbGlja0F3YXlMaXN0ZW5lcicpO1xuXG52YXIgX0NsaWNrQXdheUxpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NsaWNrQXdheUxpc3RlbmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFRhYmxlQm9keSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFRhYmxlQm9keSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVGFibGVCb2R5KCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFRhYmxlQm9keSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBUYWJsZUJvZHkuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFRhYmxlQm9keSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRSb3dzOiBbXVxuICAgIH0sIF90aGlzLmlzQ29udHJvbGxlZCA9IGZhbHNlLCBfdGhpcy5oYW5kbGVDbGlja0F3YXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuZGVzZWxlY3RPbkNsaWNrYXdheSAmJiBfdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgc2VsZWN0ZWRSb3dzID0gW107XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRSb3dzOiBzZWxlY3RlZFJvd3MgfSk7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5vblJvd1NlbGVjdGlvbikge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uUm93U2VsZWN0aW9uKHNlbGVjdGVkUm93cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfdGhpcy5vblJvd0NsaWNrID0gZnVuY3Rpb24gKGV2ZW50LCByb3dOdW1iZXIpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuc2VsZWN0YWJsZSkge1xuICAgICAgICAvLyBQcmV2ZW50IHRleHQgc2VsZWN0aW9uIHdoaWxlIHNlbGVjdGluZyByb3dzLlxuICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgIF90aGlzLnByb2Nlc3NSb3dTZWxlY3Rpb24oZXZlbnQsIHJvd051bWJlcik7XG4gICAgICB9XG4gICAgfSwgX3RoaXMub25DZWxsQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQsIHJvd051bWJlciwgY29sdW1uTnVtYmVyKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNlbGxDbGljaykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNlbGxDbGljayhyb3dOdW1iZXIsIF90aGlzLmdldENvbHVtbklkKGNvbHVtbk51bWJlciksIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5vbkNlbGxIb3ZlciA9IGZ1bmN0aW9uIChldmVudCwgcm93TnVtYmVyLCBjb2x1bW5OdW1iZXIpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNlbGxIb3Zlcikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNlbGxIb3Zlcihyb3dOdW1iZXIsIF90aGlzLmdldENvbHVtbklkKGNvbHVtbk51bWJlciksIGV2ZW50KTtcbiAgICAgIH1cbiAgICAgIF90aGlzLm9uUm93SG92ZXIoZXZlbnQsIHJvd051bWJlcik7XG4gICAgfSwgX3RoaXMub25DZWxsSG92ZXJFeGl0ID0gZnVuY3Rpb24gKGV2ZW50LCByb3dOdW1iZXIsIGNvbHVtbk51bWJlcikge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2VsbEhvdmVyRXhpdCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNlbGxIb3ZlckV4aXQocm93TnVtYmVyLCBfdGhpcy5nZXRDb2x1bW5JZChjb2x1bW5OdW1iZXIpLCBldmVudCk7XG4gICAgICB9XG4gICAgICBfdGhpcy5vblJvd0hvdmVyRXhpdChldmVudCwgcm93TnVtYmVyKTtcbiAgICB9LCBfdGhpcy5vblJvd0hvdmVyID0gZnVuY3Rpb24gKGV2ZW50LCByb3dOdW1iZXIpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblJvd0hvdmVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uUm93SG92ZXIocm93TnVtYmVyKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5vblJvd0hvdmVyRXhpdCA9IGZ1bmN0aW9uIChldmVudCwgcm93TnVtYmVyKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Sb3dIb3ZlckV4aXQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Sb3dIb3ZlckV4aXQocm93TnVtYmVyKTtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoVGFibGVCb2R5LCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnByZVNjYW5Sb3dzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNlbGVjdGVkUm93czogdGhpcy5nZXRTZWxlY3RlZFJvd3ModGhpcy5wcm9wcylcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5wcmVTY2FuUm93cykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9uby1kaWQtbW91bnQtc2V0LXN0YXRlXG4gICAgICAgICAgc2VsZWN0ZWRSb3dzOiB0aGlzLmdldFNlbGVjdGVkUm93cyh0aGlzLnByb3BzKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmFsbFJvd3NTZWxlY3RlZCAhPT0gbmV4dFByb3BzLmFsbFJvd3NTZWxlY3RlZCkge1xuICAgICAgICBpZiAoIW5leHRQcm9wcy5hbGxSb3dzU2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkUm93czogW11cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkUm93czogdGhpcy5nZXRTZWxlY3RlZFJvd3MobmV4dFByb3BzKVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlUm93cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVJvd3MoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIG51bUNoaWxkcmVuID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgdmFyIHJvd051bWJlciA9IDA7XG4gICAgICB2YXIgaGFuZGxlcnMgPSB7XG4gICAgICAgIG9uQ2VsbENsaWNrOiB0aGlzLm9uQ2VsbENsaWNrLFxuICAgICAgICBvbkNlbGxIb3ZlcjogdGhpcy5vbkNlbGxIb3ZlcixcbiAgICAgICAgb25DZWxsSG92ZXJFeGl0OiB0aGlzLm9uQ2VsbEhvdmVyRXhpdCxcbiAgICAgICAgb25Sb3dIb3ZlcjogdGhpcy5vblJvd0hvdmVyLFxuICAgICAgICBvblJvd0hvdmVyRXhpdDogdGhpcy5vblJvd0hvdmVyRXhpdCxcbiAgICAgICAgb25Sb3dDbGljazogdGhpcy5vblJvd0NsaWNrXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgICAgICBob3ZlcmFibGU6IF90aGlzMi5wcm9wcy5zaG93Um93SG92ZXIsXG4gICAgICAgICAgICBzZWxlY3RlZDogX3RoaXMyLmlzUm93U2VsZWN0ZWQocm93TnVtYmVyKSxcbiAgICAgICAgICAgIHN0cmlwZWQ6IF90aGlzMi5wcm9wcy5zdHJpcGVkUm93cyAmJiByb3dOdW1iZXIgJSAyID09PSAwLFxuICAgICAgICAgICAgcm93TnVtYmVyOiByb3dOdW1iZXIrK1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAocm93TnVtYmVyID09PSBudW1DaGlsZHJlbikge1xuICAgICAgICAgICAgcHJvcHMuZGlzcGxheUJvcmRlciA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBjaGlsZHJlbiA9IFtfdGhpczIuY3JlYXRlUm93Q2hlY2tib3hDb2x1bW4ocHJvcHMpXTtcblxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIHByb3BzLCBoYW5kbGVycyksIGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlUm93Q2hlY2tib3hDb2x1bW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVSb3dDaGVja2JveENvbHVtbihyb3dQcm9wcykge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmRpc3BsYXlSb3dDaGVja2JveCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIG5hbWUgPSByb3dQcm9wcy5yb3dOdW1iZXIgKyAnLWNiJztcbiAgICAgIHZhciBkaXNhYmxlZCA9ICF0aGlzLnByb3BzLnNlbGVjdGFibGU7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1RhYmxlUm93Q29sdW1uMi5kZWZhdWx0LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBuYW1lLFxuICAgICAgICAgIGNvbHVtbk51bWJlcjogMCxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgd2lkdGg6IDI0LFxuICAgICAgICAgICAgY3Vyc29yOiBkaXNhYmxlZCA/ICdkZWZhdWx0JyA6ICdpbmhlcml0J1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0NoZWNrYm94Mi5kZWZhdWx0LCB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB2YWx1ZTogJ3NlbGVjdGVkJyxcbiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgY2hlY2tlZDogcm93UHJvcHMuc2VsZWN0ZWRcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U2VsZWN0ZWRSb3dzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2VsZWN0ZWRSb3dzKHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHNlbGVjdGVkUm93cyA9IFtdO1xuXG4gICAgICBpZiAocHJvcHMuc2VsZWN0YWJsZSkge1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChwcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgaWYgKF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcy5zZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIF90aGlzMy5pc0NvbnRyb2xsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMuc2VsZWN0ZWQgJiYgKHNlbGVjdGVkUm93cy5sZW5ndGggPT09IDAgfHwgcHJvcHMubXVsdGlTZWxlY3RhYmxlKSkge1xuICAgICAgICAgICAgICBzZWxlY3RlZFJvd3MucHVzaChpbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGVjdGVkUm93cztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc1Jvd1NlbGVjdGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNSb3dTZWxlY3RlZChyb3dOdW1iZXIpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5hbGxSb3dzU2VsZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5zb21lKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgaWYgKCh0eXBlb2Ygcm93ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHJvdykpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGlmIChfdGhpczQuaXNWYWx1ZUluUmFuZ2Uocm93TnVtYmVyLCByb3cpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHJvdyA9PT0gcm93TnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc1ZhbHVlSW5SYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzVmFsdWVJblJhbmdlKHZhbHVlLCByYW5nZSkge1xuICAgICAgaWYgKCFyYW5nZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBpZiAocmFuZ2Uuc3RhcnQgPD0gdmFsdWUgJiYgdmFsdWUgPD0gcmFuZ2UuZW5kIHx8IHJhbmdlLmVuZCA8PSB2YWx1ZSAmJiB2YWx1ZSA8PSByYW5nZS5zdGFydCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Byb2Nlc3NSb3dTZWxlY3Rpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcm9jZXNzUm93U2VsZWN0aW9uKGV2ZW50LCByb3dOdW1iZXIpIHtcbiAgICAgIHZhciBzZWxlY3RlZFJvd3MgPSBbXS5jb25jYXQoKDAsIF90b0NvbnN1bWFibGVBcnJheTMuZGVmYXVsdCkodGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MpKTtcblxuICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIHRoaXMucHJvcHMubXVsdGlTZWxlY3RhYmxlICYmIHNlbGVjdGVkUm93cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBsYXN0SW5kZXggPSBzZWxlY3RlZFJvd3MubGVuZ3RoIC0gMTtcbiAgICAgICAgdmFyIGxhc3RTZWxlY3Rpb24gPSBzZWxlY3RlZFJvd3NbbGFzdEluZGV4XTtcblxuICAgICAgICBpZiAoKHR5cGVvZiBsYXN0U2VsZWN0aW9uID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGxhc3RTZWxlY3Rpb24pKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBsYXN0U2VsZWN0aW9uLmVuZCA9IHJvd051bWJlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RlZFJvd3Muc3BsaWNlKGxhc3RJbmRleCwgMSwge1xuICAgICAgICAgICAgc3RhcnQ6IGxhc3RTZWxlY3Rpb24sXG4gICAgICAgICAgICBlbmQ6IHJvd051bWJlclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKChldmVudC5jdHJsS2V5ICYmICFldmVudC5tZXRhS2V5IHx8IGV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LmN0cmxLZXkpICYmIHRoaXMucHJvcHMubXVsdGlTZWxlY3RhYmxlKSB7XG4gICAgICAgIHZhciBpZHggPSBzZWxlY3RlZFJvd3MuaW5kZXhPZihyb3dOdW1iZXIpO1xuICAgICAgICBpZiAoaWR4IDwgMCkge1xuICAgICAgICAgIHZhciBmb3VuZFJhbmdlID0gZmFsc2U7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZFJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciByYW5nZSA9IHNlbGVjdGVkUm93c1tpXTtcbiAgICAgICAgICAgIGlmICgodHlwZW9mIHJhbmdlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHJhbmdlKSkgIT09ICdvYmplY3QnKSBjb250aW51ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZUluUmFuZ2Uocm93TnVtYmVyLCByYW5nZSkpIHtcbiAgICAgICAgICAgICAgdmFyIF9zZWxlY3RlZFJvd3M7XG5cbiAgICAgICAgICAgICAgZm91bmRSYW5nZSA9IHRydWU7XG4gICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnNwbGl0UmFuZ2UocmFuZ2UsIHJvd051bWJlcik7XG4gICAgICAgICAgICAgIChfc2VsZWN0ZWRSb3dzID0gc2VsZWN0ZWRSb3dzKS5zcGxpY2UuYXBwbHkoX3NlbGVjdGVkUm93cywgW2ksIDFdLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5My5kZWZhdWx0KSh2YWx1ZXMpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFmb3VuZFJhbmdlKSBzZWxlY3RlZFJvd3MucHVzaChyb3dOdW1iZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdGVkUm93cy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkUm93cy5sZW5ndGggPT09IDEgJiYgc2VsZWN0ZWRSb3dzWzBdID09PSByb3dOdW1iZXIpIHtcbiAgICAgICAgICBzZWxlY3RlZFJvd3MgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RlZFJvd3MgPSBbcm93TnVtYmVyXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaXNDb250cm9sbGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFJvd3M6IHNlbGVjdGVkUm93cyB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMub25Sb3dTZWxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJvd1NlbGVjdGlvbih0aGlzLmZsYXR0ZW5SYW5nZXMoc2VsZWN0ZWRSb3dzKSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3BsaXRSYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNwbGl0UmFuZ2UocmFuZ2UsIHNwbGl0UG9pbnQpIHtcbiAgICAgIHZhciBzcGxpdFZhbHVlcyA9IFtdO1xuICAgICAgdmFyIHN0YXJ0T2Zmc2V0ID0gcmFuZ2Uuc3RhcnQgLSBzcGxpdFBvaW50O1xuICAgICAgdmFyIGVuZE9mZnNldCA9IHJhbmdlLmVuZCAtIHNwbGl0UG9pbnQ7XG5cbiAgICAgIC8vIFByb2Nlc3Mgc3RhcnQgaGFsZlxuICAgICAgc3BsaXRWYWx1ZXMucHVzaC5hcHBseShzcGxpdFZhbHVlcywgKDAsIF90b0NvbnN1bWFibGVBcnJheTMuZGVmYXVsdCkodGhpcy5nZW5SYW5nZU9mVmFsdWVzKHNwbGl0UG9pbnQsIHN0YXJ0T2Zmc2V0KSkpO1xuXG4gICAgICAvLyBQcm9jZXNzIGVuZCBoYWxmXG4gICAgICBzcGxpdFZhbHVlcy5wdXNoLmFwcGx5KHNwbGl0VmFsdWVzLCAoMCwgX3RvQ29uc3VtYWJsZUFycmF5My5kZWZhdWx0KSh0aGlzLmdlblJhbmdlT2ZWYWx1ZXMoc3BsaXRQb2ludCwgZW5kT2Zmc2V0KSkpO1xuXG4gICAgICByZXR1cm4gc3BsaXRWYWx1ZXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2VuUmFuZ2VPZlZhbHVlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlblJhbmdlT2ZWYWx1ZXMoc3RhcnQsIG9mZnNldCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGRpciA9IG9mZnNldCA+IDAgPyAtMSA6IDE7IC8vIFRoaXMgZm9yY2VzIG9mZnNldCB0byBhcHByb2FjaCAwIGZyb20gZWl0aGVyIGRpcmVjdGlvbi5cbiAgICAgIHdoaWxlIChvZmZzZXQgIT09IDApIHtcbiAgICAgICAgdmFsdWVzLnB1c2goc3RhcnQgKyBvZmZzZXQpO1xuICAgICAgICBvZmZzZXQgKz0gZGlyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZsYXR0ZW5SYW5nZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmbGF0dGVuUmFuZ2VzKHNlbGVjdGVkUm93cykge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBzZWxlY3RlZFJvd3MucmVkdWNlKGZ1bmN0aW9uIChyb3dzLCByb3cpIHtcbiAgICAgICAgaWYgKCh0eXBlb2Ygcm93ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHJvdykpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHZhciB2YWx1ZXMgPSBfdGhpczUuZ2VuUmFuZ2VPZlZhbHVlcyhyb3cuZW5kLCByb3cuc3RhcnQgLSByb3cuZW5kKTtcbiAgICAgICAgICByb3dzLnB1c2guYXBwbHkocm93cywgW3Jvdy5lbmRdLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5My5kZWZhdWx0KSh2YWx1ZXMpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm93cy5wdXNoKHJvdyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcm93cztcbiAgICAgIH0sIFtdKS5zb3J0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q29sdW1uSWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb2x1bW5JZChjb2x1bW5OdW1iZXIpIHtcbiAgICAgIHJldHVybiBjb2x1bW5OdW1iZXIgLSAxO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIGFsbFJvd3NTZWxlY3RlZCA9IF9wcm9wcy5hbGxSb3dzU2VsZWN0ZWQsXG4gICAgICAgICAgbXVsdGlTZWxlY3RhYmxlID0gX3Byb3BzLm11bHRpU2VsZWN0YWJsZSxcbiAgICAgICAgICBvbkNlbGxDbGljayA9IF9wcm9wcy5vbkNlbGxDbGljayxcbiAgICAgICAgICBvbkNlbGxIb3ZlciA9IF9wcm9wcy5vbkNlbGxIb3ZlcixcbiAgICAgICAgICBvbkNlbGxIb3ZlckV4aXQgPSBfcHJvcHMub25DZWxsSG92ZXJFeGl0LFxuICAgICAgICAgIG9uUm93SG92ZXIgPSBfcHJvcHMub25Sb3dIb3ZlcixcbiAgICAgICAgICBvblJvd0hvdmVyRXhpdCA9IF9wcm9wcy5vblJvd0hvdmVyRXhpdCxcbiAgICAgICAgICBvblJvd1NlbGVjdGlvbiA9IF9wcm9wcy5vblJvd1NlbGVjdGlvbixcbiAgICAgICAgICBzZWxlY3RhYmxlID0gX3Byb3BzLnNlbGVjdGFibGUsXG4gICAgICAgICAgZGVzZWxlY3RPbkNsaWNrYXdheSA9IF9wcm9wcy5kZXNlbGVjdE9uQ2xpY2thd2F5LFxuICAgICAgICAgIHNob3dSb3dIb3ZlciA9IF9wcm9wcy5zaG93Um93SG92ZXIsXG4gICAgICAgICAgc3RyaXBlZFJvd3MgPSBfcHJvcHMuc3RyaXBlZFJvd3MsXG4gICAgICAgICAgZGlzcGxheVJvd0NoZWNrYm94ID0gX3Byb3BzLmRpc3BsYXlSb3dDaGVja2JveCxcbiAgICAgICAgICBwcmVTY2FuUm93cyA9IF9wcm9wcy5wcmVTY2FuUm93cyxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydzdHlsZScsICdhbGxSb3dzU2VsZWN0ZWQnLCAnbXVsdGlTZWxlY3RhYmxlJywgJ29uQ2VsbENsaWNrJywgJ29uQ2VsbEhvdmVyJywgJ29uQ2VsbEhvdmVyRXhpdCcsICdvblJvd0hvdmVyJywgJ29uUm93SG92ZXJFeGl0JywgJ29uUm93U2VsZWN0aW9uJywgJ3NlbGVjdGFibGUnLCAnZGVzZWxlY3RPbkNsaWNrYXdheScsICdzaG93Um93SG92ZXInLCAnc3RyaXBlZFJvd3MnLCAnZGlzcGxheVJvd0NoZWNrYm94JywgJ3ByZVNjYW5Sb3dzJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9DbGlja0F3YXlMaXN0ZW5lcjIuZGVmYXVsdCxcbiAgICAgICAgeyBvbkNsaWNrQXdheTogdGhpcy5oYW5kbGVDbGlja0F3YXkgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3Rib2R5JyxcbiAgICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZSkpIH0sIG90aGVyKSxcbiAgICAgICAgICB0aGlzLmNyZWF0ZVJvd3MoKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gVGFibGVCb2R5O1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuVGFibGVCb2R5Lm11aU5hbWUgPSAnVGFibGVCb2R5JztcblRhYmxlQm9keS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsbFJvd3NTZWxlY3RlZDogZmFsc2UsXG4gIGRlc2VsZWN0T25DbGlja2F3YXk6IHRydWUsXG4gIGRpc3BsYXlSb3dDaGVja2JveDogdHJ1ZSxcbiAgbXVsdGlTZWxlY3RhYmxlOiBmYWxzZSxcbiAgcHJlU2NhblJvd3M6IHRydWUsXG4gIHNlbGVjdGFibGU6IHRydWUsXG4gIHN0eWxlOiB7fVxufTtcblRhYmxlQm9keS5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuVGFibGVCb2R5LnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogU2V0IHRvIHRydWUgdG8gaW5kaWNhdGUgdGhhdCBhbGwgcm93cyBzaG91bGQgYmUgc2VsZWN0ZWQuXG4gICAqL1xuICBhbGxSb3dzU2VsZWN0ZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIENoaWxkcmVuIHBhc3NlZCB0byB0YWJsZSBib2R5LlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIENvbnRyb2xzIHdoZXRoZXIgb3Igbm90IHRvIGRlc2VsZWN0IGFsbCBzZWxlY3RlZFxuICAgKiByb3dzIGFmdGVyIGNsaWNraW5nIG91dHNpZGUgdGhlIHRhYmxlLlxuICAgKi9cbiAgZGVzZWxlY3RPbkNsaWNrYXdheTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogQ29udHJvbHMgdGhlIGRpc3BsYXkgb2YgdGhlIHJvdyBjaGVja2JveC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgdHJ1ZS5cbiAgICovXG4gIGRpc3BsYXlSb3dDaGVja2JveDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBJZiB0cnVlLCBtdWx0aXBsZSB0YWJsZSByb3dzIGNhbiBiZSBzZWxlY3RlZC5cbiAgICogQ1RSTC9DTUQrQ2xpY2sgYW5kIFNISUZUK0NsaWNrIGFyZSB2YWxpZCBhY3Rpb25zLlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cbiAgICovXG4gIG11bHRpU2VsZWN0YWJsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmb3Igd2hlbiBhIGNlbGwgaXMgY2xpY2tlZC5cbiAgICovXG4gIG9uQ2VsbENsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIENhbGxlZCB3aGVuIGEgdGFibGUgY2VsbCBpcyBob3ZlcmVkLiByb3dOdW1iZXJcbiAgICogaXMgdGhlIHJvdyBudW1iZXIgb2YgdGhlIGhvdmVyZWQgcm93IGFuZCBjb2x1bW5JZFxuICAgKiBpcyB0aGUgY29sdW1uIG51bWJlciBvciB0aGUgY29sdW1uIGtleSBvZiB0aGUgY2VsbC5cbiAgICovXG4gIG9uQ2VsbEhvdmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIENhbGxlZCB3aGVuIGEgdGFibGUgY2VsbCBpcyBubyBsb25nZXIgaG92ZXJlZC5cbiAgICogcm93TnVtYmVyIGlzIHRoZSByb3cgbnVtYmVyIG9mIHRoZSByb3cgYW5kIGNvbHVtbklkXG4gICAqIGlzIHRoZSBjb2x1bW4gbnVtYmVyIG9yIHRoZSBjb2x1bW4ga2V5IG9mIHRoZSBjZWxsLlxuICAgKi9cbiAgb25DZWxsSG92ZXJFeGl0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIENhbGxlZCB3aGVuIGEgdGFibGUgcm93IGlzIGhvdmVyZWQuXG4gICAqIHJvd051bWJlciBpcyB0aGUgcm93IG51bWJlciBvZiB0aGUgaG92ZXJlZCByb3cuXG4gICAqL1xuICBvblJvd0hvdmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIENhbGxlZCB3aGVuIGEgdGFibGUgcm93IGlzIG5vIGxvbmdlclxuICAgKiBob3ZlcmVkLiByb3dOdW1iZXIgaXMgdGhlIHJvdyBudW1iZXIgb2YgdGhlIHJvd1xuICAgKiB0aGF0IGlzIG5vIGxvbmdlciBob3ZlcmVkLlxuICAgKi9cbiAgb25Sb3dIb3ZlckV4aXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogQ2FsbGVkIHdoZW4gYSByb3cgaXMgc2VsZWN0ZWQuIHNlbGVjdGVkUm93cyBpcyBhblxuICAgKiBhcnJheSBvZiBhbGwgcm93IHNlbGVjdGlvbnMuIElmIGFsbCByb3dzIGhhdmUgYmVlbiBzZWxlY3RlZCxcbiAgICogdGhlIHN0cmluZyBcImFsbFwiIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZCB0byBpbmRpY2F0ZSB0aGF0XG4gICAqIGFsbCByb3dzIGhhdmUgYmVlbiBzZWxlY3RlZC5cbiAgICovXG4gIG9uUm93U2VsZWN0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDb250cm9scyB3aGV0aGVyIG9yIG5vdCB0aGUgcm93cyBhcmUgcHJlLXNjYW5uZWQgdG8gZGV0ZXJtaW5lXG4gICAqIGluaXRpYWwgc3RhdGUuIElmIHlvdXIgdGFibGUgaGFzIGEgbGFyZ2UgbnVtYmVyIG9mIHJvd3MgYW5kXG4gICAqIHlvdSBhcmUgZXhwZXJpZW5jaW5nIGEgZGVsYXkgaW4gcmVuZGVyaW5nLCB0dXJuIG9mZiB0aGlzIHByb3BlcnR5LlxuICAgKi9cbiAgcHJlU2NhblJvd3M6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogSWYgdHJ1ZSwgdGFibGUgcm93cyBjYW4gYmUgc2VsZWN0ZWQuIElmIG11bHRpcGxlXG4gICAqIHJvdyBzZWxlY3Rpb24gaXMgZGVzaXJlZCwgZW5hYmxlIG11bHRpU2VsZWN0YWJsZS5cbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgdHJ1ZS5cbiAgICovXG4gIHNlbGVjdGFibGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRhYmxlIHJvd3Mgd2lsbCBiZSBoaWdobGlnaHRlZCB3aGVuXG4gICAqIHRoZSBjdXJzb3IgaXMgaG92ZXJpbmcgb3ZlciB0aGUgcm93LiBUaGUgZGVmYXVsdFxuICAgKiB2YWx1ZSBpcyBmYWxzZS5cbiAgICovXG4gIHNob3dSb3dIb3ZlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgZXZlcnkgb3RoZXIgdGFibGUgcm93IHN0YXJ0aW5nXG4gICAqIHdpdGggdGhlIGZpcnN0IHJvdyB3aWxsIGJlIHN0cmlwZWQuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgKi9cbiAgc3RyaXBlZFJvd3M6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRhYmxlQm9keTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9UYWJsZS9UYWJsZUJvZHkuanNcbi8vIG1vZHVsZSBpZCA9IDY5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9FbmhhbmNlZFN3aXRjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL0VuaGFuY2VkU3dpdGNoJyk7XG5cbnZhciBfRW5oYW5jZWRTd2l0Y2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW5oYW5jZWRTd2l0Y2gpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX2NoZWNrQm94T3V0bGluZUJsYW5rID0gcmVxdWlyZSgnLi4vc3ZnLWljb25zL3RvZ2dsZS9jaGVjay1ib3gtb3V0bGluZS1ibGFuaycpO1xuXG52YXIgX2NoZWNrQm94T3V0bGluZUJsYW5rMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrQm94T3V0bGluZUJsYW5rKTtcblxudmFyIF9jaGVja0JveCA9IHJlcXVpcmUoJy4uL3N2Zy1pY29ucy90b2dnbGUvY2hlY2stYm94Jyk7XG5cbnZhciBfY2hlY2tCb3gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tCb3gpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIGNoZWNrYm94ID0gY29udGV4dC5tdWlUaGVtZS5jaGVja2JveDtcblxuICB2YXIgY2hlY2tib3hTaXplID0gMjQ7XG5cbiAgcmV0dXJuIHtcbiAgICBpY29uOiB7XG4gICAgICBoZWlnaHQ6IGNoZWNrYm94U2l6ZSxcbiAgICAgIHdpZHRoOiBjaGVja2JveFNpemVcbiAgICB9LFxuICAgIGNoZWNrOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKScsXG4gICAgICB0cmFuc2l0aW9uT3JpZ2luOiAnNTAlIDUwJScsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnNDUwbXMnLCAnb3BhY2l0eScsICcwbXMnKSArICcsICcgKyBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnMG1zJywgJ3RyYW5zZm9ybScsICc0NTBtcycpLFxuICAgICAgZmlsbDogY2hlY2tib3guY2hlY2tlZENvbG9yXG4gICAgfSxcbiAgICBjaGVja1doZW5Td2l0Y2hlZDoge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCcwbXMnLCAnb3BhY2l0eScsICcwbXMnKSArICcsICcgKyBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnODAwbXMnLCAndHJhbnNmb3JtJywgJzBtcycpXG4gICAgfSxcbiAgICBjaGVja1doZW5EaXNhYmxlZDoge1xuICAgICAgZmlsbDogY2hlY2tib3guZGlzYWJsZWRDb2xvclxuICAgIH0sXG4gICAgYm94OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBmaWxsOiBjaGVja2JveC5ib3hDb2xvcixcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCcxMDAwbXMnLCAnb3BhY2l0eScsICcyMDBtcycpXG4gICAgfSxcbiAgICBib3hXaGVuU3dpdGNoZWQ6IHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnNjUwbXMnLCAnb3BhY2l0eScsICcxNTBtcycpLFxuICAgICAgZmlsbDogY2hlY2tib3guY2hlY2tlZENvbG9yXG4gICAgfSxcbiAgICBib3hXaGVuRGlzYWJsZWQ6IHtcbiAgICAgIGZpbGw6IHByb3BzLmNoZWNrZWQgPyAndHJhbnNwYXJlbnQnIDogY2hlY2tib3guZGlzYWJsZWRDb2xvclxuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIGNvbG9yOiBwcm9wcy5kaXNhYmxlZCA/IGNoZWNrYm94LmxhYmVsRGlzYWJsZWRDb2xvciA6IGNoZWNrYm94LmxhYmVsQ29sb3JcbiAgICB9XG4gIH07XG59XG5cbnZhciBDaGVja2JveCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKENoZWNrYm94LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDaGVja2JveCgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBDaGVja2JveCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBDaGVja2JveC5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoQ2hlY2tib3gpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN3aXRjaGVkOiBmYWxzZVxuICAgIH0sIF90aGlzLmhhbmRsZVN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gKG5ld1N3aXRjaGVkKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN3aXRjaGVkOiBuZXdTd2l0Y2hlZFxuICAgICAgfSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlQ2hlY2sgPSBmdW5jdGlvbiAoZXZlbnQsIGlzSW5wdXRDaGVja2VkKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DaGVjaykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNoZWNrKGV2ZW50LCBpc0lucHV0Q2hlY2tlZCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKENoZWNrYm94LCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoZWNrZWQgPSBfcHJvcHMuY2hlY2tlZCxcbiAgICAgICAgICBkZWZhdWx0Q2hlY2tlZCA9IF9wcm9wcy5kZWZhdWx0Q2hlY2tlZCxcbiAgICAgICAgICB2YWx1ZUxpbmsgPSBfcHJvcHMudmFsdWVMaW5rO1xuXG5cbiAgICAgIGlmIChjaGVja2VkIHx8IGRlZmF1bHRDaGVja2VkIHx8IHZhbHVlTGluayAmJiB2YWx1ZUxpbmsudmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc3dpdGNoZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jaGVja2VkICE9PSBuZXh0UHJvcHMuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzd2l0Y2hlZDogbmV4dFByb3BzLmNoZWNrZWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNDaGVja2VkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNDaGVja2VkKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVmcy5lbmhhbmNlZFN3aXRjaC5pc1N3aXRjaGVkKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0Q2hlY2tlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldENoZWNrZWQobmV3Q2hlY2tlZFZhbHVlKSB7XG4gICAgICB0aGlzLnJlZnMuZW5oYW5jZWRTd2l0Y2guc2V0U3dpdGNoZWQobmV3Q2hlY2tlZFZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaWNvblN0eWxlID0gX3Byb3BzMi5pY29uU3R5bGUsXG4gICAgICAgICAgb25DaGVjayA9IF9wcm9wczIub25DaGVjayxcbiAgICAgICAgICBjaGVja2VkSWNvbiA9IF9wcm9wczIuY2hlY2tlZEljb24sXG4gICAgICAgICAgdW5jaGVja2VkSWNvbiA9IF9wcm9wczIudW5jaGVja2VkSWNvbixcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wczIsIFsnaWNvblN0eWxlJywgJ29uQ2hlY2snLCAnY2hlY2tlZEljb24nLCAndW5jaGVja2VkSWNvbiddKTtcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgICAgdmFyIGJveFN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuYm94LCB0aGlzLnN0YXRlLnN3aXRjaGVkICYmIHN0eWxlcy5ib3hXaGVuU3dpdGNoZWQsIGljb25TdHlsZSwgdGhpcy5wcm9wcy5kaXNhYmxlZCAmJiBzdHlsZXMuYm94V2hlbkRpc2FibGVkKTtcbiAgICAgIHZhciBjaGVja1N0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuY2hlY2ssIHRoaXMuc3RhdGUuc3dpdGNoZWQgJiYgc3R5bGVzLmNoZWNrV2hlblN3aXRjaGVkLCBpY29uU3R5bGUsIHRoaXMucHJvcHMuZGlzYWJsZWQgJiYgc3R5bGVzLmNoZWNrV2hlbkRpc2FibGVkKTtcblxuICAgICAgdmFyIGNoZWNrZWRFbGVtZW50ID0gY2hlY2tlZEljb24gPyBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoZWNrZWRJY29uLCB7XG4gICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoY2hlY2tTdHlsZXMsIGNoZWNrZWRJY29uLnByb3BzLnN0eWxlKVxuICAgICAgfSkgOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfY2hlY2tCb3gyLmRlZmF1bHQsIHtcbiAgICAgICAgc3R5bGU6IGNoZWNrU3R5bGVzXG4gICAgICB9KTtcblxuICAgICAgdmFyIHVuQ2hlY2tlZEVsZW1lbnQgPSB1bmNoZWNrZWRJY29uID8gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudCh1bmNoZWNrZWRJY29uLCB7XG4gICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoYm94U3R5bGVzLCB1bmNoZWNrZWRJY29uLnByb3BzLnN0eWxlKVxuICAgICAgfSkgOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfY2hlY2tCb3hPdXRsaW5lQmxhbmsyLmRlZmF1bHQsIHtcbiAgICAgICAgc3R5bGU6IGJveFN0eWxlc1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBjaGVja2JveEVsZW1lbnQgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHVuQ2hlY2tlZEVsZW1lbnQsXG4gICAgICAgIGNoZWNrZWRFbGVtZW50XG4gICAgICApO1xuXG4gICAgICB2YXIgcmlwcGxlQ29sb3IgPSB0aGlzLnN0YXRlLnN3aXRjaGVkID8gY2hlY2tTdHlsZXMuZmlsbCA6IGJveFN0eWxlcy5maWxsO1xuICAgICAgdmFyIG1lcmdlZEljb25TdHlsZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuaWNvbiwgaWNvblN0eWxlKTtcblxuICAgICAgdmFyIGxhYmVsU3R5bGUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmxhYmVsLCB0aGlzLnByb3BzLmxhYmVsU3R5bGUpO1xuXG4gICAgICB2YXIgZW5oYW5jZWRTd2l0Y2hQcm9wcyA9IHtcbiAgICAgICAgcmVmOiAnZW5oYW5jZWRTd2l0Y2gnLFxuICAgICAgICBpbnB1dFR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgIHN3aXRjaGVkOiB0aGlzLnN0YXRlLnN3aXRjaGVkLFxuICAgICAgICBzd2l0Y2hFbGVtZW50OiBjaGVja2JveEVsZW1lbnQsXG4gICAgICAgIHJpcHBsZUNvbG9yOiByaXBwbGVDb2xvcixcbiAgICAgICAgaWNvblN0eWxlOiBtZXJnZWRJY29uU3R5bGUsXG4gICAgICAgIG9uU3dpdGNoOiB0aGlzLmhhbmRsZUNoZWNrLFxuICAgICAgICBsYWJlbFN0eWxlOiBsYWJlbFN0eWxlLFxuICAgICAgICBvblBhcmVudFNob3VsZFVwZGF0ZTogdGhpcy5oYW5kbGVTdGF0ZUNoYW5nZSxcbiAgICAgICAgbGFiZWxQb3NpdGlvbjogdGhpcy5wcm9wcy5sYWJlbFBvc2l0aW9uXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0VuaGFuY2VkU3dpdGNoMi5kZWZhdWx0LCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwgZW5oYW5jZWRTd2l0Y2hQcm9wcykpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQ2hlY2tib3g7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5DaGVja2JveC5kZWZhdWx0UHJvcHMgPSB7XG4gIGxhYmVsUG9zaXRpb246ICdyaWdodCcsXG4gIGRpc2FibGVkOiBmYWxzZVxufTtcbkNoZWNrYm94LmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5DaGVja2JveC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBDaGVja2JveCBpcyBjaGVja2VkIGlmIHRydWUuXG4gICAqL1xuICBjaGVja2VkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgU3ZnSWNvbiB0byB1c2UgZm9yIHRoZSBjaGVja2VkIHN0YXRlLlxuICAgKiBUaGlzIGlzIHVzZWZ1bCB0byBjcmVhdGUgaWNvbiB0b2dnbGVzLlxuICAgKi9cbiAgY2hlY2tlZEljb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IHN0YXRlIG9mIG91ciBjaGVja2JveCBjb21wb25lbnQuXG4gICAqICoqV2FybmluZzoqKiBUaGlzIGNhbm5vdCBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYGNoZWNrZWRgLlxuICAgKiBEZWNpZGUgYmV0d2VlbiB1c2luZyBhIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkIGlucHV0IGVsZW1lbnQgYW5kIHJlbW92ZSBvbmUgb2YgdGhlc2UgcHJvcHMuXG4gICAqIE1vcmUgaW5mbzogaHR0cHM6Ly9mYi5tZS9yZWFjdC1jb250cm9sbGVkLWNvbXBvbmVudHNcbiAgICovXG4gIGRlZmF1bHRDaGVja2VkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBEaXNhYmxlZCBpZiB0cnVlLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgaWNvbiBlbGVtZW50LlxuICAgKi9cbiAgaWNvblN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIGlucHV0U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogV2hlcmUgdGhlIGxhYmVsIHdpbGwgYmUgcGxhY2VkIG5leHQgdG8gdGhlIGNoZWNrYm94LlxuICAgKi9cbiAgbGFiZWxQb3NpdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ2xlZnQnLCAncmlnaHQnXSksXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIENoZWNrYm94IGVsZW1lbnQgbGFiZWwuXG4gICAqL1xuICBsYWJlbFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgZmlyZWQgd2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IGBjaGFuZ2VgIGV2ZW50IHRhcmdldGluZyB0aGUgdW5kZXJseWluZyBjaGVja2JveCBgaW5wdXRgLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzSW5wdXRDaGVja2VkIFRoZSBgY2hlY2tlZGAgdmFsdWUgb2YgdGhlIHVuZGVybHlpbmcgY2hlY2tib3ggYGlucHV0YC5cbiAgICovXG4gIG9uQ2hlY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgU3ZnSWNvbiB0byB1c2UgZm9yIHRoZSB1bmNoZWNrZWQgc3RhdGUuXG4gICAqIFRoaXMgaXMgdXNlZnVsIHRvIGNyZWF0ZSBpY29uIHRvZ2dsZXMuXG4gICAqL1xuICB1bmNoZWNrZWRJY29uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gIC8qKlxuICAgKiBWYWx1ZUxpbmsgZm9yIHdoZW4gdXNpbmcgY29udHJvbGxlZCBjaGVja2JveC5cbiAgICovXG4gIHZhbHVlTGluazogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IENoZWNrYm94O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL0NoZWNrYm94L0NoZWNrYm94LmpzXG4vLyBtb2R1bGUgaWQgPSA2OTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3RFdmVudExpc3RlbmVyID0gcmVxdWlyZSgncmVhY3QtZXZlbnQtbGlzdGVuZXInKTtcblxudmFyIF9yZWFjdEV2ZW50TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RFdmVudExpc3RlbmVyKTtcblxudmFyIF9rZXljb2RlID0gcmVxdWlyZSgna2V5Y29kZScpO1xuXG52YXIgX2tleWNvZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5Y29kZSk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbnZhciBfRm9jdXNSaXBwbGUgPSByZXF1aXJlKCcuL0ZvY3VzUmlwcGxlJyk7XG5cbnZhciBfRm9jdXNSaXBwbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9jdXNSaXBwbGUpO1xuXG52YXIgX1RvdWNoUmlwcGxlID0gcmVxdWlyZSgnLi9Ub3VjaFJpcHBsZScpO1xuXG52YXIgX1RvdWNoUmlwcGxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RvdWNoUmlwcGxlKTtcblxudmFyIF9QYXBlciA9IHJlcXVpcmUoJy4vLi4vUGFwZXInKTtcblxudmFyIF9QYXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYXBlcik7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIGJhc2VUaGVtZSA9IGNvbnRleHQubXVpVGhlbWUuYmFzZVRoZW1lO1xuXG5cbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBjdXJzb3I6IHByb3BzLmRpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgb3ZlcmZsb3c6ICd2aXNpYmxlJyxcbiAgICAgIGRpc3BsYXk6ICd0YWJsZScsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGN1cnNvcjogJ2luaGVyaXQnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ2FsbCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgekluZGV4OiAyLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIG1hcmdpbjogMFxuICAgIH0sXG4gICAgY29udHJvbHM6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB3aWR0aDogJ2NhbGMoMTAwJSAtIDYwcHgpJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgICAgIGNvbG9yOiBiYXNlVGhlbWUucGFsZXR0ZS50ZXh0Q29sb3IsXG4gICAgICBmb250RmFtaWx5OiBiYXNlVGhlbWUuZm9udEZhbWlseVxuICAgIH0sXG4gICAgd3JhcDoge1xuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgd2lkdGg6IDYwIC0gYmFzZVRoZW1lLnNwYWNpbmcuZGVza3RvcEd1dHRlckxlc3MsXG4gICAgICBtYXJnaW5SaWdodDogcHJvcHMubGFiZWxQb3NpdGlvbiA9PT0gJ3JpZ2h0JyA/IGJhc2VUaGVtZS5zcGFjaW5nLmRlc2t0b3BHdXR0ZXJMZXNzIDogMCxcbiAgICAgIG1hcmdpbkxlZnQ6IHByb3BzLmxhYmVsUG9zaXRpb24gPT09ICdsZWZ0JyA/IGJhc2VUaGVtZS5zcGFjaW5nLmRlc2t0b3BHdXR0ZXJMZXNzIDogMFxuICAgIH0sXG4gICAgcmlwcGxlOiB7XG4gICAgICBjb2xvcjogcHJvcHMucmlwcGxlQ29sb3IgfHwgYmFzZVRoZW1lLnBhbGV0dGUucHJpbWFyeTFDb2xvcixcbiAgICAgIGhlaWdodDogJzIwMCUnLFxuICAgICAgd2lkdGg6ICcyMDAlJyxcbiAgICAgIHRvcDogLTEyLFxuICAgICAgbGVmdDogLTEyXG4gICAgfVxuICB9O1xufVxuXG52YXIgRW5oYW5jZWRTd2l0Y2ggPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShFbmhhbmNlZFN3aXRjaCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRW5oYW5jZWRTd2l0Y2goKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgRW5oYW5jZWRTd2l0Y2gpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gRW5oYW5jZWRTd2l0Y2guX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKEVuaGFuY2VkU3dpdGNoKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc0tleWJvYXJkRm9jdXNlZDogZmFsc2VcbiAgICB9LCBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnRhYlByZXNzZWQgPSBmYWxzZTtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNLZXlib2FyZEZvY3VzZWQ6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgdmFyIGlzSW5wdXRDaGVja2VkID0gX3RoaXMucmVmcy5jaGVja2JveC5jaGVja2VkO1xuXG4gICAgICBpZiAoIV90aGlzLnByb3BzLmhhc093blByb3BlcnR5KCdjaGVja2VkJykgJiYgX3RoaXMucHJvcHMub25QYXJlbnRTaG91bGRVcGRhdGUpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25QYXJlbnRTaG91bGRVcGRhdGUoaXNJbnB1dENoZWNrZWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Td2l0Y2gpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Td2l0Y2goZXZlbnQsIGlzSW5wdXRDaGVja2VkKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgY29kZSA9ICgwLCBfa2V5Y29kZTIuZGVmYXVsdCkoZXZlbnQpO1xuXG4gICAgICBpZiAoY29kZSA9PT0gJ3RhYicpIHtcbiAgICAgICAgX3RoaXMudGFiUHJlc3NlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMuc3RhdGUuaXNLZXlib2FyZEZvY3VzZWQgJiYgY29kZSA9PT0gJ3NwYWNlJykge1xuICAgICAgICBfdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUtleVVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMuc3RhdGUuaXNLZXlib2FyZEZvY3VzZWQgJiYgKDAsIF9rZXljb2RlMi5kZWZhdWx0KShldmVudCkgPT09ICdzcGFjZScpIHtcbiAgICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIG9ubHkgbGlzdGVuIHRvIGxlZnQgY2xpY2tzXG4gICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7XG4gICAgICAgIF90aGlzLnJlZnMudG91Y2hSaXBwbGUuc3RhcnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlVXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5yZWZzLnRvdWNoUmlwcGxlLmVuZCgpO1xuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5yZWZzLnRvdWNoUmlwcGxlLmVuZCgpO1xuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnJlZnMudG91Y2hSaXBwbGUuc3RhcnQoZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucmVmcy50b3VjaFJpcHBsZS5lbmQoKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzS2V5Ym9hcmRGb2N1c2VkOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gc2V0VGltZW91dCBpcyBuZWVkZWQgYmVjdWFzZSB0aGUgZm9jdXMgZXZlbnQgZmlyZXMgZmlyc3RcbiAgICAgIC8vIFdhaXQgc28gdGhhdCB3ZSBjYW4gY2FwdHVyZSBpZiB0aGlzIHdhcyBhIGtleWJvYXJkIGZvY3VzXG4gICAgICAvLyBvciB0b3VjaCBmb2N1c1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy50YWJQcmVzc2VkKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNLZXlib2FyZEZvY3VzZWQ6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgMTUwKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Gb2N1cyhldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKEVuaGFuY2VkU3dpdGNoLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgaW5wdXROb2RlID0gdGhpcy5yZWZzLmNoZWNrYm94O1xuICAgICAgaWYgKCghdGhpcy5wcm9wcy5zd2l0Y2hlZCB8fCBpbnB1dE5vZGUuY2hlY2tlZCAhPT0gdGhpcy5wcm9wcy5zd2l0Y2hlZCkgJiYgdGhpcy5wcm9wcy5vblBhcmVudFNob3VsZFVwZGF0ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uUGFyZW50U2hvdWxkVXBkYXRlKGlucHV0Tm9kZS5jaGVja2VkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBoYXNDaGVja2VkUHJvcCA9IG5leHRQcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY2hlY2tlZCcpO1xuICAgICAgdmFyIGhhc05ld0RlZmF1bHRQcm9wID0gbmV4dFByb3BzLmhhc093blByb3BlcnR5KCdkZWZhdWx0Q2hlY2tlZCcpICYmIG5leHRQcm9wcy5kZWZhdWx0Q2hlY2tlZCAhPT0gdGhpcy5wcm9wcy5kZWZhdWx0Q2hlY2tlZDtcblxuICAgICAgaWYgKGhhc0NoZWNrZWRQcm9wIHx8IGhhc05ld0RlZmF1bHRQcm9wKSB7XG4gICAgICAgIHZhciBzd2l0Y2hlZCA9IG5leHRQcm9wcy5jaGVja2VkIHx8IG5leHRQcm9wcy5kZWZhdWx0Q2hlY2tlZCB8fCBmYWxzZTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzd2l0Y2hlZDogc3dpdGNoZWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25QYXJlbnRTaG91bGRVcGRhdGUgJiYgc3dpdGNoZWQgIT09IHRoaXMucHJvcHMuc3dpdGNoZWQpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uUGFyZW50U2hvdWxkVXBkYXRlKHN3aXRjaGVkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzU3dpdGNoZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1N3aXRjaGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVmcy5jaGVja2JveC5jaGVja2VkO1xuICAgIH1cblxuICAgIC8vIG5vIGNhbGxiYWNrIGhlcmUgYmVjYXVzZSB0aGVyZSBpcyBubyBldmVudFxuXG4gIH0sIHtcbiAgICBrZXk6ICdzZXRTd2l0Y2hlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFN3aXRjaGVkKG5ld1N3aXRjaGVkVmFsdWUpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY2hlY2tlZCcpIHx8IHRoaXMucHJvcHMuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25QYXJlbnRTaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uUGFyZW50U2hvdWxkVXBkYXRlKG5ld1N3aXRjaGVkVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVmcy5jaGVja2JveC5jaGVja2VkID0gbmV3U3dpdGNoZWRWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdNYXRlcmlhbC1VSTogQ2Fubm90IGNhbGwgc2V0IG1ldGhvZCB3aGlsZSBjaGVja2VkIGlzIGRlZmluZWQgYXMgYSBwcm9wZXJ0eS4nKSA6IHZvaWQgMDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVmcy5jaGVja2JveC52YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBDaGVja2JveCBpbnB1dHMgb25seSB1c2UgU1BBQ0UgdG8gY2hhbmdlIHRoZWlyIHN0YXRlLiBVc2luZyBFTlRFUiB3aWxsXG4gICAgLy8gdXBkYXRlIHRoZSB1aSBidXQgbm90IHRoZSBpbnB1dC5cblxuXG4gICAgLyoqXG4gICAgICogQmVjYXVzZSBib3RoIHRoZSByaXBwbGVzIGFuZCB0aGUgY2hlY2tib3ggaW5wdXQgY2Fubm90IHNoYXJlIHBvaW50ZXJcbiAgICAgKiBldmVudHMsIHRoZSBjaGVja2JveCBpbnB1dCB0YWtlcyBjb250cm9sIG9mIHBvaW50ZXIgZXZlbnRzIGFuZCBjYWxsc1xuICAgICAqIHJpcHBsZSBhbmltYXRpb25zIG1hbnVhbGx5LlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBuYW1lID0gX3Byb3BzLm5hbWUsXG4gICAgICAgICAgdmFsdWUgPSBfcHJvcHMudmFsdWUsXG4gICAgICAgICAgaWNvblN0eWxlID0gX3Byb3BzLmljb25TdHlsZSxcbiAgICAgICAgICBpbnB1dFN0eWxlID0gX3Byb3BzLmlucHV0U3R5bGUsXG4gICAgICAgICAgaW5wdXRUeXBlID0gX3Byb3BzLmlucHV0VHlwZSxcbiAgICAgICAgICBsYWJlbCA9IF9wcm9wcy5sYWJlbCxcbiAgICAgICAgICBsYWJlbFN0eWxlID0gX3Byb3BzLmxhYmVsU3R5bGUsXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbiA9IF9wcm9wcy5sYWJlbFBvc2l0aW9uLFxuICAgICAgICAgIG9uU3dpdGNoID0gX3Byb3BzLm9uU3dpdGNoLFxuICAgICAgICAgIG9uQmx1ciA9IF9wcm9wcy5vbkJsdXIsXG4gICAgICAgICAgb25Gb2N1cyA9IF9wcm9wcy5vbkZvY3VzLFxuICAgICAgICAgIG9uTW91c2VVcCA9IF9wcm9wcy5vbk1vdXNlVXAsXG4gICAgICAgICAgb25Nb3VzZURvd24gPSBfcHJvcHMub25Nb3VzZURvd24sXG4gICAgICAgICAgb25Nb3VzZUxlYXZlID0gX3Byb3BzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgICBvblRvdWNoU3RhcnQgPSBfcHJvcHMub25Ub3VjaFN0YXJ0LFxuICAgICAgICAgIG9uVG91Y2hFbmQgPSBfcHJvcHMub25Ub3VjaEVuZCxcbiAgICAgICAgICBvblBhcmVudFNob3VsZFVwZGF0ZSA9IF9wcm9wcy5vblBhcmVudFNob3VsZFVwZGF0ZSxcbiAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBkaXNhYmxlVG91Y2hSaXBwbGUgPSBfcHJvcHMuZGlzYWJsZVRvdWNoUmlwcGxlLFxuICAgICAgICAgIGRpc2FibGVGb2N1c1JpcHBsZSA9IF9wcm9wcy5kaXNhYmxlRm9jdXNSaXBwbGUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICByaXBwbGVDb2xvciA9IF9wcm9wcy5yaXBwbGVDb2xvcixcbiAgICAgICAgICByaXBwbGVTdHlsZSA9IF9wcm9wcy5yaXBwbGVTdHlsZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICBzd2l0Y2hlZCA9IF9wcm9wcy5zd2l0Y2hlZCxcbiAgICAgICAgICBzd2l0Y2hFbGVtZW50ID0gX3Byb3BzLnN3aXRjaEVsZW1lbnQsXG4gICAgICAgICAgdGh1bWJTdHlsZSA9IF9wcm9wcy50aHVtYlN0eWxlLFxuICAgICAgICAgIHRyYWNrU3R5bGUgPSBfcHJvcHMudHJhY2tTdHlsZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWyduYW1lJywgJ3ZhbHVlJywgJ2ljb25TdHlsZScsICdpbnB1dFN0eWxlJywgJ2lucHV0VHlwZScsICdsYWJlbCcsICdsYWJlbFN0eWxlJywgJ2xhYmVsUG9zaXRpb24nLCAnb25Td2l0Y2gnLCAnb25CbHVyJywgJ29uRm9jdXMnLCAnb25Nb3VzZVVwJywgJ29uTW91c2VEb3duJywgJ29uTW91c2VMZWF2ZScsICdvblRvdWNoU3RhcnQnLCAnb25Ub3VjaEVuZCcsICdvblBhcmVudFNob3VsZFVwZGF0ZScsICdkaXNhYmxlZCcsICdkaXNhYmxlVG91Y2hSaXBwbGUnLCAnZGlzYWJsZUZvY3VzUmlwcGxlJywgJ2NsYXNzTmFtZScsICdyaXBwbGVDb2xvcicsICdyaXBwbGVTdHlsZScsICdzdHlsZScsICdzd2l0Y2hlZCcsICdzd2l0Y2hFbGVtZW50JywgJ3RodW1iU3R5bGUnLCAndHJhY2tTdHlsZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICAgIHZhciB3cmFwU3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy53cmFwLCBpY29uU3R5bGUpO1xuICAgICAgdmFyIG1lcmdlZFJpcHBsZVN0eWxlID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yaXBwbGUsIHJpcHBsZVN0eWxlKTtcblxuICAgICAgaWYgKHRodW1iU3R5bGUpIHtcbiAgICAgICAgd3JhcFN0eWxlcy5tYXJnaW5MZWZ0IC89IDI7XG4gICAgICAgIHdyYXBTdHlsZXMubWFyZ2luUmlnaHQgLz0gMjtcbiAgICAgIH1cblxuICAgICAgdmFyIGxhYmVsRWxlbWVudCA9IGxhYmVsICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnbGFiZWwnLFxuICAgICAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMubGFiZWwsIGxhYmVsU3R5bGUpKSB9LFxuICAgICAgICBsYWJlbFxuICAgICAgKTtcblxuICAgICAgdmFyIHNob3dUb3VjaFJpcHBsZSA9ICFkaXNhYmxlZCAmJiAhZGlzYWJsZVRvdWNoUmlwcGxlO1xuICAgICAgdmFyIHNob3dGb2N1c1JpcHBsZSA9ICFkaXNhYmxlZCAmJiAhZGlzYWJsZUZvY3VzUmlwcGxlO1xuXG4gICAgICB2YXIgdG91Y2hSaXBwbGUgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVG91Y2hSaXBwbGUyLmRlZmF1bHQsIHtcbiAgICAgICAgcmVmOiAndG91Y2hSaXBwbGUnLFxuICAgICAgICBrZXk6ICd0b3VjaFJpcHBsZScsXG4gICAgICAgIHN0eWxlOiBtZXJnZWRSaXBwbGVTdHlsZSxcbiAgICAgICAgY29sb3I6IG1lcmdlZFJpcHBsZVN0eWxlLmNvbG9yLFxuICAgICAgICBtdWlUaGVtZTogdGhpcy5jb250ZXh0Lm11aVRoZW1lLFxuICAgICAgICBjZW50ZXJSaXBwbGU6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgZm9jdXNSaXBwbGUgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRm9jdXNSaXBwbGUyLmRlZmF1bHQsIHtcbiAgICAgICAga2V5OiAnZm9jdXNSaXBwbGUnLFxuICAgICAgICBpbm5lclN0eWxlOiBtZXJnZWRSaXBwbGVTdHlsZSxcbiAgICAgICAgY29sb3I6IG1lcmdlZFJpcHBsZVN0eWxlLmNvbG9yLFxuICAgICAgICBtdWlUaGVtZTogdGhpcy5jb250ZXh0Lm11aVRoZW1lLFxuICAgICAgICBzaG93OiB0aGlzLnN0YXRlLmlzS2V5Ym9hcmRGb2N1c2VkXG4gICAgICB9KTtcblxuICAgICAgdmFyIHJpcHBsZXMgPSBbc2hvd1RvdWNoUmlwcGxlID8gdG91Y2hSaXBwbGUgOiBudWxsLCBzaG93Rm9jdXNSaXBwbGUgPyBmb2N1c1JpcHBsZSA6IG51bGxdO1xuXG4gICAgICB2YXIgaW5wdXRFbGVtZW50ID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgcmVmOiAnY2hlY2tib3gnLFxuICAgICAgICB0eXBlOiBpbnB1dFR5cGUsXG4gICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuaW5wdXQsIGlucHV0U3R5bGUpKSxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIG9uQmx1cjogdGhpcy5oYW5kbGVCbHVyLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZUZvY3VzLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2UsXG4gICAgICAgIG9uTW91c2VVcDogc2hvd1RvdWNoUmlwcGxlICYmIHRoaXMuaGFuZGxlTW91c2VVcCxcbiAgICAgICAgb25Nb3VzZURvd246IHNob3dUb3VjaFJpcHBsZSAmJiB0aGlzLmhhbmRsZU1vdXNlRG93bixcbiAgICAgICAgb25Nb3VzZUxlYXZlOiBzaG93VG91Y2hSaXBwbGUgJiYgdGhpcy5oYW5kbGVNb3VzZUxlYXZlLFxuICAgICAgICBvblRvdWNoU3RhcnQ6IHNob3dUb3VjaFJpcHBsZSAmJiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgIG9uVG91Y2hFbmQ6IHNob3dUb3VjaFJpcHBsZSAmJiB0aGlzLmhhbmRsZVRvdWNoRW5kXG4gICAgICB9KSk7XG5cbiAgICAgIC8vIElmIHRvZ2dsZSBjb21wb25lbnQgKGluZGljYXRlZCBieSB3aGV0aGVyIHRoZSBzdHlsZSBpbmNsdWRlcyB0aHVtYikgbWFudWFsbHkgbGF5IG91dFxuICAgICAgLy8gZWxlbWVudHMgaW4gb3JkZXIgdG8gbmVzdCByaXBwbGUgZWxlbWVudHNcbiAgICAgIHZhciBzd2l0Y2hPclRodW1iRWxlbWVudCA9ICF0aHVtYlN0eWxlID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKHdyYXBTdHlsZXMpIH0sXG4gICAgICAgIHN3aXRjaEVsZW1lbnQsXG4gICAgICAgIHJpcHBsZXNcbiAgICAgICkgOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMod3JhcFN0eWxlcykgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCB0cmFja1N0eWxlKSkgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9QYXBlcjIuZGVmYXVsdCxcbiAgICAgICAgICB7IHN0eWxlOiB0aHVtYlN0eWxlLCB6RGVwdGg6IDEsIGNpcmNsZTogdHJ1ZSB9LFxuICAgICAgICAgICcgJyxcbiAgICAgICAgICByaXBwbGVzLFxuICAgICAgICAgICcgJ1xuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICB2YXIgZWxlbWVudHNJbk9yZGVyID0gbGFiZWxQb3NpdGlvbiA9PT0gJ3JpZ2h0JyA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdHlsZTogc3R5bGVzLmNvbnRyb2xzIH0sXG4gICAgICAgIHN3aXRjaE9yVGh1bWJFbGVtZW50LFxuICAgICAgICBsYWJlbEVsZW1lbnRcbiAgICAgICkgOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHN0eWxlcy5jb250cm9scyB9LFxuICAgICAgICBsYWJlbEVsZW1lbnQsXG4gICAgICAgIHN3aXRjaE9yVGh1bWJFbGVtZW50XG4gICAgICApO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IHJlZjogJ3Jvb3QnLCBjbGFzc05hbWU6IGNsYXNzTmFtZSwgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCBzdHlsZSkpIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdEV2ZW50TGlzdGVuZXIyLmRlZmF1bHQsIHtcbiAgICAgICAgICB0YXJnZXQ6ICd3aW5kb3cnLFxuICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLFxuICAgICAgICAgIG9uS2V5VXA6IHRoaXMuaGFuZGxlS2V5VXBcbiAgICAgICAgfSksXG4gICAgICAgIGlucHV0RWxlbWVudCxcbiAgICAgICAgZWxlbWVudHNJbk9yZGVyXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRW5oYW5jZWRTd2l0Y2g7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5FbmhhbmNlZFN3aXRjaC5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuRW5oYW5jZWRTd2l0Y2gucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBjaGVja2VkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGRlZmF1bHRDaGVja2VkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGRpc2FibGVGb2N1c1JpcHBsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBkaXNhYmxlVG91Y2hSaXBwbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgaWNvblN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgaW5wdXRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGlucHV0VHlwZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgbGFiZWxQb3NpdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ2xlZnQnLCAncmlnaHQnXSksXG4gIGxhYmVsU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgb25CbHVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25Nb3VzZURvd246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25Nb3VzZUxlYXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uTW91c2VVcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvblBhcmVudFNob3VsZFVwZGF0ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvblN3aXRjaDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvblRvdWNoRW5kOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uVG91Y2hTdGFydDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICByaXBwbGVDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHJpcHBsZVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBzd2l0Y2hFbGVtZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQuaXNSZXF1aXJlZCxcbiAgc3dpdGNoZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbC5pc1JlcXVpcmVkLFxuICB0aHVtYlN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgdHJhY2tTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueVxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRW5oYW5jZWRTd2l0Y2g7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvaW50ZXJuYWwvRW5oYW5jZWRTd2l0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDY5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wdXJlID0gcmVxdWlyZSgncmVjb21wb3NlL3B1cmUnKTtcblxudmFyIF9wdXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B1cmUpO1xuXG52YXIgX1N2Z0ljb24gPSByZXF1aXJlKCcuLi8uLi9TdmdJY29uJyk7XG5cbnZhciBfU3ZnSWNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdmdJY29uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFRvZ2dsZUNoZWNrQm94T3V0bGluZUJsYW5rID0gZnVuY3Rpb24gVG9nZ2xlQ2hlY2tCb3hPdXRsaW5lQmxhbmsocHJvcHMpIHtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgIF9TdmdJY29uMi5kZWZhdWx0LFxuICAgIHByb3BzLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnTTE5IDV2MTRINVY1aDE0bTAtMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6JyB9KVxuICApO1xufTtcblRvZ2dsZUNoZWNrQm94T3V0bGluZUJsYW5rID0gKDAsIF9wdXJlMi5kZWZhdWx0KShUb2dnbGVDaGVja0JveE91dGxpbmVCbGFuayk7XG5Ub2dnbGVDaGVja0JveE91dGxpbmVCbGFuay5kaXNwbGF5TmFtZSA9ICdUb2dnbGVDaGVja0JveE91dGxpbmVCbGFuayc7XG5Ub2dnbGVDaGVja0JveE91dGxpbmVCbGFuay5tdWlOYW1lID0gJ1N2Z0ljb24nO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUb2dnbGVDaGVja0JveE91dGxpbmVCbGFuaztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9zdmctaWNvbnMvdG9nZ2xlL2NoZWNrLWJveC1vdXRsaW5lLWJsYW5rLmpzXG4vLyBtb2R1bGUgaWQgPSA2OTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHVyZSA9IHJlcXVpcmUoJ3JlY29tcG9zZS9wdXJlJyk7XG5cbnZhciBfcHVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wdXJlKTtcblxudmFyIF9TdmdJY29uID0gcmVxdWlyZSgnLi4vLi4vU3ZnSWNvbicpO1xuXG52YXIgX1N2Z0ljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3ZnSWNvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUb2dnbGVDaGVja0JveCA9IGZ1bmN0aW9uIFRvZ2dsZUNoZWNrQm94KHByb3BzKSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBfU3ZnSWNvbjIuZGVmYXVsdCxcbiAgICBwcm9wcyxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ00xOSAzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjExIDAgMi0uOSAyLTJWNWMwLTEuMS0uODktMi0yLTJ6bS05IDE0bC01LTUgMS40MS0xLjQxTDEwIDE0LjE3bDcuNTktNy41OUwxOSA4bC05IDl6JyB9KVxuICApO1xufTtcblRvZ2dsZUNoZWNrQm94ID0gKDAsIF9wdXJlMi5kZWZhdWx0KShUb2dnbGVDaGVja0JveCk7XG5Ub2dnbGVDaGVja0JveC5kaXNwbGF5TmFtZSA9ICdUb2dnbGVDaGVja0JveCc7XG5Ub2dnbGVDaGVja0JveC5tdWlOYW1lID0gJ1N2Z0ljb24nO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUb2dnbGVDaGVja0JveDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9zdmctaWNvbnMvdG9nZ2xlL2NoZWNrLWJveC5qc1xuLy8gbW9kdWxlIGlkID0gNjk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5Jyk7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9Db25zdW1hYmxlQXJyYXkyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfVGFibGVSb3dDb2x1bW4gPSByZXF1aXJlKCcuL1RhYmxlUm93Q29sdW1uJyk7XG5cbnZhciBfVGFibGVSb3dDb2x1bW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFibGVSb3dDb2x1bW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIHRhYmxlRm9vdGVyID0gY29udGV4dC5tdWlUaGVtZS50YWJsZUZvb3RlcjtcblxuXG4gIHJldHVybiB7XG4gICAgY2VsbDoge1xuICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICcgKyB0YWJsZUZvb3Rlci5ib3JkZXJDb2xvcixcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdib3R0b20nLFxuICAgICAgcGFkZGluZzogMjAsXG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gICAgfVxuICB9O1xufVxuXG52YXIgVGFibGVGb290ZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShUYWJsZUZvb3RlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVGFibGVGb290ZXIoKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgVGFibGVGb290ZXIpO1xuICAgIHJldHVybiAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChUYWJsZUZvb3Rlci5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoVGFibGVGb290ZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFRhYmxlRm9vdGVyLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFkanVzdEZvckNoZWNrYm94ID0gX3Byb3BzLmFkanVzdEZvckNoZWNrYm94LFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnYWRqdXN0Rm9yQ2hlY2tib3gnLCAnY2hpbGRyZW4nLCAnY2xhc3NOYW1lJywgJ3N0eWxlJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuXG4gICAgICB2YXIgZm9vdGVyUm93cyA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgcm93TnVtYmVyKSB7XG4gICAgICAgIHZhciBuZXdDaGlsZFByb3BzID0ge1xuICAgICAgICAgIGRpc3BsYXlCb3JkZXI6IGZhbHNlLFxuICAgICAgICAgIGtleTogJ2YtJyArIHJvd051bWJlcixcbiAgICAgICAgICByb3dOdW1iZXI6IHJvd051bWJlcixcbiAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuY2VsbCwgY2hpbGQucHJvcHMuc3R5bGUpXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG5ld0Rlc2NlbmRhbnRzID0gdm9pZCAwO1xuXG4gICAgICAgIGlmIChhZGp1c3RGb3JDaGVja2JveCkge1xuICAgICAgICAgIG5ld0Rlc2NlbmRhbnRzID0gW19yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9UYWJsZVJvd0NvbHVtbjIuZGVmYXVsdCwgeyBrZXk6ICdmcGNiJyArIHJvd051bWJlciwgc3R5bGU6IHsgd2lkdGg6IDI0IH0gfSldLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5My5kZWZhdWx0KShfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheShjaGlsZC5wcm9wcy5jaGlsZHJlbikpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdEZXNjZW5kYW50cyA9IGNoaWxkLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0NoaWxkUHJvcHMsIG5ld0Rlc2NlbmRhbnRzKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICd0Zm9vdCcsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZSkpIH0sIG90aGVyKSxcbiAgICAgICAgZm9vdGVyUm93c1xuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFRhYmxlRm9vdGVyO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuVGFibGVGb290ZXIubXVpTmFtZSA9ICdUYWJsZUZvb3Rlcic7XG5UYWJsZUZvb3Rlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFkanVzdEZvckNoZWNrYm94OiB0cnVlLFxuICBzdHlsZToge31cbn07XG5UYWJsZUZvb3Rlci5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuVGFibGVGb290ZXIucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBDb250cm9scyB3aGV0aGVyIG9yIG5vdCBoZWFkZXIgcm93cyBzaG91bGQgYmUgYWRqdXN0ZWRcbiAgICogZm9yIGEgY2hlY2tib3ggY29sdW1uLiBJZiB0aGUgc2VsZWN0IGFsbCBjaGVja2JveCBpcyB0cnVlLFxuICAgKiB0aGlzIHByb3BlcnR5IHdpbGwgbm90IGluZmx1ZW5jZSB0aGUgbnVtYmVyIG9mIGNvbHVtbnMuXG4gICAqIFRoaXMgaXMgbWFpbmx5IHVzZWZ1bCBmb3IgXCJzdXBlciBoZWFkZXJcIiByb3dzIHNvIHRoYXRcbiAgICogdGhlIGNoZWNrYm94IGNvbHVtbiBkb2VzIG5vdCBjcmVhdGUgYW4gb2Zmc2V0IHRoYXQgbmVlZHNcbiAgICogdG8gYmUgYWNjb3VudGVkIGZvciBtYW51YWxseS5cbiAgICovXG4gIGFkanVzdEZvckNoZWNrYm94OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBDaGlsZHJlbiBwYXNzZWQgdG8gdGFibGUgZm9vdGVyLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRhYmxlRm9vdGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1RhYmxlL1RhYmxlRm9vdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2OTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfQ2hlY2tib3ggPSByZXF1aXJlKCcuLi9DaGVja2JveCcpO1xuXG52YXIgX0NoZWNrYm94MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NoZWNrYm94KTtcblxudmFyIF9UYWJsZUhlYWRlckNvbHVtbiA9IHJlcXVpcmUoJy4vVGFibGVIZWFkZXJDb2x1bW4nKTtcblxudmFyIF9UYWJsZUhlYWRlckNvbHVtbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYWJsZUhlYWRlckNvbHVtbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCkge1xuICB2YXIgdGFibGVIZWFkZXIgPSBjb250ZXh0Lm11aVRoZW1lLnRhYmxlSGVhZGVyO1xuXG5cbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgJyArIHRhYmxlSGVhZGVyLmJvcmRlckNvbG9yXG4gICAgfVxuICB9O1xufVxuXG52YXIgVGFibGVIZWFkZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShUYWJsZUhlYWRlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVGFibGVIZWFkZXIoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgVGFibGVIZWFkZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gVGFibGVIZWFkZXIuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFRhYmxlSGVhZGVyKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuaGFuZGxlQ2hlY2tBbGwgPSBmdW5jdGlvbiAoZXZlbnQsIGNoZWNrZWQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblNlbGVjdEFsbCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vblNlbGVjdEFsbChjaGVja2VkKTtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoVGFibGVIZWFkZXIsIFt7XG4gICAga2V5OiAnY3JlYXRlU3VwZXJIZWFkZXJSb3dzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlU3VwZXJIZWFkZXJSb3dzKCkge1xuICAgICAgdmFyIG51bUNoaWxkcmVuID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgaWYgKG51bUNoaWxkcmVuID09PSAxKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICB2YXIgc3VwZXJIZWFkZXJzID0gW107XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbnVtQ2hpbGRyZW4gLSAxOyBpbmRleCsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHRoaXMucHJvcHMuY2hpbGRyZW5baW5kZXhdO1xuXG4gICAgICAgIGlmICghX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkgY29udGludWU7XG5cbiAgICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICAgIGtleTogJ3NoJyArIGluZGV4LFxuICAgICAgICAgIHJvd051bWJlcjogaW5kZXhcbiAgICAgICAgfTtcbiAgICAgICAgc3VwZXJIZWFkZXJzLnB1c2godGhpcy5jcmVhdGVTdXBlckhlYWRlclJvdyhjaGlsZCwgcHJvcHMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN1cGVySGVhZGVycy5sZW5ndGgpIHJldHVybiBzdXBlckhlYWRlcnM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlU3VwZXJIZWFkZXJSb3cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVTdXBlckhlYWRlclJvdyhjaGlsZCwgcHJvcHMpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuICAgICAgaWYgKHRoaXMucHJvcHMuYWRqdXN0Rm9yQ2hlY2tib3gpIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaCh0aGlzLmdldENoZWNrYm94UGxhY2Vob2xkZXIocHJvcHMpKTtcbiAgICAgIH1cbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzLCBjaGlsZHJlbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlQmFzZUhlYWRlclJvdycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUJhc2VIZWFkZXJSb3coKSB7XG4gICAgICB2YXIgY2hpbGRyZW5BcnJheSA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgdmFyIG51bUNoaWxkcmVuID0gY2hpbGRyZW5BcnJheS5sZW5ndGg7XG4gICAgICBpZiAobnVtQ2hpbGRyZW4gPCAxKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbkFycmF5W251bUNoaWxkcmVuIC0gMV07XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAga2V5OiAnaCcgKyBudW1DaGlsZHJlbixcbiAgICAgICAgcm93TnVtYmVyOiBudW1DaGlsZHJlblxuICAgICAgfTtcblxuICAgICAgdmFyIGNoaWxkcmVuID0gW3RoaXMuZ2V0U2VsZWN0QWxsQ2hlY2tib3hDb2x1bW4ocHJvcHMpXTtcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzLCBjaGlsZHJlbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q2hlY2tib3hQbGFjZWhvbGRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoZWNrYm94UGxhY2Vob2xkZXIocHJvcHMpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5hZGp1c3RGb3JDaGVja2JveCkgcmV0dXJuIG51bGw7XG5cbiAgICAgIHZhciBkaXNhYmxlZCA9ICF0aGlzLnByb3BzLmVuYWJsZVNlbGVjdEFsbDtcbiAgICAgIHZhciBrZXkgPSAnaHBjYicgKyBwcm9wcy5yb3dOdW1iZXI7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1RhYmxlSGVhZGVyQ29sdW1uMi5kZWZhdWx0LCB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHdpZHRoOiAyNCxcbiAgICAgICAgICBjdXJzb3I6IGRpc2FibGVkID8gJ2RlZmF1bHQnIDogJ2luaGVyaXQnXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFNlbGVjdEFsbENoZWNrYm94Q29sdW1uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2VsZWN0QWxsQ2hlY2tib3hDb2x1bW4ocHJvcHMpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5kaXNwbGF5U2VsZWN0QWxsKSByZXR1cm4gdGhpcy5nZXRDaGVja2JveFBsYWNlaG9sZGVyKHByb3BzKTtcblxuICAgICAgdmFyIGRpc2FibGVkID0gIXRoaXMucHJvcHMuZW5hYmxlU2VsZWN0QWxsO1xuICAgICAgdmFyIGNoZWNrYm94ID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0NoZWNrYm94Mi5kZWZhdWx0LCB7XG4gICAgICAgIGtleTogJ3NlbGVjdGFsbGNiJyxcbiAgICAgICAgbmFtZTogJ3NlbGVjdGFsbGNiJyxcbiAgICAgICAgdmFsdWU6ICdzZWxlY3RlZCcsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgY2hlY2tlZDogdGhpcy5wcm9wcy5zZWxlY3RBbGxTZWxlY3RlZCxcbiAgICAgICAgb25DaGVjazogdGhpcy5oYW5kbGVDaGVja0FsbFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBrZXkgPSAnaHBjYicgKyBwcm9wcy5yb3dOdW1iZXI7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9UYWJsZUhlYWRlckNvbHVtbjIuZGVmYXVsdCxcbiAgICAgICAge1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICB3aWR0aDogMjQsXG4gICAgICAgICAgICBjdXJzb3I6IGRpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdpbmhlcml0J1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tib3hcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICAgIHZhciBzdXBlckhlYWRlclJvd3MgPSB0aGlzLmNyZWF0ZVN1cGVySGVhZGVyUm93cygpO1xuICAgICAgdmFyIGJhc2VIZWFkZXJSb3cgPSB0aGlzLmNyZWF0ZUJhc2VIZWFkZXJSb3coKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAndGhlYWQnLFxuICAgICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSkgfSxcbiAgICAgICAgc3VwZXJIZWFkZXJSb3dzLFxuICAgICAgICBiYXNlSGVhZGVyUm93XG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gVGFibGVIZWFkZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5UYWJsZUhlYWRlci5tdWlOYW1lID0gJ1RhYmxlSGVhZGVyJztcblRhYmxlSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWRqdXN0Rm9yQ2hlY2tib3g6IHRydWUsXG4gIGRpc3BsYXlTZWxlY3RBbGw6IHRydWUsXG4gIGVuYWJsZVNlbGVjdEFsbDogdHJ1ZSxcbiAgc2VsZWN0QWxsU2VsZWN0ZWQ6IGZhbHNlXG59O1xuVGFibGVIZWFkZXIuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblRhYmxlSGVhZGVyLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIENvbnRyb2xzIHdoZXRoZXIgb3Igbm90IGhlYWRlciByb3dzIHNob3VsZCBiZVxuICAgKiBhZGp1c3RlZCBmb3IgYSBjaGVja2JveCBjb2x1bW4uIElmIHRoZSBzZWxlY3QgYWxsXG4gICAqIGNoZWNrYm94IGlzIHRydWUsIHRoaXMgcHJvcGVydHkgd2lsbCBub3QgaW5mbHVlbmNlXG4gICAqIHRoZSBudW1iZXIgb2YgY29sdW1ucy4gVGhpcyBpcyBtYWlubHkgdXNlZnVsIGZvclxuICAgKiBcInN1cGVyIGhlYWRlclwiIHJvd3Mgc28gdGhhdCB0aGUgY2hlY2tib3ggY29sdW1uXG4gICAqIGRvZXMgbm90IGNyZWF0ZSBhbiBvZmZzZXQgdGhhdCBuZWVkcyB0byBiZSBhY2NvdW50ZWRcbiAgICogZm9yIG1hbnVhbGx5LlxuICAgKi9cbiAgYWRqdXN0Rm9yQ2hlY2tib3g6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIENoaWxkcmVuIHBhc3NlZCB0byB0YWJsZSBoZWFkZXIuXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIGNzcyBjbGFzcyBuYW1lIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogQ29udHJvbHMgd2hldGhlciBvciBub3QgdGhlIHNlbGVjdCBhbGwgY2hlY2tib3ggaXMgZGlzcGxheWVkLlxuICAgKi9cbiAgZGlzcGxheVNlbGVjdEFsbDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIHRoZSBzZWxlY3QgYWxsIGJ1dHRvbiB3aWxsIGJlIGludGVyYWN0YWJsZS5cbiAgICogSWYgc2V0IHRvIGZhbHNlLCB0aGUgYnV0dG9uIHdpbGwgbm90IGJlIGludGVyYWN0YWJsZS5cbiAgICogVG8gaGlkZSB0aGUgY2hlY2tib3gsIHNldCBkaXNwbGF5U2VsZWN0QWxsIHRvIGZhbHNlLlxuICAgKi9cbiAgZW5hYmxlU2VsZWN0QWxsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIENhbGxiYWNrIHdoZW4gc2VsZWN0IGFsbCBoYXMgYmVlbiBjaGVja2VkLlxuICAgKi9cbiAgb25TZWxlY3RBbGw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogVHJ1ZSB3aGVuIHNlbGVjdCBhbGwgaGFzIGJlZW4gY2hlY2tlZC5cbiAgICovXG4gIHNlbGVjdEFsbFNlbGVjdGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBUYWJsZUhlYWRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9UYWJsZS9UYWJsZUhlYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNjk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQsIHN0YXRlKSB7XG4gIHZhciB0YWJsZVJvdyA9IGNvbnRleHQubXVpVGhlbWUudGFibGVSb3c7XG5cblxuICB2YXIgY2VsbEJnQ29sb3IgPSAnaW5oZXJpdCc7XG4gIGlmIChwcm9wcy5ob3ZlcmVkIHx8IHN0YXRlLmhvdmVyZWQpIHtcbiAgICBjZWxsQmdDb2xvciA9IHRhYmxlUm93LmhvdmVyQ29sb3I7XG4gIH0gZWxzZSBpZiAocHJvcHMuc2VsZWN0ZWQpIHtcbiAgICBjZWxsQmdDb2xvciA9IHRhYmxlUm93LnNlbGVjdGVkQ29sb3I7XG4gIH0gZWxzZSBpZiAocHJvcHMuc3RyaXBlZCkge1xuICAgIGNlbGxCZ0NvbG9yID0gdGFibGVSb3cuc3RyaXBlQ29sb3I7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogcHJvcHMuZGlzcGxheUJvcmRlciAmJiAnMXB4IHNvbGlkICcgKyB0YWJsZVJvdy5ib3JkZXJDb2xvcixcbiAgICAgIGNvbG9yOiB0YWJsZVJvdy50ZXh0Q29sb3IsXG4gICAgICBoZWlnaHQ6IHRhYmxlUm93LmhlaWdodFxuICAgIH0sXG4gICAgY2VsbDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBjZWxsQmdDb2xvclxuICAgIH1cbiAgfTtcbn1cblxudmFyIFRhYmxlUm93ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoVGFibGVSb3csIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRhYmxlUm93KCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFRhYmxlUm93KTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFRhYmxlUm93Ll9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShUYWJsZVJvdykpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgaG92ZXJlZDogZmFsc2VcbiAgICB9LCBfdGhpcy5vbkNlbGxDbGljayA9IGZ1bmN0aW9uIChldmVudCwgY29sdW1uSW5kZXgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5zZWxlY3RhYmxlICYmIF90aGlzLnByb3BzLm9uQ2VsbENsaWNrKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQ2VsbENsaWNrKGV2ZW50LCBfdGhpcy5wcm9wcy5yb3dOdW1iZXIsIGNvbHVtbkluZGV4KTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LmN0cmxLZXkgPSB0cnVlO1xuICAgICAgX3RoaXMub25Sb3dDbGljayhldmVudCk7XG4gICAgfSwgX3RoaXMub25DZWxsSG92ZXIgPSBmdW5jdGlvbiAoZXZlbnQsIGNvbHVtbkluZGV4KSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuaG92ZXJhYmxlKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgaG92ZXJlZDogdHJ1ZSB9KTtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2VsbEhvdmVyKSBfdGhpcy5wcm9wcy5vbkNlbGxIb3ZlcihldmVudCwgX3RoaXMucHJvcHMucm93TnVtYmVyLCBjb2x1bW5JbmRleCk7XG4gICAgICAgIF90aGlzLm9uUm93SG92ZXIoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLm9uQ2VsbEhvdmVyRXhpdCA9IGZ1bmN0aW9uIChldmVudCwgY29sdW1uSW5kZXgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5ob3ZlcmFibGUpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2VsbEhvdmVyRXhpdCkgX3RoaXMucHJvcHMub25DZWxsSG92ZXJFeGl0KGV2ZW50LCBfdGhpcy5wcm9wcy5yb3dOdW1iZXIsIGNvbHVtbkluZGV4KTtcbiAgICAgICAgX3RoaXMub25Sb3dIb3ZlckV4aXQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShUYWJsZVJvdywgW3tcbiAgICBrZXk6ICdvblJvd0NsaWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Sb3dDbGljayhldmVudCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0YWJsZSAmJiB0aGlzLnByb3BzLm9uUm93Q2xpY2spIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJvd0NsaWNrKGV2ZW50LCB0aGlzLnByb3BzLnJvd051bWJlcik7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25Sb3dIb3ZlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUm93SG92ZXIoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUm93SG92ZXIpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJvd0hvdmVyKGV2ZW50LCB0aGlzLnByb3BzLnJvd051bWJlcik7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25Sb3dIb3ZlckV4aXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblJvd0hvdmVyRXhpdChldmVudCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Sb3dIb3ZlckV4aXQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJvd0hvdmVyRXhpdChldmVudCwgdGhpcy5wcm9wcy5yb3dOdW1iZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIGRpc3BsYXlCb3JkZXIgPSBfcHJvcHMuZGlzcGxheUJvcmRlcixcbiAgICAgICAgICBob3ZlcmFibGUgPSBfcHJvcHMuaG92ZXJhYmxlLFxuICAgICAgICAgIGhvdmVyZWQgPSBfcHJvcHMuaG92ZXJlZCxcbiAgICAgICAgICBvbkNlbGxDbGljayA9IF9wcm9wcy5vbkNlbGxDbGljayxcbiAgICAgICAgICBvbkNlbGxIb3ZlciA9IF9wcm9wcy5vbkNlbGxIb3ZlcixcbiAgICAgICAgICBvbkNlbGxIb3ZlckV4aXQgPSBfcHJvcHMub25DZWxsSG92ZXJFeGl0LFxuICAgICAgICAgIG9uUm93Q2xpY2sgPSBfcHJvcHMub25Sb3dDbGljayxcbiAgICAgICAgICBvblJvd0hvdmVyID0gX3Byb3BzLm9uUm93SG92ZXIsXG4gICAgICAgICAgb25Sb3dIb3ZlckV4aXQgPSBfcHJvcHMub25Sb3dIb3ZlckV4aXQsXG4gICAgICAgICAgcm93TnVtYmVyID0gX3Byb3BzLnJvd051bWJlcixcbiAgICAgICAgICBzZWxlY3RhYmxlID0gX3Byb3BzLnNlbGVjdGFibGUsXG4gICAgICAgICAgc2VsZWN0ZWQgPSBfcHJvcHMuc2VsZWN0ZWQsXG4gICAgICAgICAgc3RyaXBlZCA9IF9wcm9wcy5zdHJpcGVkLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2NsYXNzTmFtZScsICdkaXNwbGF5Qm9yZGVyJywgJ2hvdmVyYWJsZScsICdob3ZlcmVkJywgJ29uQ2VsbENsaWNrJywgJ29uQ2VsbEhvdmVyJywgJ29uQ2VsbEhvdmVyRXhpdCcsICdvblJvd0NsaWNrJywgJ29uUm93SG92ZXInLCAnb25Sb3dIb3ZlckV4aXQnLCAncm93TnVtYmVyJywgJ3NlbGVjdGFibGUnLCAnc2VsZWN0ZWQnLCAnc3RyaXBlZCcsICdzdHlsZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzLnN0YXRlKTtcblxuICAgICAgdmFyIHJvd0NvbHVtbnMgPSBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgY29sdW1uTnVtYmVyKSB7XG4gICAgICAgIGlmIChfcmVhY3QyLmRlZmF1bHQuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgIGNvbHVtbk51bWJlcjogY29sdW1uTnVtYmVyLFxuICAgICAgICAgICAgaG92ZXJhYmxlOiBfdGhpczIucHJvcHMuaG92ZXJhYmxlLFxuICAgICAgICAgICAga2V5OiBfdGhpczIucHJvcHMucm93TnVtYmVyICsgJy0nICsgY29sdW1uTnVtYmVyLFxuICAgICAgICAgICAgb25DbGljazogX3RoaXMyLm9uQ2VsbENsaWNrLFxuICAgICAgICAgICAgb25Ib3ZlcjogX3RoaXMyLm9uQ2VsbEhvdmVyLFxuICAgICAgICAgICAgb25Ib3ZlckV4aXQ6IF90aGlzMi5vbkNlbGxIb3ZlckV4aXQsXG4gICAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuY2VsbCwgY2hpbGQucHJvcHMuc3R5bGUpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICd0cicsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKVxuICAgICAgICB9LCBvdGhlciksXG4gICAgICAgIHJvd0NvbHVtbnNcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBUYWJsZVJvdztcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblRhYmxlUm93LmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzcGxheUJvcmRlcjogdHJ1ZSxcbiAgaG92ZXJhYmxlOiBmYWxzZSxcbiAgaG92ZXJlZDogZmFsc2UsXG4gIHNlbGVjdGFibGU6IHRydWUsXG4gIHN0cmlwZWQ6IGZhbHNlXG59O1xuVGFibGVSb3cuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblRhYmxlUm93LnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIENoaWxkcmVuIHBhc3NlZCB0byB0YWJsZSByb3cuXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIGNzcyBjbGFzcyBuYW1lIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgcm93IGJvcmRlciB3aWxsIGJlIGRpc3BsYXllZCBmb3IgdGhlIHJvdy5cbiAgICogSWYgZmFsc2UsIG5vIGJvcmRlciB3aWxsIGJlIGRyYXduLlxuICAgKi9cbiAgZGlzcGxheUJvcmRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogQ29udHJvbHMgd2hldGhlciBvciBub3QgdGhlIHJvdyByZXNwb25kcyB0byBob3ZlciBldmVudHMuXG4gICAqL1xuICBob3ZlcmFibGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIENvbnRyb2xzIHdoZXRoZXIgb3Igbm90IHRoZSByb3cgc2hvdWxkIGJlIHJlbmRlcmVkIGFzIGJlaW5nXG4gICAqIGhvdmVyZWQuIFRoaXMgcHJvcGVydHkgaXMgZXZhbHVhdGVkIGluIGFkZGl0aW9uIHRvIHRoaXMuc3RhdGUuaG92ZXJlZFxuICAgKiBhbmQgY2FuIGJlIHVzZWQgdG8gc3luY2hyb25pemUgdGhlIGhvdmVyZWQgc3RhdGUgd2l0aCBzb21lIG90aGVyXG4gICAqIGV4dGVybmFsIGV2ZW50cy5cbiAgICovXG4gIGhvdmVyZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogQ2FsbGVkIHdoZW4gYSByb3cgY2VsbCBpcyBjbGlja2VkLlxuICAgKiByb3dOdW1iZXIgaXMgdGhlIHJvdyBudW1iZXIgYW5kIGNvbHVtbklkIGlzXG4gICAqIHRoZSBjb2x1bW4gbnVtYmVyIG9yIHRoZSBjb2x1bW4ga2V5LlxuICAgKi9cbiAgb25DZWxsQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogQ2FsbGVkIHdoZW4gYSB0YWJsZSBjZWxsIGlzIGhvdmVyZWQuXG4gICAqIHJvd051bWJlciBpcyB0aGUgcm93IG51bWJlciBvZiB0aGUgaG92ZXJlZCByb3dcbiAgICogYW5kIGNvbHVtbklkIGlzIHRoZSBjb2x1bW4gbnVtYmVyIG9yIHRoZSBjb2x1bW4ga2V5IG9mIHRoZSBjZWxsLlxuICAgKi9cbiAgb25DZWxsSG92ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogQ2FsbGVkIHdoZW4gYSB0YWJsZSBjZWxsIGlzIG5vIGxvbmdlciBob3ZlcmVkLlxuICAgKiByb3dOdW1iZXIgaXMgdGhlIHJvdyBudW1iZXIgb2YgdGhlIHJvdyBhbmQgY29sdW1uSWRcbiAgICogaXMgdGhlIGNvbHVtbiBudW1iZXIgb3IgdGhlIGNvbHVtbiBrZXkgb2YgdGhlIGNlbGwuXG4gICAqL1xuICBvbkNlbGxIb3ZlckV4aXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogQ2FsbGVkIHdoZW4gcm93IGlzIGNsaWNrZWQuXG4gICAqL1xuICBvblJvd0NsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIENhbGxlZCB3aGVuIGEgdGFibGUgcm93IGlzIGhvdmVyZWQuXG4gICAqIHJvd051bWJlciBpcyB0aGUgcm93IG51bWJlciBvZiB0aGUgaG92ZXJlZCByb3cuXG4gICAqL1xuICBvblJvd0hvdmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIENhbGxlZCB3aGVuIGEgdGFibGUgcm93IGlzIG5vIGxvbmdlciBob3ZlcmVkLlxuICAgKiByb3dOdW1iZXIgaXMgdGhlIHJvdyBudW1iZXIgb2YgdGhlIHJvdyB0aGF0IGlzIG5vIGxvbmdlciBob3ZlcmVkLlxuICAgKi9cbiAgb25Sb3dIb3ZlckV4aXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE51bWJlciB0byBpZGVudGlmeSB0aGUgcm93LiBUaGlzIHByb3BlcnR5IGlzXG4gICAqIGF1dG9tYXRpY2FsbHkgcG9wdWxhdGVkIHdoZW4gdXNlZCB3aXRoIHRoZSBUYWJsZUJvZHkgY29tcG9uZW50LlxuICAgKi9cbiAgcm93TnVtYmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgLyoqXG4gICAqIElmIHRydWUsIHRhYmxlIHJvd3MgY2FuIGJlIHNlbGVjdGVkLiBJZiBtdWx0aXBsZSByb3dcbiAgICogc2VsZWN0aW9uIGlzIGRlc2lyZWQsIGVuYWJsZSBtdWx0aVNlbGVjdGFibGUuXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHRydWUuXG4gICAqL1xuICBzZWxlY3RhYmxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCBhIHBhcnRpY3VsYXIgcm93IGlzIHNlbGVjdGVkLlxuICAgKiBUaGlzIHByb3BlcnR5IGNhbiBiZSB1c2VkIHRvIHByb2dyYW1tYXRpY2FsbHkgc2VsZWN0IHJvd3MuXG4gICAqL1xuICBzZWxlY3RlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRoZSByb3cgaXMgc3RyaXBlZC5cbiAgICovXG4gIHN0cmlwZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRhYmxlUm93O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1RhYmxlL1RhYmxlUm93LmpzXG4vLyBtb2R1bGUgaWQgPSA2OThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDek1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMva0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==