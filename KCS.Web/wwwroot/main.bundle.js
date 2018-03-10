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
exports.push([module.i, "body {\n  font-family: 'Montserrat', sans-serif;\n  margin: 0; }\n\n.kcs-container {\n  padding: 0; }\n\nsection {\n  height: 100vh; }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../web-client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"kcs-container\">\r\n    <section id=\"home\">\r\n        <app-home></app-home>\r\n    </section>\r\n    <section id=\"about\">\r\n        <app-about></app-about>\r\n    </section>\r\n    <section id=\"portfolio\">\r\n        <app-portfolio></app-portfolio>\r\n    </section>\r\n    <section id=\"mtf\">\r\n        <app-mtf></app-mtf>\r\n    </section>\r\n    <section id=\"contact\">\r\n        <app-contact></app-contact>\r\n    </section>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../web-client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_page_scroll__ = __webpack_require__("../../../../ngx-page-scroll/ngx-page-scroll.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        __WEBPACK_IMPORTED_MODULE_2_ngx_page_scroll__["b" /* PageScrollConfig */].defaultDuration = 500;
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
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_page_scroll__ = __webpack_require__("../../../../ngx-page-scroll/ngx-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../web-client/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../web-client/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_kcs_service__ = __webpack_require__("../../../../../web-client/app/services/kcs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_current_section_service__ = __webpack_require__("../../../../../web-client/app/services/current-section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__kent_craftsmanship_nav_nav_component__ = __webpack_require__("../../../../../web-client/app/kent-craftsmanship/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__kent_craftsmanship_home_home_component__ = __webpack_require__("../../../../../web-client/app/kent-craftsmanship/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__kent_craftsmanship_about_about_component__ = __webpack_require__("../../../../../web-client/app/kent-craftsmanship/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__kent_craftsmanship_portfolio_portfolio_component__ = __webpack_require__("../../../../../web-client/app/kent-craftsmanship/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__kent_craftsmanship_mtf_mtf_component__ = __webpack_require__("../../../../../web-client/app/kent-craftsmanship/mtf/mtf.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__kent_craftsmanship_contact_contact_component__ = __webpack_require__("../../../../../web-client/app/kent-craftsmanship/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives_recaptcha_directive__ = __webpack_require__("../../../../../web-client/app/directives/recaptcha.directive.ts");
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
                __WEBPACK_IMPORTED_MODULE_11__kent_craftsmanship_nav_nav_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__kent_craftsmanship_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__kent_craftsmanship_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__kent_craftsmanship_portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_15__kent_craftsmanship_mtf_mtf_component__["a" /* MtfComponent */],
                __WEBPACK_IMPORTED_MODULE_16__kent_craftsmanship_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_17__directives_recaptcha_directive__["b" /* ReCaptchaDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
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
                __WEBPACK_IMPORTED_MODULE_9__services_kcs_service__["a" /* KcsService */],
                __WEBPACK_IMPORTED_MODULE_10__services_current_section_service__["a" /* CurrentSectionService */]
            ],
            entryComponents: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../web-client/app/directives/recaptcha.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RECAPTCHA_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReCaptchaDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var RECAPTCHA_URL = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('RECAPTCHA_URL');
var ReCaptchaAsyncValidator = /** @class */ (function () {
    function ReCaptchaAsyncValidator(http, url) {
        this.http = http;
        this.url = url;
    }
    ReCaptchaAsyncValidator.prototype.validateToken = function (token) {
        var _this = this;
        return function (_) {
            return _this.http.get(_this.url, { params: { token: token } }).map(function (res) { return res.json(); }).map(function (res) {
                if (!res.success) {
                    return { tokenInvalid: true };
                }
                return null;
            });
        };
    };
    ReCaptchaAsyncValidator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(RECAPTCHA_URL)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], String])
    ], ReCaptchaAsyncValidator);
    return ReCaptchaAsyncValidator;
}());
var ReCaptchaDirective = /** @class */ (function () {
    function ReCaptchaDirective(element, ngZone, injector, reCaptchaAsyncValidator, cd) {
        this.element = element;
        this.ngZone = ngZone;
        this.injector = injector;
        this.reCaptchaAsyncValidator = reCaptchaAsyncValidator;
        this.cd = cd;
        this.config = {};
        this.captchaResponse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.captchaExpired = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ReCaptchaDirective_1 = ReCaptchaDirective;
    ReCaptchaDirective.prototype.ngOnInit = function () {
        this.registerReCaptchaCallback();
        this.addScript();
    };
    ReCaptchaDirective.prototype.registerReCaptchaCallback = function () {
        var _this = this;
        window.reCaptchaLoad = function () {
            var config = __assign({}, _this.config, { 'sitekey': _this.key, 'callback': _this.onSuccess.bind(_this), 'expired-callback': _this.onExpired.bind(_this) });
            _this.widgetId = _this.render(_this.element.nativeElement, config);
        };
    };
    ReCaptchaDirective.prototype.ngAfterViewInit = function () {
        this.control = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgControl */]).control;
        this.setValidators();
        this.cd.detectChanges();
    };
    /**
     * Useful for multiple captcha
     * @returns {number}
     */
    ReCaptchaDirective.prototype.getId = function () {
        return this.widgetId;
    };
    /**
     * Calling the setValidators doesn't trigger any update or value change event.
     * Therefore, we need to call updateValueAndValidity to trigger the update
     */
    ReCaptchaDirective.prototype.setValidators = function () {
        this.control.setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required);
        this.control.updateValueAndValidity();
    };
    ReCaptchaDirective.prototype.writeValue = function (obj) {
    };
    ReCaptchaDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ReCaptchaDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * onExpired
     */
    ReCaptchaDirective.prototype.onExpired = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.captchaExpired.emit();
            _this.onChange('');
            _this.onTouched('');
        });
    };
    /**
     *
     * @param response
     */
    ReCaptchaDirective.prototype.onSuccess = function (token) {
        var _this = this;
        this.ngZone.run(function () {
            _this.verifyToken(token);
            _this.captchaResponse.next(token);
            _this.onChange(token);
            _this.onTouched(token);
        });
    };
    /**
     *
     * @param token
     */
    ReCaptchaDirective.prototype.verifyToken = function (token) {
        this.control.setAsyncValidators(this.reCaptchaAsyncValidator.validateToken(token));
        this.control.updateValueAndValidity();
    };
    /**
     * Renders the container as a reCAPTCHA widget and returns the ID of the newly created widget.
     * @param element
     * @param config
     * @returns {number}
     */
    ReCaptchaDirective.prototype.render = function (element, config) {
        return grecaptcha.render(element, config);
    };
    /**
     * Resets the reCAPTCHA widget.
     */
    ReCaptchaDirective.prototype.reset = function () {
        if (!this.widgetId)
            return;
        grecaptcha.reset(this.widgetId);
        this.onChange('');
    };
    /**
     * Gets the response for the reCAPTCHA widget.
     * @returns {string}
     */
    ReCaptchaDirective.prototype.getResponse = function () {
        if (!this.widgetId)
            return grecaptcha.getResponse(this.widgetId);
        else
            return '';
    };
    /**
     * Add the script
     */
    ReCaptchaDirective.prototype.addScript = function () {
        var script = document.createElement('script');
        var lang = this.lang ? '&hl=' + this.lang : '';
        script.src = "https://www.google.com/recaptcha/api.js?onload=reCaptchaLoad&render=explicit" + lang;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ReCaptchaDirective.prototype, "key", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ReCaptchaDirective.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ReCaptchaDirective.prototype, "lang", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ReCaptchaDirective.prototype, "captchaResponse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ReCaptchaDirective.prototype, "captchaExpired", void 0);
    ReCaptchaDirective = ReCaptchaDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[kcsRecaptcha]',
            exportAs: 'kcsRecaptcha',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return ReCaptchaDirective_1; }),
                    multi: true
                },
                ReCaptchaAsyncValidator
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */],
            ReCaptchaAsyncValidator, __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], ReCaptchaDirective);
    return ReCaptchaDirective;
    var ReCaptchaDirective_1;
}());



