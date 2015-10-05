'use strict'

const test = require('tap').test
const v8is = require('../')
const keys = Object.keys(v8is)

function getFunctions() {
  const out = keys.slice()
  const len = arguments.length
  if (!len) return out
  for (let i = 0; i < len; i++) {
    var arg = arguments[i]
    var idx = out.indexOf(arg)
    if (~idx) {
      out.splice(idx, 1)
    }
  }

  return out
}

test('isUndefined', function(t) {
  t.strictEqual(v8is.isUndefined(undefined), true)
  t.strictEqual(v8is.isUndefined(null), false)
  t.strictEqual(v8is.isUndefined(0), false)
  t.strictEqual(v8is.isUndefined(''), false)
  t.end()
})

test('isNull', function(t) {
  t.strictEqual(v8is.isNull(null), true)
  t.strictEqual(v8is.isNull(undefined), false)
  t.strictEqual(v8is.isNull(0), false)
  t.strictEqual(v8is.isNull(false), false)
  t.end()
})

test('isTrue', function(t) {
  t.strictEqual(v8is.isTrue(true), true)
  t.strictEqual(v8is.isTrue(false), false)
  t.strictEqual(v8is.isTrue(''), false)
  t.end()
})

test('isFalse', function(t) {
  t.strictEqual(v8is.isFalse(false), true)
  t.strictEqual(v8is.isFalse(true), false)
  t.strictEqual(v8is.isFalse(''), false)
  t.end()
})

test('isString', function(t) {
  t.strictEqual(v8is.isString(''), true)
  t.strictEqual(v8is.isString(1), false)
  t.strictEqual(v8is.isString(new String('1')), false)
  t.end()
})

test('isSymbol', function(t) {
  t.strictEqual(v8is.isSymbol(Symbol('123')), true)
  t.strictEqual(v8is.isSymbol('123'), false)
  t.end()
})

test('isFunction', function(t) {
  t.strictEqual(v8is.isFunction(function() {}), true)
  t.strictEqual(v8is.isFunction({}), false)
  t.end()
})

test('isArray', function(t) {
  t.strictEqual(v8is.isArray([]), true)
  t.strictEqual(v8is.isArray(new Array(0)), true)
  t.strictEqual(v8is.isArray({}), false)
  t.end()
})

test('isObject', function(t) {
  t.strictEqual(v8is.isObject(''), false)
  t.strictEqual(v8is.isObject(1), false)
  t.strictEqual(v8is.isObject({}), true)
  t.strictEqual(v8is.isObject(function() {}), true)
  t.end()
})

test('isBoolean', function(t) {
  t.strictEqual(v8is.isBoolean(true), true)
  t.strictEqual(v8is.isBoolean(false), true)
  t.strictEqual(v8is.isBoolean(1), false)
  t.strictEqual(v8is.isBoolean('true'), false)
  t.end()
})

test('isNumber', function(t) {
  t.strictEqual(v8is.isNumber(1), true)
  t.strictEqual(v8is.isNumber('1'), false)
  t.strictEqual(v8is.isNumber(true), false)
  t.end()
})

test('isInt32', function(t) {
  t.strictEqual(v8is.isInt32(1), true)
  t.strictEqual(v8is.isInt32(-1), true)
  t.strictEqual(v8is.isInt32('1'), false)
  t.end()
})

test('isUint32', function(t) {
  t.strictEqual(v8is.isUint32(1), true)
  t.strictEqual(v8is.isUint32(-1), false)
  t.strictEqual(v8is.isUint32('1'), false)
  t.end()
})

test('isDate', function(t) {
  t.strictEqual(v8is.isDate(new Date()), true)
  t.strictEqual(v8is.isDate(Date.now()), false)
  t.end()
})

test('isArgumentsObject', function(t) {
  ;(function() {
    t.strictEqual(v8is.isArgumentsObject(arguments), true)
  })()
  t.strictEqual(v8is.isArgumentsObject([]), false)
  t.end()
})

test('isBooleanObject', function(t) {
  t.strictEqual(v8is.isBooleanObject(true), false)
  t.strictEqual(v8is.isBooleanObject(false), false)
  t.strictEqual(v8is.isBooleanObject(new Boolean(true)), true)
  t.strictEqual(v8is.isBooleanObject(new Boolean(false)), true)
  t.strictEqual(v8is.isBooleanObject(new Boolean(0)), true)
  t.end()
})

test('isNumberObject', function(t) {
  t.strictEqual(v8is.isNumberObject(new Number(1)), true)
  t.strictEqual(v8is.isNumberObject(1), false)
  t.end()
})

test('isStringObject', function(t) {
  t.strictEqual(v8is.isStringObject(''), false)
  t.strictEqual(v8is.isStringObject(new String('')), true)
  t.end()
})

test('isRegExp', function(t) {
  t.strictEqual(v8is.isRegExp(/123/), true)
  t.strictEqual(v8is.isRegExp(new RegExp('123')), true)
  t.strictEqual(v8is.isRegExp('123'), false)
  t.end()
})

test('isGeneratorFunction', function(t) {
  function *gen() {}
  t.strictEqual(v8is.isGeneratorFunction(gen), true)
  t.strictEqual(v8is.isGeneratorFunction(function() {}), false)
  t.end()
})

test('isGeneratorObject', function(t) {
  function *gen() {
    yield 1
    yield 2
  }
  t.strictEqual(v8is.isGeneratorObject(gen()), true)
  t.strictEqual(v8is.isGeneratorObject(gen), false)
  t.end()
})

test('isPromise', function(t) {
  var a = new Promise(function() {}, function() {})
  t.strictEqual(v8is.isPromise(a), true)
  t.strictEqual(v8is.isPromise(true), false)
  t.end()
})

test('isMap', function(t) {
  t.strictEqual(v8is.isMap(new Map()), true)
  t.strictEqual(v8is.isMap(new Set()), false)
  t.strictEqual(v8is.isMap(new Map().keys()), false)
  t.end()
})

test('required arguments', function(t) {
  const funcs = getFunctions()
  funcs.forEach(function(func) {
    t.throws(function() {
      v8is[func]()
    }, /argument is required/)
  })
  t.end()
})
