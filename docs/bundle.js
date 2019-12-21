/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/muvjs/muv-dom.mjs":
/*!****************************************!*\
  !*** ./node_modules/muvjs/muv-dom.mjs ***!
  \****************************************/
/*! exports provided: isNull, isArray, component, rerender, div, button, label, input, textarea, ul, li, img, a, abbr, address, area, article, aside, audio, b, base, bdo, blockquote, body, br, canvas, caption, cite, code, col, colgroup, datalist, dd, del, details, dfn, dialog, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, head, header, h1, h2, h3, h4, h5, h6, hr, html, i, iframe, ins, kbd, legend, link, map, mark, menu, meta, meter, nav, object, ol, optgroup, option, output, p, param, pre, progress, q, s, samp, script, section, select, small, source, span, strong, style, sub, summary, sup, table, tbody, td, tfoot, th, thead, tr, time, title, track, u, varElement, video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNull\", function() { return isNull; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return isArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"component\", function() { return component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rerender\", function() { return rerender; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"div\", function() { return div; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"button\", function() { return button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"label\", function() { return label; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input\", function() { return input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"textarea\", function() { return textarea; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ul\", function() { return ul; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"li\", function() { return li; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"img\", function() { return img; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"abbr\", function() { return abbr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"address\", function() { return address; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"area\", function() { return area; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"article\", function() { return article; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aside\", function() { return aside; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"audio\", function() { return audio; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"base\", function() { return base; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bdo\", function() { return bdo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blockquote\", function() { return blockquote; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"body\", function() { return body; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"br\", function() { return br; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"caption\", function() { return caption; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cite\", function() { return cite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code\", function() { return code; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"col\", function() { return col; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colgroup\", function() { return colgroup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"datalist\", function() { return datalist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dd\", function() { return dd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"del\", function() { return del; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"details\", function() { return details; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dfn\", function() { return dfn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dialog\", function() { return dialog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dl\", function() { return dl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dt\", function() { return dt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"em\", function() { return em; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"embed\", function() { return embed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fieldset\", function() { return fieldset; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"figcaption\", function() { return figcaption; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"figure\", function() { return figure; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"footer\", function() { return footer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"head\", function() { return head; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"header\", function() { return header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h1\", function() { return h1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h2\", function() { return h2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h3\", function() { return h3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h4\", function() { return h4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h5\", function() { return h5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h6\", function() { return h6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hr\", function() { return hr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"html\", function() { return html; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"i\", function() { return i; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iframe\", function() { return iframe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ins\", function() { return ins; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"kbd\", function() { return kbd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"legend\", function() { return legend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"link\", function() { return link; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mark\", function() { return mark; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"meta\", function() { return meta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"meter\", function() { return meter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nav\", function() { return nav; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"object\", function() { return object; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ol\", function() { return ol; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"optgroup\", function() { return optgroup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"option\", function() { return option; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"output\", function() { return output; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"p\", function() { return p; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"param\", function() { return param; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pre\", function() { return pre; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"progress\", function() { return progress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"q\", function() { return q; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"s\", function() { return s; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"samp\", function() { return samp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"script\", function() { return script; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"section\", function() { return section; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"select\", function() { return select; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"small\", function() { return small; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"source\", function() { return source; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"span\", function() { return span; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"strong\", function() { return strong; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"style\", function() { return style; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"summary\", function() { return summary; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sup\", function() { return sup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"table\", function() { return table; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tbody\", function() { return tbody; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"td\", function() { return td; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tfoot\", function() { return tfoot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"th\", function() { return th; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"thead\", function() { return thead; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tr\", function() { return tr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"time\", function() { return time; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"title\", function() { return title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"track\", function() { return track; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"u\", function() { return u; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"varElement\", function() { return varElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"video\", function() { return video; });\n\n\nconst isNull = value => value === undefined || value === null;\nconst isArray = a => !isNull(a) && a instanceof Array;\n\nconst setAttributes = element => attributes => {\n  if (isNull(attributes)) return;\n\n  for (let attr in attributes) {\n    if (typeof attributes[attr] === \"function\") {\n      element[attr] = attributes[attr];\n    } else {\n      element.setAttribute(attr, attributes[attr]);\n    }\n  }\n};\n\nconst appendChildren = element => child => index => {\n  if (isNull(child)) return;\n\n  if (typeof child === \"object\") {\n    if (isArray(child)) {\n      child.map((c, i) => appendChildren(element)(c)(i))\n    } else {\n      element.appendChild(child.render(element.getAttribute(\"key\") || \"\", index));\n    }\n  } else {\n    element.innerText = child;\n  }\n};\n\nconst component = elementType => attributes => (...children) => {\n  return {\n    elementType: elementType,\n    attributes: attributes,\n    children: children.flat(),\n    genKey: function (parentKey, index) {\n      const geneKey = parentKey ? `${parentKey}-${index}-` : \"\";\n      this.attributes = this.attributes || {};\n      this.attributes[\"key\"] = geneKey + elementType;\n    },\n    render: function (parentKey, index) {\n      let element = document.createElement(elementType);\n\n      this.genKey(parentKey, index);\n      setAttributes(element)(this.attributes);\n\n      appendChildren(element)(this.children)(0);\n\n      return element;\n    }\n  };\n};\n\nconst rerender = parent => oldView => newView => index => {\n\n  if (!parent) return;\n\n  if (typeof oldView !== \"object\" && typeof newView !== \"object\") {\n    if (oldView !== newView) {\n      parent.innerText = newView;\n      parent.value = newView;\n    }\n    return;\n  }\n\n  if (isNull(newView)) {\n    if (!isNull(parent.children[index])) parent.removeChild(parent.children[index]);\n    return;\n  }\n\n  if (isNull(oldView) && newView.render) {\n    parent.appendChild(newView.render(parent.getAttribute(\"key\") || \"\", index));\n    return;\n  }\n\n  if ((!newView.attributes || !newView.attributes[\"key\"]) && newView.genKey) {\n    newView.genKey(parent.getAttribute(\"key\") || \"\", index)\n  }\n\n\n  if (oldView.elementType === newView.elementType && oldView.attributes[\"key\"] === newView.attributes[\"key\"]) {\n\n    if (JSON.stringify(oldView.attributes) !== JSON.stringify(newView.attributes)) {\n      let element = parent.children[index] || parent;\n      for (let attr in {...oldView.attributes, ...newView.attributes}) {\n        if (oldView.attributes[attr] !== newView.attributes[attr]) {\n          if (typeof newView.attributes[attr] === \"function\") {\n            element[attr] = newView.attributes[attr];\n          } else {\n            element.setAttribute(attr, newView.attributes[attr]);\n          }\n        }\n      }\n    }\n\n    const newChildren = newView.children;\n    const oldChildren = oldView.children;\n\n    const childrenNum = newChildren.length >= oldChildren.length ? newChildren.length : oldChildren.length;\n    for (let i = 0; i < childrenNum; i++) {\n      rerender(parent.children[index])(oldChildren[i])(newChildren[i])(i)\n    }\n\n  } else {\n    parent.insertBefore(newView.render(parent.getAttribute(\"key\") || \"\", index), parent.children[index]);\n    parent.removeChild(parent.children[index + 1])\n  }\n};\n\nconst div = component('div');\nconst button = component('button');\nconst label = component('label');\nconst input = component('input');\nconst textarea = component('textarea');\nconst ul = component('ul');\nconst li = component('li');\nconst img = component('img');\nconst a = component('a');\nconst abbr = component('abbr');\nconst address = component('address');\nconst area = component('area');\nconst article = component('article');\nconst aside = component('aside');\nconst audio = component('audio');\nconst b = component('b');\nconst base = component('base');\nconst bdo = component('bdo');\nconst blockquote = component('blockquote');\nconst body = component('body');\nconst br = component('br');\nconst canvas = component('canvas');\nconst caption = component('caption');\nconst cite = component('cite');\nconst code = component('code');\nconst col = component('col');\nconst colgroup = component('colgroup');\nconst datalist = component('datalist');\nconst dd = component('dd');\nconst del = component('del');\nconst details = component('details');\nconst dfn = component('dfn');\nconst dialog = component('dialog');\nconst dl = component('dl');\nconst dt = component('dt');\nconst em = component('em');\nconst embed = component('embed');\nconst fieldset = component('fieldset');\nconst figcaption = component('figcaption');\nconst figure = component('figure');\nconst footer = component('footer');\nconst form = component('form');\nconst head = component('head');\nconst header = component('header');\nconst h1 = component('h1');\nconst h2 = component('h2');\nconst h3 = component('h3');\nconst h4 = component('h4');\nconst h5 = component('h5');\nconst h6 = component('h6');\nconst hr = component('hr');\nconst html = component('html');\nconst i = component('i');\nconst iframe = component('iframe');\nconst ins = component('ins');\nconst kbd = component('kbd');\nconst legend = component('legend');\nconst link = component('link');\nconst map = component('map');\nconst mark = component('mark');\nconst menu = component('menu');\nconst meta = component('meta');\nconst meter = component('meter');\nconst nav = component('nav');\nconst object = component('object');\nconst ol = component('ol');\nconst optgroup = component('optgroup');\nconst option = component('option');\nconst output = component('output');\nconst p = component('p');\nconst param = component('param');\nconst pre = component('pre');\nconst progress = component('progress');\nconst q = component('q');\nconst s = component('s');\nconst samp = component('samp');\nconst script = component('script');\nconst section = component('section');\nconst select = component('select');\nconst small = component('small');\nconst source = component('source');\nconst span = component('span');\nconst strong = component('strong');\nconst style = component('style');\nconst sub = component('sub');\nconst summary = component('summary');\nconst sup = component('sup');\nconst table = component('table');\nconst tbody = component('tbody');\nconst td = component('td');\nconst tfoot = component('tfoot');\nconst th = component('th');\nconst thead = component('thead');\nconst tr = component('tr');\nconst time = component('time');\nconst title = component('title');\nconst track = component('track');\nconst u = component('u');\nconst varElement = component('var');\nconst video = component('video');\n\n\n//# sourceURL=webpack:///./node_modules/muvjs/muv-dom.mjs?");

/***/ }),

