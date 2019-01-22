(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\n  height: 150px;\n  width: 100%;\n  background-image: linear-gradient(to right, #333399, #339933);\n  color: #fff;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.loader-container{\n  margin: auto;\n  width: 0%;\n  margin-top: 50px;\n  text-align: center;\n}\n\n.page-container{\n  margin-top: 50px;\n}\n\n.title-container{\n  padding-top: 30px;\n  font-size: 1.2em;\n}\n\n.empty-results{\n  width: 80%;\n  margin-left: 10%;\n}\n\n.favourites-title{\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n  color: #339933;\n}\n\n.footer{\n  margin-bottom: 300px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCw2REFBNkQ7RUFDN0QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEIiLCJmaWxlIjoiLi4vYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzMzMzk5LCAjMzM5OTMzKTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmxvYWRlci1jb250YWluZXJ7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDAlO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wYWdlLWNvbnRhaW5lcntcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnRpdGxlLWNvbnRhaW5lcntcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5lbXB0eS1yZXN1bHRze1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4uZmF2b3VyaXRlcy10aXRsZXtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIGNvbG9yOiAjMzM5OTMzO1xufVxuXG4uZm9vdGVye1xuICBtYXJnaW4tYm90dG9tOiAzMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"title-container\">\n    <h1>Toronto Waste Lookup</h1>\n  </div>\n</div>\n\n<div *ngIf=\"loading\" class=\"loader-container\">\n  <app-loader></app-loader>\n</div>\n<div *ngIf=\"!loading\" class=\"page-container\">\n  <app-search-form (search)=\"performSearch($event)\"></app-search-form>\n  <br>\n  <app-result-display *ngIf=\"displayResults.length !== 0\" [results]=\"displayResults\" (favourited)=\"setFavourite($event)\"></app-result-display>\n  <p *ngIf=\"displayResults.length === 0\" class=\"empty-results\">Search results will be displayed here.</p>\n  <h2 class=\"favourites-title\" >Favourites</h2>\n  <app-result-display *ngIf=\"favouriteResults.length !== 0\" [results]=\"favouriteResults\" (favourited)=\"setFavourite($event)\"></app-result-display>\n  <p *ngIf=\"favouriteResults.length === 0\" class=\"empty-results\">You don't have any favourites yet. Once you favourite some items, they will appear here.</p>\n\n  <div class=\"footer\"></div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-manager.service */ "./src/app/data-manager.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(dataManager) {
        this.dataManager = dataManager;
        this.displayResults = [];
        this.favouriteResults = [];
        this.loading = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataManager.getData().then(function (data) {
            _this.favouriteResults = data.filter(function (dataPoint) { return dataPoint.isFavourite; });
            _this.loading = false;
        });
    };
    AppComponent.prototype.updateFavourites = function () {
        var _this = this;
        this.dataManager.getData().then(function (data) {
            _this.favouriteResults = data.filter(function (dataPoint) { return dataPoint.isFavourite; });
        });
    };
    AppComponent.prototype.performSearch = function (query) {
        this.displayResults = this.dataManager.search(query);
    };
    AppComponent.prototype.setFavourite = function (dataPoint) {
        this.dataManager.setFavourite(dataPoint);
        this.updateFavourites();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_manager_service__WEBPACK_IMPORTED_MODULE_2__["DataManagerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-form/search-form.component */ "./src/app/search-form/search-form.component.ts");
/* harmony import */ var _result_display_result_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./result-display/result-display.component */ "./src/app/result-display/result-display.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"],
                _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_10__["SearchFormComponent"],
                _result_display_result_display_component__WEBPACK_IMPORTED_MODULE_11__["ResultDisplayComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data-manager.service.ts":
/*!*****************************************!*\
  !*** ./src/app/data-manager.service.ts ***!
  \*****************************************/
/*! exports provided: DataManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManagerService", function() { return DataManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataManagerService = /** @class */ (function () {
    function DataManagerService(http) {
        this.http = http;
        this.data = [];
    }
    DataManagerService.prototype.getDataFromServer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get("https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000").toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataManagerService.prototype.getDataFromCache = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var timestamp;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                timestamp = parseInt(window.localStorage.getItem('DataTimestamp'));
                console.error('timestamp + 1h: ', timestamp + (1000 * 60 * 60));
                console.error('current: ', new Date().getTime());
                // timestamp is more than 1h old, then replace
                if (isNaN(timestamp) || (timestamp + (1000 * 60 * 60)) < new Date().getTime()) {
                    // send nothing, since expired
                    return [2 /*return*/, null];
                }
                else {
                    // read from the cache, if possible
                    return [2 /*return*/, JSON.parse(window.localStorage.getItem('Data'))];
                }
                return [2 /*return*/];
            });
        });
    };
    DataManagerService.prototype.getData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.data !== null && this.data.length > 0) {
                            console.warn('Fetched pre-loaded data');
                            return [2 /*return*/, this.data];
                        }
                        return [4 /*yield*/, this.getDataFromCache()];
                    case 1:
                        data = _a.sent();
                        if (!(data !== null)) return [3 /*break*/, 2];
                        console.warn('Fetched cached data');
                        this.data = data;
                        return [2 /*return*/, data];
                    case 2: return [4 /*yield*/, this.getDataFromServer()];
                    case 3:
                        data = _a.sent();
                        this.updateCache(data);
                        this.data = data;
                        console.warn('Fetched downloaded data');
                        return [2 /*return*/, data];
                }
            });
        });
    };
    DataManagerService.prototype.updateCache = function (data) {
        var timestamp = new Date().getTime();
        window.localStorage.setItem('DataTimestamp', "" + timestamp);
        window.localStorage.setItem('Data', JSON.stringify(data));
    };
    DataManagerService.prototype.search = function (query) {
        if (query === '') {
            return [];
        }
        return this.data.filter(function (dataPoint) {
            return dataPoint.keywords.split(', ').some(function (keyword) { return keyword.toUpperCase().includes(query.toUpperCase()); });
        });
    };
    DataManagerService.prototype.setFavourite = function (dataPoint) {
        try {
            this.data.find(function (data) { return data.title == dataPoint.title && data.body == dataPoint.body; }).isFavourite = dataPoint.isFavourite;
            this.updateCache(this.data);
        }
        catch (e) {
            console.warn('Datapoint not found. Not setting favourite.');
        }
    };
    DataManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataManagerService);
    return DataManagerService;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Taken from https://codepen.io/ivillamil/pen/dokmG */\n\n.container {\n  width: 100%;\n  align-items: center;\n  background-color: #1D1F20;\n  display: flex;\n  justify-content: center;\n}\n\n.loader  {\n  -webkit-animation: rotate 1s infinite;\n          animation: rotate 1s infinite;\n  height: 50px;\n  width: 50px;\n}\n\n.loader:before,\n.loader:after {\n  border-radius: 50%;\n  content: '';\n  display: block;\n  height: 20px;\n  width: 20px;\n}\n\n.loader:before {\n  -webkit-animation: ball1 1s infinite;\n          animation: ball1 1s infinite;\n  background-color: #cb2025;\n  box-shadow: 30px 0 0 #f8b334;\n  margin-bottom: 10px;\n}\n\n.loader:after {\n  -webkit-animation: ball2 1s infinite;\n          animation: ball2 1s infinite;\n  background-color: #00a096;\n  box-shadow: 30px 0 0 #97bf0d;\n}\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg) scale(0.8);\n    -moz-transform: rotate(0deg) scale(0.8);\n  }\n  50% {\n    -webkit-transform: rotate(360deg) scale(1.2);\n    -moz-transform: rotate(360deg) scale(1.2);\n  }\n  100% {\n    -webkit-transform: rotate(720deg) scale(0.8);\n    -moz-transform: rotate(720deg) scale(0.8);\n  }\n}\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg) scale(0.8);\n    -moz-transform: rotate(0deg) scale(0.8);\n  }\n  50% {\n    -webkit-transform: rotate(360deg) scale(1.2);\n    -moz-transform: rotate(360deg) scale(1.2);\n  }\n  100% {\n    -webkit-transform: rotate(720deg) scale(0.8);\n    -moz-transform: rotate(720deg) scale(0.8);\n  }\n}\n\n@-webkit-keyframes ball1 {\n  0% {\n    box-shadow: 30px 0 0 #f8b334;\n  }\n  50% {\n    box-shadow: 0 0 0 #f8b334;\n    margin-bottom: 0;\n    -webkit-transform: translate(15px,15px);\n    -moz-transform: translate(15px, 15px);\n  }\n  100% {\n    box-shadow: 30px 0 0 #f8b334;\n    margin-bottom: 10px;\n  }\n}\n\n@keyframes ball1 {\n  0% {\n    box-shadow: 30px 0 0 #f8b334;\n  }\n  50% {\n    box-shadow: 0 0 0 #f8b334;\n    margin-bottom: 0;\n    -webkit-transform: translate(15px,15px);\n    -moz-transform: translate(15px, 15px);\n  }\n  100% {\n    box-shadow: 30px 0 0 #f8b334;\n    margin-bottom: 10px;\n  }\n}\n\n@-webkit-keyframes ball2 {\n  0% {\n    box-shadow: 30px 0 0 #97bf0d;\n  }\n  50% {\n    box-shadow: 0 0 0 #97bf0d;\n    margin-top: -20px;\n    -webkit-transform: translate(15px,15px);\n    -moz-transform: translate(15px, 15px);\n  }\n  100% {\n    box-shadow: 30px 0 0 #97bf0d;\n    margin-top: 0;\n  }\n}\n\n@keyframes ball2 {\n  0% {\n    box-shadow: 30px 0 0 #97bf0d;\n  }\n  50% {\n    box-shadow: 0 0 0 #97bf0d;\n    margin-top: -20px;\n    -webkit-transform: translate(15px,15px);\n    -moz-transform: translate(15px, 15px);\n  }\n  100% {\n    box-shadow: 30px 0 0 #97bf0d;\n    margin-top: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzREFBc0Q7O0FBRXREO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUNBO0VBQ0Usb0NBQTRCO1VBQTVCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLG9DQUE0QjtVQUE1Qiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFO0lBQ0UsMENBQTBDO0lBQzFDLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsNENBQTRDO0lBQzVDLHlDQUF5QztFQUMzQztFQUNBO0lBQ0UsNENBQTRDO0lBQzVDLHlDQUF5QztFQUMzQztBQUNGOztBQWJBO0VBQ0U7SUFDRSwwQ0FBMEM7SUFDMUMsdUNBQXVDO0VBQ3pDO0VBQ0E7SUFDRSw0Q0FBNEM7SUFDNUMseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSw0Q0FBNEM7SUFDNUMseUNBQXlDO0VBQzNDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBZEE7RUFDRTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQix1Q0FBdUM7SUFDdkMscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsYUFBYTtFQUNmO0FBQ0Y7O0FBZEE7RUFDRTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQix1Q0FBdUM7SUFDdkMscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoiLi4vbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGFrZW4gZnJvbSBodHRwczovL2NvZGVwZW4uaW8vaXZpbGxhbWlsL3Blbi9kb2ttRyAqL1xuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRDFGMjA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9hZGVyICB7XG4gIGFuaW1hdGlvbjogcm90YXRlIDFzIGluZmluaXRlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4ubG9hZGVyOmJlZm9yZSxcbi5sb2FkZXI6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cbi5sb2FkZXI6YmVmb3JlIHtcbiAgYW5pbWF0aW9uOiBiYWxsMSAxcyBpbmZpbml0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiMjAyNTtcbiAgYm94LXNoYWRvdzogMzBweCAwIDAgI2Y4YjMzNDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5sb2FkZXI6YWZ0ZXIge1xuICBhbmltYXRpb246IGJhbGwyIDFzIGluZmluaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMDk2O1xuICBib3gtc2hhZG93OiAzMHB4IDAgMCAjOTdiZjBkO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDAuOCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgwLjgpO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpIHNjYWxlKDAuOCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpIHNjYWxlKDAuOCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBiYWxsMSB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiAzMHB4IDAgMCAjZjhiMzM0O1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgI2Y4YjMzNDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwxNXB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDMwcHggMCAwICNmOGIzMzQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJhbGwyIHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDMwcHggMCAwICM5N2JmMGQ7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAjOTdiZjBkO1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwxNXB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDMwcHggMCAwICM5N2JmMGQ7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Taken from https://codepen.io/ivillamil/pen/dokmG -->\n<div class=\"loader\"></div>\n"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/result-display/result-display.component.css":
