var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.codewars_js;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.2";
var $strongName = '08BE01B65FD72AE66DF534D5E14AEDD0';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 65535, $intern_1 = 2147483647, $intern_2 = {3:1, 4:1}, $intern_3 = {3:1, 9:1, 8:1, 7:1}, $intern_4 = {42:1}, $intern_5 = 4194303, $intern_6 = 1048575, $intern_7 = 524288, $intern_8 = 4194304, $intern_9 = 17592186044416, $intern_10 = -17592186044416, $intern_11 = {3:1, 4:1, 88:1}, $intern_12 = {3:1, 43:1, 7:1}, $intern_13 = {77:1}, $intern_14 = {3:1}, $intern_15 = -2147483648, $intern_16 = {50:1, 3:1}, $intern_17 = 5.099999904632568, $intern_18 = {104:1, 3:1, 4:1}, $intern_19 = {59:1, 15:1}, $intern_20 = {59:1}, $intern_21 = 65536, $intern_22 = 0.949999988079071, $intern_23 = 0.800000011920929, $intern_24 = {3:1, 9:1, 30:1, 8:1, 7:1}, $intern_25 = {l:4194303, m:4194303, h:524287}, $intern_26 = {35:1, 86:1}, $intern_27 = {36:1}, $intern_28 = {3:1, 35:1, 63:1}, $intern_29 = 15525485, $intern_30 = 5.9604644775390625E-8, $intern_31 = 16777216, $intern_32 = 16777215, $intern_33 = 4294967295, $intern_34 = {l:0, m:0, h:524288};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function create_com_google_gwt_useragent_client_UserAgent(){
  switch (permutationId) {
    case 1:
      return new UserAgentImplIe10;
    case 4:
      return new UserAgentImplSafari;
    case 0:
      return new UserAgentImplGecko1_8;
    case 2:
      return new UserAgentImplIe8;
  }
  return new UserAgentImplIe9;
}

function create_com_google_gwt_dom_client_DOMImpl(){
  switch (permutationId) {
    case 2:
      return new DOMImplIE8;
    case 4:
      return new DOMImplWebkit;
    case 0:
      return new DOMImplMozilla;
  }
  return new DOMImplIE9;
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function toString_5(object){
  var number;
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (number = hashCode__I__devirtual$(object) >>> 0 , number.toString(16));
  }
  return object.toString();
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function makeLambdaFunction(samMethod, ctor, ctorArguments){
  var lambda = function(){
    return samMethod.apply(lambda, arguments);
  }
  ;
  ctor.apply(lambda, ctorArguments);
  return lambda;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
  function now_0(){
    return (new Date).getTime();
  }

  !Date.now && (Date.now = now_0);
}

bootstrap();
function $equals(this$static, other){
  return this$static === other;
}

$equals.displayName = 'java.lang.Object.$equals';
function $getClass(this$static){
  return this$static.___clazz;
}

$getClass.displayName = 'java.lang.Object.$getClass';
function $hashCode(this$static){
  return getHashCode(this$static);
}

$hashCode.displayName = 'java.lang.Object.$hashCode';
function Object_0(){
}

Object_0.displayName = 'java.lang.Object.Object';
function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals_4(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static === other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static === other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?this$static === other:!!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

equals_Ljava_lang_Object__Z__devirtual$.displayName = 'java.lang.Object.equals_Ljava_lang_Object__Z__devirtual$';
function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:getClass_1(this$static);
}

getClass__Ljava_lang_Class___devirtual$.displayName = 'java.lang.Object.getClass__Ljava_lang_Class___devirtual$';
function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_0(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode(this$static);
}

hashCode__I__devirtual$.displayName = 'java.lang.Object.hashCode__I__devirtual$';
function toString_1(object){
  var number;
  return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (number = hashCode__I__devirtual$(object) >>> 0 , number.toString(16));
}

toString_1.displayName = 'java.lang.Object.toString';
defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return this === other;
}
;
_.equals_0.displayName = 'java.lang.Object.equals';
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.getClass_0.displayName = 'java.lang.Object.getClass';
_.hashCode_0 = function hashCode_0(){
  return getHashCode(this);
}
;
_.hashCode_0.displayName = 'java.lang.Object.hashCode';
_.toString_0 = function toString_0(){
  var number;
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (number = hashCode__I__devirtual$(this) >>> 0 , number.toString(16));
}
;
_.toString_0.displayName = 'java.lang.Object.toString';
_.equals = function(other){
  return this.equals_0(other);
}
;
_.equals.displayName = 'java.lang.Object.equals';
_.hashCode = function(){
  return this.hashCode_0();
}
;
_.hashCode.displayName = 'java.lang.Object.hashCode';
_.toString = function(){
  return this.toString_0();
}
;
_.toString.displayName = 'java.lang.Object.toString';
function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

canCast.displayName = 'com.google.gwt.lang.Cast.canCast';
function castTo(src_0, dstId){
  checkCriticalType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

castTo.displayName = 'com.google.gwt.lang.Cast.castTo';
function castToArray(src_0){
  var elementTypeCategory;
  checkCriticalType(src_0 == null || Array.isArray(src_0) && (elementTypeCategory = getElementTypeCategory(src_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16)));
  return src_0;
}

castToArray.displayName = 'com.google.gwt.lang.Cast.castToArray';
function castToBoolean(src_0){
  checkCriticalType(src_0 == null || instanceOfBoolean(src_0));
  return src_0;
}

castToBoolean.displayName = 'com.google.gwt.lang.Cast.castToBoolean';
function castToDouble(src_0){
  checkCriticalType(src_0 == null || instanceOfDouble(src_0));
  return src_0;
}

castToDouble.displayName = 'com.google.gwt.lang.Cast.castToDouble';
function castToJso(src_0){
  checkCriticalType(src_0 == null || isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn));
  return src_0;
}

castToJso.displayName = 'com.google.gwt.lang.Cast.castToJso';
function castToNative(src_0, jsType){
  checkCriticalType(src_0 == null || jsinstanceOf(src_0, jsType));
  return src_0;
}

castToNative.displayName = 'com.google.gwt.lang.Cast.castToNative';
function castToString(src_0){
  checkCriticalType(src_0 == null || instanceOfString(src_0));
  return src_0;
}

castToString.displayName = 'com.google.gwt.lang.Cast.castToString';
function castToUnknownNative(src_0){
  return src_0;
}

castToUnknownNative.displayName = 'com.google.gwt.lang.Cast.castToUnknownNative';
function charToString(x_0){
  return String.fromCharCode(x_0);
}

charToString.displayName = 'com.google.gwt.lang.Cast.charToString';
function getClass_1(array){
  return array.___clazz || Array.isArray(array) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

getClass_1.displayName = 'com.google.gwt.lang.Cast.getClass';
function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

hasJavaObjectVirtualDispatch.displayName = 'com.google.gwt.lang.Cast.hasJavaObjectVirtualDispatch';
function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

instanceOf.displayName = 'com.google.gwt.lang.Cast.instanceOf';
function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

instanceOfBoolean.displayName = 'com.google.gwt.lang.Cast.instanceOfBoolean';
function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

instanceOfDouble.displayName = 'com.google.gwt.lang.Cast.instanceOfDouble';
function instanceOfJso(src_0){
  return src_0 != null && isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn);
}

instanceOfJso.displayName = 'com.google.gwt.lang.Cast.instanceOfJso';
function instanceOfNative(src_0, jsType){
  return jsinstanceOf(src_0, jsType);
}

instanceOfNative.displayName = 'com.google.gwt.lang.Cast.instanceOfNative';
function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

instanceOfString.displayName = 'com.google.gwt.lang.Cast.instanceOfString';
function isArray(src_0){
  return Array.isArray(src_0);
}

isArray.displayName = 'com.google.gwt.lang.Cast.isArray';
function isFunction(src_0){
  return typeof src_0 === 'function';
}

isFunction.displayName = 'com.google.gwt.lang.Cast.isFunction';
function isJsObject(src_0){
  return typeof src_0 === 'object' || typeof src_0 == 'function';
}

isJsObject.displayName = 'com.google.gwt.lang.Cast.isJsObject';
function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}

isJsObjectOrFunction.displayName = 'com.google.gwt.lang.Cast.isJsObjectOrFunction';
function isNotNull(src_0){
  return !!src_0;
}

isNotNull.displayName = 'com.google.gwt.lang.Cast.isNotNull';
function isNull(src_0){
  return !src_0;
}

isNull.displayName = 'com.google.gwt.lang.Cast.isNull';
function jsEquals(a, b){
  return a == b;
}

jsEquals.displayName = 'com.google.gwt.lang.Cast.jsEquals';
function jsNotEquals(a, b){
  return a != b;
}

jsNotEquals.displayName = 'com.google.gwt.lang.Cast.jsNotEquals';
function jsinstanceOf(obj, jsType){
  return obj && jsType && obj instanceof jsType;
}

jsinstanceOf.displayName = 'com.google.gwt.lang.Cast.jsinstanceOf';
function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

maskUndefined.displayName = 'com.google.gwt.lang.Cast.maskUndefined';
function narrow_byte(x_0){
  return x_0 << 24 >> 24;
}

narrow_byte.displayName = 'com.google.gwt.lang.Cast.narrow_byte';
function narrow_char(x_0){
  return x_0 & $intern_0;
}

narrow_char.displayName = 'com.google.gwt.lang.Cast.narrow_char';
function narrow_int(x_0){
  return x_0 | 0;
}

narrow_int.displayName = 'com.google.gwt.lang.Cast.narrow_int';
function narrow_short(x_0){
  return x_0 << 16 >> 16;
}

narrow_short.displayName = 'com.google.gwt.lang.Cast.narrow_short';
function round_int(x_0){
  return Math.max(Math.min(x_0, $intern_1), -2147483648) | 0;
}

round_int.displayName = 'com.google.gwt.lang.Cast.round_int';
var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

$ensureNamesAreInitialized.displayName = 'java.lang.Class.$ensureNamesAreInitialized';
function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

$getName.displayName = 'java.lang.Class.$getName';
function $isArray(this$static){
  return (this$static.modifiers & 4) != 0;
}

$isArray.displayName = 'java.lang.Class.$isArray';
function $isPrimitive(this$static){
  return (this$static.modifiers & 1) != 0;
}

$isPrimitive.displayName = 'java.lang.Class.$isPrimitive';
function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

Class.displayName = 'java.lang.Class.Class';
function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

createClassObject.displayName = 'java.lang.Class.createClassObject';
function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

createForClass.displayName = 'java.lang.Class.createForClass';
function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

createForEnum.displayName = 'java.lang.Class.createForEnum';
function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

createForPrimitive.displayName = 'java.lang.Class.createForPrimitive';
function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

getClassLiteralForArray_0.displayName = 'java.lang.Class.getClassLiteralForArray';
function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

getPrototypeForClass.displayName = 'java.lang.Class.getPrototypeForClass';
function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

initializeNames.displayName = 'java.lang.Class.initializeNames';
function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

join_0.displayName = 'java.lang.Class.join';
function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

maybeSetClassLiteral.displayName = 'java.lang.Class.maybeSetClassLiteral';
defineClass(106, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.createClassLiteralForArray.displayName = 'java.lang.Class.createClassLiteralForArray';
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getCanonicalName.displayName = 'java.lang.Class.getCanonicalName';
_.getName = function getName(){
  return $getName(this);
}
;
_.getName.displayName = 'java.lang.Class.getName';
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.getSimpleName.displayName = 'java.lang.Class.getSimpleName';
_.isArray_0 = function isArray_0(){
  return (this.modifiers & 4) != 0;
}
;
_.isArray_0.displayName = 'java.lang.Class.isArray';
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.isPrimitive.displayName = 'java.lang.Class.isPrimitive';
_.toString_0 = function toString_11(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.toString_0.displayName = 'java.lang.Class.toString';
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 106);
function $onModuleLoad(){
  var e;
  $println_0(new ConsolePrintStream(new Console$0methodref$log$Type), 'onModuleLoad');
  setUncaughtExceptionHandler(new codewars_js$lambda$0$Type);
  try {
    new CompetitionWindow;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      $printStackTraceImpl(e, new ConsolePrintStream(new Console$0methodref$log$Type), '', '');
    }
     else 
      throw toJs($e0);
  }
}

$onModuleLoad.displayName = 'com.client.codewars_js.$onModuleLoad';
function codewars_js$lambda$0$Type(){
}

codewars_js$lambda$0$Type.displayName = 'com.client.codewars_js$lambda$0$Type.codewars_js$lambda$0$Type';
defineClass(140, 1, {}, codewars_js$lambda$0$Type);
var Lcom_client_codewars_1js$lambda$0$Type_2_classLit = createForClass('com.client', 'codewars_js/lambda$0$Type', 140);
defineClass(346, 1, {});
var instance;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 346);
defineClass(101, 1, {101:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 101);
function $isNativelySupported(){
  return !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame;
}

$isNativelySupported.displayName = 'com.google.gwt.animation.client.AnimationScheduler$AnimationSupportDetector.$isNativelySupported';
function AnimationSchedulerImplStandard(){
}

AnimationSchedulerImplStandard.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplStandard.AnimationSchedulerImplStandard';
function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = now_1();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

requestImpl.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplStandard.requestImpl';
defineClass(84, 346, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1;
}
;
_.requestAnimationFrame_0.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplStandard.requestAnimationFrame';
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 84);
function AnimationSchedulerImplStandard$1(){
}

AnimationSchedulerImplStandard$1.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplStandard$1.AnimationSchedulerImplStandard$1';
defineClass(302, 101, {101:1}, AnimationSchedulerImplStandard$1);
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 302);
function $$init(this$static){
  this$static.animationRequests = new ArrayList;
  this$static.timer = new AnimationSchedulerImplTimer$1(this$static);
}

$$init.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplTimer.$$init';
function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initUnidimensionalArray(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {324:1, 3:1, 4:1}, 102, this$static.animationRequests.array.length, 0, 1);
  curAnimations = castTo($toArray_1(this$static.animationRequests, curAnimations), 324);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_2(this$static.animationRequests, requestId);
    $execute_0(requestId.callback);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, $wnd.Math.max(5, 16 - (now_1() - duration.start_0)));
}

$updateAnimations.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplTimer.$updateAnimations';
function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

AnimationSchedulerImplTimer.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplTimer.AnimationSchedulerImplTimer';
defineClass(85, 346, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_1(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(callback);
  $add_2(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
_.requestAnimationFrame_0.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplTimer.requestAnimationFrame';
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 85);
function $$init_0(this$static){
}

$$init_0.displayName = 'com.google.gwt.user.client.Timer.$$init';
function $cancel(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

$cancel.displayName = 'com.google.gwt.user.client.Timer.$cancel';
function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException_0('must be non-negative'));
  }
  !!this$static.timerId && $cancel(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf_0(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

$schedule.displayName = 'com.google.gwt.user.client.Timer.$schedule';
function Timer(){
}

Timer.displayName = 'com.google.gwt.user.client.Timer.Timer';
function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

clearInterval_0.displayName = 'com.google.gwt.user.client.Timer.clearInterval';
function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

clearTimeout_0.displayName = 'com.google.gwt.user.client.Timer.clearTimeout';
function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

createCallback.displayName = 'com.google.gwt.user.client.Timer.createCallback';
function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

setTimeout_0.displayName = 'com.google.gwt.user.client.Timer.setTimeout';
defineClass(303, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  $updateAnimations(this.this$01);
}
;
_.fire.displayName = 'com.google.gwt.user.client.Timer.fire';
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 303);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
}

AnimationSchedulerImplTimer$1.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplTimer$1.AnimationSchedulerImplTimer$1';
defineClass(304, 303, {}, AnimationSchedulerImplTimer$1);
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 304);
function AnimationSchedulerImplTimer$AnimationHandleImpl(callback){
  this.callback = callback;
}

AnimationSchedulerImplTimer$AnimationHandleImpl.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplTimer$AnimationHandleImpl.AnimationSchedulerImplTimer$AnimationHandleImpl';
defineClass(102, 101, {101:1, 102:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 102);
function $$init_1(this$static){
  this$static.start_0 = now_1();
}

$$init_1.displayName = 'com.google.gwt.core.client.Duration.$$init';
function Duration(){
  this.start_0 = now_1();
}

Duration.displayName = 'com.google.gwt.core.client.Duration.Duration';
function currentTimeMillis(){
  return now_1();
}

currentTimeMillis.displayName = 'com.google.gwt.core.client.Duration.currentTimeMillis';
function uncheckedConversion(elapsed){
  return elapsed;
}

uncheckedConversion.displayName = 'com.google.gwt.core.client.Duration.uncheckedConversion';
defineClass(178, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 178);
function isScript(){
  return true;
}

isScript.displayName = 'com.google.gwt.core.client.GWT.isScript';
function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
  maybeInitializeWindowOnError();
}

setUncaughtExceptionHandler.displayName = 'com.google.gwt.core.client.GWT.setUncaughtExceptionHandler';
var uncaughtExceptionHandler = null;
function $$init_2(this$static){
  this$static.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 37, 0, 0, 1);
}

$$init_2.displayName = 'java.lang.Throwable.$$init';
function $captureStackTrace(this$static){
  captureStackTrace(this$static);
}

$captureStackTrace.displayName = 'java.lang.Throwable.$captureStackTrace';
function $constructJavaStackTrace(this$static){
  var stackTrace;
  return $clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(this$static) , dropInternalFrames(stackTrace);
}

$constructJavaStackTrace.displayName = 'java.lang.Throwable.$constructJavaStackTrace';
function $fillInStackTrace(this$static){
  if (this$static.writetableStackTrace) {
    this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
    this$static.stackTrace = null;
  }
  return this$static;
}

$fillInStackTrace.displayName = 'java.lang.Throwable.$fillInStackTrace';
function $getMessage(this$static){
  return this$static.detailMessage;
}

$getMessage.displayName = 'java.lang.Throwable.$getMessage';
function $printStackTraceImpl(this$static, out, prefix, ident){
  var t, t$array, t$index, t$max, theCause;
  out.println(ident + prefix + this$static);
  $printStackTraceItems(this$static, out, ident);
  for (t$array = (this$static.suppressedExceptions == null && (this$static.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_2, 7, 0, 0, 1)) , this$static.suppressedExceptions) , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    $printStackTraceImpl(t, out, 'Suppressed: ', '\t' + ident);
  }
  theCause = this$static.cause;
  !!theCause && $printStackTraceImpl(theCause, out, 'Caused by: ', ident);
}

$printStackTraceImpl.displayName = 'java.lang.Throwable.$printStackTraceImpl';
function $printStackTraceItems(this$static, out, ident){
  var element, element$array, element$index, element$max;
  for (element$array = (this$static.stackTrace == null && (this$static.stackTrace = $constructJavaStackTrace(this$static)) , this$static.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
    element = element$array[element$index];
    out.println(ident + '\tat ' + element);
  }
}

$printStackTraceItems.displayName = 'java.lang.Throwable.$printStackTraceItems';
function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this$static);
}

$setBackingJsObject.displayName = 'java.lang.Throwable.$setBackingJsObject';
function $toString(this$static){
  return $toString_0(this$static, this$static.getLocalizedMessage());
}

$toString.displayName = 'java.lang.Throwable.$toString';
function $toString_0(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

$toString_0.displayName = 'java.lang.Throwable.$toString';
function Throwable(){
  $$init_2(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

Throwable.displayName = 'java.lang.Throwable.Throwable';
function Throwable_0(backingJsObject){
  $$init_2(this);
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this);
  this.detailMessage = backingJsObject == null?'null':toString_5(backingJsObject);
}

Throwable_0.displayName = 'java.lang.Throwable.Throwable';
function Throwable_1(message){
  $$init_2(this);
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

Throwable_1.displayName = 'java.lang.Throwable.Throwable';
function Throwable_2(message, cause){
  $$init_2(this);
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

Throwable_2.displayName = 'java.lang.Throwable.Throwable';
function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

fixIE.displayName = 'java.lang.Throwable.fixIE';
function of(e){
  var throwable;
  if (e != null) {
    throwable = e['__java$exception'];
    if (throwable) {
      return throwable;
    }
  }
  return instanceOfNative(e, TypeError)?new NullPointerException_0(e):new JsException_0(e);
}

of.displayName = 'java.lang.Throwable.of';
defineClass(7, 1, {3:1, 7:1});
_.createError = function createError(msg){
  return new Error(msg);
}
;
_.createError.displayName = 'java.lang.Throwable.createError';
_.getLocalizedMessage = function getLocalizedMessage(){
  return this.getMessage();
}
;
_.getLocalizedMessage.displayName = 'java.lang.Throwable.getLocalizedMessage';
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.getMessage.displayName = 'java.lang.Throwable.getMessage';
_.initializeBackingError = function initializeBackingError(){
  var className, errorMessage, message;
  message = this.detailMessage == null?null:this.detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = $getName(this.___clazz) , message == null?className:className + ': ' + message);
  $setBackingJsObject(this, fixIE(this.createError(errorMessage)));
  captureStackTrace(this);
}
;
_.initializeBackingError.displayName = 'java.lang.Throwable.initializeBackingError';
_.toString_0 = function toString_2(){
  return $toString_0(this, this.getLocalizedMessage());
}
;
_.toString_0.displayName = 'java.lang.Throwable.toString';
_.backingJsObject = '__noinit__';
_.writetableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 7);
function Exception(){
  $$init_2(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

Exception.displayName = 'java.lang.Exception.Exception';
function Exception_0(backingJsObject){
  $$init_2(this);
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this);
  this.detailMessage = backingJsObject == null?'null':toString_5(backingJsObject);
}

Exception_0.displayName = 'java.lang.Exception.Exception';
function Exception_1(message){
  $$init_2(this);
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

Exception_1.displayName = 'java.lang.Exception.Exception';
defineClass(9, 7, {3:1, 9:1, 7:1}, Exception, Exception_1);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 9);
function RuntimeException(){
  Exception.call(this);
}

RuntimeException.displayName = 'java.lang.RuntimeException.RuntimeException';
function RuntimeException_0(backingJsObject){
  $$init_2(this);
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this);
  this.detailMessage = backingJsObject == null?'null':toString_5(backingJsObject);
}

RuntimeException_0.displayName = 'java.lang.RuntimeException.RuntimeException';
function RuntimeException_1(message){
  Exception_1.call(this, message);
}

RuntimeException_1.displayName = 'java.lang.RuntimeException.RuntimeException';
defineClass(8, 9, $intern_3, RuntimeException, RuntimeException_1);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 8);
function JsException(){
  RuntimeException.call(this);
}

JsException.displayName = 'java.lang.JsException.JsException';
function JsException_0(backingJsObject){
  $$init_2(this);
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this);
  this.detailMessage = backingJsObject == null?'null':toString_5(backingJsObject);
}

JsException_0.displayName = 'java.lang.JsException.JsException';
function JsException_1(msg){
  RuntimeException_1.call(this, msg);
}

JsException_1.displayName = 'java.lang.JsException.JsException';
defineClass(65, 8, $intern_3, JsException_0);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 65);
function JavaScriptExceptionBase(e){
  JsException_0.call(this, e);
}

JavaScriptExceptionBase.displayName = 'com.google.gwt.core.client.impl.JavaScriptExceptionBase.JavaScriptExceptionBase';
defineClass(146, 65, $intern_3);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 146);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

$clinit_JavaScriptException.displayName = 'com.google.gwt.core.client.JavaScriptException.$clinit';
function $$init_3(this$static){
  this$static.description = '';
}

$$init_3.displayName = 'com.google.gwt.core.client.JavaScriptException.$$init';
function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(castToJso(exception)):instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(castToJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

$ensureInit.displayName = 'com.google.gwt.core.client.JavaScriptException.$ensureInit';
function $getThrown(this$static){
  return maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
}

$getThrown.displayName = 'com.google.gwt.core.client.JavaScriptException.$getThrown';
function JavaScriptException(e){
  $clinit_JavaScriptException();
  JavaScriptExceptionBase.call(this, e);
  this.description = '';
  this.e = e;
  this.description = '';
}

JavaScriptException.displayName = 'com.google.gwt.core.client.JavaScriptException.JavaScriptException';
function JavaScriptException_0(e){
  JavaScriptExceptionBase.call(this, e);
  this.description = '';
  this.e = e;
  this.description = '';
}

JavaScriptException_0.displayName = 'com.google.gwt.core.client.JavaScriptException.JavaScriptException';
function getExceptionDescription0(e){
  return e == null?null:e.message;
}

getExceptionDescription0.displayName = 'com.google.gwt.core.client.JavaScriptException.getExceptionDescription0';
function getExceptionName0(e){
  return e == null?null:e.name;
}

getExceptionName0.displayName = 'com.google.gwt.core.client.JavaScriptException.getExceptionName0';
defineClass(67, 146, {67:1, 3:1, 9:1, 8:1, 7:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getMessage.displayName = 'com.google.gwt.core.client.JavaScriptException.getMessage';
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
_.getThrown.displayName = 'com.google.gwt.core.client.JavaScriptException.getThrown';
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 67);
function $equals_0(this$static, other){
  return !!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

$equals_0.displayName = 'com.google.gwt.core.client.JavaScriptObject.$equals';
function $getClass_0(this$static){
  return getClass_1(this$static);
}

$getClass_0.displayName = 'com.google.gwt.core.client.JavaScriptObject.$getClass';
function $hashCode_0(this$static){
  return !!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode(this$static);
}

$hashCode_0.displayName = 'com.google.gwt.core.client.JavaScriptObject.$hashCode';
function callEquals(thisObject, thatObject){
  return thisObject.equals(thatObject);
}

callEquals.displayName = 'com.google.gwt.core.client.JavaScriptObject.callEquals';
function callHashCode(object){
  return object.hashCode();
}

callHashCode.displayName = 'com.google.gwt.core.client.JavaScriptObject.callHashCode';
function createArray(){
  return [];
}

createArray.displayName = 'com.google.gwt.core.client.JavaScriptObject.createArray';
function createObject(){
  return {};
}

createObject.displayName = 'com.google.gwt.core.client.JavaScriptObject.createObject';
function hasEquals(object){
  return !!object && !!object.equals;
}

hasEquals.displayName = 'com.google.gwt.core.client.JavaScriptObject.hasEquals';
function hasHashCode(object){
  return !!object && !!object.hashCode;
}

hasHashCode.displayName = 'com.google.gwt.core.client.JavaScriptObject.hasHashCode';
function toStringSimple(obj){
  return obj.toString?obj.toString():'[JavaScriptObject]';
}

toStringSimple.displayName = 'com.google.gwt.core.client.JavaScriptObject.toStringSimple';
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
function $get(this$static, index_0){
  return this$static[index_0];
}

$get.displayName = 'com.google.gwt.core.client.JsArray.$get';
function $length(this$static){
  return this$static.length;
}

$length.displayName = 'com.google.gwt.core.client.JsArray.$length';
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

$push.displayName = 'com.google.gwt.core.client.JsArray.$push';
function $get_0(this$static, index_0){
  return this$static[index_0];
}

$get_0.displayName = 'com.google.gwt.core.client.JsArrayString.$get';
function $length_0(this$static){
  return this$static.length;
}

$length_0.displayName = 'com.google.gwt.core.client.JsArrayString.$length';
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

now_1.displayName = 'com.google.gwt.core.client.JsDate.now';
defineClass(325, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 325);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector);
}

$clinit_Impl.displayName = 'com.google.gwt.core.client.impl.Impl.$clinit';
function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

apply_0.displayName = 'com.google.gwt.core.client.impl.Impl.apply';
function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

enter.displayName = 'com.google.gwt.core.client.impl.Impl.enter';
function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0_0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

entry_0.displayName = 'com.google.gwt.core.client.impl.Impl.entry';
function entry0_0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (uncaughtExceptionHandler) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 7)) {
          t = $e0;
          reportUncaughtException(t, true);
          return undefined;
        }
         else 
          throw toJs($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

entry0_0.displayName = 'com.google.gwt.core.client.impl.Impl.entry0';
function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

exit.displayName = 'com.google.gwt.core.client.impl.Impl.exit';
function maybeInitializeWindowOnError(){
  $clinit_Impl();
  if (onErrorInitialized) {
    return;
  }
  onErrorInitialized = true;
  registerWindowOnError(false);
}

maybeInitializeWindowOnError.displayName = 'com.google.gwt.core.client.impl.Impl.maybeInitializeWindowOnError';
function registerEntry(){
  $clinit_Impl();
  return entry_0;
}

registerEntry.displayName = 'com.google.gwt.core.client.impl.Impl.registerEntry';
function registerWindowOnError(reportAlways){
  $clinit_Impl();
  function errorHandler(msg, url_0, line, column, error){
    if (!error) {
      error = msg + ' (' + url_0 + ':' + line;
      column && (error += ':' + column);
      error += ')';
    }
    var throwable = of(error);
    reportUncaughtException(throwable, false);
  }

  ;
  function addOnErrorHandler(windowRef){
    var origHandler = windowRef.onerror;
    if (origHandler && !reportAlways) {
      return;
    }
    windowRef.onerror = function(){
      errorHandler.apply(this, arguments);
      origHandler && origHandler.apply(this, arguments);
      return false;
    }
    ;
  }

  addOnErrorHandler($wnd);
  addOnErrorHandler(window);
}

registerWindowOnError.displayName = 'com.google.gwt.core.client.impl.Impl.registerWindowOnError';
function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

reportToBrowser.displayName = 'com.google.gwt.core.client.impl.Impl.reportToBrowser';
function reportUncaughtException(e, reportSwallowedExceptionToBrowser){
  $clinit_Impl();
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    $printStackTraceImpl(e, new ConsolePrintStream(new Console$0methodref$log$Type), '', '');
    return;
  }
  if (reportSwallowedExceptionToBrowser) {
    reportToBrowser(instanceOf(e, 67)?castTo(e, 67).getThrown():e);
  }
   else {
    $clinit_System();
    $printStackTraceImpl(e, err, '', '');
  }
}

reportUncaughtException.displayName = 'com.google.gwt.core.client.impl.Impl.reportUncaughtException';
function reportWindowOnError(e){
  reportUncaughtException(e, false);
}

reportWindowOnError.displayName = 'com.google.gwt.core.client.impl.Impl.reportWindowOnError';
function undefined_0(){
  return;
}

undefined_0.displayName = 'com.google.gwt.core.client.impl.Impl.undefined';
function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

watchdogEntryDepthCancel.displayName = 'com.google.gwt.core.client.impl.Impl.watchdogEntryDepthCancel';
function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

watchdogEntryDepthRun.displayName = 'com.google.gwt.core.client.impl.Impl.watchdogEntryDepthRun';
function watchdogEntryDepthSchedule(){
  return $wnd.setTimeout(watchdogEntryDepthRun, 10);
}

watchdogEntryDepthSchedule.displayName = 'com.google.gwt.core.client.impl.Impl.watchdogEntryDepthSchedule';
var entryDepth = 0, onErrorInitialized = false, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

$clinit_SchedulerImpl.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl.$clinit';
function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

$flushEntryCommands.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl.$flushEntryCommands';
function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

$flushFinallyCommands.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl.$flushFinallyCommands';
function SchedulerImpl(){
}

SchedulerImpl.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl.SchedulerImpl';
function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

push_0.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl.push';
function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].$_nullMethod() && (rescheduled = push_0(rescheduled, t)):t[0].$_nullMethod();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 7)) {
        e = $e0;
        $clinit_Impl();
        reportUncaughtException(e, true);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

runScheduledTasks.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl.runScheduledTasks';
defineClass(154, 325, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 154);
function $getRepeating(this$static){
  return this$static[0];
}

$getRepeating.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl$Task.$getRepeating';
function $getScheduled(this$static){
  return this$static[0];
}

$getScheduled.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl$Task.$getScheduled';
function $isRepeating(this$static){
  return this$static[1];
}

$isRepeating.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl$Task.$isRepeating';
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

$clinit_StackTraceCreator.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.$clinit';
function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector.collect(error);
}

captureStackTrace.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.captureStackTrace';
function constructJavaStackTrace(thrown){
  $clinit_StackTraceCreator();
  var stackTrace;
  stackTrace = collector.getStackTrace(thrown);
  return dropInternalFrames(stackTrace);
}

constructJavaStackTrace.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.constructJavaStackTrace';
function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, dropFrameUntilFnName2, i, numberOfFramesToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  dropFrameUntilFnName2 = 'initializeBackingError';
  numberOfFramesToSearch = $wnd.Math.min(stackTrace.length, 5);
  for (i = numberOfFramesToSearch - 1; i >= 0; i--) {
    if ($equals_4(stackTrace[i].methodName, dropFrameUntilFnName) || $equals_4(stackTrace[i].methodName, dropFrameUntilFnName2)) {
      stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1);
      break;
    }
  }
  return stackTrace;
}

dropInternalFrames.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.dropInternalFrames';
function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || ANONYMOUS;
}

extractFunctionName.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.extractFunctionName';
function getFnStack(e){
  $clinit_StackTraceCreator();
  return e && e['fnStack']?e['fnStack']:[];
}

getFnStack.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.getFnStack';
function getFunctionName(fn){
  $clinit_StackTraceCreator();
  return fn.name || (fn.name = extractFunctionName(fn.toString()));
}

getFunctionName.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.getFunctionName';
function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || LINE_NUMBER_UNKNOWN;
}

parseInt_0.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.parseInt';
function split_0(t){
  $clinit_StackTraceCreator();
  var e = t.backingJsObject;
  return e && e.stack?e.stack.split('\n'):[];
}

split_0.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.split';
function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

supportsErrorStack.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.supportsErrorStack';
var ANONYMOUS = 'anonymous', LINE_NUMBER_UNKNOWN = -1, collector;
defineClass(335, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 335);
function StackTraceCreator$CollectorLegacy(){
}

StackTraceCreator$CollectorLegacy.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorLegacy.StackTraceCreator$CollectorLegacy';
defineClass(147, 335, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.collect.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorLegacy.collect';
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t['fnStack']?t['fnStack']:[]);
  length_0 = stack_0.length;
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 37, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
_.getStackTrace.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorLegacy.getStackTrace';
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 147);
function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (stString.length == 0) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals_4(toReturn.substr(0, 3), 'at ') && (toReturn = toReturn.substr(3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(toReturn.substr(index_0 + 1));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = toReturn.substr(index_0 + 1));
  (toReturn.length == 0 || $equals_4(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(location_0.substr(lastColonIndex + 1));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

$parse.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModern.$parse';
function $stripSquareBrackets(toReturn){
  return toReturn.replace(/\[.*?\]/g, '');
}

$stripSquareBrackets.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModern.$stripSquareBrackets';
defineClass(336, 335, {});
_.collect = function collect_0(error){
}
;
_.collect.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModern.collect';
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.createSte.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModern.createSte';
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.backingJsObject , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 37, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals_4(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
_.getStackTrace.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModern.getStackTrace';
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 336);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

StackTraceCreator$CollectorModernNoSourceMap.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModernNoSourceMap.StackTraceCreator$CollectorModernNoSourceMap';
defineClass(148, 336, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
_.createSte.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModernNoSourceMap.createSte';
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 148);
function $clinit_DOMImpl(){
  $clinit_DOMImpl = emptyMethod;
  castTo(create_com_google_gwt_dom_client_DOMImpl(), 42);
}

$clinit_DOMImpl.displayName = 'com.google.gwt.dom.client.DOMImpl.$clinit';
defineClass(42, 1, $intern_4);
var Lcom_google_gwt_dom_client_DOMImpl_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImpl', 42);
defineClass(347, 42, $intern_4);
var Lcom_google_gwt_dom_client_DOMImplTrident_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplTrident', 347);
function DOMImplIE8(){
  $clinit_DOMImpl();
}

DOMImplIE8.displayName = 'com.google.gwt.dom.client.DOMImplIE8.DOMImplIE8';
defineClass(311, 347, $intern_4, DOMImplIE8);
var Lcom_google_gwt_dom_client_DOMImplIE8_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplIE8', 311);
defineClass(348, 42, $intern_4);
var Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandard', 348);
defineClass(349, 348, $intern_4);
var Lcom_google_gwt_dom_client_DOMImplStandardBase_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandardBase', 349);
function DOMImplIE9(){
  $clinit_DOMImpl();
}

DOMImplIE9.displayName = 'com.google.gwt.dom.client.DOMImplIE9.DOMImplIE9';
defineClass(314, 349, $intern_4, DOMImplIE9);
var Lcom_google_gwt_dom_client_DOMImplIE9_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplIE9', 314);
function DOMImplMozilla(){
  $clinit_DOMImpl();
}

DOMImplMozilla.displayName = 'com.google.gwt.dom.client.DOMImplMozilla.DOMImplMozilla';
defineClass(313, 348, $intern_4, DOMImplMozilla);
var Lcom_google_gwt_dom_client_DOMImplMozilla_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplMozilla', 313);
function DOMImplWebkit(){
  $clinit_DOMImpl();
}

DOMImplWebkit.displayName = 'com.google.gwt.dom.client.DOMImplWebkit.DOMImplWebkit';
defineClass(312, 349, $intern_4, DOMImplWebkit);
var Lcom_google_gwt_dom_client_DOMImplWebkit_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplWebkit', 312);
function $getCompatMode(this$static){
  return this$static.compatMode;
}

$getCompatMode.displayName = 'com.google.gwt.dom.client.Document.$getCompatMode';
function nativeGet(){
  return $doc;
}

nativeGet.displayName = 'com.google.gwt.dom.client.Document.nativeGet';
function asArray(array){
  return array;
}

asArray.displayName = 'com.google.gwt.lang.Array.asArray';
function canSet(array, value_0){
  var elementTypeCategory;
  switch (getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = getElementTypeCategory(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && typeof value_0 === 'function';
    case 12:
      return value_0 != null && (typeof value_0 === 'object' || typeof value_0 == 'function');
    case 0:
      return canCast(value_0, array.__elementTypeId$);
    case 2:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn);
    case 1:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn) || canCast(value_0, array.__elementTypeId$);
    default:return true;
  }
}

canSet.displayName = 'com.google.gwt.lang.Array.canSet';
function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

getClassLiteralForArray.displayName = 'com.google.gwt.lang.Array.getClassLiteralForArray';
function getClassLiteralForArrayImpl(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

getClassLiteralForArrayImpl.displayName = 'com.google.gwt.lang.Array.getClassLiteralForArrayImpl';
function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?TYPE_JS_UNKNOWN_NATIVE:array.__elementTypeCategory$;
}

getElementTypeCategory.displayName = 'com.google.gwt.lang.Array.getElementTypeCategory';
function getElementTypeId(array){
  return array.__elementTypeId$;
}

getElementTypeId.displayName = 'com.google.gwt.lang.Array.getElementTypeId';
function initMultidimensionalArray(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, count){
  return initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, 0, count);
}

initMultidimensionalArray.displayName = 'com.google.gwt.lang.Array.initMultidimensionalArray';
function initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count){
  var elementTypeCategory, i, isLastDimension, length_0, result;
  length_0 = dimExprs[index_0];
  isLastDimension = index_0 == count - 1;
  elementTypeCategory = isLastDimension?leafElementTypeCategory:0;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  leafElementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, count - index_0), castableTypeMapExprs[index_0], elementTypeIds[index_0], elementTypeCategory, result);
  if (!isLastDimension) {
    ++index_0;
    for (i = 0; i < length_0; ++i) {
      result[i] = initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count);
    }
  }
  return result;
}

initMultidimensionalArray_0.displayName = 'com.google.gwt.lang.Array.initMultidimensionalArray';
function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

initUnidimensionalArray.displayName = 'com.google.gwt.lang.Array.initUnidimensionalArray';
function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case TYPE_PRIMITIVE_LONG:
    case TYPE_PRIMITIVE_NUMBER:
      initValue = 0;
      break;
    case TYPE_PRIMITIVE_BOOLEAN:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

initializeArrayElementsWithDefaults.displayName = 'com.google.gwt.lang.Array.initializeArrayElementsWithDefaults';
function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

isJavaArray.displayName = 'com.google.gwt.lang.Array.isJavaArray';
function set_0(array, index_0, value_0){
  return array[index_0] = value_0;
}

set_0.displayName = 'com.google.gwt.lang.Array.set';
function setCheck(array, index_0, value_0){
  checkCriticalArrayType(value_0 == null || canSet(array, value_0));
  return array[index_0] = value_0;
}

setCheck.displayName = 'com.google.gwt.lang.Array.setCheck';
function setClass(o, clazz){
  o.___clazz = clazz;
}

setClass.displayName = 'com.google.gwt.lang.Array.setClass';
function setElementTypeCategory(array, elementTypeCategory){
  array.__elementTypeCategory$ = elementTypeCategory;
}

setElementTypeCategory.displayName = 'com.google.gwt.lang.Array.setElementTypeCategory';
function setElementTypeId(array, elementTypeId){
  array.__elementTypeId$ = elementTypeId;
}

setElementTypeId.displayName = 'com.google.gwt.lang.Array.setElementTypeId';
function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

stampJavaTypeInfo.displayName = 'com.google.gwt.lang.Array.stampJavaTypeInfo';
function stampJavaTypeInfo_0(array, referenceType){
  getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array);
  return array;
}

stampJavaTypeInfo_0.displayName = 'com.google.gwt.lang.Array.stampJavaTypeInfo';
var TYPE_JS_UNKNOWN_NATIVE = 10, TYPE_PRIMITIVE_BOOLEAN = 16, TYPE_PRIMITIVE_LONG = 14, TYPE_PRIMITIVE_NUMBER = 15;
function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_5;
  a1 = value_0 >> 22 & $intern_5;
  a2 = value_0 < 0?$intern_6:0;
  return create0(a0, a1, a2);
}

create.displayName = 'com.google.gwt.lang.BigLongLibBase.create';
function create_0(a){
  return create0(a.l, a.m, a.h);
}

create_0.displayName = 'com.google.gwt.lang.BigLongLibBase.create';
function create0(l, m, h){
  return {l:l, m:m, h:h};
}

create0.displayName = 'com.google.gwt.lang.BigLongLibBase.create0';
function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw toJs(new ArithmeticException_0);
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_7 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_7 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_0(($clinit_BigLongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (compare(a, b) < 0) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

divMod.displayName = 'com.google.gwt.lang.BigLongLibBase.divMod';
function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_7 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_0(($clinit_BigLongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

divModByMinValue.displayName = 'com.google.gwt.lang.BigLongLibBase.divModByMinValue';
function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

divModByShift.displayName = 'com.google.gwt.lang.BigLongLibBase.divModByShift';
function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    bshift.h = a2 >>> 1;
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_BigLongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

divModHelper.displayName = 'com.google.gwt.lang.BigLongLibBase.divModHelper';
function getHNative(a){
  return a.h;
}

getHNative.displayName = 'com.google.gwt.lang.BigLongLibBase.getHNative';
function getLNative(a){
  return a.l;
}

getLNative.displayName = 'com.google.gwt.lang.BigLongLibBase.getLNative';
function getMNative(a){
  return a.m;
}

getMNative.displayName = 'com.google.gwt.lang.BigLongLibBase.getMNative';
function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

maskRight.displayName = 'com.google.gwt.lang.BigLongLibBase.maskRight';
function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_5;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_5;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_6;
  a.l = neg0;
  a.m = neg1;
  a.h = neg2;
}

negate.displayName = 'com.google.gwt.lang.BigLongLibBase.negate';
function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

numberOfLeadingZeros.displayName = 'com.google.gwt.lang.BigLongLibBase.numberOfLeadingZeros';
function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

powerOfTwo.displayName = 'com.google.gwt.lang.BigLongLibBase.powerOfTwo';
function setBitH(a, bit){
  a.h |= 1 << bit;
}

setBitH.displayName = 'com.google.gwt.lang.BigLongLibBase.setBitH';
function setBitL(a, bit){
  a.l |= 1 << bit;
}

setBitL.displayName = 'com.google.gwt.lang.BigLongLibBase.setBitL';
function setBitM(a, bit){
  a.m |= 1 << bit;
}

setBitM.displayName = 'com.google.gwt.lang.BigLongLibBase.setBitM';
function setH(a, x_0){
  a.h = x_0;
}

setH.displayName = 'com.google.gwt.lang.BigLongLibBase.setH';
function setL(a, x_0){
  a.l = x_0;
}

setL.displayName = 'com.google.gwt.lang.BigLongLibBase.setL';
function setM(a, x_0){
  a.m = x_0;
}

setM.displayName = 'com.google.gwt.lang.BigLongLibBase.setM';
function toDoubleHelper(a){
  return a.l + a.m * $intern_8 + a.h * $intern_9;
}

toDoubleHelper.displayName = 'com.google.gwt.lang.BigLongLibBase.toDoubleHelper';
function toShru1(a){
  var a0, a1, a2;
  a1 = a.m;
  a2 = a.h;
  a0 = a.l;
  a.h = a2 >>> 1;
  a.m = a1 >>> 1 | (a2 & 1) << 21;
  a.l = a0 >>> 1 | (a1 & 1) << 21;
}

toShru1.displayName = 'com.google.gwt.lang.BigLongLibBase.toShru1';
function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  a.l = sum0 & $intern_5;
  a.m = sum1 & $intern_5;
  a.h = sum2 & $intern_6;
  return true;
}

trialSubtract.displayName = 'com.google.gwt.lang.BigLongLibBase.trialSubtract';
var remainder;
function add_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return create0(sum0 & $intern_5, sum1 & $intern_5, sum2 & $intern_6);
}

add_0.displayName = 'com.google.gwt.lang.BigLongLib.add';
function and(a, b){
  return create0(a.l & b.l, a.m & b.m, a.h & b.h);
}

and.displayName = 'com.google.gwt.lang.BigLongLib.and';
function compare(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

compare.displayName = 'com.google.gwt.lang.BigLongLib.compare';
function fromDouble(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return $clinit_BigLongLib$Const() , ZERO;
  }
  if (value_0 < -9223372036854775808) {
    return $clinit_BigLongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_BigLongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_9) {
    a2 = round_int(value_0 / $intern_9);
    value_0 -= a2 * $intern_9;
  }
  a1 = 0;
  if (value_0 >= $intern_8) {
    a1 = round_int(value_0 / $intern_8);
    value_0 -= a1 * $intern_8;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

fromDouble.displayName = 'com.google.gwt.lang.BigLongLib.fromDouble';
function mul(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a.l & 8191;
  a1 = a.l >> 13 | (a.m & 15) << 9;
  a2 = a.m >> 4 & 8191;
  a3 = a.m >> 17 | (a.h & 255) << 5;
  a4 = (a.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & $intern_5;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= $intern_5;
  c2 += c1 >> 22;
  c1 &= $intern_5;
  c2 &= $intern_6;
  return create0(c0, c1, c2);
}

mul.displayName = 'com.google.gwt.lang.BigLongLib.mul';
function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_5;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_5;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_6;
  return create0(neg0, neg1, neg2);
}

neg.displayName = 'com.google.gwt.lang.BigLongLib.neg';
function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return create0(res0 & $intern_5, res1 & $intern_5, res2 & $intern_6);
}

shl.displayName = 'com.google.gwt.lang.BigLongLib.shl';
function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_7) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_6:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_6:0;
    res1 = negative?$intern_5:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & $intern_5, res1 & $intern_5, res2 & $intern_6);
}

shr.displayName = 'com.google.gwt.lang.BigLongLib.shr';
function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_6;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return create0(res0 & $intern_5, res1 & $intern_5, res2 & $intern_6);
}

shru.displayName = 'com.google.gwt.lang.BigLongLib.shru';
function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_5, sum1 & $intern_5, sum2 & $intern_6);
}

sub_0.displayName = 'com.google.gwt.lang.BigLongLib.sub';
function toDouble(a){
  if (compare(a, ($clinit_BigLongLib$Const() , ZERO)) < 0) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_8 + a.h * $intern_9;
}

toDouble.displayName = 'com.google.gwt.lang.BigLongLib.toDouble';
function toInt(a){
  return a.l | a.m << 22;
}

toInt.displayName = 'com.google.gwt.lang.BigLongLib.toInt';
function toString_3(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_7 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_3(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = create(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

toString_3.displayName = 'com.google.gwt.lang.BigLongLib.toString';
function xor(a, b){
  return create0(a.l ^ b.l, a.m ^ b.m, a.h ^ b.h);
}

xor.displayName = 'com.google.gwt.lang.BigLongLib.xor';
function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_5, $intern_5, 524287);
  MIN_VALUE = create0(0, 0, $intern_7);
  ONE = create(1);
  create(2);
  ZERO = create(0);
}

$clinit_BigLongLib$Const.displayName = 'com.google.gwt.lang.BigLongLib$Const.$clinit';
var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function getJavaException(e){
  return e && e['__java$exception'];
}

getJavaException.displayName = 'com.google.gwt.lang.Exceptions.getJavaException';
function toJava(e){
  var javaException;
  if (instanceOf(e, 7)) {
    return e;
  }
  javaException = e && e['__java$exception'];
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

toJava.displayName = 'com.google.gwt.lang.Exceptions.toJava';
function toJs(t){
  return t.backingJsObject;
}

toJs.displayName = 'com.google.gwt.lang.Exceptions.toJs';
function add_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a + b;
    if ($intern_10 < result && result < $intern_9) {
      return result;
    }
  }
  return createLongEmul(add_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

add_1.displayName = 'com.google.gwt.lang.LongLib.add';
function and_0(a, b){
  return createLongEmul(and(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

and_0.displayName = 'com.google.gwt.lang.LongLib.and';
function asBigLong0(value_0){
  return value_0;
}

asBigLong0.displayName = 'com.google.gwt.lang.LongLib.asBigLong0';
function asDouble0(value_0){
  return value_0;
}

asDouble0.displayName = 'com.google.gwt.lang.LongLib.asDouble0';
function asSmallLong0(value_0){
  return value_0;
}

asSmallLong0.displayName = 'com.google.gwt.lang.LongLib.asSmallLong0';
function coerceToInt0(value_0){
  return value_0 | 0;
}

coerceToInt0.displayName = 'com.google.gwt.lang.LongLib.coerceToInt0';
function compare_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

compare_0.displayName = 'com.google.gwt.lang.LongLib.compare';
function createBigLongEmul0(value_0){
  return value_0;
}

createBigLongEmul0.displayName = 'com.google.gwt.lang.LongLib.createBigLongEmul0';
function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_8;
  }
  if (a2 == $intern_6) {
    return big_0.l + big_0.m * $intern_8 - $intern_9;
  }
  return big_0;
}

createLongEmul.displayName = 'com.google.gwt.lang.LongLib.createLongEmul';
function createSmallLongEmul0(value_0){
  return value_0;
}

createSmallLongEmul0.displayName = 'com.google.gwt.lang.LongLib.createSmallLongEmul0';
function div(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a / b;
    if ($intern_10 < result && result < $intern_9) {
      return result < 0?$wnd.Math.ceil(result):$wnd.Math.floor(result);
    }
  }
  return createLongEmul(divMod(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b, false));
}

div.displayName = 'com.google.gwt.lang.LongLib.div';
function eq(a, b){
  return compare_0(a, b) == 0;
}

eq.displayName = 'com.google.gwt.lang.LongLib.eq';
function fromDouble_0(value_0){
  if ($intern_10 < value_0 && value_0 < $intern_9) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

fromDouble_0.displayName = 'com.google.gwt.lang.LongLib.fromDouble';
function fromInt(value_0){
  return value_0;
}

fromInt.displayName = 'com.google.gwt.lang.LongLib.fromInt';
function gt(a, b){
  return compare_0(a, b) > 0;
}

gt.displayName = 'com.google.gwt.lang.LongLib.gt';
function gte_0(a, b){
  return compare_0(a, b) >= 0;
}

gte_0.displayName = 'com.google.gwt.lang.LongLib.gte';
function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

isSmallLong0.displayName = 'com.google.gwt.lang.LongLib.isSmallLong0';
function lt(a, b){
  return compare_0(a, b) < 0;
}

lt.displayName = 'com.google.gwt.lang.LongLib.lt';
function lte(a, b){
  return compare_0(a, b) <= 0;
}

lte.displayName = 'com.google.gwt.lang.LongLib.lte';
function mul_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a * b;
    if ($intern_10 < result && result < $intern_9) {
      return result;
    }
  }
  return createLongEmul(mul(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

mul_0.displayName = 'com.google.gwt.lang.LongLib.mul';
function neg_0(a){
  var result;
  if (isSmallLong0(a)) {
    result = 0 - a;
    if (!isNaN(result)) {
      return result;
    }
  }
  return createLongEmul(neg(a));
}

neg_0.displayName = 'com.google.gwt.lang.LongLib.neg';
function neq(a, b){
  return compare_0(a, b) != 0;
}

neq.displayName = 'com.google.gwt.lang.LongLib.neq';
function shl_0(a, n){
  return createLongEmul(shl(isSmallLong0(a)?toBigLong(a):a, n));
}

shl_0.displayName = 'com.google.gwt.lang.LongLib.shl';
function shr_0(a, n){
  return createLongEmul(shr(isSmallLong0(a)?toBigLong(a):a, n));
}

shr_0.displayName = 'com.google.gwt.lang.LongLib.shr';
function shru_0(a, n){
  return createLongEmul(shru(isSmallLong0(a)?toBigLong(a):a, n));
}

shru_0.displayName = 'com.google.gwt.lang.LongLib.shru';
function sub_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if ($intern_10 < result && result < $intern_9) {
      return result;
    }
  }
  return createLongEmul(sub_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

sub_1.displayName = 'com.google.gwt.lang.LongLib.sub';
function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_9;
    a3 = $intern_6;
  }
  a1 = round_int(value_0 / $intern_8);
  a0 = round_int(value_0 - a1 * $intern_8);
  return create0(a0, a1, a3);
}

toBigLong.displayName = 'com.google.gwt.lang.LongLib.toBigLong';
function toDouble_0(a){
  var d;
  if (isSmallLong0(a)) {
    d = a;
    return d == -0.?0:d;
  }
  return toDouble(a);
}

toDouble_0.displayName = 'com.google.gwt.lang.LongLib.toDouble';
function toInt_0(a){
  if (isSmallLong0(a)) {
    return a | 0;
  }
  return toInt(a);
}

toInt_0.displayName = 'com.google.gwt.lang.LongLib.toInt';
function toString_4(a){
  if (isSmallLong0(a)) {
    return '' + a;
  }
  return toString_3(a);
}

toString_4.displayName = 'com.google.gwt.lang.LongLib.toString';
function xor_0(a, b){
  return createLongEmul(xor(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

xor_0.displayName = 'com.google.gwt.lang.LongLib.xor';
function getCastableTypeMap(o){
  return o.castableTypeMap;
}

getCastableTypeMap.displayName = 'com.google.gwt.lang.Util.getCastableTypeMap';
function hasTypeMarker(o){
  return o.typeMarker === typeMarkerFn;
}

hasTypeMarker.displayName = 'com.google.gwt.lang.Util.hasTypeMarker';
function setCastableTypeMap(o, castableTypeMap){
  o.castableTypeMap = castableTypeMap;
}

setCastableTypeMap.displayName = 'com.google.gwt.lang.Util.setCastableTypeMap';
function setTypeMarker(o){
  o.typeMarker = typeMarkerFn;
}

setTypeMarker.displayName = 'com.google.gwt.lang.Util.setTypeMarker';
function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad_0();
  $onModuleLoad();
}

init.displayName = 'com.google.gwt.lang.com_00046codewars__js__EntryMethodHolder.init';
function $byteLength(this$static){
  return this$static.byteLength;
}

$byteLength.displayName = 'com.google.gwt.typedarrays.client.ArrayBufferNative.$byteLength';
function $get_1(this$static, index_0){
  return this$static[index_0];
}

$get_1.displayName = 'com.google.gwt.typedarrays.client.Int8ArrayNative.$get';
function create_1(buffer){
  return new Int8Array(buffer);
}

create_1.displayName = 'com.google.gwt.typedarrays.client.Int8ArrayNative.create';
function $get_2(this$static, index_0){
  return this$static[index_0];
}

$get_2.displayName = 'com.google.gwt.typedarrays.client.Uint8ArrayNative.$get';
function $length_1(this$static){
  return this$static.length;
}

$length_1.displayName = 'com.google.gwt.typedarrays.client.Uint8ArrayNative.$length';
function $onModuleLoad_0(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_11, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_4(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_4('CSS1Compat', allowedModes[0]) && $equals_4('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

$onModuleLoad_0.displayName = 'com.google.gwt.user.client.DocumentModeAsserter.$onModuleLoad';
function assertCompileTimeUserAgent(){
  var compileTimeValue, impl, runtimeValue;
  impl = castTo(create_com_google_gwt_useragent_client_UserAgent(), 77);
  compileTimeValue = impl.getCompileTimeValue();
  runtimeValue = impl.getRuntimeValue();
  if (!$equals_4(compileTimeValue, runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue));
  }
}

assertCompileTimeUserAgent.displayName = 'com.google.gwt.useragent.client.UserAgentAsserter.assertCompileTimeUserAgent';
function scheduleUserAgentCheck(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
}

scheduleUserAgentCheck.displayName = 'com.google.gwt.useragent.client.UserAgentAsserter.scheduleUserAgentCheck';
function Error_0(message, cause){
  $$init_2(this);
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

Error_0.displayName = 'java.lang.Error.Error';
defineClass(43, 7, $intern_12);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 43);
function AssertionError(message){
  Error_0.call(this, message == null?'null':toString_5(message), instanceOf(message, 7)?castTo(message, 7):null);
}

AssertionError.displayName = 'java.lang.AssertionError.AssertionError';
defineClass(19, 43, $intern_12);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 19);
function UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_5('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 7)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 7):null);
}

UserAgentAsserter$UserAgentAssertionError.displayName = 'com.google.gwt.useragent.client.UserAgentAsserter$UserAgentAssertionError.UserAgentAsserter$UserAgentAssertionError';
defineClass(138, 19, $intern_12, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 138);
function UserAgentImplGecko1_8(){
}

UserAgentImplGecko1_8.displayName = 'com.google.gwt.useragent.client.UserAgentImplGecko1_8.UserAgentImplGecko1_8';
defineClass(158, 1, $intern_13, UserAgentImplGecko1_8);
_.getCompileTimeValue = function getCompileTimeValue(){
  return 'gecko1_8';
}
;
_.getCompileTimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplGecko1_8.getCompileTimeValue';
_.getRuntimeValue = function getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
_.getRuntimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplGecko1_8.getRuntimeValue';
var Lcom_google_gwt_useragent_client_UserAgentImplGecko1_18_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplGecko1_8', 158);
function UserAgentImplIe10(){
}

UserAgentImplIe10.displayName = 'com.google.gwt.useragent.client.UserAgentImplIe10.UserAgentImplIe10';
defineClass(156, 1, $intern_13, UserAgentImplIe10);
_.getCompileTimeValue = function getCompileTimeValue_0(){
  return 'ie10';
}
;
_.getCompileTimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplIe10.getCompileTimeValue';
_.getRuntimeValue = function getRuntimeValue_0(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
_.getRuntimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplIe10.getRuntimeValue';
var Lcom_google_gwt_useragent_client_UserAgentImplIe10_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe10', 156);
function UserAgentImplIe8(){
}

UserAgentImplIe8.displayName = 'com.google.gwt.useragent.client.UserAgentImplIe8.UserAgentImplIe8';
defineClass(159, 1, $intern_13, UserAgentImplIe8);
_.getCompileTimeValue = function getCompileTimeValue_1(){
  return 'ie8';
}
;
_.getCompileTimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplIe8.getCompileTimeValue';
_.getRuntimeValue = function getRuntimeValue_1(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
_.getRuntimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplIe8.getRuntimeValue';
var Lcom_google_gwt_useragent_client_UserAgentImplIe8_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe8', 159);
function UserAgentImplIe9(){
}

UserAgentImplIe9.displayName = 'com.google.gwt.useragent.client.UserAgentImplIe9.UserAgentImplIe9';
defineClass(155, 1, $intern_13, UserAgentImplIe9);
_.getCompileTimeValue = function getCompileTimeValue_2(){
  return 'ie9';
}
;
_.getCompileTimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplIe9.getCompileTimeValue';
_.getRuntimeValue = function getRuntimeValue_2(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
_.getRuntimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplIe9.getRuntimeValue';
var Lcom_google_gwt_useragent_client_UserAgentImplIe9_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe9', 155);
function UserAgentImplSafari(){
}

UserAgentImplSafari.displayName = 'com.google.gwt.useragent.client.UserAgentImplSafari.UserAgentImplSafari';
defineClass(157, 1, $intern_13, UserAgentImplSafari);
_.getCompileTimeValue = function getCompileTimeValue_3(){
  return 'safari';
}
;
_.getCompileTimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplSafari.getCompileTimeValue';
_.getRuntimeValue = function getRuntimeValue_3(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
_.getRuntimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplSafari.getRuntimeValue';
var Lcom_google_gwt_useragent_client_UserAgentImplSafari_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplSafari', 157);
function $clinit_DomGlobal(){
  $clinit_DomGlobal = emptyMethod;
  document_0 = $wnd.window.document;
}

$clinit_DomGlobal.displayName = 'elemental2.dom.DomGlobal.$clinit';
var document_0;
function CpuException(){
  Exception.call(this);
}

CpuException.displayName = 'il.co.codeguru.corewars_riscv.cpu.exceptions.CpuException.CpuException';
defineClass(82, 9, {82:1, 3:1, 9:1, 7:1});
var Lil_co_codeguru_corewars_1riscv_cpu_exceptions_CpuException_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.exceptions', 'CpuException', 82);
function InvalidOpcodeException(){
  Exception.call(this);
}

InvalidOpcodeException.displayName = 'il.co.codeguru.corewars_riscv.cpu.exceptions.InvalidOpcodeException.InvalidOpcodeException';
defineClass(27, 82, {82:1, 27:1, 3:1, 9:1, 7:1}, InvalidOpcodeException);
var Lil_co_codeguru_corewars_1riscv_cpu_exceptions_InvalidOpcodeException_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.exceptions', 'InvalidOpcodeException', 27);
function $nextOpcode(this$static){
  var instruction, instructionRaw, rawCode;
  if ($tryRv32cSet(this$static))
    return;
  rawCode = $loadWord(this$static.Memory, this$static.state.pc);
  instructionRaw = new InstructionFormatBase(rawCode);
  instruction = $decode(instructionRaw);
  $execute(instruction, this$static.runner);
  $setPc(this$static.state, this$static.state.pc + 4);
}

$nextOpcode.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.CpuRiscV.$nextOpcode';
function $tryRv32cSet(this$static){
  var commpressedInstruction, i, rawComppressedCode;
  rawComppressedCode = $loadHalfWord(this$static.Memory, this$static.state.pc);
  commpressedInstruction = new CInstructionFormatBase(rawComppressedCode);
  i = $decode_0(commpressedInstruction);
  if (i) {
    $execute(i, this$static.runner);
    $setPc(this$static.state, this$static.state.pc + 2);
  }
  return !!i;
}

$tryRv32cSet.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.CpuRiscV.$tryRv32cSet';
function CpuRiscV(state, Memory){
  this.state = state;
  this.Memory = Memory;
  this.runner = new InstructionRunner(this);
}

CpuRiscV.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.CpuRiscV.CpuRiscV';
defineClass(310, 1, {}, CpuRiscV);
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_CpuRiscV_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'CpuRiscV', 310);
function $getReg(this$static, index_0){
  return this$static.registers[index_0];
}

$getReg.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.CpuStateRiscV.$getReg';
function $setPc(this$static, pc){
  this$static.pc = pc;
}

$setPc.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.CpuStateRiscV.$setPc';
function $setReg(this$static, index_0, value_0){
  this$static.registers[index_0] = value_0;
  this$static.registers[0] = 0;
}

$setReg.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.CpuStateRiscV.$setReg';
function CpuStateRiscV(){
  this.registers = initUnidimensionalArray(I_classLit, $intern_14, 11, 32, 15, 1);
  this.pc = 0;
}

CpuStateRiscV.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.CpuStateRiscV.CpuStateRiscV';
defineClass(219, 1, {}, CpuStateRiscV);
_.pc = 0;
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_CpuStateRiscV_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'CpuStateRiscV', 219);
function $execute(this$static, runner){
  this$static.action_0.apply_0(this$static.instructionFormat, runner);
}

$execute.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.Instruction.$execute';
function Instruction(info, format, action){
  this.info_0 = info;
  this.instructionFormat = format;
  this.action_0 = action;
}

Instruction.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.Instruction.Instruction';
defineClass(6, 1, {}, Instruction);
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_Instruction_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'Instruction', 6);
function Instruction$InstructionInfo(name_0, type_0){
  Instruction$InstructionInfo_0.call(this, name_0, type_0, 0);
}

Instruction$InstructionInfo.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.Instruction$InstructionInfo.Instruction$InstructionInfo';
function Instruction$InstructionInfo_0(name_0, type_0, funct3){
  Instruction$InstructionInfo_1.call(this, name_0, type_0, funct3, 0);
}

Instruction$InstructionInfo_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.Instruction$InstructionInfo.Instruction$InstructionInfo';
function Instruction$InstructionInfo_1(name_0, type_0, funct3, funct7){
  this.name_0 = name_0;
  this.opcode = type_0;
  this.funct3 = funct3;
  this.funct7 = funct7;
}

Instruction$InstructionInfo_1.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.Instruction$InstructionInfo.Instruction$InstructionInfo';
defineClass(5, 1, {}, Instruction$InstructionInfo, Instruction$InstructionInfo_0, Instruction$InstructionInfo_1);
_.funct3 = 0;
_.funct7 = 0;
_.opcode = 0;
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_Instruction$InstructionInfo_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'Instruction/InstructionInfo', 5);
function $branchOpcode(i){
  var sb;
  sb = new InstructionFormatSB_1(i);
  switch ((sb.raw >> 12 & 7) << 24 >> 24) {
    case 0:
      return new Instruction(($clinit_RV32I$Opcodes() , Beq), sb, new InstructionDecoder$lambda$4$Type);
    case 1:
      return new Instruction(($clinit_RV32I$Opcodes() , Bne), sb, new InstructionDecoder$lambda$5$Type);
    case 4:
      return new Instruction(($clinit_RV32I$Opcodes() , Blt), sb, new InstructionDecoder$lambda$6$Type);
    case 5:
      return new Instruction(($clinit_RV32I$Opcodes() , Bge), sb, new InstructionDecoder$lambda$7$Type);
    case 6:
      return new Instruction(($clinit_RV32I$Opcodes() , Bltu), sb, new InstructionDecoder$lambda$8$Type);
    case 7:
      return new Instruction(($clinit_RV32I$Opcodes() , Bgeu), sb, new InstructionDecoder$lambda$9$Type);
    default:throw toJs(new InvalidOpcodeException);
  }
}

$branchOpcode.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder.$branchOpcode';
function $decode(i){
  switch ((i.raw & 127) << 24 >> 24) {
    case 3:
      return $loadOpcode(i);
    case 19:
      return $immOpcode(i);
    case 23:
      return new Instruction(($clinit_RV32I$Opcodes() , Auipc), new InstructionFormatU_1(i), new InstructionDecoder$lambda$0$Type);
    case 35:
      return $storeOpcode(i);
    case 51:
      return $registerOpcode(i);
    case 55:
      return new Instruction(($clinit_RV32I$Opcodes() , Lui), new InstructionFormatU_1(i), new InstructionDecoder$lambda$1$Type);
    case 99:
      return $branchOpcode(i);
    case 103:
      return new Instruction(($clinit_RV32I$Opcodes() , Jalr), new InstructionFormatI_1(i), new InstructionDecoder$lambda$2$Type);
    case 111:
      return new Instruction(($clinit_RV32I$Opcodes() , Jal), new InstructionFormatUJ_1(i), new InstructionDecoder$lambda$3$Type);
    default:throw toJs(new InvalidOpcodeException);
  }
}

$decode.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder.$decode';
function $immOpcode(i){
  var ii, imm;
  ii = new InstructionFormatI_1(i);
  switch ((ii.raw >> 12 & 7) << 24 >> 24) {
    case 0:
      return new Instruction(($clinit_RV32I$Opcodes() , Addi), ii, new InstructionDecoder$lambda$23$Type);
    case 1:
      return new Instruction(($clinit_RV32I$Opcodes() , Slli), ii, new InstructionDecoder$lambda$24$Type);
    case 2:
      return new Instruction(($clinit_RV32I$Opcodes() , Slti), ii, new InstructionDecoder$lambda$25$Type);
    case 3:
      return new Instruction(($clinit_RV32I$Opcodes() , Sltiu), ii, new InstructionDecoder$lambda$26$Type);
    case 4:
      return new Instruction(($clinit_RV32I$Opcodes() , Xori), ii, new InstructionDecoder$lambda$27$Type);
    case 5:
      imm = ii.raw >> 20 << 16 >> 16 >> 5;
      switch (imm) {
        case 0:
          return new Instruction(($clinit_RV32I$Opcodes() , Srli), ii, new InstructionDecoder$lambda$28$Type);
        case 32:
          return new Instruction(($clinit_RV32I$Opcodes() , Srai), ii, new InstructionDecoder$lambda$29$Type);
        default:throw toJs(new InvalidOpcodeException);
      }

    case 6:
      return new Instruction(($clinit_RV32I$Opcodes() , Ori), ii, new InstructionDecoder$lambda$30$Type);
    case 7:
      return new Instruction(($clinit_RV32I$Opcodes() , Andi), ii, new InstructionDecoder$lambda$31$Type);
    default:throw toJs(new InvalidOpcodeException);
  }
}

$immOpcode.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder.$immOpcode';
function $loadOpcode(i){
  var ii;
  ii = new InstructionFormatI_1(i);
  switch ((ii.raw >> 12 & 7) << 24 >> 24) {
    case 0:
      return new Instruction(($clinit_RV32I$Opcodes() , Lb), ii, new InstructionDecoder$lambda$32$Type);
    case 1:
      return new Instruction(($clinit_RV32I$Opcodes() , Lh), ii, new InstructionDecoder$lambda$33$Type);
    case 2:
      return new Instruction(($clinit_RV32I$Opcodes() , Lw), ii, new InstructionDecoder$lambda$34$Type);
    case 4:
      return new Instruction(($clinit_RV32I$Opcodes() , Lbu), ii, new InstructionDecoder$lambda$35$Type);
    case 5:
      return new Instruction(($clinit_RV32I$Opcodes() , Lhu), ii, new InstructionDecoder$lambda$36$Type);
    default:throw toJs(new InvalidOpcodeException);
  }
}

$loadOpcode.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder.$loadOpcode';
function $registerOpcode(i){
  var ir;
  ir = new InstructionFormatR_1(i);
  switch ((ir.raw >> 12 & 7) << 24 >> 24) {
    case 0:
      switch (ir.raw >> 25 << 24 >> 24) {
        case 0:
          return new Instruction(($clinit_RV32I$Opcodes() , Add), ir, new InstructionDecoder$lambda$10$Type);
        case 32:
          return new Instruction(($clinit_RV32I$Opcodes() , Sub), ir, new InstructionDecoder$lambda$11$Type);
        default:throw toJs(new InvalidOpcodeException);
      }

    case 1:
      return new Instruction(($clinit_RV32I$Opcodes() , Sll), ir, new InstructionDecoder$lambda$12$Type);
    case 2:
      return new Instruction(($clinit_RV32I$Opcodes() , Slt), ir, new InstructionDecoder$lambda$13$Type);
    case 3:
      return new Instruction(($clinit_RV32I$Opcodes() , Sltu), ir, new InstructionDecoder$lambda$14$Type);
    case 4:
      return new Instruction(($clinit_RV32I$Opcodes() , Xor), ir, new InstructionDecoder$lambda$15$Type);
    case 5:
      switch (ir.raw >> 25 << 24 >> 24) {
        case 0:
          return new Instruction(($clinit_RV32I$Opcodes() , Srl), ir, new InstructionDecoder$lambda$16$Type);
        case 32:
          return new Instruction(($clinit_RV32I$Opcodes() , Sra), ir, new InstructionDecoder$lambda$17$Type);
        default:throw toJs(new InvalidOpcodeException);
      }

    case 6:
      return new Instruction(($clinit_RV32I$Opcodes() , Or), ir, new InstructionDecoder$lambda$18$Type);
    case 7:
      return new Instruction(($clinit_RV32I$Opcodes() , And), ir, new InstructionDecoder$lambda$19$Type);
    default:throw toJs(new InvalidOpcodeException);
  }
}

$registerOpcode.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder.$registerOpcode';
function $storeOpcode(i){
  var is;
  is = new InstructionFormatS_1(i);
  switch ((is.raw >> 12 & 7) << 24 >> 24) {
    case 0:
      return new Instruction(($clinit_RV32I$Opcodes() , Sb), is, new InstructionDecoder$lambda$20$Type);
    case 1:
      return new Instruction(($clinit_RV32I$Opcodes() , Sh), is, new InstructionDecoder$lambda$21$Type);
    case 2:
      return new Instruction(($clinit_RV32I$Opcodes() , Sw), is, new InstructionDecoder$lambda$22$Type);
    default:throw toJs(new InvalidOpcodeException);
  }
}

$storeOpcode.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder.$storeOpcode';
function InstructionDecoder$lambda$0$Type(){
}

InstructionDecoder$lambda$0$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$0$Type.InstructionDecoder$lambda$0$Type';
defineClass(223, 1, {}, InstructionDecoder$lambda$0$Type);
_.apply_0 = function apply_1(arg0, arg1){
  $auipc(arg1, new InstructionFormatU_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$0$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$0$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$0$Type', 223);
function InstructionDecoder$lambda$1$Type(){
}

InstructionDecoder$lambda$1$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$1$Type.InstructionDecoder$lambda$1$Type';
defineClass(224, 1, {}, InstructionDecoder$lambda$1$Type);
_.apply_0 = function apply_2(arg0, arg1){
  $lui(arg1, new InstructionFormatU_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$1$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$1$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$1$Type', 224);
function InstructionDecoder$lambda$10$Type(){
}

InstructionDecoder$lambda$10$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$10$Type.InstructionDecoder$lambda$10$Type';
defineClass(233, 1, {}, InstructionDecoder$lambda$10$Type);
_.apply_0 = function apply_3(arg0, arg1){
  $add(arg1, new InstructionFormatR_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$10$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$10$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$10$Type', 233);
function InstructionDecoder$lambda$11$Type(){
}

InstructionDecoder$lambda$11$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$11$Type.InstructionDecoder$lambda$11$Type';
defineClass(234, 1, {}, InstructionDecoder$lambda$11$Type);
_.apply_0 = function apply_4(arg0, arg1){
  $sub(arg1, new InstructionFormatR_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$11$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$11$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$11$Type', 234);
function InstructionDecoder$lambda$12$Type(){
}

InstructionDecoder$lambda$12$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$12$Type.InstructionDecoder$lambda$12$Type';
defineClass(235, 1, {}, InstructionDecoder$lambda$12$Type);
_.apply_0 = function apply_5(arg0, arg1){
  $sll(arg1, new InstructionFormatR_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$12$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$12$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$12$Type', 235);
function InstructionDecoder$lambda$13$Type(){
}

InstructionDecoder$lambda$13$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$13$Type.InstructionDecoder$lambda$13$Type';
defineClass(236, 1, {}, InstructionDecoder$lambda$13$Type);
_.apply_0 = function apply_6(arg0, arg1){
  $slt(arg1, new InstructionFormatR_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$13$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$13$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$13$Type', 236);
function InstructionDecoder$lambda$14$Type(){
}

InstructionDecoder$lambda$14$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$14$Type.InstructionDecoder$lambda$14$Type';
defineClass(237, 1, {}, InstructionDecoder$lambda$14$Type);
_.apply_0 = function apply_7(arg0, arg1){
  $sltu(arg1, new InstructionFormatR_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$14$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$14$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$14$Type', 237);
function InstructionDecoder$lambda$15$Type(){
}

InstructionDecoder$lambda$15$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$15$Type.InstructionDecoder$lambda$15$Type';
defineClass(238, 1, {}, InstructionDecoder$lambda$15$Type);
_.apply_0 = function apply_8(arg0, arg1){
  $xor(arg1, new InstructionFormatR_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$15$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$15$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$15$Type', 238);
function InstructionDecoder$lambda$16$Type(){
}

InstructionDecoder$lambda$16$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$16$Type.InstructionDecoder$lambda$16$Type';
defineClass(239, 1, {}, InstructionDecoder$lambda$16$Type);
_.apply_0 = function apply_9(arg0, arg1){
  $srl(arg1, new InstructionFormatR_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$16$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$16$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$16$Type', 239);
function InstructionDecoder$lambda$17$Type(){
}

InstructionDecoder$lambda$17$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$17$Type.InstructionDecoder$lambda$17$Type';
defineClass(240, 1, {}, InstructionDecoder$lambda$17$Type);
_.apply_0 = function apply_10(arg0, arg1){
  $sra(arg1, new InstructionFormatR_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$17$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$17$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$17$Type', 240);
function InstructionDecoder$lambda$18$Type(){
}

InstructionDecoder$lambda$18$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$18$Type.InstructionDecoder$lambda$18$Type';
defineClass(241, 1, {}, InstructionDecoder$lambda$18$Type);
_.apply_0 = function apply_11(arg0, arg1){
  $or(arg1, new InstructionFormatR_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$18$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$18$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$18$Type', 241);
function InstructionDecoder$lambda$19$Type(){
}

InstructionDecoder$lambda$19$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$19$Type.InstructionDecoder$lambda$19$Type';
defineClass(242, 1, {}, InstructionDecoder$lambda$19$Type);
_.apply_0 = function apply_12(arg0, arg1){
  $and(arg1, new InstructionFormatR_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$19$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$19$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$19$Type', 242);
function InstructionDecoder$lambda$2$Type(){
}

InstructionDecoder$lambda$2$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$2$Type.InstructionDecoder$lambda$2$Type';
defineClass(225, 1, {}, InstructionDecoder$lambda$2$Type);
_.apply_0 = function apply_13(arg0, arg1){
  $jalr(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$2$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$2$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$2$Type', 225);
function InstructionDecoder$lambda$20$Type(){
}

InstructionDecoder$lambda$20$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$20$Type.InstructionDecoder$lambda$20$Type';
defineClass(243, 1, {}, InstructionDecoder$lambda$20$Type);
_.apply_0 = function apply_14(arg0, arg1){
  $sb(arg1, new InstructionFormatS_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$20$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$20$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$20$Type', 243);
function InstructionDecoder$lambda$21$Type(){
}

InstructionDecoder$lambda$21$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$21$Type.InstructionDecoder$lambda$21$Type';
defineClass(244, 1, {}, InstructionDecoder$lambda$21$Type);
_.apply_0 = function apply_15(arg0, arg1){
  $sh(arg1, new InstructionFormatS_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$21$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$21$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$21$Type', 244);
function InstructionDecoder$lambda$22$Type(){
}

InstructionDecoder$lambda$22$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$22$Type.InstructionDecoder$lambda$22$Type';
defineClass(245, 1, {}, InstructionDecoder$lambda$22$Type);
_.apply_0 = function apply_16(arg0, arg1){
  $sw(arg1, new InstructionFormatS_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$22$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$22$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$22$Type', 245);
function InstructionDecoder$lambda$23$Type(){
}

InstructionDecoder$lambda$23$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$23$Type.InstructionDecoder$lambda$23$Type';
defineClass(246, 1, {}, InstructionDecoder$lambda$23$Type);
_.apply_0 = function apply_17(arg0, arg1){
  $addi(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$23$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$23$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$23$Type', 246);
function InstructionDecoder$lambda$24$Type(){
}

InstructionDecoder$lambda$24$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$24$Type.InstructionDecoder$lambda$24$Type';
defineClass(247, 1, {}, InstructionDecoder$lambda$24$Type);
_.apply_0 = function apply_18(arg0, arg1){
  $slli(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$24$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$24$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$24$Type', 247);
function InstructionDecoder$lambda$25$Type(){
}

InstructionDecoder$lambda$25$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$25$Type.InstructionDecoder$lambda$25$Type';
defineClass(248, 1, {}, InstructionDecoder$lambda$25$Type);
_.apply_0 = function apply_19(arg0, arg1){
  $slti(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$25$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$25$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$25$Type', 248);
function InstructionDecoder$lambda$26$Type(){
}

InstructionDecoder$lambda$26$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$26$Type.InstructionDecoder$lambda$26$Type';
defineClass(249, 1, {}, InstructionDecoder$lambda$26$Type);
_.apply_0 = function apply_20(arg0, arg1){
  $sltiu(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$26$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$26$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$26$Type', 249);
function InstructionDecoder$lambda$27$Type(){
}

InstructionDecoder$lambda$27$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$27$Type.InstructionDecoder$lambda$27$Type';
defineClass(250, 1, {}, InstructionDecoder$lambda$27$Type);
_.apply_0 = function apply_21(arg0, arg1){
  $xori(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$27$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$27$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$27$Type', 250);
function InstructionDecoder$lambda$28$Type(){
}

InstructionDecoder$lambda$28$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$28$Type.InstructionDecoder$lambda$28$Type';
defineClass(251, 1, {}, InstructionDecoder$lambda$28$Type);
_.apply_0 = function apply_22(arg0, arg1){
  $srli(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$28$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$28$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$28$Type', 251);
function InstructionDecoder$lambda$29$Type(){
}

InstructionDecoder$lambda$29$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$29$Type.InstructionDecoder$lambda$29$Type';
defineClass(252, 1, {}, InstructionDecoder$lambda$29$Type);
_.apply_0 = function apply_23(arg0, arg1){
  $srai(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$29$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$29$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$29$Type', 252);
function InstructionDecoder$lambda$3$Type(){
}

InstructionDecoder$lambda$3$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$3$Type.InstructionDecoder$lambda$3$Type';
defineClass(226, 1, {}, InstructionDecoder$lambda$3$Type);
_.apply_0 = function apply_24(arg0, arg1){
  $jal(arg1, new InstructionFormatUJ_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$3$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$3$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$3$Type', 226);
function InstructionDecoder$lambda$30$Type(){
}

InstructionDecoder$lambda$30$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$30$Type.InstructionDecoder$lambda$30$Type';
defineClass(253, 1, {}, InstructionDecoder$lambda$30$Type);
_.apply_0 = function apply_25(arg0, arg1){
  $ori(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$30$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$30$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$30$Type', 253);
function InstructionDecoder$lambda$31$Type(){
}

InstructionDecoder$lambda$31$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$31$Type.InstructionDecoder$lambda$31$Type';
defineClass(254, 1, {}, InstructionDecoder$lambda$31$Type);
_.apply_0 = function apply_26(arg0, arg1){
  $andi(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$31$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$31$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$31$Type', 254);
function InstructionDecoder$lambda$32$Type(){
}

InstructionDecoder$lambda$32$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$32$Type.InstructionDecoder$lambda$32$Type';
defineClass(255, 1, {}, InstructionDecoder$lambda$32$Type);
_.apply_0 = function apply_27(arg0, arg1){
  $lb(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$32$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$32$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$32$Type', 255);
function InstructionDecoder$lambda$33$Type(){
}

InstructionDecoder$lambda$33$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$33$Type.InstructionDecoder$lambda$33$Type';
defineClass(256, 1, {}, InstructionDecoder$lambda$33$Type);
_.apply_0 = function apply_28(arg0, arg1){
  $lh(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$33$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$33$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$33$Type', 256);
function InstructionDecoder$lambda$34$Type(){
}

InstructionDecoder$lambda$34$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$34$Type.InstructionDecoder$lambda$34$Type';
defineClass(257, 1, {}, InstructionDecoder$lambda$34$Type);
_.apply_0 = function apply_29(arg0, arg1){
  $lw(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$34$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$34$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$34$Type', 257);
function InstructionDecoder$lambda$35$Type(){
}

InstructionDecoder$lambda$35$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$35$Type.InstructionDecoder$lambda$35$Type';
defineClass(258, 1, {}, InstructionDecoder$lambda$35$Type);
_.apply_0 = function apply_30(arg0, arg1){
  $lbu(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$35$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$35$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$35$Type', 258);
function InstructionDecoder$lambda$36$Type(){
}

InstructionDecoder$lambda$36$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$36$Type.InstructionDecoder$lambda$36$Type';
defineClass(259, 1, {}, InstructionDecoder$lambda$36$Type);
_.apply_0 = function apply_31(arg0, arg1){
  $lhu(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$36$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$36$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$36$Type', 259);
function InstructionDecoder$lambda$4$Type(){
}

InstructionDecoder$lambda$4$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$4$Type.InstructionDecoder$lambda$4$Type';
defineClass(227, 1, {}, InstructionDecoder$lambda$4$Type);
_.apply_0 = function apply_32(arg0, arg1){
  $beq(arg1, new InstructionFormatSB_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$4$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$4$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$4$Type', 227);
function InstructionDecoder$lambda$5$Type(){
}

InstructionDecoder$lambda$5$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$5$Type.InstructionDecoder$lambda$5$Type';
defineClass(228, 1, {}, InstructionDecoder$lambda$5$Type);
_.apply_0 = function apply_33(arg0, arg1){
  $bne(arg1, new InstructionFormatSB_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$5$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$5$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$5$Type', 228);
function InstructionDecoder$lambda$6$Type(){
}

InstructionDecoder$lambda$6$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$6$Type.InstructionDecoder$lambda$6$Type';
defineClass(229, 1, {}, InstructionDecoder$lambda$6$Type);
_.apply_0 = function apply_34(arg0, arg1){
  $blt(arg1, new InstructionFormatSB_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$6$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$6$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$6$Type', 229);
function InstructionDecoder$lambda$7$Type(){
}

InstructionDecoder$lambda$7$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$7$Type.InstructionDecoder$lambda$7$Type';
defineClass(230, 1, {}, InstructionDecoder$lambda$7$Type);
_.apply_0 = function apply_35(arg0, arg1){
  $bge(arg1, new InstructionFormatSB_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$7$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$7$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$7$Type', 230);
function InstructionDecoder$lambda$8$Type(){
}

InstructionDecoder$lambda$8$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$8$Type.InstructionDecoder$lambda$8$Type';
defineClass(231, 1, {}, InstructionDecoder$lambda$8$Type);
_.apply_0 = function apply_36(arg0, arg1){
  $bltu(arg1, new InstructionFormatSB_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$8$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$8$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$8$Type', 231);
function InstructionDecoder$lambda$9$Type(){
}

InstructionDecoder$lambda$9$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$9$Type.InstructionDecoder$lambda$9$Type';
defineClass(232, 1, {}, InstructionDecoder$lambda$9$Type);
_.apply_0 = function apply_37(arg0, arg1){
  $bgeu(arg1, new InstructionFormatSB_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionDecoder$lambda$9$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionDecoder$lambda$9$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionDecoder/lambda$9$Type', 232);
function $add(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) + $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24));
}

$add.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$add';
function $addi(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) + (i.raw >> 20 << 16 >> 16));
}

$addi.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$addi';
function $and(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) & $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24));
}

$and.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$and';
function $andi(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) & i.raw >> 20 << 16 >> 16);
}

$andi.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$andi';
function $auipc(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, this$static.state.pc + (i.raw >> 12 << 12));
}

$auipc.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$auipc';
function $beq(this$static, i){
  $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) == $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24) && $jump_0(this$static.state, $getImm_0(i), 4);
}

$beq.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$beq';
function $beq_0(this$static, i){
  $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) == $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24) && $jump_0(this$static.state, $getImm_0(i), 2);
}

$beq_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$beq';
function $bge(this$static, i){
  $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) >= $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24) && $jump(this$static.state, $getImm_0(i));
}

$bge.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$bge';
function $bgeu(this$static, i){
  $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) + $intern_15 >= $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24) + $intern_15 && $jump(this$static.state, $getImm_0(i));
}

$bgeu.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$bgeu';
function $blt(this$static, i){
  $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) < $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24) && $jump(this$static.state, $getImm_0(i));
}

$blt.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$blt';
function $bltu(this$static, i){
  $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) + $intern_15 < $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24) + $intern_15 && $jump(this$static.state, $getImm_0(i));
}

$bltu.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$bltu';
function $bne(this$static, i){
  $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) != $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24) && $jump_0(this$static.state, $getImm_0(i), 4);
}

$bne.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$bne';
function $bne_0(this$static, i){
  $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) != $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24) && $jump_0(this$static.state, $getImm_0(i), 2);
}

$bne_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$bne';
function $jal(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, this$static.state.pc + 4);
  $jump_0(this$static.state, $getImmediate(i), 4);
}

$jal.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$jal';
function $jal_0(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, this$static.state.pc + 2);
  $jump_0(this$static.state, $getImmediate(i), 2);
}

$jal_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$jal';
function $jalr(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, this$static.state.pc + 4);
  $jump_0(this$static.state, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) + (i.raw >> 20 << 16 >> 16), 4);
}

$jalr.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$jalr';
function $jalr_0(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, this$static.state.pc + 2);
  $jump_0(this$static.state, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) + (i.raw >> 20 << 16 >> 16), 2);
}

$jalr_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$jalr';
function $jump(state, immediate){
  $setPc(state, state.pc + immediate - 4);
}

$jump.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$jump';
function $jump_0(state, immediate, instructionSize){
  $setPc(state, state.pc + immediate - instructionSize);
}

$jump_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$jump';
function $lb(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $loadByte_0(this$static.memory, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) + (i.raw >> 20 << 16 >> 16)));
}

$lb.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$lb';
function $lbu(this$static, i){
  var val;
  val = $loadByte_0(this$static.memory, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) + (i.raw >> 20 << 16 >> 16));
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, val & 255);
}

$lbu.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$lbu';
function $lh(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $loadHalfWord(this$static.memory, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) + (i.raw >> 20 << 16 >> 16)));
}

$lh.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$lh';
function $lhu(this$static, i){
  var val;
  val = $loadHalfWord(this$static.memory, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) + (i.raw >> 20 << 16 >> 16));
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, val & $intern_0);
}

$lhu.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$lhu';
function $lui(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24) & 4095 | i.raw >> 12 << 12);
}

$lui.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$lui';
function $lw(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $loadWord(this$static.memory, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) + (i.raw >> 20 << 16 >> 16)));
}

$lw.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$lw';
function $or(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) | $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24));
}

$or.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$or';
function $ori(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) | i.raw >> 20 << 16 >> 16);
}

$ori.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$ori';
function $sb(this$static, i){
  $storeByte_0(this$static.memory, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) + $getImm(i), $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24) << 24 >> 24);
}

$sb.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$sb';
function $sh(this$static, i){
  $storeHalfWord(this$static.memory, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) + $getImm(i), $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24) << 16 >> 16);
}

$sh.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$sh';
function $sll(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) << $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24));
}

$sll.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$sll';
function $slli(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) << (i.raw >> 20 << 16 >> 16));
}

$slli.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$slli';
function $slt(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) < $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24)?1:0);
}

$slt.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$slt';
function $slti(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) < i.raw >> 20 << 16 >> 16?1:0);
}

$slti.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$slti';
function $sltiu(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) + $intern_15 < (i.raw >> 20 << 16 >> 16) + $intern_15?1:0);
}

$sltiu.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$sltiu';
function $sltu(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) + $intern_15 < $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24) + $intern_15?1:0);
}

$sltu.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$sltu';
function $sra(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) >> $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24));
}

$sra.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$sra';
function $srai(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) >> (i.raw >> 20 << 16 >> 16));
}

$srai.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$srai';
function $srl(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) >>> $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24));
}

$srl.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$srl';
function $srli(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) >>> (i.raw >> 20 << 16 >> 16));
}

$srli.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$srli';
function $sub(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) - $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24));
}

$sub.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$sub';
function $sw(this$static, i){
  $storeWord(this$static.memory, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) + $getImm(i), $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24));
}

$sw.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$sw';
function $xor(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) ^ $getReg(this$static.state, (i.raw >> 20 & 31) << 24 >> 24));
}

$xor.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$xor';
function $xori(this$static, i){
  $setReg(this$static.state, (i.raw >> 7 & 31) << 24 >> 24, $getReg(this$static.state, (i.raw >> 15 & 31) << 24 >> 24) ^ i.raw >> 20 << 16 >> 16);
}

$xori.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.$xori';
function InstructionRunner(cpu){
  this.state = cpu.state;
  this.memory = cpu.Memory;
}

InstructionRunner.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.InstructionRunner.InstructionRunner';
defineClass(319, 1, {}, InstructionRunner);
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_InstructionRunner_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv', 'InstructionRunner', 319);
function instructionI(op, rd, rs1, imm){
  return new InstructionFormatI_0(op.opcode, rd, op.funct3, rs1, imm | op.funct7 << 5);
}

instructionI.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.RV32I.instructionI';
function instructionR(op, rd, rs1, rs2){
  return new InstructionFormatR_0(op.opcode, rd, op.funct3, rs1, rs2, op.funct7);
}

instructionR.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.RV32I.instructionR';
function instructionS(op, rs1, rs2, imm){
  return new InstructionFormatS_0(op.opcode, op.funct3, rs1, rs2, imm);
}

instructionS.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.RV32I.instructionS';
function instructionSB(op, rs1, imm){
  return new InstructionFormatSB_0(op.opcode, op.funct3, rs1, imm);
}

instructionSB.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.RV32I.instructionSB';
function instructionU(op, rd, imm){
  return new InstructionFormatU_0(op.opcode, rd, imm);
}

instructionU.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.RV32I.instructionU';
function instructionUJ(op, rd, imm){
  return new InstructionFormatUJ_0(op.opcode, rd, imm);
}

instructionUJ.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.RV32I.instructionUJ';
function $clinit_RV32I$Opcodes(){
  $clinit_RV32I$Opcodes = emptyMethod;
  Beq = new Instruction$InstructionInfo_0('Beq', 99, 0);
  Bne = new Instruction$InstructionInfo_0('Bne', 99, 1);
  Blt = new Instruction$InstructionInfo_0('Blt', 99, 4);
  Bge = new Instruction$InstructionInfo_0('Bge', 99, 5);
  Bltu = new Instruction$InstructionInfo_0('Bltu', 99, 6);
  Bgeu = new Instruction$InstructionInfo_0('Bgeu', 99, 7);
  Add = new Instruction$InstructionInfo_1('Add', 51, 0, 0);
  Sub = new Instruction$InstructionInfo_1('Sub', 51, 0, 32);
  Sll = new Instruction$InstructionInfo_0('Sll', 51, 1);
  Slt = new Instruction$InstructionInfo_0('Slt', 51, 2);
  Sltu = new Instruction$InstructionInfo_0('Sltu', 51, 3);
  Xor = new Instruction$InstructionInfo_0('Xor', 51, 4);
  Srl = new Instruction$InstructionInfo_1('Srl', 51, 5, 0);
  Sra = new Instruction$InstructionInfo_1('Sra', 51, 5, 32);
  Or = new Instruction$InstructionInfo_0('Or', 51, 6);
  And = new Instruction$InstructionInfo_0('And', 51, 7);
  Sb = new Instruction$InstructionInfo_0('Sb', 35, 0);
  Sh = new Instruction$InstructionInfo_0('Sh', 35, 1);
  Sw = new Instruction$InstructionInfo_0('Sw', 35, 2);
  Addi = new Instruction$InstructionInfo_0('Addi', 19, 0);
  Slli = new Instruction$InstructionInfo_0('Slli', 19, 1);
  Slti = new Instruction$InstructionInfo_0('Slti', 19, 2);
  Sltiu = new Instruction$InstructionInfo_0('Sltui', 19, 3);
  Xori = new Instruction$InstructionInfo_0('Xori', 19, 4);
  Srli = new Instruction$InstructionInfo_1('Srli', 19, 5, 0);
  Srai = new Instruction$InstructionInfo_1('Srai', 19, 5, 32);
  Ori = new Instruction$InstructionInfo_0('Ori', 19, 6);
  Andi = new Instruction$InstructionInfo_0('Andi', 19, 7);
  Lb = new Instruction$InstructionInfo_0('Lb', 3, 0);
  Lh = new Instruction$InstructionInfo_0('Lh', 3, 1);
  Lw = new Instruction$InstructionInfo_0('Lw', 3, 2);
  Lbu = new Instruction$InstructionInfo_0('Lbu', 3, 4);
  Lhu = new Instruction$InstructionInfo_0('Lhu', 3, 5);
  Lui = new Instruction$InstructionInfo('Lui', 55);
  Auipc = new Instruction$InstructionInfo('Auipc', 23);
  Jal = new Instruction$InstructionInfo('Jal', 111);
  Jalr = new Instruction$InstructionInfo('Jalr', 103);
}

$clinit_RV32I$Opcodes.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.RV32I$Opcodes.$clinit';
var Add, Addi, And, Andi, Auipc, Beq, Bge, Bgeu, Blt, Bltu, Bne, Jal, Jalr, Lb, Lbu, Lh, Lhu, Lui, Lw, Or, Ori, Sb, Sh, Sll, Slli, Slt, Slti, Sltiu, Sltu, Sra, Srai, Srl, Srli, Sub, Sw, Xor, Xori;
function InstructionFormatBase(raw){
  this.raw = raw;
}

InstructionFormatBase.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatBase.InstructionFormatBase';
defineClass(48, 1, {}, InstructionFormatBase);
_.format = function format_0(info){
  throw toJs(new UnsupportedOperationException('Trying to get formatted instruction from the base instruction format'));
}
;
_.format.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatBase.format';
_.raw = 0;
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_instruction_1formats_InstructionFormatBase_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats', 'InstructionFormatBase', 48);
function InstructionFormatI(raw){
  InstructionFormatBase.call(this, raw);
}

InstructionFormatI.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatI.InstructionFormatI';
function InstructionFormatI_0(opcode, rd, funct3, rs1, imm){
  InstructionFormatI.call(this, opcode & 127 | (rd & 31) << 7 | (funct3 & 7) << 12 | (rs1 & 31) << 15 | (imm & 4095) << 20);
}

InstructionFormatI_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatI.InstructionFormatI';
function InstructionFormatI_1(i){
  InstructionFormatI.call(this, i.raw);
}

InstructionFormatI_1.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatI.InstructionFormatI';
defineClass(10, 48, {}, InstructionFormatI_0, InstructionFormatI_1);
_.format = function format_1(info){
  return info.name_0.toLowerCase() + ' x' + ((this.raw >> 7 & 31) << 24 >> 24) + ', x' + ((this.raw >> 15 & 31) << 24 >> 24) + ', ' + (this.raw >> 20 << 16 >> 16);
}
;
_.format.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatI.format';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_instruction_1formats_InstructionFormatI_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats', 'InstructionFormatI', 10);
function InstructionFormatR(raw){
  InstructionFormatBase.call(this, raw);
}

InstructionFormatR.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatR.InstructionFormatR';
function InstructionFormatR_0(opcode, rd, funct3, rs1, rs2, funct7){
  InstructionFormatR.call(this, opcode & 127 | (rd & 31) << 7 | (funct3 & 7) << 12 | (rs1 & 31) << 15 | (rs2 & 31) << 20 | (funct7 & 127) << 25);
}

InstructionFormatR_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatR.InstructionFormatR';
function InstructionFormatR_1(i){
  InstructionFormatR.call(this, i.raw);
}

InstructionFormatR_1.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatR.InstructionFormatR';
defineClass(12, 48, {}, InstructionFormatR_0, InstructionFormatR_1);
_.format = function format_2(info){
  return info.name_0.toLowerCase() + ' x' + ((this.raw >> 7 & 31) << 24 >> 24) + ', x' + ((this.raw >> 15 & 31) << 24 >> 24) + ', x' + ((this.raw >> 20 & 31) << 24 >> 24);
}
;
_.format.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatR.format';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_instruction_1formats_InstructionFormatR_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats', 'InstructionFormatR', 12);
function $getImm(this$static){
  var first_part, second_part;
  first_part = (this$static.raw >> 7 & 31) << 24 >> 24;
  second_part = this$static.raw >> 25 << 24 >> 24;
  return (first_part | second_part << 5) << 24 >> 24;
}

$getImm.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatS.$getImm';
function InstructionFormatS(raw){
  InstructionFormatBase.call(this, raw);
}

InstructionFormatS.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatS.InstructionFormatS';
function InstructionFormatS_0(opcode, funct3, rs1, rs2, imm){
  InstructionFormatS.call(this, opcode & 127 | (imm & 31) << 7 | (funct3 & 7) << 12 | (rs1 & 31) << 15 | (rs2 & 31) << 20 | imm >> 5 & -33554432);
}

InstructionFormatS_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatS.InstructionFormatS';
function InstructionFormatS_1(i){
  InstructionFormatS.call(this, i.raw);
}

InstructionFormatS_1.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatS.InstructionFormatS';
defineClass(41, 48, {}, InstructionFormatS_0, InstructionFormatS_1);
_.format = function format_3(info){
  return info.name_0.toLowerCase() + ' x' + ((this.raw >> 20 & 31) << 24 >> 24) + ', ' + $getImm(this) + ' (x' + ((this.raw >> 15 & 31) << 24 >> 24) + ')';
}
;
_.format.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatS.format';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_instruction_1formats_InstructionFormatS_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats', 'InstructionFormatS', 41);
function $getImm_0(this$static){
  var bit11, bit12, first_part, second_part;
  bit11 = this$static.raw >> 7 & 1;
  first_part = (this$static.raw >> 8 & 15) << 24 >> 24;
  bit12 = this$static.raw >> 31 & 1;
  second_part = this$static.raw >> 25 << 24 >> 24 & 63;
  return (first_part << 1 | second_part << 5 | bit11 << 11 | bit12 << 12) << 24 >> 24;
}

$getImm_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatSB.$getImm';
function InstructionFormatSB(raw){
  InstructionFormatBase.call(this, raw);
}

InstructionFormatSB.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatSB.InstructionFormatSB';
function InstructionFormatSB_0(opcode, funct3, rs1, imm){
  InstructionFormatSB.call(this, opcode & 127 | (imm >> 11 & 1) << 7 | (imm >> 1 & 15) << 8 | (funct3 & 7) << 12 | (rs1 & 31) << 15 | 0 | imm >> 5 & 2113929216 | (imm >> 12 & 1) << 31);
}

InstructionFormatSB_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatSB.InstructionFormatSB';
function InstructionFormatSB_1(i){
  InstructionFormatSB.call(this, i.raw);
}

InstructionFormatSB_1.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatSB.InstructionFormatSB';
defineClass(25, 48, {}, InstructionFormatSB_0, InstructionFormatSB_1);
_.format = function format_4(info){
  return info.name_0.toLowerCase() + ' x' + ((this.raw >> 20 & 31) << 24 >> 24) + ', ' + $getImm_0(this) + ' (x' + ((this.raw >> 15 & 31) << 24 >> 24) + ')';
}
;
_.format.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatSB.format';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_instruction_1formats_InstructionFormatSB_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats', 'InstructionFormatSB', 25);
function InstructionFormatU(raw){
  InstructionFormatBase.call(this, raw);
}

InstructionFormatU.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatU.InstructionFormatU';
function InstructionFormatU_0(opcode, rd, imm){
  InstructionFormatU.call(this, opcode & 127 | (rd & 31) << 7 | (imm & $intern_6) << 12);
}

InstructionFormatU_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatU.InstructionFormatU';
function InstructionFormatU_1(i){
  InstructionFormatU.call(this, i.raw);
}

InstructionFormatU_1.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatU.InstructionFormatU';
defineClass(49, 48, {}, InstructionFormatU_0, InstructionFormatU_1);
_.format = function format_5(info){
  return info.name_0.toLowerCase() + ' x' + ((this.raw >> 7 & 31) << 24 >> 24) + ', ' + (this.raw >> 12);
}
;
_.format.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatU.format';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_instruction_1formats_InstructionFormatU_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats', 'InstructionFormatU', 49);
function $getImmediate(this$static){
  var bit11, bit12_19, bit1_10, bit20;
  bit20 = this$static.raw >> 31;
  bit1_10 = this$static.raw >> 21 & 1023;
  bit11 = this$static.raw >> 20 & 1;
  bit12_19 = this$static.raw >> 12 & 255;
  return bit1_10 << 1 | bit11 << 11 | bit12_19 << 12 | bit20 << 20;
}

$getImmediate.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatUJ.$getImmediate';
function InstructionFormatUJ(raw){
  InstructionFormatBase.call(this, raw);
}

InstructionFormatUJ.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatUJ.InstructionFormatUJ';
function InstructionFormatUJ_0(opcode, rd, imm){
  InstructionFormatUJ.call(this, opcode & 127 | (rd & 31) << 7 | (imm >> 20 & 1) << 31 | (imm >> 1 & 1023) << 21 | (imm >> 11 & 1) << 20 | (imm >> 12 & 255) << 12);
}

InstructionFormatUJ_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatUJ.InstructionFormatUJ';
function InstructionFormatUJ_1(i){
  InstructionFormatUJ.call(this, i.raw);
}

InstructionFormatUJ_1.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatUJ.InstructionFormatUJ';
defineClass(58, 48, {}, InstructionFormatUJ_0, InstructionFormatUJ_1);
_.format = function format_6(info){
  return info.name_0.toLowerCase() + ' x' + ((this.raw >> 7 & 31) << 24 >> 24) + ', ' + $getImmediate(this);
}
;
_.format.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats.InstructionFormatUJ.format';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_instruction_1formats_InstructionFormatUJ_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.instruction_formats', 'InstructionFormatUJ', 58);
function $decode_0(i){
  var base, base0, base1, base2, base3, base4, bit2, bit3, bit4, bit42, bit5, bit54, bit6, bit76, bit78, bit9, bit96, cb, ci, ciw, cj, cl, cr, cs, css, cssbit52, cssbit76, cssuimm, nzimm, nzuimm, uimm, bit6_0, bit2_0, bit53, bit6_1, bit2_1, bit53_0;
  ci = new CInstructionFormatCI(i);
  cs = new CInstructionFormatCS(i);
  cb = new CInstructionFormatCB(i);
  switch ((i.raw & 3) << 24 >> 24) {
    case 0:
      ciw = new CInstructionFormatCIW(i);
      switch ((i.raw >> 13 & 7) << 24 >> 24) {
        case 0:
          if ((ciw.raw >> 5 & 255) << 24 >> 24 == 0) {
            return null;
          }

          bit3 = (ciw.raw >> 5 & 255) << 24 >> 24 & 1;
          bit2 = (ciw.raw >> 5 & 255) << 24 >> 24 >> 1 & 1;
          bit96 = (ciw.raw >> 5 & 255) << 24 >> 24 >> 2 & 15;
          bit54 = (ciw.raw >> 5 & 255) << 24 >> 24 >> 6 & 3;
          nzuimm = (bit2 | bit3 << 1 | bit54 << 2 | bit96 << 4) << 2;
          return new Instruction(($clinit_RV32C$Opcodes() , CADDI4SPN), instructionI(($clinit_RV32I$Opcodes() , Addi), (ciw.raw >> 2 & 7) + 8 << 24 >> 24, 2, nzuimm), new InstructionDecoderRv32c$lambda$0$Type);
        case 2:
          cl = new CInstructionFormatCL(i);
          return new Instruction(($clinit_RV32C$Opcodes() , CLW), instructionI(($clinit_RV32I$Opcodes() , Lw), (cl.raw >> 2 & 7) + 8 << 24 >> 24, (cl.raw >> 7 & 7) + 8 << 24 >> 24, (bit6_0 = cl.raw >> 5 & 1 , bit2_0 = cl.raw >> 6 & 1 , bit53 = cl.raw >> 10 & 7 , (bit2_0 | bit53 << 1 | bit6_0 << 4) << 2 << 24 >> 24)), new InstructionDecoderRv32c$lambda$1$Type);
        case 6:
          return new Instruction(($clinit_RV32C$Opcodes() , CSW), instructionS(($clinit_RV32I$Opcodes() , Sw), (cs.raw >> 7 & 7) + 8 << 24 >> 24, (cs.raw >> 2 & 7) + 8 << 24 >> 24, (bit6_1 = cs.raw >> 5 & 1 , bit2_1 = cs.raw >> 6 & 1 , bit53_0 = cs.raw >> 10 & 7 , (bit2_1 | bit53_0 << 1 | bit6_1 << 4) << 2 << 24 >> 24)), new InstructionDecoderRv32c$lambda$2$Type);
      }

    case 1:
      cj = new CInstructionFormatCJ(i);
      switch ((i.raw >> 13 & 7) << 24 >> 24) {
        case 0:
          if ((ci.raw >> 7 & 31) << 24 >> 24 != 0) {
            return new Instruction(($clinit_RV32C$Opcodes() , CADDI), instructionI(($clinit_RV32I$Opcodes() , Addi), (ci.raw >> 7 & 31) << 24 >> 24, (ci.raw >> 7 & 31) << 24 >> 24, (base0 = ((ci.raw >> 12 & 1) << 5 | ci.raw >> 2 & 31) << 24 >> 24 , ((base0 & 32) == 32?base0 | 192:base0) << 24 >> 24)), new InstructionDecoderRv32c$lambda$3$Type);
          }

        case 1:
          return new Instruction(($clinit_RV32C$Opcodes() , CJAL), instructionUJ(($clinit_RV32I$Opcodes() , Jal), 1, $getImmediate_1(cj)), new InstructionDecoderRv32c$lambda$4$Type);
        case 2:
          return new Instruction(($clinit_RV32C$Opcodes() , CLI), instructionI(($clinit_RV32I$Opcodes() , Addi), (ci.raw >> 7 & 31) << 24 >> 24, 0, (base1 = ((ci.raw >> 12 & 1) << 5 | ci.raw >> 2 & 31) << 24 >> 24 , ((base1 & 32) == 32?base1 | 192:base1) << 24 >> 24)), new InstructionDecoderRv32c$lambda$5$Type);
        case 3:
          if ((ci.raw >> 7 & 31) << 24 >> 24 == 2) {
            bit5 = (base0 = ((ci.raw >> 12 & 1) << 5 | ci.raw >> 2 & 31) << 24 >> 24 , ((base0 & 32) == 32?base0 | 192:base0) << 24 >> 24 >> 2 & 1);
            bit78 = (base2 = ((ci.raw >> 12 & 1) << 5 | ci.raw >> 2 & 31) << 24 >> 24 , ((base2 & 32) == 32?base2 | 192:base2) << 24 >> 24 >> 3 & 2);
            bit6 = (base3 = ((ci.raw >> 12 & 1) << 5 | ci.raw >> 2 & 31) << 24 >> 24 , ((base3 & 32) == 32?base3 | 192:base3) << 24 >> 24 >> 5 & 1);
            bit4 = (base4 = ((ci.raw >> 12 & 1) << 5 | ci.raw >> 2 & 31) << 24 >> 24 , ((base4 & 32) == 32?base4 | 192:base4) << 24 >> 24 >> 6 & 1);
            bit9 = (base = ((ci.raw >> 12 & 1) << 5 | ci.raw >> 2 & 31) << 24 >> 24 , ((base & 32) == 32?base | 192:base) << 24 >> 24 >> 7 & 1);
            nzimm = (bit4 & bit5 << 1 & bit6 << 2 & bit78 << 3 & bit9 << 4) << 4;
            return new Instruction(($clinit_RV32C$Opcodes() , CADDI16SP), instructionI(($clinit_RV32I$Opcodes() , Addi), 2, 2, nzimm), new InstructionDecoderRv32c$lambda$6$Type);
          }
           else if ((ci.raw >> 7 & 31) << 24 >> 24 != 0) {
            return new Instruction(($clinit_RV32C$Opcodes() , CLUI), instructionU(($clinit_RV32I$Opcodes() , Lui), (ci.raw >> 7 & 31) << 24 >> 24, (base = ((ci.raw >> 12 & 1) << 5 | ci.raw >> 2 & 31) << 24 >> 24 , ((base & 32) == 32?base | 192:base) << 24 >> 24)), new InstructionDecoderRv32c$lambda$7$Type);
          }

        case 4:
          if ((cb.raw >> 10 & 3) << 24 >> 24 != 3) {
            switch ((cb.raw >> 10 & 3) << 24 >> 24) {
              case 0:
                return new Instruction(($clinit_RV32C$Opcodes() , CSRLI), instructionI(($clinit_RV32I$Opcodes() , Srli), (cb.raw >> 7 & 7) + 8 << 24 >> 24, (cb.raw >> 7 & 7) + 8 << 24 >> 24, $getImmediate_0(cb)), new InstructionDecoderRv32c$lambda$8$Type);
              case 1:
                return new Instruction(($clinit_RV32C$Opcodes() , CSRAI), instructionI(($clinit_RV32I$Opcodes() , Srai), (cb.raw >> 7 & 7) + 8 << 24 >> 24, (cb.raw >> 7 & 7) + 8 << 24 >> 24, $getImmediate_0(cb)), new InstructionDecoderRv32c$lambda$9$Type);
              case 2:
                return new Instruction(($clinit_RV32C$Opcodes() , CANDI), instructionI(($clinit_RV32I$Opcodes() , Andi), (cb.raw >> 7 & 7) + 8 << 24 >> 24, (cb.raw >> 7 & 7) + 8 << 24 >> 24, $getImmediate_0(cb)), new InstructionDecoderRv32c$lambda$10$Type);
            }
          }
           else if (((cs.raw >> 10 & 63) << 24 >> 24 >> 2 & 1) == 0) {
            switch ((cs.raw >> 5 & 3) << 24 >> 24) {
              case 0:
                return new Instruction(($clinit_RV32C$Opcodes() , CSUB), instructionR(($clinit_RV32I$Opcodes() , Sub), (cs.raw >> 7 & 7) + 8 << 24 >> 24, (cs.raw >> 7 & 7) + 8 << 24 >> 24, (cs.raw >> 2 & 7) + 8 << 24 >> 24), new InstructionDecoderRv32c$lambda$11$Type);
              case 1:
                return new Instruction(($clinit_RV32C$Opcodes() , CXOR), instructionR(($clinit_RV32I$Opcodes() , Xor), (cs.raw >> 7 & 7) + 8 << 24 >> 24, (cs.raw >> 7 & 7) + 8 << 24 >> 24, (cs.raw >> 2 & 7) + 8 << 24 >> 24), new InstructionDecoderRv32c$lambda$12$Type);
              case 2:
                return new Instruction(($clinit_RV32C$Opcodes() , COR), instructionR(($clinit_RV32I$Opcodes() , Or), (cs.raw >> 7 & 7) + 8 << 24 >> 24, (cs.raw >> 7 & 7) + 8 << 24 >> 24, (cs.raw >> 2 & 7) + 8 << 24 >> 24), new InstructionDecoderRv32c$lambda$13$Type);
              case 3:
                return new Instruction(($clinit_RV32C$Opcodes() , CAND), instructionR(($clinit_RV32I$Opcodes() , And), (cs.raw >> 7 & 7) + 8 << 24 >> 24, (cs.raw >> 7 & 7) + 8 << 24 >> 24, (cs.raw >> 2 & 7) + 8 << 24 >> 24), new InstructionDecoderRv32c$lambda$14$Type);
            }
          }

        case 5:
          return new Instruction(($clinit_RV32C$Opcodes() , CJ), instructionUJ(($clinit_RV32I$Opcodes() , Jal), 0, $getImmediate_1(cj)), new InstructionDecoderRv32c$lambda$15$Type);
        case 6:
          return new Instruction(($clinit_RV32C$Opcodes() , CBEQZ), instructionSB(($clinit_RV32I$Opcodes() , Beq), (cb.raw >> 7 & 7) + 8 << 24 >> 24, $getBranchImmediate(cb)), new InstructionDecoderRv32c$lambda$16$Type);
        case 7:
          return new Instruction(($clinit_RV32C$Opcodes() , CBNEZ), instructionSB(($clinit_RV32I$Opcodes() , Bne), (cb.raw >> 7 & 7) + 8 << 24 >> 24, $getBranchImmediate(cb)), new InstructionDecoderRv32c$lambda$17$Type);
      }

    case 2:
      switch ((i.raw >> 13 & 7) << 24 >> 24) {
        case 0:
          return new Instruction(($clinit_RV32C$Opcodes() , CSLLI), instructionI(($clinit_RV32I$Opcodes() , Slli), (ci.raw >> 7 & 31) << 24 >> 24, (ci.raw >> 7 & 31) << 24 >> 24, (base = ((ci.raw >> 12 & 1) << 5 | ci.raw >> 2 & 31) << 24 >> 24 , ((base & 32) == 32?base | 192:base) << 24 >> 24)), new InstructionDecoderRv32c$lambda$18$Type);
        case 2:
          bit76 = ((ci.raw >> 12 & 1) << 5 | ci.raw >> 2 & 31) << 24 >> 24 & 3;
          bit42 = ((ci.raw >> 12 & 1) << 5 | ci.raw >> 2 & 31) << 24 >> 24 >> 2 & 7;
          bit5 = ((ci.raw >> 12 & 1) << 5 | ci.raw >> 2 & 31) << 24 >> 24 >> 5 & 1;
          uimm = (bit42 | bit5 << 3 | bit76 << 4) << 2;
          return new Instruction(($clinit_RV32C$Opcodes() , CLWSP), instructionI(($clinit_RV32I$Opcodes() , Lw), (ci.raw >> 7 & 31) << 24 >> 24, 2, uimm), new InstructionDecoderRv32c$lambda$19$Type);
        case 4:
          cr = new CInstructionFormatCR(i);
          if (((cr.raw >> 12 & 15) << 24 >> 24 & 1) == 1) {
            if ((cr.raw >> 7 & 31) << 24 >> 24 != 0 && (cr.raw >> 2 & 31) << 24 >> 24 != 0) {
              return new Instruction(($clinit_RV32C$Opcodes() , CADD), instructionR(($clinit_RV32I$Opcodes() , Add), (cr.raw >> 7 & 31) << 24 >> 24, (cr.raw >> 7 & 31) << 24 >> 24, (cr.raw >> 2 & 31) << 24 >> 24), new InstructionDecoderRv32c$lambda$20$Type);
            }
             else if ((cr.raw >> 7 & 31) << 24 >> 24 != 0 && (cr.raw >> 2 & 31) << 24 >> 24 == 0) {
              return new Instruction(($clinit_RV32C$Opcodes() , CJALR), instructionI(($clinit_RV32I$Opcodes() , Jalr), 1, (cr.raw >> 7 & 31) << 24 >> 24, 0), new InstructionDecoderRv32c$lambda$21$Type);
            }
          }
           else {
            if ((cr.raw >> 7 & 31) << 24 >> 24 != 0 && (cr.raw >> 2 & 31) << 24 >> 24 != 0) {
              return new Instruction(($clinit_RV32C$Opcodes() , CMV), instructionR(($clinit_RV32I$Opcodes() , Add), (cr.raw >> 7 & 31) << 24 >> 24, 0, (cr.raw >> 2 & 31) << 24 >> 24), new InstructionDecoderRv32c$lambda$22$Type);
            }
             else if ((cr.raw >> 7 & 31) << 24 >> 24 != 0 && (cr.raw >> 2 & 31) << 24 >> 24 == 0) {
              return new Instruction(($clinit_RV32C$Opcodes() , CJR), instructionI(($clinit_RV32I$Opcodes() , Jalr), 0, (cr.raw >> 7 & 31) << 24 >> 24, 0), new InstructionDecoderRv32c$lambda$23$Type);
            }
          }

        case 6:
          css = new CInstructionFormatCSS(i);
          cssbit76 = (css.raw >> 7 & 63) << 24 >> 24 & 3;
          cssbit52 = (css.raw >> 7 & 63) << 24 >> 24 >> 2 & 15;
          cssuimm = (cssbit52 | cssbit76 << 4) << 2;
          return new Instruction(($clinit_RV32C$Opcodes() , CSWSP), instructionS(($clinit_RV32I$Opcodes() , Sw), 2, (css.raw >> 2 & 31) << 24 >> 24, cssuimm), new InstructionDecoderRv32c$lambda$24$Type);
      }

  }
  return null;
}

$decode_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c.$decode';
function InstructionDecoderRv32c$lambda$0$Type(){
}

InstructionDecoderRv32c$lambda$0$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$0$Type.InstructionDecoderRv32c$lambda$0$Type';
defineClass(260, 1, {}, InstructionDecoderRv32c$lambda$0$Type);
_.apply_0 = function apply_38(arg0, arg1){
  $addi(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$0$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$0$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$0$Type', 260);
function InstructionDecoderRv32c$lambda$1$Type(){
}

InstructionDecoderRv32c$lambda$1$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$1$Type.InstructionDecoderRv32c$lambda$1$Type';
defineClass(261, 1, {}, InstructionDecoderRv32c$lambda$1$Type);
_.apply_0 = function apply_39(arg0, arg1){
  $lw(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$1$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$1$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$1$Type', 261);
function InstructionDecoderRv32c$lambda$10$Type(){
}

InstructionDecoderRv32c$lambda$10$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$10$Type.InstructionDecoderRv32c$lambda$10$Type';
defineClass(270, 1, {}, InstructionDecoderRv32c$lambda$10$Type);
_.apply_0 = function apply_40(arg0, arg1){
  $andi(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$10$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$10$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$10$Type', 270);
function InstructionDecoderRv32c$lambda$11$Type(){
}

InstructionDecoderRv32c$lambda$11$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$11$Type.InstructionDecoderRv32c$lambda$11$Type';
defineClass(271, 1, {}, InstructionDecoderRv32c$lambda$11$Type);
_.apply_0 = function apply_41(arg0, arg1){
  $sub(arg1, new InstructionFormatR_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$11$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$11$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$11$Type', 271);
function InstructionDecoderRv32c$lambda$12$Type(){
}

InstructionDecoderRv32c$lambda$12$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$12$Type.InstructionDecoderRv32c$lambda$12$Type';
defineClass(272, 1, {}, InstructionDecoderRv32c$lambda$12$Type);
_.apply_0 = function apply_42(arg0, arg1){
  $xor(arg1, new InstructionFormatR_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$12$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$12$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$12$Type', 272);
function InstructionDecoderRv32c$lambda$13$Type(){
}

InstructionDecoderRv32c$lambda$13$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$13$Type.InstructionDecoderRv32c$lambda$13$Type';
defineClass(273, 1, {}, InstructionDecoderRv32c$lambda$13$Type);
_.apply_0 = function apply_43(arg0, arg1){
  $or(arg1, new InstructionFormatR_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$13$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$13$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$13$Type', 273);
function InstructionDecoderRv32c$lambda$14$Type(){
}

InstructionDecoderRv32c$lambda$14$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$14$Type.InstructionDecoderRv32c$lambda$14$Type';
defineClass(274, 1, {}, InstructionDecoderRv32c$lambda$14$Type);
_.apply_0 = function apply_44(arg0, arg1){
  $and(arg1, new InstructionFormatR_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$14$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$14$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$14$Type', 274);
function InstructionDecoderRv32c$lambda$15$Type(){
}

InstructionDecoderRv32c$lambda$15$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$15$Type.InstructionDecoderRv32c$lambda$15$Type';
defineClass(275, 1, {}, InstructionDecoderRv32c$lambda$15$Type);
_.apply_0 = function apply_45(arg0, arg1){
  $jal_0(arg1, new InstructionFormatUJ_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$15$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$15$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$15$Type', 275);
function InstructionDecoderRv32c$lambda$16$Type(){
}

InstructionDecoderRv32c$lambda$16$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$16$Type.InstructionDecoderRv32c$lambda$16$Type';
defineClass(276, 1, {}, InstructionDecoderRv32c$lambda$16$Type);
_.apply_0 = function apply_46(arg0, arg1){
  $beq_0(arg1, new InstructionFormatSB_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$16$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$16$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$16$Type', 276);
function InstructionDecoderRv32c$lambda$17$Type(){
}

InstructionDecoderRv32c$lambda$17$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$17$Type.InstructionDecoderRv32c$lambda$17$Type';
defineClass(277, 1, {}, InstructionDecoderRv32c$lambda$17$Type);
_.apply_0 = function apply_47(arg0, arg1){
  $bne_0(arg1, new InstructionFormatSB_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$17$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$17$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$17$Type', 277);
function InstructionDecoderRv32c$lambda$18$Type(){
}

InstructionDecoderRv32c$lambda$18$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$18$Type.InstructionDecoderRv32c$lambda$18$Type';
defineClass(278, 1, {}, InstructionDecoderRv32c$lambda$18$Type);
_.apply_0 = function apply_48(arg0, arg1){
  $slli(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$18$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$18$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$18$Type', 278);
function InstructionDecoderRv32c$lambda$19$Type(){
}

InstructionDecoderRv32c$lambda$19$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$19$Type.InstructionDecoderRv32c$lambda$19$Type';
defineClass(279, 1, {}, InstructionDecoderRv32c$lambda$19$Type);
_.apply_0 = function apply_49(arg0, arg1){
  $lw(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$19$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$19$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$19$Type', 279);
function InstructionDecoderRv32c$lambda$2$Type(){
}

InstructionDecoderRv32c$lambda$2$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$2$Type.InstructionDecoderRv32c$lambda$2$Type';
defineClass(262, 1, {}, InstructionDecoderRv32c$lambda$2$Type);
_.apply_0 = function apply_50(arg0, arg1){
  $sw(arg1, new InstructionFormatS_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$2$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$2$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$2$Type', 262);
function InstructionDecoderRv32c$lambda$20$Type(){
}

InstructionDecoderRv32c$lambda$20$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$20$Type.InstructionDecoderRv32c$lambda$20$Type';
defineClass(280, 1, {}, InstructionDecoderRv32c$lambda$20$Type);
_.apply_0 = function apply_51(arg0, arg1){
  $add(arg1, new InstructionFormatR_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$20$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$20$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$20$Type', 280);
function InstructionDecoderRv32c$lambda$21$Type(){
}

InstructionDecoderRv32c$lambda$21$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$21$Type.InstructionDecoderRv32c$lambda$21$Type';
defineClass(281, 1, {}, InstructionDecoderRv32c$lambda$21$Type);
_.apply_0 = function apply_52(arg0, arg1){
  $jalr_0(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$21$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$21$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$21$Type', 281);
function InstructionDecoderRv32c$lambda$22$Type(){
}

InstructionDecoderRv32c$lambda$22$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$22$Type.InstructionDecoderRv32c$lambda$22$Type';
defineClass(282, 1, {}, InstructionDecoderRv32c$lambda$22$Type);
_.apply_0 = function apply_53(arg0, arg1){
  $add(arg1, new InstructionFormatR_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$22$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$22$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$22$Type', 282);
function InstructionDecoderRv32c$lambda$23$Type(){
}

InstructionDecoderRv32c$lambda$23$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$23$Type.InstructionDecoderRv32c$lambda$23$Type';
defineClass(283, 1, {}, InstructionDecoderRv32c$lambda$23$Type);
_.apply_0 = function apply_54(arg0, arg1){
  $jalr_0(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$23$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$23$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$23$Type', 283);
function InstructionDecoderRv32c$lambda$24$Type(){
}

InstructionDecoderRv32c$lambda$24$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$24$Type.InstructionDecoderRv32c$lambda$24$Type';
defineClass(284, 1, {}, InstructionDecoderRv32c$lambda$24$Type);
_.apply_0 = function apply_55(arg0, arg1){
  $sw(arg1, new InstructionFormatS_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$24$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$24$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$24$Type', 284);
function InstructionDecoderRv32c$lambda$3$Type(){
}

InstructionDecoderRv32c$lambda$3$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$3$Type.InstructionDecoderRv32c$lambda$3$Type';
defineClass(263, 1, {}, InstructionDecoderRv32c$lambda$3$Type);
_.apply_0 = function apply_56(arg0, arg1){
  $addi(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$3$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$3$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$3$Type', 263);
function InstructionDecoderRv32c$lambda$4$Type(){
}

InstructionDecoderRv32c$lambda$4$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$4$Type.InstructionDecoderRv32c$lambda$4$Type';
defineClass(264, 1, {}, InstructionDecoderRv32c$lambda$4$Type);
_.apply_0 = function apply_57(arg0, arg1){
  $jal_0(arg1, new InstructionFormatUJ_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$4$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$4$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$4$Type', 264);
function InstructionDecoderRv32c$lambda$5$Type(){
}

InstructionDecoderRv32c$lambda$5$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$5$Type.InstructionDecoderRv32c$lambda$5$Type';
defineClass(265, 1, {}, InstructionDecoderRv32c$lambda$5$Type);
_.apply_0 = function apply_58(arg0, arg1){
  $addi(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$5$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$5$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$5$Type', 265);
function InstructionDecoderRv32c$lambda$6$Type(){
}

InstructionDecoderRv32c$lambda$6$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$6$Type.InstructionDecoderRv32c$lambda$6$Type';
defineClass(266, 1, {}, InstructionDecoderRv32c$lambda$6$Type);
_.apply_0 = function apply_59(arg0, arg1){
  $addi(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$6$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$6$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$6$Type', 266);
function InstructionDecoderRv32c$lambda$7$Type(){
}

InstructionDecoderRv32c$lambda$7$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$7$Type.InstructionDecoderRv32c$lambda$7$Type';
defineClass(267, 1, {}, InstructionDecoderRv32c$lambda$7$Type);
_.apply_0 = function apply_60(arg0, arg1){
  $lui(arg1, new InstructionFormatU_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$7$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$7$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$7$Type', 267);
function InstructionDecoderRv32c$lambda$8$Type(){
}

InstructionDecoderRv32c$lambda$8$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$8$Type.InstructionDecoderRv32c$lambda$8$Type';
defineClass(268, 1, {}, InstructionDecoderRv32c$lambda$8$Type);
_.apply_0 = function apply_61(arg0, arg1){
  $srli(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$8$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$8$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$8$Type', 268);
function InstructionDecoderRv32c$lambda$9$Type(){
}

InstructionDecoderRv32c$lambda$9$Type.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$9$Type.InstructionDecoderRv32c$lambda$9$Type';
defineClass(269, 1, {}, InstructionDecoderRv32c$lambda$9$Type);
_.apply_0 = function apply_62(arg0, arg1){
  $srai(arg1, new InstructionFormatI_1(arg0));
}
;
_.apply_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.InstructionDecoderRv32c$lambda$9$Type.apply';
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_InstructionDecoderRv32c$lambda$9$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c', 'InstructionDecoderRv32c/lambda$9$Type', 269);
function $clinit_RV32C$Opcodes(){
  $clinit_RV32C$Opcodes = emptyMethod;
  CLW = new Instruction$InstructionInfo_0('C.lw', 0, 2);
  CSW = new Instruction$InstructionInfo_0('C.sw', 0, 6);
  CLWSP = new Instruction$InstructionInfo_0('C.lwsp', 2, 2);
  CSWSP = new Instruction$InstructionInfo_0('C.swsp', 2, 6);
  CJ = new Instruction$InstructionInfo_0('C.j', 1, 5);
  CJAL = new Instruction$InstructionInfo_0('C.jal', 1, 1);
  CJR = new Instruction$InstructionInfo_0('C.jr', 2, 8);
  CJALR = new Instruction$InstructionInfo_0('C.jalr', 2, 9);
  CBEQZ = new Instruction$InstructionInfo_0('C.beqz', 1, 6);
  CBNEZ = new Instruction$InstructionInfo_0('C.bnez', 1, 7);
  CLI = new Instruction$InstructionInfo_0('C.li', 1, 2);
  CLUI = new Instruction$InstructionInfo_0('C.lui', 1, 3);
  CADDI = new Instruction$InstructionInfo_0('C.addi', 1, 0);
  CADDI16SP = new Instruction$InstructionInfo_0('C.addi16sp', 1, 3);
  CADDI4SPN = new Instruction$InstructionInfo_0('C.addi4spn', 0, 0);
  CSLLI = new Instruction$InstructionInfo_0('C.slli', 2, 0);
  CSRLI = new Instruction$InstructionInfo_1('C.srli', 1, 4, 0);
  CSRAI = new Instruction$InstructionInfo_1('C.srai', 1, 4, 1);
  CANDI = new Instruction$InstructionInfo_1('C.andi', 1, 4, 2);
  CMV = new Instruction$InstructionInfo_0('C.mv', 2, 8);
  CADD = new Instruction$InstructionInfo_0('C.add', 2, 9);
  CAND = new Instruction$InstructionInfo_1('C.and', 1, 35, 3);
  COR = new Instruction$InstructionInfo_1('C.or', 1, 35, 2);
  CXOR = new Instruction$InstructionInfo_1('C.xor', 1, 35, 1);
  CSUB = new Instruction$InstructionInfo_1('C.sub', 1, 35, 0);
  new Instruction$InstructionInfo_0('C.nop', 1, 0);
}

$clinit_RV32C$Opcodes.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.RV32C$Opcodes.$clinit';
var CADD, CADDI, CADDI16SP, CADDI4SPN, CAND, CANDI, CBEQZ, CBNEZ, CJ, CJAL, CJALR, CJR, CLI, CLUI, CLW, CLWSP, CMV, COR, CSLLI, CSRAI, CSRLI, CSUB, CSW, CSWSP, CXOR;
function CInstructionFormatBase(raw){
  this.raw = raw;
}

CInstructionFormatBase.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatBase.CInstructionFormatBase';
defineClass(34, 1, {}, CInstructionFormatBase);
_.raw = 0;
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_instruction_1formats_CInstructionFormatBase_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats', 'CInstructionFormatBase', 34);
function $getBranchImmediate(this$static){
  var bit21, bit43, bit5, bit76, bit8;
  bit5 = this$static.raw >> 2 & 1;
  bit21 = this$static.raw >> 3 & 3;
  bit76 = this$static.raw >> 5 & 3;
  bit43 = this$static.raw >> 10 & 3;
  bit8 = this$static.raw >> 12 & 1;
  return (bit21 << 1 | bit43 << 3 | bit5 << 5 | bit76 << 6 | bit8 << 8) << 24 >> 24;
}

$getBranchImmediate.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCB.$getBranchImmediate';
function $getImmediate_0(this$static){
  var bit40, bit5;
  bit40 = this$static.raw >> 2 & 31;
  bit5 = this$static.raw >> 12 & 1;
  return (bit40 | bit5 << 5) << 24 >> 24;
}

$getImmediate_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCB.$getImmediate';
function CInstructionFormatCB(base){
  CInstructionFormatCB_0.call(this, base.raw);
}

CInstructionFormatCB.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCB.CInstructionFormatCB';
function CInstructionFormatCB_0(raw){
  CInstructionFormatBase.call(this, raw);
}

CInstructionFormatCB_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCB.CInstructionFormatCB';
defineClass(128, 34, {}, CInstructionFormatCB);
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_instruction_1formats_CInstructionFormatCB_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats', 'CInstructionFormatCB', 128);
function CInstructionFormatCI(base){
  CInstructionFormatCI_0.call(this, base.raw);
}

CInstructionFormatCI.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCI.CInstructionFormatCI';
function CInstructionFormatCI_0(raw){
  CInstructionFormatBase.call(this, raw);
}

CInstructionFormatCI_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCI.CInstructionFormatCI';
defineClass(126, 34, {}, CInstructionFormatCI);
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_instruction_1formats_CInstructionFormatCI_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats', 'CInstructionFormatCI', 126);
function CInstructionFormatCIW(base){
  CInstructionFormatCIW_0.call(this, base.raw);
}

CInstructionFormatCIW.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCIW.CInstructionFormatCIW';
function CInstructionFormatCIW_0(raw){
  CInstructionFormatBase.call(this, raw);
}

CInstructionFormatCIW_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCIW.CInstructionFormatCIW';
defineClass(129, 34, {}, CInstructionFormatCIW);
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_instruction_1formats_CInstructionFormatCIW_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats', 'CInstructionFormatCIW', 129);
function $getImmediate_1(this$static){
  var bit10, bit11, bit31, bit4, bit5, bit6, bit7, bit98, imm;
  bit5 = this$static.raw >> 2 & 1;
  bit31 = this$static.raw >> 3 & 7;
  bit7 = this$static.raw >> 6 & 1;
  bit6 = this$static.raw >> 7 & 1;
  bit10 = this$static.raw >> 8 & 1;
  bit98 = this$static.raw >> 9 & 3;
  bit4 = this$static.raw >> 11 & 1;
  bit11 = this$static.raw >> 12 & 1;
  imm = (bit31 | bit4 << 3 | bit5 << 4 | bit6 << 5 | bit7 << 6 | bit98 << 7 | bit10 << 9 | bit11 << 10) << 1;
  return ((imm >> 11 & 1) == 1?imm | 61440:imm) << 16 >> 16;
}

$getImmediate_1.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCJ.$getImmediate';
function CInstructionFormatCJ(base){
  CInstructionFormatCJ_0.call(this, base.raw);
}

CInstructionFormatCJ.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCJ.CInstructionFormatCJ';
function CInstructionFormatCJ_0(raw){
  CInstructionFormatBase.call(this, raw);
}

CInstructionFormatCJ_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCJ.CInstructionFormatCJ';
defineClass(131, 34, {}, CInstructionFormatCJ);
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_instruction_1formats_CInstructionFormatCJ_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats', 'CInstructionFormatCJ', 131);
function $getImmediate_2(this$static){
  var bit2, bit53, bit6;
  bit6 = this$static.raw >> 5 & 1;
  bit2 = this$static.raw >> 6 & 1;
  bit53 = this$static.raw >> 10 & 7;
  return (bit2 | bit53 << 1 | bit6 << 4) << 2 << 24 >> 24;
}

$getImmediate_2.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCL.$getImmediate';
function CInstructionFormatCL(base){
  CInstructionFormatCL_0.call(this, base.raw);
}

CInstructionFormatCL.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCL.CInstructionFormatCL';
function CInstructionFormatCL_0(raw){
  CInstructionFormatBase.call(this, raw);
}

CInstructionFormatCL_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCL.CInstructionFormatCL';
defineClass(130, 34, {}, CInstructionFormatCL);
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_instruction_1formats_CInstructionFormatCL_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats', 'CInstructionFormatCL', 130);
function CInstructionFormatCR(base){
  CInstructionFormatCR_0.call(this, base.raw);
}

CInstructionFormatCR.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCR.CInstructionFormatCR';
function CInstructionFormatCR_0(raw){
  CInstructionFormatBase.call(this, raw);
}

CInstructionFormatCR_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCR.CInstructionFormatCR';
defineClass(132, 34, {}, CInstructionFormatCR);
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_instruction_1formats_CInstructionFormatCR_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats', 'CInstructionFormatCR', 132);
function $getImmediate_3(this$static){
  var bit2, bit53, bit6;
  bit6 = this$static.raw >> 5 & 1;
  bit2 = this$static.raw >> 6 & 1;
  bit53 = this$static.raw >> 10 & 7;
  return (bit2 | bit53 << 1 | bit6 << 4) << 2 << 24 >> 24;
}

$getImmediate_3.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCS.$getImmediate';
function CInstructionFormatCS(base){
  CInstructionFormatCS_0.call(this, base.raw);
}

CInstructionFormatCS.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCS.CInstructionFormatCS';
function CInstructionFormatCS_0(raw){
  CInstructionFormatBase.call(this, raw);
}

CInstructionFormatCS_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCS.CInstructionFormatCS';
defineClass(127, 34, {}, CInstructionFormatCS);
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_instruction_1formats_CInstructionFormatCS_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats', 'CInstructionFormatCS', 127);
function CInstructionFormatCSS(base){
  CInstructionFormatCSS_0.call(this, base.raw);
}

CInstructionFormatCSS.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCSS.CInstructionFormatCSS';
function CInstructionFormatCSS_0(raw){
  CInstructionFormatBase.call(this, raw);
}

CInstructionFormatCSS_0.displayName = 'il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCSS.CInstructionFormatCSS';
defineClass(133, 34, {}, CInstructionFormatCSS);
var Lil_co_codeguru_corewars_1riscv_cpu_riscv_rv32c_instruction_1formats_CInstructionFormatCSS_2_classLit = createForClass('il.co.codeguru.corewars_riscv.cpu.riscv.rv32c.instruction_formats', 'CInstructionFormatCSS', 133);
function $$init_4(this$static){
}

$$init_4.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JComponent.$$init';
function $addActionListener(this$static, listener){
  this$static.m_listener = listener;
}

$addActionListener.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JComponent.$addActionListener';
function $setEnabled(this$static, v){
  if (this$static.m_element == null)
    return;
  this$static.m_enabled = v;
  this$static.m_element.setAttribute('disabled', v?'false':'true');
}

$setEnabled.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JComponent.$setEnabled';
function $setText(this$static, v){
  if (this$static.m_element == null)
    return;
  this$static.m_element.innerHTML = v;
}

$setText.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JComponent.$setText';
function JComponent(){
}

JComponent.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JComponent.JComponent';
function JComponent_0(id_0){
  this.m_element = ($clinit_DomGlobal() , document_0).getElementById(id_0);
  if (this.m_element == null) {
    console.log('did not find element ' + id_0);
    return;
  }
   else {
    console.log('found element ' + id_0);
  }
}

JComponent_0.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JComponent.JComponent';
defineClass(23, 1, {});
_.m_enabled = true;
_.m_listener = null;
var Lil_co_codeguru_corewars_1riscv_gui_widgets_JComponent_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'JComponent', 23);
function $$init_5(this$static){
  this$static.m_contentVisibleRect = new Canvas$Rect;
}

$$init_5.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.$$init';
function $clear(this$static){
  var i, j;
  this$static.data_0 == null && (this$static.data_0 = initMultidimensionalArray(B_classLit, [$intern_2, $intern_16], [50, 11], 15, [256, 256], 2));
  this$static.pointer == null && (this$static.pointer = initMultidimensionalArray(B_classLit, [$intern_2, $intern_16], [50, 11], 15, [256, 256], 2));
  this$static.values_0 == null && (this$static.values_0 = initMultidimensionalArray(B_classLit, [$intern_2, $intern_16], [50, 11], 15, [256, 256], 2));
  for (i = 0; i < 256; i++)
    for (j = 0; j < 256; j++) {
      this$static.data_0[i][j] = -1;
      this$static.pointer[i][j] = -1;
    }
  this$static.ctx.setTransform(1, 0, 0, 1, 0, 0);
  this$static.ctx.clip(this$static.m_memclip);
  $wnd.js_resetZoom();
}

$clear.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.$clear';
function $deletePointers(this$static){
  var i, j;
  for (i = 0; i < 256; i++)
    for (j = 0; j < 256; j++) {
      if (this$static.pointer[i][j] != -1) {
        this$static.pointer[i][j] = -1;
        $paintPixel_0(this$static, i, j, this$static.data_0[i][j], this$static.values_0[i][j]);
      }
    }
}

$deletePointers.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.$deletePointers';
function $exportMethods(this$static){
  var that = this$static;
  $wnd.j_warCanvas_repaint = $entry(function(){
    that.j_warCanvas_repaint_0();
  }
  );
  $wnd.j_warCanvas_setTransform = $entry(function(a, b, c, d){
    that.j_warCanvas_setTransform_0(a, b, c, d);
  }
  );
  $wnd.j_warCanvas_click = $entry(function(a, b){
    that.j_warCanvas_click_0(a, b);
  }
  );
  $wnd.j_warCanvas_showCurrent = $entry(function(a, b){
    that.j_warCanvas_showCurrent_0(a, b);
  }
  );
}

$exportMethods.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.$exportMethods';
function $initStartWar(this$static, war){
  var addr, x_0, y_0;
  this$static.m_mem = war.m_core;
  this$static.m_currentWar = war;
  this$static.m_indebug = true;
  addr = 0;
  for (y_0 = 0; y_0 < 256; y_0++) {
    for (x_0 = 0; x_0 < 256; x_0++) {
      this$static.values_0[x_0][y_0] = $loadByte(this$static.m_mem, addr);
      addr += 1;
    }
  }
}

$initStartWar.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.$initStartWar';
function $j_warCanvas_repaint(this$static){
  $paint(this$static);
}

$j_warCanvas_repaint.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.$j_warCanvas_repaint';
function $lambda$0(this$static){
  if (!this$static.m_showContent)
    return;
  $paintCursor(this$static, this$static.m_blinkOn);
  this$static.m_blinkOn = !this$static.m_blinkOn;
}

$lambda$0.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.$lambda$0';
function $lambda$1(this$static){
  console.log('BLUR');
  this$static.m_intervalId != null && $wnd.window.clearInterval($doubleValue(this$static.m_intervalId));
  this$static.m_showContent && $paintCursor(this$static, false);
  this$static.m_intervalId = null;
}

$lambda$1.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.$lambda$1';
function $lambda$2(this$static, event_0){
  var c, ev, ix, iy, key, v;
  if (!this$static.m_showContent)
    return;
  key = castToNative(event_0, $wnd.KeyboardEvent).key;
  event_0.preventDefault();
  if (key == 'ArrowUp')
    $moveCursor(this$static, 0, -1);
  else if (key == 'ArrowDown')
    $moveCursor(this$static, 0, 1);
  else if (key == 'ArrowRight')
    $moveCursor(this$static, 0.5, 0);
  else if (key == 'ArrowLeft' || key == 'Backspace')
    $moveCursor(this$static, -0.5, 0);
  else if (!!this$static.m_mem && this$static.m_indebug) {
    c = (checkCriticalStringElementIndex(0, key.length) , key.charCodeAt(0));
    v = -1;
    c >= 48 && c <= 57?(v = c - 48):c >= 97 && c <= 102?(v = c - 97 + 10):c >= 65 && c <= 65 && (v = c - 65 + 10);
    if (v != -1) {
      ix = round_int(this$static.m_cursorX);
      iy = round_int(this$static.m_cursorY);
      ev = this$static.values_0[ix][iy];
      this$static.m_cursorX % 1 == 0?(ev = ev & 15 | v << 4):(ev = ev & 240 | v);
      this$static.values_0[ix][iy] = ev << 24 >> 24;
      $storeByte(this$static.m_mem, ix + iy * 256 << 16 >> 16, ev << 24 >> 24);
      $moveCursor(this$static, 0.5, 0);
    }
  }
}

$lambda$2.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.$lambda$2';
function $moveCursor(this$static, dx, dy){
  $paintCursor(this$static, false);
  this$static.m_cursorX = $wnd.Math.max($wnd.Math.min(this$static.m_cursorX + dx, 255.5), 0);
  this$static.m_cursorY = $wnd.Math.max($wnd.Math.min(this$static.m_cursorY + dy, 255), 0);
  while (this$static.m_cursorY < this$static.m_contentVisibleRect.sy + 1 && this$static.m_cursorY > 0) {
    this$static.m_zrY = this$static.m_zrY + $intern_17 * this$static.m_zrHscale * 3;
    js_updateFromKeyScroll(this$static.m_zrX, this$static.m_zrY);
  }
  while (this$static.m_cursorY > this$static.m_contentVisibleRect.ey - 1 && this$static.m_cursorY <= 255) {
    this$static.m_zrY = this$static.m_zrY - $intern_17 * this$static.m_zrHscale * 3;
    js_updateFromKeyScroll(this$static.m_zrX, this$static.m_zrY);
  }
  while (this$static.m_cursorX < this$static.m_contentVisibleRect.sx + 1 && this$static.m_cursorX > 0) {
    this$static.m_zrX = this$static.m_zrX + $intern_17 * this$static.m_zrVscale * 3;
    js_updateFromKeyScroll(this$static.m_zrX, this$static.m_zrY);
  }
  while (this$static.m_cursorX > this$static.m_contentVisibleRect.ex - 0.5 && this$static.m_cursorX <= 255.5) {
    this$static.m_zrX = this$static.m_zrX - $intern_17 * this$static.m_zrVscale * 3;
    js_updateFromKeyScroll(this$static.m_zrX, this$static.m_zrY);
  }
  $paint(this$static);
}

$moveCursor.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.$moveCursor';
function $paint(this$static){
  var col, rc, rx, ry, scaledDot, step, textVisible, x_0, x0, xcoord, y_0, y0, ycoord;
  this$static.ctx.fillStyle = ($clinit_Color() , WHITE);
  this$static.ctx.fillRect(0, 0, 833, 833);
  this$static.ctx.fillStyle = BLACK;
  this$static.ctx.fillRect(0, 0, 768, 768);
  this$static.m_showContent && (this$static.ctx.font = '2.3px monospace');
  for (y0 = 0; y0 < 256; y0++) {
    for (x0 = 0; x0 < 256; x0++) {
      textVisible = this$static.m_showContent && $isInside(this$static.m_contentVisibleRect, x0, y0);
      col = $paintMemCellBack(this$static, x0, y0);
      textVisible && $paintTextValue(this$static, x0, y0, col);
    }
  }
  this$static.m_showContent && this$static.m_intervalId != null && $paintCursor(this$static, true);
  this$static.ctx.restore();
  this$static.ctx.save();
  this$static.ctx.fillStyle = '#ffffff';
  this$static.ctx.fillRect(0, 0, 45, 833);
  this$static.ctx.fillRect(0, 788, 833, 45);
  this$static.ctx.font = '14px monospace';
  this$static.ctx.textBaseline = 'middle';
  step = 32;
  rc = round_int(this$static.m_zrVscale);
  rc >= 2 && rc < 4?(step = step / 2 | 0):rc >= 4 && rc <= 8?(step = step / 4 | 0):rc >= 8 && rc <= 16?(step = step / 8 | 0):rc >= 16 && (step = step / 16 | 0);
  this$static.ctx.fillStyle = '#888888';
  this$static.ctx.clip(this$static.m_coordYclip);
  for (y_0 = 0; y_0 <= 256; y_0 += step) {
    ry = $wnd.Math.min(y_0, 255);
    scaledDot = 3 * this$static.m_zrVscale;
    ycoord = 20 + this$static.m_zrY + ry * scaledDot;
    if (ycoord + scaledDot < 20 || ycoord > 788)
      continue;
    this$static.ctx.fillText(hex4(ry * 256), 1, ycoord + scaledDot / 2);
    this$static.ctx.fillRect(38, ycoord, 6, scaledDot);
  }
  this$static.ctx.restore();
  this$static.ctx.save();
  this$static.ctx.clip(this$static.m_coordXclip);
  this$static.ctx.font = '14px monospace';
  this$static.ctx.fillStyle = '#888888';
  for (x_0 = 0; x_0 <= 256; x_0 += step) {
    rx = $wnd.Math.min(x_0, 255);
    scaledDot = 3 * this$static.m_zrHscale;
    xcoord = 45 + this$static.m_zrX + rx * scaledDot;
    if (xcoord + scaledDot < 45 || xcoord > 813)
      continue;
    this$static.ctx.fillText(hex2(rx), xcoord - 7 + scaledDot / 2, 809);
    this$static.ctx.fillRect(xcoord, 789, scaledDot, 6);
  }
  this$static.ctx.restore();
  this$static.ctx.save();
  this$static.ctx.clip(this$static.m_memclip);
  this$static.ctx.setTransform(this$static.m_zrHscale, 0, 0, this$static.m_zrVscale, this$static.m_zrX + 45, this$static.m_zrY + 20);
  this$static.ctx.font = '2.3px monospace';
}

$paint.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.$paint';
function $paintCursor(this$static, isOn){
  var col, rx, x_0, y_0;
  x_0 = round_int(this$static.m_cursorX);
  y_0 = round_int(this$static.m_cursorY);
  if (isOn) {
    col = $paintMemCellBack(this$static, x_0, y_0);
    rx = this$static.m_cursorX;
    rx % 1 == 0 && (rx += 0.08);
    $paintMemCellBack(this$static, round_int(this$static.m_cursorX), round_int(this$static.m_cursorY));
    this$static.ctx.fillStyle = '#eeeeee';
    this$static.ctx.fillRect(rx * 3, this$static.m_cursorY * 3 + 0.32, 1.25, 2.2);
    $paintTextValue(this$static, x_0, y_0, col);
  }
   else {
    col = $paintMemCellBack(this$static, x_0, y_0);
    if (!col) {
      this$static.ctx.fillStyle = '#000000';
      this$static.ctx.fillRect(x_0 * 3, y_0 * 3, 3, 3);
    }
    $paintTextValue(this$static, x_0, y_0, col);
  }
}

$paintCursor.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.$paintCursor';
function $paintMemCellBack(this$static, x_0, y_0){
  var cellPtr, cellVal, col;
  cellPtr = this$static.pointer[x_0][y_0];
  col = null;
  if (cellPtr != -1) {
    col = $getColor(($clinit_ColorHolder() , $clinit_ColorHolder() , ins), cellPtr, true);
  }
   else {
    cellVal = this$static.data_0[x_0][y_0];
    cellVal != -1 && (col = $getColor(($clinit_ColorHolder() , $clinit_ColorHolder() , ins), cellVal, false));
  }
  if (col) {
    this$static.ctx.fillStyle = $toString_1(col);
    this$static.ctx.fillRect(x_0 * 3, y_0 * 3, 3, 3);
  }
  return col;
}

$paintMemCellBack.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.$paintMemCellBack';
function $paintPixel(this$static, number, color_0, value_0){
  $paintPixel_0(this$static, number % 256, number / 256 | 0, color_0, value_0);
}

$paintPixel.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.$paintPixel';
function $paintPixel_0(this$static, x_0, y_0, colorByte, value_0){
  var color_0;
  this$static.values_0[x_0][y_0] = value_0;
  color_0 = null;
  colorByte != -1?(this$static.data_0[x_0][y_0] = colorByte):(colorByte = this$static.data_0[x_0][y_0]);
  if (colorByte != -1) {
    color_0 = $getColor(($clinit_ColorHolder() , $clinit_ColorHolder() , ins), colorByte, false);
    this$static.ctx.fillStyle = $toString_1(color_0);
  }
   else {
    this$static.ctx.fillStyle = '#000000';
  }
  this$static.ctx.fillRect(x_0 * 3, y_0 * 3, 3, 3);
  this$static.m_showContent && $paintTextValue(this$static, x_0, y_0, color_0);
}

$paintPixel_0.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.$paintPixel';
function $paintPointer(this$static, number, colorByte){
  var color_0, x_0, y_0;
  x_0 = number % 256;
  y_0 = number / 256 | 0;
  color_0 = $getColor(($clinit_ColorHolder() , $clinit_ColorHolder() , ins), colorByte, true);
  this$static.pointer[x_0][y_0] = colorByte;
  this$static.ctx.fillStyle = $toString_1(color_0);
  this$static.ctx.fillRect(x_0 * 3, y_0 * 3, 3, 3);
  this$static.m_showContent && $paintTextValue(this$static, x_0, y_0, color_0);
}

$paintPointer.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.$paintPointer';
function $paintTextValue(this$static, x_0, y_0, backCol){
  var textCol;
  backCol?backCol.m_isDark?(textCol = '#ffffff'):(textCol = '#000000'):(textCol = '#666666');
  this$static.ctx.fillStyle = textCol;
  this$static.ctx.fillText(hex2(this$static.values_0[x_0][y_0] & 255), x_0 * 3 + 0.2, y_0 * 3 + 2.2);
}

$paintTextValue.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.$paintTextValue';
function Canvas_0(){
  var d, t;
  JComponent_0.call(this, 'warCanvas');
  this.m_contentVisibleRect = new Canvas$Rect;
  this.ctx = castToNative(castToNative(this.m_element, $wnd.HTMLCanvasElement).getContext('2d'), $wnd.CanvasRenderingContext2D);
  d = new Dimension(833, 833);
  castToNative(this.m_element, $wnd.HTMLCanvasElement).width = d.width_0;
  castToNative(this.m_element, $wnd.HTMLCanvasElement).height = d.height_0;
  this.ctx.save();
  this.m_memclip = new $wnd.Path2D;
  this.m_memclip.moveTo(45, 20);
  this.m_memclip.lineTo(813, 20);
  this.m_memclip.lineTo(813, 788);
  this.m_memclip.lineTo(45, 788);
  this.m_coordYclip = new $wnd.Path2D;
  t = new Canvas$Turtle(this.m_coordYclip);
  $moveTo(t, 0, 14);
  t.x_0 += 38;
  t.p.lineTo(t.x_0, t.y_0);
  t.y_0 += 6;
  t.p.lineTo(t.x_0, t.y_0);
  t.x_0 += 7;
  t.p.lineTo(t.x_0, t.y_0);
  t.y_0 += 768;
  t.p.lineTo(t.x_0, t.y_0);
  t.x_0 -= 7;
  t.p.lineTo(t.x_0, t.y_0);
  t.y_0 += 6;
  t.p.lineTo(t.x_0, t.y_0);
  t.x_0 -= 38;
  t.p.lineTo(t.x_0, t.y_0);
  this.m_coordXclip = new $wnd.Path2D;
  t.p = this.m_coordXclip;
  $moveTo(t, 39, 833);
  t.y_0 -= 38;
  t.p.lineTo(t.x_0, t.y_0);
  t.x_0 += 6;
  t.p.lineTo(t.x_0, t.y_0);
  t.y_0 -= 7;
  t.p.lineTo(t.x_0, t.y_0);
  t.x_0 += 768;
  t.p.lineTo(t.x_0, t.y_0);
  t.y_0 += 7;
  t.p.lineTo(t.x_0, t.y_0);
  t.x_0 += 6;
  t.p.lineTo(t.x_0, t.y_0);
  t.y_0 += 38;
  t.p.lineTo(t.x_0, t.y_0);
  this.ctx.clip(this.m_memclip);
  this.m_dummyInput = castToNative(($clinit_DomGlobal() , document_0).getElementById('warCanvasDummyInput'), $wnd.HTMLInputElement);
  this.m_hoverCellInfo = castToNative(document_0.getElementById('hoverCellInfo'), $wnd.HTMLElement);
  $exportMethods(this);
  $wnd.WC_MARGIN_TOP = 20;
  $wnd.WC_MARGIN_LEFT = 45;
  $wnd.js_initZoom();
  $clear(this);
  this.m_dummyInput.addEventListener('blur', new Canvas$lambda$1$Type(this));
  this.m_dummyInput.addEventListener('keydown', new Canvas$lambda$2$Type(this));
}

Canvas_0.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.Canvas';
function initZoom(marginTop, marginLeft){
  $wnd.WC_MARGIN_TOP = marginTop;
  $wnd.WC_MARGIN_LEFT = marginLeft;
  $wnd.js_initZoom();
}

initZoom.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.initZoom';
function js_updateFromKeyScroll(nx, ny){
  $wnd.js_updateFromKeyScroll(nx, ny);
}

js_updateFromKeyScroll.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.js_updateFromKeyScroll';
function resetZoom(){
  $wnd.js_resetZoom();
}

resetZoom.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.resetZoom';
defineClass(201, 23, {}, Canvas_0);
_.j_warCanvas_click_0 = function j_warCanvas_click(x_0, y_0){
  var mx, my;
  if (!this.m_showContent || x_0 < 0 || y_0 < 0 || x_0 >= 768 || y_0 >= 768)
    return;
  if (!this.m_indebug)
    return;
  mx = round_int((x_0 - this.m_zrX) / 3 / this.m_zrHscale * 2) / 2;
  my = round_int((y_0 - this.m_zrY) / 3 / this.m_zrVscale);
  $paintCursor(this, false);
  this.m_cursorX = mx;
  this.m_cursorY = my;
  this.m_dummyInput.focus();
  $paintCursor(this, true);
  this.m_blinkOn = false;
  this.m_intervalId != null && $wnd.window.clearInterval($doubleValue(this.m_intervalId));
  this.m_intervalId = ($clinit_DomGlobal() , $wnd.window.setInterval(makeLambdaFunction(Canvas$lambda$0$Type.prototype.onInvoke, Canvas$lambda$0$Type, [this]), 600));
}
;
_.j_warCanvas_click_0.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.j_warCanvas_click';
_.j_warCanvas_repaint_0 = function j_warCanvas_repaint(){
  $paint(this);
}
;
_.j_warCanvas_repaint_0.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.j_warCanvas_repaint';
_.j_warCanvas_setTransform_0 = function j_warCanvas_setTransform(hscale, vscale, x_0, y_0){
  this.m_zrHscale = hscale;
  this.m_zrVscale = vscale;
  this.m_zrX = x_0;
  this.m_zrY = y_0;
  this.ctx.setTransform(this.m_zrHscale, 0, 0, this.m_zrVscale, this.m_zrX + 45, this.m_zrY + 20);
  this.m_showContent = this.m_zrHscale > 4;
  this.m_contentVisibleRect.sx = -this.m_zrX / 3 / this.m_zrHscale - 1;
  this.m_contentVisibleRect.sy = -this.m_zrY / 3 / this.m_zrVscale - 1;
  this.m_contentVisibleRect.ex = this.m_contentVisibleRect.sx + 256 / this.m_zrHscale + 1;
  this.m_contentVisibleRect.ey = this.m_contentVisibleRect.sy + 256 / this.m_zrVscale + 1;
}
;
_.j_warCanvas_setTransform_0.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.j_warCanvas_setTransform';
_.j_warCanvas_showCurrent_0 = function j_warCanvas_showCurrent(x_0, y_0){
  var addr, bef, i, mx, my, player, sb, v;
  if (!this.m_mem || x_0 < 0 || y_0 < 0 || x_0 >= 768 || y_0 >= 768) {
    this.m_hoverCellInfo.style.display = 'none';
    return;
  }
  mx = round_int((x_0 - this.m_zrX) / 3 / this.m_zrHscale);
  my = round_int((y_0 - this.m_zrY) / 3 / this.m_zrVscale);
  addr = mx + my * 256 & $intern_0;
  v = $loadByte(this.m_mem, addr) & 255;
  sb = new StringBuilder;
  sb.string += '0x';
  $append_5(sb, hex4(addr));
  sb.string += ': 0x';
  $append_5(sb, hex2(v));
  sb.string += ' (';
  bef = sb.string.length;
  sb.string += v;
  sb.string += ')';
  for (i = sb.string.length - bef; i < 5; ++i)
    sb.string += '\xA0';
  player = this.data_0[mx][my];
  if (player != -1) {
    sb.string += '  Player: ';
    $append_5(sb, $getWarrior(this.m_currentWar, player).m_name.substr(0, 20));
  }
  this.m_hoverCellInfo.style.display = '';
  setInnerText(this.m_hoverCellInfo, sb.string);
}
;
_.j_warCanvas_showCurrent_0.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas.j_warCanvas_showCurrent';
_.m_blinkOn = false;
_.m_currentWar = null;
_.m_cursorX = 0;
_.m_cursorY = 0;
_.m_indebug = false;
_.m_mem = null;
_.m_showContent = false;
_.m_zrHscale = 0;
_.m_zrVscale = 0;
_.m_zrX = 0;
_.m_zrY = 0;
var Lil_co_codeguru_corewars_1riscv_gui_Canvas_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'Canvas', 201);
function $isInside(this$static, x_0, y_0){
  return x_0 > this$static.sx && x_0 < this$static.ex && y_0 > this$static.sy && y_0 < this$static.ey;
}

$isInside.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas$Rect.$isInside';
function Canvas$Rect(){
}

Canvas$Rect.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas$Rect.Canvas$Rect';
defineClass(203, 1, {}, Canvas$Rect);
_.ex = 0;
_.ey = 0;
_.sx = 0;
_.sy = 0;
var Lil_co_codeguru_corewars_1riscv_gui_Canvas$Rect_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'Canvas/Rect', 203);
function $moveTo(this$static, _x, _y){
  this$static.x_0 = _x;
  this$static.y_0 = _y;
  this$static.p.moveTo(this$static.x_0, this$static.y_0);
}

$moveTo.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas$Turtle.$moveTo';
function Canvas$Turtle(_p){
  this.p = _p;
}

Canvas$Turtle.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas$Turtle.Canvas$Turtle';
defineClass(202, 1, {}, Canvas$Turtle);
_.x_0 = 0;
_.y_0 = 0;
var Lil_co_codeguru_corewars_1riscv_gui_Canvas$Turtle_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'Canvas/Turtle', 202);
function $getClass_1(){
  return Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

$getClass_1.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas$lambda$0$Type.$getClass';
function Canvas$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

Canvas$lambda$0$Type.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas$lambda$0$Type.Canvas$lambda$0$Type';
defineClass(362, $wnd.Function, {}, Canvas$lambda$0$Type);
_.onInvoke = function onInvoke(arg0){
  $lambda$0(this.$$outer_0);
}
;
_.onInvoke.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas$lambda$0$Type.onInvoke';
function Canvas$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

Canvas$lambda$1$Type.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas$lambda$1$Type.Canvas$lambda$1$Type';
defineClass(204, 1, {}, Canvas$lambda$1$Type);
_.handleEvent = function handleEvent(arg0){
  $lambda$1(this.$$outer_0);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas$lambda$1$Type.handleEvent';
var Lil_co_codeguru_corewars_1riscv_gui_Canvas$lambda$1$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'Canvas/lambda$1$Type', 204);
function Canvas$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

Canvas$lambda$2$Type.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas$lambda$2$Type.Canvas$lambda$2$Type';
defineClass(205, 1, {}, Canvas$lambda$2$Type);
_.handleEvent = function handleEvent_0(arg0){
  $lambda$2(this.$$outer_0, arg0);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars_riscv.gui.Canvas$lambda$2$Type.handleEvent';
var Lil_co_codeguru_corewars_1riscv_gui_Canvas$lambda$2$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'Canvas/lambda$2$Type', 205);
function $clinit_ColorHolder(){
  $clinit_ColorHolder = emptyMethod;
  ins = new ColorHolder;
}

$clinit_ColorHolder.displayName = 'il.co.codeguru.corewars_riscv.gui.ColorHolder.$clinit';
function $getColor(this$static, pos, darker){
  return darker?this$static.darkColors[pos]:this$static.colors[pos];
}

$getColor.displayName = 'il.co.codeguru.corewars_riscv.gui.ColorHolder.$getColor';
function ColorHolder(){
  var i, i0, x_0;
  this.colors = initUnidimensionalArray(Lil_co_codeguru_corewars_1riscv_gui_widgets_Color_2_classLit, $intern_2, 47, 360, 0, 1);
  x_0 = 0;
  for (i0 = 0; i0 < 360; i0++) {
    this.colors[i0] = ($clinit_Color() , HSBtoRGB(x_0 % 1));
    x_0 += 0.6180340051651001;
  }
  this.darkColors = initUnidimensionalArray(Lil_co_codeguru_corewars_1riscv_gui_widgets_Color_2_classLit, $intern_2, 47, this.colors.length, 0, 1);
  for (i = 0; i < this.colors.length; i++) {
    this.darkColors[i] = $darker(this.colors[i]);
  }
}

ColorHolder.displayName = 'il.co.codeguru.corewars_riscv.gui.ColorHolder.ColorHolder';
defineClass(199, 1, {}, ColorHolder);
var ins;
var Lil_co_codeguru_corewars_1riscv_gui_ColorHolder_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'ColorHolder', 199);
function $addToValue(this$static, pos, subIndex, value_0){
  var i, sb;
  this$static.columns[pos].values_0[0] += value_0;
  this$static.columns[pos].values_0[subIndex + 1] += value_0;
  if (this$static.columns[pos].values_0[0] > this$static.maxValue) {
    this$static.maxValue = this$static.columns[pos].values_0[0];
    this$static.maxValue * this$static.reduceFactor > castToNative(this$static.m_element, $wnd.HTMLCanvasElement).height - 15 - 30 && (this$static.reduceFactor *= 0.5);
  }
  sb = new StringBuilder;
  for (i = 0; i < this$static.columns.length; ++i) {
    $append_1(sb, this$static.columns[i].values_0[0]);
    sb.string += '  ';
  }
  log_0('Score add ' + ('' + pos) + ' ' + ('' + subIndex) + ' ' + ('' + value_0) + '  totals= ' + sb.string);
  $paintComponent(this$static);
}

$addToValue.displayName = 'il.co.codeguru.corewars_riscv.gui.ColumnGraph.$addToValue';
function $clear_0(this$static, names){
  var c1, c2, colorHolder, i;
  this$static.maxValue = 0;
  this$static.reduceFactor = 5;
  colorHolder = ($clinit_ColorHolder() , $clinit_ColorHolder() , ins);
  this$static.columns = initUnidimensionalArray(Lil_co_codeguru_corewars_1riscv_gui_ColumnGraph$PlayerColumn_2_classLit, $intern_2, 94, names.length, 0, 1);
  for (i = 0; i < names.length; ++i) {
    c1 = colorHolder.colors[i];
    c2 = colorHolder.darkColors[i];
    this$static.columns[i] = new ColumnGraph$PlayerColumn(names[i], $toString_1(c1), $toString_1(c2));
  }
}

$clear_0.displayName = 'il.co.codeguru.corewars_riscv.gui.ColumnGraph.$clear';
function $paintColumn(this$static, col, width_0, startHeight){
  var height1, height2;
  this$static.ctx.fillStyle = this$static.columns[col].col1;
  height1 = round_int(this$static.reduceFactor * this$static.columns[col].values_0[1]);
  this$static.ctx.fillRect(col * width_0, startHeight - height1, width_0 - 5, height1);
  this$static.ctx.fillStyle = this$static.columns[col].col2;
  height2 = round_int(this$static.reduceFactor * this$static.columns[col].values_0[2]);
  this$static.ctx.fillRect(col * width_0, startHeight - height1 - height2, width_0 - 5, height2);
  this$static.ctx.fillText('' + this$static.columns[col].values_0[0], col * width_0 + 5, startHeight - height1 - height2 - 5);
}

$paintColumn.displayName = 'il.co.codeguru.corewars_riscv.gui.ColumnGraph.$paintColumn';
function $paintComponent(this$static){
  var columnWidth, height, i, numPlayers, width_0, height1, height2;
  width_0 = castToNative(this$static.m_element, $wnd.HTMLCanvasElement).width;
  height = castToNative(this$static.m_element, $wnd.HTMLCanvasElement).height;
  this$static.ctx.fillStyle = '#fdfdfd';
  this$static.ctx.fillRect(0, 0, width_0, height);
  this$static.ctx.font = '16px monospace';
  numPlayers = this$static.columns.length;
  columnWidth = width_0 / numPlayers | 0;
  for (i = 0; i < numPlayers; i++) {
    this$static.ctx.fillStyle = this$static.columns[i].col1;
    height1 = round_int(this$static.reduceFactor * this$static.columns[i].values_0[1]);
    this$static.ctx.fillRect(i * columnWidth, height - 30 - height1, columnWidth - 5, height1);
    this$static.ctx.fillStyle = this$static.columns[i].col2;
    height2 = round_int(this$static.reduceFactor * this$static.columns[i].values_0[2]);
    this$static.ctx.fillRect(i * columnWidth, height - 30 - height1 - height2, columnWidth - 5, height2);
    this$static.ctx.fillText('' + this$static.columns[i].values_0[0], i * columnWidth + 5, height - 30 - height1 - height2 - 5);
    this$static.ctx.fillStyle = this$static.columns[i].col2;
    this$static.ctx.fillText(this$static.columns[i].name_0, i * columnWidth + 5, height - 30 + 17 - 2);
  }
}

$paintComponent.displayName = 'il.co.codeguru.corewars_riscv.gui.ColumnGraph.$paintComponent';
function ColumnGraph(names){
  JComponent_0.call(this, 'graphs_canvas');
  $clear_0(this, names);
  this.ctx = castToNative(castToNative(this.m_element, $wnd.HTMLCanvasElement).getContext('2d'), $wnd.CanvasRenderingContext2D);
}

ColumnGraph.displayName = 'il.co.codeguru.corewars_riscv.gui.ColumnGraph.ColumnGraph';
defineClass(166, 23, {}, ColumnGraph);
_.maxValue = 0;
_.reduceFactor = 0;
var Lil_co_codeguru_corewars_1riscv_gui_ColumnGraph_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'ColumnGraph', 166);
function ColumnGraph$PlayerColumn(nm, c1, c2){
  this.name_0 = nm;
  this.col1 = c1;
  this.col2 = c2;
  this.values_0 = initUnidimensionalArray(F_classLit, $intern_14, 11, 3, 15, 1);
}

ColumnGraph$PlayerColumn.displayName = 'il.co.codeguru.corewars_riscv.gui.ColumnGraph$PlayerColumn.ColumnGraph$PlayerColumn';
defineClass(94, 1, {94:1}, ColumnGraph$PlayerColumn);
var Lil_co_codeguru_corewars_1riscv_gui_ColumnGraph$PlayerColumn_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'ColumnGraph/PlayerColumn', 94);
function JFrame(){
  JComponent.call(this);
}

JFrame.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JFrame.JFrame';
defineClass(110, 23, {});
var Lil_co_codeguru_corewars_1riscv_gui_widgets_JFrame_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'JFrame', 110);
function $$init_6(this$static){
  this$static.animCallback = new CompetitionWindow$lambda$0$Type(this$static);
}

$$init_6.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.$$init';
function $callContinueRun(this$static){
  var needMore;
  needMore = $continueRun(this$static.competition);
  this$static.stepnum.innerHTML = !this$static.competition.compState?'[null]':'' + this$static.competition.compState.round_0;
  needMore && (!instance && (instance = $isNativelySupported()?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance).requestAnimationFrame_0(this$static.animCallback, null);
}

$callContinueRun.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.$callContinueRun';
function $errorPreventsStep(this$static, v){
  $setEnabled(this$static.battleFrame.btnPause, !v);
  $setEnabled(this$static.battleFrame.btnSingleRound, !v);
}

$errorPreventsStep.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.$errorPreventsStep';
function $exportMethods_0(this$static){
  var that = this$static;
  $wnd.j_startDebug = $entry(function(){
    return that.j_startDebug_0();
  }
  );
  $wnd.j_stopDebug = $entry(function(){
    return that.j_stopDebug_0();
  }
  );
  $wnd.j_debugUiInited = $entry(function(){
    return that.j_debugUiInited_0();
  }
  );
  $wnd.j_triggerZeroSpeed = $entry(function(){
    return that.j_triggerZeroSpeed_0();
  }
  );
  $wnd.j_startCompete = $entry(function(){
    return that.j_startCompete_0();
  }
  );
  $wnd.j_stopCompete = $entry(function(){
    return that.j_stopCompete_0();
  }
  );
}

$exportMethods_0.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.$exportMethods';
function $gui_runWar(this$static, isBattleShown, isStartPaused){
  isBattleShown != null && (this$static.m_isBattleShown = (checkCriticalNotNull(isBattleShown) , isBattleShown));
  isStartPaused != null && (this$static.m_isStartPaused = (checkCriticalNotNull(isStartPaused) , isStartPaused));
  if ($runWar(this$static, (checkCriticalNotNull(isBattleShown) , isBattleShown))) {
    (checkCriticalNotNull(isBattleShown) , isBattleShown) && $setDebugMode(this$static, true);
    this$static.stepnum.innerHTML = '0';
    $setValue_0(this$static.battleFrame.speedSlider);
    return true;
  }
  return false;
}

$gui_runWar.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.$gui_runWar';
function $lambda$0_0(this$static){
  var e;
  try {
    $callContinueRun(this$static);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 9)) {
      e = $e0;
      log_0('continueRun EXCEPTION ' + $toString_0(e, e.getLocalizedMessage()));
      $printStackTraceImpl(e, ($clinit_System() , err), '', '');
    }
     else 
      throw toJs($e0);
  }
}

$lambda$0_0.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.$lambda$0';
function $runWar(this$static, isInDebug){
  var battlesPerGroup, collected, e, inEditorWarrior, lastArg, lastArg0, numOfGroups, playerFiles, repo, seedValue, war;
  battlesPerGroup = 0;
  try {
    $equals_4(castToNative(this$static.seed.m_element, $wnd.HTMLInputElement).value.substr(0, 'SEED#'.length), 'SEED#')?(seedValue = __parseAndValidateLong(castToNative(this$static.seed.m_element, $wnd.HTMLInputElement).value.substr(5))):(seedValue = getHashCode_0(castToNative(this$static.seed.m_element, $wnd.HTMLInputElement).value));
    $setSeed(this$static.competition, seedValue);
    battlesPerGroup = 0;
    battlesPerGroup = __parseAndValidateInt($trim(castToNative(this$static.battlesPerGroupField.m_element, $wnd.HTMLInputElement).value), 10);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 16)) {
      console.log('Error in configuration');
    }
     else 
      throw toJs($e0);
  }
  if (battlesPerGroup <= 0) {
    console.error('battles per session needs to be more than 0');
    return false;
  }
  repo = this$static.competition.warriorRepository;
  playerFiles = (collected = castTo($reduce((lastArg0 = $filter(stream($getFiles(this$static.m_playersPanel, 112)), new CompetitionWindow$lambda$1$Type) , of_0(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$21$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_2, 62, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)])) , lastArg0), (lastArg = new ArrayList , lastArg)), 63) , castTo(collected.toArray(initUnidimensionalArray(Lil_co_codeguru_corewars_1riscv_gui_PlayersPanel$Code_2_classLit, $intern_18, 38, collected.size_1(), 0, 1)), 104));
  if (!$loadWarriors(repo, playerFiles, $getFiles(this$static.m_playersPanel, 122), isInDebug))
    return false;
  $clear_0(this$static.columnGraph, $getGroupNames(repo));
  numOfGroups = repo.warriorGroups.array.length;
  if (numOfGroups == 0) {
    console.error("can't run without any warriors");
    return false;
  }
  try {
    $runCompetition(this$static.competition, battlesPerGroup, numOfGroups, this$static.m_isStartPaused, this$static.m_isBattleShown, getCheckboxValue('#new-memory'));
    $callContinueRun(this$static);
    if (this$static.m_isBattleShown) {
      war = this$static.competition.currentWar;
      $setBreakpointCheck(war, this$static.m_codeEditor);
      inEditorWarrior = $getWarriorByLabel(war, this$static.m_playersPanel.m_inEditor.label_0);
      inEditorWarrior?(war.m_uiWarriorIndex = inEditorWarrior.m_myIndex):(war.m_uiWarriorIndex = -1);
    }
    return true;
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 9)) {
      e = $e1;
      log_0('runWar EXCEPTION ' + $toString_0(e, e.getLocalizedMessage()));
      $printStackTraceImpl(e, new ConsolePrintStream(new Console$0methodref$log$Type), '', '');
    }
     else 
      throw toJs($e1);
  }
  return false;
}

$runWar.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.$runWar';
function $setDebugMode(this$static, v){
  $setDebugMode_1(this$static.m_codeEditor, v);
  $setDebugMode_0(this$static.m_playersPanel, v);
  $setVisible(this$static.battleFrame.cpuframe, v);
  v || (this$static.battleFrame.warCanvas.m_indebug = false);
}

$setDebugMode.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.$setDebugMode';
function $showBattleRoom(this$static){
  this$static.battleFrame = new WarFrame(this$static.competition, this$static);
  $addMemoryEventLister(this$static.competition, this$static.battleFrame);
  $addMemoryEventLister(this$static.competition, this$static.battleFrame.cpuframe);
  $addCompetitionEventListener(this$static.competition, this$static.battleFrame);
  $addMemoryEventLister(this$static.competition, this$static.battleFrame.cpuframe.stackView);
  $addMemoryEventLister(this$static.competition, this$static.battleFrame.cpuframe.sharedMemView);
}

$showBattleRoom.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.$showBattleRoom';
function $srcSelectionChanged(this$static, label_0){
  var war, warrior;
  war = this$static.competition.currentWar;
  if (!war)
    return;
  warrior = $getWarriorByLabel(war, label_0);
  warrior?(war.m_uiWarriorIndex = warrior.m_myIndex):(war.m_uiWarriorIndex = -1);
}

$srcSelectionChanged.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.$srcSelectionChanged';
function CompetitionWindow(){
  var warriorRepository;
  JFrame.call(this);
  this.animCallback = new CompetitionWindow$lambda$0$Type(this);
  new JPanel;
  this.competition = new Competition;
  console.log('Creating new Competition');
  $addCompetitionEventListener(this.competition, this);
  warriorRepository = this.competition.warriorRepository;
  $add_0(warriorRepository.scoreEventsCaster, this);
  $doneAdding(warriorRepository.scoreEventsCaster);
  this.columnGraph = new ColumnGraph($getGroupNames(warriorRepository));
  new JPanel;
  new JPanel;
  new JPanel;
  this.warCounterDisplay = new JLabel_0;
  new JPanel;
  new JLabel_0;
  new JLabel_0;
  this.battlesPerGroupField = new JTextField('battlesPerGroupField', '100');
  this.seed = new JTextField('seed', null);
  $setText_1(this.seed, 'guru');
  new JLabel_0;
  new JPanel;
  this.battleFrame = new WarFrame(this.competition, this);
  $addMemoryEventLister(this.competition, this.battleFrame);
  $addMemoryEventLister(this.competition, this.battleFrame.cpuframe);
  $addCompetitionEventListener(this.competition, this.battleFrame);
  $addMemoryEventLister(this.competition, this.battleFrame.cpuframe.stackView);
  $addMemoryEventLister(this.competition, this.battleFrame.cpuframe.sharedMemView);
  this.m_codeEditor = new CodeEditor(this.competition);
  this.m_playersPanel = new PlayersPanel(this);
  this.m_codeEditor.m_playersPanel = this.m_playersPanel;
  $wnd.run_assembler = $wnd.run_gas;
  this.stepnum = castToNative(($clinit_DomGlobal() , document_0).getElementById('stepnum'), $wnd.HTMLElement);
  $exportMethods_0(this);
  $doneAdding(this.competition.competitionEventCaster);
  $doneAdding(this.competition.memoryEventCaster);
  $wnd.gwtStart();
}

CompetitionWindow.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.CompetitionWindow';
function call_gwtStart(){
  $wnd.gwtStart();
}

call_gwtStart.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.call_gwtStart';
function jsCompeteFinish(){
  $wnd.competeFinished();
}

jsCompeteFinish.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.jsCompeteFinish';
function setBattlesRan(round_0){
  $wnd.battlesRan.innerHTML = round_0;
}

setBattlesRan.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.setBattlesRan';
defineClass(141, 110, {15:1, 322:1}, CompetitionWindow);
_.j_debugUiInited_0 = function j_debugUiInited(){
  this.competition.competitionEventListener.onEndRound();
}
;
_.j_debugUiInited_0.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.j_debugUiInited';
_.j_startCompete_0 = function j_startCompete(){
  if (!$checkPlayersReady(this.m_playersPanel))
    return false;
  return $gui_runWar(this, ($clinit_Boolean() , false), false);
}
;
_.j_startCompete_0.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.j_startCompete';
_.j_startDebug_0 = function j_startDebug(){
  if (!$checkPlayersReady(this.m_playersPanel))
    return false;
  return $gui_runWar(this, ($clinit_Boolean() , true), true);
}
;
_.j_startDebug_0.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.j_startDebug';
_.j_stopCompete_0 = function j_stopCompete(){
  $setAbort(this.competition);
}
;
_.j_stopCompete_0.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.j_stopCompete';
_.j_stopDebug_0 = function j_stopDebug(){
  $setAbort(this.competition);
  $setDebugMode(this, false);
}
;
_.j_stopDebug_0.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.j_stopDebug';
_.j_triggerZeroSpeed_0 = function j_triggerZeroSpeed(){
  $setSpeed(this.competition, 0);
  $setValue_0(this.battleFrame.speedSlider);
}
;
_.j_triggerZeroSpeed_0.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.j_triggerZeroSpeed';
_.onCompetitionEnd = function onCompetitionEnd(){
  $setText(this.warCounterDisplay, 'The competition is over. ' + this.warCounter + ' sessions were run.');
  $wnd.competeFinished();
}
;
_.onCompetitionEnd.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.onCompetitionEnd';
_.onCompetitionStart = function onCompetitionStart(){
  this.warCounter = 0;
  this.totalWars = $getTotalNumberOfWars(this.competition);
}
;
_.onCompetitionStart.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.onCompetitionStart';
_.onEndRound = function onEndRound(){
}
;
_.onEndRound.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.onEndRound';
_.onNoneAlive = function onNoneAlive(){
}
;
_.onNoneAlive.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.onNoneAlive';
_.onPaused = function onPaused(){
}
;
_.onPaused.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.onPaused';
_.onRound = function onRound(round_0){
}
;
_.onRound.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.onRound';
_.onWarEnd = function onWarEnd(reason, winners, inDebug){
  ++this.warCounter;
  $setText_1(this.seed, 'SEED#' + toString_4(this.competition.seed));
  $setText(this.warCounterDisplay, 'Sessions so far:' + this.warCounter + ' (out of ' + this.totalWars + ')');
  setBattlesRan('' + this.warCounter + '/' + ('' + this.totalWars));
}
;
_.onWarEnd.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.onWarEnd';
_.onWarPreStartClear = function onWarPreStartClear(){
}
;
_.onWarPreStartClear.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.onWarPreStartClear';
_.onWarStart = function onWarStart(){
  $setVisible(this.battleFrame.cpuframe, true);
}
;
_.onWarStart.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.onWarStart';
_.onWarriorBirth = function onWarriorBirth(w){
}
;
_.onWarriorBirth.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.onWarriorBirth';
_.onWarriorDeath = function onWarriorDeath(warrior, reason){
}
;
_.onWarriorDeath.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.onWarriorDeath';
_.scoreChanged = function scoreChanged(name_0, addedValue, groupIndex, subIndex){
  $addToValue(this.columnGraph, groupIndex, subIndex, addedValue);
}
;
_.scoreChanged.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow.scoreChanged';
_.m_isBattleShown = false;
_.m_isStartPaused = false;
_.totalWars = 0;
_.warCounter = 0;
var Lil_co_codeguru_corewars_1riscv_gui_CompetitionWindow_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'CompetitionWindow', 141);
function $execute_0(this$static){
  $lambda$0_0(this$static.$$outer_0);
}

$execute_0.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow$lambda$0$Type.$execute';
function CompetitionWindow$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

CompetitionWindow$lambda$0$Type.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow$lambda$0$Type.CompetitionWindow$lambda$0$Type';
defineClass(151, 1, {}, CompetitionWindow$lambda$0$Type);
_.execute = function execute(arg0){
  $execute_0(this);
}
;
_.execute.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow$lambda$0$Type.execute';
var Lil_co_codeguru_corewars_1riscv_gui_CompetitionWindow$lambda$0$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'CompetitionWindow/lambda$0$Type', 151);
function CompetitionWindow$lambda$1$Type(){
}

CompetitionWindow$lambda$1$Type.displayName = 'il.co.codeguru.corewars_riscv.gui.CompetitionWindow$lambda$1$Type.CompetitionWindow$lambda$1$Type';
defineClass(152, 1, {}, CompetitionWindow$lambda$1$Type);
var Lil_co_codeguru_corewars_1riscv_gui_CompetitionWindow$lambda$1$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'CompetitionWindow/lambda$1$Type', 152);
function $$init_7(this$static){
  this$static.m_watches = new HashMap;
  this$static.m_stateAccess = new CpuFrame$StateAccess;
  this$static.m_parser = new ExpressionParser;
}

$$init_7.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.$$init';
function $exportMethods_1(this$static){
  var that = this$static;
  $wnd.j_setRegistersBase = $entry(function(b){
    that.j_setRegistersBase_0(b);
  }
  );
  $wnd.j_watchTextChanged = $entry(function(s, i){
    return that.j_watchTextChanged_0(s, i);
  }
  );
  $wnd.j_addWatch = $entry(function(i){
    return that.j_addWatch_0(i);
  }
  );
  $wnd.j_delWatch = $entry(function(i){
    return that.j_delWatch_0(i);
  }
  );
}

$exportMethods_1.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.$exportMethods';
function $initMemRegions(this$static, force){
  var currentWar, warrior;
  currentWar = this$static.competition.currentWar;
  if (!currentWar)
    return;
  warrior = $getWarriorByLabel(currentWar, this$static.m_currentWarriorLabel);
  $initMemRegion(this$static.stackView, warrior.stackRegion, currentWar.m_core, force);
  $initMemRegion(this$static.sharedMemView, warrior.sharedRegion, currentWar.m_core, force);
  this$static.m_stateAccess.Memory = currentWar.m_core;
}

$initMemRegions.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.$initMemRegions';
function $onlySpaces(s){
  var c, i;
  for (i = 0; i < s.length; ++i) {
    c = (checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i));
    if (c != 32)
      return false;
  }
  return true;
}

$onlySpaces.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.$onlySpaces';
function $regChanged_callback(this$static, name_0, value_0){
  var currentWar, entry, entry$iterator, entry0, outerIter, state, v;
  currentWar = this$static.competition.currentWar;
  if (!currentWar)
    return 1;
  state = $getWarriorByLabel(currentWar, this$static.m_currentWarriorLabel).m_state;
  value_0 = $trim(value_0);
  value_0.length > 2 && (checkCriticalStringElementIndex(0, value_0.length) , value_0.charCodeAt(0) == 48) && (checkCriticalStringElementIndex(1, value_0.length) , value_0.charCodeAt(1) == 120) && (value_0 = value_0.substr(2));
  try {
    this$static.m_base == 10?(v = __parseAndValidateInt(value_0, 10)):(v = __parseAndValidateInt(value_0, 16));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 16)) {
      $errorPreventsStep(this$static.m_mainwnd, true);
      return this$static.m_base == 10?-2000000:-1000000;
    }
     else 
      throw toJs($e0);
  }
  if (v < 0 || v > $intern_0) {
    $errorPreventsStep(this$static.m_mainwnd, true);
    return -3000000;
  }
  $errorPreventsStep(this$static.m_mainwnd, false);
  switch (name_0) {
    case 'PC':
      state.pc = v;
      $updateDebugLine(this$static.m_mainwnd.m_codeEditor.debugger_0);
      $onEndRound(this$static.m_mainwnd.battleFrame);
      break;
    default:$setReg(state, valueOf_0(__parseAndValidateInt(name_0, 10)).value_0, v);
  }
  this$static.m_stateAccess.state = state;
  for (entry$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this$static.m_watches)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); entry$iterator.val$outerIter2.hasNext;) {
    entry0 = (entry = $next_1(entry$iterator.val$outerIter2) , castTo(entry.getValue(), 56));
    $evalAndDisplay(entry0);
  }
  return v;
}

$regChanged_callback.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.$regChanged_callback';
function $setSelectedPlayer(this$static, playerLabel, isDebugMode){
  this$static.m_currentWarriorLabel = playerLabel;
  this$static.m_currentWarriorIndex = -1;
  if (isDebugMode) {
    $initMemRegions(this$static, false);
    $updateFields(this$static);
  }
}

$setSelectedPlayer.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.$setSelectedPlayer';
function $setVisible(this$static, v){
  if (v) {
    this$static.cpuPanel.style.display = '';
    $showMemoryRegions(getCheckboxValue('#new-memory'));
  }
   else {
    this$static.cpuPanel.style.display = 'none';
  }
}

$setVisible.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.$setVisible';
function $showMemoryRegions(toShow){
  if (toShow) {
    $wnd.$('#sharedMemArea').removeClass('hide');
    $wnd.$('#stackArea').removeClass('hide');
  }
   else {
    $wnd.$('#sharedMemArea').addClass('hide');
    $wnd.$('#stackArea').addClass('hide');
  }
}

$showMemoryRegions.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.$showMemoryRegions';
function $updateFields(this$static){
  var currentWar, entry, entry$iterator, entry0, i, outerIter, state;
  currentWar = this$static.competition.currentWar;
  if (!currentWar)
    return;
  this$static.m_currentWarriorIndex == -1 && (this$static.m_currentWarriorIndex = $getWarriorByLabel(currentWar, this$static.m_currentWarriorLabel).m_myIndex);
  state = $getWarrior(currentWar, this$static.m_currentWarriorIndex).m_state;
  for (i = 0; i < 32; i++) {
    $setValue(this$static.registers[i], state.registers[i]);
  }
  $setValue(this$static.regPc, state.pc);
  this$static.m_stateAccess.state = state;
  for (entry$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this$static.m_watches)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); entry$iterator.val$outerIter2.hasNext;) {
    entry0 = (entry = $next_1(entry$iterator.val$outerIter2) , castTo(entry.getValue(), 56));
    $evalAndDisplay(entry0);
  }
}

$updateFields.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.$updateFields';
function CpuFrame(c, mainwnd){
  var i;
  this.m_watches = new HashMap;
  this.m_stateAccess = new CpuFrame$StateAccess;
  this.m_parser = new ExpressionParser;
  $exportMethods_1(this);
  this.m_mainwnd = mainwnd;
  this.competition = c;
  this.cpuPanel = castToNative(($clinit_DomGlobal() , document_0).getElementById('cpuPanel'), $wnd.HTMLElement);
  this.registers = initUnidimensionalArray(Lil_co_codeguru_corewars_1riscv_gui_RegisterField_2_classLit, $intern_2, 80, 32, 0, 1);
  for (i = 0; i < 32; i++) {
    this.registers[i] = new RegisterField('' + i, this);
  }
  this.regPc = new RegisterField('PC', this);
  this.stackView = new MemRegionView('stackList', 'mk');
  this.sharedMemView = new MemRegionView('sharedMemList', 'mh');
  this.m_parser.m_stateAccess = this.m_stateAccess;
}

CpuFrame.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.CpuFrame';
defineClass(187, 1, $intern_19, CpuFrame);
_.j_addWatch_0 = function j_addWatch(watchId){
  var entry;
  entry = new CpuFrame$WatchEntry;
  $put(this.m_watches, valueOf_0(watchId), entry);
  entry.resultElem = castToNative(($clinit_DomGlobal() , document_0).getElementById('watch' + ('' + watchId) + '_val'), $wnd.HTMLElement);
}
;
_.j_addWatch_0.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.j_addWatch';
_.j_delWatch_0 = function j_delWatch(watchId){
  $remove(this.m_watches, valueOf_0(watchId));
}
;
_.j_delWatch_0.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.j_delWatch';
_.j_setRegistersBase_0 = function j_setRegistersBase(base){
  var entry, entry$iterator, entry0, outerIter, reg, reg$array, reg$index, reg$max;
  this.m_base = base;
  for (reg$array = this.registers , reg$index = 0 , reg$max = reg$array.length; reg$index < reg$max; ++reg$index) {
    reg = reg$array[reg$index];
    reg.m_base = base;
    reg.m_lastInputOk?$setValue(reg, reg.m_lastValue):$editChanged(reg);
  }
  for (entry$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this.m_watches)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); entry$iterator.val$outerIter2.hasNext;) {
    entry0 = (entry = $next_1(entry$iterator.val$outerIter2) , castTo(entry.getValue(), 56));
    entry0.base = base;
    $evalAndDisplay(entry0);
  }
}
;
_.j_setRegistersBase_0.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.j_setRegistersBase';
_.j_watchTextChanged_0 = function j_watchTextChanged(s, watchId){
  var e, entry;
  entry = castTo($get_3(this.m_watches, valueOf_0(watchId)), 56);
  if ($onlySpaces(s)) {
    entry.isValid = false;
    entry.resultElem.innerText = '';
    entry.resultElem.title = '';
    return false;
  }
  entry.isValid = false;
  try {
    entry.root_0 = $eval(this.m_parser, s);
    entry.isValid = true;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 9)) {
      e = $e0;
      debug_0('Watch parse error: ' + e.getMessage());
      $setResult(entry, 'Error: ' + e.getMessage());
    }
     else 
      throw toJs($e0);
  }
  $evalAndDisplay(entry);
  return true;
}
;
_.j_watchTextChanged_0.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.j_watchTextChanged';
_.onCompetitionEnd = function onCompetitionEnd_0(){
}
;
_.onCompetitionEnd.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.onCompetitionEnd';
_.onCompetitionStart = function onCompetitionStart_0(){
}
;
_.onCompetitionStart.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.onCompetitionStart';
_.onEndRound = function onEndRound_0(){
  $updateFields(this);
}
;
_.onEndRound.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.onEndRound';
_.onMemoryWrite = function onMemoryWrite(address, value_0){
  var entry, entry$iterator, entry0, outerIter;
  for (entry$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this.m_watches)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); entry$iterator.val$outerIter2.hasNext;) {
    entry0 = (entry = $next_1(entry$iterator.val$outerIter2) , castTo(entry.getValue(), 56));
    $evalAndDisplay(entry0);
  }
}
;
_.onMemoryWrite.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.onMemoryWrite';
_.onNoneAlive = function onNoneAlive_0(){
}
;
_.onNoneAlive.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.onNoneAlive';
_.onPaused = function onPaused_0(){
}
;
_.onPaused.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.onPaused';
_.onRound = function onRound_0(round_0){
}
;
_.onRound.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.onRound';
_.onWarEnd = function onWarEnd_0(reason, winners, inDebug){
}
;
_.onWarEnd.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.onWarEnd';
_.onWarPreStartClear = function onWarPreStartClear_0(){
}
;
_.onWarPreStartClear.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.onWarPreStartClear';
_.onWarStart = function onWarStart_0(){
  this.m_currentWarriorIndex = -1;
  $initMemRegions(this, true);
}
;
_.onWarStart.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.onWarStart';
_.onWarriorBirth = function onWarriorBirth_0(w){
}
;
_.onWarriorBirth.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.onWarriorBirth';
_.onWarriorDeath = function onWarriorDeath_0(warrior, reason){
}
;
_.onWarriorDeath.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.onWarriorDeath';
_.onWriteState = function onWriteState(state){
}
;
_.onWriteState.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame.onWriteState';
_.m_base = 16;
_.m_currentWarriorIndex = -1;
_.m_currentWarriorLabel = null;
var Lil_co_codeguru_corewars_1riscv_gui_CpuFrame_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'CpuFrame', 187);
function $getIdentifierValue(name_0){
  throw toJs(new Exception_1('unknown identifier ' + name_0));
}

$getIdentifierValue.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame$StateAccess.$getIdentifierValue';
function $getMemory(this$static, addr, size_0){
  return size_0 == 1?$loadByte(this$static.Memory, addr) & 255:$loadHalfWord(this$static.Memory, addr) & $intern_0;
}

$getMemory.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame$StateAccess.$getMemory';
function $getRegisterValue(this$static, name_0){
  if (!this$static.state) {
    throw toJs(new Exception_1('invalid state'));
  }
  try {
    return $getReg(this$static.state, valueOf_0(__parseAndValidateInt(name_0, 10)).value_0) << 16 >> 16;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 30)) {
      throw toJs(new RuntimeException_1('Unknown register name: ' + name_0));
    }
     else 
      throw toJs($e0);
  }
}

$getRegisterValue.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame$StateAccess.$getRegisterValue';
function CpuFrame$StateAccess(){
}

CpuFrame$StateAccess.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame$StateAccess.CpuFrame$StateAccess';
defineClass(188, 1, {}, CpuFrame$StateAccess);
var Lil_co_codeguru_corewars_1riscv_gui_CpuFrame$StateAccess_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'CpuFrame/StateAccess', 188);
function $$init_8(this$static){
}

$$init_8.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame$WatchEntry.$$init';
function $evalAndDisplay(this$static){
  var e, res, sv;
  if (!this$static.isValid)
    return;
  try {
    res = this$static.root_0.eval_0();
    this$static.base == 16?(sv = hex4(res)):(sv = '' + res);
    setInnerText(this$static.resultElem, sv);
    this$static.resultElem.title = sv;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 9)) {
      e = $e0;
      log_0('watch error: ' + e.getMessage());
      $setResult(this$static, 'Error: ' + e.getMessage());
    }
     else 
      throw toJs($e0);
  }
}

$evalAndDisplay.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame$WatchEntry.$evalAndDisplay';
function $setResult(this$static, v){
  setInnerText(this$static.resultElem, v);
  this$static.resultElem.title = v;
}

$setResult.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame$WatchEntry.$setResult';
function CpuFrame$WatchEntry(){
}

CpuFrame$WatchEntry.displayName = 'il.co.codeguru.corewars_riscv.gui.CpuFrame$WatchEntry.CpuFrame$WatchEntry';
defineClass(56, 1, {56:1}, CpuFrame$WatchEntry);
_.base = 16;
_.isValid = false;
var Lil_co_codeguru_corewars_1riscv_gui_CpuFrame$WatchEntry_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'CpuFrame/WatchEntry', 56);
function $$init_9(this$static){
  this$static.stack_ = new Stack;
}

$$init_9.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser.$$init';
function $eatSpaces(this$static){
  while ($getCharacter(this$static) == 32)
    ++this$static.index_;
}

$eatSpaces.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser.$eatSpaces';
function $eval(this$static, expr){
  var e, result;
  this$static.index_ = 0;
  this$static.expr_ = expr;
  try {
    result = $parseExpr(this$static);
    this$static.index_ >= this$static.expr_.length || $unexpected(this$static);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 9)) {
      e = $e0;
      while (this$static.stack_.arrayList.array.length != 0)
        $pop(this$static.stack_);
      throw toJs(e);
    }
     else 
      throw toJs($e0);
  }
  return result;
}

$eval.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser.$eval';
function $getBase(this$static){
  var h, x_0;
  if (this$static.index_ + 2 < this$static.expr_.length) {
    x_0 = $charAt(String.fromCharCode($charAt(this$static.expr_, this$static.index_ + 1)).toLowerCase(), 0);
    h = $charAt(this$static.expr_, this$static.index_ + 2);
    if (x_0 == 120 && toInteger(h) <= 15)
      return 16;
    if (x_0 == 98 && toInteger(h) <= 1)
      return 2;
    if (x_0 == 111 && toInteger(h) <= 8)
      return 8;
  }
  return 10;
}

$getBase.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser.$getBase';
function $getCharacter(this$static){
  if (this$static.index_ < this$static.expr_.length)
    return $charAt(this$static.expr_, this$static.index_);
  return 0;
}

$getCharacter.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser.$getCharacter';
function $parseBin(this$static){
  var h, value_0;
  this$static.index_ = this$static.index_ + 2;
  value_0 = 0;
  for (; (h = toInteger($getCharacter(this$static))) <= 1; this$static.index_++)
    value_0 = value_0 * 2 + h;
  return new ExpressionParser$NumNode(value_0);
}

$parseBin.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser.$parseBin';
function $parseDecimal(this$static){
  var d, value_0;
  value_0 = 0;
  for (; (d = toInteger($getCharacter(this$static))) <= 9; this$static.index_++)
    value_0 = value_0 * 10 + d;
  return new ExpressionParser$NumNode(value_0);
}

$parseDecimal.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser.$parseDecimal';
function $parseExpr(this$static){
  var op, value_0;
  $push_0(this$static.stack_, new ExpressionParser$OperatorValue(new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_NULL), 0, 76), new ExpressionParser$NumNode(0)));
  value_0 = $parseValue(this$static);
  while (this$static.stack_.arrayList.array.length != 0) {
    op = $parseOp(this$static);
    while (op.precedence < castTo($peek(this$static.stack_), 45).op.precedence || op.precedence == castTo($peek(this$static.stack_), 45).op.precedence && op.associativity == 76) {
      if (castTo($peek(this$static.stack_), 45).op.op == OPERATOR_NULL) {
        $pop(this$static.stack_);
        return value_0;
      }
      value_0 = new ExpressionParser$BinaryOpNode(castTo($peek(this$static.stack_), 45).value_0, value_0, castTo($peek(this$static.stack_), 45).op.op);
      $pop(this$static.stack_);
    }
    $push_0(this$static.stack_, new ExpressionParser$OperatorValue(op, value_0));
    value_0 = $parseValue(this$static);
  }
  return null;
}

$parseExpr.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser.$parseExpr';
function $parseHex(this$static){
  var h, value_0;
  this$static.index_ = this$static.index_ + 2;
  value_0 = 0;
  for (; (h = toInteger($getCharacter(this$static))) <= 15; this$static.index_++)
    value_0 = value_0 * 16 + h;
  return new ExpressionParser$NumNode(value_0);
}

$parseHex.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser.$parseHex';
function $parseIdentifier(this$static){
  var c, ident, idup, sb;
  sb = new StringBuilder;
  while (true) {
    c = $getCharacter(this$static);
    if (c >= 97 && c <= 122 || c >= 65 && c <= 90 || c == 95 || c >= 48 && c <= 57)
      sb.string += String.fromCharCode(c);
    else 
      break;
    ++this$static.index_;
  }
  ident = sb.string;
  idup = ident.toUpperCase();
  if ($contains_1(m_registers, idup)) {
    return new ExpressionParser$RegisterNode(idup, this$static.m_stateAccess);
  }
  return new ExpressionParser$IdentifierNode(idup);
}

$parseIdentifier.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser.$parseIdentifier';
function $parseOct(this$static){
  var h, value_0;
  this$static.index_ = this$static.index_ + 2;
  value_0 = 0;
  for (; (h = toInteger($getCharacter(this$static))) <= 7; this$static.index_++)
    value_0 = value_0 * 8 + h;
  return new ExpressionParser$NumNode(value_0);
}

$parseOct.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser.$parseOct';
function $parseOp(this$static){
  $eatSpaces(this$static);
  switch ($getCharacter(this$static)) {
    case 124:
      ++this$static.index_;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_BITWISE_OR), 4, 76);
    case 94:
      ++this$static.index_;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_BITWISE_XOR), 5, 76);
    case 38:
      ++this$static.index_;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_BITWISE_AND), 6, 76);
    case 60:
      $regionMatches(this$static.expr_, this$static.index_, '<<', '<<'.length) || $unexpected(this$static);
      this$static.index_ += '<<'.length;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_BITWISE_SHL), 9, 76);
    case 62:
      $regionMatches(this$static.expr_, this$static.index_, '>>', '>>'.length) || $unexpected(this$static);
      this$static.index_ += '>>'.length;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_BITWISE_SHR), 9, 76);
    case 43:
      ++this$static.index_;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_ADDITION), 10, 76);
    case 45:
      ++this$static.index_;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_SUBTRACTION), 10, 76);
    case 47:
      ++this$static.index_;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_DIVISION), 20, 76);
    case 37:
      ++this$static.index_;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_MODULO), 20, 76);
    case 42:
      ++this$static.index_;
      if ($getCharacter(this$static) != 42)
        return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_MULTIPLICATION), 20, 76);
      ++this$static.index_;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_POWER), 30, 82);
    case 69:
    case 101:
      ++this$static.index_;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_EXPONENT), 40, 82);
    default:return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_NULL), 0, 76);
  }
}

$parseOp.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser.$parseOp';
function $parseValue(this$static){
  var base, c, sz, vaddr, val, vseg;
  $eatSpaces(this$static);
  c = $getCharacter(this$static);
  switch (c) {
    case 48:
      base = $getBase(this$static);
      base == 16?(val = $parseHex(this$static)):base == 2?(val = $parseBin(this$static)):base == 8?(val = $parseOct(this$static)):(val = $parseDecimal(this$static));
      break;
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      val = $parseDecimal(this$static);
      break;
    case 40:
      ++this$static.index_;
      val = $parseExpr(this$static);
      $eatSpaces(this$static);
      if ($getCharacter(this$static) != 41) {
        this$static.index_ >= this$static.expr_.length || $unexpected(this$static);
        throw toJs(new Exception_1("Syntax error: `)' expected at end of expression"));
      }

      ++this$static.index_;
      break;
    case 91:
      ++this$static.index_;
      vseg = null;
      vaddr = $parseExpr(this$static);
      $eatSpaces(this$static);
      if ($getCharacter(this$static) == 58) {
        ++this$static.index_;
        vseg = vaddr;
        vaddr = $parseExpr(this$static);
        $eatSpaces(this$static);
      }

      if ($getCharacter(this$static) != 93) {
        this$static.index_ >= this$static.expr_.length || $unexpected(this$static);
        throw toJs(new Exception_1("Syntax error: `]' expected at end of expression"));
      }

      ++this$static.index_;
      c = $getCharacter(this$static);
      sz = 1;
      if (c == 119 || c == 87) {
        sz = 2;
        ++this$static.index_;
      }

      (c == 98 || c == 66) && ++this$static.index_;
      val = new ExpressionParser$MemAccessNode(vseg, vaddr, sz, this$static.m_stateAccess);
      break;
    case 126:
      ++this$static.index_;
      val = new ExpressionParser$UnaryNotNode($parseValue(this$static));
      break;
    case 43:
      ++this$static.index_;
      val = $parseValue(this$static);
      break;
    case 45:
      ++this$static.index_;
      val = new ExpressionParser$UnaryNegNode($parseValue(this$static));
      break;
    default:if (c >= 97 && c <= 122 || c >= 65 && c <= 90 || c == 95) {
        val = $parseIdentifier(this$static);
        break;
      }

      this$static.index_ >= this$static.expr_.length || $unexpected(this$static);
      throw toJs(new Exception_1('Syntax error: value expected at end of expression'));
  }
  return val;
}

$parseValue.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser.$parseValue';
function $unexpected(this$static){
  var msg;
  msg = new StringBuilder;
  msg.string += 'Syntax error: unexpected token "';
  $append_5(msg, $substring_1(this$static.expr_, this$static.index_, this$static.expr_.length));
  msg.string += '" at index ';
  $append_2(msg, this$static.index_);
  throw toJs(new Exception_1(msg.string));
}

$unexpected.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser.$unexpected';
function ExpressionParser(){
  this.stack_ = new Stack;
  !m_registers && (m_registers = new HashSet_0(new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_11, 2, 6, ['AX', 'AL', 'AH', 'BX', 'BL', 'BH', 'CX', 'CL', 'CH', 'DX', 'DH', 'DL', 'SI', 'DI', 'BP', 'SP', 'IP', 'CS', 'DS', 'SS', 'ES', 'ENERGY', 'FLAGS']))));
}

ExpressionParser.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser.ExpressionParser';
function pow_0(x_0, n){
  var res;
  res = 1;
  while (n > 0) {
    if (n % 2 != 0) {
      res *= x_0;
      n -= 1;
    }
    n = n / 2 | 0;
    n > 0 && (x_0 *= x_0);
  }
  return res;
}

pow_0.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser.pow';
function toInteger(c){
  if (c >= 48 && c <= 57)
    return c - 48;
  if (c >= 97 && c <= 102)
    return c - 97 + 10;
  if (c >= 65 && c <= 70)
    return c - 65 + 10;
  return 16;
}

toInteger.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser.toInteger';
defineClass(189, 1, {}, ExpressionParser);
_.index_ = 0;
_.m_stateAccess = null;
var m_registers = null;
var Lil_co_codeguru_corewars_1riscv_gui_ExpressionParser_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'ExpressionParser', 189);
function $checkZero(v){
  if (v == 0) {
    throw toJs(new Exception_1('Division by zero'));
  }
  return v;
}

$checkZero.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$BinaryOpNode.$checkZero';
function ExpressionParser$BinaryOpNode(l, r, _op){
  this.left = l;
  this.right = r;
  this.op = _op;
}

ExpressionParser$BinaryOpNode.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$BinaryOpNode.ExpressionParser$BinaryOpNode';
defineClass(190, 1, {}, ExpressionParser$BinaryOpNode);
_.eval_0 = function eval_0(){
  var ret, v1, v2;
  v1 = this.left.eval_0() & $intern_0;
  v2 = this.right.eval_0() & $intern_0;
  switch (this.op.ordinal) {
    case 1:
      ret = v1 | v2;
      break;
    case 2:
      ret = v1 ^ v2;
      break;
    case 3:
      ret = v1 & v2;
      break;
    case 4:
      ret = v1 << v2;
      break;
    case 5:
      ret = v1 >> v2;
      break;
    case 6:
      ret = v1 + v2;
      break;
    case 7:
      ret = v1 - v2;
      break;
    case 8:
      ret = v1 * v2;
      break;
    case 9:
      ret = v1 / $checkZero(v2) | 0;
      break;
    case 10:
      ret = v1 % $checkZero(v2);
      break;
    case 11:
      ret = pow_0(v1, v2);
      break;
    case 12:
      ret = v1 * pow_0(10, v2);
      break;
    default:throw toJs(new Exception_1('unexpected operator'));
  }
  return ret & $intern_0;
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$BinaryOpNode.eval';
var Lil_co_codeguru_corewars_1riscv_gui_ExpressionParser$BinaryOpNode_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'ExpressionParser/BinaryOpNode', 190);
function $compareTo(this$static, other){
  return this$static.ordinal - other.ordinal;
}

$compareTo.displayName = 'java.lang.Enum.$compareTo';
function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

Enum.displayName = 'java.lang.Enum.Enum';
function createValueOfMap(enumConstants){
  var result, value_0, value$index, value$max;
  result = {};
  for (value$index = 0 , value$max = enumConstants.length; value$index < value$max; ++value$index) {
    value_0 = enumConstants[value$index];
    result[':' + (value_0.name_0 != null?value_0.name_0:'' + value_0.ordinal)] = value_0;
  }
  return result;
}

createValueOfMap.displayName = 'java.lang.Enum.createValueOfMap';
function get0(map_0, name_0){
  return map_0[name_0];
}

get0.displayName = 'java.lang.Enum.get0';
function put0(map_0, name_0, value_0){
  map_0[name_0] = value_0;
}

put0.displayName = 'java.lang.Enum.put0';
function valueOf(map_0, name_0){
  var result;
  checkCriticalNotNull(name_0);
  result = map_0[':' + name_0];
  checkCriticalArgument_1(!!result, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 5, [name_0]));
  return result;
}

valueOf.displayName = 'java.lang.Enum.valueOf';
defineClass(44, 1, {3:1, 28:1, 44:1});
_.compareTo = function compareTo(other){
  return $compareTo(this, castTo(other, 44));
}
;
_.compareTo.displayName = 'java.lang.Enum.compareTo';
_.equals_0 = function equals_0(other){
  return this === other;
}
;
_.equals_0.displayName = 'java.lang.Enum.equals';
_.hashCode_0 = function hashCode_1(){
  return getHashCode(this);
}
;
_.hashCode_0.displayName = 'java.lang.Enum.hashCode';
_.toString_0 = function toString_6(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.toString_0.displayName = 'java.lang.Enum.toString';
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 44);
function $clinit_ExpressionParser$EOps(){
  $clinit_ExpressionParser$EOps = emptyMethod;
  OPERATOR_NULL = new ExpressionParser$EOps('OPERATOR_NULL', 0);
  OPERATOR_BITWISE_OR = new ExpressionParser$EOps('OPERATOR_BITWISE_OR', 1);
  OPERATOR_BITWISE_XOR = new ExpressionParser$EOps('OPERATOR_BITWISE_XOR', 2);
  OPERATOR_BITWISE_AND = new ExpressionParser$EOps('OPERATOR_BITWISE_AND', 3);
  OPERATOR_BITWISE_SHL = new ExpressionParser$EOps('OPERATOR_BITWISE_SHL', 4);
  OPERATOR_BITWISE_SHR = new ExpressionParser$EOps('OPERATOR_BITWISE_SHR', 5);
  OPERATOR_ADDITION = new ExpressionParser$EOps('OPERATOR_ADDITION', 6);
  OPERATOR_SUBTRACTION = new ExpressionParser$EOps('OPERATOR_SUBTRACTION', 7);
  OPERATOR_MULTIPLICATION = new ExpressionParser$EOps('OPERATOR_MULTIPLICATION', 8);
  OPERATOR_DIVISION = new ExpressionParser$EOps('OPERATOR_DIVISION', 9);
  OPERATOR_MODULO = new ExpressionParser$EOps('OPERATOR_MODULO', 10);
  OPERATOR_POWER = new ExpressionParser$EOps('OPERATOR_POWER', 11);
  OPERATOR_EXPONENT = new ExpressionParser$EOps('OPERATOR_EXPONENT', 12);
}

$clinit_ExpressionParser$EOps.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$EOps.$clinit';
function ExpressionParser$EOps(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

ExpressionParser$EOps.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$EOps.ExpressionParser$EOps';
function values_0(){
  $clinit_ExpressionParser$EOps();
  return stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars_1riscv_gui_ExpressionParser$EOps_2_classLit, 1), $intern_2, 20, 0, [OPERATOR_NULL, OPERATOR_BITWISE_OR, OPERATOR_BITWISE_XOR, OPERATOR_BITWISE_AND, OPERATOR_BITWISE_SHL, OPERATOR_BITWISE_SHR, OPERATOR_ADDITION, OPERATOR_SUBTRACTION, OPERATOR_MULTIPLICATION, OPERATOR_DIVISION, OPERATOR_MODULO, OPERATOR_POWER, OPERATOR_EXPONENT]);
}

values_0.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$EOps.values';
defineClass(20, 44, {20:1, 3:1, 28:1, 44:1}, ExpressionParser$EOps);
var OPERATOR_ADDITION, OPERATOR_BITWISE_AND, OPERATOR_BITWISE_OR, OPERATOR_BITWISE_SHL, OPERATOR_BITWISE_SHR, OPERATOR_BITWISE_XOR, OPERATOR_DIVISION, OPERATOR_EXPONENT, OPERATOR_MODULO, OPERATOR_MULTIPLICATION, OPERATOR_NULL, OPERATOR_POWER, OPERATOR_SUBTRACTION;
var Lil_co_codeguru_corewars_1riscv_gui_ExpressionParser$EOps_2_classLit = createForEnum('il.co.codeguru.corewars_riscv.gui', 'ExpressionParser/EOps', 20, values_0);
function ExpressionParser$IdentifierNode(_name){
  this.name_0 = _name;
}

ExpressionParser$IdentifierNode.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$IdentifierNode.ExpressionParser$IdentifierNode';
defineClass(194, 1, {}, ExpressionParser$IdentifierNode);
_.eval_0 = function eval_1(){
  return $getIdentifierValue(this.name_0) & $intern_0;
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$IdentifierNode.eval';
var Lil_co_codeguru_corewars_1riscv_gui_ExpressionParser$IdentifierNode_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'ExpressionParser/IdentifierNode', 194);
function ExpressionParser$MemAccessNode(_vseg, _vaddr, _sz, _state){
  this.vseg = _vseg;
  this.vaddr = _vaddr;
  this.sz = _sz;
  this.state = _state;
}

ExpressionParser$MemAccessNode.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$MemAccessNode.ExpressionParser$MemAccessNode';
defineClass(195, 1, {}, ExpressionParser$MemAccessNode);
_.eval_0 = function eval_2(){
  var addr;
  addr = this.vaddr.eval_0() & $intern_0;
  !!this.vseg && this.vseg.eval_0() & $intern_0;
  return $getMemory(this.state, addr, this.sz);
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$MemAccessNode.eval';
_.sz = 0;
var Lil_co_codeguru_corewars_1riscv_gui_ExpressionParser$MemAccessNode_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'ExpressionParser/MemAccessNode', 195);
function ExpressionParser$NumNode(_v){
  this.v = _v;
}

ExpressionParser$NumNode.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$NumNode.ExpressionParser$NumNode';
defineClass(69, 1, {}, ExpressionParser$NumNode);
_.eval_0 = function eval_3(){
  return this.v;
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$NumNode.eval';
_.v = 0;
var Lil_co_codeguru_corewars_1riscv_gui_ExpressionParser$NumNode_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'ExpressionParser/NumNode', 69);
function ExpressionParser$Operator(opr, prec, assoc){
  this.op = opr;
  this.precedence = prec;
  this.associativity = assoc;
}

ExpressionParser$Operator.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$Operator.ExpressionParser$Operator';
defineClass(21, 1, {}, ExpressionParser$Operator);
_.associativity = 0;
_.precedence = 0;
var Lil_co_codeguru_corewars_1riscv_gui_ExpressionParser$Operator_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'ExpressionParser/Operator', 21);
function ExpressionParser$OperatorValue(opr, val){
  this.op = opr;
  this.value_0 = val;
}

ExpressionParser$OperatorValue.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$OperatorValue.ExpressionParser$OperatorValue';
defineClass(45, 1, {45:1}, ExpressionParser$OperatorValue);
var Lil_co_codeguru_corewars_1riscv_gui_ExpressionParser$OperatorValue_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'ExpressionParser/OperatorValue', 45);
function ExpressionParser$RegisterNode(_name, _state){
  this.name_0 = _name;
  this.state = _state;
}

ExpressionParser$RegisterNode.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$RegisterNode.ExpressionParser$RegisterNode';
defineClass(193, 1, {}, ExpressionParser$RegisterNode);
_.eval_0 = function eval_4(){
  return $getRegisterValue(this.state, this.name_0) & $intern_0;
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$RegisterNode.eval';
var Lil_co_codeguru_corewars_1riscv_gui_ExpressionParser$RegisterNode_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'ExpressionParser/RegisterNode', 193);
function ExpressionParser$UnaryNegNode(c){
  this.child = c;
}

ExpressionParser$UnaryNegNode.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$UnaryNegNode.ExpressionParser$UnaryNegNode';
defineClass(191, 1, {}, ExpressionParser$UnaryNegNode);
_.eval_0 = function eval_5(){
  return -(this.child.eval_0() & $intern_0) & $intern_0;
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$UnaryNegNode.eval';
var Lil_co_codeguru_corewars_1riscv_gui_ExpressionParser$UnaryNegNode_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'ExpressionParser/UnaryNegNode', 191);
function ExpressionParser$UnaryNotNode(c){
  this.child = c;
}

ExpressionParser$UnaryNotNode.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$UnaryNotNode.ExpressionParser$UnaryNotNode';
defineClass(192, 1, {}, ExpressionParser$UnaryNotNode);
_.eval_0 = function eval_6(){
  return ~(this.child.eval_0() & $intern_0) & $intern_0;
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars_riscv.gui.ExpressionParser$UnaryNotNode.eval';
var Lil_co_codeguru_corewars_1riscv_gui_ExpressionParser$UnaryNotNode_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'ExpressionParser/UnaryNotNode', 192);
function $addCheck(this$static, startAddressStr, len, name_0){
  var a, a$iterator, r, startAddress;
  try {
    startAddress = __parseAndValidateInt(startAddressStr, 16);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 16)) {
      console.error('Player ' + name_0 + ' fixed start address is not a valid hex number');
      return -2;
    }
     else 
      throw toJs($e0);
  }
  if (startAddress < 0 || startAddress > $intern_0) {
    console.error('Player ' + name_0 + ' fixed start address is out of 16 bit number range');
    return -2;
  }
  if (startAddress > $intern_0 - len + 1) {
    console.error('Player ' + name_0 + ' fixed start address does not leave enough space for code (' + ('' + len) + ' bytes)');
    return -2;
  }
  r = new FixedLoadAddressChecker$AddressRange(name_0, startAddress, startAddress + len - 1);
  for (a$iterator = new ArrayList$1(this$static.fixedRanges); a$iterator.i < a$iterator.this$01.array.length;) {
    a = castTo($next_4(a$iterator), 72);
    if (a.start_0 <= r.end_0 && r.start_0 <= a.end_0) {
      error_0('Player ' + name_0 + ' fixed start address overlaps with that of player ' + a.name_0);
      return -2;
    }
  }
  $add_2(this$static.fixedRanges, r);
  return startAddress;
}

$addCheck.displayName = 'il.co.codeguru.corewars_riscv.gui.FixedLoadAddressChecker.$addCheck';
function $checkOverlap(this$static, startAddress, len){
  var a, a$iterator, r;
  r = new FixedLoadAddressChecker$AddressRange(null, startAddress, startAddress + len - 1);
  for (a$iterator = new ArrayList$1(this$static.fixedRanges); a$iterator.i < a$iterator.this$01.array.length;) {
    a = castTo($next_4(a$iterator), 72);
    if (a.start_0 <= r.end_0 && r.start_0 <= a.end_0) {
      return false;
    }
  }
  return true;
}

$checkOverlap.displayName = 'il.co.codeguru.corewars_riscv.gui.FixedLoadAddressChecker.$checkOverlap';
function FixedLoadAddressChecker(capacity){
  this.fixedRanges = new ArrayList_0(capacity);
}

FixedLoadAddressChecker.displayName = 'il.co.codeguru.corewars_riscv.gui.FixedLoadAddressChecker.FixedLoadAddressChecker';
defineClass(285, 1, {}, FixedLoadAddressChecker);
var Lil_co_codeguru_corewars_1riscv_gui_FixedLoadAddressChecker_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'FixedLoadAddressChecker', 285);
function FixedLoadAddressChecker$AddressRange(_name, _start, _end){
  this.name_0 = _name;
  this.start_0 = _start;
  this.end_0 = _end;
}

FixedLoadAddressChecker$AddressRange.displayName = 'il.co.codeguru.corewars_riscv.gui.FixedLoadAddressChecker$AddressRange.FixedLoadAddressChecker$AddressRange';
defineClass(72, 1, {72:1}, FixedLoadAddressChecker$AddressRange);
_.end_0 = 0;
_.start_0 = 0;
var Lil_co_codeguru_corewars_1riscv_gui_FixedLoadAddressChecker$AddressRange_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'FixedLoadAddressChecker/AddressRange', 72);
function $$init_10(this$static){
  this$static.m_currentRegion = new MemoryRegion;
}

$$init_10.displayName = 'il.co.codeguru.corewars_riscv.gui.MemRegionView.$$init';
function $initMemRegion(this$static, region, Memory, force){
  var addr, df, e, sb;
  if (!force && $equals_1(this$static.m_currentRegion, region))
    return;
  df = ($clinit_DomGlobal() , document_0).createDocumentFragment();
  for (addr = region.m_start; addr <= region.m_end; addr += this$static.m_step) {
    e = document_0.createElement('div');
    e.setAttribute('id', this$static.m_innerPrefix + ('' + addr));
    sb = hex5(addr) + '   ' + hex2(($loadByte(Memory, addr) & 255) << 16 >> 16) + '\u202F' + hex2(($loadByte(Memory, addr + 1) & 255) << 16 >> 16);
    e.appendChild(document_0.createTextNode(sb));
    df.appendChild(e);
  }
  this$static.m_htmlList.innerHTML = '';
  this$static.m_htmlList.appendChild(df);
  this$static.m_currentRegion.m_start = region.m_start;
  this$static.m_currentRegion.m_end = region.m_end;
}

$initMemRegion.displayName = 'il.co.codeguru.corewars_riscv.gui.MemRegionView.$initMemRegion';
function MemRegionView(id_0, innerPrefix){
  this.m_currentRegion = new MemoryRegion;
  this.m_htmlList = castToNative(($clinit_DomGlobal() , document_0).getElementById(id_0), $wnd.HTMLElement);
  this.m_innerPrefix = innerPrefix;
  this.m_step = 2;
}

MemRegionView.displayName = 'il.co.codeguru.corewars_riscv.gui.MemRegionView.MemRegionView';
defineClass(112, 1, $intern_20, MemRegionView);
_.onMemoryWrite = function onMemoryWrite_0(address, value_0){
  var elem, lineaddr, newtext, offsetInLine, text_0;
  if (address < this.m_currentRegion.m_start || address > this.m_currentRegion.m_end)
    return;
  lineaddr = (address / this.m_step | 0) * this.m_step;
  offsetInLine = address % this.m_step;
  elem = castToNative(($clinit_DomGlobal() , document_0).getElementById(this.m_innerPrefix + ('' + lineaddr)), $wnd.HTMLElement);
  text_0 = elem.innerText;
  offsetInLine = 8 + offsetInLine * 3;
  newtext = text_0.substr(0, offsetInLine) + ('' + hex2((value_0 & 255) << 16 >> 16)) + text_0.substr(offsetInLine + 2);
  elem.innerText = newtext;
}
;
_.onMemoryWrite.displayName = 'il.co.codeguru.corewars_riscv.gui.MemRegionView.onMemoryWrite';
_.onWriteState = function onWriteState_0(state){
}
;
_.onWriteState.displayName = 'il.co.codeguru.corewars_riscv.gui.MemRegionView.onWriteState';
_.m_step = 0;
var Lil_co_codeguru_corewars_1riscv_gui_MemRegionView_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'MemRegionView', 112);
function $$init_11(this$static){
  this$static.m_players = new ArrayList;
}

$$init_11.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.$$init';
function $addPlayerPanel(){
  $wnd.addPlayersPanel();
}

$addPlayerPanel.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.$addPlayerPanel';
function $changedWType(label_0, v){
  $wnd.changedWType(label_0, v, true);
}

$changedWType.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.$changedWType';
function $checkPlayersReady(this$static){
  var c, ci, countEnabled, p, p$iterator;
  if (this$static.m_players.array.length == 0) {
    console.error('No players added');
    return false;
  }
  countEnabled = 0;
  for (p$iterator = new ArrayList$1(this$static.m_players); p$iterator.i < p$iterator.this$01.array.length;) {
    p = castTo($next_4(p$iterator), 24);
    if (!p.isEnabled)
      continue;
    ++countEnabled;
    if (p.wtype == ($clinit_PlayersPanel$EWarriorType() , TWO_IDENTICAL)) {
      p.code_0[1].bin = p.code_0[0].bin;
      p.code_0[1].lines = p.code_0[0].lines;
      p.code_0[1].lastCompileOk = p.code_0[0].lastCompileOk;
    }
    for (ci = 0; ci < (p.wtype == SINGLE?1:2); ++ci) {
      c = p.code_0[ci];
      if (!c.lastCompileOk) {
        error_0('Errors in code ' + c.name_0 + ' of player ' + p.title_0);
        return false;
      }
      if (c.bin == null || c.bin.length == 0) {
        error_0('No code in ' + c.name_0 + ' of player ' + p.title_0);
        return false;
      }
    }
  }
  if (countEnabled == 0) {
    console.error('No enabled players');
    return false;
  }
  return true;
}

$checkPlayersReady.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.$checkPlayersReady';
function $demo_like_original(this$static){
  $wnd.addPlayersPanel();
  this$static.m_inEditor = castTo($get_4(this$static.m_players, 1), 24).code_0[0];
  this$static.m_inEditor.asmText = still;
  this$static.m_inEditor.player.wtype = ($clinit_PlayersPanel$EWarriorType() , SINGLE);
  $updateTitle(this$static, 'Still');
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, this$static);
  this$static.m_inEditor = castTo($get_4(this$static.m_players, 2), 24).code_0[0];
  this$static.m_inEditor.asmText = blindWarrior;
  this$static.m_inEditor.player.wtype = SINGLE;
  $updateTitle(this$static, 'Warrior');
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, this$static);
  this$static.m_inEditor = castTo($get_4(this$static.m_players, 0), 24).code_0[0];
  $updateTitle(this$static, 'Ranger');
  this$static.m_inEditor.asmText = blindRanger;
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, this$static);
  this$static.m_inEditor = castTo($get_4(this$static.m_players, 0), 24).code_0[1];
  this$static.m_inEditor.asmText = blindRanger;
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, this$static);
  this$static.m_inEditor.player.wtype = TWO_DIFFERENT;
  $changedWType(this$static.m_inEditor.player.label_0, 'TWO_DIFFERENT');
}

$demo_like_original.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.$demo_like_original';
function $exportMethods_2(this$static){
  var that = this$static;
  $wnd.j_srcSelectionChanged = $entry(function(s, i){
    that.j_srcSelectionChanged_0(s, i);
  }
  );
  $wnd.j_addPlayer = $entry(function(a, b){
    that.j_addPlayer_0(a, b);
  }
  );
  $wnd.j_removePlayer = $entry(function(s){
    that.j_removePlayer_0(s);
  }
  );
  $wnd.j_changedWType = $entry(function(a, b){
    that.j_changedWType_0(a, b);
  }
  );
  $wnd.j_demoDebugPlayers = $entry(function(){
    that.j_demoDebugPlayers_0();
  }
  );
  $wnd.j_loadAddrChanged = $entry(function(s, b){
    that.j_loadAddrChanged_0(s, b);
  }
  );
  $wnd.j_loadBinary = $entry(function(b){
    that.j_loadBinary_0(b);
  }
  );
}

$exportMethods_2.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.$exportMethods';
function $findCode(this$static, label_0){
  var ci, pi;
  pi = $findPlayer(this$static, $substring_1(label_0, 0, label_0.length - 1));
  if (!pi)
    return null;
  ci = $charAt(label_0, label_0.length - 1) - 48;
  return pi.code_0[ci];
}

$findCode.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.$findCode';
function $findPlayer(this$static, label_0){
  var p, p$iterator;
  for (p$iterator = new ArrayList$1(this$static.m_players); p$iterator.i < p$iterator.this$01.array.length;) {
    p = castTo($next_4(p$iterator), 24);
    if ($equals_4(p.label_0, label_0))
      return p;
  }
  return null;
}

$findPlayer.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.$findPlayer';
function $getFiles(this$static, prefix){
  var c, count, i, p, p$iterator, p$iterator0;
  count = 0;
  for (p$iterator0 = new ArrayList$1(this$static.m_players); p$iterator0.i < p$iterator0.this$01.array.length;) {
    p = castTo($next_4(p$iterator0), 24);
    $charAt(p.label_0, 0) == prefix && (count += p.wtype == ($clinit_PlayersPanel$EWarriorType() , SINGLE)?1:2);
  }
  i = 0;
  c = initUnidimensionalArray(Lil_co_codeguru_corewars_1riscv_gui_PlayersPanel$Code_2_classLit, $intern_18, 38, count, 0, 1);
  for (p$iterator = new ArrayList$1(this$static.m_players); p$iterator.i < p$iterator.this$01.array.length;) {
    p = castTo($next_4(p$iterator), 24);
    if ($charAt(p.label_0, 0) != prefix)
      continue;
    c[i++] = p.code_0[0];
    p.wtype != ($clinit_PlayersPanel$EWarriorType() , SINGLE) && (c[i++] = p.code_0[1]);
  }
  return c;
}

$getFiles.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.$getFiles';
function $j_srcSelectionChanged(this$static, playerLabel, num){
  var p;
  p = $findPlayer(this$static, playerLabel);
  this$static.m_inEditor = null;
  this$static.m_inEditor = p.code_0[num - 1];
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, null);
  $setSelectedPlayer(this$static.m_mainWnd.battleFrame.cpuframe, this$static.m_inEditor.label_0, this$static.m_isDebugMode);
  $updateLoadAddr(this$static.m_inEditor.startAddress, this$static.m_inEditor.startAddrRandom);
  $srcSelectionChanged(this$static.m_mainWnd, this$static.m_inEditor.label_0);
}

$j_srcSelectionChanged.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.$j_srcSelectionChanged';
function $reWriteButtonsLabels(p){
  var vu, vu1, vu2, vup;
  vu = $replace(p.title_0, 32, 95);
  switch (p.wtype.ordinal) {
    case 0:
      p.code_0[0].name_0 = vu;
      $charAt(p.label_0, 0) != 122 && (castToNative(($clinit_DomGlobal() , document_0).getElementById('sel_code_lbl_w1_' + p.label_0), $wnd.HTMLElement).innerHTML = vu);
      break;
    case 1:
      vup = vu + '1,2';
      p.code_0[0].name_0 = vup;
      castToNative(($clinit_DomGlobal() , document_0).getElementById('sel_code_lbl_w1_' + p.label_0), $wnd.HTMLElement).innerHTML = vup;
      break;
    case 2:
      vu1 = vu + '1';
      vu2 = vu + '2';
      p.code_0[0].name_0 = vu1;
      p.code_0[1].name_0 = vu2;
      castToNative(($clinit_DomGlobal() , document_0).getElementById('sel_code_lbl_w1_' + p.label_0), $wnd.HTMLElement).innerHTML = vu1;
      castToNative(document_0.getElementById('sel_code_lbl_w2_' + p.label_0), $wnd.HTMLElement).innerHTML = vu2;
  }
}

$reWriteButtonsLabels.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.$reWriteButtonsLabels';
function $setDebugMode_0(this$static, v){
  this$static.m_isDebugMode = v;
}

$setDebugMode_0.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.$setDebugMode';
function $setPressedCodeBut(label_0, num){
  var idd = 'sel_code_w' + num + '_' + label_0;
  console.log('~~' + idd);
  $wnd.document.getElementById(idd).checked = true;
}

$setPressedCodeBut.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.$setPressedCodeBut';
function $updateAsmResult(this$static, compileOk, binbuffer, lines){
  if (!this$static.m_inEditor)
    return;
  this$static.m_inEditor.bin = binbuffer;
  this$static.m_inEditor.lastCompileOk = compileOk;
  this$static.m_inEditor.lines = lines;
}

$updateAsmResult.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.$updateAsmResult';
function $updateLoadAddr(value_0, isRand){
  $wnd.updateLoadAddr(value_0, isRand);
}

$updateLoadAddr.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.$updateLoadAddr';
function $updateText(this$static, text_0){
  if (!this$static.m_inEditor)
    return;
  this$static.m_inEditor.asmText = text_0;
}

$updateText.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.$updateText';
function $updateTitle(this$static, v){
  var pt;
  if (!this$static.m_inEditor)
    return;
  this$static.m_inEditor.player.title_0 = v;
  pt = this$static.m_inEditor.player.label_0;
  castToNative(($clinit_DomGlobal() , document_0).getElementById('player_name_lbl_' + pt), $wnd.HTMLElement).innerHTML = v;
  $reWriteButtonsLabels(this$static.m_inEditor.player);
}

$updateTitle.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.$updateTitle';
function PlayersPanel(mainWnd){
  this.m_players = new ArrayList;
  this.m_mainWnd = mainWnd;
  $exportMethods_2(this);
}

PlayersPanel.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.PlayersPanel';
defineClass(171, 1, {}, PlayersPanel);
_.j_addPlayer_0 = function j_addPlayer(label_0, title_0){
  var p, tu;
  if (label_0 == null)
    return;
  if ($findPlayer(this, label_0))
    throw toJs(new RuntimeException_1('label already taken ' + label_0));
  p = new PlayersPanel$PlayerInfo(label_0, title_0);
  tu = $replace(title_0, 32, 95);
  p.code_0[0].name_0 = tu + '1';
  p.code_0[1].name_0 = tu + '2';
  $add_2(this.m_players, p);
  log_0('Added ' + label_0 + ' ' + this.m_players.array.length);
}
;
_.j_addPlayer_0.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.j_addPlayer';
_.j_changedWType_0 = function j_changedWType(label_0, v){
  var p;
  p = $findPlayer(this, label_0);
  $setWType(p, ($clinit_PlayersPanel$EWarriorType() , castTo(valueOf(($clinit_PlayersPanel$EWarriorType$Map() , $MAP), v), 55)));
  $reWriteButtonsLabels(p);
}
;
_.j_changedWType_0.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.j_changedWType';
_.j_demoDebugPlayers_0 = function j_demoDebugPlayers(){
  $wnd.addPlayersPanel();
  this.m_inEditor = castTo($get_4(this.m_players, 1), 24).code_0[0];
  this.m_inEditor.asmText = still;
  this.m_inEditor.player.wtype = ($clinit_PlayersPanel$EWarriorType() , SINGLE);
  $updateTitle(this, 'Still');
  $playerSelectionChanged(this.m_mainWnd.m_codeEditor, this.m_inEditor, this);
  this.m_inEditor = castTo($get_4(this.m_players, 2), 24).code_0[0];
  this.m_inEditor.asmText = blindWarrior;
  this.m_inEditor.player.wtype = SINGLE;
  $updateTitle(this, 'Warrior');
  $playerSelectionChanged(this.m_mainWnd.m_codeEditor, this.m_inEditor, this);
  this.m_inEditor = castTo($get_4(this.m_players, 0), 24).code_0[0];
  $updateTitle(this, 'Ranger');
  this.m_inEditor.asmText = blindRanger;
  $playerSelectionChanged(this.m_mainWnd.m_codeEditor, this.m_inEditor, this);
  this.m_inEditor = castTo($get_4(this.m_players, 0), 24).code_0[1];
  this.m_inEditor.asmText = blindRanger;
  $playerSelectionChanged(this.m_mainWnd.m_codeEditor, this.m_inEditor, this);
  this.m_inEditor.player.wtype = TWO_DIFFERENT;
  $changedWType(this.m_inEditor.player.label_0, 'TWO_DIFFERENT');
}
;
_.j_demoDebugPlayers_0.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.j_demoDebugPlayers';
_.j_loadAddrChanged_0 = function j_loadAddrChanged(value_0, isRand){
  if (!this.m_inEditor)
    return;
  this.m_inEditor.startAddrRandom = isRand;
  this.m_inEditor.startAddress = value_0;
}
;
_.j_loadAddrChanged_0.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.j_loadAddrChanged';
_.j_loadBinary_0 = function j_loadBinary(buf){
  var arr, ba, i, len;
  len = buf.byteLength;
  if (len == 0) {
    console.error('loaded file is empty, ignoring');
    return;
  }
  arr = new Int8Array(buf);
  ba = initUnidimensionalArray(B_classLit, $intern_16, 11, len, 15, 1);
  for (i = 0; i < len; ++i)
    ba[i] = arr[i];
  this.m_inEditor.bin = ba;
  this.m_inEditor.asmText = '';
  this.m_inEditor.lastCompileOk = true;
  this.m_inEditor.breakpoints.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
  this.m_inEditor.asmText = $loadedNewBinary(this.m_mainWnd.m_codeEditor, this.m_inEditor.bin, this.m_inEditor.breakpoints, this);
}
;
_.j_loadBinary_0.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.j_loadBinary';
_.j_removePlayer_0 = function j_removePlayer(label_0){
  var p, p$iterator, idd;
  for (p$iterator = new ArrayList$1(this.m_players); p$iterator.i < p$iterator.this$01.array.length;) {
    p = castTo($next_4(p$iterator), 24);
    if ($equals_4(label_0, p.label_0)) {
      $remove_2(this.m_players, p);
      log_0('Removed ' + label_0 + ' ' + this.m_players.array.length);
      if (this.m_inEditor.player == p) {
        idd = 'sel_code_w1_' + castTo($get_4(this.m_players, 0), 24).label_0;
        console.log('~~' + idd);
        $wnd.document.getElementById(idd).checked = true;
        $j_srcSelectionChanged(this, castTo($get_4(this.m_players, 0), 24).label_0, 1);
      }
      return;
    }
  }
  throw toJs(new RuntimeException_1('player not found' + label_0));
}
;
_.j_removePlayer_0.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.j_removePlayer';
_.j_srcSelectionChanged_0 = function j_srcSelectionChanged(playerLabel, num){
  $j_srcSelectionChanged(this, playerLabel, num);
}
;
_.j_srcSelectionChanged_0.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel.j_srcSelectionChanged';
_.m_inEditor = null;
_.m_isDebugMode = false;
var blindRanger = '# Technique - Blind Ranger\nloop:\nadd x2, x2, 750\nadd x3, x1, x2\nsw x2, 32(x3)\nj loop\n', blindWarrior = '# Technique - Blind Knight\nloop:\nadd x2, x2, 4\nadd x3, x1, x2\nsw x2, 32(x3)\nj loop\n', still = '# Technieque - Stand Still\nj x1\n';
var Lil_co_codeguru_corewars_1riscv_gui_PlayersPanel_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'PlayersPanel', 171);
function PlayersPanel$Breakpoint(_lineNum){
  this.lineNum = _lineNum;
}

PlayersPanel$Breakpoint.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel$Breakpoint.PlayersPanel$Breakpoint';
defineClass(31, 1, {31:1}, PlayersPanel$Breakpoint);
_.lineNum = 0;
var Lil_co_codeguru_corewars_1riscv_gui_PlayersPanel$Breakpoint_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'PlayersPanel/Breakpoint', 31);
function $$init_12(this$static){
}

$$init_12.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel$Code.$$init';
function PlayersPanel$Code(p, idx){
  this.player = p;
  this.label_0 = p.label_0 + idx;
  this.breakpoints = new ArrayList;
}

PlayersPanel$Code.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel$Code.PlayersPanel$Code';
defineClass(38, 1, {38:1}, PlayersPanel$Code);
_.asmText = '';
_.bin = null;
_.lastCompileOk = true;
_.startAddrRandom = true;
_.startAddress = 'A000';
var Lil_co_codeguru_corewars_1riscv_gui_PlayersPanel$Code_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'PlayersPanel/Code', 38);
function $clinit_PlayersPanel$EWarriorType(){
  $clinit_PlayersPanel$EWarriorType = emptyMethod;
  SINGLE = new PlayersPanel$EWarriorType('SINGLE', 0);
  TWO_IDENTICAL = new PlayersPanel$EWarriorType('TWO_IDENTICAL', 1);
  TWO_DIFFERENT = new PlayersPanel$EWarriorType('TWO_DIFFERENT', 2);
}

$clinit_PlayersPanel$EWarriorType.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel$EWarriorType.$clinit';
function PlayersPanel$EWarriorType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

PlayersPanel$EWarriorType.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel$EWarriorType.PlayersPanel$EWarriorType';
function values_1(){
  $clinit_PlayersPanel$EWarriorType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars_1riscv_gui_PlayersPanel$EWarriorType_2_classLit, 1), $intern_2, 55, 0, [SINGLE, TWO_IDENTICAL, TWO_DIFFERENT]);
}

values_1.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel$EWarriorType.values';
defineClass(55, 44, {55:1, 3:1, 28:1, 44:1}, PlayersPanel$EWarriorType);
var SINGLE, TWO_DIFFERENT, TWO_IDENTICAL;
var Lil_co_codeguru_corewars_1riscv_gui_PlayersPanel$EWarriorType_2_classLit = createForEnum('il.co.codeguru.corewars_riscv.gui', 'PlayersPanel/EWarriorType', 55, values_1);
function $clinit_PlayersPanel$EWarriorType$Map(){
  $clinit_PlayersPanel$EWarriorType$Map = emptyMethod;
  $MAP = createValueOfMap(($clinit_PlayersPanel$EWarriorType() , stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars_1riscv_gui_PlayersPanel$EWarriorType_2_classLit, 1), $intern_2, 55, 0, [SINGLE, TWO_IDENTICAL, TWO_DIFFERENT])));
}

$clinit_PlayersPanel$EWarriorType$Map.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel$EWarriorType$Map.$clinit';
var $MAP;
function $$init_13(this$static){
  this$static.code_0 = initUnidimensionalArray(Lil_co_codeguru_corewars_1riscv_gui_PlayersPanel$Code_2_classLit, $intern_18, 38, 2, 0, 1);
  this$static.wtype = ($clinit_PlayersPanel$EWarriorType() , SINGLE);
}

$$init_13.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel$PlayerInfo.$$init';
function $setWType(this$static, v){
  this$static.wtype = v;
}

$setWType.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel$PlayerInfo.$setWType';
function PlayersPanel$PlayerInfo(lbl, ttl){
  this.code_0 = initUnidimensionalArray(Lil_co_codeguru_corewars_1riscv_gui_PlayersPanel$Code_2_classLit, $intern_18, 38, 2, 0, 1);
  this.wtype = ($clinit_PlayersPanel$EWarriorType() , SINGLE);
  this.label_0 = lbl;
  this.title_0 = ttl;
  this.code_0[0] = new PlayersPanel$Code(this, 0);
  this.code_0[1] = new PlayersPanel$Code(this, 1);
}

PlayersPanel$PlayerInfo.displayName = 'il.co.codeguru.corewars_riscv.gui.PlayersPanel$PlayerInfo.PlayersPanel$PlayerInfo';
defineClass(24, 1, {24:1}, PlayersPanel$PlayerInfo);
_.isEnabled = true;
var Lil_co_codeguru_corewars_1riscv_gui_PlayersPanel$PlayerInfo_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'PlayersPanel/PlayerInfo', 24);
function $$init_14(this$static){
}

$$init_14.displayName = 'il.co.codeguru.corewars_riscv.gui.RegisterField.$$init';
function $editChanged(this$static){
  var setok;
  setok = $regChanged_callback(this$static.m_frame, this$static.m_name, this$static.textField.value);
  if (setok < -999999) {
    this$static.textField.classList.add('dbg_reg_err');
    switch (setok) {
      case -1000000:
        this$static.textField.title = 'Failed to parse hex number';
        break;
      case -2000000:
        this$static.textField.title = 'Failed to parse decimal number';
        break;
      case -3000000:
        this$static.textField.title = 'Out of range';
    }
    this$static.m_lastInputOk = false;
  }
   else {
    this$static.textField.classList.remove('dbg_reg_err');
    this$static.textField.removeAttribute('title');
    this$static.m_lastInputOk = true;
    this$static.m_lastValue = setok << 16 >> 16;
  }
}

$editChanged.displayName = 'il.co.codeguru.corewars_riscv.gui.RegisterField.$editChanged';
function $setValue(this$static, value_0){
  this$static.m_lastValue = value_0;
  this$static.m_base == 16?(this$static.textField.value = hex_0(value_0)):(this$static.textField.value = '' + (value_0 & $intern_0));
}

$setValue.displayName = 'il.co.codeguru.corewars_riscv.gui.RegisterField.$setValue';
function RegisterField(name_0, frame_0){
  var ename;
  this.m_frame = frame_0;
  this.m_name = name_0;
  ename = 'reg_' + name_0;
  this.textField = castToNative(($clinit_DomGlobal() , document_0).getElementById(ename), $wnd.HTMLInputElement);
  this.textField == null && (console.error('Not found register ' + name_0) , undefined);
  this.textField.addEventListener('input', new RegisterField$lambda$0$Type(this));
}

RegisterField.displayName = 'il.co.codeguru.corewars_riscv.gui.RegisterField.RegisterField';
defineClass(80, 1, {80:1}, RegisterField);
_.m_base = 16;
_.m_lastInputOk = true;
_.m_lastValue = 0;
var Lil_co_codeguru_corewars_1riscv_gui_RegisterField_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'RegisterField', 80);
function RegisterField$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

RegisterField$lambda$0$Type.displayName = 'il.co.codeguru.corewars_riscv.gui.RegisterField$lambda$0$Type.RegisterField$lambda$0$Type';
defineClass(217, 1, {}, RegisterField$lambda$0$Type);
_.handleEvent = function handleEvent_1(arg0){
  $editChanged(this.$$outer_0);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars_riscv.gui.RegisterField$lambda$0$Type.handleEvent';
var Lil_co_codeguru_corewars_1riscv_gui_RegisterField$lambda$0$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'RegisterField/lambda$0$Type', 217);
function getCheckboxValue(selector){
  return $wnd.$(selector).prop('checked');
}

getCheckboxValue.displayName = 'il.co.codeguru.corewars_riscv.gui.SettingsPanel.getCheckboxValue';
function $addMessage(this$static, round_0, message){
  $append(this$static.messagesArea, '[' + round_0 + '] ' + message + '\n');
  $scrollToBottom(this$static.messagesArea);
}

$addMessage.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame.$addMessage';
function $lambda$0_1(this$static, speedSliderVal_1){
  var s;
  s = __parseAndValidateInt(castToNative(this$static.speedSlider.m_element, $wnd.HTMLInputElement).value, 10);
  s > 100 && (s = round_int($wnd.Math.pow(s - 80, 1.5)));
  speedSliderVal_1.innerHTML = '' + s;
  $setSpeed(this$static.competition, s);
}

$lambda$0_1.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame.$lambda$0';
function $lambda$1_0(this$static, competition_1, mainWnd_2){
  if (!competition_1.currentWar) {
    if (competition_1.globalPause) {
      competition_1.globalPause = false;
      $setText(this$static.btnPause, 'Pause');
      (!instance && (instance = $isNativelySupported()?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance).requestAnimationFrame_0(mainWnd_2.animCallback, null);
      $setEnabled(this$static.btnSingleRound, false);
    }
     else {
      competition_1.globalPause = true;
      $setText(this$static.btnPause, 'Resume');
      !!competition_1.currentWar && $setEnabled(this$static.btnSingleRound, true);
    }
  }
   else {
    if (competition_1.currentWar.isPaused) {
      $resume(competition_1.currentWar);
      $setText(this$static.btnPause, 'Pause');
      (!instance && (instance = $isNativelySupported()?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance).requestAnimationFrame_0(mainWnd_2.animCallback, null);
      $setEnabled(this$static.btnSingleRound, false);
    }
     else {
      competition_1.currentWar.isPaused = true;
      $setText(this$static.btnPause, 'Resume');
      $setEnabled(this$static.btnSingleRound, true);
    }
  }
}

$lambda$1_0.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame.$lambda$1';
function $onEndRound(this$static){
  var currentWar, i, ip, state;
  if (!this$static.mainWnd.m_isBattleShown)
    return;
  $deletePointers(this$static.warCanvas);
  currentWar = this$static.competition.currentWar;
  for (i = 0; i < currentWar.m_numWarriors; i++)
    if (currentWar.m_warriors[i].m_isAlive) {
      state = currentWar.m_warriors[i].m_state;
      ip = state.pc;
      $paintPointer(this$static.warCanvas, ip & $intern_0, i << 24 >> 24);
    }
}

$onEndRound.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame.$onEndRound';
function WarFrame(competition, mainWnd){
  var speedSliderVal;
  JFrame.call(this);
  this.competition = competition;
  this.mainWnd = mainWnd;
  new JPanel;
  new JPanel_0;
  new JPanel_0;
  $clinit_Color();
  new JPanel;
  new Color(169, 154, 133);
  this.warCanvas = new Canvas_0;
  new JPanel_0;
  this.messagesArea = new JTextArea;
  new JScrollPane;
  new JPanel;
  new JLabel_0;
  speedSliderVal = castToNative(($clinit_DomGlobal() , document_0).getElementById('speedSliderVal'), $wnd.HTMLElement);
  this.speedSlider = new JSlider;
  $addActionListener(this.speedSlider, new WarFrame$lambda$0$Type(this, speedSliderVal));
  this.nRoundNumber = 0;
  new JLabel_0;
  this.cpuframe = new CpuFrame(competition, this.mainWnd);
  $addCompetitionEventListener(competition, this.cpuframe);
  $add_0(competition.competitionEventCaster, this);
  this.btnPause = new JButton('btnPause');
  $setEnabled(this.btnPause, false);
  $addActionListener(this.btnPause, new WarFrame$lambda$1$Type(this, competition, mainWnd));
  this.btnSingleRound = new JButton('btnSingleRound');
  $setEnabled(this.btnSingleRound, false);
  $addActionListener(this.btnSingleRound, new WarFrame$lambda$2$Type(competition, mainWnd));
  new JPanel_0;
  new JList;
  new Dimension(200, 0);
  new WarFrame$NameCellRenderer;
  new Color(169, 154, 133);
  new JPanel;
  new JPanel;
  new JPanel;
}

WarFrame.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame.WarFrame';
function lambda$2(competition_0, mainWnd_1){
  if (!competition_0.currentWar) {
    console.log('no war');
    return;
  }
  $runSingleRound(competition_0.currentWar);
  (!instance && (instance = $isNativelySupported()?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance).requestAnimationFrame_0(mainWnd_1.animCallback, null);
}

lambda$2.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame.lambda$2';
defineClass(181, 110, $intern_19, WarFrame);
_.onCompetitionEnd = function onCompetitionEnd_1(){
  $setEnabled(this.btnPause, false);
}
;
_.onCompetitionEnd.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame.onCompetitionEnd';
_.onCompetitionStart = function onCompetitionStart_1(){
  $setEnabled(this.btnPause, true);
}
;
_.onCompetitionStart.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame.onCompetitionStart';
_.onEndRound = function onEndRound_1(){
  $onEndRound(this);
}
;
_.onEndRound.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame.onEndRound';
_.onMemoryWrite = function onMemoryWrite_1(address, value_0){
  if (!this.mainWnd.m_isBattleShown)
    return;
  address >= 0 && address < $intern_21 && $paintPixel(this.warCanvas, address & $intern_0, $getCurrentWarrior_0(this.competition) << 24 >> 24, value_0);
}
;
_.onMemoryWrite.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame.onMemoryWrite';
_.onNoneAlive = function onNoneAlive_1(){
  $addMessage(this, this.nRoundNumber, 'No players left alive');
  $setEnabled(this.btnSingleRound, false);
  $setEnabled(this.btnPause, false);
}
;
_.onNoneAlive.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame.onNoneAlive';
_.onPaused = function onPaused_1(){
  $setText(this.btnPause, 'Resume');
  $setEnabled(this.btnSingleRound, true);
}
;
_.onPaused.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame.onPaused';
_.onRound = function onRound_1(round_0){
  if (!this.mainWnd.m_isBattleShown)
    return;
  this.nRoundNumber = round_0;
  $setEnabled(this.btnPause, true);
}
;
_.onRound.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame.onRound';
_.onWarEnd = function onWarEnd_1(reason, winners, inDebug){
  if (!inDebug)
    return;
  switch (reason) {
    case 0:
      $addMessage(this, this.nRoundNumber, 'Session over: The winner is ' + winners + '!');
      break;
    case 1:
      $addMessage(this, this.nRoundNumber, 'Maximum round reached: The winners are ' + winners + '!');
      break;
    case 2:
      $addMessage(this, this.nRoundNumber, 'Session aborted: The winners are ' + winners + '!');
      break;
    default:throw toJs(new RuntimeException);
  }
  $setText(this.btnPause, 'Resume');
  $setEnabled(this.btnSingleRound, true);
  this.warCanvas.m_indebug = false;
}
;
_.onWarEnd.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame.onWarEnd';
_.onWarPreStartClear = function onWarPreStartClear_1(){
  $clear(this.warCanvas);
  $initStartWar(this.warCanvas, this.competition.currentWar);
}
;
_.onWarPreStartClear.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame.onWarPreStartClear';
_.onWarStart = function onWarStart_1(){
  $append(this.messagesArea, '=== Session started ===\n');
  $scrollToBottom(this.messagesArea);
  if (this.competition.currentWar.isPaused) {
    $setText(this.btnPause, 'Resume');
    $setEnabled(this.btnSingleRound, true);
  }
}
;
_.onWarStart.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame.onWarStart';
_.onWarriorBirth = function onWarriorBirth_1(w){
  $addMessage(this, this.nRoundNumber, w.m_name + ' enters the arena at ' + hex4(w.m_loadAddress << 16 >> 16 & $intern_0));
  new WarFrame$WarriorInfo(w.m_name);
}
;
_.onWarriorBirth.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame.onWarriorBirth';
_.onWarriorDeath = function onWarriorDeath_1(warrior, reason){
  var warriorName;
  warriorName = warrior.m_name;
  $addMessage(this, this.nRoundNumber, warriorName + ' died due to ' + reason + '.');
}
;
_.onWarriorDeath.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame.onWarriorDeath';
_.onWriteState = function onWriteState_1(state){
}
;
_.onWriteState.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame.onWriteState';
_.nRoundNumber = 0;
var Lil_co_codeguru_corewars_1riscv_gui_WarFrame_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'WarFrame', 181);
function JLabel(){
  JComponent.call(this);
}

JLabel.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JLabel.JLabel';
function JLabel_0(){
  JComponent.call(this);
}

JLabel_0.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JLabel.JLabel';
defineClass(54, 23, {}, JLabel_0);
var Lil_co_codeguru_corewars_1riscv_gui_widgets_JLabel_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'JLabel', 54);
function WarFrame$NameCellRenderer(){
}

WarFrame$NameCellRenderer.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame$NameCellRenderer.WarFrame$NameCellRenderer';
defineClass(182, 54, {}, WarFrame$NameCellRenderer);
var Lil_co_codeguru_corewars_1riscv_gui_WarFrame$NameCellRenderer_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'WarFrame/NameCellRenderer', 182);
function WarFrame$WarriorInfo(name_0){
  this.name_0 = name_0;
}

WarFrame$WarriorInfo.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame$WarriorInfo.WarFrame$WarriorInfo';
defineClass(183, 1, {}, WarFrame$WarriorInfo);
_.equals_0 = function equals_1(obj){
  return instanceOfString(obj) && equals_Ljava_lang_Object__Z__devirtual$(obj, this.name_0);
}
;
_.equals_0.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame$WarriorInfo.equals';
_.toString_0 = function toString_7(){
  return this.name_0;
}
;
_.toString_0.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame$WarriorInfo.toString';
var Lil_co_codeguru_corewars_1riscv_gui_WarFrame$WarriorInfo_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'WarFrame/WarriorInfo', 183);
function WarFrame$lambda$0$Type($$outer_0, speedSliderVal_1){
  this.$$outer_0 = $$outer_0;
  this.speedSliderVal_1 = speedSliderVal_1;
}

WarFrame$lambda$0$Type.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame$lambda$0$Type.WarFrame$lambda$0$Type';
defineClass(184, 1, {}, WarFrame$lambda$0$Type);
_.actionPerformed = function actionPerformed(arg0){
  $lambda$0_1(this.$$outer_0, this.speedSliderVal_1);
}
;
_.actionPerformed.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame$lambda$0$Type.actionPerformed';
var Lil_co_codeguru_corewars_1riscv_gui_WarFrame$lambda$0$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'WarFrame/lambda$0$Type', 184);
function WarFrame$lambda$1$Type($$outer_0, competition_1, mainWnd_2){
  this.$$outer_0 = $$outer_0;
  this.competition_1 = competition_1;
  this.mainWnd_2 = mainWnd_2;
}

WarFrame$lambda$1$Type.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame$lambda$1$Type.WarFrame$lambda$1$Type';
defineClass(185, 1, {}, WarFrame$lambda$1$Type);
_.actionPerformed = function actionPerformed_0(arg0){
  $lambda$1_0(this.$$outer_0, this.competition_1, this.mainWnd_2);
}
;
_.actionPerformed.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame$lambda$1$Type.actionPerformed';
var Lil_co_codeguru_corewars_1riscv_gui_WarFrame$lambda$1$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'WarFrame/lambda$1$Type', 185);
function WarFrame$lambda$2$Type(competition_0, mainWnd_1){
  this.competition_0 = competition_0;
  this.mainWnd_1 = mainWnd_1;
}

WarFrame$lambda$2$Type.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame$lambda$2$Type.WarFrame$lambda$2$Type';
defineClass(186, 1, {}, WarFrame$lambda$2$Type);
_.actionPerformed = function actionPerformed_1(arg0){
  lambda$2(this.competition_0, this.mainWnd_1);
}
;
_.actionPerformed.displayName = 'il.co.codeguru.corewars_riscv.gui.WarFrame$lambda$2$Type.actionPerformed';
var Lil_co_codeguru_corewars_1riscv_gui_WarFrame$lambda$2$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui', 'WarFrame/lambda$2$Type', 186);
function $$init_15(this$static){
  this$static.debugger_0 = new Debugger(this$static);
  this$static.breakpointManager = new EditorBreakpointManager(this$static);
  this$static.PAGE_SIZE_0 = typeof $wnd.PAGE_SIZE === 'undefined'?512:$wnd.PAGE_SIZE;
  this$static.m_editBrClickHandler = new CodeEditor$lambda$0$Type(this$static);
}

$$init_15.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$$init';
function $assemblyEditorChanged(this$static){
  var intext, prevLineCount, prevLiveOffsets;
  if (this$static.entered)
    return;
  this$static.entered = true;
  prevLineCount = this$static.m_lineCount;
  prevLiveOffsets = this$static.m_lineOffsets;
  intext = this$static.asm_edit.value;
  $setText_0(this$static, intext, this$static.m_playersPanel);
  $updateBreakpoints(this$static, prevLiveOffsets, prevLineCount, this$static.m_prevInText);
  $updateText(this$static.m_playersPanel, intext);
  this$static.m_prevInText = intext;
  this$static.entered = false;
}

$assemblyEditorChanged.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$assemblyEditorChanged';
function $checkDisasmLines(this$static, binbuf, listing, asmElem, intext){
  var dis, e, line, lineNum, msg, omsgdiv, omsgtxt;
  dis = new DisassemblerRiscV(binbuf, 0);
  for (lineNum = 0; lineNum < listing.array.length; ++lineNum) {
    line = (checkCriticalElementIndex(lineNum, listing.array.length) , castTo(listing.array[lineNum], 60));
    if (line.address == -1)
      continue;
    if ($isDefineCode(line.code_0)) {
      continue;
    }
    msg = $getDisassemblerErrorMessage(dis, lineNum, line);
    if (msg != null) {
      if (this$static.m_errLines == null || lineNum < this$static.m_errLines.length && this$static.m_errLines[lineNum] == 0) {
        if (asmElem == null) {
          asmElem = $htmlizeText(intext);
          this$static.asm_show.innerHTML = '';
          this$static.asm_show.appendChild(asmElem);
        }
        e = ($clinit_DomGlobal() , document_0).getElementById('mline_' + (lineNum + 1));
        e.classList.add('edit_warning');
        omsgdiv = document_0.createElement('div');
        omsgdiv.classList.add('stdout_line_w');
        lineNum < this$static.m_lineOffsets.array.length && omsgdiv.setAttribute('ondblclick', 'asm_cursorToLine(' + $get_4(this$static.m_lineOffsets, lineNum) + ')');
        omsgtxt = document_0.createTextNode(msg);
        omsgdiv.appendChild(omsgtxt);
        this$static.asm_output.appendChild(omsgdiv);
      }
    }
  }
}

$checkDisasmLines.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$checkDisasmLines';
function $exportMethods_3(this$static){
  var that = this$static;
  var debug = this$static.debugger_0;
  $wnd.j_renderIfDirty = $entry(function(i){
    debug.j_renderIfDirty_0(i);
  }
  );
  $wnd.j_setScrollAt = $entry(function(i, j){
    debug.j_setScrollAt_0(i, j);
  }
  );
  $wnd.j_asm_edit_changed = $entry(function(){
    that.assemblyEditorChanged();
  }
  );
}

$exportMethods_3.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$exportMethods';
function $getDisassemblerErrorMessage(dis, lineNum, line){
  var e, msg;
  msg = null;
  try {
    $reset(dis, line.address);
    $nextOpcode_0(dis);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 71)) {
      msg = lineNum + 1 + ': Although this is a legal RISC-V Opcode, codewars-risc-v does not support it';
    }
     else if (instanceOf($e0, 8)) {
      e = $e0;
      $print(new ConsolePrintStream(new Console$1methodref$error$Type), toString_20((e.stackTrace == null && (e.stackTrace = $constructJavaStackTrace(e)) , e.stackTrace)));
    }
     else 
      throw toJs($e0);
  }
  return msg;
}

$getDisassemblerErrorMessage.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$getDisassemblerErrorMessage';
function $htmlizeText(intext){
  var df, e, line, line$index, line$max, lineNum, lines, t;
  df = ($clinit_DomGlobal() , document_0).createDocumentFragment();
  lineNum = 1;
  lines = $split(intext);
  for (line$index = 0 , line$max = lines.length; line$index < line$max; ++line$index) {
    line = lines[line$index];
    if (!$equals_4(line, '')) {
      e = document_0.createElement('span');
      e.setAttribute('id', 'mline_' + lineNum);
      t = document_0.createTextNode(line + '\n');
      e.appendChild(t);
      df.appendChild(e);
    }
    ++lineNum;
  }
  return df;
}

$htmlizeText.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$htmlizeText';
function $isDefineCode(code_0){
  var c, cmd, end, i, s, start_0;
  start_0 = -1;
  end = -1;
  for (i = 0; i < code_0.length; ++i) {
    c = (checkCriticalStringElementIndex(i, code_0.length) , code_0.charCodeAt(i));
    if (start_0 == -1) {
      c > 32 && (start_0 = i);
    }
     else {
      if (c <= 32) {
        end = i;
        break;
      }
    }
  }
  if (start_0 == -1 || end == -1)
    return false;
  cmd = code_0.substr(start_0, end - start_0).toLowerCase();
  s = 0;
  cmd.length == 2 && (checkCriticalStringElementIndex(0, cmd.length) , cmd.charCodeAt(0) == 100) && (s = (checkCriticalStringElementIndex(1, cmd.length) , cmd.charCodeAt(1)));
  cmd.length == 4 && (checkCriticalStringElementIndex(0, cmd.length) , cmd.charCodeAt(0) == 114) && (checkCriticalStringElementIndex(1, cmd.length) , cmd.charCodeAt(1) == 101) && (checkCriticalStringElementIndex(2, cmd.length) , cmd.charCodeAt(2) == 115) && (s = (checkCriticalStringElementIndex(3, cmd.length) , cmd.charCodeAt(3)));
  return s == 98 || s == 119 || s == 100 || s == 113 || s == 116 || s == 111 || s == 121 || s == 122;
}

$isDefineCode.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$isDefineCode';
function $lambda$0_2(this$static, event_0){
  var e;
  e = castToNative(event_0.target, $wnd.Element);
  $toggleBreakpointEdit(this$static, __parseAndValidateInt(e.innerHTML, 10));
}

$lambda$0_2.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$lambda$0';
function $lambda$2_0(this$static){
  $updateTitle(this$static.m_playersPanel, this$static.editor_title.value);
}

$lambda$2_0.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$lambda$2';
function $linesAsInput(text_0){
  var c, i, opcodesText;
  opcodesText = new StringBuilder;
  for (i = 0; i < text_0.length; ++i) {
    c = (checkCriticalStringElementIndex(i, text_0.length) , text_0.charCodeAt(i));
    c == 10 && (opcodesText.string += '<br>' , opcodesText);
  }
  return opcodesText.string;
}

$linesAsInput.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$linesAsInput';
function $loadedNewBinary(this$static, binary, breakpoints, callback){
  var b, dis, len, offset, sb, text_0, text0;
  if (this$static.m_isDebugMode)
    throw toJs(new IllegalStateException_0("Can't load new code in debug"));
  $removeCurrentBreakpoints(this$static.breakpointManager);
  sb = new StringBuilder;
  dis = new DisassemblerRiscV(binary, 0);
  offset = 0;
  try {
    while (offset < binary.length) {
      text0 = $nextOpcode_0(dis);
      $append_5((sb.string += text0 , sb), '\n');
      len = dis.lastOpcodeSize;
      offset += len;
    }
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 71))
      throw toJs($e0);
  }
  for (; offset < binary.length; ++offset) {
    b = binary[offset];
    $append_5($append_5((sb.string += 'db 0x' , sb), hex2(b & 255)), '\n');
  }
  text_0 = sb.string;
  this$static.asm_edit.value = text_0;
  $setText_0(this$static, text_0, callback);
  $setBreakpoints(this$static.breakpointManager, breakpoints);
  return text_0;
}

$loadedNewBinary.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$loadedNewBinary';
function $makeLineNumberFragment(this$static, intext){
  var e, i, lineCount, lndf;
  lndf = ($clinit_DomGlobal() , document_0).createDocumentFragment();
  this$static.m_lineOffsets = new ArrayList;
  lineCount = 1;
  for (i = 0; i <= intext.length; ++i) {
    if (i == intext.length || (checkCriticalStringElementIndex(i, intext.length) , intext.charCodeAt(i) == 10)) {
      e = document_0.createElement('div');
      e.addEventListener('click', this$static.m_editBrClickHandler);
      e.setAttribute('id', 'ln' + lineCount);
      e.appendChild(document_0.createTextNode('' + lineCount));
      lndf.appendChild(e);
      ++lineCount;
      $add_2(this$static.m_lineOffsets, valueOf_0(i));
    }
  }
  this$static.m_lineCount = lineCount - 1;
  return lndf;
}

$makeLineNumberFragment.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$makeLineNumberFragment';
function $onEndRound_0(this$static){
  $updateDebugLine(this$static.debugger_0);
}

$onEndRound_0.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$onEndRound';
function $playerSelectionChanged(this$static, incode, callback){
  $removeCurrentBreakpoints(this$static.breakpointManager);
  this$static.asm_edit.value = incode.asmText;
  this$static.editor_title.value = incode.player.title_0;
  $setText_0(this$static, incode.asmText, callback);
  $changePlayer(this$static.breakpointManager, incode.breakpoints);
  this$static.m_isDebugMode && $updateDebugLine(this$static.debugger_0);
}

$playerSelectionChanged.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$playerSelectionChanged';
function $setDebugMode_1(this$static, v){
  if (v) {
    this$static.editor_bottom.style.display = 'none';
    this$static.asm_edit.style.display = 'none';
    this$static.editor_title.readOnly = true;
    $initDebugAreaLines(this$static.debugger_0);
  }
   else {
    this$static.editor_bottom.style.display = '';
    this$static.asm_edit.style.display = '';
    this$static.editor_title.readOnly = false;
  }
  $setDebugMode_2(this$static.debugger_0, v);
  this$static.m_isDebugMode = v;
}

$setDebugMode_1.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$setDebugMode';
function $setLineNumBreakpoint(lineNum, v){
  var e;
  e = ($clinit_DomGlobal() , document_0).getElementById('ln' + lineNum);
  v?e.classList.add('edit_breakpoint'):e.classList.remove('edit_breakpoint');
}

$setLineNumBreakpoint.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$setLineNumBreakpoint';
function $setText_0(this$static, intext, playersPanel){
  var buf, df, lineNumDf, ok, opcodesText, output, retcode, stdout, stdoutShorten;
  if (intext.length == 0) {
    this$static.asm_output.innerHTML = '';
    this$static.opcodes_edit.innerHTML = '';
    this$static.asm_show.innerHTML = '';
    this$static.asm_linenums.innerHTML = '1';
    !!playersPanel && $updateAsmResult(playersPanel, true, null, null);
    return;
  }
  intext = $replace_0($replace_0($replace_0($replace(intext, 160, 32), '&', '&amp;'), '<', '&lt;'), '>', '&gt;');
  retcode = ($wnd.FS.writeFile('player.asm', intext, {encoding:'utf8'}) , $wnd.g_outputText = '' , $wnd.reinitMem() , $wnd.run_assembler('player.asm', 'player.lst'));
  stdout = $wnd.g_outputText;
  lineNumDf = $makeLineNumberFragment(this$static, intext);
  this$static.asm_linenums.innerHTML = '';
  this$static.asm_linenums.appendChild(lineNumDf);
  df = null;
  if (stdout.length == 0) {
    this$static.asm_show.innerHTML = intext;
    this$static.asm_output.innerHTML = '';
    this$static.m_errLines = null;
  }
   else {
    stdoutShorten = new StringBuilder;
    df = $htmlizeText(intext);
    this$static.m_errLines = $parseStdout(stdout, df, stdoutShorten, this$static.m_lineOffsets);
    this$static.asm_show.innerHTML = '';
    this$static.asm_show.appendChild(df);
    this$static.asm_output.innerHTML = stdoutShorten.string;
  }
  if (retcode != 0) {
    this$static.opcodes_edit.innerHTML = $linesAsInput(intext);
    console.error('~Assembler error');
    !!playersPanel && $updateAsmResult(playersPanel, false, null, null);
    return;
  }
  output = $wnd.FS.readFile('player.lst', {encoding:'utf8'});
  if (output.length == 0) {
    this$static.m_currentListing.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
    this$static.opcodes_edit.innerHTML = $linesAsInput(intext);
    console.log('~Empty output');
    !!playersPanel && $updateAsmResult(playersPanel, true, null, null);
    return;
  }
  opcodesText = new StringBuilder;
  this$static.m_currentListing = new ArrayList;
  ok = $parseLst(output, opcodesText, this$static.m_currentListing);
  if (!ok) {
    this$static.opcodes_edit.innerHTML = '[listing parsing error]';
    console.error('listing parsing error');
    $updateAsmResult(this$static.m_playersPanel, false, null, null);
    return;
  }
  this$static.opcodes_edit.innerHTML = opcodesText.string;
  buf = read_file_bin_arr();
  if (buf.length > 512) {
    console.error('Code is longer than the maximum allowed 512 bytes');
    this$static.asm_output.innerHTML = "<div class='stdout_line_e'>Code is longer than the maximum allowed 512 bytes<\/div>";
    !!playersPanel && $updateAsmResult(playersPanel, false, buf, null);
    return;
  }
  $checkDisasmLines(this$static, buf, this$static.m_currentListing, df, intext);
  !!playersPanel && $updateAsmResult(playersPanel, true, buf, this$static.m_currentListing);
}

$setText_0.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$setText';
function $shouldBreak(this$static, state){
  var arenaAddress;
  arenaAddress = state.pc;
  return !!$getDbgBreakpoint(this$static.debugger_0, arenaAddress);
}

$shouldBreak.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$shouldBreak';
function $toggleBreakpointEdit(this$static, atline){
  var atindex;
  atindex = atline - 1;
  if (atindex < 0 || atindex >= this$static.m_currentListing.array.length) {
    console.error('addBreakpointEdit invalid line ' + atline);
    return;
  }
  $toggleBreakpointEdit_0(this$static.breakpointManager, atline);
}

$toggleBreakpointEdit.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$toggleBreakpointEdit';
function $updateBreakpoints(this$static, prevLineOffsets, prevLineCount, prevInText){
  var keydown, selEnd, selStart;
  selStart = $wnd.saved_selectionStart;
  selEnd = $wnd.saved_selectionEnd;
  keydown = $wnd.saved_keydown;
  $updateBreakpoints_0(this$static.breakpointManager, prevLineOffsets, prevLineCount, prevInText, selStart, selEnd, keydown);
}

$updateBreakpoints.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.$updateBreakpoints';
function CodeEditor(competition){
  var i, pi;
  this.debugger_0 = new Debugger(this);
  this.breakpointManager = new EditorBreakpointManager(this);
  this.PAGE_SIZE_0 = typeof $wnd.PAGE_SIZE === 'undefined'?512:$wnd.PAGE_SIZE;
  this.m_editBrClickHandler = new CodeEditor$lambda$0$Type(this);
  this.m_competition = competition;
  $addCompetitionEventListener(this.m_competition, this);
  $addMemoryEventLister(this.m_competition, this);
  this.asm_edit = castToNative(($clinit_DomGlobal() , document_0).getElementById('asm_edit'), $wnd.HTMLTextAreaElement);
  this.asm_show = castToNative(document_0.getElementById('asm_show'), $wnd.HTMLElement);
  this.asm_output = castToNative(document_0.getElementById('asm_output'), $wnd.HTMLElement);
  this.editor_bottom = castToNative(document_0.getElementById('editor_bottom'), $wnd.HTMLElement);
  this.opcodes_edit = castToNative(document_0.getElementById('opcodes_edit'), $wnd.HTMLElement);
  this.asm_linenums = castToNative(document_0.getElementById('asm_linenums'), $wnd.HTMLElement);
  this.editor_title = castToNative(document_0.getElementById('editor_title'), $wnd.HTMLInputElement);
  this.asm_edit.addEventListener('input', new CodeEditor$lambda$1$Type(this));
  this.editor_title.addEventListener('input', new CodeEditor$lambda$2$Type(this));
  this.m_pages = initUnidimensionalArray(Lil_co_codeguru_corewars_1riscv_gui_code_1editor_CodeEditor$PageInfo_2_classLit, $intern_2, 95, ($intern_21 / this.PAGE_SIZE_0 | 0) + 1, 0, 1);
  for (i = 0; i < this.m_pages.length; ++i) {
    pi = new CodeEditor$PageInfo;
    this.m_pages[i] = pi;
    pi.isDirty = true;
    pi.startAddr = i * this.PAGE_SIZE_0;
    pi.endAddr = $wnd.Math.min((i + 1) * this.PAGE_SIZE_0, $intern_21);
  }
  $exportMethods_3(this);
}

CodeEditor.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.CodeEditor';
function _PAGE_SIZE(){
  return typeof $wnd.PAGE_SIZE === 'undefined'?512:$wnd.PAGE_SIZE;
}

_PAGE_SIZE.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor._PAGE_SIZE';
function get_stdout(){
  return $wnd.g_outputText;
}

get_stdout.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.get_stdout';
function js_setPlatform(plat){
  plat == '8086'?($wnd.run_assembler = $wnd.run_nasm):plat == 'riscv' && ($wnd.run_assembler = $wnd.run_gas);
}

js_setPlatform.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.js_setPlatform';
function read_file(name_0){
  return $wnd.FS.readFile(name_0, {encoding:'utf8'});
}

read_file.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.read_file';
function read_file_bin(name_0){
  return $wnd.FS.readFile(name_0, {encoding:'binary'});
}

read_file_bin.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.read_file_bin';
function read_file_bin_arr(){
  var arr, buf, i;
  arr = $wnd.FS.readFile('player', {encoding:'binary'});
  buf = initUnidimensionalArray(B_classLit, $intern_16, 11, arr.length, 15, 1);
  for (i = 0; i < arr.length; ++i)
    buf[i] = arr[i] << 24 >> 24;
  return buf;
}

read_file_bin_arr.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.read_file_bin_arr';
function run_assembler(asmname, text_0, lstname){
  $wnd.FS.writeFile(asmname, text_0, {encoding:'utf8'});
  $wnd.g_outputText = '';
  $wnd.reinitMem();
  var ret_code = $wnd.run_assembler(asmname, lstname);
  return ret_code;
}

run_assembler.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.run_assembler';
function saved_keydown(){
  return $wnd.saved_keydown;
}

saved_keydown.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.saved_keydown';
function saved_selectionEnd(){
  var v = $wnd.saved_selectionEnd;
  return v;
}

saved_selectionEnd.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.saved_selectionEnd';
function saved_selectionStart(){
  var v = $wnd.saved_selectionStart;
  return v;
}

saved_selectionStart.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.saved_selectionStart';
function scrollToAddr(addr, defer_0){
  defer_0?($wnd.deferredEditorToAddress = addr):$wnd.scrollToAddr(addr);
}

scrollToAddr.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.scrollToAddr';
defineClass(167, 1, $intern_19, CodeEditor);
_.assemblyEditorChanged = function assemblyEditorChanged(){
  $assemblyEditorChanged(this);
}
;
_.assemblyEditorChanged.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.assemblyEditorChanged';
_.onCompetitionEnd = function onCompetitionEnd_2(){
}
;
_.onCompetitionEnd.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.onCompetitionEnd';
_.onCompetitionStart = function onCompetitionStart_2(){
}
;
_.onCompetitionStart.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.onCompetitionStart';
_.onEndRound = function onEndRound_2(){
  $updateDebugLine(this.debugger_0);
}
;
_.onEndRound.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.onEndRound';
_.onMemoryWrite = function onMemoryWrite_2(address, value_0){
  $onMemoryWrite(this.debugger_0.memoryListener, address, value_0);
}
;
_.onMemoryWrite.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.onMemoryWrite';
_.onNoneAlive = function onNoneAlive_2(){
}
;
_.onNoneAlive.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.onNoneAlive';
_.onPaused = function onPaused_2(){
}
;
_.onPaused.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.onPaused';
_.onRound = function onRound_2(round_0){
}
;
_.onRound.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.onRound';
_.onWarEnd = function onWarEnd_2(reason, winners, inDebug){
}
;
_.onWarEnd.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.onWarEnd';
_.onWarPreStartClear = function onWarPreStartClear_2(){
}
;
_.onWarPreStartClear.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.onWarPreStartClear';
_.onWarStart = function onWarStart_2(){
  $setMemory(this.debugger_0, this.m_competition.currentWar.m_core);
}
;
_.onWarStart.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.onWarStart';
_.onWarriorBirth = function onWarriorBirth_2(w){
}
;
_.onWarriorBirth.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.onWarriorBirth';
_.onWarriorDeath = function onWarriorDeath_2(warrior, reason){
}
;
_.onWarriorDeath.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.onWarriorDeath';
_.onWriteState = function onWriteState_2(state){
  $onWriteState(this.debugger_0.memoryListener, state);
}
;
_.onWriteState.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor.onWriteState';
_.PAGE_SIZE_0 = 0;
_.entered = false;
_.m_errLines = null;
_.m_isDebugMode = false;
_.m_lineCount = 0;
_.m_lineOffsets = null;
_.m_playersPanel = null;
_.m_prevInText = null;
var Lil_co_codeguru_corewars_1riscv_gui_code_1editor_CodeEditor_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.code_editor', 'CodeEditor', 167);
function $$init_16(this$static){
}

$$init_16.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor$LstLine.$$init';
function CodeEditor$LstLine(){
}

CodeEditor$LstLine.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor$LstLine.CodeEditor$LstLine';
defineClass(60, 1, {60:1}, CodeEditor$LstLine);
_.address = -1;
_.addressStr = '';
_.code_0 = '';
_.fullOpcode = '';
_.lineNum = -1;
_.opcode = '';
_.opcodesCount = 0;
_.tmp_br = null;
var Lil_co_codeguru_corewars_1riscv_gui_code_1editor_CodeEditor$LstLine_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.code_editor', 'CodeEditor/LstLine', 60);
function CodeEditor$PageInfo(){
}

CodeEditor$PageInfo.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor$PageInfo.CodeEditor$PageInfo';
defineClass(95, 1, {95:1}, CodeEditor$PageInfo);
_.endAddr = 0;
_.isDirty = false;
_.startAddr = 0;
var Lil_co_codeguru_corewars_1riscv_gui_code_1editor_CodeEditor$PageInfo_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.code_editor', 'CodeEditor/PageInfo', 95);
function CodeEditor$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

CodeEditor$lambda$0$Type.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor$lambda$0$Type.CodeEditor$lambda$0$Type';
defineClass(168, 1, {}, CodeEditor$lambda$0$Type);
_.handleEvent = function handleEvent_2(arg0){
  $lambda$0_2(this.$$outer_0, arg0);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor$lambda$0$Type.handleEvent';
var Lil_co_codeguru_corewars_1riscv_gui_code_1editor_CodeEditor$lambda$0$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.code_editor', 'CodeEditor/lambda$0$Type', 168);
function CodeEditor$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

CodeEditor$lambda$1$Type.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor$lambda$1$Type.CodeEditor$lambda$1$Type';
defineClass(169, 1, {}, CodeEditor$lambda$1$Type);
_.handleEvent = function handleEvent_3(arg0){
  $assemblyEditorChanged(this.$$outer_0);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor$lambda$1$Type.handleEvent';
var Lil_co_codeguru_corewars_1riscv_gui_code_1editor_CodeEditor$lambda$1$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.code_editor', 'CodeEditor/lambda$1$Type', 169);
function CodeEditor$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

CodeEditor$lambda$2$Type.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor$lambda$2$Type.CodeEditor$lambda$2$Type';
defineClass(170, 1, {}, CodeEditor$lambda$2$Type);
_.handleEvent = function handleEvent_4(arg0){
  $lambda$2_0(this.$$outer_0);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor$lambda$2$Type.handleEvent';
var Lil_co_codeguru_corewars_1riscv_gui_code_1editor_CodeEditor$lambda$2$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.code_editor', 'CodeEditor/lambda$2$Type', 170);
function $$init_17(this$static){
  this$static.cache_0 = new Debugger$DefineDataCache;
  this$static.memoryListener = new Debugger$DebuggerMemoryListener(this$static);
  this$static.m_fillCmd = new Debugger$DbgLine_1('00', 'null', true);
  this$static.m_dbgBrClickHandler = new Debugger$lambda$0$Type(this$static);
}

$$init_17.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.$$init';
function $disassembleAddress(this$static, absaddr, addrInArea){
  var bs, dis, i, i0, len, memory_bytes, opline, page, text_0;
  memory_bytes = this$static.m_mem.data_0;
  dis = new DisassemblerRiscV(memory_bytes, absaddr);
  try {
    text_0 = $nextOpcode_0(dis);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 71)) {
      console.log('falied @ disassembleAddress');
      return;
    }
     else 
      throw toJs($e0);
  }
  $eraseOpcode(this$static, addrInArea);
  len = dis.lastOpcodeSize;
  bs = new StringBuilder;
  for (i0 = 0; i0 < len; ++i0) {
    $append_5(bs, hex2($loadByte(this$static.m_mem, absaddr + i0) & 255));
    bs.string += '&#x202f;';
  }
  opline = new Debugger$DbgLine_0(bs.string, text_0);
  this$static.m_dbglines[addrInArea] = opline;
  page = addrInArea / this$static.codeEditor.PAGE_SIZE_0 | 0;
  (page == this$static.m_atScrollP1 || page == this$static.m_atScrollP2) && $renderLine(this$static, addrInArea, opline);
  for (i = 1; i < len; ++i) {
    $eraseOpcode(this$static, addrInArea + i);
  }
}

$disassembleAddress.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.$disassembleAddress';
function $eraseOpcode(this$static, addrInArea){
  var page, value_0;
  this$static.m_dbglines[addrInArea] = null;
  page = addrInArea / this$static.codeEditor.PAGE_SIZE_0 | 0;
  (page == this$static.m_atScrollP1 || page == this$static.m_atScrollP2) && $renderLine(this$static, addrInArea, null);
  ++addrInArea;
  while (!this$static.m_dbglines[addrInArea]) {
    value_0 = $loadByte(this$static.m_mem, addrInArea);
    $setByte(this$static, addrInArea, (value_0 & 255) << 24 >> 24);
    ++addrInArea;
  }
}

$eraseOpcode.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.$eraseOpcode';
function $getCurrentWarrior(this$static){
  var label_0, war;
  war = this$static.codeEditor.m_competition.currentWar;
  if (!war)
    return null;
  label_0 = this$static.codeEditor.m_playersPanel.m_inEditor.label_0;
  return $getWarriorByLabel(war, label_0);
}

$getCurrentWarrior.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.$getCurrentWarrior';
function $getDbgBreakpoint(this$static, index_0){
  return this$static.m_dbgBreakpoints[index_0];
}

$getDbgBreakpoint.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.$getDbgBreakpoint';
function $getDbgLine(this$static, index_0){
  return this$static.m_dbglines[index_0];
}

$getDbgLine.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.$getDbgLine';
function $getFirstDbgLine(this$static, playerLoadOffset){
  var beforeFirst;
  beforeFirst = playerLoadOffset - 1;
  (!this$static.m_dbglines[beforeFirst] || this$static.m_dbglines[beforeFirst] == this$static.m_fillCmd) && (this$static.m_dbglines[beforeFirst] = new Debugger$DbgLine);
  return this$static.m_dbglines[beforeFirst];
}

$getFirstDbgLine.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.$getFirstDbgLine';
function $initDebugAreaLines(this$static){
  var addr, br, br$iterator, code_0, dbgline, i, j, last_dbgline, loadAddr, lsti, lstline, lstline$iterator, p, p$array, p$index, p$max, playerLoadOffset, w, war, beforeFirst;
  war = this$static.codeEditor.m_competition.currentWar;
  for (addr = 0; addr < $intern_21; ++addr) {
    this$static.m_dbglines[addr] = this$static.m_fillCmd;
  }
  for (p$array = this$static.codeEditor.m_pages , p$index = 0 , p$max = p$array.length; p$index < p$max; ++p$index) {
    p = p$array[p$index];
    p.isDirty = true;
  }
  this$static.m_dbgBreakpoints = initUnidimensionalArray(Lil_co_codeguru_corewars_1riscv_gui_PlayersPanel$Breakpoint_2_classLit, $intern_2, 31, $intern_21, 0, 1);
  for (i = 0; i < war.m_numWarriors; ++i) {
    w = war.m_warriors[i];
    playerLoadOffset = w.m_loadAddress & $intern_0;
    code_0 = $findCode(this$static.codeEditor.m_playersPanel, w.m_label);
    for (lstline$iterator = new ArrayList$1(code_0.lines); lstline$iterator.i < lstline$iterator.this$01.array.length;) {
      lstline = castTo($next_4(lstline$iterator), 60);
      lstline.tmp_br = null;
    }
    for (br$iterator = new ArrayList$1(code_0.breakpoints); br$iterator.i < br$iterator.this$01.array.length;) {
      br = castTo($next_4(br$iterator), 31);
      castTo($get_4(code_0.lines, br.lineNum - 1), 60).tmp_br = br;
    }
    last_dbgline = (beforeFirst = playerLoadOffset - 1 , (!this$static.m_dbglines[beforeFirst] || this$static.m_dbglines[beforeFirst] == this$static.m_fillCmd) && (this$static.m_dbglines[beforeFirst] = new Debugger$DbgLine) , this$static.m_dbglines[beforeFirst]);
    for (lsti = 0; lsti < code_0.lines.array.length; ++lsti) {
      lstline = castTo($get_4(code_0.lines, lsti), 60);
      if (lstline.address == -1) {
        $add_2(last_dbgline.comments, lstline.code_0);
      }
       else {
        loadAddr = lstline.address + playerLoadOffset;
        dbgline = new Debugger$DbgLine_0(lstline.opcode, lstline.code_0);
        $isDefineCode(lstline.code_0) && (dbgline.flags = 2);
        if (lsti <= 2047) {
          dbgline.flags |= lsti + 1 << 16;
          dbgline.flags |= i << 27;
        }
        this$static.m_dbglines[loadAddr] = dbgline;
        last_dbgline = dbgline;
        for (j = 1; j < lstline.opcodesCount; ++j) {
          this$static.m_dbglines[loadAddr + j] = null;
        }
        !!lstline.tmp_br && (this$static.m_dbgBreakpoints[loadAddr] = lstline.tmp_br);
      }
    }
  }
}

$initDebugAreaLines.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.$initDebugAreaLines';
function $j_renderIfDirty(this$static, pagenum){
  var addr, dbgline, page;
  if (pagenum == -1)
    return;
  page = this$static.codeEditor.m_pages[pagenum];
  if (!page.isDirty)
    return;
  for (addr = page.startAddr; addr < page.endAddr; ++addr) {
    dbgline = this$static.m_dbglines[addr];
    $renderLine(this$static, addr, dbgline);
  }
  page.isDirty = false;
}

$j_renderIfDirty.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.$j_renderIfDirty';
function $lambda$0_3(this$static, event_0){
  var e;
  e = castToNative(event_0.target, $wnd.Element);
  $toggleBreakpointDbg(this$static, __parseAndValidateInt(e.innerHTML, 16));
}

$lambda$0_3.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.$lambda$0';
function $renderLine(this$static, addr, dbgline){
  var addrhex, addrstr, br, comment, comment$iterator, da, dline, e;
  addrstr = '' + addr;
  dline = castToNative(($clinit_DomGlobal() , document_0).getElementById('d' + addrstr), $wnd.HTMLElement);
  if (!dbgline) {
    dline.style.display = 'none';
    return;
  }
  addrhex = hex4(addr);
  if (dbgline.comments.array.length > 0) {
    dline.innerHTML = "<div id='df" + addrstr + "'><span id='da" + addrstr + "'>" + addrhex + '<\/span>  ' + $getText(dbgline);
    for (comment$iterator = new ArrayList$1(dbgline.comments); comment$iterator.i < comment$iterator.this$01.array.length;) {
      comment = castToString($next_4(comment$iterator));
      dline.innerHTML += "<\/div><div class='dbg_comment_line'><span class='dbg_opcodes'><\/span>" + comment;
    }
    dline.innerHTML += '<\/div>';
  }
   else 
    dline.innerHTML = "<span id='da" + addrstr + "'>" + addrhex + '<\/span>  ' + $getText(dbgline);
  dline.removeAttribute('style');
  da = castToNative(document_0.getElementById('da' + addrstr), $wnd.HTMLElement);
  da.addEventListener('click', this$static.m_dbgBrClickHandler);
  br = this$static.m_dbgBreakpoints[addr];
  !!br && (e = document_0.getElementById('d' + addr) , e.classList.add('dbg_breakpoint'));
}

$renderLine.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.$renderLine';
function $scrollToCodeInEditor(this$static){
  var ipInsideArena;
  ipInsideArena = getWarrirorIp($getCurrentWarrior(this$static));
  if (ipInsideArena == -1)
    return;
  scrollToAddr(ipInsideArena, true);
}

$scrollToCodeInEditor.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.$scrollToCodeInEditor';
function $setByte(this$static, address, value_0){
  var dbgline, page;
  dbgline = $getSingleByteLine(this$static.cache_0, value_0);
  this$static.m_dbglines[address] = dbgline;
  page = address / this$static.codeEditor.PAGE_SIZE_0 | 0;
  (page == this$static.m_atScrollP1 || page == this$static.m_atScrollP2) && $renderLine(this$static, address, dbgline);
}

$setByte.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.$setByte';
function $setDebugMode_2(this$static, debugMode){
  debugMode && $scrollToCodeInEditor(this$static);
}

$setDebugMode_2.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.$setDebugMode';
function $setMemory(this$static, memory){
  this$static.m_mem = memory;
}

$setMemory.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.$setMemory';
function $toggleBreakpointDbg(this$static, addr){
  var br, codeObj, dbgline, e, exist_br$iterator, lsti, playeri, removed, war, warrior, wasAdded;
  wasAdded = false;
  if (!this$static.m_dbgBreakpoints[addr]) {
    br = new PlayersPanel$Breakpoint(-1);
    this$static.m_dbgBreakpoints[addr] = br;
    wasAdded = true;
  }
   else {
    br = this$static.m_dbgBreakpoints[addr];
    this$static.m_dbgBreakpoints[addr] = null;
  }
  war = this$static.codeEditor.m_competition.currentWar;
  dbgline = this$static.m_dbglines[addr];
  lsti = (dbgline.flags & 134152192) >> 16;
  if (lsti >= 1) {
    playeri = (dbgline.flags & -134217728) >> 27;
    warrior = war.m_warriors[playeri];
    codeObj = $findCode(this$static.codeEditor.m_playersPanel, warrior.m_label);
    if (wasAdded) {
      br.lineNum = lsti;
      for (exist_br$iterator = new ArrayList$1(codeObj.breakpoints); exist_br$iterator.i < exist_br$iterator.this$01.array.length;) {
        castTo($next_4(exist_br$iterator), 31);
      }
      $add_2(codeObj.breakpoints, br);
    }
     else {
      removed = $remove_2(codeObj.breakpoints, br);
      removed || (console.error('removed a breakpoint that did not exist?') , undefined);
    }
    codeObj == this$static.codeEditor.m_playersPanel.m_inEditor && (e = ($clinit_DomGlobal() , document_0).getElementById('ln' + lsti) , wasAdded?e.classList.add('edit_breakpoint'):e.classList.remove('edit_breakpoint'));
  }
  $renderLine(this$static, addr, dbgline);
}

$toggleBreakpointDbg.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.$toggleBreakpointDbg';
function $updateDebugLine(this$static){
  var currentWarrior, dline, flags, ider, ipInsideArena, isAlive, opcodeAddr, value_0;
  currentWarrior = $getCurrentWarrior(this$static);
  if (!currentWarrior)
    return;
  ipInsideArena = getWarrirorIp(currentWarrior);
  isAlive = currentWarrior.m_isAlive;
  scrollToAddr(ipInsideArena, false);
  if (ipInsideArena == this$static.m_lastDbgAddr && isAlive == this$static.m_lastIsAlive) {
    return;
  }
  this$static.m_lastDbgElement != null && this$static.m_lastDbgElement.classList.remove(this$static.m_lastIsAlive?'current_dbg':'current_dbg_dead');
  if (!this$static.m_dbglines[ipInsideArena]) {
    opcodeAddr = ipInsideArena;
    while (!this$static.m_dbglines[opcodeAddr])
      --opcodeAddr;
    do {
      value_0 = $loadByte(this$static.m_mem, opcodeAddr);
      $setByte(this$static, opcodeAddr, (value_0 & 255) << 24 >> 24);
      ++opcodeAddr;
    }
     while (!this$static.m_dbglines[opcodeAddr]);
    $disassembleAddress(this$static, ipInsideArena, ipInsideArena);
  }
   else {
    flags = this$static.m_dbglines[ipInsideArena].flags;
    ((flags & 1) != 0 || (flags & 2) != 0) && $disassembleAddress(this$static, ipInsideArena, ipInsideArena);
  }
  ider = 'd';
  this$static.m_dbglines[ipInsideArena].comments.array.length > 0 && (ider = 'df');
  dline = castToNative(($clinit_DomGlobal() , document_0).getElementById(ider + ipInsideArena), $wnd.HTMLElement);
  dline.classList.add(isAlive?'current_dbg':'current_dbg_dead');
  this$static.m_lastDbgElement = dline;
  this$static.m_lastDbgAddr = ipInsideArena;
  this$static.m_lastDbgAddrEnd = this$static.m_lastDbgAddr + 1;
  this$static.m_lastIsAlive = isAlive;
}

$updateDebugLine.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.$updateDebugLine';
function Debugger(codeEditor){
  this.cache_0 = new Debugger$DefineDataCache;
  this.memoryListener = new Debugger$DebuggerMemoryListener(this);
  this.m_fillCmd = new Debugger$DbgLine_1('00', 'null', true);
  this.m_dbgBrClickHandler = new Debugger$lambda$0$Type(this);
  this.codeEditor = codeEditor;
  this.m_dbglines = initUnidimensionalArray(Lil_co_codeguru_corewars_1riscv_gui_code_1editor_Debugger$DbgLine_2_classLit, $intern_2, 40, $intern_21, 0, 1);
}

Debugger.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.Debugger';
function getWarrirorIp(w){
  if (!w)
    return -1;
  return w.m_state.pc & $intern_0;
}

getWarrirorIp.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.getWarrirorIp';
defineClass(210, 1, {}, Debugger);
_.j_renderIfDirty_0 = function j_renderIfDirty(pagenum){
  $j_renderIfDirty(this, pagenum);
}
;
_.j_renderIfDirty_0.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.j_renderIfDirty';
_.j_setScrollAt_0 = function j_setScrollAt(p1, p2){
  $j_renderIfDirty(this, p1);
  $j_renderIfDirty(this, p2);
  this.m_atScrollP1 = p1;
  this.m_atScrollP2 = p2;
}
;
_.j_setScrollAt_0.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger.j_setScrollAt';
_.m_atScrollP1 = -1;
_.m_atScrollP2 = -1;
_.m_lastDbgAddr = -1;
_.m_lastDbgAddrEnd = -1;
_.m_lastIsAlive = false;
_.m_mem = null;
var Lil_co_codeguru_corewars_1riscv_gui_code_1editor_Debugger_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.code_editor', 'Debugger', 210);
function $$init_18(this$static){
  this$static.comments = new ArrayList;
}

$$init_18.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger$DbgLine.$$init';
function $getText(this$static){
  var answer;
  answer = '';
  this$static.toBackfill && (answer += "<span class='dbg_backfill'>");
  answer += "<span class='dbg_opcodes'>" + this$static.rawBytes + '<\/span>' + this$static.assemblyCode;
  this$static.toBackfill && (answer += '<\/span>');
  return answer;
}

$getText.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger$DbgLine.$getText';
function Debugger$DbgLine(){
  $$init_18(this);
}

Debugger$DbgLine.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger$DbgLine.Debugger$DbgLine';
function Debugger$DbgLine_0(rawBytes, assemblyCode){
  Debugger$DbgLine_1.call(this, rawBytes, assemblyCode, false);
}

Debugger$DbgLine_0.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger$DbgLine.Debugger$DbgLine';
function Debugger$DbgLine_1(rawBytes, assemblyCode, toBackfill){
  $$init_18(this);
  this.rawBytes = rawBytes;
  this.assemblyCode = assemblyCode;
  this.toBackfill = toBackfill;
}

Debugger$DbgLine_1.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger$DbgLine.Debugger$DbgLine';
defineClass(40, 1, {40:1}, Debugger$DbgLine, Debugger$DbgLine_0, Debugger$DbgLine_1);
_.assemblyCode = 'null';
_.flags = 0;
_.rawBytes = '00';
_.toBackfill = true;
var Lil_co_codeguru_corewars_1riscv_gui_code_1editor_Debugger$DbgLine_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.code_editor', 'Debugger/DbgLine', 40);
function $$init_19(this$static){
}

$$init_19.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger$DebuggerMemoryListener.$$init';
function $onMemoryWrite(this$static, address, value_0){
  var existing, ipInsideArena, page;
  if (this$static.m_memWriteState != 2)
    return;
  if (address >= $intern_21)
    return;
  ipInsideArena = address;
  page = address / this$static.this$01.codeEditor.PAGE_SIZE_0 | 0;
  if (page < 0 || page >= this$static.this$01.codeEditor.m_pages.length)
    return;
  this$static.this$01.codeEditor.m_pages[page].isDirty = true;
  existing = $getDbgLine(this$static.this$01, address);
  if (existing == this$static.this$01.m_fillCmd) {
    $setByte(this$static.this$01, address, value_0);
  }
   else {
    while (!$getDbgLine(this$static.this$01, ipInsideArena))
      --ipInsideArena;
    $setByte(this$static.this$01, ipInsideArena, $loadByte(this$static.this$01.m_mem, ipInsideArena));
    ++ipInsideArena;
  }
  if (address >= this$static.this$01.m_lastDbgAddr && address < this$static.this$01.m_lastDbgAddrEnd) {
    this$static.this$01.m_lastDbgAddr = -1;
    $updateDebugLine(this$static.this$01);
  }
}

$onMemoryWrite.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger$DebuggerMemoryListener.$onMemoryWrite';
function $onWriteState(this$static, state){
  this$static.m_memWriteState = state;
}

$onWriteState.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger$DebuggerMemoryListener.$onWriteState';
function Debugger$DebuggerMemoryListener(this$0){
  this.this$01 = this$0;
}

Debugger$DebuggerMemoryListener.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger$DebuggerMemoryListener.Debugger$DebuggerMemoryListener';
defineClass(212, 1, $intern_20, Debugger$DebuggerMemoryListener);
_.onMemoryWrite = function onMemoryWrite_3(address, value_0){
  $onMemoryWrite(this, address, value_0);
}
;
_.onMemoryWrite.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger$DebuggerMemoryListener.onMemoryWrite';
_.onWriteState = function onWriteState_3(state){
  $onWriteState(this, state);
}
;
_.onWriteState.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger$DebuggerMemoryListener.onWriteState';
_.m_memWriteState = 0;
var Lil_co_codeguru_corewars_1riscv_gui_code_1editor_Debugger$DebuggerMemoryListener_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.code_editor', 'Debugger/DebuggerMemoryListener', 212);
function $$init_20(this$static){
  this$static.m_singleByte = initUnidimensionalArray(Lil_co_codeguru_corewars_1riscv_gui_code_1editor_Debugger$DbgLine_2_classLit, $intern_2, 40, 256, 0, 1);
}

$$init_20.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger$DefineDataCache.$$init';
function $getSingleByteLine(this$static, bval){
  var byteline, hexVal, val;
  val = bval & 255;
  byteline = this$static.m_singleByte[val];
  if (!byteline) {
    hexVal = hex2(val);
    byteline = new Debugger$DbgLine_0(hexVal, 'db ' + hexVal + 'h');
    byteline.flags = 1;
  }
  this$static.m_singleByte[val] = byteline;
  return byteline;
}

$getSingleByteLine.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger$DefineDataCache.$getSingleByteLine';
function Debugger$DefineDataCache(){
  this.m_singleByte = initUnidimensionalArray(Lil_co_codeguru_corewars_1riscv_gui_code_1editor_Debugger$DbgLine_2_classLit, $intern_2, 40, 256, 0, 1);
}

Debugger$DefineDataCache.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger$DefineDataCache.Debugger$DefineDataCache';
defineClass(211, 1, {}, Debugger$DefineDataCache);
var Lil_co_codeguru_corewars_1riscv_gui_code_1editor_Debugger$DefineDataCache_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.code_editor', 'Debugger/DefineDataCache', 211);
function Debugger$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

Debugger$lambda$0$Type.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger$lambda$0$Type.Debugger$lambda$0$Type';
defineClass(213, 1, {}, Debugger$lambda$0$Type);
_.handleEvent = function handleEvent_5(arg0){
  $lambda$0_3(this.$$outer_0, arg0);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.Debugger$lambda$0$Type.handleEvent';
var Lil_co_codeguru_corewars_1riscv_gui_code_1editor_Debugger$lambda$0$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.code_editor', 'Debugger/lambda$0$Type', 213);
function $$init_21(this$static){
}

$$init_21.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.EditorBreakpointManager.$$init';
function $changePlayer(this$static, newBreakpoints){
  var b, b$iterator;
  this$static.m_breakpoints = newBreakpoints;
  for (b$iterator = new ArrayList$1(this$static.m_breakpoints); b$iterator.i < b$iterator.this$01.array.length;) {
    b = castTo($next_4(b$iterator), 31);
    $setLineNumBreakpoint(b.lineNum, true);
  }
}

$changePlayer.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.EditorBreakpointManager.$changePlayer';
function $removeCurrentBreakpoints(this$static){
  var b, b$iterator;
  if (this$static.m_breakpoints)
    for (b$iterator = new ArrayList$1(this$static.m_breakpoints); b$iterator.i < b$iterator.this$01.array.length;) {
      b = castTo($next_4(b$iterator), 31);
      $setLineNumBreakpoint(b.lineNum, false);
    }
}

$removeCurrentBreakpoints.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.EditorBreakpointManager.$removeCurrentBreakpoints';
function $setBreakpoints(this$static, newBreakpoints){
  this$static.m_breakpoints = newBreakpoints;
}

$setBreakpoints.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.EditorBreakpointManager.$setBreakpoints';
function $toggleBreakpointEdit_0(this$static, atline){
  var breakpoint, breakpoint$iterator, e, found;
  found = null;
  for (breakpoint$iterator = new ArrayList$1(this$static.m_breakpoints); breakpoint$iterator.i < breakpoint$iterator.this$01.array.length;) {
    breakpoint = castTo($next_4(breakpoint$iterator), 31);
    if (breakpoint.lineNum == atline) {
      found = breakpoint;
      break;
    }
  }
  e = ($clinit_DomGlobal() , document_0).getElementById('ln' + atline);
  !found?e.classList.add('edit_breakpoint'):e.classList.remove('edit_breakpoint');
  found?$remove_2(this$static.m_breakpoints, found):$add_2(this$static.m_breakpoints, new PlayersPanel$Breakpoint(atline));
}

$toggleBreakpointEdit_0.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.EditorBreakpointManager.$toggleBreakpointEdit';
function $updateBreakpoints_0(this$static, prevLineOffsets, prevLineCount, prevInText, selStart, selEnd, keydown){
  var br, c, i, isLineWithText, it, lineNLIndex, lineStartIndex;
  if (!this$static.m_breakpoints || this$static.m_breakpoints.array.length == 0)
    return;
  it = new AbstractList$ListIteratorImpl(this$static.m_breakpoints);
  while (it.i < it.this$01.size_1()) {
    br = (checkCriticalElement(it.i < it.this$01.size_1()) , castTo(it.this$01.get_0(it.last = it.i++), 31));
    lineStartIndex = 0;
    br.lineNum != 1 && (lineStartIndex = castTo($get_4(prevLineOffsets, br.lineNum - 1 - 1), 29).value_0 + 1);
    lineNLIndex = castTo($get_4(prevLineOffsets, br.lineNum - 1), 29).value_0;
    if (selStart != selEnd && (selStart < lineStartIndex && selEnd > lineStartIndex || selStart == lineStartIndex && selEnd > lineNLIndex)) {
      $remove_0(it);
      continue;
    }
    if (prevLineCount != this$static.codeEditor.m_lineCount) {
      if (selStart == selEnd && selStart == lineStartIndex && (keydown == 'Backspace' || keydown == 'Delete')) {
        isLineWithText = false;
        if (prevInText != null) {
          for (i = lineStartIndex; i < lineNLIndex && !isLineWithText; ++i) {
            c = (checkCriticalStringElementIndex(i, prevInText.length) , prevInText.charCodeAt(i));
            isLineWithText = c != 32 && c != 10;
          }
        }
        if (!isLineWithText) {
          $remove_0(it);
          continue;
        }
      }
      if (selStart <= lineStartIndex && selEnd <= lineStartIndex) {
        br.lineNum += this$static.codeEditor.m_lineCount - prevLineCount;
        $setLineNumBreakpoint(br.lineNum, true);
      }
    }
    $setLineNumBreakpoint(br.lineNum, true);
  }
}

$updateBreakpoints_0.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.EditorBreakpointManager.$updateBreakpoints';
function EditorBreakpointManager(codeEditor){
  this.codeEditor = codeEditor;
}

EditorBreakpointManager.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.EditorBreakpointManager.EditorBreakpointManager';
defineClass(214, 1, {}, EditorBreakpointManager);
_.m_breakpoints = null;
var Lil_co_codeguru_corewars_1riscv_gui_code_1editor_EditorBreakpointManager_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.code_editor', 'EditorBreakpointManager', 214);
function $parseLst(lsttext, opcodesText, m_currentListing){
  var addressStart, c, charsBeforeCode, i, indexStart, islast, j, l, line, lineIndex, lines, opcodeStart, prevLine, state, totalOpcodeCount;
  lines = $split(lsttext);
  lineIndex = 1;
  prevLine = null;
  totalOpcodeCount = 0;
  for (i = 0; i < lines.length; ++i) {
    line = lines[i];
    state = 0;
    l = new CodeEditor$LstLine;
    indexStart = 0;
    addressStart = 0;
    opcodeStart = 0;
    charsBeforeCode = 0;
    for (j = 0; j < line.length; ++j) {
      c = (checkCriticalStringElementIndex(j, line.length) , line.charCodeAt(j));
      switch (state) {
        case 0:
          if (c >= 48 && c <= 57) {
            indexStart = j;
            state = 1;
          }
           else if ($equals_4(line, 'NO DEFINED SYMBOLS') || $equals_4(line, 'DEFINED SYMBOLS')) {
            return true;
          }
           else 
            c != 32 && (state = 9);
          break;
        case 1:
          if (c == 32) {
            state = 2;
            l.lineNum = __parseAndValidateInt(line.substr(indexStart, j - indexStart), 10);
          }
           else 
            c >= 48 && c <= 57 || (state = 9);
          break;
        case 2:
          if (c == 32) {
            state = 3;
            charsBeforeCode = -5;
          }
           else if (c >= 48 && c <= 57 || c >= 65 && c <= 70 || c >= 97 && c <= 102) {
            addressStart = j;
            state = 4;
          }
           else 
            state = 9;
          break;
        case 4:
          if (c == 32) {
            state = 5;
            l.addressStr = line.substr(addressStart, j - addressStart);
            l.address = __parseAndValidateInt(l.addressStr, 16);
          }
           else 
            c >= 48 && c <= 57 || c >= 65 && c <= 70 || c >= 97 && c <= 102 || (state = 9);
          break;
        case 5:
          state = 6;
          opcodeStart = j;
          break;
        case 6:
          islast = j == line.length - 1;
          if (c == 42) {
            state = 7;
          }
           else if (!islast && charsBeforeCode < 8)
            ++charsBeforeCode;
          else if (c == 9 || islast) {
            l.fullOpcode = line.substr(opcodeStart, j - opcodeStart);
            l.opcode = spacedHex(l.fullOpcode);
            l.opcodesCount = countDigits(l.fullOpcode) / 2 | 0;
            totalOpcodeCount += l.opcodesCount;
            if (totalOpcodeCount > 512)
              return true;
            state = 3;
            ++charsBeforeCode;
          }
           else 
            ++charsBeforeCode;
          break;
        case 3:
          if (c == 42) {
            state = 7;
          }
           else if (c != 32 || charsBeforeCode == 9) {
            state = 8;
            l.code_0 = line.substr(j);
          }
           else 
            ++charsBeforeCode;
          break;
        case 9:
          console.log('ERROR: parsing list file! ' + ('' + i) + ':' + ('' + j) + '\n' + lsttext);
          return false;
      }
      if (state == 7)
        break;
    }
    if (state == 7)
      continue;
    if (l.lineNum > lineIndex) {
      while (l.lineNum != lineIndex) {
        opcodesText.string += '\n';
        ++lineIndex;
      }
    }
     else if (!!prevLine && l.lineNum == prevLine.lineNum) {
      prevLine.fullOpcode += '' + l.fullOpcode;
      prevLine.opcodesCount = countDigits(prevLine.fullOpcode) / 2 | 0;
      continue;
    }
     else if (l.lineNum != lineIndex) {
      log_0('wrong line number ' + l.lineNum + ' at ' + lineIndex);
      return false;
    }
    ++lineIndex;
    m_currentListing.array[m_currentListing.array.length] = l;
    $append_5(opcodesText, l.opcode);
    opcodesText.string += '\n';
    prevLine = l;
  }
  return true;
}

$parseLst.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.asm_parsers.GasListParser.$parseLst';
function $parseStdout(stdoutText, asmElem, stdoutShorten, m_lineOffsets){
  var countAllNL, e, ec, firstColon, j, line, line$index, line$max, lineNum, lineNum0, lineType, lines, m_errLines;
  console.log(stdoutText);
  lines = $split(stdoutText);
  countAllNL = m_lineOffsets.array.length;
  m_errLines = initUnidimensionalArray(C_classLit, $intern_14, 11, countAllNL, 15, 1);
  for (line$index = 0 , line$max = lines.length; line$index < line$max; ++line$index) {
    line = lines[line$index];
    firstColon = -1;
    lineNum0 = -1;
    lineType = 0;
    for (j = 0; j < line.length; ++j) {
      checkCriticalStringElementIndex(j, line.length);
      if (line.charCodeAt(j) == 58) {
        if (firstColon == -1)
          firstColon = j;
        else {
          checkCriticalStringElementIndex(firstColon + 1, line.length);
          if (line.charCodeAt(firstColon + 1) == 32) {
            lineNum0 = -2;
          }
           else {
            lineNum0 = __parseAndValidateInt(line.substr(firstColon + 1, j - (firstColon + 1)), 10);
            lineNum0 -= 1;
          }
          if (j + 2 < line.length) {
            lineType = $charAt(String.fromCharCode((checkCriticalStringElementIndex(j + 2, line.length) , line.charCodeAt(j + 2))).toLowerCase(), 0);
            lineType == 119 && m_errLines[lineNum0] == 101 || (m_errLines[lineNum0] = lineType);
          }
          break;
        }
      }
    }
    if (lineNum0 == -1) {
      console.log('Failed parsing error stdout');
      return m_errLines;
    }
    $append_5($append_0((stdoutShorten.string += "<div class='stdout_line_" , stdoutShorten), lineType), "'");
    lineNum0 != -2 && $append_5($append_4((stdoutShorten.string += "ondblclick='asm_cursorToLine(" , stdoutShorten), (checkCriticalElementIndex(lineNum0, m_lineOffsets.array.length) , m_lineOffsets.array[lineNum0])), ")'");
    stdoutShorten.string += '>';
    $append_5(stdoutShorten, line.substr(firstColon + 1));
    stdoutShorten.string += '<\/div>';
  }
  for (lineNum = 0; lineNum < m_errLines.length; ++lineNum) {
    ec = m_errLines[lineNum];
    if (ec == 0)
      continue;
    e = asmElem.getElementById('mline_' + (lineNum + 1));
    if (e == null)
      continue;
    ec == 101?e.classList.add('edit_error'):e.classList.add('edit_warning');
  }
  return m_errLines;
}

$parseStdout.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.asm_parsers.GasListParser.$parseStdout';
function DocumentFragment_getElementById(df, id_0){
  return df.getElementById(id_0);
}

DocumentFragment_getElementById.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.asm_parsers.TextUtils.DocumentFragment_getElementById';
function countDigits(s){
  var c, count, doingDigits, i;
  doingDigits = s.length > 0 && isHexDigit((checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0)));
  if (!doingDigits)
    return 0;
  count = 0;
  for (i = 0; i < s.length; ++i) {
    c = (checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i));
    (c >= 48 && c <= 57 || c >= 65 && c <= 70 || c >= 97 && c <= 102) && ++count;
  }
  return count;
}

countDigits.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.asm_parsers.TextUtils.countDigits';
function isHexDigit(c){
  return c >= 48 && c <= 57 || c >= 65 && c <= 70 || c >= 97 && c <= 102;
}

isHexDigit.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.asm_parsers.TextUtils.isHexDigit';
function spacedHex(s){
  var bs, c, digitCount, doingDigits, i, upto;
  upto = s.length - 1;
  for (; upto >= 0; --upto) {
    checkCriticalStringElementIndex(upto, s.length);
    if (s.charCodeAt(upto) != 32)
      break;
  }
  bs = new StringBuilder;
  digitCount = 0;
  doingDigits = s.length > 0 && isHexDigit((checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0)));
  for (i = 0; i <= upto; ++i) {
    c = (checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i));
    if (digitCount == 14) {
      bs.string += '&#x202f;';
      break;
    }
    if (doingDigits && (c >= 48 && c <= 57 || c >= 65 && c <= 70 || c >= 97 && c <= 102)) {
      bs.string += String.fromCharCode(c);
      ++digitCount;
      digitCount % 2 == 0 && digitCount > 0 && (bs.string += '&#x202f;' , bs);
      continue;
    }
     else if (c == 60) {
      bs.string += '&lt;';
      continue;
    }
     else if (c == 62) {
      bs.string += '&gt;';
      continue;
    }
     else if ((c == 41 || c == 93) && bs.string.length > 8 && $substring(bs, bs.string.length - 8) == '&#x202f;') {
      $insert(bs, bs.string.length - 8, String.fromCharCode(c));
      continue;
    }
    bs.string += String.fromCharCode(c);
  }
  return bs.string;
}

spacedHex.displayName = 'il.co.codeguru.corewars_riscv.gui.code_editor.asm_parsers.TextUtils.spacedHex';
function ActionEvent(){
}

ActionEvent.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.ActionEvent.ActionEvent';
defineClass(119, 1, {}, ActionEvent);
var Lil_co_codeguru_corewars_1riscv_gui_widgets_ActionEvent_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'ActionEvent', 119);
function $clinit_Color(){
  $clinit_Color = emptyMethod;
  new Color(0, 0, 0);
}

$clinit_Color.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.Color.$clinit';
function $darker(this$static){
  return new Color_0($wnd.Math.max(round_int(this$static.m_r * 0.7), 0), $wnd.Math.max(round_int(this$static.m_g * 0.7), 0), $wnd.Math.max(round_int(this$static.m_b * 0.7), 0), this$static.m_a);
}

$darker.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.Color.$darker';
function $toString_1(this$static){
  if (this$static.m_a == 1)
    return 'rgb(' + ('' + this$static.m_r) + ',' + ('' + this$static.m_g) + ',' + ('' + this$static.m_b) + ')';
  return 'rgba(' + ('' + this$static.m_r) + ',' + ('' + this$static.m_g) + ',' + ('' + this$static.m_b) + ',' + ('' + this$static.m_a) + ')';
}

$toString_1.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.Color.$toString';
function Color(r, g, b){
  $clinit_Color();
  this.m_r = r;
  this.m_g = g;
  this.m_b = b;
  this.m_a = 1;
  this.m_isDark = 0.3 * r + 0.58 * g + 0.12 * b < 128;
}

Color.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.Color.Color';
function Color_0(r, g, b, a){
  this.m_r = r;
  this.m_g = g;
  this.m_b = b;
  this.m_a = a;
  this.m_isDark = 0.3 * r + 0.58 * g + 0.12 * b < 128;
}

Color_0.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.Color.Color';
function HSBtoRGB(hue){
  $clinit_Color();
  var b, f, g, h, q, r, t;
  r = 0;
  g = 0;
  b = 0;
  h = (hue - $wnd.Math.floor(hue)) * 6;
  f = h - $wnd.Math.floor(h);
  q = $intern_22 * (1 - $intern_23 * f);
  t = $intern_22 * (1 - $intern_23 * (1 - f));
  switch (round_int(h)) {
    case 0:
      r = 242;
      g = round_int(t * 255 + 0.5);
      b = 48;
      break;
    case 1:
      r = round_int(q * 255 + 0.5);
      g = 242;
      b = 48;
      break;
    case 2:
      r = 48;
      g = 242;
      b = round_int(t * 255 + 0.5);
      break;
    case 3:
      r = 48;
      g = round_int(q * 255 + 0.5);
      b = 242;
      break;
    case 4:
      r = round_int(t * 255 + 0.5);
      g = 48;
      b = 242;
      break;
    case 5:
      r = 242;
      g = 48;
      b = round_int(q * 255 + 0.5);
  }
  return new Color(r, b, g);
}

HSBtoRGB.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.Color.HSBtoRGB';
defineClass(47, 1, {47:1}, Color, Color_0);
_.toString_0 = function toString_8(){
  return $toString_1(this);
}
;
_.toString_0.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.Color.toString';
_.m_a = 0;
_.m_b = 0;
_.m_g = 0;
_.m_isDark = false;
_.m_r = 0;
var BLACK = '#000000', WHITE = '#ffffff';
var Lil_co_codeguru_corewars_1riscv_gui_widgets_Color_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'Color', 47);
function debug_0(text_0){
  console.log(text_0);
}

debug_0.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.Console.debug';
function error_0(text_0){
  console.error(text_0);
}

error_0.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.Console.error';
function log_0(text_0){
  console.log(text_0);
}

log_0.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.Console.log';
function Console$0methodref$log$Type(){
}

Console$0methodref$log$Type.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.Console$0methodref$log$Type.Console$0methodref$log$Type';
defineClass(78, 1, {}, Console$0methodref$log$Type);
_.accept = function accept(arg0){
  log_0(castToString(arg0));
}
;
_.accept.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.Console$0methodref$log$Type.accept';
var Lil_co_codeguru_corewars_1riscv_gui_widgets_Console$0methodref$log$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'Console/0methodref$log$Type', 78);
function Console$1methodref$error$Type(){
}

Console$1methodref$error$Type.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.Console$1methodref$error$Type.Console$1methodref$error$Type';
defineClass(150, 1, {}, Console$1methodref$error$Type);
_.accept = function accept_0(arg0){
  error_0(castToString(arg0));
}
;
_.accept.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.Console$1methodref$error$Type.accept';
var Lil_co_codeguru_corewars_1riscv_gui_widgets_Console$1methodref$error$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'Console/1methodref$error$Type', 150);
defineClass(337, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 337);
defineClass(338, 337, {});
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 338);
function $println(){
}

$println.displayName = 'java.io.PrintStream.$println';
function PrintStream(){
}

PrintStream.displayName = 'java.io.PrintStream.PrintStream';
defineClass(108, 338, {}, PrintStream);
_.println = function println(s){
}
;
_.println.displayName = 'java.io.PrintStream.println';
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 108);
function $print(this$static, message){
  this$static.printFunction.accept(message);
}

$print.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.ConsolePrintStream.$print';
function $println_0(this$static, message){
  this$static.printFunction.accept(message + '\n');
}

$println_0.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.ConsolePrintStream.$println';
function ConsolePrintStream(printFunction){
  this.printFunction = printFunction;
}

ConsolePrintStream.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.ConsolePrintStream.ConsolePrintStream';
defineClass(66, 108, {}, ConsolePrintStream);
_.println = function println_0(message){
  $println_0(this, message);
}
;
_.println.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.ConsolePrintStream.println';
var Lil_co_codeguru_corewars_1riscv_gui_widgets_ConsolePrintStream_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'ConsolePrintStream', 66);
function Dimension(w, h){
  this.width_0 = w;
  this.height_0 = h;
}

Dimension.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.Dimension.Dimension';
defineClass(115, 1, {}, Dimension);
_.height_0 = 0;
_.width_0 = 0;
var Lil_co_codeguru_corewars_1riscv_gui_widgets_Dimension_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'Dimension', 115);
function $$init_22(this$static){
  this$static.mListeners = new HashSet;
}

$$init_22.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterBase.$$init';
function $add_0(this$static, pListener){
  $add_3(this$static.mListeners, pListener);
}

$add_0.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterBase.$add';
function $doneAdding(this$static){
  this$static.isDoneAdding = true;
  this$static.mListenersArr = $toArray(this$static.mListeners);
  this$static.mListeners = null;
}

$doneAdding.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterBase.$doneAdding';
function EventMulticasterBase(){
  this.mListeners = new HashSet;
}

EventMulticasterBase.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterBase.EventMulticasterBase';
defineClass(96, 1, {});
_.isDoneAdding = false;
_.mListenersArr = null;
var Lil_co_codeguru_corewars_1riscv_gui_widgets_EventMulticasterBase_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'EventMulticasterBase', 96);
function EventMulticasterCompetition(){
  EventMulticasterBase.call(this);
  this.debugProxy = new EventMulticasterCompetition$DebugHandler(this);
  this.competeProxy = new EventMulticasterCompetition$CompeteHandler(this);
}

EventMulticasterCompetition.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition.EventMulticasterCompetition';
defineClass(172, 96, {}, EventMulticasterCompetition);
var Lil_co_codeguru_corewars_1riscv_gui_widgets_EventMulticasterCompetition_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'EventMulticasterCompetition', 172);
function EventMulticasterCompetition$CompeteHandler(this$0){
  this.this$01 = this$0;
}

EventMulticasterCompetition$CompeteHandler.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$CompeteHandler.EventMulticasterCompetition$CompeteHandler';
defineClass(173, 1, {15:1}, EventMulticasterCompetition$CompeteHandler);
_.onCompetitionEnd = function onCompetitionEnd_3(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 15).onCompetitionEnd();
  }
}
;
_.onCompetitionEnd.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$CompeteHandler.onCompetitionEnd';
_.onCompetitionStart = function onCompetitionStart_3(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 15).onCompetitionStart();
  }
}
;
_.onCompetitionStart.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$CompeteHandler.onCompetitionStart';
_.onEndRound = function onEndRound_3(){
}
;
_.onEndRound.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$CompeteHandler.onEndRound';
_.onNoneAlive = function onNoneAlive_3(){
}
;
_.onNoneAlive.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$CompeteHandler.onNoneAlive';
_.onPaused = function onPaused_3(){
}
;
_.onPaused.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$CompeteHandler.onPaused';
_.onRound = function onRound_3(round_0){
}
;
_.onRound.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$CompeteHandler.onRound';
_.onWarEnd = function onWarEnd_3(reason, winners, inDebug){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 15).onWarEnd(reason, winners, inDebug);
  }
}
;
_.onWarEnd.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarEnd';
_.onWarPreStartClear = function onWarPreStartClear_3(){
}
;
_.onWarPreStartClear.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarPreStartClear';
_.onWarStart = function onWarStart_3(){
}
;
_.onWarStart.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarStart';
_.onWarriorBirth = function onWarriorBirth_3(w){
}
;
_.onWarriorBirth.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarriorBirth';
_.onWarriorDeath = function onWarriorDeath_3(warrior, reason){
}
;
_.onWarriorDeath.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarriorDeath';
var Lil_co_codeguru_corewars_1riscv_gui_widgets_EventMulticasterCompetition$CompeteHandler_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'EventMulticasterCompetition/CompeteHandler', 173);
function EventMulticasterCompetition$DebugHandler(this$0){
  this.this$01 = this$0;
}

EventMulticasterCompetition$DebugHandler.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$DebugHandler.EventMulticasterCompetition$DebugHandler';
defineClass(174, 1, {15:1}, EventMulticasterCompetition$DebugHandler);
_.onCompetitionEnd = function onCompetitionEnd_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 15).onCompetitionEnd();
  }
}
;
_.onCompetitionEnd.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$DebugHandler.onCompetitionEnd';
_.onCompetitionStart = function onCompetitionStart_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 15).onCompetitionStart();
  }
}
;
_.onCompetitionStart.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$DebugHandler.onCompetitionStart';
_.onEndRound = function onEndRound_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 15).onEndRound();
  }
}
;
_.onEndRound.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$DebugHandler.onEndRound';
_.onNoneAlive = function onNoneAlive_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 15).onNoneAlive();
  }
}
;
_.onNoneAlive.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$DebugHandler.onNoneAlive';
_.onPaused = function onPaused_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 15).onPaused();
  }
}
;
_.onPaused.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$DebugHandler.onPaused';
_.onRound = function onRound_4(round_0){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 15).onRound(round_0);
  }
}
;
_.onRound.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$DebugHandler.onRound';
_.onWarEnd = function onWarEnd_4(reason, winners, inDebug){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 15).onWarEnd(reason, winners, inDebug);
  }
}
;
_.onWarEnd.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarEnd';
_.onWarPreStartClear = function onWarPreStartClear_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 15).onWarPreStartClear();
  }
}
;
_.onWarPreStartClear.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarPreStartClear';
_.onWarStart = function onWarStart_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 15).onWarStart();
  }
}
;
_.onWarStart.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarStart';
_.onWarriorBirth = function onWarriorBirth_4(w){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 15).onWarriorBirth(w);
  }
}
;
_.onWarriorBirth.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarriorBirth';
_.onWarriorDeath = function onWarriorDeath_4(warrior, reason){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 15).onWarriorDeath(warrior, reason);
  }
}
;
_.onWarriorDeath.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarriorDeath';
var Lil_co_codeguru_corewars_1riscv_gui_widgets_EventMulticasterCompetition$DebugHandler_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'EventMulticasterCompetition/DebugHandler', 174);
function EventMulticasterMemory(){
  EventMulticasterBase.call(this);
  this.debugProxy = new EventMulticasterMemory$DebugHandler(this);
  this.competeProxy = new EventMulticasterMemory$CompeteHandler;
}

EventMulticasterMemory.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterMemory.EventMulticasterMemory';
defineClass(175, 96, {}, EventMulticasterMemory);
var Lil_co_codeguru_corewars_1riscv_gui_widgets_EventMulticasterMemory_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'EventMulticasterMemory', 175);
function EventMulticasterMemory$CompeteHandler(){
}

EventMulticasterMemory$CompeteHandler.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterMemory$CompeteHandler.EventMulticasterMemory$CompeteHandler';
defineClass(176, 1, $intern_20, EventMulticasterMemory$CompeteHandler);
_.onMemoryWrite = function onMemoryWrite_4(address, value_0){
}
;
_.onMemoryWrite.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterMemory$CompeteHandler.onMemoryWrite';
_.onWriteState = function onWriteState_4(state){
}
;
_.onWriteState.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterMemory$CompeteHandler.onWriteState';
var Lil_co_codeguru_corewars_1riscv_gui_widgets_EventMulticasterMemory$CompeteHandler_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'EventMulticasterMemory/CompeteHandler', 176);
function EventMulticasterMemory$DebugHandler(this$0){
  this.this$01 = this$0;
}

EventMulticasterMemory$DebugHandler.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterMemory$DebugHandler.EventMulticasterMemory$DebugHandler';
defineClass(177, 1, $intern_20, EventMulticasterMemory$DebugHandler);
_.onMemoryWrite = function onMemoryWrite_5(address, value_0){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 59).onMemoryWrite(address, value_0);
  }
}
;
_.onMemoryWrite.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterMemory$DebugHandler.onMemoryWrite';
_.onWriteState = function onWriteState_5(state){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 59).onWriteState(state);
  }
}
;
_.onWriteState.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterMemory$DebugHandler.onWriteState';
var Lil_co_codeguru_corewars_1riscv_gui_widgets_EventMulticasterMemory$DebugHandler_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'EventMulticasterMemory/DebugHandler', 177);
function EventMulticasterScore(){
  EventMulticasterBase.call(this);
  this.proxy = new EventMulticasterScore$MulticasterHandler(this);
}

EventMulticasterScore.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterScore.EventMulticasterScore';
defineClass(179, 96, {}, EventMulticasterScore);
var Lil_co_codeguru_corewars_1riscv_gui_widgets_EventMulticasterScore_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'EventMulticasterScore', 179);
function $scoreChanged(this$static, name_0, addedValue, groupIndex, subIndex){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this$static.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 322).scoreChanged(name_0, addedValue, groupIndex, subIndex);
  }
}

$scoreChanged.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterScore$MulticasterHandler.$scoreChanged';
function EventMulticasterScore$MulticasterHandler(this$0){
  this.this$01 = this$0;
}

EventMulticasterScore$MulticasterHandler.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterScore$MulticasterHandler.EventMulticasterScore$MulticasterHandler';
defineClass(180, 1, {322:1}, EventMulticasterScore$MulticasterHandler);
_.scoreChanged = function scoreChanged_0(name_0, addedValue, groupIndex, subIndex){
  $scoreChanged(this, name_0, addedValue, groupIndex, subIndex);
}
;
_.scoreChanged.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.EventMulticasterScore$MulticasterHandler.scoreChanged';
var Lil_co_codeguru_corewars_1riscv_gui_widgets_EventMulticasterScore$MulticasterHandler_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'EventMulticasterScore/MulticasterHandler', 180);
function $clinit_JButton(){
  $clinit_JButton = emptyMethod;
  m_buts = new HashMap;
}

$clinit_JButton.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JButton.$clinit';
function JButton(id_0){
  $clinit_JButton();
  JComponent_0.call(this, id_0);
  $clinit_System();
  $putStringValue(m_buts, id_0, this);
  if (this.m_element == null)
    return;
  this.m_element.addEventListener('click', new JButton$1(this));
}

JButton.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JButton.JButton';
defineClass(114, 23, {}, JButton);
var m_buts;
var Lil_co_codeguru_corewars_1riscv_gui_widgets_JButton_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'JButton', 114);
function JButton$1(this$0){
  this.this$01 = this$0;
}

JButton$1.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JButton$1.JButton$1';
defineClass(209, 1, {}, JButton$1);
_.handleEvent = function handleEvent_6(event_0){
  if (!this.this$01.m_listener || !this.this$01.m_enabled)
    return;
  this.this$01.m_listener.actionPerformed(new ActionEvent);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JButton$1.handleEvent';
var Lil_co_codeguru_corewars_1riscv_gui_widgets_JButton$1_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'JButton/1', 209);
function JComponent$1(this$0){
  this.this$01 = this$0;
}

JComponent$1.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JComponent$1.JComponent$1';
defineClass(153, 1, {}, JComponent$1);
_.handleEvent = function handleEvent_7(event_0){
  if (!this.this$01.m_listener)
    return;
  this.this$01.m_listener.actionPerformed(new ActionEvent);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JComponent$1.handleEvent';
var Lil_co_codeguru_corewars_1riscv_gui_widgets_JComponent$1_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'JComponent/1', 153);
function JList(){
  JComponent.call(this);
}

JList.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JList.JList';
defineClass(200, 23, {}, JList);
var Lil_co_codeguru_corewars_1riscv_gui_widgets_JList_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'JList', 200);
function JPanel(){
  JComponent.call(this);
}

JPanel.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JPanel.JPanel';
function JPanel_0(){
  JComponent.call(this);
}

JPanel_0.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JPanel.JPanel';
defineClass(17, 23, {}, JPanel, JPanel_0);
var Lil_co_codeguru_corewars_1riscv_gui_widgets_JPanel_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'JPanel', 17);
function JScrollPane(){
  JComponent.call(this);
}

JScrollPane.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JScrollPane.JScrollPane';
defineClass(207, 23, {}, JScrollPane);
var Lil_co_codeguru_corewars_1riscv_gui_widgets_JScrollPane_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'JScrollPane', 207);
function $$init_23(this$static){
}

$$init_23.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JSlider.$$init';
function $setValue_0(this$static){
  castToNative(this$static.m_element, $wnd.HTMLInputElement).value = '0';
  this$static.m_valueElem != null && (this$static.m_valueElem.innerHTML = '0');
}

$setValue_0.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JSlider.$setValue';
function JSlider(){
  JComponent_0.call(this, 'speedSlider');
  this.m_element.addEventListener('input', new JComponent$1(this));
  this.m_valueElem = castToNative(($clinit_DomGlobal() , document_0).getElementById('speedSliderVal'), $wnd.HTMLElement);
}

JSlider.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JSlider.JSlider';
defineClass(208, 23, {}, JSlider);
_.m_valueElem = null;
var Lil_co_codeguru_corewars_1riscv_gui_widgets_JSlider_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'JSlider', 208);
function $append(this$static, s){
  castToNative(this$static.m_element, $wnd.HTMLElement).innerHTML = castToNative(this$static.m_element, $wnd.HTMLElement).innerHTML + s;
}

$append.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JTextArea.$append';
function $scrollToBottom(this$static){
  castToNative(this$static.m_element, $wnd.HTMLElement).scrollTop = castToNative(this$static.m_element, $wnd.HTMLElement).scrollHeight - castToNative(this$static.m_element, $wnd.HTMLElement).clientHeight;
}

$scrollToBottom.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JTextArea.$scrollToBottom';
function JTextArea(){
  JComponent_0.call(this, 'messagesArea');
}

JTextArea.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JTextArea.JTextArea';
defineClass(206, 23, {}, JTextArea);
var Lil_co_codeguru_corewars_1riscv_gui_widgets_JTextArea_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'JTextArea', 206);
function $setText_1(this$static, v){
  castToNative(this$static.m_element, $wnd.HTMLInputElement).value = v;
}

$setText_1.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JTextField.$setText';
function JTextField(id_0, text_0){
  JComponent_0.call(this, id_0);
  text_0 != null && (castToNative(this.m_element, $wnd.HTMLInputElement).value = text_0);
}

JTextField.displayName = 'il.co.codeguru.corewars_riscv.gui.widgets.JTextField.JTextField';
defineClass(111, 23, {}, JTextField);
var Lil_co_codeguru_corewars_1riscv_gui_widgets_JTextField_2_classLit = createForClass('il.co.codeguru.corewars_riscv.gui.widgets', 'JTextField', 111);
function hex_0(num){
  var i, number, s;
  s = new StringBuilder_1((number = num >>> 0 , number.toString(16)).toUpperCase());
  for (i = s.string.length; i < 8; ++i)
    s.string = s.string.substr(0, 0) + '0' + s.string.substr(0);
  return s.string;
}

hex_0.displayName = 'il.co.codeguru.corewars_riscv.jsadd.Format.hex';
function hex2(num){
  var number, s;
  s = (number = num >>> 0 , number.toString(16)).toUpperCase();
  if (s.length == 1)
    return '0' + s;
  return s;
}

hex2.displayName = 'il.co.codeguru.corewars_riscv.jsadd.Format.hex2';
function hex4(num){
  var number, s;
  s = (number = num >>> 0 , number.toString(16)).toUpperCase();
  switch (s.length) {
    case 1:
      return '000' + s;
    case 2:
      return '00' + s;
    case 3:
      return '0' + s;
    case 4:
      return s;
  }
  return s;
}

hex4.displayName = 'il.co.codeguru.corewars_riscv.jsadd.Format.hex4';
function hex5(num){
  var number, s;
  s = (number = num >>> 0 , number.toString(16)).toUpperCase();
  switch (s.length) {
    case 1:
      return '0000' + s;
    case 2:
      return '000' + s;
    case 3:
      return '00' + s;
    case 4:
      return '0' + s;
    case 5:
      return s;
  }
  return s;
}

hex5.displayName = 'il.co.codeguru.corewars_riscv.jsadd.Format.hex5';
function innerText(elem){
  return elem.innerText;
}

innerText.displayName = 'il.co.codeguru.corewars_riscv.jsadd.Format.innerText';
function setInnerText(elem, text_0){
  elem.innerText = text_0;
}

setInnerText.displayName = 'il.co.codeguru.corewars_riscv.jsadd.Format.setInnerText';
function $loadHalfWord(this$static, index_0){
  return (this$static.loadByte(index_0) & 255 | this$static.loadByte(index_0 + 1) << 8) << 16 >> 16;
}

$loadHalfWord.displayName = 'il.co.codeguru.corewars_riscv.memory.Memory.$loadHalfWord';
function $loadWord(this$static, index_0){
  return (this$static.loadByte(index_0) & 255 | this$static.loadByte(index_0 + 1) << 8) << 16 >> 16 & $intern_0 | (this$static.loadByte(index_0 + 2) & 255 | this$static.loadByte(index_0 + 2 + 1) << 8) << 16 >> 16 << 16;
}

$loadWord.displayName = 'il.co.codeguru.corewars_riscv.memory.Memory.$loadWord';
function $setListener(this$static, listener){
  this$static.listener = listener;
}

$setListener.displayName = 'il.co.codeguru.corewars_riscv.memory.Memory.$setListener';
function $storeHalfWord(this$static, index_0, value_0){
  $storeByte_0(this$static, index_0, (value_0 & 255) << 24 >> 24);
  $storeByte_0(this$static, index_0 + 1, (value_0 >> 8 & 255) << 24 >> 24);
}

$storeHalfWord.displayName = 'il.co.codeguru.corewars_riscv.memory.Memory.$storeHalfWord';
function $storeWord(this$static, index_0, value_0){
  $storeHalfWord(this$static, index_0, (value_0 & $intern_0) << 16 >> 16);
  $storeHalfWord(this$static, index_0 + 2, (value_0 >> 16 & $intern_0) << 16 >> 16);
}

$storeWord.displayName = 'il.co.codeguru.corewars_riscv.memory.Memory.$storeWord';
defineClass(344, 1, {});
var Lil_co_codeguru_corewars_1riscv_memory_Memory_2_classLit = createForClass('il.co.codeguru.corewars_riscv.memory', 'Memory', 344);
function MemoryException(){
  RuntimeException.call(this);
}

MemoryException.displayName = 'il.co.codeguru.corewars_riscv.memory.MemoryException.MemoryException';
function MemoryException_0(msg){
  RuntimeException_1.call(this, msg);
}

MemoryException_0.displayName = 'il.co.codeguru.corewars_riscv.memory.MemoryException.MemoryException';
defineClass(57, 8, {57:1, 3:1, 9:1, 8:1, 7:1}, MemoryException, MemoryException_0);
var Lil_co_codeguru_corewars_1riscv_memory_MemoryException_2_classLit = createForClass('il.co.codeguru.corewars_riscv.memory', 'MemoryException', 57);
function $equals_1(this$static, a){
  return this$static.m_start == a.m_start && this$static.m_end == a.m_end;
}

$equals_1.displayName = 'il.co.codeguru.corewars_riscv.memory.MemoryRegion.$equals';
function MemoryRegion(){
  this.m_start = -1;
  this.m_end = -1;
}

MemoryRegion.displayName = 'il.co.codeguru.corewars_riscv.memory.MemoryRegion.MemoryRegion';
function MemoryRegion_0(start_0, end){
  this.m_start = start_0;
  this.m_end = end;
}

MemoryRegion_0.displayName = 'il.co.codeguru.corewars_riscv.memory.MemoryRegion.MemoryRegion';
defineClass(61, 1, {61:1}, MemoryRegion, MemoryRegion_0);
_.m_end = 0;
_.m_start = 0;
var Lil_co_codeguru_corewars_1riscv_memory_MemoryRegion_2_classLit = createForClass('il.co.codeguru.corewars_riscv.memory', 'MemoryRegion', 61);
function $loadByte(this$static, index_0){
  var number;
  if (index_0 < 0 || index_0 >= this$static.data_0.length)
    throw toJs(new MemoryException_0('Read out of bounds - at ' + (number = index_0 >>> 0 , number.toString(16)).toUpperCase()));
  return this$static.data_0[index_0];
}

$loadByte.displayName = 'il.co.codeguru.corewars_riscv.memory.RawMemory.$loadByte';
function $storeByte(this$static, index_0, value_0){
  var number;
  if (index_0 < 0 || index_0 >= this$static.data_0.length)
    throw toJs(new MemoryException_0('Write out of bounds - at ' + (number = index_0 >>> 0 , number.toString(16)).toUpperCase()));
  this$static.data_0[index_0] = value_0;
  !!this$static.listener && this$static.listener.onMemoryWrite(index_0, value_0);
}

$storeByte.displayName = 'il.co.codeguru.corewars_riscv.memory.RawMemory.$storeByte';
function RawMemory(){
  this.data_0 = initUnidimensionalArray(B_classLit, $intern_16, 11, 1048576, 15, 1);
}

RawMemory.displayName = 'il.co.codeguru.corewars_riscv.memory.RawMemory.RawMemory';
function RawMemory_0(data_0){
  this.data_0 = data_0;
}

RawMemory_0.displayName = 'il.co.codeguru.corewars_riscv.memory.RawMemory.RawMemory';
defineClass(120, 344, {}, RawMemory, RawMemory_0);
_.loadByte = function loadByte(index_0){
  return $loadByte(this, index_0);
}
;
_.loadByte.displayName = 'il.co.codeguru.corewars_riscv.memory.RawMemory.loadByte';
var Lil_co_codeguru_corewars_1riscv_memory_RawMemory_2_classLit = createForClass('il.co.codeguru.corewars_riscv.memory', 'RawMemory', 120);
function $isAddressAllowed(this$static, index_0){
  var region, region$array, region$index, region$max;
  for (region$array = this$static.allowedRegions , region$index = 0 , region$max = region$array.length; region$index < region$max; ++region$index) {
    region = region$array[region$index];
    if (index_0 >= region.m_start && index_0 <= region.m_end) {
      return true;
    }
  }
  return false;
}

$isAddressAllowed.displayName = 'il.co.codeguru.corewars_riscv.memory.RestrictedMemory.$isAddressAllowed';
function $loadByte_0(this$static, index_0){
  var number;
  if (this$static.useNewMemory) {
    if (!$isAddressAllowed(this$static, index_0))
      throw toJs(new MemoryException_0('Read at forbidden location - at ' + (number = index_0 >>> 0 , number.toString(16)).toUpperCase()));
    return $loadByte(this$static.memory, index_0);
  }
   else {
    return $loadByte(this$static.memory, index_0 & $intern_0);
  }
}

$loadByte_0.displayName = 'il.co.codeguru.corewars_riscv.memory.RestrictedMemory.$loadByte';
function $storeByte_0(this$static, index_0, value_0){
  var number;
  if (this$static.useNewMemory) {
    if (!$isAddressAllowed(this$static, index_0))
      throw toJs(new MemoryException_0('Write at forbidden location - at ' + (number = index_0 >>> 0 , number.toString(16)).toUpperCase()));
    $storeByte(this$static.memory, index_0, value_0);
  }
   else {
    $storeByte(this$static.memory, index_0 & $intern_0, value_0);
  }
}

$storeByte_0.displayName = 'il.co.codeguru.corewars_riscv.memory.RestrictedMemory.$storeByte';
function RestrictedMemory(raw, allowedRegions, useNewMemory){
  this.memory = raw;
  this.allowedRegions = allowedRegions;
  this.useNewMemory = useNewMemory;
  $setListener(this, raw.listener);
}

RestrictedMemory.displayName = 'il.co.codeguru.corewars_riscv.memory.RestrictedMemory.RestrictedMemory';
defineClass(318, 344, {}, RestrictedMemory);
_.loadByte = function loadByte_0(index_0){
  return $loadByte_0(this, index_0);
}
;
_.loadByte.displayName = 'il.co.codeguru.corewars_riscv.memory.RestrictedMemory.loadByte';
_.useNewMemory = false;
var Lil_co_codeguru_corewars_1riscv_memory_RestrictedMemory_2_classLit = createForClass('il.co.codeguru.corewars_riscv.memory', 'RestrictedMemory', 318);
function $$init_24(this$static){
}

$$init_24.displayName = 'il.co.codeguru.corewars_riscv.utils.disassembler.DisassemblerRiscV.$$init';
function $getCInstruction(this$static){
  var instructionFormat, rawInstruction;
  rawInstruction = $loadHalfWord(this$static.Memory, this$static.index_0);
  instructionFormat = new CInstructionFormatBase(rawInstruction);
  return $decode_0(instructionFormat);
}

$getCInstruction.displayName = 'il.co.codeguru.corewars_riscv.utils.disassembler.DisassemblerRiscV.$getCInstruction';
function $nextOpcode_0(this$static){
  var instruction, instructionFormat, rawInstruction, rawInstruction_0, instructionFormat_0;
  instruction = (rawInstruction_0 = $loadHalfWord(this$static.Memory, this$static.index_0) , instructionFormat_0 = new CInstructionFormatBase(rawInstruction_0) , $decode_0(instructionFormat_0));
  if (instruction) {
    this$static.lastOpcodeSize = 2;
  }
   else {
    try {
      rawInstruction = $loadWord(this$static.Memory, this$static.index_0);
      instructionFormat = new InstructionFormatBase(rawInstruction);
      instruction = $decode(instructionFormat);
      this$static.lastOpcodeSize = 4;
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 27)) {
        throw toJs(new IDisassembler$DisassemblerException);
      }
       else 
        throw toJs($e0);
    }
  }
  this$static.index_0 += this$static.lastOpcodeSize;
  return instruction.instructionFormat.format(instruction.info_0);
}

$nextOpcode_0.displayName = 'il.co.codeguru.corewars_riscv.utils.disassembler.DisassemblerRiscV.$nextOpcode';
function $reset(this$static, offset){
  this$static.index_0 = offset;
}

$reset.displayName = 'il.co.codeguru.corewars_riscv.utils.disassembler.DisassemblerRiscV.$reset';
function DisassemblerRiscV(memory, index_0){
  this.Memory = new RawMemory_0(memory);
  this.index_0 = index_0;
}

DisassemblerRiscV.displayName = 'il.co.codeguru.corewars_riscv.utils.disassembler.DisassemblerRiscV.DisassemblerRiscV';
defineClass(99, 1, {}, DisassemblerRiscV);
_.index_0 = 0;
_.lastOpcodeSize = 0;
var Lil_co_codeguru_corewars_1riscv_utils_disassembler_DisassemblerRiscV_2_classLit = createForClass('il.co.codeguru.corewars_riscv.utils.disassembler', 'DisassemblerRiscV', 99);
function IDisassembler$DisassemblerException(){
  Exception.call(this);
}

IDisassembler$DisassemblerException.displayName = 'il.co.codeguru.corewars_riscv.utils.disassembler.IDisassembler$DisassemblerException.IDisassembler$DisassemblerException';
defineClass(71, 9, {71:1, 3:1, 9:1, 7:1}, IDisassembler$DisassemblerException);
var Lil_co_codeguru_corewars_1riscv_utils_disassembler_IDisassembler$DisassemblerException_2_classLit = createForClass('il.co.codeguru.corewars_riscv.utils.disassembler', 'IDisassembler/DisassemblerException', 71);
function $$init_25(this$static){
}

$$init_25.displayName = 'il.co.codeguru.corewars_riscv.war.Competition.$$init';
function $addCompetitionEventListener(this$static, lis){
  $add_0(this$static.competitionEventCaster, lis);
}

$addCompetitionEventListener.displayName = 'il.co.codeguru.corewars_riscv.war.Competition.$addCompetitionEventListener';
function $addMemoryEventLister(this$static, lis){
  $add_0(this$static.memoryEventCaster, lis);
}

$addMemoryEventLister.displayName = 'il.co.codeguru.corewars_riscv.war.Competition.$addMemoryEventLister';
function $continueRun(this$static){
  var needMore, stepsCount, wasStartPaused;
  if (this$static.globalPause)
    return false;
  if (this$static.compState.abort) {
    console.log('Abort');
    $doneWar(this$static);
    $doneCompetition(this$static);
    return false;
  }
  if (this$static.compState.state == 1) {
    if (this$static.compState.warIndex < this$static.warsPerCombination) {
      $startWar(this$static, $createGroupList(this$static.warriorRepository, $next(this$static.competitionIterator)));
      this$static.compState.state = 2;
      wasStartPaused = this$static.compState.startPaused;
      this$static.compState.startPaused = false;
      return !wasStartPaused;
    }
     else {
      $doneCompetition(this$static);
      return false;
    }
  }
   else if (this$static.compState.state == 2) {
    needMore = 1;
    if (this$static.compState.isInDebugger) {
      stepsCount = 1;
      if (!this$static.currentWar.isSingleRound) {
        if (this$static.speed_0 > 1)
          stepsCount = this$static.speed_0;
        else if (this$static.speed_0 < 0) {
          if (this$static.compState.waitedFrames > 0) {
            --this$static.compState.waitedFrames;
            stepsCount = 0;
          }
           else {
            this$static.compState.waitedFrames = -this$static.speed_0;
            stepsCount = 1;
          }
        }
      }
      if (stepsCount > 0) {
        this$static.competitionEventListener = this$static.competitionEventCaster.competeProxy;
        this$static.memoryEventListener = this$static.memoryEventCaster.competeProxy;
        while (needMore == 1 && stepsCount > 1) {
          needMore = $runRound(this$static);
          --stepsCount;
        }
        this$static.competitionEventListener = this$static.competitionEventCaster.debugProxy;
        this$static.memoryEventListener = this$static.memoryEventCaster.debugProxy;
        needMore == 1 && (needMore = $runRound(this$static));
      }
    }
     else {
      do {
        needMore = $runRound(this$static);
      }
       while (needMore == 1);
    }
    if (this$static.compState.isInDebugger && this$static.currentWar.m_hasEnded && this$static.currentWar.m_numWarriorsAlive == 0) {
      this$static.competitionEventListener.onNoneAlive();
      return false;
    }
    if (needMore == 0) {
      this$static.competitionEventListener.onPaused();
      return false;
    }
     else if (needMore == -1) {
      $doneWar(this$static);
      if (!this$static.compState.isInDebugger) {
        this$static.compState.state = 1;
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}

$continueRun.displayName = 'il.co.codeguru.corewars_riscv.war.Competition.$continueRun';
function $doneCompetition(this$static){
  var elapsed;
  this$static.competitionEventListener.onCompetitionEnd();
  elapsed = ($clinit_System() , sub_1(fromDouble_0(Date.now()), this$static.compState.startTime));
  log_0('Total time=' + toDouble_0(elapsed) / 1000);
  this$static.compState = null;
}

$doneCompetition.displayName = 'il.co.codeguru.corewars_riscv.war.Competition.$doneCompetition';
function $doneWar(this$static){
  var names, numAlive;
  if (!this$static.currentWar)
    return;
  this$static.competitionEventListener.onRound(this$static.compState.round_0);
  this$static.seed = add_1(this$static.seed, 1);
  numAlive = this$static.currentWar.m_numWarriorsAlive;
  names = $getRemainingWarriorNames(this$static.currentWar);
  if (numAlive == 1) {
    this$static.competitionEventListener.onWarEnd(0, names, this$static.compState.isInDebugger);
    $updateScores(this$static.currentWar, this$static.warriorRepository);
  }
   else if (this$static.compState.round_0 == 200000) {
    this$static.competitionEventListener.onWarEnd(1, names, this$static.compState.isInDebugger);
    $updateScores(this$static.currentWar, this$static.warriorRepository);
  }
   else {
    this$static.competitionEventListener.onWarEnd(2, names, this$static.compState.isInDebugger);
  }
  this$static.currentWar.m_hasEnded = true;
  ++this$static.compState.warIndex;
}

$doneWar.displayName = 'il.co.codeguru.corewars_riscv.war.Competition.$doneWar';
function $getCurrentWarrior_0(this$static){
  return this$static.currentWar?this$static.currentWar.m_currentWarrior:-1;
}

$getCurrentWarrior_0.displayName = 'il.co.codeguru.corewars_riscv.war.Competition.$getCurrentWarrior';
function $getTotalNumberOfWars(this$static){
  return toInt_0($getNumberOfItems(this$static.competitionIterator)) * this$static.warsPerCombination;
}

$getTotalNumberOfWars.displayName = 'il.co.codeguru.corewars_riscv.war.Competition.$getTotalNumberOfWars';
function $runCompetition(this$static, warsPerCombination, warriorsPerGroup, startPaused, isInDebugger, useNewMemory){
  this$static.warsPerCombination = warsPerCombination;
  console.log('Running competition');
  this$static.competitionIterator = new CompetitionIterator(this$static.warriorRepository.warriorGroups.array.length, warriorsPerGroup, this$static.seed);
  this$static.competitionEventListener.onCompetitionStart();
  console.log('runCompetition ' + warsPerCombination + ' wars');
  this$static.compState = new Competition$CompState;
  this$static.compState.warIndex = 0;
  this$static.compState.state = 1;
  this$static.compState.startPaused = startPaused;
  this$static.compState.isInDebugger = isInDebugger;
  this$static.compState.startTime = ($clinit_System() , fromDouble_0(Date.now()));
  this$static.compState.useNewMemory = useNewMemory;
  isInDebugger?(this$static.competitionEventListener = this$static.competitionEventCaster.debugProxy , this$static.memoryEventListener = this$static.memoryEventCaster.debugProxy):(this$static.competitionEventListener = this$static.competitionEventCaster.competeProxy , this$static.memoryEventListener = this$static.memoryEventCaster.competeProxy);
}

$runCompetition.displayName = 'il.co.codeguru.corewars_riscv.war.Competition.$runCompetition';
function $runRound(this$static){
  var atBreakpoint;
  this$static.competitionEventListener.onRound(this$static.compState.round_0);
  atBreakpoint = $nextRound(this$static.currentWar);
  ++this$static.compState.round_0;
  this$static.competitionEventListener.onEndRound();
  if (!this$static.currentWar.m_hasEnded && this$static.currentWar.m_numWarriorsAlive < 2) {
    this$static.currentWar.isPaused = true;
    return -1;
  }
  (this$static.currentWar.isSingleRound || atBreakpoint) && (this$static.currentWar.isPaused = true);
  if (this$static.currentWar.isPaused) {
    return 0;
  }
  if (this$static.compState.round_0 >= 200000) {
    this$static.currentWar.isPaused = true;
    return -1;
  }
  return 1;
}

$runRound.displayName = 'il.co.codeguru.corewars_riscv.war.Competition.$runRound';
function $setAbort(this$static){
  if (!this$static.compState)
    return;
  this$static.compState.abort = true;
}

$setAbort.displayName = 'il.co.codeguru.corewars_riscv.war.Competition.$setAbort';
function $setSeed(this$static, seed){
  this$static.seed = seed;
}

$setSeed.displayName = 'il.co.codeguru.corewars_riscv.war.Competition.$setSeed';
function $setSpeed(this$static, speed){
  this$static.speed_0 = speed;
}

$setSpeed.displayName = 'il.co.codeguru.corewars_riscv.war.Competition.$setSpeed';
function $startWar(this$static, warriorGroups){
  this$static.currentWar = new War(this$static.memoryEventListener, this$static.competitionEventListener, this$static.compState.startPaused, this$static.compState.useNewMemory);
  $setSeed_0(this$static.currentWar, this$static.seed);
  this$static.competitionEventListener.onWarPreStartClear();
  $loadWarriorGroups(this$static.currentWar, warriorGroups);
  this$static.competitionEventListener.onWarStart();
  this$static.compState.round_0 = 0;
}

$startWar.displayName = 'il.co.codeguru.corewars_riscv.war.Competition.$startWar';
function Competition(){
  this.warriorRepository = new WarriorRepository;
  this.competitionEventCaster = new EventMulticasterCompetition;
  this.competitionEventListener = this.competitionEventCaster.debugProxy;
  this.memoryEventCaster = new EventMulticasterMemory;
  this.memoryEventListener = this.memoryEventCaster.debugProxy;
  this.speed_0 = 0;
}

Competition.displayName = 'il.co.codeguru.corewars_riscv.war.Competition.Competition';
defineClass(164, 1, {}, Competition);
_.globalPause = false;
_.seed = 0;
_.speed_0 = 0;
_.warsPerCombination = 20;
var Lil_co_codeguru_corewars_1riscv_war_Competition_2_classLit = createForClass('il.co.codeguru.corewars_riscv.war', 'Competition', 164);
function $$init_26(this$static){
}

$$init_26.displayName = 'il.co.codeguru.corewars_riscv.war.Competition$CompState.$$init';
function Competition$CompState(){
}

Competition$CompState.displayName = 'il.co.codeguru.corewars_riscv.war.Competition$CompState.Competition$CompState';
defineClass(165, 1, {}, Competition$CompState);
_.abort = false;
_.isInDebugger = false;
_.round_0 = 0;
_.startPaused = false;
_.startTime = 0;
_.state = 0;
_.useNewMemory = false;
_.waitedFrames = 0;
_.warIndex = 0;
var Lil_co_codeguru_corewars_1riscv_war_Competition$CompState_2_classLit = createForClass('il.co.codeguru.corewars_riscv.war', 'Competition/CompState', 165);
function $getNumberOfItems(this$static){
  return binomialCoefficient(this$static.numItems, this$static.counters.length);
}

$getNumberOfItems.displayName = 'il.co.codeguru.corewars_riscv.war.CompetitionIterator.$getNumberOfItems';
function $next(this$static){
  return $nextPermutation(this$static.rnd, this$static.numItems, this$static.groupSize);
}

$next.displayName = 'il.co.codeguru.corewars_riscv.war.CompetitionIterator.$next';
function CompetitionIterator(numItems, groupSize, seed){
  this.numItems = numItems;
  this.groupSize = groupSize;
  this.counters = initUnidimensionalArray(I_classLit, $intern_14, 11, groupSize, 15, 1);
  this.rnd = new RandomDataGenerator;
  $initRan(this.rnd, seed);
}

CompetitionIterator.displayName = 'il.co.codeguru.corewars_riscv.war.CompetitionIterator.CompetitionIterator';
defineClass(286, 1, {}, CompetitionIterator);
_.next_0 = function next(){
  return $nextPermutation(this.rnd, this.numItems, this.groupSize);
}
;
_.next_0.displayName = 'il.co.codeguru.corewars_riscv.war.CompetitionIterator.next';
_.hasNext_0 = function hasNext(){
  return this.counters[0] != -1;
}
;
_.hasNext_0.displayName = 'il.co.codeguru.corewars_riscv.war.CompetitionIterator.hasNext';
_.groupSize = 0;
_.numItems = 0;
var Lil_co_codeguru_corewars_1riscv_war_CompetitionIterator_2_classLit = createForClass('il.co.codeguru.corewars_riscv.war', 'CompetitionIterator', 286);
function $$init_27(this$static){
  this$static.rand = new Random;
}

$$init_27.displayName = 'il.co.codeguru.corewars_riscv.war.War.$$init';
function $allocateCoreMemory(this$static, size_0){
  var allocatedMemory;
  if (size_0 % 16 != 0) {
    throw toJs(new IllegalArgumentException);
  }
  allocatedMemory = this$static.m_nextFreeAddress;
  this$static.m_nextFreeAddress += size_0;
  return allocatedMemory;
}

$allocateCoreMemory.displayName = 'il.co.codeguru.corewars_riscv.war.War.$allocateCoreMemory';
function $getLoadOffset(this$static, warriorSize){
  var found, i, loadAddress, numTries, otherEnd, otherLoadAddress, otherSize, otherStart;
  loadAddress = 0;
  found = false;
  numTries = 0;
  while (!found && numTries < 100) {
    ++numTries;
    loadAddress = $nextInt(this$static.rand, $intern_21);
    found = loadAddress >= 1024;
    loadAddress + warriorSize > 64512 && (found = false);
    if (m_Fixed_loadAddressChecker) {
      if (!$checkOverlap(m_Fixed_loadAddressChecker, loadAddress, warriorSize)) {
        found = false;
        console.log('overlap with fixed!');
        continue;
      }
    }
    for (i = 0; i < this$static.m_numWarriors; ++i) {
      otherLoadAddress = this$static.m_warriors[i].m_loadAddress << 16 >> 16 & $intern_0;
      otherSize = this$static.m_warriors[i].m_codeSize;
      otherStart = otherLoadAddress - 1024;
      otherEnd = otherLoadAddress + otherSize + 1024;
      if (loadAddress + warriorSize >= otherStart && loadAddress < otherEnd) {
        found = false;
        console.log('overlap with loaded!');
        break;
      }
    }
  }
  if (!found) {
    throw toJs(new Exception);
  }
  return loadAddress << 16 >> 16;
}

$getLoadOffset.displayName = 'il.co.codeguru.corewars_riscv.war.War.$getLoadOffset';
function $getRemainingWarriorNames(this$static){
  var i, names, warrior;
  names = new StringBuilder;
  for (i = 0; i < this$static.m_numWarriors; ++i) {
    warrior = this$static.m_warriors[i];
    warrior.m_isAlive && $append_5((names.string += ', ' , names), warrior.m_name);
  }
  return names.string;
}

$getRemainingWarriorNames.displayName = 'il.co.codeguru.corewars_riscv.war.War.$getRemainingWarriorNames';
function $getWarrior(this$static, index_0){
  return this$static.m_warriors[index_0];
}

$getWarrior.displayName = 'il.co.codeguru.corewars_riscv.war.War.$getWarrior';
function $getWarriorByLabel(this$static, label_0){
  var i, w;
  for (i = 0; i < this$static.m_numWarriors; ++i) {
    w = this$static.m_warriors[i];
    if ($equals_4(w.m_label, label_0)) {
      return w;
    }
  }
  return null;
}

$getWarriorByLabel.displayName = 'il.co.codeguru.corewars_riscv.war.War.$getWarriorByLabel';
function $loadWarriorGroup(this$static, warriorGroup){
  var groupSharedMemory, loadOffset, offset, stackMemory, w, warrior, warrior$iterator, warriorData, warriorName, warriors;
  warriors = warriorGroup.warriorData;
  groupSharedMemory = $allocateCoreMemory(this$static, 1024);
  for (warrior$iterator = new ArrayList$1(warriors); warrior$iterator.i < warrior$iterator.this$01.array.length;) {
    warrior = castTo($next_4(warrior$iterator), 73);
    warriorName = warrior.m_name;
    warriorData = warrior.m_code;
    warrior.m_debugFixedLoadAddress < 0?(loadOffset = $getLoadOffset(this$static, warriorData.length)):(loadOffset = warrior.m_debugFixedLoadAddress << 16 >> 16);
    stackMemory = $allocateCoreMemory(this$static, 2048);
    w = new Warrior(warriorName, warrior.m_label, warriorData.length, this$static.m_core, loadOffset, stackMemory, groupSharedMemory, this$static.m_numWarriors, this$static.useNewMemory);
    this$static.m_warriors[this$static.m_numWarriors++] = w;
    !!this$static.m_core.listener && this$static.m_core.listener.onWriteState(1);
    for (offset = 0; offset < warriorData.length; ++offset) {
      $storeByte(this$static.m_core, loadOffset + offset & $intern_0, warriorData[offset]);
    }
    !!this$static.m_core.listener && this$static.m_core.listener.onWriteState(2);
    ++this$static.m_numWarriorsAlive;
    ++this$static.m_currentWarrior;
    !!this$static.m_warListener && this$static.m_warListener.onWarriorBirth(w);
  }
}

$loadWarriorGroup.displayName = 'il.co.codeguru.corewars_riscv.war.War.$loadWarriorGroup';
function $loadWarriorGroups(this$static, warriorGroups){
  var groupsLeftToLoad, randomInt;
  this$static.m_currentWarrior = 0;
  groupsLeftToLoad = new ArrayList_1(new Arrays$ArrayList(warriorGroups));
  while (groupsLeftToLoad.array.length > 0) {
    randomInt = $nextInt(this$static.rand, groupsLeftToLoad.array.length);
    $loadWarriorGroup(this$static, (checkCriticalElementIndex(randomInt, groupsLeftToLoad.array.length) , castTo(groupsLeftToLoad.array[randomInt], 39)));
    checkCriticalElementIndex(randomInt, groupsLeftToLoad.array.length);
    removeFrom(groupsLeftToLoad.array, randomInt);
  }
  this$static.m_currentWarrior = -1;
}

$loadWarriorGroups.displayName = 'il.co.codeguru.corewars_riscv.war.War.$loadWarriorGroups';
function $nextRound(this$static){
  var atBreakpoint, e, i, savedIp, warrior;
  atBreakpoint = false;
  for (i = 0; i < this$static.m_numWarriors; ++i) {
    warrior = this$static.m_warriors[i];
    this$static.m_currentWarrior = i;
    if (warrior.m_isAlive) {
      savedIp = warrior.m_state.pc;
      try {
        $nextOpcode_1(warrior);
        atBreakpoint = atBreakpoint | (!!this$static.m_breakpointCheck && this$static.m_currentWarrior == this$static.m_uiWarriorIndex && $shouldBreak(this$static.m_breakpointCheck, warrior.m_state));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 82)) {
          !!this$static.m_warListener && this$static.m_warListener.onWarriorDeath(warrior, 'CPU exception');
          warrior.m_isAlive = false;
          $setPc(warrior.m_state, savedIp);
          --this$static.m_numWarriorsAlive;
        }
         else if (instanceOf($e0, 57)) {
          e = $e0;
          !!this$static.m_warListener && this$static.m_warListener.onWarriorDeath(warrior, 'RawMemory exception: ' + e.detailMessage);
          warrior.m_isAlive = false;
          $setPc(warrior.m_state, savedIp);
          --this$static.m_numWarriorsAlive;
        }
         else 
          throw toJs($e0);
      }
    }
  }
  this$static.m_currentWarrior = -1;
  return atBreakpoint;
}

$nextRound.displayName = 'il.co.codeguru.corewars_riscv.war.War.$nextRound';
function $resume(this$static){
  this$static.isPaused = false;
  this$static.isSingleRound = false;
}

$resume.displayName = 'il.co.codeguru.corewars_riscv.war.War.$resume';
function $runSingleRound(this$static){
  this$static.isPaused = false;
  this$static.isSingleRound = true;
}

$runSingleRound.displayName = 'il.co.codeguru.corewars_riscv.war.War.$runSingleRound';
function $setBreakpointCheck(this$static, brc){
  this$static.m_breakpointCheck = brc;
}

$setBreakpointCheck.displayName = 'il.co.codeguru.corewars_riscv.war.War.$setBreakpointCheck';
function $setSeed_0(this$static, seed){
  $setSeed_2(this$static.rand, seed);
}

$setSeed_0.displayName = 'il.co.codeguru.corewars_riscv.war.War.$setSeed';
function $updateScores(this$static, repository){
  var i, score, warrior;
  score = 1 / this$static.m_numWarriorsAlive;
  for (i = 0; i < this$static.m_numWarriors; ++i) {
    warrior = this$static.m_warriors[i];
    warrior.m_isAlive && $addScore(repository, warrior.m_name, score);
  }
}

$updateScores.displayName = 'il.co.codeguru.corewars_riscv.war.War.$updateScores';
function War(memoryListener, warListener, startPaused, useNewMemory){
  var offset;
  this.rand = new Random;
  this.isPaused = startPaused;
  this.m_warListener = warListener;
  this.m_warriors = initUnidimensionalArray(Lil_co_codeguru_corewars_1riscv_war_Warrior_2_classLit, $intern_2, 98, 20, 0, 1);
  this.m_numWarriors = 0;
  this.m_numWarriorsAlive = 0;
  this.m_core = new RawMemory;
  this.m_nextFreeAddress = $intern_21;
  this.useNewMemory = useNewMemory;
  for (offset = 0; offset < $intern_21; ++offset) {
    $storeByte(this.m_core, offset, 0);
  }
  this.isSingleRound = false;
  $setListener(this.m_core, memoryListener);
}

War.displayName = 'il.co.codeguru.corewars_riscv.war.War.War';
defineClass(218, 1, {}, War);
_.isPaused = false;
_.isSingleRound = false;
_.m_breakpointCheck = null;
_.m_currentWarrior = 0;
_.m_hasEnded = false;
_.m_nextFreeAddress = 0;
_.m_numWarriors = 0;
_.m_numWarriorsAlive = 0;
_.m_uiWarriorIndex = -1;
_.useNewMemory = false;
var Lil_co_codeguru_corewars_1riscv_war_War_2_classLit = createForClass('il.co.codeguru.corewars_riscv.war', 'War', 218);
function $$init_28(this$static){
  this$static.arenaRegion = new MemoryRegion_0(0, $intern_0);
}

$$init_28.displayName = 'il.co.codeguru.corewars_riscv.war.Warrior.$$init';
function $initializeCpuState(this$static, loadAddress, initialStack, groupSharedMemory, useNewMemory){
  var loadIndex;
  loadIndex = loadAddress & $intern_0;
  $setPc(this$static.m_state, loadIndex);
  $setReg(this$static.m_state, 1, loadIndex);
  if (useNewMemory) {
    $setReg(this$static.m_state, 2, initialStack + 2048 - 1);
    $setReg(this$static.m_state, 3, groupSharedMemory);
  }
}

$initializeCpuState.displayName = 'il.co.codeguru.corewars_riscv.war.Warrior.$initializeCpuState';
function $nextOpcode_1(this$static){
  $nextOpcode(this$static.m_cpu);
  if (this$static.m_cpu.state.pc >= $intern_21 || this$static.m_cpu.state.pc < 0) {
    throw toJs(new MemoryException);
  }
}

$nextOpcode_1.displayName = 'il.co.codeguru.corewars_riscv.war.Warrior.$nextOpcode';
function Warrior(name_0, label_0, codeSize, core, loadAddress, initialStack, groupSharedMemory, myIndex, useNewMemory){
  var memory;
  this.arenaRegion = new MemoryRegion_0(0, $intern_0);
  this.m_label = label_0;
  this.m_name = name_0;
  this.m_codeSize = codeSize;
  this.m_loadAddress = loadAddress;
  this.m_myIndex = myIndex;
  this.m_state = new CpuStateRiscV;
  $initializeCpuState(this, loadAddress, initialStack, groupSharedMemory, useNewMemory);
  this.stackRegion = new MemoryRegion_0(initialStack, initialStack + 2048 - 1);
  this.sharedRegion = new MemoryRegion_0(groupSharedMemory, groupSharedMemory + 1024 - 1);
  memory = new RestrictedMemory(core, stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars_1riscv_memory_MemoryRegion_2_classLit, 1), $intern_2, 61, 0, [this.sharedRegion, this.stackRegion, this.arenaRegion]), useNewMemory);
  this.m_cpu = new CpuRiscV(this.m_state, memory);
  this.m_isAlive = true;
}

Warrior.displayName = 'il.co.codeguru.corewars_riscv.war.Warrior.Warrior';
defineClass(98, 1, {98:1}, Warrior);
_.m_codeSize = 0;
_.m_isAlive = false;
_.m_loadAddress = 0;
_.m_myIndex = 0;
var Lil_co_codeguru_corewars_1riscv_war_Warrior_2_classLit = createForClass('il.co.codeguru.corewars_riscv.war', 'Warrior', 98);
function WarriorData(name_0, code_0, label_0, debugLoadAddr){
  this.m_name = name_0;
  this.m_code = code_0;
  this.m_label = label_0;
  this.m_debugFixedLoadAddress = debugLoadAddr;
}

WarriorData.displayName = 'il.co.codeguru.corewars_riscv.war.WarriorData.WarriorData';
defineClass(73, 1, {73:1}, WarriorData);
_.toString_0 = function toString_9(){
  return this.m_name;
}
;
_.toString_0.displayName = 'il.co.codeguru.corewars_riscv.war.WarriorData.toString';
_.m_debugFixedLoadAddress = 0;
var Lil_co_codeguru_corewars_1riscv_war_WarriorData_2_classLit = createForClass('il.co.codeguru.corewars_riscv.war', 'WarriorData', 73);
function $addScoreToWarrior(this$static, name_0, value_0){
  var i;
  for (i = 0; i < this$static.warriorData.array.length; i++) {
    if ($equals_4(castTo($get_4(this$static.warriorData, i), 73).m_name, name_0)) {
      $set(this$static.scores, i, new Float(castTo($get_4(this$static.scores, i), 51).value_0 + value_0));
      break;
    }
  }
  this$static.groupScore += value_0;
  return i;
}

$addScoreToWarrior.displayName = 'il.co.codeguru.corewars_riscv.war.WarriorGroup.$addScoreToWarrior';
function $addWarrior(this$static, data_0){
  $add_2(this$static.warriorData, data_0);
  $add_2(this$static.scores, new Float(0));
}

$addWarrior.displayName = 'il.co.codeguru.corewars_riscv.war.WarriorGroup.$addWarrior';
function WarriorGroup(name_0){
  this.name_0 = name_0;
  this.warriorData = new ArrayList;
  this.scores = new ArrayList;
}

WarriorGroup.displayName = 'il.co.codeguru.corewars_riscv.war.WarriorGroup.WarriorGroup';
defineClass(39, 1, {39:1}, WarriorGroup);
_.groupScore = 0;
var Lil_co_codeguru_corewars_1riscv_war_WarriorGroup_2_classLit = createForClass('il.co.codeguru.corewars_riscv.war', 'WarriorGroup', 39);
function $addScore(this$static, name_0, value_0){
  var group, groupIndex, subIndex;
  groupIndex = castTo($getStringValue(this$static.warriorNameToGroup, name_0), 29);
  if (!groupIndex) {
    return;
  }
  group = castTo($get_4(this$static.warriorGroups, groupIndex.value_0), 39);
  subIndex = $addScoreToWarrior(group, name_0, value_0);
  this$static.scoreEventsCaster.isDoneAdding && $scoreChanged(this$static.scoreListener, name_0, value_0, groupIndex.value_0, subIndex);
}

$addScore.displayName = 'il.co.codeguru.corewars_riscv.war.WarriorRepository.$addScore';
function $createGroupList(this$static, groupIndices){
  var groupIndex, groupIndex$index, groupIndex$max, groups, groupsList;
  groupsList = new ArrayList;
  for (groupIndex$index = 0 , groupIndex$max = groupIndices.length; groupIndex$index < groupIndex$max; ++groupIndex$index) {
    groupIndex = groupIndices[groupIndex$index];
    $add_2(groupsList, castTo($get_4(this$static.warriorGroups, groupIndex), 39));
  }
  !!this$static.zombieGroup && $add_2(groupsList, this$static.zombieGroup);
  groups = initUnidimensionalArray(Lil_co_codeguru_corewars_1riscv_war_WarriorGroup_2_classLit, $intern_2, 39, groupsList.array.length, 0, 1);
  $toArray_1(groupsList, groups);
  return groups;
}

$createGroupList.displayName = 'il.co.codeguru.corewars_riscv.war.WarriorRepository.$createGroupList';
function $getGroupNames(this$static){
  var group, group$iterator, names;
  names = new ArrayList;
  for (group$iterator = new ArrayList$1(this$static.warriorGroups); group$iterator.i < group$iterator.this$01.array.length;) {
    group = castTo($next_4(group$iterator), 39);
    $add_2(names, group.name_0);
  }
  return castTo($toArray_1(names, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_11, 2, 0, 6, 1)), 88);
}

$getGroupNames.displayName = 'il.co.codeguru.corewars_riscv.war.WarriorRepository.$getGroupNames';
function $getStartAddress(files, zombies, isInDebug, c){
  var startAddr;
  startAddr = -1;
  if (!c.startAddrRandom && isInDebug) {
    !m_Fixed_loadAddressChecker && (m_Fixed_loadAddressChecker = new FixedLoadAddressChecker(files.length + zombies.length));
    startAddr = $addCheck(m_Fixed_loadAddressChecker, c.startAddress, c.bin.length, c.name_0);
  }
  return startAddr;
}

$getStartAddress.displayName = 'il.co.codeguru.corewars_riscv.war.WarriorRepository.$getStartAddress';
function $loadWarriors(this$static, files, zombies, isInDebug){
  var c, c$index, c$max, loader, startAddress;
  $reset_0(this$static.warriorNameToGroup);
  this$static.warriorGroups.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
  log_0('Found ' + ('' + files.length) + ' survivors, ' + ('' + zombies.length) + ' zombies');
  m_Fixed_loadAddressChecker = null;
  sort_0(files, new WarriorRepository$lambda$0$Type);
  loader = new WarriorRepository$WarriorLoader(this$static);
  for (c$index = 0 , c$max = files.length; c$index < c$max; ++c$index) {
    c = files[c$index];
    if (!$validateWarrior(c, 'player'))
      return false;
    startAddress = $getStartAddress(files, zombies, isInDebug, c);
    if (startAddress == -2)
      return false;
    $loadWarrior(loader, c, startAddress);
  }
  if (this$static.warriorGroups.array.length == 0) {
    console.error('no players to start a competition with');
    return false;
  }
  if (!$readZombiesFromUI(this$static, zombies, m_Fixed_loadAddressChecker))
    return false;
  return true;
}

$loadWarriors.displayName = 'il.co.codeguru.corewars_riscv.war.WarriorRepository.$loadWarriors';
function $readZombiesFromUI(this$static, zombieFiles, fixedLoadAddressChecker){
  var c, c$index, c$max, data_0, startAddress;
  this$static.zombieGroup = null;
  if (zombieFiles.length == 0)
    return true;
  this$static.zombieGroup = new WarriorGroup('ZoMbIeS');
  for (c$index = 0 , c$max = zombieFiles.length; c$index < c$max; ++c$index) {
    c = zombieFiles[c$index];
    if (!$validateWarrior(c, 'zombie'))
      return false;
    startAddress = -1;
    if (!c.startAddrRandom) {
      startAddress = $addCheck(fixedLoadAddressChecker, c.startAddress, c.bin.length, c.name_0);
      if (startAddress == -2)
        return false;
    }
    data_0 = new WarriorData(c.name_0, $truncToSize(c.bin), c.label_0, startAddress);
    $addWarrior(this$static.zombieGroup, data_0);
  }
  return true;
}

$readZombiesFromUI.displayName = 'il.co.codeguru.corewars_riscv.war.WarriorRepository.$readZombiesFromUI';
function $truncToSize(arr){
  if (arr.length > 512)
    return copyPrimitiveArray(arr, initUnidimensionalArray(B_classLit, $intern_16, 11, 512, 15, 1));
  return arr;
}

$truncToSize.displayName = 'il.co.codeguru.corewars_riscv.war.WarriorRepository.$truncToSize';
function $validateWarrior(c, type_0){
  if (c.name_0.length == 0) {
    console.error('All ' + type_0 + 's must have a name for starting a competition');
    return false;
  }
  if (c.bin == null || c.bin.length == 0) {
    error_0('' + type_0 + ' ' + c.name_0 + "does not have any code, can't start competition");
    return false;
  }
  return true;
}

$validateWarrior.displayName = 'il.co.codeguru.corewars_riscv.war.WarriorRepository.$validateWarrior';
function WarriorRepository(){
  this.warriorNameToGroup = new HashMap;
  this.warriorGroups = new ArrayList;
  this.scoreEventsCaster = new EventMulticasterScore;
  this.scoreListener = this.scoreEventsCaster.proxy;
}

WarriorRepository.displayName = 'il.co.codeguru.corewars_riscv.war.WarriorRepository.WarriorRepository';
defineClass(161, 1, {}, WarriorRepository);
var m_Fixed_loadAddressChecker;
var Lil_co_codeguru_corewars_1riscv_war_WarriorRepository_2_classLit = createForClass('il.co.codeguru.corewars_riscv.war', 'WarriorRepository', 161);
function $loadWarrior(this$static, c, startAddr){
  var data_0;
  data_0 = new WarriorData(c.name_0, $truncToSize(c.bin), c.label_0, startAddr);
  if (c.player.wtype != ($clinit_PlayersPanel$EWarriorType() , SINGLE)) {
    if ($endsWith(data_0.m_label, '0')) {
      this$static.currentGroup = new WarriorGroup($substring_1(data_0.m_name, 0, data_0.m_name.length - 1));
      $addWarrior(this$static.currentGroup, data_0);
      $putStringValue(this$static.this$01.warriorNameToGroup, data_0.m_name, valueOf_0(this$static.this$01.warriorGroups.array.length));
    }
     else if ($endsWith(data_0.m_label, '1')) {
      $addWarrior(this$static.currentGroup, data_0);
      $putStringValue(this$static.this$01.warriorNameToGroup, data_0.m_name, valueOf_0(this$static.this$01.warriorGroups.array.length));
      $add_2(this$static.this$01.warriorGroups, this$static.currentGroup);
      this$static.currentGroup = null;
    }
     else {
      error_0('Unexpected suffix for warrior name. expected 1 or 2: ' + data_0.m_name);
    }
  }
   else {
    this$static.currentGroup = new WarriorGroup(data_0.m_name);
    $addWarrior(this$static.currentGroup, data_0);
    $putStringValue(this$static.this$01.warriorNameToGroup, data_0.m_name, valueOf_0(this$static.this$01.warriorGroups.array.length));
    $add_2(this$static.this$01.warriorGroups, this$static.currentGroup);
    this$static.currentGroup = null;
  }
}

$loadWarrior.displayName = 'il.co.codeguru.corewars_riscv.war.WarriorRepository$WarriorLoader.$loadWarrior';
function WarriorRepository$WarriorLoader(this$0){
  this.this$01 = this$0;
  this.currentGroup = null;
}

WarriorRepository$WarriorLoader.displayName = 'il.co.codeguru.corewars_riscv.war.WarriorRepository$WarriorLoader.WarriorRepository$WarriorLoader';
defineClass(162, 1, {}, WarriorRepository$WarriorLoader);
var Lil_co_codeguru_corewars_1riscv_war_WarriorRepository$WarriorLoader_2_classLit = createForClass('il.co.codeguru.corewars_riscv.war', 'WarriorRepository/WarriorLoader', 162);
function WarriorRepository$lambda$0$Type(){
}

WarriorRepository$lambda$0$Type.displayName = 'il.co.codeguru.corewars_riscv.war.WarriorRepository$lambda$0$Type.WarriorRepository$lambda$0$Type';
defineClass(163, 1, {}, WarriorRepository$lambda$0$Type);
_.equals_0 = function equals_2(other){
  return this === other;
}
;
_.equals_0.displayName = 'il.co.codeguru.corewars_riscv.war.WarriorRepository$lambda$0$Type.equals';
_.compare = function compare_1(arg0, arg1){
  return $compareToIgnoreCase(castTo(arg0, 38).name_0, castTo(arg1, 38).name_0);
}
;
_.compare.displayName = 'il.co.codeguru.corewars_riscv.war.WarriorRepository$lambda$0$Type.compare';
var Lil_co_codeguru_corewars_1riscv_war_WarriorRepository$lambda$0$Type_2_classLit = createForClass('il.co.codeguru.corewars_riscv.war', 'WarriorRepository/lambda$0$Type', 163);
function $substring(this$static, begin){
  return $substring_0(this$static.string, begin);
}

$substring.displayName = 'java.lang.AbstractStringBuilder.$substring';
function $toString_2(this$static){
  return this$static.string;
}

$toString_2.displayName = 'java.lang.AbstractStringBuilder.$toString';
function AbstractStringBuilder(string){
  this.string = string;
}

AbstractStringBuilder.displayName = 'java.lang.AbstractStringBuilder.AbstractStringBuilder';
defineClass(89, 1, {139:1});
_.toString_0 = function toString_10(){
  return this.string;
}
;
_.toString_0.displayName = 'java.lang.AbstractStringBuilder.toString';
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 89);
function ArithmeticException(){
  RuntimeException.call(this);
}

ArithmeticException.displayName = 'java.lang.ArithmeticException.ArithmeticException';
function ArithmeticException_0(){
  RuntimeException_1.call(this, 'divide by zero');
}

ArithmeticException_0.displayName = 'java.lang.ArithmeticException.ArithmeticException';
defineClass(91, 8, $intern_3, ArithmeticException_0);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 91);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

IndexOutOfBoundsException.displayName = 'java.lang.IndexOutOfBoundsException.IndexOutOfBoundsException';
function IndexOutOfBoundsException_0(message){
  RuntimeException_1.call(this, message);
}

IndexOutOfBoundsException_0.displayName = 'java.lang.IndexOutOfBoundsException.IndexOutOfBoundsException';
defineClass(30, 8, $intern_24, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 30);
function ArrayIndexOutOfBoundsException(){
  IndexOutOfBoundsException.call(this);
}

ArrayIndexOutOfBoundsException.displayName = 'java.lang.ArrayIndexOutOfBoundsException.ArrayIndexOutOfBoundsException';
function ArrayIndexOutOfBoundsException_0(msg){
  IndexOutOfBoundsException_0.call(this, msg);
}

ArrayIndexOutOfBoundsException_0.displayName = 'java.lang.ArrayIndexOutOfBoundsException.ArrayIndexOutOfBoundsException';
defineClass(134, 30, $intern_24, ArrayIndexOutOfBoundsException, ArrayIndexOutOfBoundsException_0);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 134);
function ArrayStoreException(){
  RuntimeException.call(this);
}

ArrayStoreException.displayName = 'java.lang.ArrayStoreException.ArrayStoreException';
function ArrayStoreException_0(message){
  RuntimeException_1.call(this, message);
}

ArrayStoreException_0.displayName = 'java.lang.ArrayStoreException.ArrayStoreException';
defineClass(109, 8, $intern_3, ArrayStoreException, ArrayStoreException_0);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 109);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
}

$clinit_Boolean.displayName = 'java.lang.Boolean.$clinit';
function $compareTo_0(this$static, b){
  return compare_2((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
}

$compareTo_0.displayName = 'java.lang.Boolean.$compareTo';
function $compareTo_1(this$static, b){
  return $compareTo_0(this$static, (checkCriticalType(b == null || instanceOfBoolean(b)) , b));
}

$compareTo_1.displayName = 'java.lang.Boolean.$compareTo';
function $equals_2(this$static, o){
  return checkCriticalNotNull(this$static) , this$static === o;
}

$equals_2.displayName = 'java.lang.Boolean.$equals';
function $getClass_2(){
  return Ljava_lang_Boolean_2_classLit;
}

$getClass_2.displayName = 'java.lang.Boolean.$getClass';
function $hashCode_1(this$static){
  return (checkCriticalNotNull(this$static) , this$static)?1231:1237;
}

$hashCode_1.displayName = 'java.lang.Boolean.$hashCode';
function compare_2(x_0, y_0){
  $clinit_Boolean();
  return x_0 == y_0?0:x_0?1:-1;
}

compare_2.displayName = 'java.lang.Boolean.compare';
function compareTo_Ljava_lang_Object__I__devirtual$(this$static, other){
  $clinit_Boolean();
  return instanceOfString(this$static)?$compareTo_8(this$static, castToString(other)):instanceOfDouble(this$static)?$compareTo_2(this$static, castToDouble(other)):instanceOfBoolean(this$static)?$compareTo_0(this$static, (checkCriticalType(other == null || instanceOfBoolean(other)) , other)):this$static.compareTo(other);
}

compareTo_Ljava_lang_Object__I__devirtual$.displayName = 'java.lang.Boolean.compareTo_Ljava_lang_Object__I__devirtual$';
booleanCastMap = {3:1, 142:1, 28:1};
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 142);
function digit(c, radix){
  if (radix < 2 || radix > 36) {
    return -1;
  }
  if (c >= 48 && c < 48 + $wnd.Math.min(radix, 10)) {
    return c - 48;
  }
  if (c >= 97 && c < radix + 97 - 10) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < radix + 65 - 10) {
    return c - 65 + 10;
  }
  return -1;
}

digit.displayName = 'java.lang.Character.digit';
function ClassCastException(){
  RuntimeException_1.call(this, null);
}

ClassCastException.displayName = 'java.lang.ClassCastException.ClassCastException';
defineClass(144, 8, $intern_3, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 144);
function __parseAndValidateInt(s, radix){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw toJs(new NumberFormatException('null'));
  }
  if (radix < 2 || radix > 36) {
    throw toJs(new NumberFormatException('radix ' + radix + ' out of range'));
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0) == 45 || (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0) == 43))?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit((checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i)), radix) == -1) {
      throw toJs(new NumberFormatException('For input string: "' + s + '"'));
    }
  }
  toReturn = parseInt(s, radix);
  isTooLow = toReturn < $intern_15;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
   else if (isTooLow || toReturn > $intern_1) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return toReturn;
}

__parseAndValidateInt.displayName = 'java.lang.Number.__parseAndValidateInt';
function __parseAndValidateLong(s){
  var c, firstTime, head, i, length_0, maxDigits, minValue, negative, orig, radixPower, toReturn;
  if (s == null) {
    throw toJs(new NumberFormatException('null'));
  }
  orig = s;
  length_0 = s.length;
  negative = false;
  if (length_0 > 0) {
    c = (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0));
    if (c == 45 || c == 43) {
      s = s.substr(1);
      --length_0;
      negative = c == 45;
    }
  }
  if (length_0 == 0) {
    throw toJs(new NumberFormatException('For input string: "' + orig + '"'));
  }
  while (s.length > 0 && (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0) == 48)) {
    s = s.substr(1);
    --length_0;
  }
  if (length_0 > ($clinit_Number$__ParseLong() , maxLengthForRadix)[10]) {
    throw toJs(new NumberFormatException('For input string: "' + orig + '"'));
  }
  for (i = 0; i < length_0; i++) {
    if (digit((checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i)), 10) == -1) {
      throw toJs(new NumberFormatException('For input string: "' + orig + '"'));
    }
  }
  toReturn = 0;
  maxDigits = maxDigitsForRadix[10];
  radixPower = maxDigitsRadixPower[10];
  minValue = neg_0(maxValueForRadix[10]);
  firstTime = true;
  head = length_0 % maxDigits;
  if (head > 0) {
    toReturn = -parseInt(s.substr(0, head), 10);
    s = s.substr(head);
    length_0 -= head;
    firstTime = false;
  }
  while (length_0 >= maxDigits) {
    head = parseInt(s.substr(0, maxDigits), 10);
    s = s.substr(maxDigits);
    length_0 -= maxDigits;
    if (firstTime) {
      firstTime = false;
    }
     else {
      if (compare_0(toReturn, minValue) < 0) {
        throw toJs(new NumberFormatException('For input string: "' + orig + '"'));
      }
      toReturn = mul_0(toReturn, radixPower);
    }
    toReturn = sub_1(toReturn, head);
  }
  if (compare_0(toReturn, 0) > 0) {
    throw toJs(new NumberFormatException('For input string: "' + orig + '"'));
  }
  if (!negative) {
    toReturn = neg_0(toReturn);
    if (compare_0(toReturn, 0) < 0) {
      throw toJs(new NumberFormatException('For input string: "' + orig + '"'));
    }
  }
  return toReturn;
}

__parseAndValidateLong.displayName = 'java.lang.Number.__parseAndValidateLong';
defineClass(68, 1, {3:1, 68:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 68);
function $compareTo_2(this$static, b){
  return compare_3((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
}

$compareTo_2.displayName = 'java.lang.Double.$compareTo';
function $compareTo_3(this$static, b){
  return $compareTo_2(this$static, castToDouble(b));
}

$compareTo_3.displayName = 'java.lang.Double.$compareTo';
function $doubleValue(this$static){
  return checkCriticalNotNull(this$static) , this$static;
}

$doubleValue.displayName = 'java.lang.Double.$doubleValue';
function $equals_3(this$static, o){
  return checkCriticalNotNull(this$static) , this$static === o;
}

$equals_3.displayName = 'java.lang.Double.$equals';
function $getClass_3(){
  return Ljava_lang_Double_2_classLit;
}

$getClass_3.displayName = 'java.lang.Double.$getClass';
function $hashCode_2(this$static){
  return round_int((checkCriticalNotNull(this$static) , this$static));
}

$hashCode_2.displayName = 'java.lang.Double.$hashCode';
function compare_3(x_0, y_0){
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return 0;
  }
  return isNaN(x_0)?isNaN(y_0)?0:1:-1;
}

compare_3.displayName = 'java.lang.Double.compare';
doubleCastMap = {3:1, 28:1, 143:1, 68:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 143);
function $compareTo_4(this$static, b){
  return compare_3(this$static.value_0, b.value_0);
}

$compareTo_4.displayName = 'java.lang.Float.$compareTo';
function Float(value_0){
  this.value_0 = value_0;
}

Float.displayName = 'java.lang.Float.Float';
defineClass(51, 68, {3:1, 28:1, 51:1, 68:1}, Float);
_.compareTo = function compareTo_0(b){
  return $compareTo_4(this, castTo(b, 51));
}
;
_.compareTo.displayName = 'java.lang.Float.compareTo';
_.equals_0 = function equals_3(o){
  return instanceOf(o, 51) && castTo(o, 51).value_0 == this.value_0;
}
;
_.equals_0.displayName = 'java.lang.Float.equals';
_.hashCode_0 = function hashCode_2(){
  return round_int(this.value_0);
}
;
_.hashCode_0.displayName = 'java.lang.Float.hashCode';
_.toString_0 = function toString_12(){
  return '' + this.value_0;
}
;
_.toString_0.displayName = 'java.lang.Float.toString';
_.value_0 = 0;
var Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', 51);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

IllegalArgumentException.displayName = 'java.lang.IllegalArgumentException.IllegalArgumentException';
function IllegalArgumentException_0(message){
  RuntimeException_1.call(this, message);
}

IllegalArgumentException_0.displayName = 'java.lang.IllegalArgumentException.IllegalArgumentException';
defineClass(53, 8, $intern_3, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 53);
function IllegalStateException(){
  RuntimeException.call(this);
}

IllegalStateException.displayName = 'java.lang.IllegalStateException.IllegalStateException';
function IllegalStateException_0(s){
  RuntimeException_1.call(this, s);
}

IllegalStateException_0.displayName = 'java.lang.IllegalStateException.IllegalStateException';
defineClass(90, 8, $intern_3, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 90);
function $compareTo_5(this$static, b){
  return compare_4(this$static.value_0, b.value_0);
}

$compareTo_5.displayName = 'java.lang.Integer.$compareTo';
function $hashCode_3(this$static){
  return this$static.value_0;
}

$hashCode_3.displayName = 'java.lang.Integer.$hashCode';
function Integer(value_0){
  this.value_0 = value_0;
}

Integer.displayName = 'java.lang.Integer.Integer';
function compare_4(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

compare_4.displayName = 'java.lang.Integer.compare';
function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

numberOfLeadingZeros_0.displayName = 'java.lang.Integer.numberOfLeadingZeros';
function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

numberOfTrailingZeros.displayName = 'java.lang.Integer.numberOfTrailingZeros';
function toUnsigned(value_0){
  return value_0 >>> 0;
}

toUnsigned.displayName = 'java.lang.Integer.toUnsigned';
function valueOf_0(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues)[rebase];
    !result && (result = boxedValues[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

valueOf_0.displayName = 'java.lang.Integer.valueOf';
defineClass(29, 68, {3:1, 28:1, 29:1, 68:1}, Integer);
_.compareTo = function compareTo_1(b){
  return $compareTo_5(this, castTo(b, 29));
}
;
_.compareTo.displayName = 'java.lang.Integer.compareTo';
_.equals_0 = function equals_4(o){
  return instanceOf(o, 29) && castTo(o, 29).value_0 == this.value_0;
}
;
_.equals_0.displayName = 'java.lang.Integer.equals';
_.hashCode_0 = function hashCode_3(){
  return this.value_0;
}
;
_.hashCode_0.displayName = 'java.lang.Integer.hashCode';
_.toString_0 = function toString_13(){
  return '' + this.value_0;
}
;
_.toString_0.displayName = 'java.lang.Integer.toString';
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 29);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_2, 29, 256, 0, 1);
}

$clinit_Integer$BoxedValues.displayName = 'java.lang.Integer$BoxedValues.$clinit';
var boxedValues;
function $compareTo_6(this$static, b){
  return compare_5(this$static.value_0, b.value_0);
}

$compareTo_6.displayName = 'java.lang.Long.$compareTo';
function Long(value_0){
  this.value_0 = value_0;
}

Long.displayName = 'java.lang.Long.Long';
function compare_5(x_0, y_0){
  return compare_0(x_0, y_0) < 0?-1:compare_0(x_0, y_0) > 0?1:0;
}

compare_5.displayName = 'java.lang.Long.compare';
function valueOf_1(i){
  var rebase, result;
  if (compare_0(i, -129) > 0 && compare_0(i, 128) < 0) {
    rebase = toInt_0(i) + 128;
    result = ($clinit_Long$BoxedValues() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Long(i));
    return result;
  }
  return new Long(i);
}

valueOf_1.displayName = 'java.lang.Long.valueOf';
defineClass(52, 68, {3:1, 28:1, 52:1, 68:1}, Long);
_.compareTo = function compareTo_2(b){
  return $compareTo_6(this, castTo(b, 52));
}
;
_.compareTo.displayName = 'java.lang.Long.compareTo';
_.equals_0 = function equals_5(o){
  return instanceOf(o, 52) && eq(castTo(o, 52).value_0, this.value_0);
}
;
_.equals_0.displayName = 'java.lang.Long.equals';
_.hashCode_0 = function hashCode_4(){
  return toInt_0(this.value_0);
}
;
_.hashCode_0.displayName = 'java.lang.Long.hashCode';
_.toString_0 = function toString_14(){
  return '' + toString_4(this.value_0);
}
;
_.toString_0.displayName = 'java.lang.Long.toString';
_.value_0 = 0;
var Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 52);
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = emptyMethod;
  boxedValues_0 = initUnidimensionalArray(Ljava_lang_Long_2_classLit, $intern_2, 52, 256, 0, 1);
}

$clinit_Long$BoxedValues.displayName = 'java.lang.Long$BoxedValues.$clinit';
var boxedValues_0;
defineClass(388, 1, {});
function NullPointerException(){
  RuntimeException.call(this);
}

NullPointerException.displayName = 'java.lang.NullPointerException.NullPointerException';
function NullPointerException_0(typeError){
  JsException_0.call(this, typeError);
}

NullPointerException_0.displayName = 'java.lang.NullPointerException.NullPointerException';
function NullPointerException_1(message){
  RuntimeException_1.call(this, message);
}

NullPointerException_1.displayName = 'java.lang.NullPointerException.NullPointerException';
defineClass(87, 65, $intern_3, NullPointerException, NullPointerException_0, NullPointerException_1);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
_.createError.displayName = 'java.lang.NullPointerException.createError';
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 87);
function $clinit_Number$__ParseLong(){
  $clinit_Number$__ParseLong = emptyMethod;
  var i;
  maxDigitsForRadix = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_14, 11, 15, [-1, -1, 30, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
  maxDigitsRadixPower = initUnidimensionalArray(I_classLit, $intern_14, 11, 37, 15, 1);
  maxLengthForRadix = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_14, 11, 15, [-1, -1, 63, 40, 32, 28, 25, 23, 21, 20, 19, 19, 18, 18, 17, 17, 16, 16, 16, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 13, 13]);
  maxValueForRadix = initUnidimensionalArray(J_classLit, $intern_14, 11, 37, 14, 1);
  for (i = 2; i <= 36; i++) {
    maxDigitsRadixPower[i] = round_int($wnd.Math.pow(i, maxDigitsForRadix[i]));
    maxValueForRadix[i] = div($intern_25, maxDigitsRadixPower[i]);
  }
}

$clinit_Number$__ParseLong.displayName = 'java.lang.Number$__ParseLong.$clinit';
var maxDigitsForRadix, maxDigitsRadixPower, maxLengthForRadix, maxValueForRadix;
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

NumberFormatException.displayName = 'java.lang.NumberFormatException.NumberFormatException';
defineClass(16, 53, {3:1, 9:1, 16:1, 8:1, 7:1}, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 16);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

StackTraceElement.displayName = 'java.lang.StackTraceElement.StackTraceElement';
defineClass(37, 1, {3:1, 37:1}, StackTraceElement);
_.equals_0 = function equals_6(other){
  var st;
  if (instanceOf(other, 37)) {
    st = castTo(other, 37);
    return this.lineNumber == st.lineNumber && this.methodName == st.methodName && this.className == st.className && this.fileName == st.fileName;
  }
  return false;
}
;
_.equals_0.displayName = 'java.lang.StackTraceElement.equals';
_.hashCode_0 = function hashCode_5(){
  return hashCode_11(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 5, [valueOf_0(this.lineNumber), this.className, this.methodName, this.fileName]));
}
;
_.hashCode_0.displayName = 'java.lang.StackTraceElement.hashCode';
_.toString_0 = function toString_15(){
  return this.className + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.toString_0.displayName = 'java.lang.StackTraceElement.toString';
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 37);
function $charAt(this$static, index_0){
  checkCriticalStringElementIndex(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
}

$charAt.displayName = 'java.lang.String.$charAt';
function $compareTo_7(this$static, other){
  return $compareTo_8(this$static, castToString(other));
}

$compareTo_7.displayName = 'java.lang.String.$compareTo';
function $compareTo_8(this$static, other){
  var a, b;
  a = (checkCriticalNotNull(this$static) , this$static);
  b = (checkCriticalNotNull(other) , other);
  return a == b?0:a < b?-1:1;
}

$compareTo_8.displayName = 'java.lang.String.$compareTo';
function $compareToIgnoreCase(this$static, other){
  return $compareTo_8(this$static.toLowerCase(), other.toLowerCase());
}

$compareToIgnoreCase.displayName = 'java.lang.String.$compareToIgnoreCase';
function $endsWith(this$static, suffix){
  var suffixlength;
  suffixlength = suffix.length;
  return $equals_4(this$static.substr(this$static.length - suffixlength, suffixlength), suffix);
}

$endsWith.displayName = 'java.lang.String.$endsWith';
function $equals_4(this$static, other){
  return checkCriticalNotNull(this$static) , this$static === other;
}

$equals_4.displayName = 'java.lang.String.$equals';
function $getClass_4(){
  return Ljava_lang_String_2_classLit;
}

$getClass_4.displayName = 'java.lang.String.$getClass';
function $hashCode_4(this$static){
  return getHashCode_0(this$static);
}

$hashCode_4.displayName = 'java.lang.String.$hashCode';
function $indexOf(this$static, str){
  return this$static.indexOf(str);
}

$indexOf.displayName = 'java.lang.String.$indexOf';
function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

$lastIndexOf.displayName = 'java.lang.String.$lastIndexOf';
function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

$lastIndexOf_0.displayName = 'java.lang.String.$lastIndexOf';
function $regionMatches(this$static, toffset, other, len){
  var left, right;
  checkCriticalNotNull(other);
  if (toffset < 0 || len <= 0) {
    return false;
  }
  if (toffset + len > this$static.length || len > other.length) {
    return false;
  }
  left = this$static.substr(toffset, len);
  right = other.substr(0, len);
  return $equals_4(left, right);
}

$regionMatches.displayName = 'java.lang.String.$regionMatches';
function $replace(this$static, from, to){
  var hex, number, regex, replace;
  hex = (number = from >>> 0 , number.toString(16));
  regex = '\\u' + $substring_0('0000', hex.length) + hex;
  replace = String.fromCharCode(to);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

$replace.displayName = 'java.lang.String.$replace';
function $replace_0(this$static, from, to){
  var regex, replacement;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

$replace_0.displayName = 'java.lang.String.$replace';
function $replaceAll(this$static, regex, replace){
  replace = translateReplaceString(replace);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

$replaceAll.displayName = 'java.lang.String.$replaceAll';
function $split(this$static){
  var compiled, count, lastNonEmpty, lastTrail, matchIndex, matchObj, out, trail;
  compiled = new RegExp('\\n', 'g');
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_11, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '') {
      out[count] = trail;
      break;
    }
     else {
      matchIndex = matchObj.index;
      out[count] = trail.substr(0, matchIndex);
      trail = $substring_1(trail, matchIndex + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substr(0, 1);
        trail = trail.substr(1);
      }
      lastTrail = trail;
      ++count;
    }
  }
  if (this$static.length > 0) {
    lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && (out.length = lastNonEmpty);
  }
  return out;
}

$split.displayName = 'java.lang.String.$split';
function $substring_0(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

$substring_0.displayName = 'java.lang.String.$substring';
function $substring_1(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

$substring_1.displayName = 'java.lang.String.$substring';
function $trim(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && (checkCriticalStringElementIndex(start_0, this$static.length) , this$static.charCodeAt(start_0) <= 32)) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && (checkCriticalStringElementIndex(end - 1, this$static.length) , this$static.charCodeAt(end - 1) <= 32)) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

$trim.displayName = 'java.lang.String.$trim';
function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_21) {
    hiSurrogate = 55296 + (codePoint - $intern_21 >> 10 & 1023) & $intern_0;
    loSurrogate = 56320 + (codePoint - $intern_21 & 1023) & $intern_0;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & $intern_0);
  }
}

fromCodePoint.displayName = 'java.lang.String.fromCodePoint';
function translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    checkCriticalStringElementIndex(pos + 1, replaceStr.length);
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring_0(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + ('' + $substring_0(replaceStr, ++pos)));
  }
  return replaceStr;
}

translateReplaceString.displayName = 'java.lang.String.translateReplaceString';
stringCastMap = {3:1, 139:1, 28:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $append_0(this$static, x_0){
  this$static.string += String.fromCharCode(x_0);
  return this$static;
}

$append_0.displayName = 'java.lang.StringBuilder.$append';
function $append_1(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

$append_1.displayName = 'java.lang.StringBuilder.$append';
function $append_2(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

$append_2.displayName = 'java.lang.StringBuilder.$append';
function $append_3(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

$append_3.displayName = 'java.lang.StringBuilder.$append';
function $append_4(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

$append_4.displayName = 'java.lang.StringBuilder.$append';
function $append_5(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

$append_5.displayName = 'java.lang.StringBuilder.$append';
function $insert(this$static, index_0, x_0){
  this$static.string = $substring_1(this$static.string, 0, index_0) + ('' + x_0) + $substring_0(this$static.string, index_0);
  return this$static;
}

$insert.displayName = 'java.lang.StringBuilder.$insert';
function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

StringBuilder.displayName = 'java.lang.StringBuilder.StringBuilder';
function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

StringBuilder_0.displayName = 'java.lang.StringBuilder.StringBuilder';
function StringBuilder_1(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

StringBuilder_1.displayName = 'java.lang.StringBuilder.StringBuilder';
defineClass(22, 89, {139:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 22);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

StringIndexOutOfBoundsException.displayName = 'java.lang.StringIndexOutOfBoundsException.StringIndexOutOfBoundsException';
defineClass(149, 30, $intern_24, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 149);
function $clinit_System(){
  $clinit_System = emptyMethod;
  err = new PrintStream;
  new PrintStream;
}

$clinit_System.displayName = 'java.lang.System.$clinit';
function arraycopy(src_0, srcOfs, dest, destOfs, len){
  $clinit_System();
  var destArray, destComp, destEnd, destType, destlen, srcArray, srcComp, srcType, srclen;
  checkCriticalNotNull_0(src_0, 'src');
  checkCriticalNotNull_0(dest, 'dest');
  srcType = getClass__Ljava_lang_Class___devirtual$(src_0);
  destType = getClass__Ljava_lang_Class___devirtual$(dest);
  checkCriticalArrayType_0((srcType.modifiers & 4) != 0, 'srcType is not an array');
  checkCriticalArrayType_0((destType.modifiers & 4) != 0, 'destType is not an array');
  srcComp = srcType.componentType;
  destComp = destType.componentType;
  checkCriticalArrayType_0((srcComp.modifiers & 1) != 0?srcComp == destComp:(destComp.modifiers & 1) == 0, "Array types don't match");
  srclen = src_0.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if ((srcComp.modifiers & 1) == 0 && srcType != destType) {
    srcArray = castToArray(src_0);
    destArray = castToArray(dest);
    if (src_0 === dest && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        setCheck(destArray, destEnd, srcArray[--srcOfs]);
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        setCheck(destArray, destOfs++, srcArray[srcOfs++]);
      }
    }
  }
   else 
    len > 0 && copy_0(src_0, srcOfs, dest, destOfs, len, true);
}

arraycopy.displayName = 'java.lang.System.arraycopy';
defineClass(392, 1, {});
var err;
function UnsupportedOperationException(message){
  RuntimeException_1.call(this, message);
}

UnsupportedOperationException.displayName = 'java.lang.UnsupportedOperationException.UnsupportedOperationException';
defineClass(79, 8, $intern_3, UnsupportedOperationException);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 79);
function $addAll(this$static, c){
  var changed, e, e$iterator, old;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = new AbstractList$IteratorImpl(c); e$iterator.i < e$iterator.this$01.size_1();) {
    e = (checkCriticalElement(e$iterator.i < e$iterator.this$01.size_1()) , e$iterator.this$01.get_0(e$iterator.last = e$iterator.i++));
    changed = changed | (old = $put(this$static.map_0, e, this$static) , old == null);
  }
  return changed;
}

$addAll.displayName = 'java.util.AbstractCollection.$addAll';
function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_0();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      return true;
    }
  }
  return false;
}

$advanceToFind.displayName = 'java.util.AbstractCollection.$advanceToFind';
function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

$containsAll.displayName = 'java.util.AbstractCollection.$containsAll';
function $toArray(this$static){
  return $toArray_0(this$static, initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, $size(this$static.map_0), 5, 1));
}

$toArray.displayName = 'java.util.AbstractCollection.$toArray';
function $toArray_0(this$static, a){
  var i, it, size_0;
  size_0 = this$static.size_1();
  a.length < size_0 && (a = stampJavaTypeInfo_1(new Array(size_0), a));
  it = this$static.iterator();
  for (i = 0; i < size_0; ++i) {
    setCheck(a, i, it.next_0());
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}

$toArray_0.displayName = 'java.util.AbstractCollection.$toArray';
function $toString_3(this$static){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this$static.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    $add_5(joiner, e === this$static?'(this Collection)':e == null?'null':toString_5(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

$toString_3.displayName = 'java.util.AbstractCollection.$toString';
defineClass(339, 1, {35:1});
_.add_0 = function add_2(o){
  throw toJs(new UnsupportedOperationException('Add not supported on this collection'));
}
;
_.add_0.displayName = 'java.util.AbstractCollection.add';
_.contains_0 = function contains(o){
  return $advanceToFind(this, o);
}
;
_.contains_0.displayName = 'java.util.AbstractCollection.contains';
_.toArray = function toArray(a){
  return $toArray_0(this, a);
}
;
_.toArray.displayName = 'java.util.AbstractCollection.toArray';
_.toString_0 = function toString_16(){
  return $toString_3(this);
}
;
_.toString_0.displayName = 'java.util.AbstractCollection.toString';
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 339);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key))) {
    return false;
  }
  return true;
}

$containsEntry.displayName = 'java.util.AbstractMap.$containsEntry';
function $toString_4(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_5(o);
}

$toString_4.displayName = 'java.util.AbstractMap.$toString';
function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

getEntryValueOrNull.displayName = 'java.util.AbstractMap.getEntryValueOrNull';
defineClass(341, 1, {137:1});
_.equals_0 = function equals_7(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 46)) {
    return false;
  }
  otherMap = castTo(obj, 137);
  if (this.hashCodeMap.size_0 + this.stringMap.size_0 != otherMap.hashCodeMap.size_0 + otherMap.stringMap.size_0) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(otherMap)).this$01); entry$iterator.hasNext;) {
    entry = $next_1(entry$iterator);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.equals_0.displayName = 'java.util.AbstractMap.equals';
_.hashCode_0 = function hashCode_6(){
  return hashCode_12(new AbstractHashMap$EntrySet(this));
}
;
_.hashCode_0.displayName = 'java.util.AbstractMap.hashCode';
_.toString_0 = function toString_17(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); entry$iterator.hasNext;) {
    entry = $next_1(entry$iterator);
    $add_5(joiner, $toString_4(this, entry.getKey()) + '=' + $toString_4(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
_.toString_0.displayName = 'java.util.AbstractMap.toString';
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 341);
function $containsKey(this$static, key){
  return instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

$containsKey.displayName = 'java.util.AbstractHashMap.$containsKey';
function $containsValue(this$static, value_0){
  return $containsValue_0(value_0, this$static.stringMap) || $containsValue_0(value_0, this$static.hashCodeMap);
}

$containsValue.displayName = 'java.util.AbstractHashMap.$containsValue';
function $containsValue_0(value_0, entries){
  var entry, entry$iterator;
  for (entry$iterator = entries.iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_0(), 36);
    if ($equals_5(value_0, entry.getValue())) {
      return true;
    }
  }
  return false;
}

$containsValue_0.displayName = 'java.util.AbstractHashMap.$containsValue';
function $get_3(this$static, key){
  return getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

$get_3.displayName = 'java.util.AbstractHashMap.$get';
function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_6(this$static.stringMap, key);
}

$getStringValue.displayName = 'java.util.AbstractHashMap.$getStringValue';
function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_2(this$static.stringMap, key);
}

$hasStringValue.displayName = 'java.util.AbstractHashMap.$hasStringValue';
function $put(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

$put.displayName = 'java.util.AbstractHashMap.$put';
function $putStringValue(this$static, key, value_0){
  return key == null?$put_0(this$static.hashCodeMap, null, value_0):$put_1(this$static.stringMap, key, value_0);
}

$putStringValue.displayName = 'java.util.AbstractHashMap.$putStringValue';
function $remove(this$static, key){
  return $remove_3(this$static.hashCodeMap, key);
}

$remove.displayName = 'java.util.AbstractHashMap.$remove';
function $reset_0(this$static){
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  structureChanged(this$static);
}

$reset_0.displayName = 'java.util.AbstractHashMap.$reset';
function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

$size.displayName = 'java.util.AbstractHashMap.$size';
function AbstractHashMap(){
  $reset_0(this);
}

AbstractHashMap.displayName = 'java.util.AbstractHashMap.AbstractHashMap';
function AbstractHashMap_0(ignored){
  checkCriticalArgument_0(ignored >= 0, 'Negative initial capacity');
  checkCriticalArgument_0(true, 'Non-positive load factor');
  $reset_0(this);
}

AbstractHashMap_0.displayName = 'java.util.AbstractHashMap.AbstractHashMap';
function AbstractHashMap_1(ignored){
  checkCriticalArgument_0(ignored >= 0, 'Negative initial capacity');
  checkCriticalArgument_0(true, 'Non-positive load factor');
  $reset_0(this);
}

AbstractHashMap_1.displayName = 'java.util.AbstractHashMap.AbstractHashMap';
defineClass(97, 341, {137:1});
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 97);
defineClass(342, 339, $intern_26);
_.equals_0 = function equals_8(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 86)) {
    return false;
  }
  other = castTo(o, 86);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.equals_0.displayName = 'java.util.AbstractSet.equals';
_.hashCode_0 = function hashCode_7(){
  return hashCode_12(this);
}
;
_.hashCode_0.displayName = 'java.util.AbstractSet.hashCode';
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 342);
function $contains(this$static, o){
  if (instanceOf(o, 36)) {
    return $containsEntry(this$static.this$01, castTo(o, 36));
  }
  return false;
}

$contains.displayName = 'java.util.AbstractHashMap$EntrySet.$contains';
function $iterator(this$static){
  return new AbstractHashMap$EntrySetIterator(this$static.this$01);
}

$iterator.displayName = 'java.util.AbstractHashMap$EntrySet.$iterator';
function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

AbstractHashMap$EntrySet.displayName = 'java.util.AbstractHashMap$EntrySet.AbstractHashMap$EntrySet';
defineClass(32, 342, $intern_26, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.contains_0.displayName = 'java.util.AbstractHashMap$EntrySet.contains';
_.iterator = function iterator_0(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.iterator.displayName = 'java.util.AbstractHashMap$EntrySet.iterator';
_.size_1 = function size_1(){
  return $size(this.this$01);
}
;
_.size_1.displayName = 'java.util.AbstractHashMap$EntrySet.size';
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 32);
function $$init_29(this$static){
  this$static.stringMapEntries = new InternalStringMap$1(this$static.this$01.stringMap);
  this$static.current = this$static.stringMapEntries;
  this$static.hasNext = $computeHasNext(this$static);
}

$$init_29.displayName = 'java.util.AbstractHashMap$EntrySetIterator.$$init';
function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

$computeHasNext.displayName = 'java.util.AbstractHashMap$EntrySetIterator.$computeHasNext';
function $hasNext(this$static){
  return this$static.hasNext;
}

$hasNext.displayName = 'java.util.AbstractHashMap$EntrySetIterator.$hasNext';
function $next_0(this$static){
  return $next_1(this$static);
}

$next_0.displayName = 'java.util.AbstractHashMap$EntrySetIterator.$next';
function $next_1(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  rv = castTo(this$static.current.next_0(), 36);
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

$next_1.displayName = 'java.util.AbstractHashMap$EntrySetIterator.$next';
function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  this.$modCount = this$0.$modCount;
}

AbstractHashMap$EntrySetIterator.displayName = 'java.util.AbstractHashMap$EntrySetIterator.AbstractHashMap$EntrySetIterator';
defineClass(33, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_0 = function next_0(){
  return $next_1(this);
}
;
_.next_0.displayName = 'java.util.AbstractHashMap$EntrySetIterator.next';
_.hasNext_0 = function hasNext_0(){
  return this.hasNext;
}
;
_.hasNext_0.displayName = 'java.util.AbstractHashMap$EntrySetIterator.hasNext';
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 33);
function $indexOf_0(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.size_1(); i < n; ++i) {
    if (equals_13(toFind, this$static.get_0(i))) {
      return i;
    }
  }
  return -1;
}

$indexOf_0.displayName = 'java.util.AbstractList.$indexOf';
function $iterator_0(this$static){
  return new AbstractList$IteratorImpl(this$static);
}

$iterator_0.displayName = 'java.util.AbstractList.$iterator';
defineClass(340, 339, {35:1, 63:1});
_.add_1 = function add_3(index_0, element){
  throw toJs(new UnsupportedOperationException('Add not supported on this list'));
}
;
_.add_1.displayName = 'java.util.AbstractList.add';
_.add_0 = function add_4(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.add_0.displayName = 'java.util.AbstractList.add';
_.equals_0 = function equals_9(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 63)) {
    return false;
  }
  other = castTo(o, 63);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.equals_0.displayName = 'java.util.AbstractList.equals';
_.hashCode_0 = function hashCode_8(){
  return hashCode_13(this);
}
;
_.hashCode_0.displayName = 'java.util.AbstractList.hashCode';
_.iterator = function iterator_1(){
  return new AbstractList$IteratorImpl(this);
}
;
_.iterator.displayName = 'java.util.AbstractList.iterator';
_.remove_0 = function remove(index_0){
  throw toJs(new UnsupportedOperationException('Remove not supported on this list'));
}
;
_.remove_0.displayName = 'java.util.AbstractList.remove';
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 340);
function $$init_30(this$static){
}

$$init_30.displayName = 'java.util.AbstractList$IteratorImpl.$$init';
function $hasNext_0(this$static){
  return this$static.i < this$static.this$01.size_1();
}

$hasNext_0.displayName = 'java.util.AbstractList$IteratorImpl.$hasNext';
function $next_2(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.size_1());
  return this$static.this$01.get_0(this$static.last = this$static.i++);
}

$next_2.displayName = 'java.util.AbstractList$IteratorImpl.$next';
function $remove_0(this$static){
  checkCriticalState(this$static.last != -1);
  this$static.this$01.remove_0(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

$remove_0.displayName = 'java.util.AbstractList$IteratorImpl.$remove';
function AbstractList$IteratorImpl(this$0){
  this.this$01 = this$0;
}

AbstractList$IteratorImpl.displayName = 'java.util.AbstractList$IteratorImpl.AbstractList$IteratorImpl';
defineClass(93, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_1(){
  return this.i < this.this$01.size_1();
}
;
_.hasNext_0.displayName = 'java.util.AbstractList$IteratorImpl.hasNext';
_.next_0 = function next_1(){
  return checkCriticalElement(this.i < this.this$01.size_1()) , this.this$01.get_0(this.last = this.i++);
}
;
_.next_0.displayName = 'java.util.AbstractList$IteratorImpl.next';
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 93);
function AbstractList$ListIteratorImpl(this$0){
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(0, this$0.array.length);
  this.i = 0;
}

AbstractList$ListIteratorImpl.displayName = 'java.util.AbstractList$ListIteratorImpl.AbstractList$ListIteratorImpl';
defineClass(160, 93, {}, AbstractList$ListIteratorImpl);
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 160);
function $iterator_1(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}

$iterator_1.displayName = 'java.util.AbstractMap$1.$iterator';
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

AbstractMap$1.displayName = 'java.util.AbstractMap$1.AbstractMap$1';
defineClass(198, 342, $intern_26, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.contains_0.displayName = 'java.util.AbstractMap$1.contains';
_.iterator = function iterator_2(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.iterator.displayName = 'java.util.AbstractMap$1.iterator';
_.size_1 = function size_2(){
  return $size(this.this$01);
}
;
_.size_1.displayName = 'java.util.AbstractMap$1.size';
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 198);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

AbstractMap$1$1.displayName = 'java.util.AbstractMap$1$1.AbstractMap$1$1';
defineClass(113, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_2(){
  return this.val$outerIter2.hasNext;
}
;
_.hasNext_0.displayName = 'java.util.AbstractMap$1$1.hasNext';
_.next_0 = function next_2(){
  var entry;
  entry = $next_1(this.val$outerIter2);
  return entry.getKey();
}
;
_.next_0.displayName = 'java.util.AbstractMap$1$1.next';
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 113);
function $iterator_2(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$2$1(outerIter);
}

$iterator_2.displayName = 'java.util.AbstractMap$2.$iterator';
function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

AbstractMap$2.displayName = 'java.util.AbstractMap$2.AbstractMap$2';
defineClass(81, 339, {35:1}, AbstractMap$2);
_.contains_0 = function contains_2(value_0){
  return $containsValue(this.this$01, value_0);
}
;
_.contains_0.displayName = 'java.util.AbstractMap$2.contains';
_.iterator = function iterator_3(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$2$1(outerIter);
}
;
_.iterator.displayName = 'java.util.AbstractMap$2.iterator';
_.size_1 = function size_3(){
  return $size(this.this$01);
}
;
_.size_1.displayName = 'java.util.AbstractMap$2.size';
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 81);
function $hasNext_1(this$static){
  return this$static.val$outerIter2.hasNext;
}

$hasNext_1.displayName = 'java.util.AbstractMap$2$1.$hasNext';
function $next_3(this$static){
  var entry;
  entry = $next_1(this$static.val$outerIter2);
  return entry.getValue();
}

$next_3.displayName = 'java.util.AbstractMap$2$1.$next';
function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

AbstractMap$2$1.displayName = 'java.util.AbstractMap$2$1.AbstractMap$2$1';
defineClass(70, 1, {}, AbstractMap$2$1);
_.hasNext_0 = function hasNext_3(){
  return this.val$outerIter2.hasNext;
}
;
_.hasNext_0.displayName = 'java.util.AbstractMap$2$1.hasNext';
_.next_0 = function next_3(){
  var entry;
  return entry = $next_1(this.val$outerIter2) , entry.getValue();
}
;
_.next_0.displayName = 'java.util.AbstractMap$2$1.next';
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 70);
function AbstractMap$AbstractEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

AbstractMap$AbstractEntry.displayName = 'java.util.AbstractMap$AbstractEntry.AbstractMap$AbstractEntry';
defineClass(196, 1, $intern_27);
_.equals_0 = function equals_10(other){
  var entry;
  if (!instanceOf(other, 36)) {
    return false;
  }
  entry = castTo(other, 36);
  return equals_13(this.key_0, entry.getKey()) && equals_13(this.value_0, entry.getValue());
}
;
_.equals_0.displayName = 'java.util.AbstractMap$AbstractEntry.equals';
_.getKey = function getKey(){
  return this.key_0;
}
;
_.getKey.displayName = 'java.util.AbstractMap$AbstractEntry.getKey';
_.getValue = function getValue(){
  return this.value_0;
}
;
_.getValue.displayName = 'java.util.AbstractMap$AbstractEntry.getValue';
_.hashCode_0 = function hashCode_9(){
  return hashCode_14(this.key_0) ^ hashCode_14(this.value_0);
}
;
_.hashCode_0.displayName = 'java.util.AbstractMap$AbstractEntry.hashCode';
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.setValue.displayName = 'java.util.AbstractMap$AbstractEntry.setValue';
_.toString_0 = function toString_18(){
  return this.key_0 + '=' + this.value_0;
}
;
_.toString_0.displayName = 'java.util.AbstractMap$AbstractEntry.toString';
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 196);
function AbstractMap$SimpleEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

AbstractMap$SimpleEntry.displayName = 'java.util.AbstractMap$SimpleEntry.AbstractMap$SimpleEntry';
defineClass(197, 196, $intern_27, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 197);
defineClass(343, 1, $intern_27);
_.equals_0 = function equals_11(other){
  var entry;
  if (!instanceOf(other, 36)) {
    return false;
  }
  entry = castTo(other, 36);
  return equals_13(this.val$entry2.value[0], entry.getKey()) && equals_13($getValue(this), entry.getValue());
}
;
_.equals_0.displayName = 'java.util.AbstractMapEntry.equals';
_.hashCode_0 = function hashCode_10(){
  return hashCode_14(this.val$entry2.value[0]) ^ hashCode_14($getValue(this));
}
;
_.hashCode_0.displayName = 'java.util.AbstractMapEntry.hashCode';
_.toString_0 = function toString_19(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
_.toString_0.displayName = 'java.util.AbstractMapEntry.toString';
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 343);
function $$init_31(this$static){
  this$static.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
}

$$init_31.displayName = 'java.util.ArrayList.$$init';
function $add_1(this$static, index_0, o){
  checkCriticalPositionIndex(index_0, this$static.array.length);
  insertTo(this$static.array, index_0, o);
}

$add_1.displayName = 'java.util.ArrayList.$add';
function $add_2(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

$add_2.displayName = 'java.util.ArrayList.$add';
function $contains_0(this$static, o){
  return $indexOf_1(this$static, o, 0) != -1;
}

$contains_0.displayName = 'java.util.ArrayList.$contains';
function $get_4(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

$get_4.displayName = 'java.util.ArrayList.$get';
function $indexOf_1(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_13(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

$indexOf_1.displayName = 'java.util.ArrayList.$indexOf';
function $iterator_3(this$static){
  return new ArrayList$1(this$static);
}

$iterator_3.displayName = 'java.util.ArrayList.$iterator';
function $remove_1(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  removeFrom(this$static.array, index_0);
  return previous;
}

$remove_1.displayName = 'java.util.ArrayList.$remove';
function $remove_2(this$static, o){
  var i;
  i = $indexOf_1(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  checkCriticalElementIndex(i, this$static.array.length);
  removeFrom(this$static.array, i);
  return true;
}

$remove_2.displayName = 'java.util.ArrayList.$remove';
function $set(this$static, index_0, o){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  this$static.array[index_0] = o;
  return previous;
}

$set.displayName = 'java.util.ArrayList.$set';
function $size_0(this$static){
  return this$static.array.length;
}

$size_0.displayName = 'java.util.ArrayList.$size';
function $toArray_1(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_1(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

$toArray_1.displayName = 'java.util.ArrayList.$toArray';
function ArrayList(){
  $$init_31(this);
}

ArrayList.displayName = 'java.util.ArrayList.ArrayList';
function ArrayList_0(initialCapacity){
  $$init_31(this);
  checkCriticalArgument_0(initialCapacity >= 0, 'Initial capacity must not be negative');
}

ArrayList_0.displayName = 'java.util.ArrayList.ArrayList';
function ArrayList_1(c){
  $$init_31(this);
  insertTo_0(this.array, $toArray_2(c, initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, c.array.length, 5, 1)));
}

ArrayList_1.displayName = 'java.util.ArrayList.ArrayList';
defineClass(13, 340, $intern_28, ArrayList, ArrayList_0, ArrayList_1);
_.add_1 = function add_5(index_0, o){
  $add_1(this, index_0, o);
}
;
_.add_1.displayName = 'java.util.ArrayList.add';
_.add_0 = function add_6(o){
  return $add_2(this, o);
}
;
_.add_0.displayName = 'java.util.ArrayList.add';
_.contains_0 = function contains_3(o){
  return $indexOf_1(this, o, 0) != -1;
}
;
_.contains_0.displayName = 'java.util.ArrayList.contains';
_.get_0 = function get_0(index_0){
  return $get_4(this, index_0);
}
;
_.get_0.displayName = 'java.util.ArrayList.get';
_.iterator = function iterator_4(){
  return new ArrayList$1(this);
}
;
_.iterator.displayName = 'java.util.ArrayList.iterator';
_.remove_0 = function remove_0(index_0){
  return $remove_1(this, index_0);
}
;
_.remove_0.displayName = 'java.util.ArrayList.remove';
_.size_1 = function size_4(){
  return this.array.length;
}
;
_.size_1.displayName = 'java.util.ArrayList.size';
_.toArray = function toArray_0(out){
  return $toArray_1(this, out);
}
;
_.toArray.displayName = 'java.util.ArrayList.toArray';
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 13);
function $$init_32(this$static){
}

$$init_32.displayName = 'java.util.ArrayList$1.$$init';
function $hasNext_2(this$static){
  return this$static.i < this$static.this$01.array.length;
}

$hasNext_2.displayName = 'java.util.ArrayList$1.$hasNext';
function $next_4(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

$next_4.displayName = 'java.util.ArrayList$1.$next';
function ArrayList$1(this$0){
  this.this$01 = this$0;
}

ArrayList$1.displayName = 'java.util.ArrayList$1.ArrayList$1';
defineClass(14, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_4(){
  return this.i < this.this$01.array.length;
}
;
_.hasNext_0.displayName = 'java.util.ArrayList$1.hasNext';
_.next_0 = function next_4(){
  return $next_4(this);
}
;
_.next_0.displayName = 'java.util.ArrayList$1.next';
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 14);
function copyPrimitiveArray(original, copy){
  var copyLen, len;
  len = original.length;
  copyLen = $wnd.Math.min(512, len);
  copy_0(original, 0, copy, 0, copyLen, true);
  return copy;
}

copyPrimitiveArray.displayName = 'java.util.Arrays.copyPrimitiveArray';
function hashCode_11(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

hashCode_11.displayName = 'java.util.Arrays.hashCode';
function insertionSort(array, low, high, comp){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && comp.compare(array[j - 1], array[j]) > 0; --j) {
      t = array[j];
      setCheck(array, j, array[j - 1]);
      setCheck(array, j - 1, t);
    }
  }
}

insertionSort.displayName = 'java.util.Arrays.insertionSort';
function merge(src_0, srcLow, srcMid, srcHigh, dest, destLow, destHigh, comp){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && comp.compare(src_0[srcLow], src_0[topIdx]) <= 0?setCheck(dest, destLow++, src_0[srcLow++]):setCheck(dest, destLow++, src_0[topIdx++]);
  }
}

merge.displayName = 'java.util.Arrays.merge';
function mergeSort(x_0, fromIndex, toIndex, comp){
  var temp;
  comp = ($clinit_Comparators() , !comp?INTERNAL_NATURAL_ORDER:comp);
  temp = x_0.slice(fromIndex, toIndex);
  mergeSort_0(temp, x_0, fromIndex, toIndex, -fromIndex, comp);
}

mergeSort.displayName = 'java.util.Arrays.mergeSort';
function mergeSort_0(temp, array, low, high, ofs, comp){
  var length_0, tempHigh, tempLow, tempMid;
  length_0 = high - low;
  if (length_0 < 7) {
    insertionSort(array, low, high, comp);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  mergeSort_0(array, temp, tempLow, tempMid, -ofs, comp);
  mergeSort_0(array, temp, tempMid, tempHigh, -ofs, comp);
  if (comp.compare(temp[tempMid - 1], temp[tempMid]) <= 0) {
    while (low < high) {
      setCheck(array, low++, temp[tempLow++]);
    }
    return;
  }
  merge(temp, tempLow, tempMid, tempHigh, array, low, high, comp);
}

mergeSort_0.displayName = 'java.util.Arrays.mergeSort';
function sort_0(x_0, c){
  mergeSort(x_0, 0, x_0.length, c);
}

sort_0.displayName = 'java.util.Arrays.sort';
function spliterator_0(array, endExclusive){
  return checkCriticalArrayBounds(endExclusive, array.length) , new Spliterators$ArraySpliterator(array, endExclusive);
}

spliterator_0.displayName = 'java.util.Arrays.spliterator';
function stream(array){
  return new StreamImpl(null, spliterator_0(array, array.length));
}

stream.displayName = 'java.util.Arrays.stream';
function toString_20(x_0){
  if (x_0 == null) {
    return 'null';
  }
  return $toString_3(new Arrays$ArrayList(x_0));
}

toString_20.displayName = 'java.util.Arrays.toString';
function $get_5(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

$get_5.displayName = 'java.util.Arrays$ArrayList.$get';
function $size_1(this$static){
  return this$static.array.length;
}

$size_1.displayName = 'java.util.Arrays$ArrayList.$size';
function $toArray_2(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_1(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

$toArray_2.displayName = 'java.util.Arrays$ArrayList.$toArray';
function Arrays$ArrayList(array){
  checkCriticalNotNull(array);
  this.array = array;
}

Arrays$ArrayList.displayName = 'java.util.Arrays$ArrayList.Arrays$ArrayList';
defineClass(92, 340, $intern_28, Arrays$ArrayList);
_.contains_0 = function contains_4(o){
  return $indexOf_0(this, o) != -1;
}
;
_.contains_0.displayName = 'java.util.Arrays$ArrayList.contains';
_.get_0 = function get_1(index_0){
  return checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.get_0.displayName = 'java.util.Arrays$ArrayList.get';
_.size_1 = function size_5(){
  return this.array.length;
}
;
_.size_1.displayName = 'java.util.Arrays$ArrayList.size';
_.toArray = function toArray_1(out){
  return $toArray_2(this, out);
}
;
_.toArray.displayName = 'java.util.Arrays$ArrayList.toArray';
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 92);
function hashCode_12(collection){
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

hashCode_12.displayName = 'java.util.Collections.hashCode';
function hashCode_13(list){
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

hashCode_13.displayName = 'java.util.Collections.hashCode';
function $clinit_Comparators(){
  $clinit_Comparators = emptyMethod;
  INTERNAL_NATURAL_ORDER = new Comparators$NaturalOrderComparator;
}

$clinit_Comparators.displayName = 'java.util.Comparators.$clinit';
var INTERNAL_NATURAL_ORDER;
function $compare(a, b){
  return checkCriticalNotNull(a) , compareTo_Ljava_lang_Object__I__devirtual$(a, (checkCriticalNotNull(b) , b));
}

$compare.displayName = 'java.util.Comparators$NaturalOrderComparator.$compare';
function Comparators$NaturalOrderComparator(){
}

Comparators$NaturalOrderComparator.displayName = 'java.util.Comparators$NaturalOrderComparator.Comparators$NaturalOrderComparator';
defineClass(299, 1, $intern_14, Comparators$NaturalOrderComparator);
_.compare = function compare_6(a, b){
  return $compare(castTo(a, 28), castTo(b, 28));
}
;
_.compare.displayName = 'java.util.Comparators$NaturalOrderComparator.compare';
_.equals_0 = function equals_12(other){
  return this === other;
}
;
_.equals_0.displayName = 'java.util.Comparators$NaturalOrderComparator.equals';
var Ljava_util_Comparators$NaturalOrderComparator_2_classLit = createForClass('java.util', 'Comparators/NaturalOrderComparator', 299);
function checkStructuralChange(host, iterator){
  if (iterator.$modCount != host.$modCount) {
    throw toJs(new ConcurrentModificationException);
  }
}

checkStructuralChange.displayName = 'java.util.ConcurrentModificationDetector.checkStructuralChange';
function structureChanged(host){
  var modCount, modCountable;
  modCountable = host;
  modCount = modCountable.$modCount | 0;
  modCountable.$modCount = modCount + 1;
}

structureChanged.displayName = 'java.util.ConcurrentModificationDetector.structureChanged';
function ConcurrentModificationException(){
  RuntimeException.call(this);
}

ConcurrentModificationException.displayName = 'java.util.ConcurrentModificationException.ConcurrentModificationException';
defineClass(315, 8, $intern_3, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 315);
function EmptyStackException(){
  RuntimeException.call(this);
}

EmptyStackException.displayName = 'java.util.EmptyStackException.EmptyStackException';
defineClass(121, 8, $intern_3, EmptyStackException);
var Ljava_util_EmptyStackException_2_classLit = createForClass('java.util', 'EmptyStackException', 121);
function $equals_5(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

$equals_5.displayName = 'java.util.HashMap.$equals';
function HashMap(){
  $reset_0(this);
}

HashMap.displayName = 'java.util.HashMap.HashMap';
function HashMap_0(ignored){
  checkCriticalArgument_0(ignored >= 0, 'Negative initial capacity');
  checkCriticalArgument_0(true, 'Non-positive load factor');
  $reset_0(this);
}

HashMap_0.displayName = 'java.util.HashMap.HashMap';
defineClass(46, 97, {3:1, 46:1, 137:1}, HashMap, HashMap_0);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 46);
function $add_3(this$static, o){
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

$add_3.displayName = 'java.util.HashSet.$add';
function $contains_1(this$static, o){
  return $containsKey(this$static.map_0, o);
}

$contains_1.displayName = 'java.util.HashSet.$contains';
function $size_2(this$static){
  return $size(this$static.map_0);
}

$size_2.displayName = 'java.util.HashSet.$size';
function HashSet(){
  this.map_0 = new HashMap;
}

HashSet.displayName = 'java.util.HashSet.HashSet';
function HashSet_0(c){
  this.map_0 = new HashMap_0(c.array.length);
  $addAll(this, c);
}

HashSet_0.displayName = 'java.util.HashSet.HashSet';
defineClass(118, 342, {3:1, 35:1, 86:1}, HashSet, HashSet_0);
_.add_0 = function add_7(o){
  return $add_3(this, o);
}
;
_.add_0.displayName = 'java.util.HashSet.add';
_.contains_0 = function contains_5(o){
  return $contains_1(this, o);
}
;
_.contains_0.displayName = 'java.util.HashSet.contains';
_.iterator = function iterator_5(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.iterator.displayName = 'java.util.HashSet.iterator';
_.size_1 = function size_6(){
  return $size(this.map_0);
}
;
_.size_1.displayName = 'java.util.HashSet.size';
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 118);
function $$init_33(this$static){
  this$static.backingMap = newJsMap();
}

$$init_33.displayName = 'java.util.InternalHashCodeMap.$$init';
function $findEntryInChain(key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_5(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

$findEntryInChain.displayName = 'java.util.InternalHashCodeMap.$findEntryInChain';
function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?new Array:chain;
}

$getChainOrEmpty.displayName = 'java.util.InternalHashCodeMap.$getChainOrEmpty';
function $getEntry(this$static, key){
  var hashCode;
  return $findEntryInChain(key, $getChainOrEmpty(this$static, key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0)));
}

$getEntry.displayName = 'java.util.InternalHashCodeMap.$getEntry';
function $iterator_4(this$static){
  return new InternalHashCodeMap$1(this$static);
}

$iterator_4.displayName = 'java.util.InternalHashCodeMap.$iterator';
function $put_0(this$static, key, value_0){
  var chain, chain0, entry, hashCode, hashCode0;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?new Array:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode0, chain0);
  }
   else {
    entry = $findEntryInChain(key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain0, chain0.length, new AbstractMap$SimpleEntry(key, value_0));
  ++this$static.size_0;
  structureChanged(this$static.host_0);
  return null;
}

$put_0.displayName = 'java.util.InternalHashCodeMap.$put';
function $remove_3(this$static, key){
  var chain, chain0, entry, hashCode, hashCode0, i;
  hashCode0 = !key?0:(hashCode = key.value_0 , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?new Array:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if ($equals_5(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        $delete(this$static.backingMap, hashCode0);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      structureChanged(this$static.host_0);
      return entry.getValue();
    }
  }
  return null;
}

$remove_3.displayName = 'java.util.InternalHashCodeMap.$remove';
function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host_0 = host;
}

InternalHashCodeMap.displayName = 'java.util.InternalHashCodeMap.InternalHashCodeMap';
defineClass(220, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_6(){
  return new InternalHashCodeMap$1(this);
}
;
_.iterator.displayName = 'java.util.InternalHashCodeMap.iterator';
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 220);
function $$init_34(this$static){
  this$static.chains = this$static.this$01.backingMap.entries();
  this$static.chain = new Array;
}

$$init_34.displayName = 'java.util.InternalHashCodeMap$1.$$init';
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = new Array;
}

InternalHashCodeMap$1.displayName = 'java.util.InternalHashCodeMap$1.InternalHashCodeMap$1';
defineClass(116, 1, {}, InternalHashCodeMap$1);
_.next_0 = function next_5(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.next_0.displayName = 'java.util.InternalHashCodeMap$1.next';
_.hasNext_0 = function hasNext_5(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.hasNext_0.displayName = 'java.util.InternalHashCodeMap$1.hasNext';
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 116);
function $delete(this$static, key){
  var fn;
  fn = this$static['delete'];
  fn.call(this$static, key);
}

$delete.displayName = 'java.util.InternalJsMap.$delete';
function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

$clinit_InternalJsMapFactory.displayName = 'java.util.InternalJsMapFactory.$clinit';
function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

canHandleObjectCreateAndProto.displayName = 'java.util.InternalJsMapFactory.canHandleObjectCreateAndProto';
function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

getJsMapConstructor.displayName = 'java.util.InternalJsMapFactory.getJsMapConstructor';
function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

getJsMapPolyFill.displayName = 'java.util.InternalJsMapFactory.getJsMapPolyFill';
function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

newJsMap.displayName = 'java.util.InternalJsMapFactory.newJsMap';
var jsMapCtor;
function $$init_35(this$static){
  this$static.backingMap = newJsMap();
}

$$init_35.displayName = 'java.util.InternalStringMap.$$init';
function $contains_2(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

$contains_2.displayName = 'java.util.InternalStringMap.$contains';
function $get_6(this$static, key){
  return this$static.backingMap.get(key);
}

$get_6.displayName = 'java.util.InternalStringMap.$get';
function $iterator_5(this$static){
  return new InternalStringMap$1(this$static);
}

$iterator_5.displayName = 'java.util.InternalStringMap.$iterator';
function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host_0);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

$put_1.displayName = 'java.util.InternalStringMap.$put';
function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host_0 = host;
}

InternalStringMap.displayName = 'java.util.InternalStringMap.InternalStringMap';
defineClass(221, 1, {}, InternalStringMap);
_.iterator = function iterator_7(){
  return new InternalStringMap$1(this);
}
;
_.iterator.displayName = 'java.util.InternalStringMap.iterator';
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 221);
function $$init_36(this$static){
  this$static.entries_0 = this$static.this$01.backingMap.entries();
  this$static.current = this$static.entries_0.next();
}

$$init_36.displayName = 'java.util.InternalStringMap$1.$$init';
function $next_5(this$static){
  this$static.last = this$static.current;
  this$static.current = this$static.entries_0.next();
  return new InternalStringMap$2(this$static.this$01, this$static.last, this$static.this$01.valueMod);
}

$next_5.displayName = 'java.util.InternalStringMap$1.$next';
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

InternalStringMap$1.displayName = 'java.util.InternalStringMap$1.InternalStringMap$1';
defineClass(117, 1, {}, InternalStringMap$1);
_.next_0 = function next_6(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.next_0.displayName = 'java.util.InternalStringMap$1.next';
_.hasNext_0 = function hasNext_6(){
  return !this.current.done;
}
;
_.hasNext_0.displayName = 'java.util.InternalStringMap$1.hasNext';
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 117);
function $getKey(this$static){
  return this$static.val$entry2.value[0];
}

$getKey.displayName = 'java.util.InternalStringMap$2.$getKey';
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_6(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

$getValue.displayName = 'java.util.InternalStringMap$2.$getValue';
function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

InternalStringMap$2.displayName = 'java.util.InternalStringMap$2.InternalStringMap$2';
defineClass(222, 343, $intern_27, InternalStringMap$2);
_.getKey = function getKey_0(){
  return this.val$entry2.value[0];
}
;
_.getKey.displayName = 'java.util.InternalStringMap$2.getKey';
_.getValue = function getValue_0(){
  return $getValue(this);
}
;
_.getValue.displayName = 'java.util.InternalStringMap$2.getValue';
_.setValue = function setValue_0(object){
  return $put_1(this.this$01, this.val$entry2.value[0], object);
}
;
_.setValue.displayName = 'java.util.InternalStringMap$2.setValue';
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 222);
function NoSuchElementException(){
  RuntimeException.call(this);
}

NoSuchElementException.displayName = 'java.util.NoSuchElementException.NoSuchElementException';
defineClass(290, 8, $intern_3, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 290);
function equals_13(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

equals_13.displayName = 'java.util.Objects.equals';
function hashCode_14(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

hashCode_14.displayName = 'java.util.Objects.hashCode';
function $clinit_Random(){
  $clinit_Random = emptyMethod;
  var i, i0, twoToTheXMinus24Tmp, twoToTheXMinus48Tmp;
  twoToTheXMinus24 = initUnidimensionalArray(D_classLit, $intern_14, 11, 25, 15, 1);
  twoToTheXMinus48 = initUnidimensionalArray(D_classLit, $intern_14, 11, 33, 15, 1);
  twoToTheXMinus48Tmp = 1.52587890625E-5;
  for (i0 = 32; i0 >= 0; i0--) {
    twoToTheXMinus48[i0] = twoToTheXMinus48Tmp;
    twoToTheXMinus48Tmp *= 0.5;
  }
  twoToTheXMinus24Tmp = 1;
  for (i = 24; i >= 0; i--) {
    twoToTheXMinus24[i] = twoToTheXMinus24Tmp;
    twoToTheXMinus24Tmp *= 0.5;
  }
}

$clinit_Random.displayName = 'java.util.Random.$clinit';
function $nextInt(this$static, n){
  var bits, val;
  checkCriticalArgument(n > 0);
  if ((n & -n) == n) {
    return round_int(n * $nextInternal(this$static) * 4.6566128730773926E-10);
  }
  do {
    bits = $nextInternal(this$static);
    val = bits % n;
  }
   while (bits - val + (n - 1) < 0);
  return round_int(val);
}

$nextInt.displayName = 'java.util.Random.$nextInt';
function $nextInternal(this$static){
  var carry, dval, h, hi, l, lo;
  hi = this$static.seedhi * $intern_29 + this$static.seedlo * 1502;
  lo = this$static.seedlo * $intern_29 + 11;
  carry = $wnd.Math.floor(lo * $intern_30);
  hi += carry;
  lo -= carry * $intern_31;
  hi %= $intern_31;
  this$static.seedhi = hi;
  this$static.seedlo = lo;
  h = this$static.seedhi * 128;
  l = $wnd.Math.floor(this$static.seedlo * twoToTheXMinus48[31]);
  dval = h + l;
  dval >= 2147483648 && (dval -= 4294967296);
  return dval;
}

$nextInternal.displayName = 'java.util.Random.$nextInternal';
function $setSeed_1(this$static, seedhi, seedlo){
  this$static.seedhi = seedhi ^ 1502;
  this$static.seedlo = seedlo ^ $intern_29;
}

$setSeed_1.displayName = 'java.util.Random.$setSeed';
function $setSeed_2(this$static, seed){
  $setSeed_1(this$static, toInt_0(and_0(shr_0(seed, 24), $intern_32)), toInt_0(and_0(seed, $intern_32)));
}

$setSeed_2.displayName = 'java.util.Random.$setSeed';
function Random(){
  $clinit_Random();
  var hi, lo, seed;
  seed = uniqueSeed++ + Date.now();
  hi = round_int($wnd.Math.floor(seed * $intern_30)) & $intern_32;
  lo = round_int(seed - hi * $intern_31);
  this.seedhi = hi ^ 1502;
  this.seedlo = lo ^ $intern_29;
}

Random.displayName = 'java.util.Random.Random';
defineClass(306, 1, {}, Random);
_.seedhi = 0;
_.seedlo = 0;
var twoToTheXMinus24, twoToTheXMinus48, uniqueSeed = 0;
var Ljava_util_Random_2_classLit = createForClass('java.util', 'Random', 306);
function $forEachRemaining(this$static, consumer){
  while (this$static.tryAdvance(consumer))
  ;
}

$forEachRemaining.displayName = 'java.util.Spliterator.$forEachRemaining';
function checkCriticalArrayBounds(end, length_0){
  if (0 > end || end > length_0) {
    throw toJs(new ArrayIndexOutOfBoundsException_0('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

checkCriticalArrayBounds.displayName = 'java.util.Spliterators.checkCriticalArrayBounds';
function Spliterators$BaseSpliterator(size_0, characteristics){
  this.sizeEstimate = size_0;
  this.characteristics = (characteristics & 64) != 0?characteristics | 16384:characteristics;
}

Spliterators$BaseSpliterator.displayName = 'java.util.Spliterators$BaseSpliterator.Spliterators$BaseSpliterator';
defineClass(292, 1, {});
_.forEachRemaining = function forEachRemaining(consumer){
  $forEachRemaining(this, consumer);
}
;
_.forEachRemaining.displayName = 'java.util.Spliterators$BaseSpliterator.forEachRemaining';
_.characteristics_0 = function characteristics_0(){
  return this.characteristics;
}
;
_.characteristics_0.displayName = 'java.util.Spliterators$BaseSpliterator.characteristics';
_.estimateSize = function estimateSize(){
  return this.sizeEstimate;
}
;
_.estimateSize.displayName = 'java.util.Spliterators$BaseSpliterator.estimateSize';
_.characteristics = 0;
_.sizeEstimate = 0;
var Ljava_util_Spliterators$BaseSpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseSpliterator', 292);
function Spliterators$AbstractSpliterator(size_0, characteristics){
  this.sizeEstimate = size_0;
  this.characteristics = (characteristics & 64) != 0?characteristics | 16384:characteristics;
}

Spliterators$AbstractSpliterator.displayName = 'java.util.Spliterators$AbstractSpliterator.Spliterators$AbstractSpliterator';
defineClass(293, 292, {});
var Ljava_util_Spliterators$AbstractSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractSpliterator', 293);
function $forEachRemaining_0(this$static, consumer){
  checkCriticalNotNull(consumer);
  while (this$static.index_0 < this$static.limit) {
    $consume(this$static, consumer, this$static.index_0++);
  }
}

$forEachRemaining_0.displayName = 'java.util.Spliterators$BaseArraySpliterator.$forEachRemaining';
function $tryAdvance(this$static, consumer){
  checkCriticalNotNull(consumer);
  if (this$static.index_0 < this$static.limit) {
    $consume(this$static, consumer, this$static.index_0++);
    return true;
  }
  return false;
}

$tryAdvance.displayName = 'java.util.Spliterators$BaseArraySpliterator.$tryAdvance';
function Spliterators$BaseArraySpliterator(limit){
  this.index_0 = 0;
  this.limit = limit;
  this.characteristics = 17488;
}

Spliterators$BaseArraySpliterator.displayName = 'java.util.Spliterators$BaseArraySpliterator.Spliterators$BaseArraySpliterator';
defineClass(215, 1, {});
_.forEachRemaining = function forEachRemaining_0(consumer){
  $forEachRemaining(this, consumer);
}
;
_.forEachRemaining.displayName = 'java.util.Spliterators$BaseArraySpliterator.forEachRemaining';
_.characteristics_0 = function characteristics_1(){
  return this.characteristics;
}
;
_.characteristics_0.displayName = 'java.util.Spliterators$BaseArraySpliterator.characteristics';
_.estimateSize = function estimateSize_0(){
  return this.limit - this.index_0;
}
;
_.estimateSize.displayName = 'java.util.Spliterators$BaseArraySpliterator.estimateSize';
_.characteristics = 0;
_.index_0 = 0;
_.limit = 0;
var Ljava_util_Spliterators$BaseArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseArraySpliterator', 215);
function $consume(this$static, consumer, index_0){
  consumer.accept(this$static.array[index_0]);
}

$consume.displayName = 'java.util.Spliterators$ArraySpliterator.$consume';
function Spliterators$ArraySpliterator(array, limit){
  this.index_0 = 0;
  this.limit = limit;
  this.characteristics = 17488;
  this.array = array;
}

Spliterators$ArraySpliterator.displayName = 'java.util.Spliterators$ArraySpliterator.Spliterators$ArraySpliterator';
defineClass(216, 215, {}, Spliterators$ArraySpliterator);
_.forEachRemaining = function forEachRemaining_1(consumer){
  $forEachRemaining_0(this, consumer);
}
;
_.forEachRemaining.displayName = 'java.util.Spliterators$ArraySpliterator.forEachRemaining';
_.tryAdvance = function tryAdvance(consumer){
  return $tryAdvance(this, consumer);
}
;
_.tryAdvance.displayName = 'java.util.Spliterators$ArraySpliterator.tryAdvance';
var Ljava_util_Spliterators$ArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/ArraySpliterator', 216);
function $add_4(this$static, o){
  return $add_2(this$static.arrayList, o);
}

$add_4.displayName = 'java.util.Vector.$add';
function $get_7(this$static, index_0){
  checkArrayElementIndex(index_0, this$static.arrayList.array.length);
  return $get_4(this$static.arrayList, index_0);
}

$get_7.displayName = 'java.util.Vector.$get';
function $remove_4(this$static, index_0){
  checkArrayElementIndex(index_0, this$static.arrayList.array.length);
  return $remove_1(this$static.arrayList, index_0);
}

$remove_4.displayName = 'java.util.Vector.$remove';
function $size_3(this$static){
  return this$static.arrayList.array.length;
}

$size_3.displayName = 'java.util.Vector.$size';
function Vector(){
  this.arrayList = new ArrayList;
}

Vector.displayName = 'java.util.Vector.Vector';
function checkArrayElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new ArrayIndexOutOfBoundsException);
  }
}

checkArrayElementIndex.displayName = 'java.util.Vector.checkArrayElementIndex';
defineClass(287, 340, $intern_28);
_.add_1 = function add_8(index_0, o){
  checkArrayElementIndex(index_0, this.arrayList.array.length + 1);
  $add_1(this.arrayList, index_0, o);
}
;
_.add_1.displayName = 'java.util.Vector.add';
_.add_0 = function add_9(o){
  return $add_2(this.arrayList, o);
}
;
_.add_0.displayName = 'java.util.Vector.add';
_.contains_0 = function contains_6(elem){
  return $indexOf_1(this.arrayList, elem, 0) != -1;
}
;
_.contains_0.displayName = 'java.util.Vector.contains';
_.get_0 = function get_2(index_0){
  return checkArrayElementIndex(index_0, this.arrayList.array.length) , $get_4(this.arrayList, index_0);
}
;
_.get_0.displayName = 'java.util.Vector.get';
_.iterator = function iterator_8(){
  return new ArrayList$1(this.arrayList);
}
;
_.iterator.displayName = 'java.util.Vector.iterator';
_.remove_0 = function remove_1(index_0){
  return checkArrayElementIndex(index_0, this.arrayList.array.length) , $remove_1(this.arrayList, index_0);
}
;
_.remove_0.displayName = 'java.util.Vector.remove';
_.size_1 = function size_7(){
  return this.arrayList.array.length;
}
;
_.size_1.displayName = 'java.util.Vector.size';
_.toArray = function toArray_2(a){
  return $toArray_1(this.arrayList, a);
}
;
_.toArray.displayName = 'java.util.Vector.toArray';
_.toString_0 = function toString_21(){
  return $toString_3(this.arrayList);
}
;
_.toString_0.displayName = 'java.util.Vector.toString';
var Ljava_util_Vector_2_classLit = createForClass('java.util', 'Vector', 287);
function $peek(this$static){
  var sz;
  sz = this$static.arrayList.array.length;
  if (sz > 0) {
    return checkArrayElementIndex(sz - 1, this$static.arrayList.array.length) , $get_4(this$static.arrayList, sz - 1);
  }
   else {
    throw toJs(new EmptyStackException);
  }
}

$peek.displayName = 'java.util.Stack.$peek';
function $pop(this$static){
  var sz;
  sz = this$static.arrayList.array.length;
  if (sz > 0) {
    return checkArrayElementIndex(sz - 1, this$static.arrayList.array.length) , $remove_1(this$static.arrayList, sz - 1);
  }
   else {
    throw toJs(new EmptyStackException);
  }
}

$pop.displayName = 'java.util.Stack.$pop';
function $push_0(this$static, o){
  $add_2(this$static.arrayList, o);
  return o;
}

$push_0.displayName = 'java.util.Stack.$push';
function Stack(){
  this.arrayList = new ArrayList;
}

Stack.displayName = 'java.util.Stack.Stack';
defineClass(288, 287, $intern_28, Stack);
var Ljava_util_Stack_2_classLit = createForClass('java.util', 'Stack', 288);
function $add_5(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_1(this$static.prefix)):$append_5(this$static.builder, this$static.delimiter);
  $append_3(this$static.builder, newElement);
  return this$static;
}

$add_5.displayName = 'java.util.StringJoiner.$add';
function $toString_5(this$static){
  return !this$static.builder?this$static.emptyValue:this$static.suffix.length == 0?this$static.builder.string:this$static.builder.string + ('' + this$static.suffix);
}

$toString_5.displayName = 'java.util.StringJoiner.$toString';
function StringJoiner(prefix, suffix){
  this.delimiter = ', ';
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ('' + this.suffix);
}

StringJoiner.displayName = 'java.util.StringJoiner.StringJoiner';
defineClass(107, 1, {}, StringJoiner);
_.toString_0 = function toString_22(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
_.toString_0.displayName = 'java.util.StringJoiner.toString';
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 107);
function of_0(supplier, accumulator, combiner, characteristics){
  checkCriticalNotNull(supplier);
  checkCriticalNotNull(accumulator);
  checkCriticalNotNull(combiner);
  checkCriticalNotNull(characteristics);
  return new CollectorImpl;
}

of_0.displayName = 'java.util.stream.Collector.of';
function $clinit_Collector$Characteristics(){
  $clinit_Collector$Characteristics = emptyMethod;
  CONCURRENT = new Collector$Characteristics('CONCURRENT', 0);
  IDENTITY_FINISH = new Collector$Characteristics('IDENTITY_FINISH', 1);
  UNORDERED = new Collector$Characteristics('UNORDERED', 2);
}

$clinit_Collector$Characteristics.displayName = 'java.util.stream.Collector$Characteristics.$clinit';
function Collector$Characteristics(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

Collector$Characteristics.displayName = 'java.util.stream.Collector$Characteristics.Collector$Characteristics';
function values_2(){
  $clinit_Collector$Characteristics();
  return stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_2, 62, 0, [CONCURRENT, IDENTITY_FINISH, UNORDERED]);
}

values_2.displayName = 'java.util.stream.Collector$Characteristics.values';
defineClass(62, 44, {3:1, 28:1, 44:1, 62:1}, Collector$Characteristics);
var CONCURRENT, IDENTITY_FINISH, UNORDERED;
var Ljava_util_stream_Collector$Characteristics_2_classLit = createForEnum('java.util.stream', 'Collector/Characteristics', 62, values_2);
function CollectorImpl(){
}

CollectorImpl.displayName = 'java.util.stream.CollectorImpl.CollectorImpl';
defineClass(320, 1, {}, CollectorImpl);
var Ljava_util_stream_CollectorImpl_2_classLit = createForClass('java.util.stream', 'CollectorImpl', 320);
function Collectors$20methodref$add$Type(){
}

Collectors$20methodref$add$Type.displayName = 'java.util.stream.Collectors$20methodref$add$Type.Collectors$20methodref$add$Type';
defineClass(307, 1, {}, Collectors$20methodref$add$Type);
var Ljava_util_stream_Collectors$20methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/20methodref$add$Type', 307);
function Collectors$21methodref$ctor$Type(){
}

Collectors$21methodref$ctor$Type.displayName = 'java.util.stream.Collectors$21methodref$ctor$Type.Collectors$21methodref$ctor$Type';
defineClass(309, 1, {}, Collectors$21methodref$ctor$Type);
var Ljava_util_stream_Collectors$21methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/21methodref$ctor$Type', 309);
function Collectors$lambda$21$Type(){
}

Collectors$lambda$21$Type.displayName = 'java.util.stream.Collectors$lambda$21$Type.Collectors$lambda$21$Type';
defineClass(308, 1, {}, Collectors$lambda$21$Type);
var Ljava_util_stream_Collectors$lambda$21$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$21$Type', 308);
function $$init_37(this$static){
}

$$init_37.displayName = 'java.util.stream.TerminatableStream.$$init';
function $terminate(this$static){
  if (!this$static.root_0) {
    $throwIfTerminated(this$static);
    this$static.terminated = true;
  }
   else {
    $terminate(this$static.root_0);
  }
}

$terminate.displayName = 'java.util.stream.TerminatableStream.$terminate';
function $throwIfTerminated(this$static){
  if (this$static.root_0) {
    $throwIfTerminated(this$static.root_0);
  }
   else if (this$static.terminated) {
    throw toJs(new IllegalStateException_0("Stream already terminated, can't be modified or used"));
  }
}

$throwIfTerminated.displayName = 'java.util.stream.TerminatableStream.$throwIfTerminated';
function TerminatableStream(previous){
  if (!previous) {
    this.root_0 = null;
    new ArrayList;
  }
   else {
    this.root_0 = previous;
  }
}

TerminatableStream.displayName = 'java.util.stream.TerminatableStream.TerminatableStream';
defineClass(291, 1, {});
_.terminated = false;
var Ljava_util_stream_TerminatableStream_2_classLit = createForClass('java.util.stream', 'TerminatableStream', 291);
function $filter(this$static, predicate){
  $throwIfTerminated(this$static);
  return new StreamImpl(this$static, new StreamImpl$FilterSpliterator(predicate, this$static.spliterator));
}

$filter.displayName = 'java.util.stream.StreamImpl.$filter';
function $reduce(this$static, identity){
  var consumer;
  $terminate(this$static);
  consumer = new StreamImpl$ValueConsumer;
  consumer.value_0 = identity;
  this$static.spliterator.forEachRemaining(new StreamImpl$lambda$5$Type(consumer));
  return consumer.value_0;
}

$reduce.displayName = 'java.util.stream.StreamImpl.$reduce';
function StreamImpl(prev, spliterator){
  TerminatableStream.call(this, prev);
  this.spliterator = spliterator;
}

StreamImpl.displayName = 'java.util.stream.StreamImpl.StreamImpl';
function lambda$4(a_1, t_2){
  castTo(a_1, 35).add_0(t_2);
  return a_1;
}

lambda$4.displayName = 'java.util.stream.StreamImpl.lambda$4';
function lambda$5(consumer_0, item_2){
  $accept(consumer_0, lambda$4(consumer_0.value_0, item_2));
}

lambda$5.displayName = 'java.util.stream.StreamImpl.lambda$5';
defineClass(122, 291, {}, StreamImpl);
var Ljava_util_stream_StreamImpl_2_classLit = createForClass('java.util.stream', 'StreamImpl', 122);
function $lambda$0_4(this$static, action_1, item_1){
  if (castTo(item_1, 38).player.isEnabled) {
    this$static.found = true;
    action_1.accept(item_1);
  }
}

$lambda$0_4.displayName = 'java.util.stream.StreamImpl$FilterSpliterator.$lambda$0';
function StreamImpl$FilterSpliterator(filter, original){
  Spliterators$AbstractSpliterator.call(this, original.estimateSize(), original.characteristics_0() & -16449);
  checkCriticalNotNull(filter);
  this.original = original;
}

StreamImpl$FilterSpliterator.displayName = 'java.util.stream.StreamImpl$FilterSpliterator.StreamImpl$FilterSpliterator';
defineClass(294, 293, {}, StreamImpl$FilterSpliterator);
_.tryAdvance = function tryAdvance_0(action){
  this.found = false;
  while (!this.found && this.original.tryAdvance(new StreamImpl$FilterSpliterator$lambda$0$Type(this, action)))
  ;
  return this.found;
}
;
_.tryAdvance.displayName = 'java.util.stream.StreamImpl$FilterSpliterator.tryAdvance';
_.found = false;
var Ljava_util_stream_StreamImpl$FilterSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator', 294);
function StreamImpl$FilterSpliterator$lambda$0$Type($$outer_0, action_1){
  this.$$outer_0 = $$outer_0;
  this.action_1 = action_1;
}

StreamImpl$FilterSpliterator$lambda$0$Type.displayName = 'java.util.stream.StreamImpl$FilterSpliterator$lambda$0$Type.StreamImpl$FilterSpliterator$lambda$0$Type';
defineClass(296, 1, {}, StreamImpl$FilterSpliterator$lambda$0$Type);
_.accept = function accept_1(arg0){
  $lambda$0_4(this.$$outer_0, this.action_1, arg0);
}
;
_.accept.displayName = 'java.util.stream.StreamImpl$FilterSpliterator$lambda$0$Type.accept';
var Ljava_util_stream_StreamImpl$FilterSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator/lambda$0$Type', 296);
function $accept(this$static, value_0){
  this$static.value_0 = value_0;
}

$accept.displayName = 'java.util.stream.StreamImpl$ValueConsumer.$accept';
function StreamImpl$ValueConsumer(){
}

StreamImpl$ValueConsumer.displayName = 'java.util.stream.StreamImpl$ValueConsumer.StreamImpl$ValueConsumer';
defineClass(295, 1, {}, StreamImpl$ValueConsumer);
_.accept = function accept_2(value_0){
  $accept(this, value_0);
}
;
_.accept.displayName = 'java.util.stream.StreamImpl$ValueConsumer.accept';
var Ljava_util_stream_StreamImpl$ValueConsumer_2_classLit = createForClass('java.util.stream', 'StreamImpl/ValueConsumer', 295);
function StreamImpl$lambda$5$Type(consumer_0){
  this.consumer_0 = consumer_0;
}

StreamImpl$lambda$5$Type.displayName = 'java.util.stream.StreamImpl$lambda$5$Type.StreamImpl$lambda$5$Type';
defineClass(297, 1, {}, StreamImpl$lambda$5$Type);
_.accept = function accept_3(arg0){
  lambda$5(this.consumer_0, arg0);
}
;
_.accept.displayName = 'java.util.stream.StreamImpl$lambda$5$Type.accept';
var Ljava_util_stream_StreamImpl$lambda$5$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$5$Type', 297);
function copy_0(src_0, srcOfs, dest, destOfs, len, overwrite){
  var batchEnd, batchStart, destArray, end, spliceArgs;
  if (maskUndefined(src_0) === maskUndefined(dest)) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  destArray = dest;
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    spliceArgs = src_0.slice(batchStart, batchEnd);
    spliceArgs.splice(0, 0, destOfs, overwrite?len:0);
    Array.prototype.splice.apply(destArray, spliceArgs);
    batchStart = batchEnd;
    destOfs += len;
  }
}

copy_0.displayName = 'javaemul.internal.ArrayHelper.copy';
function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

insertTo.displayName = 'javaemul.internal.ArrayHelper.insertTo';
function insertTo_0(array, values){
  copy_0(values, 0, array, 0, values.length, false);
}

insertTo_0.displayName = 'javaemul.internal.ArrayHelper.insertTo';
function removeFrom(array, index_0){
  array.splice(index_0, 1);
}

removeFrom.displayName = 'javaemul.internal.ArrayHelper.removeFrom';
defineClass(390, 1, {});
function stampJavaTypeInfo_1(array, referenceType){
  return getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array) , array;
}

stampJavaTypeInfo_1.displayName = 'javaemul.internal.ArrayStamper.stampJavaTypeInfo';
function checkCriticalArgument(expression){
  if (!expression) {
    throw toJs(new IllegalArgumentException);
  }
}

checkCriticalArgument.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalArgument';
function checkCriticalArgument_0(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(errorMessage));
  }
}

checkCriticalArgument_0.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalArgument';
function checkCriticalArgument_1(expression, errorMessageArgs){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(format_7('Enum constant undefined: %s', errorMessageArgs)));
  }
}

checkCriticalArgument_1.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalArgument';
function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
  }
}

checkCriticalArrayType.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalArrayType';
function checkCriticalArrayType_0(expression, errorMessage){
  if (!expression) {
    throw toJs(new ArrayStoreException_0(errorMessage));
  }
}

checkCriticalArrayType_0.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalArrayType';
function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

checkCriticalElement.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalElement';
function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

checkCriticalElementIndex.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalElementIndex';
function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

checkCriticalNotNull.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalNotNull';
function checkCriticalNotNull_0(reference, errorMessage){
  if (reference == null) {
    throw toJs(new NullPointerException_1(errorMessage));
  }
}

checkCriticalNotNull_0.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalNotNull';
function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

checkCriticalPositionIndex.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalPositionIndex';
function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

checkCriticalState.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalState';
function checkCriticalStringElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new StringIndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

checkCriticalStringElementIndex.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalStringElementIndex';
function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

checkCriticalType.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalType';
function format_7(template, args){
  var builder, i, placeholderStart, templateStart;
  template = template;
  builder = new StringBuilder_0;
  templateStart = 0;
  i = 0;
  while (i < args.length) {
    placeholderStart = template.indexOf('%s', templateStart);
    if (placeholderStart == -1) {
      break;
    }
    $append_5(builder, template.substr(templateStart, placeholderStart - templateStart));
    $append_4(builder, args[i++]);
    templateStart = placeholderStart + 2;
  }
  $append_5(builder, template.substr(templateStart));
  if (i < args.length) {
    builder.string += ' [';
    $append_4(builder, args[i++]);
    while (i < args.length) {
      builder.string += ', ';
      $append_4(builder, args[i++]);
    }
    builder.string += ']';
  }
  return builder.string;
}

format_7.displayName = 'javaemul.internal.InternalPreconditions.format';
function getProperty(map_0, key){
  return map_0[key];
}

getProperty.displayName = 'javaemul.internal.JsUtils.getProperty';
function isUndefined(value_0){
  return value_0 === undefined;
}

isUndefined.displayName = 'javaemul.internal.JsUtils.isUndefined';
function setProperty(map_0, key, value_0){
  map_0[key] = value_0;
}

setProperty.displayName = 'javaemul.internal.JsUtils.setProperty';
function setPropertySafe(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

setPropertySafe.displayName = 'javaemul.internal.JsUtils.setPropertySafe';
function uncheckedCast(o){
  return o;
}

uncheckedCast.displayName = 'javaemul.internal.JsUtils.uncheckedCast';
function unsafeCastToBoolean(bool){
  return bool;
}

unsafeCastToBoolean.displayName = 'javaemul.internal.JsUtils.unsafeCastToBoolean';
function unsafeCastToDouble(number){
  return number;
}

unsafeCastToDouble.displayName = 'javaemul.internal.JsUtils.unsafeCastToDouble';
defineClass(387, 1, {});
function getHashCode(o){
  return o.$H || (o.$H = ++nextHashId);
}

getHashCode.displayName = 'javaemul.internal.ObjectHashing.getHashCode';
function getNextHashId(){
  return ++nextHashId;
}

getNextHashId.displayName = 'javaemul.internal.ObjectHashing.getNextHashId';
var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = new Object_0;
  front = new Object_0;
}

$clinit_StringHashCache.displayName = 'javaemul.internal.StringHashCache.$clinit';
function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = (checkCriticalStringElementIndex(i + 3, str.length) , str.charCodeAt(i + 3) + (checkCriticalStringElementIndex(i + 2, str.length) , 31 * (str.charCodeAt(i + 2) + (checkCriticalStringElementIndex(i + 1, str.length) , 31 * (str.charCodeAt(i + 1) + (checkCriticalStringElementIndex(i, str.length) , 31 * (str.charCodeAt(i) + 31 * hashCode)))))));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

compute.displayName = 'javaemul.internal.StringHashCache.compute';
function getHashCode_0(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (result != null) {
    return round_int((checkCriticalNotNull(result) , result));
  }
  result = back_0[key];
  hashCode = result == null?compute(str):round_int((checkCriticalNotNull(result) , result));
  increment();
  front[key] = hashCode;
  return hashCode;
}

getHashCode_0.displayName = 'javaemul.internal.StringHashCache.getHashCode';
function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = new Object_0;
    count_0 = 0;
  }
  ++count_0;
}

increment.displayName = 'javaemul.internal.StringHashCache.increment';
var back_0, count_0 = 0, front;
defineClass(771, 1, {});
function AbstractIntegerDistribution(rng){
  this.random = rng;
}

AbstractIntegerDistribution.displayName = 'org.apache.commons.math3.distribution.AbstractIntegerDistribution.AbstractIntegerDistribution';
defineClass(316, 1, {});
var Lorg_apache_commons_math3_distribution_AbstractIntegerDistribution_2_classLit = createForClass('org.apache.commons.math3.distribution', 'AbstractIntegerDistribution', 316);
function $sample(this$static){
  var max_0, r;
  max_0 = this$static.upper - this$static.lower + 1;
  if (max_0 <= 0) {
    while (true) {
      r = $next_6(this$static.random, 32);
      if (r >= this$static.lower && r <= this$static.upper) {
        return r;
      }
    }
  }
   else {
    return this$static.lower + $nextInt_0(this$static.random, max_0);
  }
}

$sample.displayName = 'org.apache.commons.math3.distribution.UniformIntegerDistribution.$sample';
function UniformIntegerDistribution(rng, upper){
  this.random = rng;
  if (0 > upper) {
    throw toJs((valueOf_0(0) , valueOf_0(upper) , new NumberIsTooLargeException));
  }
  this.lower = 0;
  this.upper = upper;
}

UniformIntegerDistribution.displayName = 'org.apache.commons.math3.distribution.UniformIntegerDistribution.UniformIntegerDistribution';
defineClass(317, 316, {}, UniformIntegerDistribution);
_.lower = 0;
_.upper = 0;
var Lorg_apache_commons_math3_distribution_UniformIntegerDistribution_2_classLit = createForClass('org.apache.commons.math3.distribution', 'UniformIntegerDistribution', 317);
function MathArithmeticException(){
  ArithmeticException.call(this);
  new ExceptionContext;
}

MathArithmeticException.displayName = 'org.apache.commons.math3.exception.MathArithmeticException.MathArithmeticException';
function MathArithmeticException_0(){
  ArithmeticException.call(this);
  new ExceptionContext;
}

MathArithmeticException_0.displayName = 'org.apache.commons.math3.exception.MathArithmeticException.MathArithmeticException';
defineClass(74, 91, $intern_3, MathArithmeticException, MathArithmeticException_0);
_.getLocalizedMessage = function getLocalizedMessage_0(){
  return null;
}
;
_.getLocalizedMessage.displayName = 'org.apache.commons.math3.exception.MathArithmeticException.getLocalizedMessage';
_.getMessage = function getMessage_1(){
  return null;
}
;
_.getMessage.displayName = 'org.apache.commons.math3.exception.MathArithmeticException.getMessage';
var Lorg_apache_commons_math3_exception_MathArithmeticException_2_classLit = createForClass('org.apache.commons.math3.exception', 'MathArithmeticException', 74);
function MathIllegalArgumentException(){
  IllegalArgumentException.call(this);
  new ExceptionContext;
}

MathIllegalArgumentException.displayName = 'org.apache.commons.math3.exception.MathIllegalArgumentException.MathIllegalArgumentException';
defineClass(301, 53, $intern_3);
_.getLocalizedMessage = function getLocalizedMessage_1(){
  return null;
}
;
_.getLocalizedMessage.displayName = 'org.apache.commons.math3.exception.MathIllegalArgumentException.getLocalizedMessage';
_.getMessage = function getMessage_2(){
  return null;
}
;
_.getMessage.displayName = 'org.apache.commons.math3.exception.MathIllegalArgumentException.getMessage';
var Lorg_apache_commons_math3_exception_MathIllegalArgumentException_2_classLit = createForClass('org.apache.commons.math3.exception', 'MathIllegalArgumentException', 301);
function $clinit_MathIllegalNumberException(){
  $clinit_MathIllegalNumberException = emptyMethod;
  valueOf_0(0);
}

$clinit_MathIllegalNumberException.displayName = 'org.apache.commons.math3.exception.MathIllegalNumberException.$clinit';
function MathIllegalNumberException(){
  IllegalArgumentException.call(this);
  new ExceptionContext;
}

MathIllegalNumberException.displayName = 'org.apache.commons.math3.exception.MathIllegalNumberException.MathIllegalNumberException';
defineClass(124, 301, $intern_3);
var Lorg_apache_commons_math3_exception_MathIllegalNumberException_2_classLit = createForClass('org.apache.commons.math3.exception', 'MathIllegalNumberException', 124);
function NumberIsTooSmallException(){
  NumberIsTooSmallException_0.call(this);
}

NumberIsTooSmallException.displayName = 'org.apache.commons.math3.exception.NumberIsTooSmallException.NumberIsTooSmallException';
function NumberIsTooSmallException_0(){
  MathIllegalNumberException.call(this);
}

NumberIsTooSmallException_0.displayName = 'org.apache.commons.math3.exception.NumberIsTooSmallException.NumberIsTooSmallException';
defineClass(83, 124, $intern_3);
var Lorg_apache_commons_math3_exception_NumberIsTooSmallException_2_classLit = createForClass('org.apache.commons.math3.exception', 'NumberIsTooSmallException', 83);
function NotPositiveException(){
  $clinit_MathIllegalNumberException();
  NumberIsTooSmallException_0.call(this);
}

NotPositiveException.displayName = 'org.apache.commons.math3.exception.NotPositiveException.NotPositiveException';
defineClass(305, 83, $intern_3, NotPositiveException);
var Lorg_apache_commons_math3_exception_NotPositiveException_2_classLit = createForClass('org.apache.commons.math3.exception', 'NotPositiveException', 305);
function NotStrictlyPositiveException(){
  $clinit_MathIllegalNumberException();
  NumberIsTooSmallException_0.call(this);
}

NotStrictlyPositiveException.displayName = 'org.apache.commons.math3.exception.NotStrictlyPositiveException.NotStrictlyPositiveException';
function NotStrictlyPositiveException_0(){
  $clinit_MathIllegalNumberException();
  NumberIsTooSmallException_0.call(this);
}

NotStrictlyPositiveException_0.displayName = 'org.apache.commons.math3.exception.NotStrictlyPositiveException.NotStrictlyPositiveException';
defineClass(125, 83, $intern_3, NotStrictlyPositiveException, NotStrictlyPositiveException_0);
var Lorg_apache_commons_math3_exception_NotStrictlyPositiveException_2_classLit = createForClass('org.apache.commons.math3.exception', 'NotStrictlyPositiveException', 125);
function NumberIsTooLargeException(){
  $clinit_MathIllegalNumberException();
  MathIllegalNumberException.call(this);
}

NumberIsTooLargeException.displayName = 'org.apache.commons.math3.exception.NumberIsTooLargeException.NumberIsTooLargeException';
defineClass(100, 124, $intern_3, NumberIsTooLargeException);
var Lorg_apache_commons_math3_exception_NumberIsTooLargeException_2_classLit = createForClass('org.apache.commons.math3.exception', 'NumberIsTooLargeException', 100);
function ExceptionContext(){
  new ArrayList;
  new ArrayList;
  new HashMap;
}

ExceptionContext.displayName = 'org.apache.commons.math3.exception.util.ExceptionContext.ExceptionContext';
defineClass(103, 1, {}, ExceptionContext);
var Lorg_apache_commons_math3_exception_util_ExceptionContext_2_classLit = createForClass('org.apache.commons.math3.exception.util', 'ExceptionContext', 103);
function $nextInt_0(this$static, n){
  var bits, val;
  if (n > 0) {
    if ((n & -n) == n) {
      return toInt_0(shr_0(mul_0(n, $next_6(this$static, 31)), 31));
    }
    do {
      bits = $next_6(this$static, 31);
      val = bits % n;
    }
     while (bits - val + (n - 1) < 0);
    return val;
  }
  throw toJs((valueOf_0(n) , new NotStrictlyPositiveException));
}

$nextInt_0.displayName = 'org.apache.commons.math3.random.BitsStreamGenerator.$nextInt';
defineClass(345, 1, {});
var Lorg_apache_commons_math3_random_BitsStreamGenerator_2_classLit = createForClass('org.apache.commons.math3.random', 'BitsStreamGenerator', 345);
function $setSeed_3(this$static, seed){
  var i, l;
  arraycopy(seed, 0, this$static.v, 0, $wnd.Math.min(seed.length, this$static.v.length));
  if (seed.length < this$static.v.length) {
    for (i = seed.length; i < this$static.v.length; ++i) {
      l = this$static.v[i - seed.length];
      this$static.v[i] = toInt_0(and_0(add_1(mul_0(1812433253, xor_0(l, shr_0(l, 30))), i), $intern_33));
    }
  }
  this$static.index_0 = 0;
}

$setSeed_3.displayName = 'org.apache.commons.math3.random.AbstractWell.$setSeed';
function AbstractWell(seed){
  AbstractWell_0.call(this, stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_14, 11, 15, [toInt_0(createLongEmul(shru(isSmallLong0(seed)?toBigLong(seed):seed, 32))), toInt_0(and_0(seed, $intern_33))]));
}

AbstractWell.displayName = 'org.apache.commons.math3.random.AbstractWell.AbstractWell';
function AbstractWell_0(seed){
  var j;
  this.v = initUnidimensionalArray(I_classLit, $intern_14, 11, 624, 15, 1);
  this.index_0 = 0;
  this.iRm1 = initUnidimensionalArray(I_classLit, $intern_14, 11, 624, 15, 1);
  this.iRm2 = initUnidimensionalArray(I_classLit, $intern_14, 11, 624, 15, 1);
  this.i1 = initUnidimensionalArray(I_classLit, $intern_14, 11, 624, 15, 1);
  this.i2 = initUnidimensionalArray(I_classLit, $intern_14, 11, 624, 15, 1);
  this.i3 = initUnidimensionalArray(I_classLit, $intern_14, 11, 624, 15, 1);
  for (j = 0; j < 624; ++j) {
    this.iRm1[j] = (j + 624 - 1) % 624;
    this.iRm2[j] = (j + 624 - 2) % 624;
    this.i1[j] = (j + 70) % 624;
    this.i2[j] = (j + 179) % 624;
    this.i3[j] = (j + 449) % 624;
  }
  $setSeed_3(this, seed);
}

AbstractWell_0.displayName = 'org.apache.commons.math3.random.AbstractWell.AbstractWell';
defineClass(123, 345, {});
_.index_0 = 0;
var Lorg_apache_commons_math3_random_AbstractWell_2_classLit = createForClass('org.apache.commons.math3.random', 'AbstractWell', 123);
function $$init_38(this$static){
}

$$init_38.displayName = 'org.apache.commons.math3.random.RandomDataGenerator.$$init';
function $initRan(this$static, seed){
  this$static.rand = new Well19937c(seed);
}

$initRan.displayName = 'org.apache.commons.math3.random.RandomDataGenerator.$initRan';
function $nextPermutation(this$static, n, k){
  var index_0, output;
  if (k > n) {
    throw toJs((valueOf_0(k) , valueOf_0(n) , new NumberIsTooLargeException));
  }
  if (k <= 0) {
    throw toJs((valueOf_0(k) , new NotStrictlyPositiveException_0));
  }
  index_0 = sequence(n);
  shuffle(index_0, this$static.rand);
  return output = initUnidimensionalArray(I_classLit, $intern_14, 11, k, 15, 1) , arraycopy(index_0, 0, output, 0, $wnd.Math.min(k, index_0.length)) , output;
}

$nextPermutation.displayName = 'org.apache.commons.math3.random.RandomDataGenerator.$nextPermutation';
function RandomDataGenerator(){
}

RandomDataGenerator.displayName = 'org.apache.commons.math3.random.RandomDataGenerator.RandomDataGenerator';
defineClass(289, 1, {}, RandomDataGenerator);
_.rand = null;
var Lorg_apache_commons_math3_random_RandomDataGenerator_2_classLit = createForClass('org.apache.commons.math3.random', 'RandomDataGenerator', 289);
function $next_6(this$static, bits){
  var indexRm1, indexRm2, v0, vM1, vM2, vM3, z0, z1, z2, z3, z4;
  indexRm1 = this$static.iRm1[this$static.index_0];
  indexRm2 = this$static.iRm2[this$static.index_0];
  v0 = this$static.v[this$static.index_0];
  vM1 = this$static.v[this$static.i1[this$static.index_0]];
  vM2 = this$static.v[this$static.i2[this$static.index_0]];
  vM3 = this$static.v[this$static.i3[this$static.index_0]];
  z0 = $intern_15 & this$static.v[indexRm1] ^ $intern_1 & this$static.v[indexRm2];
  z1 = v0 ^ v0 << 25 ^ (vM1 ^ vM1 >>> 27);
  z2 = vM2 >>> 9 ^ (vM3 ^ vM3 >>> 1);
  z3 = z1 ^ z2;
  z4 = z0 ^ (z1 ^ z1 << 9) ^ (z2 ^ z2 << 21) ^ (z3 ^ z3 >>> 21);
  this$static.v[this$static.index_0] = z3;
  this$static.v[indexRm1] = z4;
  this$static.v[indexRm2] &= $intern_15;
  this$static.index_0 = indexRm1;
  z4 ^= z4 << 7 & -462547200;
  z4 ^= z4 << 15 & -1685684224;
  return z4 >>> 32 - bits;
}

$next_6.displayName = 'org.apache.commons.math3.random.Well19937c.$next';
function Well19937c(seed){
  AbstractWell_0.call(this, stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_14, 11, 15, [toInt_0(createLongEmul(shru(isSmallLong0(seed)?toBigLong(seed):seed, 32))), toInt_0(and_0(seed, $intern_33))]));
}

Well19937c.displayName = 'org.apache.commons.math3.random.Well19937c.Well19937c';
defineClass(300, 123, {}, Well19937c);
var Lorg_apache_commons_math3_random_Well19937c_2_classLit = createForClass('org.apache.commons.math3.random', 'Well19937c', 300);
function gcd(p, q){
  var k, t, u, v;
  u = p;
  v = q;
  if (compare_0(p, 0) == 0 || compare_0(q, 0) == 0) {
    if (eq(p, $intern_34) || eq(q, $intern_34)) {
      throw toJs((stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 5, [valueOf_1(p), valueOf_1(q)]) , new MathArithmeticException_0));
    }
    return add_1(compare_0(p, 0) < 0?neg_0(p):p, compare_0(q, 0) < 0?neg_0(q):q);
  }
  compare_0(p, 0) > 0 && (u = neg_0(p));
  compare_0(q, 0) > 0 && (v = neg_0(q));
  k = 0;
  while (eq(and_0(u, 1), 0) && eq(and_0(v, 1), 0) && k < 63) {
    u = div(u, 2);
    v = div(v, 2);
    ++k;
  }
  if (k == 63) {
    throw toJs((stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 5, [valueOf_1(p), valueOf_1(q)]) , new MathArithmeticException_0));
  }
  t = eq(and_0(u, 1), 1)?v:neg_0(div(u, 2));
  do {
    while (eq(and_0(t, 1), 0)) {
      t = div(t, 2);
    }
    compare_0(t, 0) > 0?(u = neg_0(t)):(v = t);
    t = div(sub_1(v, u), 2);
  }
   while (compare_0(t, 0) != 0);
  return mul_0(neg_0(u), createLongEmul(shl(isSmallLong0(1)?toBigLong(1):1, k)));
}

gcd.displayName = 'org.apache.commons.math3.util.ArithmeticUtils.gcd';
function mulAndCheck(a, b){
  var ret;
  if (compare_0(a, b) > 0) {
    ret = mulAndCheck(b, a);
  }
   else {
    if (compare_0(a, 0) < 0) {
      if (compare_0(b, 0) < 0) {
        if (gte_0(a, div($intern_25, b))) {
          ret = mul_0(a, b);
        }
         else {
          throw toJs(new MathArithmeticException);
        }
      }
       else if (compare_0(b, 0) > 0) {
        if (lte(div($intern_34, b), a)) {
          ret = mul_0(a, b);
        }
         else {
          throw toJs(new MathArithmeticException);
        }
      }
       else {
        ret = 0;
      }
    }
     else if (compare_0(a, 0) > 0) {
      if (lte(a, div($intern_25, b))) {
        ret = mul_0(a, b);
      }
       else {
        throw toJs(new MathArithmeticException);
      }
    }
     else {
      ret = 0;
    }
  }
  return ret;
}

mulAndCheck.displayName = 'org.apache.commons.math3.util.ArithmeticUtils.mulAndCheck';
function binomialCoefficient(n, k){
  var d, i, j, result;
  checkBinomial(n, k);
  if (n == k || k == 0) {
    return 1;
  }
  if (k == 1 || k == n - 1) {
    return n;
  }
  if (k > (n / 2 | 0)) {
    return binomialCoefficient(n, n - k);
  }
  result = 1;
  if (n <= 61) {
    i = n - k + 1;
    for (j = 1; j <= k; j++) {
      result = div(mul_0(result, i), j);
      ++i;
    }
  }
   else if (n <= 66) {
    i = n - k + 1;
    for (j = 1; j <= k; j++) {
      d = gcd(i, j);
      result = mul_0(div(result, div(j, d)), div(i, d));
      ++i;
    }
  }
   else {
    i = n - k + 1;
    for (j = 1; j <= k; j++) {
      d = gcd(i, j);
      result = mulAndCheck(div(result, div(j, d)), div(i, d));
      ++i;
    }
  }
  return result;
}

binomialCoefficient.displayName = 'org.apache.commons.math3.util.CombinatoricsUtils.binomialCoefficient';
function checkBinomial(n, k){
  if (n < k) {
    throw toJs((valueOf_0(k) , valueOf_0(n) , new NumberIsTooLargeException));
  }
  if (n < 0) {
    throw toJs((valueOf_0(n) , new NotPositiveException));
  }
}

checkBinomial.displayName = 'org.apache.commons.math3.util.CombinatoricsUtils.checkBinomial';
function copyOf(source, len){
  var output;
  output = initUnidimensionalArray(I_classLit, $intern_14, 11, len, 15, 1);
  arraycopy(source, 0, output, 0, $wnd.Math.min(len, source.length));
  return output;
}

copyOf.displayName = 'org.apache.commons.math3.util.MathArrays.copyOf';
function sequence(size_0){
  var a, i;
  a = initUnidimensionalArray(I_classLit, $intern_14, 11, size_0, 15, 1);
  for (i = 0; i < size_0; i++) {
    a[i] = i;
  }
  return a;
}

sequence.displayName = 'org.apache.commons.math3.util.MathArrays.sequence';
function shuffle(list, rng){
  var i, target, temp;
  for (i = list.length - 1; i >= 0; i--) {
    i == 0?(target = 0):(target = $sample(new UniformIntegerDistribution(rng, i)));
    temp = list[target];
    list[target] = list[i];
    list[i] = temp;
  }
}

shuffle.displayName = 'org.apache.commons.math3.util.MathArrays.shuffle';
var C_classLit = createForPrimitive('char', 'C');
var I_classLit = createForPrimitive('int', 'I');
var J_classLit = createForPrimitive('long', 'J');
var B_classLit = createForPrimitive('byte', 'B');
var D_classLit = createForPrimitive('double', 'D');
var F_classLit = createForPrimitive('float', 'F');
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'gecko1_8']], [['locale', 'default'], ['user.agent', 'ie10']], [['locale', 'default'], ['user.agent', 'ie8']], [['locale', 'default'], ['user.agent', 'ie9']], [['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=codewars_js-0.js