/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".kcs-about-container {\n  padding-top: 40px;\n  background: url(" + escape(__webpack_require__("../../../../../web-client/assets/about-bg.jpg")) + ");\n  background-size: cover;\n  height: 100vh; }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"kcs-about-container\">\r\n    <!--Photo by Jessica Furtney on Unsplash-->\r\n    <h2>About will go here.</h2>\r\n</div>"

/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_current_section_service__ = __webpack_require__("../../../../../web-client/app/services/current-section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_section__ = __webpack_require__("../../../../../web-client/app/models/section.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent(element, currentSectionService) {
        this.element = element;
        this.currentSectionService = currentSectionService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.section = new __WEBPACK_IMPORTED_MODULE_2__models_section__["a" /* Section */]('about', this.element.nativeElement.offsetTop);
        this.currentSectionService.registerSection(this.section);
    };
    AboutComponent.prototype.onResize = function (event) {
        this.section.position = this.element.nativeElement.offsetTop;
        this.currentSectionService.registerSection(this.section);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AboutComponent.prototype, "onResize", null);
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../web-client/app/kent-craftsmanship/about/about.component.html"),
            styles: [__webpack_require__("../../../../../web-client/app/kent-craftsmanship/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__services_current_section_service__["a" /* CurrentSectionService */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".kcs-contact-container {\n  padding-top: 40px;\n  background: url(" + escape(__webpack_require__("../../../../../web-client/assets/contact-bg.jpg")) + ");\n  background-size: cover;\n  height: 100vh; }\n  .kcs-contact-container .contact-form {\n    font-size: 14px;\n    width: 50%;\n    margin: 100px auto 0 auto;\n    padding: 20px;\n    background: rgba(255, 255, 255, 0.7); }\n  .kcs-contact-container .contact-form mat-form-field {\n      width: 100%; }\n  .kcs-contact-container .contact-form .center-form-row {\n      text-align: center; }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"kcs-contact-container\">\r\n    <!--Photo by Simon Stankowski on Unsplash-->\r\n    <div class=\"contact-form\">\r\n        <div>\r\n            <a href=\"mailto:kentcraftsmanship@gmail.com\">kentcraftsmanship@gmail.com</a>\r\n            <a href=\"https://www.instagram.com/kentcraftsmanship/?hl=en\">Kent Craftsmanship on Instagram</a>\r\n        </div>\r\n        <form [formGroup]=\"contactForm\"\r\n              (ngSubmit)=\"submitInquiry(contactForm.value, contactForm.valid)\"\r\n              novalidate>\r\n            <mat-form-field>\r\n                <input type=\"email\"\r\n                       matInput\r\n                       maxlength=\"256\"\r\n                       placeholder=\"Email Address\"\r\n                       formControlName=\"email\" />\r\n                <mat-error *ngIf=\"contactForm.controls['email'].errors?.email && !contactForm.controls['email'].errors?.required\">\r\n                    Please enter a valid email address.\r\n                </mat-error>\r\n                <mat-error *ngIf=\"contactForm.controls['email'].errors?.required\">\r\n                    Email address is required.\r\n                </mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput\r\n                       maxlength=\"100\"\r\n                       placeholder=\"Subject\"\r\n                       formControlName=\"subject\" />\r\n                <mat-error *ngIf=\"contactForm.controls['subject'].errors?.required\">\r\n                    A subject is required.\r\n                </mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <textarea matInput\r\n                          maxlength=\"500\"\r\n                          placeholder=\"Body\"\r\n                          matTextareaAutosize\r\n                          matAutosizeMinRows=\"5\"\r\n                          matAutosizeMaxRows=\"5\"\r\n                          formControlName=\"body\"></textarea>\r\n                <mat-hint align=\"end\">{{contactForm.controls['body'].value.length}} / 500</mat-hint>\r\n                <mat-error *ngIf=\"contactForm.controls['body'].errors?.required\">\r\n                    A body is required.\r\n                </mat-error>\r\n            </mat-form-field>\r\n            <div class=\"center-form-row\">\r\n                <div kcsRecaptcha key=\"6Lcc5UIUAAAAAEqED9lpGrleB--Hb4lemcZBhVjO\" formControlName=\"captcha\"></div>\r\n                <button mat-button\r\n                        type=\"submit\"\r\n                        [disabled]=\"!contactForm.valid\">\r\n                    Submit\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_kcs_service__ = __webpack_require__("../../../../../web-client/app/services/kcs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_current_section_service__ = __webpack_require__("../../../../../web-client/app/services/current-section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_section__ = __webpack_require__("../../../../../web-client/app/models/section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_recaptcha_directive__ = __webpack_require__("../../../../../web-client/app/directives/recaptcha.directive.ts");
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
    function ContactComponent(formBuilder, kcsService, snackBar, element, currentSectionService) {
        this.formBuilder = formBuilder;
        this.kcsService = kcsService;
        this.snackBar = snackBar;
        this.element = element;
        this.currentSectionService = currentSectionService;
        this.submitting = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.contactForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]],
            subject: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]],
            body: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]],
            captcha: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]]
        });
        this.section = new __WEBPACK_IMPORTED_MODULE_6__models_section__["a" /* Section */]('contact', this.element.nativeElement.offsetTop);
        this.currentSectionService.registerSection(this.section);
    };
    ContactComponent.prototype.onResize = function (event) {
        this.section.position = this.element.nativeElement.offsetTop;
        this.currentSectionService.registerSection(this.section);
    };
    ContactComponent.prototype.submitInquiry = function (model) {
        var _this = this;
        if (!this.submitting) {
            this.submitting = true;
            var res = this.kcsService.submitInquiry(model);
            res.finally(function () { return _this.submitting = false; })
                .subscribe(function (res) {
                _this.submitting = false;
                _this.snackBar.open('Inquiry submitted successfully!', '', {
                    duration: 2000,
                    panelClass: ['text-success']
                });
            }, function (err) {
                _this.submitting = false;
                _this.snackBar.open('Inquiry submission encountered an unexpected error.', '', {
                    duration: 2000,
                    panelClass: ['text-error']
                });
                console.error(err);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ContactComponent.prototype, "onResize", null);
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../web-client/app/kent-craftsmanship/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../web-client/app/kent-craftsmanship/contact/contact.component.css")],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_7__directives_recaptcha_directive__["a" /* RECAPTCHA_URL */],
                    useValue: '/api/inquiries/validate-captcha'
                }]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__services_kcs_service__["a" /* KcsService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_5__services_current_section_service__["a" /* CurrentSectionService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home {\n  background: url(" + escape(__webpack_require__("../../../../../web-client/assets/home-bg.jpg")) + ");\n  background-size: cover;\n  height: 100vh; }\n  .home .kcs-title {\n    padding-top: 200px;\n    text-align: center; }\n  .home .kcs-title h1, .home .kcs-title h2 {\n      font-weight: 400; }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\r\n    <!--Photo by Ian Keefe on Unsplash-->\r\n    <div class=\"kcs-title\">\r\n        <img alt=\"logo\" src=\"../../../assets/kent-craftsmanship-logo.png\" width=\"500px;\" />\r\n        <h2>Hand Crafted Semi-fine Furniture</h2>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_current_section_service__ = __webpack_require__("../../../../../web-client/app/services/current-section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_section__ = __webpack_require__("../../../../../web-client/app/models/section.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(element, currentSectionService) {
        this.element = element;
        this.currentSectionService = currentSectionService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.section = new __WEBPACK_IMPORTED_MODULE_2__models_section__["a" /* Section */]('home', this.element.nativeElement.offsetTop);
        this.currentSectionService.registerSection(this.section);
    };
    HomeComponent.prototype.onResize = function (event) {
        this.section.position = this.element.nativeElement.offsetTop;
        this.currentSectionService.registerSection(this.section);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onResize", null);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../web-client/app/kent-craftsmanship/home/home.component.html"),
            styles: [__webpack_require__("../../../../../web-client/app/kent-craftsmanship/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__services_current_section_service__["a" /* CurrentSectionService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/mtf/mtf.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".kcs-mtf-container {\n  padding-top: 40px; }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/mtf/mtf.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"kcs-mtf-container\">\r\n    <h2>Mission Trip Furniture will go here.</h2>\r\n</div>"

/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/mtf/mtf.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtfComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_current_section_service__ = __webpack_require__("../../../../../web-client/app/services/current-section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_section__ = __webpack_require__("../../../../../web-client/app/models/section.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MtfComponent = /** @class */ (function () {
    function MtfComponent(element, currentSectionService) {
        this.element = element;
        this.currentSectionService = currentSectionService;
    }
    MtfComponent.prototype.ngOnInit = function () {
        this.section = new __WEBPACK_IMPORTED_MODULE_2__models_section__["a" /* Section */]('mtf', this.element.nativeElement.offsetTop);
        this.currentSectionService.registerSection(this.section);
    };
    MtfComponent.prototype.onResize = function (event) {
        this.section.position = this.element.nativeElement.offsetTop;
        this.currentSectionService.registerSection(this.section);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MtfComponent.prototype, "onResize", null);
    MtfComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mtf',
            template: __webpack_require__("../../../../../web-client/app/kent-craftsmanship/mtf/mtf.component.html"),
            styles: [__webpack_require__("../../../../../web-client/app/kent-craftsmanship/mtf/mtf.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__services_current_section_service__["a" /* CurrentSectionService */]])
    ], MtfComponent);
    return MtfComponent;
}());



/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-bar {\n  height: 40px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  /* #### Tablets Portrait or Landscape #### */\n  /* #### Desktops #### */ }\n  .nav-bar .nav-bar-container {\n    position: relative;\n    top: 0;\n    left: 0;\n    height: 30px;\n    padding: 5px; }\n  .nav-bar .nav-bar-container .nav-bar-header {\n      position: absolute;\n      left: 5px;\n      top: 5px; }\n  .nav-bar .nav-bar-container .nav-bar-header .nav-bar-brand {\n        display: block; }\n  .nav-bar .nav-bar-container .nav-bar-nav {\n      position: absolute;\n      right: 5px;\n      top: 5px; }\n  .nav-bar .nav-bar-container .nav-bar-nav .nav-bar-toggle {\n        background: none;\n        border: none;\n        height: 30px;\n        width: 30px;\n        cursor: pointer;\n        position: absolute;\n        top: 0px;\n        right: 10px; }\n  .nav-bar .hidden {\n    display: none !important; }\n  @media screen and (max-width: 1024px) {\n    .nav-bar .nav-bar-container .nav-bar-nav .nav-bar-mobile {\n      position: relative; }\n      .nav-bar .nav-bar-container .nav-bar-nav .nav-bar-mobile ul {\n        margin: 0;\n        padding: 0;\n        position: absolute;\n        top: 30px;\n        right: 0px;\n        width: 200px; }\n        .nav-bar .nav-bar-container .nav-bar-nav .nav-bar-mobile ul li.nav-item {\n          margin: 0;\n          padding: 0;\n          list-style: none;\n          text-align: center;\n          height: 25px; }\n          .nav-bar .nav-bar-container .nav-bar-nav .nav-bar-mobile ul li.nav-item a.nav-link {\n            color: #3d3d3d;\n            text-decoration: none; }\n    .nav-bar .nav-bar-container .nav-bar-nav .nav-bar-reg {\n      display: none; } }\n  @media screen and (min-width: 1024px) {\n    .nav-bar .nav-bar-container .nav-bar-nav .nav-bar-mobile {\n      display: none; }\n    .nav-bar .nav-bar-container .nav-bar-nav .nav-bar-reg {\n      position: relative; }\n      .nav-bar .nav-bar-container .nav-bar-nav .nav-bar-reg ul {\n        margin: 0;\n        padding: 0; }\n        .nav-bar .nav-bar-container .nav-bar-nav .nav-bar-reg ul li.nav-item {\n          margin: 0;\n          padding: 0;\n          list-style: none;\n          display: inline-block;\n          margin-right: 50px;\n          text-align: center; }\n          .nav-bar .nav-bar-container .nav-bar-nav .nav-bar-reg ul li.nav-item a.nav-link {\n            color: #3d3d3d;\n            text-decoration: none;\n            line-height: 30px; } }\n  .nav-bar-background {\n  background: rgba(255, 255, 255, 0.7); }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav-bar\" [ngClass]=\"{ 'nav-bar-background': !isFirstSection }\">\r\n    <div class=\"nav-bar-container\">\r\n        <div class=\"nav-bar-header\">\r\n            <a class=\"nav-bar-brand\"\r\n               pageScroll\r\n               href=\"#home\"\r\n               [ngClass]=\"{ 'hidden': isFirstSection }\">\r\n                <img alt=\"icon\"\r\n                     src=\"../../../assets/kent-craftsmanship-icon.png\"\r\n                     height=\"30px;\" />\r\n            </a>\r\n        </div>\r\n        <div class=\"nav-bar-nav\">\r\n            <div class=\"nav-bar-mobile\">\r\n                <button class=\"nav-bar-toggle\"\r\n                        (click)=\"toggleMenu()\">\r\n                    <i class=\"fas fa-bars\"></i>\r\n                </button>\r\n                <ul [ngClass]=\"{ 'hidden': !isMenuDisplayed, 'nav-bar-background': !isFirstSection }\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\"\r\n                           pageScroll\r\n                           href=\"#about\"\r\n                           (click)=\"toggleMenu(false)\">About</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\"\r\n                           pageScroll\r\n                           href=\"#portfolio\"\r\n                           (click)=\"toggleMenu(false)\">Portfolio</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" \r\n                           pageScroll \r\n                           href=\"#mtf\" \r\n                           (click)=\"toggleMenu(false)\">Mission Trip Furniture</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" \r\n                           pageScroll \r\n                           href=\"#contact\" \r\n                           (click)=\"toggleMenu(false)\">Contact</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"nav-bar-reg\">\r\n                <ul>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" \r\n                           pageScroll \r\n                           href=\"#about\">About</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" \r\n                           pageScroll \r\n                           href=\"#portfolio\">Portfolio</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" \r\n                           pageScroll \r\n                           href=\"#mtf\">Mission Trip Furniture</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" \r\n                           pageScroll \r\n                           href=\"#contact\">Contact</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_current_section_service__ = __webpack_require__("../../../../../web-client/app/services/current-section.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(currentSectionService) {
        var _this = this;
        this.currentSectionService = currentSectionService;
        this.isFirstSection = true;
        this.isMenuDisplayed = false;
        this.currentSectionService.currentSection$.subscribe(function (currentSection) {
            console.log(currentSection.name);
            _this.isFirstSection = currentSection.name == 'home';
        });
    }
    NavBarComponent.prototype.toggleMenu = function (force) {
        if (force) {
            this.isMenuDisplayed = force;
            return;
        }
        this.isMenuDisplayed = !this.isMenuDisplayed;
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../web-client/app/kent-craftsmanship/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../web-client/app/kent-craftsmanship/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_current_section_service__["a" /* CurrentSectionService */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/portfolio/portfolio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".kcs-portfolio-container {\n  padding-top: 40px; }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"kcs-portfolio-container\">\r\n    <h2>Portfolio will go here.</h2>\r\n</div>"

/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_current_section_service__ = __webpack_require__("../../../../../web-client/app/services/current-section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_section__ = __webpack_require__("../../../../../web-client/app/models/section.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(element, currentSectionService) {
        this.element = element;
        this.currentSectionService = currentSectionService;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.section = new __WEBPACK_IMPORTED_MODULE_2__models_section__["a" /* Section */]('portfolio', this.element.nativeElement.offsetTop);
        this.currentSectionService.registerSection(this.section);
    };
    PortfolioComponent.prototype.onResize = function (event) {
        this.section.position = this.element.nativeElement.offsetTop;
        this.currentSectionService.registerSection(this.section);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PortfolioComponent.prototype, "onResize", null);
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__("../../../../../web-client/app/kent-craftsmanship/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("../../../../../web-client/app/kent-craftsmanship/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__services_current_section_service__["a" /* CurrentSectionService */]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "../../../../../web-client/app/models/section.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Section; });
var Section = /** @class */ (function () {
    function Section(name, position) {
        this.name = name;
        this.position = position;
    }
    return Section;
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

/***/ "../../../../../web-client/app/services/current-section.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentSectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrentSectionService = /** @class */ (function () {
    function CurrentSectionService() {
        var _this = this;
        this.currentSection = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        this.currentSection$ = this.currentSection.asObservable();
        this.sections = [];
        window.addEventListener('scroll', function (event) {
            _this.getCurrentSection();
        });
    }
    CurrentSectionService.prototype.registerSection = function (section) {
        //filter out the old position if it has been set
        this.sections = this.sections.filter(function (item) { return item.name != section.name; });
        //set the new position
        this.sections.push(section);
        //sort the section based on their apperance order 
        this.sections.sort(function (a, b) {
            return b.position - a.position;
        });
        //if the page has already been scrolled find the current name
        if (document.body.scrollTop > 0) {
            this.getCurrentSection();
        }
    };
    CurrentSectionService.prototype.getCurrentSection = function () {
        for (var _i = 0, _a = this.sections; _i < _a.length; _i++) {
            var section = _a[_i];
            if (section.position - (window.scrollY + 70) < 0) {
                this.currentSection.next(section);
                return;
            }
        }
        return;
    };
    CurrentSectionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CurrentSectionService);
    return CurrentSectionService;
}());



/***/ }),

/***/ "../../../../../web-client/app/services/kcs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KcsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { HttpClient, HttpParams } from '@angular/common/http';

var KcsService = /** @class */ (function () {
    function KcsService(http) {
        this.http = http;
    }
    KcsService.prototype.submitInquiry = function (inquirySubmission) {
        return this.http.post('/api/inquiries', inquirySubmission);
    };
    KcsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], KcsService);
    return KcsService;
}());



/***/ }),

/***/ "../../../../../web-client/assets/about-bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "about-bg.d9b7ef935a2f3574d360.jpg";

/***/ }),

/***/ "../../../../../web-client/assets/contact-bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "contact-bg.bc164f4945fabc71206f.jpg";

/***/ }),

/***/ "../../../../../web-client/assets/home-bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "home-bg.82b129bcfc5c28f1e47a.jpg";

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