/*!*************************************************************!*\
  !*** ./src/app/result-display/result-display.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td{\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.resultTable{\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Jlc3VsdC1kaXNwbGF5L3Jlc3VsdC1kaXNwbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoiLi4vcmVzdWx0LWRpc3BsYXkvcmVzdWx0LWRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRke1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5yZXN1bHRUYWJsZXtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/result-display/result-display.component.html":
/*!**************************************************************!*\
  !*** ./src/app/result-display/result-display.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"resultTable\">\n  <tr *ngFor=\"let dataPoint of results; index as i\">\n    <td>\n      <!-- star here -->\n        <i *ngIf=\"dataPoint.isFavourite\" class=\"material-icons\" style=\"color:#339933;cursor:pointer;\" (click)=\"setFavourite(false, i)\">\n          star_rate\n        </i>\n        <i *ngIf=\"!dataPoint.isFavourite\" class=\"material-icons\" style=\"color:#d2d2d2;cursor:pointer;\" (click)=\"setFavourite(true, i)\">\n          star_rate\n        </i>\n    </td>\n    <td>\n      <!-- title -->\n      {{ dataPoint.title }}\n    </td>\n    <td>\n      <!-- body -->\n      <div [innerHTML]=\"decodeHTML(dataPoint.body)\"></div>\n    </td>\n  </tr>\n<table>\n"

/***/ }),

