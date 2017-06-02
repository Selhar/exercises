/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule hasOverlappingIDs
 * 
 * @format
 */

'use strict';

var _keys2 = _interopRequireDefault(require('babel-runtime/core-js/object/keys'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function hasOverlappingIDs(snapshot, updatedRecordIDs) {
  var keys = (0, _keys2['default'])(snapshot.seenRecords);
  for (var ii = 0; ii < keys.length; ii++) {
    if (updatedRecordIDs.hasOwnProperty(keys[ii])) {
      return true;
    }
  }
  return false;
}

module.exports = hasOverlappingIDs;