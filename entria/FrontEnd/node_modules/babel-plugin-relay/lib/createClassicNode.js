/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createClassicNode
 * @format
 */

'use strict';

var _keys2 = _interopRequireDefault(require('babel-runtime/core-js/object/keys'));

var _assign2 = _interopRequireDefault(require('babel-runtime/core-js/object/assign'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Relay Classic transforms to inline generated content.
 */
function createClassicNode(t, path, graphqlDefinition, state) {
  if (graphqlDefinition.kind === 'FragmentDefinition') {
    return createFragmentConcreteNode(t, path, graphqlDefinition, state);
  }

  if (graphqlDefinition.kind === 'OperationDefinition') {
    return createOperationConcreteNode(t, path, graphqlDefinition, state);
  }

  throw new Error('BabelPluginRelay: Expected a fragment, mutation, query, or ' + 'subscription, got `' + graphqlDefinition.kind + '`.');
}

function createFragmentConcreteNode(t, path, definition, state) {
  var _createClassicAST = createClassicAST(t, definition),
      classicAST = _createClassicAST.classicAST,
      fragments = _createClassicAST.fragments,
      variables = _createClassicAST.variables,
      argumentDefinitions = _createClassicAST.argumentDefinitions;

  var substitutions = createSubstitutionsForFragmentSpreads(t, path, fragments);

  var transformedAST = createObject(t, {
    kind: t.stringLiteral('FragmentDefinition'),
    argumentDefinitions: createFragmentArguments(t, argumentDefinitions, variables),
    node: createRelayQLTemplate(t, classicAST, state)
  });

  return createConcreteNode(t, transformedAST, substitutions, state);
}

function createOperationConcreteNode(t, path, definition, state) {
  var _createClassicAST2 = createClassicAST(t, definition),
      classicAST = _createClassicAST2.classicAST,
      fragments = _createClassicAST2.fragments;

  var substitutions = createSubstitutionsForFragmentSpreads(t, path, fragments);
  var nodeAST = classicAST.operation === 'query' ? createFragmentForOperation(t, classicAST, state) : createRelayQLTemplate(t, classicAST, state);
  var transformedAST = createObject(t, {
    kind: t.stringLiteral('OperationDefinition'),
    argumentDefinitions: createOperationArguments(t, definition.variableDefinitions),
    name: t.stringLiteral(definition.name.value),
    operation: t.stringLiteral(classicAST.operation),
    node: nodeAST
  });

  return createConcreteNode(t, transformedAST, substitutions, state);
}

function createClassicAST(t, definition) {
  var fragmentID = 0;

  var fragments = {};
  var variables = {};
  var argumentDefinitions = null;

  var visitors = {
    Directive: function Directive(node) {
      switch (node.name.value) {
        case 'argumentDefinitions':
          if (argumentDefinitions) {
            throw new Error('BabelPluginRelay: Expected only one ' + '@argumentDefinitions directive');
          }
          argumentDefinitions = node.arguments;
          return null;
        case 'connection':
          return null;
        default:
          return node;
      }
    },
    FragmentSpread: function FragmentSpread(node) {
      var directives = node.directives;

      var fragmentName = node.name.value;
      var fragmentArgumentsAST = null;
      var substitutionName = null;

      if (directives.length === 0) {
        substitutionName = fragmentName;
      } else {
        // TODO: add support for @include and other directives.
        var directive = directives[0];
        if (directives.length !== 1 || directive.name.value !== 'arguments') {
          throw new Error('BabelPluginRelay: Unsupported directive `' + directive.name.value + '` on fragment spread `...' + fragmentName + '`.');
        }
        var fragmentArgumentsObject = {};
        directive.arguments.forEach(function (argNode) {
          var arg = convertArgument(t, argNode);
          fragmentArgumentsObject[arg.name] = arg.ast;
        });
        fragmentArgumentsAST = createObject(t, fragmentArgumentsObject);
        fragmentID++;
        substitutionName = fragmentName + '_args' + fragmentID;
      }

      fragments[substitutionName] = {
        name: fragmentName,
        args: fragmentArgumentsAST
      };
      return (0, _assign2['default'])({}, node, {
        name: { kind: 'Name', value: substitutionName },
        directives: []
      });
    },
    Variable: function Variable(node) {
      variables[node.name.value] = null;
      return node;
    }
  };
  var classicAST = require('graphql').visit(definition, visitors);

  return {
    classicAST: classicAST,
    fragments: fragments,
    variables: variables,
    argumentDefinitions: argumentDefinitions
  };
}

var RELAYQL_GENERATED = 'RelayQL_GENERATED';

function createConcreteNode(t, transformedAST, substitutions, state) {
  // Allow for an optional direct require to RelayQL,
  // otherwise default to `require('react-relay/classic').QL`.
  var relayQLModule = state.opts && state.opts.relayQLModule;
  var relayQLRequire = relayQLModule ? createRequireCall(t, relayQLModule) : t.memberExpression(createRequireCall(t, 'react-relay/classic'), t.identifier('QL'));

  return t.functionExpression(null, [], t.blockStatement([t.variableDeclaration('const', [t.variableDeclarator(t.identifier(RELAYQL_GENERATED), relayQLRequire)].concat(substitutions)), t.returnStatement(transformedAST)]));
}

function createOperationArguments(t, variableDefinitions) {
  return t.arrayExpression(variableDefinitions.map(function (definition) {
    var name = definition.variable.name.value;
    var defaultValue = definition.defaultValue ? parseValue(t, definition.defaultValue) : t.nullLiteral();
    return createLocalArgument(t, name, defaultValue);
  }));
}

function createFragmentArguments(t, argumentDefinitions, variables) {
  var concreteDefinitions = [];
  (0, _keys2['default'])(variables).forEach(function (name) {
    var definition = (argumentDefinitions || []).find(function (arg) {
      return arg.name.value === name;
    });
    if (definition) {
      var defaultValueField = definition.value.fields.find(function (field) {
        return field.name.value === 'defaultValue';
      });
      var defaultValue = defaultValueField ? parseValue(t, defaultValueField.value) : t.nullLiteral();
      concreteDefinitions.push(createLocalArgument(t, name, defaultValue));
    } else {
      concreteDefinitions.push(createRootArgument(t, name));
    }
  });
  return t.arrayExpression(concreteDefinitions);
}

function createLocalArgument(t, variableName, defaultValue) {
  return createObject(t, {
    defaultValue: defaultValue,
    kind: t.stringLiteral('LocalArgument'),
    name: t.stringLiteral(variableName)
  });
}

function createRootArgument(t, variableName) {
  return t.objectExpression([t.objectProperty(t.identifier('kind'), t.stringLiteral('RootArgument')), t.objectProperty(t.identifier('name'), t.stringLiteral(variableName))]);
}

function parseValue(t, value) {
  switch (value.kind) {
    case 'BooleanValue':
      return t.booleanLiteral(value.value);
    case 'IntValue':
      return t.numericLiteral(parseInt(value.value, 10));
    case 'FloatValue':
      return t.numericLiteral(parseFloat(value.value));
    case 'StringValue':
      return t.stringLiteral(value.value);
    case 'EnumValue':
      return t.stringLiteral(value.value);
    case 'ListValue':
      return t.arrayExpression(value.values.map(function (item) {
        return parseValue(t, item);
      }));
    default:
      throw new Error('BabelPluginRelay: Unsupported literal type `' + value.kind + '`.');
  }
}

function convertArgument(t, argNode) {
  var name = argNode.name.value;
  var value = argNode.value;
  var ast = null;
  switch (value.kind) {
    case 'Variable':
      var paramName = value.name.value;
      ast = createObject(t, {
        kind: t.stringLiteral('CallVariable'),
        callVariableName: t.stringLiteral(paramName)
      });
      break;
    default:
      ast = parseValue(t, value);
  }
  return { name: name, ast: ast };
}

function createObject(t, obj) {
  return t.objectExpression((0, _keys2['default'])(obj).map(function (key) {
    return t.objectProperty(t.identifier(key), obj[key]);
  }));
}

function createRequireCall(t, requiredPath) {
  return t.callExpression(t.identifier('require'), [t.stringLiteral(requiredPath)]);
}

function createFragmentForOperation(t, operation, state) {
  var type = void 0;
  switch (operation.operation) {
    case 'query':
      type = 'Query';
      break;
    case 'mutation':
      type = 'Mutation';
      break;
    case 'subscription':
      type = 'Subscription';
      break;
    default:
      throw new Error('BabelPluginRelay: Unexpected operation type: `' + operation.operation + '`.');
  }
  var fragmentNode = {
    kind: 'FragmentDefinition',
    loc: operation.loc,
    name: {
      kind: 'Name',
      value: operation.name.value
    },
    typeCondition: {
      kind: 'NamedType',
      name: {
        kind: 'Name',
        value: type
      }
    },
    directives: operation.directives,
    selectionSet: operation.selectionSet
  };
  return createRelayQLTemplate(t, fragmentNode, state);
}

function createRelayQLTemplate(t, node, state) {
  var schema = state.opts && state.opts.schema;
  require('././invariant')(schema, 'babel-plugin-relay: Missing schema option. ' + 'Check your .babelrc file or wherever you configure your Babel ' + 'plugins to ensure the "relay" plugin has a "schema" option.\n' + 'https://facebook.github.io/relay/docs/babel-plugin-relay.html#additional-options');

  var _getFragmentNameParts = require('././getFragmentNameParts')(node.name.value),
      documentName = _getFragmentNameParts[0],
      propName = _getFragmentNameParts[1];

  var text = require('graphql').print(node);
  var quasi = t.templateLiteral([t.templateElement({ raw: text, cooked: text }, true)], []);

  return require('././compileRelayQLTag')(t, schema, quasi, documentName, propName, RELAYQL_GENERATED, // tagName
  state);
}

function createSubstitutionsForFragmentSpreads(t, path, fragments) {
  return (0, _keys2['default'])(fragments).map(function (varName) {
    var fragment = fragments[varName];

    var _getFragmentNameParts2 = require('././getFragmentNameParts')(fragment.name),
        module = _getFragmentNameParts2[0],
        propName = _getFragmentNameParts2[1];

    return t.variableDeclarator(t.identifier(varName), createGetFragmentCall(t, path, module, propName, fragment.args));
  });
}

function createGetFragmentCall(t, path, module, propName, fragmentArguments) {
  var args = [];
  if (propName) {
    args.push(t.stringLiteral(propName));
  }

  if (fragmentArguments) {
    args.push(fragmentArguments);
  }

  // If "module" is defined locally, then it's unsafe to assume it's a
  // container. It might be a bound reference to the React class itself.
  // To be safe, when defined locally, always check the __container__ property
  // first.
  var container = isDefinedLocally(path, module) ? t.logicalExpression('||',
  // __container__ is defined via ReactRelayCompatContainerBuilder.
  t.memberExpression(t.identifier(module), t.identifier('__container__')), t.identifier(module)) : t.identifier(module);

  return t.callExpression(t.memberExpression(container, t.identifier('getFragment')), args);
}

function isDefinedLocally(path, name) {
  var binding = path.scope.getBinding(name);
  if (!binding) {
    return false;
  }

  // Binding comes from import.
  if (binding.kind === 'module') {
    return false;
  }

  // Binding comes from require.
  if (binding.path.isVariableDeclarator() && binding.path.get('init').node && binding.path.get('init.callee').isIdentifier({ name: 'require' })) {
    return false;
  }

  // Otherwise, defined locally.
  return true;
}

module.exports = createClassicNode;