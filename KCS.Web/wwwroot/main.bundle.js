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

module.exports = "<app-nav></app-nav>\r\n<div class=\"container-fluid kcs-container\">\r\n    <section>\r\n        <app-home></app-home>\r\n    </section>\r\n    <section id=\"about\">\r\n        <h2>About will go here.</h2>\r\n    </section>\r\n    <section id=\"portfolio\">\r\n        <h2>Portfolio will go here.</h2>\r\n    </section>\r\n    <section id=\"mtf\">\r\n        <h2>Mission Trip Furniture will go here.</h2>\r\n    </section>\r\n    <section id=\"contact\">\r\n        <app-contact></app-contact>\r\n    </section>\r\n</div>\r\n"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(element) {
        this.element = element;
        this.currentSectionName = '';
        this.sectionIndexes = [];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.sectionPosition = function ($event) {
        //filter out the old position if it has been set
        //this.sectionIndexes = this.sectionIndexes.filter(item => item.name != $event.name);
        //set the new position
        this.sectionIndexes.push($event);
        //sort the section based on their apperance order 
        this.sectionIndexes.sort(function (a, b) {
            return b.position - a.position;
        });
        //if the page has already been scrolled find the current name
        if (document.body.scrollTop > 0) {
            this.currentSectionName = this.getCurrentSectionName();
        }
    };
    AppComponent.prototype.onWindowScroll = function () {
        this.currentSectionName = this.getCurrentSectionName();
    };
    AppComponent.prototype.getCurrentSectionName = function () {
        var offset = this.element.nativeElement.parentElement.offsetTop - this.element.nativeElement.offsetTop;
        for (var _i = 0, _a = this.sectionIndexes; _i < _a.length; _i++) {
            var section = _a[_i];
            //Note: 13px is the margin-top value of the h2 element in the header
            if ((section.position + offset - window.scrollY - 13) < 0) {
                return section.name;
            }
        }
        return '';
    };
    AppComponent.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "sections", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../web-client/app/app.component.html"),
            styles: [__webpack_require__("../../../../../web-client/app/app.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__kent_craftsmanship_nav_nav_component__ = __webpack_require__("../../../../../web-client/app/kent-craftsmanship/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__kent_craftsmanship_home_home_component__ = __webpack_require__("../../../../../web-client/app/kent-craftsmanship/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__kent_craftsmanship_contact_contact_component__ = __webpack_require__("../../../../../web-client/app/kent-craftsmanship/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_recaptcha_directive__ = __webpack_require__("../../../../../web-client/app/directives/recaptcha.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { HttpClientModule } from '@angular/common/http';










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__kent_craftsmanship_nav_nav_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__kent_craftsmanship_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__kent_craftsmanship_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_13__directives_recaptcha_directive__["b" /* ReCaptchaDirective */]
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
                __WEBPACK_IMPORTED_MODULE_9__services_kcs_service__["a" /* KcsService */]
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

/***/ "../../../../../web-client/app/kent-craftsmanship/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact-form {\r\n  width: 500px;\r\n  margin: 0 auto; }\r\n  .contact-form mat-form-field {\r\n    width: 100%; }\r\n  .contact-form .center-form-row {\r\n    text-align: center; }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Contact</h2>\r\n<form class=\"contact-form\"\r\n      [formGroup]=\"contactForm\"\r\n      (ngSubmit)=\"submitInquiry(contactForm.value, contactForm.valid)\"\r\n      novalidate>\r\n    <mat-form-field>\r\n        <input type=\"email\"\r\n               matInput\r\n               maxlength=\"256\"\r\n               placeholder=\"Email Address\"\r\n               formControlName=\"email\" />\r\n        <mat-error *ngIf=\"contactForm.controls['email'].errors?.email && !contactForm.controls['email'].errors?.required\">\r\n            Please enter a valid email address.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"contactForm.controls['email'].errors?.required\">\r\n            Email address is required.\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput\r\n               maxlength=\"100\"\r\n               placeholder=\"Subject\"\r\n               formControlName=\"subject\" />\r\n        <mat-error *ngIf=\"contactForm.controls['subject'].errors?.required\">\r\n            A subject is required.\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <textarea matInput\r\n                  maxlength=\"500\"\r\n                  placeholder=\"Body\"\r\n                  matTextareaAutosize\r\n                  matAutosizeMinRows=\"5\"\r\n                  matAutosizeMaxRows=\"5\"\r\n                  formControlName=\"body\"></textarea>\r\n        <mat-hint align=\"end\">{{contactForm.controls['body'].value.length}} / 500</mat-hint>\r\n        <mat-error *ngIf=\"contactForm.controls['body'].errors?.required\">\r\n            A body is required.\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <div class=\"center-form-row\">\r\n        <div kcsRecaptcha key=\"6Lcc5UIUAAAAAEqED9lpGrleB--Hb4lemcZBhVjO\" formControlName=\"captcha\"></div>\r\n        <button mat-button\r\n                type=\"submit\"\r\n                [disabled]=\"!contactForm.valid\">\r\n            Submit\r\n        </button>\r\n    </div>\r\n</form>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_recaptcha_directive__ = __webpack_require__("../../../../../web-client/app/directives/recaptcha.directive.ts");
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
    function ContactComponent(formBuilder, kcsService, snackBar) {
        this.formBuilder = formBuilder;
        this.kcsService = kcsService;
        this.snackBar = snackBar;
        this.submitting = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.contactForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]],
            subject: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]],
            body: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]],
            captcha: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]]
        });
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
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../web-client/app/kent-craftsmanship/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../web-client/app/kent-craftsmanship/contact/contact.component.css")],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_5__directives_recaptcha_directive__["a" /* RECAPTCHA_URL */],
                    useValue: '/api/inquiries/validate-captcha'
                }]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__services_kcs_service__["a" /* KcsService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatSnackBar */]])
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

