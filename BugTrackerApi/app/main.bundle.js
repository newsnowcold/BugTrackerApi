webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-container\" *ngIf=\"showLoader\" layout=\"column\" layout-align=\"center center\">\r\n    <loaders-css  [loader]=\"'ball-pulse-rise'\" [loaderClass]=\"'my-loader'\">\r\n    </loaders-css>\r\n</div>\r\n\r\n<article layout=\"column\">\r\n    <app-header></app-header>\r\n    <router-outlet></router-outlet>\r\n</article>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_loader_service__ = __webpack_require__("../../../../../src/shared/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_service__ = __webpack_require__("../../../../../src/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(loaderService, userService, http, router) {
        this.loaderService = loaderService;
        this.userService = userService;
        this.http = http;
        this.router = router;
        this.unauthorizeRoutes = new Array("auth", "forgot-password", "set-new-password");
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkUserUpdates();
        this.loaderService.status.subscribe(function (val) { return setTimeout(function () {
            _this.showLoader = val;
        }, 0); });
    };
    AppComponent.prototype.checkUserUpdates = function () {
        var _this = this;
        var currentUrl = this.router.url;
        if (this.unauthorizeRoutes.indexOf(currentUrl) != -1)
            return;
        this.http.get('account')
            .subscribe(function (result) {
            var data = result.json();
            _this.userService.setUserRole(data.Role);
        }, function (err) { return console.log(err); }, function () { console.log('done'); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_loader_service__["a" /* LoaderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_handyDandy__ = __webpack_require__("../../../../../src/shared/handyDandy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http_factory__ = __webpack_require__("../../../../../src/app/http.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_auth_guard_service__ = __webpack_require__("../../../../../src/shared/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_user_service__ = __webpack_require__("../../../../../src/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_loaders_css__ = __webpack_require__("../../../../angular2-loaders-css/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_loaders_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_loaders_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_loader_service__ = __webpack_require__("../../../../../src/shared/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_issue_prio_status_service__ = __webpack_require__("../../../../../src/shared/issue-prio-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_projectService_project_service__ = __webpack_require__("../../../../../src/shared/projectService/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_usersService_users_service__ = __webpack_require__("../../../../../src/shared/usersService/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_module_login_module__ = __webpack_require__("../../../../../src/auth/module-login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__registration_registration_module__ = __webpack_require__("../../../../../src/registration/registration.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__user_profile_user_profile_module__ = __webpack_require__("../../../../../src/user-profile/user-profile.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__settings_settings_module__ = __webpack_require__("../../../../../src/settings/settings.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_pipes_object_keys_pipe__ = __webpack_require__("../../../../../src/shared/pipes/object-keys.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// app modules
// login





// Pipes

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_22__shared_pipes_object_keys_pipe__["a" /* KeysPipe */],
            // an array of login module components
            __WEBPACK_IMPORTED_MODULE_17__auth_module_login_module__["a" /* LoginModuleComponents */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_21__header_header_component__["a" /* HeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* MainRoutingModule */],
            // the actual login routing module
            __WEBPACK_IMPORTED_MODULE_17__auth_module_login_module__["b" /* LoginModuleRoute */],
            __WEBPACK_IMPORTED_MODULE_12_angular2_loaders_css__["LoadersCssModule"],
            __WEBPACK_IMPORTED_MODULE_20__settings_settings_module__["a" /* SettingsModule */],
            __WEBPACK_IMPORTED_MODULE_18__registration_registration_module__["a" /* RegistrationModule */],
            __WEBPACK_IMPORTED_MODULE_19__user_profile_user_profile_module__["a" /* UserProfileModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__shared_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_11__shared_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_14__shared_issue_prio_status_service__["a" /* IssueStatusAndPriority */],
            __WEBPACK_IMPORTED_MODULE_15__shared_projectService_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_handyDandy__["a" /* HandyDandyTools */],
            __WEBPACK_IMPORTED_MODULE_16__shared_usersService_users_service__["a" /* UsersService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */],
                useFactory: __WEBPACK_IMPORTED_MODULE_7__http_factory__["a" /* httpFactory */],
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_13__shared_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_11__shared_user_service__["a" /* UserService */]]
            }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_guard_service__ = __webpack_require__("../../../../../src/shared/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */],
        pathMatch: 'full',
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_auth_guard_service__["a" /* AuthGuard */]]
    }
];
var MainRoutingModule = (function () {
    function MainRoutingModule() {
    }
    return MainRoutingModule;
}());
MainRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], MainRoutingModule);

;
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#app-main-header {\r\n\r\n}\r\n\r\n#app-main-header .breadcrumb {\r\n    background-color: transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"app-main-header\" layout=\"row\" layout-align=\"space-between\" \r\n*ngIf=\"token\">\r\n    <div class=\"brand\">\r\n        <h2 class=\"clickable\" (click)=\"goto('/')\">Bug Tracking Application</h2>\r\n    </div>\r\n    <div class=\"menus\">\r\n        <ol class=\"breadcrumb muteTxt\">\r\n            <li (click)=\"goto('/user-profile')\" class=\"clickable\">{{currentUser}}</li>\r\n            <li (click)=\"logout()\" class=\"clickable\">Logout</li>\r\n            <li class=\"clickable\" (click)=\"goto('/settings')\">\r\n                <i class=\"material-icons\">settings</i>\r\n            </li>\r\n          </ol>\r\n    </div>\r\n</header>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_user_service__ = __webpack_require__("../../../../../src/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.userService.token.subscribe(function (val) {
            _this.token = val;
        });
        this.userService.user.subscribe(function (val) {
            _this.currentUser = (val) ? val.username : undefined;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.userService.removeToken();
        this.currentUser = undefined;
    };
    HeaderComponent.prototype.goto = function (path) {
        this.router.navigate([path]);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/http.factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = httpFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_interceptor__ = __webpack_require__("../../../../../src/app/http.interceptor.ts");
/*
    Credits:
    https://scotch.io/@kashyapmukkamala/using-http-interceptor-with-angular2
*/

function httpFactory(xhrBackend, requestOptions, loaderService, router, userService) {
    return new __WEBPACK_IMPORTED_MODULE_0__http_interceptor__["a" /* InterceptedHttp */](xhrBackend, requestOptions, loaderService, router, userService);
}
//# sourceMappingURL=http.factory.js.map

/***/ }),

/***/ "../../../../../src/app/http.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptedHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_loader_service__ = __webpack_require__("../../../../../src/shared/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_user_service__ = __webpack_require__("../../../../../src/shared/user.service.ts");
/*
    Credits:
    https://scotch.io/@kashyapmukkamala/using-http-interceptor-with-angular2
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InterceptedHttp = (function (_super) {
    __extends(InterceptedHttp, _super);
    function InterceptedHttp(backend, defaultOptions, loaderService, router, userService) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.loaderService = loaderService;
        _this.router = router;
        _this.userService = userService;
        _this.unauthorizeRoutes = new Array("/auth", "/forgot-password", "/set-new-password");
        return _this;
    }
    InterceptedHttp.prototype.get = function (url, options) {
        var _this = this;
        url = this.updateUrl(url);
        return _super.prototype.get.call(this, url, this.getRequestOptionArgs(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        })
            .finally(function () {
            _this.onEnd();
        });
    };
    InterceptedHttp.prototype.post = function (url, body, options) {
        var _this = this;
        url = this.updateUrl(url);
        return _super.prototype.post.call(this, url, body, this.getRequestOptionArgs(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        })
            .finally(function () {
            _this.onEnd();
        });
    };
    InterceptedHttp.prototype.patch = function (url, body, options) {
        var _this = this;
        url = this.updateUrl(url);
        return _super.prototype.patch.call(this, url, body, this.getRequestOptionArgs(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        })
            .finally(function () {
            _this.onEnd();
        });
    };
    InterceptedHttp.prototype.put = function (url, body, options) {
        var _this = this;
        url = this.updateUrl(url);
        return _super.prototype.put.call(this, url, body, this.getRequestOptionArgs(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        })
            .finally(function () {
            _this.onEnd();
        });
    };
    InterceptedHttp.prototype.delete = function (url, options) {
        var _this = this;
        url = this.updateUrl(url);
        return _super.prototype.delete.call(this, url, this.getRequestOptionArgs(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        })
            .finally(function () {
            _this.onEnd();
        });
    };
    InterceptedHttp.prototype.extractData = function (res) {
        return res.text() ? res.json() : {};
        ;
    };
    InterceptedHttp.prototype.onCatch = function (error, caught) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error);
    };
    InterceptedHttp.prototype.onError = function (error) {
        var currentUrl = this.router.url;
        var errData = this.extractData(error);
        if (errData.Code == 500) {
            alert("Error id: " + errData.Id + "\n" + errData.Message);
        }
        else if (errData.Code == 400) {
            var msg = errData.Message;
            msg += "See list of errors below:\n\n";
            for (var i = 0; i < errData.Errors.length; i++) {
                var error = errData.Errors[i];
                msg += error.Reason + "\n";
            }
            alert(msg);
        }
        else if (errData.Code == 401) {
            this.userService.removeToken();
            this.router.navigate(['/auth']);
        }
        else if (errData.Code == 403) {
            alert("You are forbidden for this action");
        }
        if (error.status == 401) {
            var baseUrl = currentUrl.split('?')[0];
            if (this.unauthorizeRoutes.indexOf(baseUrl) != -1)
                return;
            this.userService.removeToken();
            this.router.navigate(['/auth']);
        }
        else if (error.status == 403) {
            alert("You are forbidden for this action");
        }
    };
    InterceptedHttp.prototype.onSuccess = function (data) {
        // this.hideLoader();
    };
    InterceptedHttp.prototype.onEnd = function () {
        this.loaderService.display(false);
    };
    InterceptedHttp.prototype.updateUrl = function (req) {
        this.loaderService.display(true);
        return __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].origin + req;
    };
    InterceptedHttp.prototype.getRequestOptionArgs = function (options) {
        var jsonData = JSON.parse(localStorage.getItem('currentUser'));
        var token = '';
        if (jsonData && jsonData.access_token) {
            token = jsonData.token_type + ' ' + jsonData.access_token;
        }
        if (options == null) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]();
        }
        if (options.headers == null) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
            options.headers.append('Content-Type', 'application/json');
            options.headers.append('Authorization', token);
        }
        return options;
    };
    return InterceptedHttp;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]));
InterceptedHttp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* ConnectionBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* ConnectionBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_user_service__["a" /* UserService */]) === "function" && _e || Object])
], InterceptedHttp);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=http.interceptor.js.map