/***/ "./node_modules/muvjs/muv.mjs":
/*!************************************!*\
  !*** ./node_modules/muvjs/muv.mjs ***!
  \************************************/
/*! exports provided: muv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"muv\", function() { return muv; });\n/* harmony import */ var _muv_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./muv-dom */ \"./node_modules/muvjs/muv-dom.mjs\");\n\n\n\nconst handleEffects = subscriptions => effects => {\n  if (!effects) return;\n  effects.map(effect => {\n    subscriptions(effect);\n  })\n};\n\n\nconst muv = ({model, update, view, ignition, subscriptions}) => rootId => {\n  let root = document.getElementById(rootId);\n  if (!root) return;\n\n  let oldView;\n  let subs;\n\n  const dispatch = action => {\n    const updated = update(model)(action);\n    model = updated.model;\n    if (updated.effects) handleEffects(subs)(updated.effects);\n\n    const newView = view(dispatch)(model);\n    Object(_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"rerender\"])(root)(oldView)(newView)(0);\n    oldView = newView;\n  };\n\n  root.innerHTML = \"\";\n  oldView = view(dispatch)(model);\n  root.appendChild(oldView.render());\n\n  if (subscriptions) subs = subscriptions(dispatch);\n  if (ignition) ignition(dispatch)\n};\n\n\n//# sourceURL=webpack:///./node_modules/muvjs/muv.mjs?");