module.exports = "<div class=\"home\">\r\n    <div class=\"kcs-title\">\r\n        <img alt=\"logo\" src=\"../../../assets/kent-craftsmanship-logo.png\" width=\"500px;\" />\r\n        <h2>Hand Crafted Semi-fine Furniture</h2>\r\n    </div>\r\n</div>"

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

/***/ "../../../../../web-client/app/kent-craftsmanship/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-bar {\n  height: 70px;\n  position: fixed;\n  top: 0px;\n  left: 0;\n  width: 100vw; }\n  .nav-bar .hidden {\n    display: none; }\n  .nav-bar .nav-bar-container {\n    padding: 10px 20px; }\n  .nav-bar .nav-bar-container ul.nav-bar-nav {\n      margin: 0;\n      padding: 0; }\n  .nav-bar .nav-bar-container ul.nav-bar-nav li.nav-item {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        display: inline-block;\n        margin-right: 50px;\n        text-align: center; }\n  .nav-bar .nav-bar-container ul.nav-bar-nav li.nav-item a.nav-link {\n          color: #3d3d3d;\n          text-decoration: none; }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav-bar\">\r\n    <div class=\"nav-bar-container\">\r\n        <div class=\"navbar-header hidden\">\r\n            <a class=\"navbar-brand\" pageScroll href=\"#home\">\r\n                <!--<img alt=\"icon\" src=\"../../../assets/kent-craftsmanship-icon.png\" height=\"50px;\" />-->\r\n                KCS\r\n            </a>\r\n        </div>\r\n        <div>\r\n            <ul class=\"nav-bar-nav\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" pageScroll href=\"#about\">About</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" pageScroll href=\"#portfolio\">Portfolio</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" pageScroll href=\"#mtf\">Mission Trip Furniture</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" pageScroll href=\"#contact\">Contact</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../web-client/app/kent-craftsmanship/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.isIn = false; // store state
    }
    NavBarComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../web-client/app/kent-craftsmanship/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../web-client/app/kent-craftsmanship/nav/nav.component.css")]
        })
    ], NavBarComponent);
    return NavBarComponent;
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