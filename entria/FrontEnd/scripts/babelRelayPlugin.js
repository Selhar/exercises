'use strict'

const getBabelRelayPlugin = require('babel-relay-plugin')
const introspectionQuery = require('graphql/utilities').introspectionQuery
const request = require('sync-request')

const url = 'http://localhost:5000/graphql'

const response = request('POST', url, {
  json: {
    query: introspectionQuery
  }
});

const schema = JSON.parse(response.body.toString('utf-8'))

module.exports = { plugins: [getBabelRelayPlugin(schema.data, { abortOnError: true })] }