/***/ }),

/***/ "../../../../../src/auth/login-form/login-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-module-wrapper {\r\n    position: relative;\r\n}\r\n\r\n.login-module-wrapper .login-form {\r\n    max-width: 400px;\r\n    height: 250px;\r\n    padding: 20px;\r\n}\r\n\r\n.login-module-wrapper .login-form .f-header {\r\n    margin: 15px auto;\r\n}\r\n\r\n.login-module-wrapper .login-form input {\r\n    margin-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/auth/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-module-wrapper\"\r\n  layout=\"row\" layout-align=\"center\">\r\n  \r\n  <form flex class=\"login-form\"\r\n      layout=\"column\" layout-align=\"start\">\r\n      <h2 class=\"f-header\">Login</h2>\r\n      <span style=\"font-size: 12px; color: #c71d1d;\">{{errorMsg}}</span>\r\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\">\r\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n      <input type=\"submit\" value=\"login\" (click)=\"login()\">\r\n      <span class=\"clickable\" style=\"font-size: 14px; color: #7d7d88;\"\r\n        (click)=\"goTo('/forgot-password')\">\r\n        Forgot password\r\n      </span>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/auth/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_service__ = __webpack_require__("../../../../../src/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { ApiService } from '../../shared/api.service';
var LoginFormComponent = (function () {
    function LoginFormComponent(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
    }
    ;
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        this.errorMsg = undefined;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var data = $.param({ username: this.username, password: this.password, grant_type: 'password' });
        headers.append('Content-type', 'application/x-www-form-urlencoded');
        this.http.post('token', data, {
            headers: headers
        })
            .subscribe(function (result) {
            var data = result.json();
            _this.handleResult(data);
        }, function (error) { return _this.handlerLoginError(error); }, function () { return console.log('done'); });
    };
    LoginFormComponent.prototype.handleResult = function (data) {
        this.userService.saveToken(data);
        this.router.navigate(['']);
    };
    LoginFormComponent.prototype.handlerLoginError = function (err) {
        var error = err.json();
        this.errorMsg = error.error_description;
    };
    LoginFormComponent.prototype.goTo = function (loc) {
        this.router.navigate([loc]);
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-form',
        template: __webpack_require__("../../../../../src/auth/login-form/login-form.component.html"),
        providers: [],
        styles: [__webpack_require__("../../../../../src/auth/login-form/login-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */]) === "function" && _c || Object])
], LoginFormComponent);

var _a, _b, _c;
//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ "../../../../../src/auth/module-login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginModuleRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModuleComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_login_routing__ = __webpack_require__("../../../../../src/auth/module-login.routing.ts");

// expose the routing module and its components,
// to allow the main module to wrap these variables to
// the whole application
var LoginModuleRoute = __WEBPACK_IMPORTED_MODULE_0__module_login_routing__["a" /* LoginRoutingModule */];
var LoginModuleComponents = __WEBPACK_IMPORTED_MODULE_0__module_login_routing__["b" /* routingComponents */];
//# sourceMappingURL=module-login.module.js.map

/***/ }),

/***/ "../../../../../src/auth/module-login.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__ = __webpack_require__("../../../../../src/auth/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_change_password_request_change_password_component__ = __webpack_require__("../../../../../src/auth/request-change-password/request-change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__set_new_password_set_new_password_component__ = __webpack_require__("../../../../../src/auth/set-new-password/set-new-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth',
        component: __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__["a" /* LoginFormComponent */]
    },
    {
        path: 'forgot-password',
        component: __WEBPACK_IMPORTED_MODULE_3__request_change_password_request_change_password_component__["a" /* RequestChangePasswordComponent */]
    },
    {
        path: 'set-new-password',
        component: __WEBPACK_IMPORTED_MODULE_4__set_new_password_set_new_password_component__["a" /* SetNewPasswordComponent */]
    }
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    return LoginRoutingModule;
}());
LoginRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], LoginRoutingModule);

var routingComponents = [
    __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__["a" /* LoginFormComponent */],
    __WEBPACK_IMPORTED_MODULE_4__set_new_password_set_new_password_component__["a" /* SetNewPasswordComponent */],
    __WEBPACK_IMPORTED_MODULE_3__request_change_password_request_change_password_component__["a" /* RequestChangePasswordComponent */]
];
//# sourceMappingURL=module-login.routing.js.map

/***/ }),

/***/ "../../../../../src/auth/request-change-password/request-change-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".request-changepassword-wrapper {\r\n    position: relative;\r\n}\r\n\r\n.request-changepassword-wrapper .request-changepassword-form {\r\n    max-width: 400px;\r\n    height: 250px;\r\n    padding: 20px;\r\n}\r\n\r\n.request-changepassword-wrapper .request-changepassword-form .f-header {\r\n    margin: 15px auto;\r\n}\r\n\r\n.request-changepassword-wrapper .request-changepassword-form input {\r\n    margin-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/auth/request-change-password/request-change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"request-changepassword-wrapper\"\r\n  layout=\"row\" layout-align=\"center\">\r\n  \r\n  <form flex class=\"request-changepassword-form\"\r\n      layout=\"column\" layout-align=\"start\">\r\n      <h2 class=\"f-header\">Forgot password</h2>\r\n      <span style=\"font-size: 12px; color: #c71d1d;\">{{errorMsg}}</span>\r\n\r\n      <input type=\"text\" \r\n        [(ngModel)]=\"email\" \r\n        name=\"email\" \r\n        class=\"form-control\" \r\n        placeholder=\"Enter email\">\r\n\r\n      <input type=\"submit\" value=\"Send change password request\" (click)=\"sendForgotPassword()\">\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/auth/request-change-password/request-change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestChangePasswordComponent = (function () {
    function RequestChangePasswordComponent(http) {
        this.http = http;
        this.sendForgotPassword = function () {
            var url = "Account/RequestResetPassword";
            var redirectUrl = window.location.protocol + '//' + window.location.host;
            url += "?redirectUrl= " + redirectUrl + "/set-new-password";
            this.http.post(url, { Email: this.email })
                .subscribe(function (result) {
                alert('check email');
            }, function (error) { return console.log(error); }, function () { return console.log('done'); });
        };
    }
    RequestChangePasswordComponent.prototype.ngOnInit = function () {
    };
    return RequestChangePasswordComponent;
}());
RequestChangePasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-request-change-password',
        template: __webpack_require__("../../../../../src/auth/request-change-password/request-change-password.component.html"),
        styles: [__webpack_require__("../../../../../src/auth/request-change-password/request-change-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], RequestChangePasswordComponent);

var _a;
//# sourceMappingURL=request-change-password.component.js.map

/***/ }),

