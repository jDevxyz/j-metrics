(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["J-Metrics"] = factory();
	else
		root["J-Metrics"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "express"
var external_express_ = __webpack_require__(1);
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_);

// EXTERNAL MODULE: external "body-parser"
var external_body_parser_ = __webpack_require__(2);

// CONCATENATED MODULE: ./src/Routes.ts
class Routes {
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({ message: 'GET Req Received!' });
        });
        app.route('/api')
            .get((req, res) => {
            res.status(200).send({ message: 'GET Req Received! ' });
        })
            .post((req, res) => {
            res.status(200).send({ message: 'POST Req Received!' });
        });
    }
}

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(0);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);

// CONCATENATED MODULE: ./src/models/Metrics.model.ts

const Metrics = new external_mongoose_["Schema"]({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    version: { type: String, required: true },
    repository: {
        type: { type: String, required: true },
        url: { type: String, required: true }
    },
    author: { type: String, required: true } || {
        name: { type: String },
        email: { type: String },
        url: { type: String }
    },
    license: { type: String, required: true },
}, {
    timestamps: true,
});
const MetricsModel = external_mongoose_default.a.model('Metrics', Metrics);
class MetricsController {
    insertMetric(req, res, cb) {
        const newMetrics = new MetricsModel(req.body);
        newMetrics.save((err, metrics) => {
            if (err) {
                cb(err);
            }
            cb(metrics);
        });
    }
}

// CONCATENATED MODULE: ./src/Database.ts


class Database_Database {
    constructor(mongourl) {
        this.mongourl = mongourl;
        this.controller = new MetricsController();
    }
    async connect() {
        return new Promise((resolve, reject) => {
            external_mongoose_default.a.connect(this.mongourl, { useNewUrlParser: true }).then((mongo) => {
                resolve(mongo);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}

// CONCATENATED MODULE: ./src/Application.ts




class Application_Application {
    constructor() {
        this.app = external_express_default()();
        this.routeAPI = new Routes();
        const __MONGOURI__ = 'mongodb+srv://nine:lolimama4569@cluster01-lvwdf.mongodb.net/test?retryWrites=true';
        this.database = new Database_Database(__MONGOURI__);
        this.routeAPI.routes(this.app);
        this.config();
    }
    config() {
        this.app.use(Object(external_body_parser_["json"])());
        this.app.use(Object(external_body_parser_["urlencoded"])({ extended: false }));
        this.app.use(external_express_default.a.static('public'));
        this.database.connect().then((mongo) => {
            console.log('Connected to mongodb database!');
        }).catch((err) => {
            throw err;
        });
    }
}
/* harmony default export */ var src_Application = (new Application_Application().app);

// CONCATENATED MODULE: ./src/index.ts

src_Application.set('port', process.env.PORT || 5000);
const PORT = src_Application.get('port');
src_Application.listen(PORT, () => {
    console.log('J-Metrics server API listening on port ' + PORT);
});


/***/ })
/******/ ]);
});