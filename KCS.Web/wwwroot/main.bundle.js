webpackJsonp(["main"],{

/***/ "../../../../../web-client/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../web-client/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../web-client/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section{\r\n    height: 500px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../web-client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n    <span><a pageScroll href=\"#about\">About</a></span>\r\n    <span><a pageScroll href=\"#portfolio\">Portfolio</a></span>\r\n    <span><a pageScroll href=\"#mtf\">Mission Trip Furniture</a></span>\r\n    <span><a pageScroll href=\"#contact\">Contact</a></span>\r\n</nav>\r\n<div class=\"container\">\r\n    <section>\r\n        <app-home></app-home>\r\n    </section>\r\n    <section id=\"about\">\r\n        <h2>About will go here.</h2>\r\n    </section>\r\n    <section id=\"portfolio\">\r\n        <h2>Portfolio will go here.</h2>\r\n    </section>\r\n    <section id=\"mtf\">\r\n        <h2>Mission Trip Furniture will go here.</h2>\r\n    </section>\r\n    <section id=\"contact\">\r\n        <app-contact></app-contact>\r\n    </section>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../web-client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../web-client/app/app.component.html"),
            styles: [__webpack_require__("../../../../../web-client/app/app.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../web-client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_page_scroll__ = __webpack_require__("../../../../ngx-page-scroll/ngx-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../web-client/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../web-client/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_kcs_service__ = __webpack_require__("../../../../../web-client/app/services/kcs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__kent_craftsmanship_home_home_component__ = __webpack_require__("../../../../../web-client/app/kent-craftsmanship/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__kent_craftsmanship_contact_contact_component__ = __webpack_require__("../../../../../web-client/app/kent-craftsmanship/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__kent_craftsmanship_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__kent_craftsmanship_contact_contact_component__["a" /* ContactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_page_scroll__["a" /* NgxPageScrollModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_kcs_service__["a" /* KcsService */]
            ],
            entryComponents: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact-form {\r\n    width: 500px;\r\n    margin: 0 auto;\r\n}\r\n\r\n    .contact-form mat-form-field {\r\n        width: 100%;\r\n    }\r\n\r\n    .contact-form .center-form-row {\r\n        text-align: center;\r\n    }\r\n\r\n    .text-error {\r\n        color: #8a0000\r\n    }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Contact</h2>\r\n<form class=\"contact-form\" (ngSubmit)=\"onSubmit(model)\" #contactForm=\"ngForm\">\r\n    <mat-form-field>\r\n        <input id=\"email\"\r\n               matInput\r\n               maxlength=\"256\"\r\n               placeholder=\"Email Address\"\r\n               required\r\n               [(ngModel)]=\"model.email\"\r\n               name=\"email\" />\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input id=\"subject\"\r\n               matInput\r\n               maxlength=\"100\"\r\n               placeholder=\"Subject\"\r\n               required\r\n               [(ngModel)]=\"model.subject\"\r\n               name=\"subject\" />\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <textarea id=\"body\"\r\n                  #message\r\n                  matInput\r\n                  maxlength=\"500\"\r\n                  placeholder=\"Body\"\r\n                  matTextareaAutosize\r\n                  matAutosizeMinRows=\"5\"\r\n                  matAutosizeMaxRows=\"5\"\r\n                  required\r\n                  [(ngModel)]=\"model.body\"\r\n                  name=\"body\"></textarea>\r\n        <mat-hint align=\"end\">{{message.value.length}} / 500</mat-hint>\r\n    </mat-form-field>\r\n    <div class=\"center-form-row\">\r\n        <button type=\"submit\" matButton [disabled]=\"!contactForm.form.valid && !this.submitting\">Submit</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_kcs_service__ = __webpack_require__("../../../../../web-client/app/services/kcs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_inquiry_submission__ = __webpack_require__("../../../../../web-client/app/models/inquiry-submission.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactComponent = /** @class */ (function () {
    function ContactComponent(kcsService, snackBar) {
        this.kcsService = kcsService;
        this.snackBar = snackBar;
        this.submitting = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_4__models_inquiry_submission__["a" /* InquirySubmission */]('', '', '');
    }
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.submitting) {
            this.submitting = true;
            var res = this.kcsService.submitInquiry(this.model);
            res.finally(function () { return _this.submitting = false; })
                .subscribe(function (res) {
                _this.submitting = false;
                _this.snackBar.open('Inquiry submitted successfully!', '', {
                    //duration: 2000,
                    panelClass: ['text-success']
                });
            }, function (err) {
                _this.submitting = false;
                _this.snackBar.open('Inquiry submission encountered an unexpecte error.', '', {
                    //duration: 2000,
                    panelClass: ['text-error']
                });
                console.error(err);
            });
        }
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../web-client/app/kent-craftsmanship/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../web-client/app/kent-craftsmanship/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_kcs_service__["a" /* KcsService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatSnackBar */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\r\n    <h1>Kent Craftsmanship</h1>\r\n    <h2>Hand Crafted Semi-fine Furniture</h2>\r\n</div>"

/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../web-client/app/kent-craftsmanship/home/home.component.html"),
            styles: [__webpack_require__("../../../../../web-client/app/kent-craftsmanship/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../web-client/app/models/inquiry-submission.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InquirySubmission; });
var InquirySubmission = /** @class */ (function () {
    function InquirySubmission(email, subject, body) {
        this.email = email;
        this.subject = subject;
        this.body = body;
    }
    return InquirySubmission;
}());



/***/ }),

/***/ "../../../../../web-client/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../web-client/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    Sorry, that page could not be found.\r\n</p>"

/***/ }),

/***/ "../../../../../web-client/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../web-client/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../web-client/app/page-not-found/page-not-found.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../web-client/app/services/kcs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KcsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KcsService = /** @class */ (function () {
    function KcsService(http) {
        this.http = http;
    }
    KcsService.prototype.submitInquiry = function (inquirySubmission) {
        return this.http.post('/api/inquiry/submit', inquirySubmission, {
            responseType: 'text'
        });
    };
    KcsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], KcsService);
    return KcsService;
}());



/***/ }),

/***/ "../../../../../web-client/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../web-client/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../web-client/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../web-client/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../web-client/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map