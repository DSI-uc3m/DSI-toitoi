webpackJsonp([3],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalPageModule", function() { return PrincipalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrincipalPageModule = /** @class */ (function () {
    function PrincipalPageModule() {
    }
    PrincipalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__principal__["a" /* PrincipalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__principal__["a" /* PrincipalPage */]),
            ],
        })
    ], PrincipalPageModule);
    return PrincipalPageModule;
}());

//# sourceMappingURL=principal.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrincipalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrincipalPage');
    };
    PrincipalPage.prototype.irArtista = function () {
        this.navCtrl.push('SubirObraPage');
    };
    PrincipalPage.prototype.irUsuario = function () {
        this.navCtrl.push('VerObraPage');
    };
    PrincipalPage.prototype.irHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"D:\Rielbe\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\principal\principal.html"*/'<!--\n\n  Generated template for the PrincipalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>\n\n		Toi-toi\n\n		</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n  <img src="/assets/imgs/card-sf.png" title=\'Soy YO\'/>\n\n  <div class="card-title">Guernika</div>\n\n  <div class="card-subtitle">Picasso</div>\n\n  </ion-card>\n\n\n\n<ion-card>\n\n\n\n  <ion-list>\n\n    <button ion-item>\n\n      <ion-icon name="cart" item-start></ion-icon>\n\n      Comprar\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="brush" item-start></ion-icon>\n\n      Ver obra\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      Ver artista\n\n    </button>\n\n\n\n\n\n  </ion-list>\n\n</ion-card>\n\n<button ion-button icon-only (click)="irHome()">\n\n<ion-icon name="home"></ion-icon>\n\n</button>\n\n\n\n<button ion-button color="light" icon-left small (click)="irUsuario()">\n\nVer obra\n\n<ion-icon name=\'arrow-forward\'></ion-icon>\n\n</button>\n\n<button ion-button color="light" icon-left small (click)="irArtista()">\n\nSubir obra\n\n<ion-icon name=\'arrow-forward\'></ion-icon>\n\n</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Rielbe\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\principal\principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ })

});
//# sourceMappingURL=3.js.map