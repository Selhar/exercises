/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @fullSyntaxTransform
 * @providesModule getBabelRelayPlugin
 * @format
 */

'use strict';

/**
 * Returns a new Babel Transformer that uses the supplied schema to transform
 * template strings tagged with `Relay.QL` into an internal representation of
 * GraphQL queries.
 */
function getBabelRelayPlugin(schemaProvider, pluginOptions) {
  var options = pluginOptions || {};

  return function (babel) {
    var t = babel.types;
    return {
      visitor: {
        /**
         * Transform Relay.QL`...`.
         */
        TaggedTemplateExpression: function TaggedTemplateExpression(path, state) {
          var _getValidRelayQLTag = require('././getValidRelayQLTag')(path),
              quasi = _getValidRelayQLTag[0],
              tagName = _getValidRelayQLTag[1],
              propName = _getValidRelayQLTag[2];

          if (quasi) {
            var documentName = require('././getDocumentName')(path, state);
            path.replaceWith(require('././compileRelayQLTag')(t, schemaProvider, quasi, documentName, propName, tagName, state, options));
          }
        }
      }
    };
  };
}

module.exports = getBabelRelayPlugin;