/***/ "../../../../../src/auth/set-new-password/set-new-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/auth/set-new-password/set-new-password.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"form-group\">\r\n    <label for=\"pwd\">New Password:</label>\r\n    <input type=\"password\" [(ngModel)]=\"newPass\" class=\"form-control\" id=\"pwd\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"cpwd\">Confirm Password:</label>\r\n    <input type=\"password\" [(ngModel)]=\"newPassConfirm\" class=\"form-control\" id=\"cpwd\">\r\n  </div>\r\n  <div layout=\"row\" layout-align=\"end\">\r\n    <button class=\"btn btn-primary\" (click)=\"setNewPassword()\">\r\n        Save\r\n    </button>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/auth/set-new-password/set-new-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetNewPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetNewPasswordComponent = (function () {
    function SetNewPasswordComponent(http, router, activatedRoute) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.setNewPassword = function () {
            var _this = this;
            var url = "Account/SetNewPassword";
            var data = {
                EmailAddress: this.email,
                NewPassword: this.newPass,
                ConfirmPassword: this.newPassConfirm,
                Token: this.token
            };
            this.http.post(url, data)
                .subscribe(function (result) {
                alert('Change password success');
                _this.router.navigate(['/auth']);
            }, function (error) { return console.log(error); }, function () { return console.log('done'); });
        };
    }
    SetNewPasswordComponent.prototype.ngOnInit = function () {
        this.email = this.activatedRoute.snapshot.queryParams["email"];
        this.token = this.activatedRoute.snapshot.queryParams["token"];
    };
    return SetNewPasswordComponent;
}());
SetNewPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-set-new-password',
        template: __webpack_require__("../../../../../src/auth/set-new-password/set-new-password.component.html"),
        styles: [__webpack_require__("../../../../../src/auth/set-new-password/set-new-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], SetNewPasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=set-new-password.component.js.map

/***/ }),