/***/ }),

/***/ "./src/ignition/ignition.mjs":
/*!***********************************!*\
  !*** ./src/ignition/ignition.mjs ***!
  \***********************************/
/*! exports provided: ignition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ignition\", function() { return ignition; });\n/* harmony import */ var _update_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../update/actions */ \"./src/update/actions.mjs\");\n//@flow\n\n/*::\nimport type {Action} from '../update/actions'\n*/\n\nconst ignition /*: ((Action) => void) => void*/\n = dispatch => {\n  dispatch(Object(_update_actions__WEBPACK_IMPORTED_MODULE_0__[\"reset\"])())\n}\n\n//# sourceURL=webpack:///./src/ignition/ignition.mjs?");

/***/ }),

/***/ "./src/index.mjs":
/*!***********************!*\
  !*** ./src/index.mjs ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var muvjs_muv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! muvjs/muv */ \"./node_modules/muvjs/muv.mjs\");\n/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/model */ \"./src/model/model.mjs\");\n/* harmony import */ var _update_update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update/update */ \"./src/update/update.mjs\");\n/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/view */ \"./src/view/view.mjs\");\n/* harmony import */ var _ignition_ignition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ignition/ignition */ \"./src/ignition/ignition.mjs\");\n/* harmony import */ var _subscriptions_subscriptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscriptions/subscriptions */ \"./src/subscriptions/subscriptions.mjs\");\n//@flow\n\n\n\n\n\n\n\nObject(muvjs_muv__WEBPACK_IMPORTED_MODULE_0__[\"muv\"])({model: _model_model__WEBPACK_IMPORTED_MODULE_1__[\"initialModel\"],update: _update_update__WEBPACK_IMPORTED_MODULE_2__[\"update\"],view: _view_view__WEBPACK_IMPORTED_MODULE_3__[\"view\"], ignition: _ignition_ignition__WEBPACK_IMPORTED_MODULE_4__[\"ignition\"], subscriptions: _subscriptions_subscriptions__WEBPACK_IMPORTED_MODULE_5__[\"subscriptions\"]})('root')\n\n//# sourceURL=webpack:///./src/index.mjs?");

/***/ }),

/***/ "./src/model/model.mjs":
/*!*****************************!*\
  !*** ./src/model/model.mjs ***!
  \*****************************/
