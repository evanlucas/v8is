'use strict'

const binding = require('bindings')('v8is')

const keys = Object.keys(binding)
for (var i = 0, len = keys.length; i < len; i++) {
  var key = keys[i]
  if (key.startsWith('is')) {
    exports[key] = function(obj) {
      if (arguments.length < 1) {
        throw new Error('Argument is required')
      }
      return binding[key](obj)
    }
  }
}