/***/ "../../../../../src/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#dashboard {\r\n    position: relative;\r\n}\r\n\r\n#dashboard .project-navigation {\r\n    margin-bottom: 40px;\r\n}\r\n\r\n#dashboard .project-issues {\r\n    padding: 10px;\r\n    box-shadow: 0px 1px 3px #c3c3c3;\r\n}\r\n\r\n /* MODAL */\r\n#modal-reportbug .bugPriority {\r\n    margin-bottom: 50px; \r\n}\r\n\r\n#modal-addProject .project-members {\r\n    width: 100%;\r\n    margin: 5px 0;\r\n    border: 1px solid #CCC;\r\n    padding: 10px;\r\n}\r\n\r\n#dashbmodal-addProjectoard .project-members .available,\r\n#modal-addProject .project-members .added {\r\n    padding: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"dashboard\">\r\n\r\n\r\n\r\n    <div layout=\"column\">\r\n\r\n        <div class=\"project-navigation\" layout=\"row\" layout-align=\"start center\">\r\n\r\n            <div *ngIf=\"!selectedProject\" class=\"muteTxt\">Please add project. go to settings page and add project</div>\r\n\r\n            <div class=\"dropdown\" *ngIf=\"selectedProject\">\r\n                <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n           {{ selectedProject.Name }}\r\n        <span class=\"caret\"></span></button>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li *ngFor='let project of projects; trackBy: index;'>\r\n                        <a href=\"#\" (click)=\"selectProject(project)\">{{project.Name}}</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <!-- Default panel contents -->\r\n        <div class=\"project-issues\">\r\n            <div layout=\"row\" layout-align=\"space-between center\">\r\n                <h4>Project issues[{{issues.length}}]</h4>\r\n                <div layout=\"row\">\r\n\r\n                    <!-- Priority type filter -->\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn btn default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                            Filter By priority\r\n                            <span class=\"caret\"></span>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu\" *ngIf=\"priorityTypeFilter\">\r\n                            <li class=\"bm-padding\" *ngFor=\"let priority of priorityTypeFilter | keys\" (click)=\"$event.stopPropagation()\">\r\n                                <label class=\"clickable\">\r\n                                    <input type=\"checkbox\" [(ngModel)]=\"priorityTypeFilter[priority]\">\r\n                                    {{priority}}\r\n                                </label>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n\r\n                    <!-- Status filter -->\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn btn default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                            Filter By Status\r\n                            <span class=\"caret\"></span>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu\" *ngIf=\"statusTypeFilter\">\r\n                            <li class=\"bm-padding\" *ngFor=\"let statustype of statusTypeFilter | keys\" (click)=\"$event.stopPropagation()\">\r\n                                <label class=\"clickable\">\r\n                                    <input type=\"checkbox\" [(ngModel)]=\"statusTypeFilter[statustype]\">\r\n                                    {{statustype}}\r\n                                </label>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <button class=\"btn default\" layout=\"row\" layout-align=\"space-between\" data-toggle=\"modal\" data-target=\"#modal-reportbug\">\r\n          <i class=\"material-icons\" title=\"Report bug\">bug_report</i>\r\n          Report bug\r\n        </button>\r\n                </div>\r\n            </div>\r\n            <!-- Table -->\r\n            <table class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>#</th>\r\n                        <th>Creator</th>\r\n                        <th>Ticket #</th>\r\n                        <th>Title</th>\r\n                        <th>Status</th>\r\n                        <th>Priority</th>\r\n                        <th>Updated by</th>\r\n                        <th>Date created</th>\r\n                        <th>Last update</th>\r\n                        <th>&nbsp;</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <ng-container *ngFor=\"let bug of issues; trackBy: index;\">\r\n                        <tr *ngIf=\"statusTypeFilter[bug.Status] && priorityTypeFilter[bug.Priority]\">\r\n                            <th>{{bug.index}}</th>\r\n                            <td>{{bug.CreatedBy}}</td>\r\n                            <td>{{bug.Id}}</td>\r\n                            <td>{{bug.Title}}</td>\r\n                            <td style=\"background: #ccc;\" class=\"clickable\" (click)=\"openModalForUpdatingStatus(bug)\">{{bug.Status}}</td>\r\n                            <td>{{bug.Priority}}</td>\r\n                            <td>{{bug.UpdatedBy}}</td>\r\n                            <td>{{bug.DateCreated}}</td>\r\n                            <td>{{bug.LastUpdateDate}}</td>\r\n                            <td>\r\n                                <div layout=\"row\" class=\"muteTxt clickable\">\r\n                                    <i class=\"material-icons\" (click)=\"openModalForRemovingBug(bug)\">delete</i>\r\n                                    <i class=\"material-icons\" (click)=\"openModalForUpdatingIssueObject(bug)\">mode_edit</i>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </ng-container>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- template for modal of bug reporting -->\r\n<div id=\"modal-reportbug\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Report bug</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n                <div layout=\"row\" *ngIf=\"priorityTypes\" class=\"project-field bugPriority\" layout-align=\"start center\">\r\n                    <label>Select bug priority level</label>\r\n                    <select [(ngModel)]=\"selectedPriorityType.Id\">\r\n            <option [ngValue]=\"prioType.Id\" *ngFor=\"let prioType of priorityTypes; trackBy: index;\">\r\n              {{prioType.PriorityType1}}\r\n            </option>\r\n          </select>\r\n                </div>\r\n\r\n                <!--project title-->\r\n                <div layout=\"row\" class=\"project-field\" layout-align=\"space-between center\">\r\n                    <label>Bug title</label>\r\n                    <input type=\"text\" [(ngModel)]=\"issue.title\" placeholder=\"Enter bug title title\" class=\"text-default\" flex=\"80\">\r\n                </div>\r\n\r\n                <!--project description [optional]-->\r\n                <div layout=\"row\" class=\"project-field\" layout-align=\"space-between center\">\r\n                    <label>Bug description</label>\r\n\r\n                    <textarea rows=\"4\" cols=\"50\" [(ngModel)]=\"issue.description\" placeholder=\"Add bug description [optional]\" flex=\"80\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveBug()\">Save</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<!-- template for modal of updating bug ticker -->\r\n<div id=\"modal-updatebugticket\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" *ngIf=\"toUpdateBug\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Update bug [{{toUpdateBug.Title}}]</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n                <div layout=\"row\" class=\"project-field bugPriority\" layout-align=\"start center\">\r\n                    <label>Select bug priority level</label>\r\n                    <select [(ngModel)]=\"toUpdateBug.PriorityId\">\r\n            <option [ngValue]=\"prioType.Id\" *ngFor=\"let prioType of priorityTypes; trackBy: index;\">\r\n              {{prioType.PriorityType1}}\r\n            </option>\r\n          </select>\r\n                </div>\r\n\r\n                <!--project title-->\r\n                <div layout=\"row\" class=\"project-field\" layout-align=\"space-between center\">\r\n                    <label>Bug title</label>\r\n                    <input type=\"text\" [(ngModel)]=\"toUpdateBug.Title\" placeholder=\"Enter bug title title\" class=\"text-default\" flex=\"80\">\r\n                </div>\r\n\r\n                <!--project description [optional]-->\r\n                <div layout=\"row\" class=\"project-field\" layout-align=\"space-between center\">\r\n                    <label>Bug title</label>\r\n\r\n                    <textarea rows=\"4\" cols=\"50\" [(ngModel)]=\"toUpdateBug.Description\" placeholder=\"Add bug description [optional]\" flex=\"80\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"updatebugticket()\">Save</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- template for modal of updating bug status -->\r\n<div id=\"modal-updatebug\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" *ngIf=\"toUpdateBug\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Update Status [{{toUpdateBug.Title}}]</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n                <div layout=\"row\" class=\"project-field bugPriority\" layout-align=\"start center\">\r\n                    <label>Select updated status</label>\r\n                    <select [(ngModel)]=\"toUpdateBug.StatusId\">\r\n                    <option [ngValue]=\"status.Id\" *ngFor=\"let status of statusTypes; trackBy: index;\">\r\n                      {{status.Status}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n\r\n                <div layout=\"row\" class=\"project-field\" layout-align=\"space-between center\">\r\n                    <label>Resolution Summary</label>\r\n\r\n                    <textarea rows=\"4\" cols=\"50\" [(ngModel)]=\"toUpdateBug.ResolutionSummary\" placeholder=\"Add resolution summary [optional]\"\r\n                        flex=\"80\"></textarea>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateBugStatus()\">Save</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- template for modal for deleting issue -->\r\n<div id=\"modal-removeBug\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" *ngIf=\"toRemoveBug\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Remove bug</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Are you to remove bug [{{toRemoveBug.Title}}]\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"removeBug()\">Save</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_service__ = __webpack_require__("../../../../../src/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_issue_prio_status_service__ = __webpack_require__("../../../../../src/shared/issue-prio-status.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(http, router, userService, issueStatusAndPriority) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.issueStatusAndPriority = issueStatusAndPriority;
        this.project = {
            title: undefined,
            description: undefined
        };
        this.issue = {
            title: undefined,
            description: undefined,
            priority: undefined,
        };
        this.projects = new Array();
        this.users = new Array();
        this.issues = new Array();
        this.output = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // Preparing/Calling data for static objects
        this.handleStatusTypesData = function (data) {
            this.statusTypeFilter = {};
            for (var i = 0; i < data.length; i++) {
                this.statusTypeFilter[data[i].Status] = true;
            }
            return data;
        };
        this.handlePriorityTypesData = function (data) {
            this.priorityTypeFilter = {};
            for (var i = 0; i < data.length; i++) {
                this.priorityTypeFilter[data[i].PriorityType1] = true;
            }
            return data;
        };
        this.currentUser = userService.getUser();
        this.currentUserId = userService.getUserId();
        this.getPriorityTypes();
        this.getStatusTypes();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.initializeModals();
    };
    DashboardComponent.prototype.getStatusTypes = function () {
        var _this = this;
        this.issueStatusAndPriority.getStatuses().subscribe(function (data) {
            _this.statusTypes = _this.handleStatusTypesData(data);
        });
    };
    DashboardComponent.prototype.getPriorityTypes = function () {
        var _this = this;
        this.issueStatusAndPriority.getPriorityTypes().subscribe(function (data) {
            _this.priorityTypes = _this.handlePriorityTypesData(data);
            _this.selectedPriorityType = data[0];
        });
    };
    // Preparing/Calling data for dynamic data
    DashboardComponent.prototype.selectProject = function (p) {
        this.selectedProject = p;
        this.getIssues(this.selectedProject.Id);
    };
    DashboardComponent.prototype.updateBugStatus = function () {
        var _this = this;
        this.http.patch('Issue/Project/' + this.selectedProject.Id, {
            IssueId: this.toUpdateBug.Id,
            StatusId: this.toUpdateBug.StatusId,
            ResolutionSummary: this.toUpdateBug.ResolutionSummary
        })
            .subscribe(function (result) {
            _this.getIssues(_this.selectedProject.Id);
        }, function (err) { return console.log(err); }, function () {
            _this.toUpdateBug = undefined;
            $(function () {
                $('#modal-updatebug').modal('hide');
            });
        });
    };
    DashboardComponent.prototype.openModalForUpdatingStatus = function (bugData) {
        $('#modal-updatebug').modal('show');
        this.toUpdateBug = JSON.parse(JSON.stringify(bugData));
        this.output.emit(this.toUpdateBug);
    };
    DashboardComponent.prototype.doneAddingBug = function () {
        this.issue.title = undefined;
        this.issue.description = undefined;
        this.issue.priority = undefined;
        this.selectedPriorityType = this.priorityTypes[0];
        $(function () {
            $('#modal-reportbug').modal('toggle');
        });
    };
    DashboardComponent.prototype.getIssues = function (projectId) {
        var _this = this;
        this.http.get('Issue/Project/' + projectId)
            .subscribe(function (result) {
            var data = result.json();
            _this.getIssuesHandler(data);
        }, function (err) { return console.log(); });
    };
    DashboardComponent.prototype.getProjects = function () {
        var _this = this;
        this.http.get('Project')
            .subscribe(function (result) {
            var data = result.json();
            _this.projects = data;
            if (data.length > 0) {
                _this.selectedProject = data[0];
                _this.getIssues(data[0].Id);
            }
        });
    };
    DashboardComponent.prototype.getUsers = function () {
        var _this = this;
        this.http.get('User')
            .subscribe(function (result) {
            var data = result.json();
            _this.getUsersHandler(data);
        }, function (err) { return console.log(err); });
    };
    DashboardComponent.prototype.saveBug = function () {
        var _this = this;
        this.http.post('Issue/Project/' + this.selectedProject.Id, {
            Title: this.issue.title,
            Description: this.issue.description,
            PriorityId: this.selectedPriorityType.Id
        })
            .subscribe(function (result) {
            _this.getIssues(_this.selectedProject.Id);
        }, function (err) { return _this.doneAddingBug(); }, function () { return _this.doneAddingBug(); });
    };
    DashboardComponent.prototype.openModalForRemovingBug = function (bug) {
        $('#modal-removeBug').modal('show');
        this.toRemoveBug = JSON.parse(JSON.stringify(bug));
        this.output.emit(this.toRemoveBug);
    };
    DashboardComponent.prototype.removeBug = function () {
        var _this = this;
        var url = 'Issue/Project/' + this.selectedProject.Id + '/';
        this.http.delete(url + this.toRemoveBug.Id, {})
            .subscribe(function (result) {
            _this.getIssues(_this.selectedProject.Id);
        }, function (err) { }, function () {
            $('#modal-removeBug').modal('hide');
            _this.toRemoveBug = undefined;
        });
    };
    DashboardComponent.prototype.openModalForUpdatingIssueObject = function (issue) {
        $('#modal-updatebugticket').modal('show');
        this.toUpdateBug = JSON.parse(JSON.stringify(issue));
        this.output.emit(this.toUpdateBug);
    };
    DashboardComponent.prototype.updatebugticket = function () {
        var _this = this;
        this.http.put('Issue/Project/' + this.selectedProject.Id, {
            Id: this.toUpdateBug.Id,
            Title: this.toUpdateBug.Title,
            Description: this.toUpdateBug.Description,
            PriorityId: this.toUpdateBug.PriorityId
        })
            .subscribe(function (result) {
            _this.getIssues(_this.selectedProject.Id);
        }, function (err) { return _this.toUpdateBug = undefined; }, function () {
            _this.toUpdateBug = undefined;
            $('#modal-updatebugticket').modal('hide');
        });
    };
    // helper methods
    DashboardComponent.prototype.utcToLocalTime = function (timeString) {
        if (!timeString)
            return;
        var utcDate = new Date(timeString.replace('T', ' ')), offset = new Date().getTimezoneOffset(), timeZoneDiff = offset + utcDate.getTimezoneOffset();
        var localTime = new Date(utcDate.getTime() + (timeZoneDiff * 60 * 1000));
        return moment(localTime).format('MM/DD/YYYY h:mm a');
    };
    DashboardComponent.prototype.getIssuesHandler = function (data) {
        this.issues = [];
        for (var i = 0; i < data.length; i++) {
            var issue = data[i];
            issue['index'] = (i + 1);
            issue.DateCreated = this.utcToLocalTime(issue.DateCreated);
            issue.DateClosed = this.utcToLocalTime(issue.DateClosed);
            issue.LastUpdateDate = this.utcToLocalTime(issue.LastUpdateDate);
            this.issues.push(issue);
        }
        this.output.emit(this.issues);
    };
    DashboardComponent.prototype.getUsersHandler = function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].Id == this.currentUserId) {
                data[i]['isCurrentUser'] = true;
            }
            ;
            data[i]['isSelected'] = false;
        }
        this.users = data;
    };
    DashboardComponent.prototype.initializeModals = function () {
        this.modal = {
            project: {
                IsProjectPhase: true
            }
        };
    };
    return DashboardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "selectedPriorityType", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "toUpdateBug", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "toRemoveBug", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "output", void 0);
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_issue_prio_status_service__["a" /* IssueStatusAndPriority */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_issue_prio_status_service__["a" /* IssueStatusAndPriority */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    origin: 'http://medbillbugtrackerapp.azurewebsites.net/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/registration/registration-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/registration/registration-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"complete-registration-form\"\r\n  layout=\"row\" layout-align=\"center start\">\r\n  <div layout=\"column\" flex=\"33\">\r\n    <div class=\"form-group\">\r\n      <label for=\"fname\">First Name:</label>\r\n      <input [(ngModel)]=\"firstName\" type=\"email\" class=\"form-control\" id=\"fname\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"lname\">Last Name:</label>\r\n      <input [(ngModel)]=\"lastName\" type=\"text\" class=\"form-control\" id=\"lname\">\r\n    </div>\r\n    \r\n    <button type=\"submit\" class=\"btn btn default\" (click)=\"completeRegistration()\">Submit</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/registration/registration-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_service__ = __webpack_require__("../../../../../src/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationFormComponent = (function () {
    function RegistrationFormComponent(http, router, userService) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.completeRegistration = function () {
            var _this = this;
            this.http.post('User/complete-registration', {
                FirstName: this.firstName,
                LastName: this.lastName
            })
                .subscribe(function (result) {
                var data = result.json();
                _this.userService.setUser(data.UserName, data.UserId);
                _this.router.navigate(['']);
            }, function (error) { return console.log(error); }, function () { return console.log('done'); });
        };
        this.userService.user.subscribe(function (val) {
            if (val && val.userId > 0) {
                _this.router.navigate(['']);
            }
            else {
                _this.router.navigate(['/auth']);
            }
        });
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
    };
    return RegistrationFormComponent;
}());
RegistrationFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registration-form',
        template: __webpack_require__("../../../../../src/registration/registration-form.component.html"),
        styles: [__webpack_require__("../../../../../src/registration/registration-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */]) === "function" && _c || Object])
], RegistrationFormComponent);