/*! exports provided: initialModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialModel\", function() { return initialModel; });\n//@flow\n\n/*::\nexport type Teams = 'one' | 'two'\n\nexport type PieceType = {\n  team: 'one' | 'two',\n  type: 'circle' | 'square'\n}\n\nexport type Cell = {\n  dark: boolean,\n  piece: PieceType | void\n}\n\nexport type Player = {\n  captures: number\n}\n\nexport type Model = {\n  playerOne: Player,\n  playerTwo: Player,\n  turn: Teams,\n  rows: Cell[][],\n  selectedPiecePosition: number[]\n} \n*/\n\nconst initRows = () => {\n  const n = 8;\n  let rows = [];\n\n  let dark = false;\n  for (let c = 0; c < n; c++) {\n\n    let row = [];\n    for (let r = 0; r < n; r++) {\n      let piece = undefined;\n\n      if (dark) {\n        if (c < 3) {\n          piece = { team: 'two', type: 'circle' };\n        } else if (c >= 5) {\n          piece = { team: 'one', type: 'circle' };\n        }\n      }\n\n      const cell = { dark, piece };\n      row.push(cell);\n      dark = !dark;\n    }\n    rows.push(row)\n    dark = !dark;\n  }\n\n  return rows;\n}\n\nconst initialModel /*: Model */ = {\n  playerOne: { captures: 0 },\n  playerTwo: { captures: 0 },\n  turn: 'one',\n  rows: initRows(),\n  selectedPiecePosition: []\n}\n\n//# sourceURL=webpack:///./src/model/model.mjs?");

/***/ }),

/***/ "./src/subscriptions/effects.mjs":
/*!***************************************!*\
  !*** ./src/subscriptions/effects.mjs ***!
  \***************************************/
/*! exports provided: saveToServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveToServer\", function() { return saveToServer; });\n//@flow\n\n/*::\nimport type {Model} from '../model/model'\n\ntype SaveToServer = {\n  type: 'save-to-server',\n  model: Model\n}\n\nexport type Effect = SaveToServer\n*/\n\nconst saveToServer /*: Model => SaveToServer */\n= model => {\n  return {\n    type: 'save-to-server',\n    model\n  }\n}\n\n//# sourceURL=webpack:///./src/subscriptions/effects.mjs?");

/***/ }),

/***/ "./src/subscriptions/subscriptions.mjs":
/*!*********************************************!*\
  !*** ./src/subscriptions/subscriptions.mjs ***!
  \*********************************************/
/*! exports provided: subscriptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subscriptions\", function() { return subscriptions; });\n/* harmony import */ var _utils_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/cookies */ \"./src/subscriptions/utils/cookies.mjs\");\n/* harmony import */ var _utils_ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ajax */ \"./src/subscriptions/utils/ajax.mjs\");\n/* harmony import */ var _update_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../update/actions */ \"./src/update/actions.mjs\");\n//@flow\n/*::\nimport type {Action} from '../update/actions';\nimport type {Effect} from './effects';\n*/\n\n\n\n\n\nconst subscriptions /*: (Action => void) => Effect => void */\n  = dispatch => {\n\n    const serverUrl = 'http://localhost:3000/sessions';\n\n    let sessionId = Object(_utils_cookies__WEBPACK_IMPORTED_MODULE_0__[\"getCookie\"])(\"session_id\");\n    if (sessionId) {\n      Object(_utils_ajax__WEBPACK_IMPORTED_MODULE_1__[\"makeRequest\"])('GET', serverUrl + '/' + sessionId, {}, xhr => {\n        const newModel = JSON.parse(xhr.response)[0].model;\n        dispatch(Object(_update_actions__WEBPACK_IMPORTED_MODULE_2__[\"reset\"])(newModel));\n      });\n    }\n\n    return effect => {\n      switch (effect.type) {\n        case \"save-to-server\":\n          let method = 'POST';\n          let url = serverUrl;\n          if (sessionId) {\n            method = 'PUT';\n            url += '/' + sessionId;\n          }\n\n          Object(_utils_ajax__WEBPACK_IMPORTED_MODULE_1__[\"makeRequest\"])(method, url, { model: effect.model }, xhr => {\n            if (!sessionId) {\n              sessionId = JSON.parse(xhr.response).id\n              Object(_utils_cookies__WEBPACK_IMPORTED_MODULE_0__[\"setCookie\"])(\"session_id\", sessionId);\n            }\n          })\n\n          break;\n      }\n    }\n  }\n\n//# sourceURL=webpack:///./src/subscriptions/subscriptions.mjs?");

/***/ }),

/***/ "./src/subscriptions/utils/ajax.mjs":
/*!******************************************!*\
  !*** ./src/subscriptions/utils/ajax.mjs ***!
  \******************************************/
