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

test('required arguments', function(t) {
  const funcs = getFunctions()
  funcs.forEach(function(func) {
    t.throws(function() {
      v8is[func]()
    }, /argument is required/)
  })
  t.end()
})
