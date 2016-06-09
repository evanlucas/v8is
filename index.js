'use strict'

const binding = require('bindings')('v8is')

exports.isUndefined = function isUndefined(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isUndefined(obj)
}

exports.isNull = function isNull(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isNull(obj)
}

exports.isTrue = function isTrue(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isTrue(obj)
}

exports.isFalse = function isFalse(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isFalse(obj)
}

exports.isString = function isString(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isString(obj)
}

exports.isSymbol = function isSymbol(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isSymbol(obj)
}

exports.isFunction = function isFunction(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isFunction(obj)
}

exports.isArray = function isArray(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isArray(obj)
}

exports.isObject = function isObject(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isObject(obj)
}

exports.isBoolean = function isBoolean(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isBoolean(obj)
}

exports.isNumber = function isNumber(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isNumber(obj)
}

exports.isInt32 = function isInt32(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isInt32(obj)
}

exports.isUint32 = function isUint32(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isUint32(obj)
}

exports.isDate = function isDate(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isDate(obj)
}

exports.isArgumentsObject = function isArgumentsObject(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isArgumentsObject(obj)
}

exports.isBooleanObject = function isBooleanObject(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isBooleanObject(obj)
}

exports.isNumberObject = function isNumberObject(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isNumberObject(obj)
}

exports.isStringObject = function isStringObject(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isStringObject(obj)
}

exports.isNativeError = function isNativeError(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isNativeError(obj)
}
exports.isError = exports.isNativeError

exports.isRegExp = function isRegExp(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isRegExp(obj)
}

exports.isGeneratorFunction = function isGeneratorFunction(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isGeneratorFunction(obj)
}

exports.isGeneratorObject = function isGeneratorObject(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isGeneratorObject(obj)
}

exports.isPromise = function isPromise(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isPromise(obj)
}

exports.isMap = function isMap(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isMap(obj)
}

exports.isSet = function isSet(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isSet(obj)
}

exports.isMapIterator = function isMapIterator(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isMapIterator(obj)
}

exports.isSetIterator = function isSetIterator(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isSetIterator(obj)
}

exports.isWeakMap = function isWeakMap(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isWeakMap(obj)
}

exports.isWeakSet = function isWeakSet(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isWeakSet(obj)
}

exports.isArrayBuffer = function isArrayBuffer(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isArrayBuffer(obj)
}

exports.isArrayBufferView = function isArrayBufferView(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isArrayBufferView(obj)
}

exports.isTypedArray = function isTypedArray(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isTypedArray(obj)
}

exports.isUint8Array = function isUint8Array(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isUint8Array(obj)
}

exports.isUint8ClampedArray = function isUint8ClampedArray(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isUint8ClampedArray(obj)
}

exports.isInt8Array = function isInt8Array(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isInt8Array(obj)
}

exports.isUint16Array = function isUint16Array(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isUint16Array(obj)
}

exports.isInt16Array = function isInt16Array(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isInt16Array(obj)
}

exports.isInt32Array = function isInt32Array(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isInt32Array(obj)
}

exports.isUint32Array = function isUint32Array(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isUint32Array(obj)
}

exports.isFloat32Array = function isFloat32Array(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isFloat32Array(obj)
}

exports.isFloat64Array = function isFloat64Array(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isFloat64Array(obj)
}

exports.isDataView = function isDataView(obj) {
  if (arguments.length < 1)
    throw new Error('argument is required')

  return binding.isDataView(obj)
}