/*! exports provided: makeRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeRequest\", function() { return makeRequest; });\nconst makeRequest = (method, url, data, callback) => {\n  let xhr = new XMLHttpRequest();\n  xhr.open(method, url);\n  xhr.setRequestHeader('Content-Type', 'application/json');\n  xhr.onload = result => {\n    if (xhr.response) {\n      callback(xhr);\n    }\n  };\n  xhr.send(JSON.stringify(data))\n}\n\n\n//# sourceURL=webpack:///./src/subscriptions/utils/ajax.mjs?");

/***/ }),

/***/ "./src/subscriptions/utils/cookies.mjs":
/*!*********************************************!*\
  !*** ./src/subscriptions/utils/cookies.mjs ***!
  \*********************************************/
/*! exports provided: getCookie, setCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCookie\", function() { return getCookie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCookie\", function() { return setCookie; });\nconst getCookie = name => {\n  const cookies = document.cookie.split(';');\n  for (let cookie of cookies) {\n    const [key, value] = cookie.split('=');\n    if (key.trim() === name) {\n      return value;\n    }\n  }\n}\n\nconst setCookie = (key, value) => {\n  document.cookie = `${key}=${value}`;\n}\n\n//# sourceURL=webpack:///./src/subscriptions/utils/cookies.mjs?");

/***/ }),

/***/ "./src/update/actions.mjs":
/*!********************************!*\
  !*** ./src/update/actions.mjs ***!
  \********************************/
/*! exports provided: reset, selectPiece, selectMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reset\", function() { return reset; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectPiece\", function() { return selectPiece; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectMove\", function() { return selectMove; });\n//@flow\n\n/*::\nimport type {Model} from '../model/model';\n\nexport interface Reset {\n  type: 'reset',\n  model: Model | void\n}\n*/\n\nconst reset /*: (model: Model | void) => Reset */\n= model => {\n  return {\n    type: 'reset',\n    model\n  }\n}\n\n/*::\nexport interface SelectPiece {\n  type: 'select-piece',\n  r: number,\n  c: number\n}\n*/\n\nconst selectPiece /*: (number, number) => SelectPiece */\n= (r,c) => {\n  return {\n    type: 'select-piece',\n    r,\n    c\n  }\n}\n\n/*::\nexport interface SelectMove {\n  type: 'select-move',\n  r: number,\n  c: number\n}\n*/\n\nconst selectMove /*: (number, number, boolean | void) => SelectMove */\n= (r,c, jump) => {\n  return {\n    type: 'select-move',\n    r,\n    c,\n    jump\n  }\n}\n\n/*::\nexport type Action = Reset\n*/\n\n//# sourceURL=webpack:///./src/update/actions.mjs?");

/***/ }),

/***/ "./src/update/update.mjs":
/*!*******************************!*\
  !*** ./src/update/update.mjs ***!
  \*******************************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony import */ var _model_model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/model.mjs */ \"./src/model/model.mjs\");\n/* harmony import */ var _view_checker_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/checker-board */ \"./src/view/checker-board.mjs\");\n/* harmony import */ var _subscriptions_effects_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subscriptions/effects.mjs */ \"./src/subscriptions/effects.mjs\");\n//@flow\n\n\n\n\n/*::\nimport type {Model} from '../model/model'\nimport type {Action} from './actions'\n*/\nconst update /*: Model => Action => {model: Model} */\n  = model => action => {\n    let effects = [];\n\n    switch (action.type) {\n      case \"reset\":\n        model = action.model || _model_model_mjs__WEBPACK_IMPORTED_MODULE_0__[\"initialModel\"];\n        break;\n\n      case \"select-piece\":\n        const cell = model.rows[action.r][action.c];\n        const piece = cell.piece;\n\n        if (piece.team === 'one' && model.turn !== 'one') break;\n        if (piece.team === 'two' && model.turn !== 'two') break;\n\n        model = { ...model };\n        model.selectedPiecePosition = [action.r, action.c];\n        break;\n\n      case \"select-move\":\n        if (model.selectedPiecePosition.length === 0) break;\n\n        let selectedPiece = model.rows[model.selectedPiecePosition[0]][model.selectedPiecePosition[1]].piece;\n\n        if (!selectedPiece) break;\n        if (model.rows[action.r][action.c].piece) break;\n\n        if ((selectedPiece.team === 'one' && action.r === 0)\n          || (selectedPiece.team === 'two' && action.r === 7)) {\n            selectedPiece = {...selectedPiece};\n            selectedPiece.type = \"square\";\n        }\n\n        model = { ...model };\n        model.rows = model.rows.slice();\n        model.rows[action.r] = model.rows[action.r].slice();\n        model.rows[action.r][action.c] = { ...model.rows[action.r][action.c] };\n        model.rows[action.r][action.c].piece = selectedPiece;\n\n        model.rows[model.selectedPiecePosition[0]] = model.rows[model.selectedPiecePosition[0]].slice();\n        model.rows[model.selectedPiecePosition[0]][model.selectedPiecePosition[1]] = { ...model.rows[model.selectedPiecePosition[0]][model.selectedPiecePosition[1]] };\n        model.rows[model.selectedPiecePosition[0]][model.selectedPiecePosition[1]].piece = undefined;\n\n        if (action.jump) {\n          const jumpedR = model.selectedPiecePosition[0] + (action.r > model.selectedPiecePosition[0] ? 1 : - 1)\n          const jumpedC = model.selectedPiecePosition[1] + (action.c > model.selectedPiecePosition[1] ? 1 : - 1)\n\n          model.rows[jumpedR] = model.rows[jumpedR].slice();\n          model.rows[jumpedR][jumpedC] = { ...model.rows[jumpedR][jumpedC] };\n          model.rows[jumpedR][jumpedC].piece = undefined;\n\n          if (model.turn === 'one') {\n            model.playerOne = { ...model.playerOne };\n            model.playerOne.captures++;\n          }\n          else if (model.turn === 'two') {\n            model.playerTwo = { ...model.playerTwo };\n            model.playerTwo.captures++;\n          }\n\n          model.selectedPiecePosition = [action.r, action.c];\n        }\n\n        if (!Object(_view_checker_board__WEBPACK_IMPORTED_MODULE_1__[\"jumpAvailable\"])(model)) {\n          model.selectedPiecePosition = [];\n          model.turn = model.turn === 'one' ? 'two' : 'one';\n        }\n\n        break;\n    }\n\n    effects = effects.concat(Object(_subscriptions_effects_mjs__WEBPACK_IMPORTED_MODULE_2__[\"saveToServer\"])(model));\n\n    return { model, effects };\n  }\n\n//# sourceURL=webpack:///./src/update/update.mjs?");

