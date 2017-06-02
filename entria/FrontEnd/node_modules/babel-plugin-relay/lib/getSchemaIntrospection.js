/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @format
 */

'use strict';

var _require = require('graphql'),
    parse = _require.parse;

var RELAY_DIRECTIVES = '\n  directive @include(if: Boolean) on FRAGMENT_DEFINITION | FRAGMENT_SPREAD | INLINE_FRAGMENT | FIELD\n  directive @skip(if: Boolean) on FRAGMENT_DEFINITION | FRAGMENT_SPREAD | INLINE_FRAGMENT | FIELD\n  directive @relay(\n    isConnectionWithoutNodeID: Boolean,\n    pattern: Boolean,\n    plural: Boolean,\n    variables: [String],\n  ) on FRAGMENT_DEFINITION | FRAGMENT_SPREAD | INLINE_FRAGMENT | FIELD\n  directive ' + '@' + 'generated on OPERATION | FRAGMENT_DEFINITION | FRAGMENT_SPREAD | INLINE_FRAGMENT\n';

function getSchemaIntrospection(schemaPath) {
  try {
    var source = require('fs').readFileSync(schemaPath, 'utf8');
    if (source[0] === '{') {
      return JSON.parse(source);
    }
    return parse(RELAY_DIRECTIVES + '\n' + source);
  } catch (error) {
    // Log a more helpful warning (by including the schema path).
    console.error('Encountered the following error while loading the GraphQL schema: ' + schemaPath + '\n\n' + error.stack.split('\n').map(function (line) {
      return '> ' + line;
    }).join('\n'));
    throw error;
  }
}

module.exports = getSchemaIntrospection;