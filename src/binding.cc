#include <nan.h>
#include <node.h>
#include <v8.h>

using v8::String;
using v8::FunctionTemplate;
using v8::Value;
using v8::Local;
using Nan::GetFunction;
using Nan::New;
using Nan::Set;

#define CHECK(obj) assert(obj)
#define CHECK_EQ(a, b) CHECK((a) == (b))
#define METHOD(Name, arg)                                          \
  NAN_METHOD(Name) {                                               \
    CHECK_EQ(info.Length(), 1);                                    \
    info.GetReturnValue().Set(info[0]->arg());                     \
  }                                                                \

#define METHOD_NAMES(V)                       \
  V(IsUndefined, isUndefined)                 \
  V(IsNull, isNull)                           \
  V(IsTrue, isTrue)                           \
  V(IsFalse, isFalse)                         \
  V(IsString, isString)                       \
  V(IsSymbol, isSymbol)                       \
  V(IsFunction, isFunction)                   \
  V(IsArray, isArray)                         \
  V(IsObject, isObject)                       \
  V(IsBoolean, isBoolean)                     \
  V(IsNumber, isNumber)                       \
  V(IsInt32, isInt32)                         \
  V(IsUint32, isUint32)                       \
  V(IsDate, isDate)                           \
  V(IsArgumentsObject, isArgumentsObject)     \
  V(IsBooleanObject, isBooleanObject)         \
  V(IsNumberObject, isNumberObject)           \
  V(IsStringObject, isStringObject)           \
  V(IsNativeError, isNativeError)             \
  V(IsRegExp, isRegExp)                       \
  V(IsGeneratorFunction, isGeneratorFunction) \
  V(IsGeneratorObject, isGeneratorObject)     \
  V(IsPromise, isPromise)                     \
  V(IsMap, isMap)                             \
  V(IsSet, isSet)                             \
  V(IsMapIterator, isMapIterator)             \
  V(IsSetIterator, isSetIterator)             \
  V(IsWeakMap, isWeakMap)                     \
  V(IsWeakSet, isWeakSet)                     \
  V(IsArrayBuffer, isArrayBuffer)             \
  V(IsArrayBufferView, isArrayBufferView)     \
  V(IsTypedArray, isTypedArray)               \
  V(IsUint8Array, isUint8Array)               \
  V(IsUint8ClampedArray, isUint8ClampedArray) \
  V(IsInt8Array, isInt8Array)                 \
  V(IsUint16Array, isUint16Array)             \
  V(IsInt16Array, isInt16Array)               \
  V(IsUint32Array, isUint32Array)             \
  V(IsInt32Array, isInt32Array)               \
  V(IsFloat32Array, isFloat32Array)           \
  V(IsFloat64Array, isFloat64Array)           \
  V(IsDataView, isDataView)                   \
  V(IsSharedArrayBuffer, isSharedArrayBuffer)

#define V8_4_9_METHOD_NAMES(V)                \
  V(IsProxy, isProxy)

#define V8_5_4_METHOD_NAMES(V)                \
  V(IsWebAssemblyCompiledModule, isWebAssemblyCompiledModule)

#define V8_5_5_METHOD_NAMES(V)                \
  V(IsAsyncFunction, isAsyncFunction)

#define V(Name, S) METHOD(S, Name)
  METHOD_NAMES(V)
#if V8_MAJOR_VERSION == 4 && V8_MINOR_VERSION >= 9 || V8_MAJOR_VERSION > 4
  V8_4_9_METHOD_NAMES(V)
#endif
#if V8_MAJOR_VERSION == 5 && V8_MINOR_VERSION >= 4 || V8_MAJOR_VERSION > 5
  V8_5_4_METHOD_NAMES(V)
#endif
#if V8_MAJOR_VERSION == 5 && V8_MINOR_VERSION >= 5 || V8_MAJOR_VERSION > 5
  V8_5_5_METHOD_NAMES(V)
#endif
#undef V

#define DECLARE(Name, S)                                           \
  Set(target, New<String>(# S).ToLocalChecked(),                   \
    GetFunction(New<FunctionTemplate>(S)).ToLocalChecked());

NAN_MODULE_INIT(Init) {
#define V(Name, S) DECLARE(Name, S)
  METHOD_NAMES(V)
#if V8_MAJOR_VERSION == 4 && V8_MINOR_VERSION >= 9 || V8_MAJOR_VERSION > 4
  V8_4_9_METHOD_NAMES(V)
#endif
#if V8_MAJOR_VERSION == 5 && V8_MINOR_VERSION >= 4 || V8_MAJOR_VERSION > 5
  V8_5_4_METHOD_NAMES(V)
#endif
#if V8_MAJOR_VERSION == 5 && V8_MINOR_VERSION >= 5 || V8_MAJOR_VERSION > 5
  V8_5_5_METHOD_NAMES(V)
#endif
#undef V
}

NODE_MODULE(v8is, Init)