/***/ }),

/***/ "./src/view/available-move.mjs":
/*!*************************************!*\
  !*** ./src/view/available-move.mjs ***!
  \*************************************/
/*! exports provided: AvailableMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AvailableMove\", function() { return AvailableMove; });\n/* harmony import */ var muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! muvjs/muv-dom */ \"./node_modules/muvjs/muv-dom.mjs\");\n//@flow\n/*::\nimport {View} from 'muvjs/muv-dom';\n*/\n\n\n/*::\ninterface AvailableMoveProps {\n  onSelect: () => void,\n  key: string\n}\n*/\nconst AvailableMove /*: AvailableMoveProps => () => View */\n = props => () =>\n  Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({\n    key: props.key,\n    style: 'position: relative; width: 100%; height: 100%;',\n    onclick: props.onSelect\n  })(\n    Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({\n      style: `border-radius: 100%; width:75%; height:75%;\n              border: gold 2px dotted;\n              top: 50%;\n              left: 50%;\n              -ms-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n              position: absolute;\n              background-color: transparent`\n    })()\n  )\n\n//# sourceURL=webpack:///./src/view/available-move.mjs?");

/***/ }),

/***/ "./src/view/checker-board.mjs":
/*!************************************!*\
  !*** ./src/view/checker-board.mjs ***!
  \************************************/