var _a, _b, _c;
//# sourceMappingURL=registration-form.component.js.map

/***/ }),

/***/ "../../../../../src/registration/registration.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_form_component__ = __webpack_require__("../../../../../src/registration/registration-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registration_routing__ = __webpack_require__("../../../../../src/registration/registration.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RegistrationModule = (function () {
    function RegistrationModule() {
    }
    return RegistrationModule;
}());
RegistrationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__registration_routing__["a" /* RegistrationRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__registration_form_component__["a" /* RegistrationFormComponent */]
        ]
    })
], RegistrationModule);

//# sourceMappingURL=registration.module.js.map

/***/ }),

/***/ "../../../../../src/registration/registration.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationRoutingModule; });
/* unused harmony export routingComponents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_form_component__ = __webpack_require__("../../../../../src/registration/registration-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'complete-registration', component: __WEBPACK_IMPORTED_MODULE_2__registration_form_component__["a" /* RegistrationFormComponent */] }
];
var RegistrationRoutingModule = (function () {
    function RegistrationRoutingModule() {
    }
    return RegistrationRoutingModule;
}());
RegistrationRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], RegistrationRoutingModule);

var routingComponents = [__WEBPACK_IMPORTED_MODULE_2__registration_form_component__["a" /* RegistrationFormComponent */]];
//# sourceMappingURL=registration.routing.js.map

/***/ }),

/***/ "../../../../../src/settings/project-table/project-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.settings-table-container .project-detail-container,\r\n.settings-table-container .project-members-container,\r\n.settings-table-container .project-list-container {\r\n    padding: 10px;\r\n    border: solid 1px #CCC;\r\n    height: 300px;\r\n    overflow-y:auto;\r\n    max-height: 300px;\r\n}\r\n\r\n.settings-table-container .project-detail-container {\r\n    border-left: none;\r\n    border-right: none;\r\n}\r\n\r\n.project-list-container .clickable.active {\r\n    background-color: #CCC;\r\n}\r\n\r\n.project-list-container .clickable {\r\n    background-color: none;\r\n    color:inherit;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/settings/project-table/project-table.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn default\" layout=\"row\" layout-align=\"space-between\" data-toggle=\"modal\" data-target=\"#modal-addProject\">\r\n    <i class=\"material-icons\" title=\"Add new project\">add_box</i>\r\n    Add project\r\n</button>\r\n<div layout=\"row\" class=\"settings-table-container\">\r\n    <div flex class=\"project-list-container\">\r\n        <input type=\"text\" placeholder=\"Search project\" class=\"form-control\" [(ngModel)]=\"filterString\" />\r\n\r\n        <div class=\"clickable\" *ngFor=\"let project of projects | fullTextSearch:filterString:'Name'\" layout-padding layout=\"row\"\r\n            layout-align=\"space-between center\" [ngClass]=\"{'active': selectedProject ? project.Id == selectedProject.Id : false }\">\r\n            <div (click)=\"selectProject(project)\" flex>{{project.Name}}</div>\r\n            <i class=\"material-icons muteTxt\" (click)=\"planToRemoveProject(project)\">delete</i>\r\n        </div>\r\n\r\n    </div>\r\n    <div flex class=\"project-detail-container\">\r\n        <div layout=\"column\" *ngIf=\"selectedProject\">\r\n            <div layout=\"row\" layout-align=\"space-between center\">\r\n                <label>Project details </label>\r\n                <i class=\"material-icons clickable\" (click)=\"editProjectDetails()\">mode_edit</i>\r\n            </div>\r\n\r\n            <div layout=\"row\">\r\n                Created by: {{selectedProject.CreatedBy}}\r\n            </div>\r\n            <div layout=\"row\">\r\n                Created Date: {{selectedProject.DateCreated}}\r\n            </div>\r\n            <div layout=\"row\">\r\n                Modified Date: {{selectedProject.DateModified}}\r\n            </div>\r\n            <div layout=\"row\">\r\n                Description: {{selectedProject.Description}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div flex class=\"project-members-container\">\r\n        <div layout=\"row\" layout-align=\"space-between center\" *ngIf=\"projectMembers\">\r\n            <label>Project members</label>\r\n            <i class=\"material-icons clickable\" (click)=\"openModalToModifyMembers()\">mode_edit</i>\r\n        </div>\r\n\r\n        <div *ngFor=\"let member of projectMembers; trackBy: index;\">\r\n            {{member.Name}}\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- template for modal of adding new project -->\r\n<div id=\"modal-editProject-details\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\" *ngIf=\"toEditProjectDetails\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Edit project</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"p-name\">Project Name:</label>\r\n                    <input [(ngModel)]=\"toEditProjectDetails.Name\" type=\"text\" class=\"form-control\" id=\"p-name\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"p-desc\">Project description:</label>\r\n                    <textarea [(ngModel)]=\"toEditProjectDetails.Description\" class=\"form-control\" rows=\"5\" id=\"p-desc\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateProjectDetails()\">Save</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div id=\"modify-members-modal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Edit members</h4>\r\n            </div>\r\n            <div class=\"modal-body\" *ngIf=\"users\">\r\n\r\n                <div class=\"added-members\">\r\n                    <div *ngFor=\"let member of newProjectMembers; trackBy: index;\">\r\n                        <div layout=\"row\" layout-align=\"start center\">\r\n                            <i class=\"material-icons clickable\" style=\"margin-right: 15px;\" (click)=\"removeFromMembers(member)\">block</i>\r\n                            <span>{{member.Name}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"selecting-area\" layout=\"row\" layout-align=\"space-between center\">\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn btn default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n              Select members to add\r\n              <span class=\"caret\"></span>\r\n            </button>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <li *ngFor=\"let user of users; trackBy: index;\" (click)=\"stateToAddMember(user)\" class=\"clickable\">\r\n                                <a>\r\n                  {{user.FirstName}}&nbsp;{{user.LastName}}\r\n                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n\r\n                    <div layout=\"row\" layout-align=\"center center\" *ngIf=\"toAddUser\">\r\n                        <span>{{toAddUser.FirstName}}&nbsp;{{toAddUser.LastName}}</span>\r\n                        <button style=\"margin-left: 20px;\" class=\"btn default\" (click)=\"addAsProjectMember()\">Add</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveNewSetOfMembers()\">\r\n          Save\r\n        </button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\r\n          Close\r\n        </button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div id=\"modal-addProject\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Edit project</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"p-name\">Project Name:</label>\r\n                    <input [(ngModel)]=\"new_projectName\" type=\"text\" class=\"form-control\" id=\"p-name\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"p-desc\">Project description:</label>\r\n                    <textarea [(ngModel)]=\"new_projectDescription\" class=\"form-control\" rows=\"5\" id=\"p-desc\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveNewProject()\">Save</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"modal-removeProject\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\" *ngIf=\"toRemoveProject\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Remove project</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Are you sure to remove this project ({{toRemoveProject.Name}})?\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"removeProject()\">Sure</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/settings/project-table/project-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_projectService_project_service__ = __webpack_require__("../../../../../src/shared/projectService/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_handyDandy__ = __webpack_require__("../../../../../src/shared/handyDandy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_usersService_users_service__ = __webpack_require__("../../../../../src/shared/usersService/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectTableComponent = (function () {
    function ProjectTableComponent(projectService, usersService, handyDandyTools) {
        this.projectService = projectService;
        this.usersService = usersService;
        this.handyDandyTools = handyDandyTools;
        this.newProjectMembers = new Array();
        // user invoke events
        this.selectProject = function (project) {
            this.selectedProject = project;
            this.getMembers();
        };
        this.getProjectsData = function () {
            var _this = this;
            this.projectService
                .getProjects()
                .subscribe(function (data) {
                _this.processProjectList(data);
            }, function (error) {
                console.log('error');
            }, function () {
                console.log('done');
            });
        };
        this.getMembers = function () {
            var _this = this;
            var projectId = this.selectedProject.Id;
            this.projectService.getProjectMembers(projectId)
                .subscribe(function (data) {
                _this.projectMembers = data;
            }, function (error) {
                console.log('error');
            }, function () {
                console.log('done');
            });
        };
        this.stateToAddMember = function (user) {
            this.toAddUser = user;
        };
        this.addAsProjectMember = function () {
            var actionAllowed = true;
            var memberName = this.toAddUser.FirstName + ' ' + this.toAddUser.LastName;
            var newMember = {
                Name: memberName,
                Id: this.toAddUser.UserId
            };
            for (var i = 0; i < this.newProjectMembers.length; i++) {
                if (newMember.Id == this.newProjectMembers[i].Id) {
                    actionAllowed = false;
                }
            }
            if (actionAllowed)
                this.newProjectMembers.push(newMember);
            this.toAddUser = undefined;
        };
        this.openModalToModifyMembers = function () {
            if (!this.selectedProject)
                return;
            this.newProjectMembers = undefined;
            $('#modify-members-modal').modal('show');
            this.getAllUsers();
            this.newProjectMembers = this.handyDandyTools.copyObj(this.projectMembers);
        };
        this.saveNewSetOfMembers = function () {
            var _this = this;
            var obj = new Array();
            var members = this.newProjectMembers;
            for (var i = 0; i < members.length; i++) {
                obj.push({
                    UserId: members[i].Id
                });
            }
            this.projectService
                .updateProjectMembers(this.selectedProject.Id, obj)
                .subscribe(function (data) {
                _this.projectMembers = data;
                _this.getProjectsData();
            }, function (error) {
                _this.reinitializeUpdatingNewSetofMembers();
            }, function () {
                _this.reinitializeUpdatingNewSetofMembers();
            });
        };
        this.getAllUsers = function () {
            var _this = this;
            this.usersService
                .getUsers()
                .subscribe(function (data) {
                _this.users = data;
                console.log(data);
            }, function (error) {
                console.log('error');
            }, function () {
                console.log('done');
            });
        };
        this.removeFromMembers = function (member) {
            for (var i = 0; i < this.newProjectMembers.length; i++) {
                var _member = this.newProjectMembers[i];
                if (member.Id == _member.Id) {
                    this.newProjectMembers.splice(i, 1);
                    return;
                }
            }
        };
        this.saveNewProject = function () {
            var _this = this;
            this.projectService.createProject({
                Name: this.new_projectName,
                Description: this.new_projectDescription
            })
                .subscribe(function (data) {
                _this.getProjectsData();
            }, function (error) {
                _this.reInitializeAddNewProjectModels();
            }, function () {
                _this.reInitializeAddNewProjectModels();
            });
        };
        this.deleteProjectConfirmModal = function () {
        };
        this.editProjectDetails = function () {
            this.toEditProjectDetails = JSON.parse(JSON.stringify(this.selectedProject));
            $('#modal-editProject-details').modal('show');
        };
        // poping modal to verify if user realy wanted ro remove project
        this.planToRemoveProject = function (project) {
            $("#modal-removeProject").modal('show');
            this.toRemoveProject = project;
        };
        // the confirmed action to remove the project
        this.removeProject = function () {
            var _this = this;
            this.projectService
                .removeProject(this.toRemoveProject.Id)
                .subscribe(function (data) {
                _this.getProjectsData();
                _this.reInitializeSelectedProject();
            }, function (error) {
                $('#modal-removeProject').modal('hide');
            }, function () {
                $('#modal-removeProject').modal('hide');
            });
        };
        this.updateProjectDetails = function () {
            var _this = this;
            var obj = {
                Name: this.toEditProjectDetails.Name,
                Description: this.toEditProjectDetails.Description
            };
            this.projectService
                .updateProject(obj, this.selectedProject.Id)
                .subscribe(function (data) {
                _this.getProjectsData();
                _this.selectedProject.Description = _this.toEditProjectDetails.Description;
                _this.selectedProject.Name = _this.toEditProjectDetails.Name;
            }, function (error) {
                console.log('error');
            }, function () {
                $('#modal-editProject-details').modal('hide');
            });
        };
    }
    ProjectTableComponent.prototype.ngOnInit = function () {
        this.getProjectsData();
    };
    // HELPER FUNCTION/METHODS
    ProjectTableComponent.prototype.processProjectList = function (data) {
        this.projects = [];
        for (var i = 0; i < data.length; i++) {
            var project = data[i];
            project['index'] = (i + 1);
            project.DateCreated = this.handyDandyTools.utcToLocalTime(project.DateCreated);
            project.DateModified = this.handyDandyTools.utcToLocalTime(project.DateModified);
            this.projects.push(project);
        }
    };
    ProjectTableComponent.prototype.reinitializeUpdatingNewSetofMembers = function () {
        $('#modify-members-modal').modal('hide');
        this.projectMembers = this.handyDandyTools.copyObj(this.newProjectMembers);
        this.newProjectMembers = undefined;
    };
    ProjectTableComponent.prototype.reInitializeAddNewProjectModels = function () {
        $('#modal-addProject').modal('hide');
        this.new_projectName = undefined;
        this.new_projectDescription = undefined;
    };
    ProjectTableComponent.prototype.reInitializeSelectedProject = function () {
        this.selectedProject = undefined;
        this.toRemoveProject = undefined;
        this.projectMembers = undefined;
    };
    return ProjectTableComponent;
}());
ProjectTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-settings-table',
        template: __webpack_require__("../../../../../src/settings/project-table/project-table.component.html"),
        styles: [__webpack_require__("../../../../../src/settings/project-table/project-table.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_projectService_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_projectService_project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_usersService_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_usersService_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_handyDandy__["a" /* HandyDandyTools */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_handyDandy__["a" /* HandyDandyTools */]) === "function" && _c || Object])
], ProjectTableComponent);

var _a, _b, _c;
//# sourceMappingURL=project-table.component.js.map

/***/ }),