/***/ "./src/app/result-display/result-display.component.ts":
/*!************************************************************!*\
  !*** ./src/app/result-display/result-display.component.ts ***!
  \************************************************************/
/*! exports provided: ResultDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultDisplayComponent", function() { return ResultDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResultDisplayComponent = /** @class */ (function () {
    function ResultDisplayComponent() {
        this.favourited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.results = [];
    }
    ResultDisplayComponent.prototype.ngOnInit = function () {
    };
    ResultDisplayComponent.prototype.ngOnChanges = function () {
    };
    ResultDisplayComponent.prototype.decodeHTML = function (html) {
        var text = document.createElement('textarea');
        text.innerHTML = html;
        return text.value;
    };
    ResultDisplayComponent.prototype.setFavourite = function (isFavourite, index) {
        this.results[index].isFavourite = isFavourite;
        this.favourited.emit(this.results[index]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ResultDisplayComponent.prototype, "results", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResultDisplayComponent.prototype, "favourited", void 0);
    ResultDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result-display',
            template: __webpack_require__(/*! ./result-display.component.html */ "./src/app/result-display/result-display.component.html"),
            styles: [__webpack_require__(/*! ./result-display.component.css */ "./src/app/result-display/result-display.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResultDisplayComponent);
    return ResultDisplayComponent;
}());



/***/ }),

/***/ "./src/app/search-form/search-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/search-form/search-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchForm{\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.searchInput{\n  width: 80%;\n  float: left;\n  margin-right: 10px;\n}\n\n.searchButton{\n  overflow: hidden;\n  background-color: #339933;\n  border: none;\n  border-radius: 2px;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.searchButtonIcon{\n  height: 24px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzZWFyY2gtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaEZvcm17XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4uc2VhcmNoSW5wdXR7XG4gIHdpZHRoOiA4MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5zZWFyY2hCdXR0b257XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzk5MzM7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc2VhcmNoQnV0dG9uSWNvbntcbiAgaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/search-form/search-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/search-form/search-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"searchForm\" (submit)=\"performSearch()\">\n  <input [(ngModel)]=\"query\" class=\"searchInput\" type=\"text\" name=\"query\"/>\n  <button class=\"searchButton\" role=\"button\" type=\"submit\">\n    <div class=\"searchButtonIcon\">\n      <i class=\"material-icons\">\n        search\n      </i>\n    </div>\n  </button>\n</form>\n"

/***/ }),

/***/ "./src/app/search-form/search-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-form/search-form.component.ts ***!
  \******************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent() {
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.query = '';
    }
    SearchFormComponent.prototype.ngOnInit = function () {
    };
    SearchFormComponent.prototype.performSearch = function () {
        this.search.emit(this.query);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchFormComponent.prototype, "search", void 0);
    SearchFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-form',
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.css */ "./src/app/search-form/search-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/stuart/git/shopify-web-engineer-challenge/application/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map