/*! exports provided: jumpAvailable, CheckerBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jumpAvailable\", function() { return jumpAvailable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CheckerBoard\", function() { return CheckerBoard; });\n/* harmony import */ var muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! muvjs/muv-dom */ \"./node_modules/muvjs/muv-dom.mjs\");\n/* harmony import */ var _piece_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piece.mjs */ \"./src/view/piece.mjs\");\n/* harmony import */ var _available_move_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./available-move.mjs */ \"./src/view/available-move.mjs\");\n/* harmony import */ var _update_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../update/actions */ \"./src/update/actions.mjs\");\n//@flow\n/*::\nimport type {Dispatch, View} from 'muvjs/muv-dom'\nimport type {Model, PieceType} from '../model/model'\n*/\n\n\n\n\n\nconst jumpAvailable /*: Model => boolean */\n  = model => {\n    const sR = model.selectedPiecePosition[0];\n    const sC = model.selectedPiecePosition[1];\n    const selectedCellRow = model.rows[sR];\n    const selectedCell = selectedCellRow && selectedCellRow[sC];\n    const selectedPiece = selectedCell && selectedCell.piece;\n\n    const topCellRow = model.rows[sR - 1];\n    const bottomCellRow = model.rows[sR + 1];\n    const leftTopCell = !!topCellRow && topCellRow[sC - 1];\n    const rightTopCell = !!topCellRow && topCellRow[sC + 1];\n    const leftBottomCell = !!bottomCellRow && bottomCellRow[sC - 1];\n    const rightBottomCell = !!bottomCellRow && bottomCellRow[sC + 1];\n\n    const leftTopPiece = !!leftTopCell && leftTopCell.piece;\n    const rightTopPiece = !!rightTopCell && rightTopCell.piece;\n    const leftBottomPiece = !!leftBottomCell && leftBottomCell.piece;\n    const rightBottomPiece = !!rightBottomCell && rightBottomCell.piece;\n\n    const topTopCellRow = model.rows[sR - 2];\n    const bottomBottomCellRow = model.rows[sR + 2];\n    const leftLeftTopTopCell = !!topTopCellRow && topTopCellRow[sC - 2];\n    const rightRightTopTopCell = !!topTopCellRow && topTopCellRow[sC + 2];\n    const leftLeftBottomBottomCell = !!bottomBottomCellRow && bottomBottomCellRow[sC - 2];\n    const rightRightBottomBottomCell = !!bottomBottomCellRow && bottomBottomCellRow[sC + 2];\n\n    return !!selectedPiece &&\n      (\n        (selectedPiece.team === 'one' && (((!!leftTopPiece && leftTopPiece.team === \"two\" && !!leftLeftTopTopCell && !leftLeftTopTopCell.piece) || (!!rightTopPiece && rightTopPiece.team === \"two\" && !!rightRightTopTopCell && !rightRightTopTopCell.piece))\n          || (selectedPiece.type === 'square' && (((!!leftBottomPiece && leftBottomPiece.team === \"two\" && !!leftLeftBottomBottomCell && !leftLeftBottomBottomCell.piece) || (!!rightBottomPiece && rightBottomPiece.team === \"two\" && !!rightRightBottomBottomCell && !rightRightBottomBottomCell.piece))))))\n        ||\n        (selectedPiece.team === 'two' && (((!!leftBottomPiece && leftBottomPiece.team === \"one\" && !!leftLeftBottomBottomCell && !leftLeftBottomBottomCell.piece) || (!!rightBottomPiece && rightBottomPiece.team === \"one\" && !!rightRightBottomBottomCell && !rightRightBottomBottomCell.piece))\n          || (selectedPiece.type === 'square' && (((!!leftTopPiece && leftTopPiece.team === \"one\" && !!leftLeftTopTopCell && !leftLeftTopTopCell.piece) || (!!rightTopPiece && rightTopPiece.team === \"one\" && !!rightRightTopTopCell && !rightRightTopTopCell.piece))))))\n      );\n\n  }\n\nconst CheckerBoard /*: Dispatch => Model => View*/\n  = dispatch => {\n\n    const dispatcher = {\n      onSelectPiece: (r, c) => dispatch(Object(_update_actions__WEBPACK_IMPORTED_MODULE_3__[\"selectPiece\"])(r, c)),\n      onSelectMove: (r, c) => dispatch(Object(_update_actions__WEBPACK_IMPORTED_MODULE_3__[\"selectMove\"])(r, c)),\n      onSelectJump: (r, c) => dispatch(Object(_update_actions__WEBPACK_IMPORTED_MODULE_3__[\"selectMove\"])(r, c, true))\n    }\n\n    return model => {\n      const sR = model.selectedPiecePosition[0];\n      const sC = model.selectedPiecePosition[1];\n      const selectedCellRow = model.rows[sR];\n      const selectedCell = selectedCellRow && selectedCellRow[sC];\n      const selectedPiece = selectedCell && selectedCell.piece;\n\n      const isJumpAvailable = jumpAvailable(model);\n\n      return Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({ style: \"width: 100%; height 100%; display: flex; flex-direction: column\" })(\n        model.rows.map((row, r) =>\n          Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({\n            style: `display: flex;\n                flex-direction: row`})(\n              row.map((cel, c) => {\n                const piece /*: PieceType | void */ = cel.piece;\n                const isSelected = sR === r && sC === c;\n\n                const isAvailable = scope => {\n                  return !piece && selectedPiece &&\n                    (c === sC - scope || c === sC + scope) &&\n                    (\n                      (selectedPiece.team === 'one' && ((r === sR - scope) || (selectedPiece.type === 'square' && r === sR + scope)))\n                      ||\n                      (selectedPiece.team === 'two' && ((r === sR + scope) || (selectedPiece.type === 'square' && r === sR - scope)))\n                    );\n                }\n\n                const isValidJump = () => {\n                  const jumpingR = sR + (r > sR ? 1 : - 1)\n                  const jumpingC = sC + (c > sC ? 1 : - 1)\n                  const opposingTeam = model.turn === 'one' ? 'two' : 'one';\n                  const jumpingCellRow = model.rows[jumpingR];\n                  const jumpingCell = jumpingCellRow && jumpingCellRow[jumpingC];\n                  const jumpingCellPiece = jumpingCell && jumpingCell.piece;\n                  return jumpingCellPiece && jumpingCellPiece.team === opposingTeam;\n                }\n\n                const availableMove = isAvailable(1);\n                const availableJump = isAvailable(2) && isValidJump() && isJumpAvailable;\n\n                return Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({\n                  style: `width: 75px; height: 75px;\n                            background-color: ${cel.dark ? \"black\" : \"white\"};`\n                })(\n                  piece ?\n                    Object(_piece_mjs__WEBPACK_IMPORTED_MODULE_1__[\"Piece\"])({ key: `piece-${r}-${c}`, piece, selected: isSelected, onSelect: () => dispatcher.onSelectPiece(r, c) })()\n                    :\n                    availableMove ?\n                      Object(_available_move_mjs__WEBPACK_IMPORTED_MODULE_2__[\"AvailableMove\"])({ key: `available-move-${r}-${c}`, onSelect: () => dispatcher.onSelectMove(r, c) })()\n                      :\n                      availableJump ?\n                        Object(_available_move_mjs__WEBPACK_IMPORTED_MODULE_2__[\"AvailableMove\"])({ key: `available-jump-${r}-${c}`, onSelect: () => dispatcher.onSelectJump(r, c) })() : undefined\n\n                )\n              })\n            )\n        ))\n    }\n  }\n\n//# sourceURL=webpack:///./src/view/checker-board.mjs?");