/***/ "../../../../../src/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#settings-page-wrapper .users-table,\r\n#settings-page-wrapper .projects-table {\r\n    margin-bottom: 50px;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"settings-page-wrapper\"\r\n  layout=\"column\">\r\n\r\n  <!--project details-->\r\n  <app-project-settings-table class=\"projects-table\"></app-project-settings-table>\r\n  \r\n\r\n  <!--users table-->\r\n  <app-user-settings-table class=\"users-table\"></app-user-settings-table>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_projectService_project_service__ = __webpack_require__("../../../../../src/shared/projectService/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_service__ = __webpack_require__("../../../../../src/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = (function () {
    function SettingsComponent(projectService, userService, http) {
        this.projectService = projectService;
        this.userService = userService;
        this.http = http;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.checkUserUpdates();
    };
    SettingsComponent.prototype.checkUserUpdates = function () {
        var _this = this;
        this.http.get('account')
            .subscribe(function (result) {
            var data = result.json();
            _this.userService.setUserRole(data.Role);
        }, function (err) { return console.log(err); }, function () { console.log('done'); });
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_projectService_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_projectService_project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _c || Object])
], SettingsComponent);

var _a, _b, _c;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_component__ = __webpack_require__("../../../../../src/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_table_project_table_component__ = __webpack_require__("../../../../../src/settings/project-table/project-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_table_users_table_component__ = __webpack_require__("../../../../../src/settings/users-table/users-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_routing__ = __webpack_require__("../../../../../src/settings/settings.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_pipes_ngFor_fulltxt_filter_pipe__ = __webpack_require__("../../../../../src/shared/pipes/ngFor-fulltxt-filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SettingsModule = (function () {
    function SettingsModule() {
    }
    return SettingsModule;
}());
SettingsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__settings_routing__["a" /* SettingsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_3__project_table_project_table_component__["a" /* ProjectTableComponent */],
            __WEBPACK_IMPORTED_MODULE_4__users_table_users_table_component__["a" /* UsersTableComponent */],
            __WEBPACK_IMPORTED_MODULE_7__shared_pipes_ngFor_fulltxt_filter_pipe__["a" /* FullTextSearchPipe */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__settings_component__["a" /* SettingsComponent */]]
    })
], SettingsModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ "../../../../../src/settings/settings.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsRoutingModule; });
/* unused harmony export routingComponents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_component__ = __webpack_require__("../../../../../src/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_guard_service__ = __webpack_require__("../../../../../src/shared/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_2__settings_component__["a" /* SettingsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_auth_guard_service__["a" /* AuthGuard */]]
    }
];
var SettingsRoutingModule = (function () {
    function SettingsRoutingModule() {
    }
    return SettingsRoutingModule;
}());
SettingsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], SettingsRoutingModule);

var routingComponents = [__WEBPACK_IMPORTED_MODULE_2__settings_component__["a" /* SettingsComponent */]];
//# sourceMappingURL=settings.routing.js.map

/***/ }),

