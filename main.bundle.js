webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\t<div class=\"page-header\">\n\t\t<h1>Todos:</h1>\n\t</div>\n\t<ul class=\"todo-list list-group\">\n\t\t<li *ngFor=\"let item of items\"\n\t\t\tclass=\"list-group-item\"\n\t\t\t[ngClass]=\"{'complete' : item.complete}\">\n\t\t\t\t<span class=\"text\">{{item.value}}</span>\n\t\t\t\t<select class=\"priority\"\n\t\t\t\t\tname=\"priority\"\n\t\t\t\t\t[ngClass]=\"item.priority\"\n\t\t\t\t\t(change)=\"itemPriorityChange($event, item)\">\n\t\t\t\t\t<option *ngFor='let priorityItem of priorityList'\n\t\t\t\t\t\t[attr.selected]=\"item.priority === priorityItem ? true : null\"\n\t\t\t\t\t\t[attr.value]='priorityItem'>\n\t\t\t\t\t\t{{priorityItem}}\n\t\t\t\t\t</option>\n\t\t\t\t</select>\n\t\t\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n\t\t\t\t\t<button  type=\"button\" class=\"btn btn-default\" (click)=\"itemUp(item)\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-up\" aria-hidden=\"true\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<button  type=\"button\" class=\"btn btn-default\" (click)=\"itemDown(item)\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-down\" aria-hidden=\"true\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<button  type=\"button\" class=\"btn btn-default\" [ngClass]=\"{'btn-primary' : item.complete}\" (click)=\"itemDone(item)\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"itemRemove(item)\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t</li>\n\t</ul>\n\n\t<form class=\"todo-form\" novalidate #itemForm=\"ngForm\"\n\t\t(ngSubmit)=\"onSubmit(itemForm, $event)\">\n\t\t<div class=\"input-group\">\n\t\t\t<input type=\"text\"\n\t\t\t\tngModel\n\t\t\t\tname=\"text\"\n\t\t\t\tclass=\"form-control\"\n\t\t\t\tautocomplete=\"off\">\n\t\t</div>\n\t\t<select name=\"priority\" ngModel>\n\t\t\t<option *ngFor='let priorityItem of priorityList'\n\t\t\t\t[attr.value]='priorityItem'>\n\t\t\t\t{{priorityItem}}\n\t\t\t</option>\n\t\t</select>\n\t\t<button type=\"submit\" class=\"btn btn-default\">\n\t\t\t<span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n\t\t</button>\n\t</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  max-width: 600px;\n  margin: 0 auto; }\n\n.page-header {\n  text-align: center;\n  margin: 0 0 40px;\n  padding: 40px 0; }\n  .page-header h1 {\n    margin: 0; }\n\n.todo-list {\n  margin: 0 auto 30px;\n  max-width: 600px;\n  counter-reset: section;\n  list-style-type: none; }\n  .todo-list li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .todo-list li:before {\n      counter-increment: section;\n      content: counters(section, \".\") \". \"; }\n    .todo-list li.complete .text {\n      text-decoration: line-through; }\n  .todo-list .text {\n    width: calc(100% - 270px); }\n  .todo-list .priority {\n    min-width: 70px;\n    text-align: center;\n    border-radius: 5px;\n    border: 1px solid #333;\n    background: white; }\n    .todo-list .priority.low {\n      background: rgba(0, 128, 0, 0.3); }\n    .todo-list .priority.medium {\n      background: rgba(255, 255, 0, 0.3); }\n    .todo-list .priority.high {\n      background: rgba(255, 0, 0, 0.3); }\n\n.todo-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .todo-form .input-group {\n    width: calc(100% - 150px); }\n  .todo-form select {\n    text-align: center;\n    min-width: 70px;\n    border-radius: 5px;\n    border: 1px solid #333;\n    background: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.src = 'https://59b68e8ed7d6800011e572f5.mockapi.io/items';
        this.priorityList = ['low', 'medium', 'high'];
        this.items = [];
        this.getItems().subscribe(function (data) {
            data.sort(function (a, b) {
                return a.index - b.index;
            });
            _this.items = data;
        });
    }
    AppComponent.prototype.getItems = function () {
        return this.http.get(this.src)
            .map(function (res) { return res.json(); });
    };
    AppComponent.prototype.itemRemove = function (obj) {
        this.items = this.items.filter(function (item) { return item !== obj; });
        this.http.delete(this.src + '/' + obj.id)
            .subscribe(function () { return console.warn('Item removed:' + obj.value); });
    };
    AppComponent.prototype.itemDone = function (obj) {
        var _this = this;
        this.items.map(function (item) {
            if (item.id === obj.id) {
                item.complete = !item.complete;
                _this.http.put(_this.src + '/' + item.id, item)
                    .subscribe(function () { return console.warn('Item updated:' + item.value); });
            }
        });
    };
    AppComponent.prototype.itemPriorityChange = function (e, obj) {
        var _this = this;
        this.items.map(function (item) {
            if (item.id === obj.id) {
                item.priority = e.target.value;
                _this.http.put(_this.src + '/' + item.id, item)
                    .subscribe(function () { return console.warn('Item updated:' + item.value); });
            }
        });
    };
    AppComponent.prototype.itemOrderChange = function (currentItem, otherItems, decrement) {
        var newIndex = null;
        var updatedItems = [];
        var getIndex = function (index) {
            if (decrement) {
                return newIndex === null || index >= newIndex;
            }
            else {
                return newIndex === null || newIndex > index;
            }
        };
        if (otherItems.length) {
            if (decrement) {
                otherItems.sort(function (a, b) { return b.index - a.index; });
            }
            otherItems.map(function (item) {
                if (getIndex(item.index)) {
                    newIndex = item.index;
                    item.index = currentItem.index;
                    updatedItems.push(item);
                }
            });
            currentItem.index = newIndex;
            updatedItems.push(currentItem);
            this.onChangeOrder(updatedItems);
        }
    };
    AppComponent.prototype.itemUp = function (currentItem) {
        this.itemOrderChange(currentItem, this.items.filter(function (item) { return item.index < currentItem.index; }), true);
    };
    AppComponent.prototype.itemDown = function (currentItem) {
        this.itemOrderChange(currentItem, this.items.filter(function (item) { return item.index > currentItem.index; }), false);
    };
    AppComponent.prototype.onChangeOrder = function (items) {
        var _this = this;
        items.map(function (item) {
            _this.http.put(_this.src + '/' + item.id, item)
                .subscribe(function () { return console.warn('Item updated:' + item.value); });
        });
        this.items.sort(function (a, b) {
            return a.index - b.index;
        });
    };
    AppComponent.prototype.onSubmit = function (itemForm, event) {
        event.preventDefault();
        var newItem = {
            id: this.items.length + 1,
            value: itemForm.value.text,
            priority: itemForm.value.priority || this.priorityList[0],
            index: this.items.length + 1
        };
        if (!itemForm.value.text.length) {
            return;
        }
        this.items.push(newItem);
        this.http.post(this.src, newItem)
            .subscribe(function () { return console.warn('Item added:' + newItem.value); });
        itemForm.reset();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map