/***/ }),

/***/ "./src/view/piece.mjs":
/*!****************************!*\
  !*** ./src/view/piece.mjs ***!
  \****************************/
/*! exports provided: Piece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Piece\", function() { return Piece; });\n/* harmony import */ var muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! muvjs/muv-dom */ \"./node_modules/muvjs/muv-dom.mjs\");\n//@flow\n/*::\nimport {View} from 'muvjs/muv-dom';\nimport type {PieceType} from '../model/model';\n*/\n\n\n/*::\ninterface PieceProps {\n  piece: PieceType | void,\n  selected: boolean,\n  onSelect: () => void,\n  key: string\n}\n*/\n\nconst Piece /*: PieceProps => () => View */\n  = props => {\n    const piece = props.piece;\n    if(!piece) return () => null;\n    let shapeStyle = \"\";\n    if (piece.type === \"circle\") {\n      shapeStyle = \"border-radius: 100%; width:75%; height:75%;\"\n    } else if (piece.type === \"square\") {\n      shapeStyle = \"width:50%; height:50%;\";\n    }\n    return () =>\n      Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({ key: props.key,\n        style: 'position: relative; width: 100%; height: 100%;',\n            onclick: props.onSelect })(\n        Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({\n          style: `${shapeStyle}\n                  ${props.selected ? 'border: red 3px solid;' : 'border: gold 2px solid;'}\n                    top: 50%;\n                    left: 50%;\n                    -ms-transform: translate(-50%, -50%);\n                    transform: translate(-50%, -50%);\n                    position: absolute;\n                    background-color: ${piece.team === 'one' ? \"black\" : \"white\"};`\n        })()\n      )\n  }\n\n\n//# sourceURL=webpack:///./src/view/piece.mjs?");

/***/ }),

/***/ "./src/view/view.mjs":
/*!***************************!*\
  !*** ./src/view/view.mjs ***!
  \***************************/
/*! exports provided: view */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"view\", function() { return view; });\n/* harmony import */ var muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! muvjs/muv-dom */ \"./node_modules/muvjs/muv-dom.mjs\");\n/* harmony import */ var _checker_board_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checker-board.mjs */ \"./src/view/checker-board.mjs\");\n/* harmony import */ var _update_actions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../update/actions.mjs */ \"./src/update/actions.mjs\");\n\n\n\n\nconst view = dispatch => {\n\n  const dispatcher = {\n    reset: () => dispatch(Object(_update_actions_mjs__WEBPACK_IMPORTED_MODULE_2__[\"reset\"])())\n  }\n\n  const CheckerBoardContent = Object(_checker_board_mjs__WEBPACK_IMPORTED_MODULE_1__[\"CheckerBoard\"])(dispatch);\n\n  return model =>\n    Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])()([\n      , CheckerBoardContent(model)\n      , Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"button\"])({onclick: dispatcher.reset})('Reset')\n      , Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])()(\"Players turn: \"+ model.turn)\n      , Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])()(\"Player 1 captures: \"+ model.playerOne.captures)\n      , Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])()(\"Player 2 captures: \"+ model.playerTwo.captures)\n    ])\n\n}\n\n//# sourceURL=webpack:///./src/view/view.mjs?");

/***/ })

/******/ });