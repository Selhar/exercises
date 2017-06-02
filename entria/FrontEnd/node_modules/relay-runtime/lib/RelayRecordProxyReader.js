/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayRecordProxyReader
 * 
 * @format
 */

'use strict';

function getDataID(record) {
  return record.getDataID();
}

function getType(record) {
  return record.getType();
}

function getValue(record, name, args) {
  return record.getValue(name, args);
}

function getLinkedRecordID(record, name, args) {
  var linkedRecord = record.getLinkedRecord(name, args);
  return linkedRecord == null ? linkedRecord : linkedRecord.getDataID();
}

function getLinkedRecordIDs(record, name, args) {
  var linkedRecords = record.getLinkedRecords(name, args);
  return linkedRecords == null ? linkedRecords : linkedRecords.map(function (proxy) {
    return proxy == null ? proxy : proxy.getDataID();
  });
}

module.exports = {
  getDataID: getDataID,
  getType: getType,
  getValue: getValue,
  getLinkedRecordID: getLinkedRecordID,
  getLinkedRecordIDs: getLinkedRecordIDs
};