/***/ "../../../../../src/settings/users-table/users-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-settings-table-container {\r\n    \r\n}\r\n\r\n.user-settings-table-container .users-data-table {\r\n    border: 1px solid #CCC;\r\n    padding: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/settings/users-table/users-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-settings-table-container\">\r\n    <div layout=\"row\">\r\n        <button class=\"btn default\" layout=\"row\" layout-align=\"center center\" data-toggle=\"modal\" data-target=\"#modal-inviteUser\">\r\n            Add member\r\n            <i class=\"material-icons\">add_box</i>\r\n        </button>\r\n    </div>\r\n    <div class=\"users-data-table\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <th>First Name</th>\r\n                <th>Last Name</th>\r\n                <th>Email</th>\r\n                <th>Role</th>\r\n                <th>Joined date</th>\r\n                <th>Email Confirmed</th>\r\n                <th>&nbsp;</th>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let user of users; trackBy: index;\">\r\n                    <td>{{user.FirstName}}</td>\r\n                    <td>{{user.LastName}}</td>\r\n                    <td>{{user.Email}}</td>\r\n                    <td>{{user.Role}}</td>\r\n                    <td>{{user.JoinedDate}}</td>\r\n                    <td>{{(user.EmailConfirmed) ? 'Yes': 'No'}}</td>\r\n                    <td class=\"clickable muteTxt\" (click)=\"planToRemoveUser(user)\">\r\n                        <i class=\"material-icons\">delete</i>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- template for modal for deleting issue -->\r\n<div id=\"modal-inviteUser\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Invite user</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"inviteEmail\">Person to invite:</label>\r\n                    <input [(ngModel)]=\"inviteEmail\" type=\"text\" class=\"form-control\" id=\"inviteEmail\" placeholder=\"Enter email address\">\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"inviteUsers()\">Save</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"modal-removeUser\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\" *ngIf=\"toRemoveUser\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Remove user</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Are you sure to remove ({{toRemoveUser.FirstName}}&nbsp;{{toRemoveUser.LastName}})?\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"removeUser()\">Sure</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/settings/users-table/users-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_usersService_users_service__ = __webpack_require__("../../../../../src/shared/usersService/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_handyDandy__ = __webpack_require__("../../../../../src/shared/handyDandy.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersTableComponent = (function () {
    function UsersTableComponent(userService, handyDandyTools) {
        this.userService = userService;
        this.handyDandyTools = handyDandyTools;
        this.getUsersData = function () {
            var _this = this;
            this.userService.getUsers()
                .subscribe(function (data) {
                _this.processProjectList(data);
            }, function (err) {
                console.log(err);
            }, function () {
                console.log('done');
            });
        };
        this.inviteUsers = function () {
            var _this = this;
            this.userService.InviteUser(this.inviteEmail)
                .subscribe(function (data) {
                ;
                _this.getUsersData();
                _this.inviteEmail = undefined;
            }, function (err) {
                _this.inviteEmail = undefined;
            }, function () {
                $('#modal-inviteUser').modal('hide');
                _this.inviteEmail = undefined;
            });
        };
        this.planToRemoveUser = function (user) {
            this.toRemoveUser = user;
            $("#modal-removeUser").modal('show');
        };
        this.removeUser = function () {
            var _this = this;
            this.userService.removeUser(this.toRemoveUser.UserId)
                .subscribe(function (data) {
                ;
                _this.getUsersData();
                _this.toRemoveUser = undefined;
            }, function (err) {
                $("#modal-removeUser").modal('hide');
                _this.toRemoveUser = undefined;
            }, function () {
                $("#modal-removeUser").modal('hide');
                _this.toRemoveUser = undefined;
            });
        };
    }
    UsersTableComponent.prototype.ngOnInit = function () {
        this.getUsersData();
    };
    // HELPER FUNCTION/METHODS
    UsersTableComponent.prototype.processProjectList = function (data) {
        this.users = [];
        for (var i = 0; i < data.length; i++) {
            var user = data[i];
            user['index'] = (i + 1);
            user.JoinedDate = this.handyDandyTools.utcToLocalTime(user.JoinedDate);
            user.JoinedDate = this.handyDandyTools.utcToLocalTime(user.JoinedDate);
            this.users.push(user);
        }
    };
    return UsersTableComponent;
}());
UsersTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-settings-table',
        template: __webpack_require__("../../../../../src/settings/users-table/users-table.component.html"),
        styles: [__webpack_require__("../../../../../src/settings/users-table/users-table.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_usersService_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_usersService_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_handyDandy__["a" /* HandyDandyTools */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_handyDandy__["a" /* HandyDandyTools */]) === "function" && _b || Object])
], UsersTableComponent);

var _a, _b;
//# sourceMappingURL=users-table.component.js.map

/***/ }),

/***/ "../../../../../src/shared/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_service__ = __webpack_require__("../../../../../src/shared/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.unauthorizeRoutes = new Array("auth", "forgot-password", "set-new-password");
        this.checkUserAccess = function (userRole, url) {
            //  Admin
            //  User
            //  SuperAdmin
            if (userRole == "User" && url == "/settings") {
                alert("You don't have enough access to this page.");
                return false;
            }
            return true;
        };
        this.userService.token.subscribe(function (val) {
            _this.token = val;
        });
        this.userService.user.subscribe(function (val) {
            _this.user = val;
        });
        this.userService.userRole.subscribe(function (val) { return setTimeout(function () {
            _this.userRole = val;
            if (_this.unauthorizeRoutes.indexOf(_this.currentState.url) == -1) {
                if (!_this.checkUserAccess(_this.userRole, _this.currentState.url)) {
                    _this.router.navigate(['']);
                }
            }
        }, 0); });
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        this.currentState = state;
        // check if user is authenticated to access
        if (this.token == undefined
            && this.unauthorizeRoutes.indexOf(state.url) != -1) {
            console.log('3');
            this.router.navigate(['/auth']);
            return false;
        }
        else if (!this.user || this.user.userId < 1) {
            this.router.navigate(['complete-registration']);
            return false;
        }
        return this.checkUserAccess(this.userRole, state.url);
        ;
    };
    AuthGuard.prototype.canActivateChild = function () {
        console.log('checking child route access');
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/shared/handyDandy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandyDandyTools; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HandyDandyTools = (function () {
    function HandyDandyTools() {
    }
    // helper methods
    HandyDandyTools.prototype.utcToLocalTime = function (timeString) {
        if (!timeString)
            return;
        var utcDate = new Date(timeString.replace('T', ' ')), offset = new Date().getTimezoneOffset(), timeZoneDiff = offset + utcDate.getTimezoneOffset();
        var localTime = new Date(utcDate.getTime() + (timeZoneDiff * 60 * 1000));
        return moment(localTime).format('MM/DD/YYYY h:mm a');
    };
    HandyDandyTools.prototype.copyObj = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    return HandyDandyTools;
}());
HandyDandyTools = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], HandyDandyTools);

//# sourceMappingURL=handyDandy.js.map

/***/ }),

/***/ "../../../../../src/shared/issue-prio-status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueStatusAndPriority; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IssueStatusAndPriority = (function () {
    /**
     *
     */
    function IssueStatusAndPriority(http) {
        this.http = http;
    }
    IssueStatusAndPriority.prototype.getStatuses = function () {
        return this.http.get("Status")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json.error || 'Server error'); });
    };
    IssueStatusAndPriority.prototype.getPriorityTypes = function () {
        return this.http.get("PriorityType")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json.error || 'Server error'); });
    };
    return IssueStatusAndPriority;
}());
IssueStatusAndPriority = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _a || Object])
], IssueStatusAndPriority);

var _a;
//# sourceMappingURL=issue-prio-status.service.js.map

/***/ }),

/***/ "../../../../../src/shared/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoaderService = (function () {
    function LoaderService() {
        this.status = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    LoaderService.prototype.display = function (value) {
        this.status.next(value);
    };
    return LoaderService;
}());
LoaderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], LoaderService);

//# sourceMappingURL=loader.service.js.map

/***/ }),

/***/ "../../../../../src/shared/pipes/ngFor-fulltxt-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullTextSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullTextSearchPipe = (function () {
    function FullTextSearchPipe() {
    }
    FullTextSearchPipe.prototype.transform = function (value, query, field) {
        if (!value)
            return;
        var result = [];
        query = (query) ? query.toLowerCase() : query;
        for (var i = 0; i < value.length; i++) {
            var containerString = (value[i][field]).toLowerCase();
            if (containerString.indexOf(query) >= 0) {
                result.push(value[i]);
            }
        }
        return (query) ? result : value;
    };
    return FullTextSearchPipe;
}());
FullTextSearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'fullTextSearch',
        pure: false
    }),
    __metadata("design:paramtypes", [])
], FullTextSearchPipe);

//# sourceMappingURL=ngFor-fulltxt-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/shared/pipes/object-keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return Object.keys(value); //.map(key => value[key]);
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys', pure: false })
], KeysPipe);

//# sourceMappingURL=object-keys.pipe.js.map

/***/ }),

/***/ "../../../../../src/shared/projectService/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = (function () {
    /**
     *
     */
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.getProjects = function () {
        var _this = this;
        return this.http.get("Project")
            .map(function (res) { return _this.extractData(res); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json.error || 'Server error'); });
    };
    ProjectService.prototype.getProjectMembers = function (projectId) {
        var _this = this;
        return this.http.get("Project/" + projectId + "/members")
            .map(function (res) { return _this.extractData(res); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json.error || 'Server error'); });
    };
    ProjectService.prototype.createProject = function (obj) {
        var _this = this;
        return this.http.post("Project", obj)
            .map(function (res) { return _this.extractData(res); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json.error || 'Server error'); });
    };
    ProjectService.prototype.updateProjectMembers = function (projectId, members) {
        var _this = this;
        var obj = { Members: members };
        return this.http.post("Project/" + projectId + "/members", obj)
            .map(function (res) { return _this.extractData(res); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json.error || 'Server error'); });
    };
    ProjectService.prototype.updateProject = function (obj, projectId) {
        var _this = this;
        return this.http.put("Project/" + projectId, obj)
            .map(function (res) { return _this.extractData(res); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json.error || 'Server error'); });
    };
    ProjectService.prototype.removeProject = function (projectId) {
        var _this = this;
        return this.http.delete("Project/" + projectId)
            .map(function (res) { return _this.extractData(res); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json.error || 'Server error'); });
    };
    // helper function / methods
    ProjectService.prototype.extractData = function (res) {
        return res.text() ? res.json() : {};
        ;
    };
    return ProjectService;
}());
ProjectService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ProjectService);

var _a;
//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ "../../../../../src/shared/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Imports



var UserService = (function () {
    function UserService(router) {
        this.router = router;
        this.token = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](undefined);
        this.user = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](undefined);
        this.userRole = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](undefined);
        // if you want to change the name of localStorage, check the interceptor too
        this.l_storageName = 'currentUser';
        this.initializeToken();
    }
    UserService.prototype.getUser = function () {
        return this._username;
    };
    UserService.prototype.getUserId = function () {
        return this._userId;
    };
    UserService.prototype.setToken = function (token) {
        var fullToken = this._tokenType + ' ' + token;
        this.token.next(fullToken);
    };
    UserService.prototype.setUserRole = function (role) {
        this.userRole.next(role);
    };
    UserService.prototype.saveToken = function (data) {
        var jsonData = JSON.stringify(data);
        localStorage.setItem(this.l_storageName, jsonData);
        this.initializeToken();
    };
    UserService.prototype.removeToken = function () {
        localStorage.removeItem(this.l_storageName);
        this.resetVariables();
        this.router.navigate(['']);
        location.reload();
    };
    UserService.prototype.setUser = function (email, id) {
        this.user.next({
            username: email,
            userId: id
        });
    };
    // Helper functions/methods
    UserService.prototype.processLoginReponse = function (jsonData) {
        this._tokenType = jsonData.token_type;
        this._username = jsonData.userName;
        this._userId = jsonData.userId;
        this.user.next({
            username: jsonData.userName,
            userId: jsonData.userId
        });
        this.setToken(jsonData.access_token);
    };
    UserService.prototype.initializeToken = function () {
        var jsonData = JSON.parse(localStorage.getItem(this.l_storageName));
        if (jsonData)
            this.processLoginReponse(jsonData);
    };
    UserService.prototype.resetVariables = function () {
        this.token.next(undefined);
        this._username = undefined;
        this._tokenType = undefined;
        this._userId = undefined;
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/shared/usersService/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = (function () {
    /**
     *
     */
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get("User")
            .map(function (res) { return _this.extractData(res); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json.error || 'Server error'); });
    };
    UsersService.prototype.InviteUser = function (emailAddress) {
        var _this = this;
        var redirectUrl = window.location.protocol + '//' + window.location.host;
        var inviteUserUrl = "User/Invite?redirectUrl=" + redirectUrl;
        return this.http.post(inviteUserUrl, {
            EmailAddress: emailAddress
        })
            .map(function (res) { return _this.extractData(res); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json.error || 'Server error'); });
    };
    UsersService.prototype.removeUser = function (userId) {
        var _this = this;
        return this.http.delete("User/" + userId, {})
            .map(function (res) { return _this.extractData(res); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json.error || 'Server error'); });
    };
    UsersService.prototype.extractData = function (res) {
        return res.text() ? res.json() : {};
        ;
    };
    return UsersService;
}());
UsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#user-settings-wrapper .content {\r\n    box-shadow: 0px 1px 3px #989595;\r\n    padding: 20px;\r\n    background-color: white;\r\n    border: none;\r\n}\r\n\r\n#user-settings-wrapper .title {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"user-settings-wrapper\" layout=\"row\" layout-align=\"center start\">\r\n    <div class=\"content\" flex=\"33\">\r\n        <section>\r\n            <h3 class=\"title\">Update profile</h3>\r\n            <div class=\"form-group\">\r\n                <label for=\"fname\">First Name:</label>\r\n                <input *ngIf=\"currentUser\" type=\"text\" [(ngModel)]=\"currentUser.FirstName\" class=\"form-control\" id=\"fname\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"lname\">Last Name:</label>\r\n                <input *ngIf=\"currentUser\"type=\"text\" [(ngModel)]=\"currentUser.LastName\" class=\"form-control\" id=\"lname\">\r\n            </div>\r\n            <div layout=\"row\" layout-align=\"end\">\r\n                <button class=\"btn btn-primary\" (click)=\"updateUserProfile()\">\r\n                    Save\r\n                </button>\r\n            </div>\r\n        </section>\r\n\r\n        <section>\r\n            <h3 class=\"title\">Update password</h3>\r\n            <div class=\"form-group\">\r\n                <label for=\"usr\">Old Password:</label>\r\n                <input type=\"password\" [(ngModel)]=\"oldPass\" class=\"form-control\" id=\"usr\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"pwd\">New Password:</label>\r\n                <input type=\"password\" [(ngModel)]=\"newPass\" class=\"form-control\" id=\"pwd\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"cpwd\">Confirm Password:</label>\r\n                <input type=\"password\" [(ngModel)]=\"newPassConfirm\" class=\"form-control\" id=\"cpwd\">\r\n            </div>\r\n            <div layout=\"row\" layout-align=\"end\">\r\n                    <button class=\"btn btn-primary\" (click)=\"changePassword()\">\r\n                        Save\r\n                    </button>\r\n                </div>\r\n        </section>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_service__ = __webpack_require__("../../../../../src/shared/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = (function () {
    function UserProfileComponent(http, userService) {
        this.http = http;
        this.userService = userService;
        this.getUserInfo = function () {
            var _this = this;
            this.http.get("Account")
                .subscribe(function (result) {
                _this.currentUser = result.json();
            }, function (err) {
                // alert("failed");
            }, function () {
                _this.oldPass = "";
                _this.newPass = "";
                _this.newPassConfirm = "";
            });
        };
        this.updateUserProfile = function () {
            this.http.patch("User/" + this.currentUser.UserId, {
                FirstName: this.currentUser.FirstName,
                LastName: this.currentUser.LastName
            })
                .subscribe(function (result) {
                alert("New profile saved.");
            }, function (err) {
                // alert("failed");
            }, function () { });
        };
        this.changePassword = function () {
            var _this = this;
            this.http.post("Account/ChangePassword", {
                OldPassword: this.oldPass,
                NewPassword: this.newPass,
                ConfirmPassword: this.newPassConfirm
            })
                .subscribe(function (result) {
                alert("New password saved.");
            }, function (err) {
                // alert("failed");
            }, function () {
                _this.oldPass = "";
                _this.newPass = "";
                _this.newPassConfirm = "";
            });
        };
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.getUserInfo();
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/user-profile/user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */]) === "function" && _b || Object])
], UserProfileComponent);

var _a, _b;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/user-profile/user-profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile_routing__ = __webpack_require__("../../../../../src/user-profile/user-profile.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_profile_component__ = __webpack_require__("../../../../../src/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserProfileModule = (function () {
    function UserProfileModule() {
    }
    return UserProfileModule;
}());
UserProfileModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__user_profile_routing__["a" /* UserProfileRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__user_profile_component__["a" /* UserProfileComponent */]
        ]
    })
], UserProfileModule);

//# sourceMappingURL=user-profile.module.js.map

/***/ }),

/***/ "../../../../../src/user-profile/user-profile.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileRoutingModule; });
/* unused harmony export routingComponents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_guard_service__ = __webpack_require__("../../../../../src/shared/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_profile_component__ = __webpack_require__("../../../../../src/user-profile/user-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'user-profile',
        component: __WEBPACK_IMPORTED_MODULE_3__user_profile_component__["a" /* UserProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_auth_guard_service__["a" /* AuthGuard */]]
    }
];
var UserProfileRoutingModule = (function () {
    function UserProfileRoutingModule() {
    }
    return UserProfileRoutingModule;
}());
UserProfileRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], UserProfileRoutingModule);

var routingComponents = [__WEBPACK_IMPORTED_MODULE_3__user_profile_component__["a" /* UserProfileComponent */]];
//# sourceMappingURL=user-profile.routing.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map