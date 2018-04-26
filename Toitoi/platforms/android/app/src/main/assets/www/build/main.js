webpackJsonp([5],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicarObraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(246);
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
 * Generated class for the PublicarObraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PublicarObraPage = /** @class */ (function () {
    function PublicarObraPage(navCtrl, navParams, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.image = null;
    }
    PublicarObraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PublicarObraPage');
    };
    PublicarObraPage.prototype.irHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PublicarObraPage.prototype.getPicture = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 500,
            quality: 100,
            correctOrientation: true
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            _this.image = "data:image/jpeg;base64," + imageData;
        })
            .catch(function (error) {
            console.error(error);
        });
        var defim = document.getElementById('defim');
        defim.setAttribute("style", "display: none");
    };
    PublicarObraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-publicar-obra',template:/*ion-inline-start:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\publicar-obra\publicar-obra.html"*/'<!DOCTYPE HTML>\n\n<!--\n\n  Generated template for the PublicarObraPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Publicar obra</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<!--\n\n<h1> Publicar una obra (subida) </h1>\n\n<hr/>\n\n<button ion-button icon-only (click)="irHome()">\n\n<ion-icon name="home"></ion-icon>\n\n</button>\n\n\n\n<button ion-button color="light" icon-left small (click)="whatver">\n\nPublicar obra\n\n<ion-icon name=\'arrow-forward\'></ion-icon>\n\n</button>\n\n-->\n\n  <div id="imagen" text-center>\n\n    <img id="defim" src="https://vignette.wikia.nocookie.net/mitologa/images/a/a3/Imagen_por_defecto.png/revision/latest?cb=20150824230838&path-prefix=es">\n\n    <img [src]="image" *ngIf="image" />\n\n    <button ion-button block (click)="getPicture()">Haz una foto de tu obra</button>\n\n  </div>\n\n  <hr/>\n\n  <h5> Título de la obra</h5>\n\n  <ion-input id="tit" placeholder="Dale un nombre a tu obra..."></ion-input>\n\n  <h5>Descripción</h5>\n\n  <ion-textarea id="desc" placeholder="Añade una descripción a tu obra..."></ion-textarea>\n\n  <h5>Precio</h5> <ion-input min="0" step="0.01" id="price" type="number" placeholder="¡Intenta no pasarte!"></ion-input>\n\n  <button ion-button block id="publicar">Publicar obra</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\publicar-obra\publicar-obra.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], PublicarObraPage);
    return PublicarObraPage;
}());

//# sourceMappingURL=publicar-obra.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubirObraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publicar_obra_publicar_obra__ = __webpack_require__(102);
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
 * Generated class for the SubirObraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubirObraPage = /** @class */ (function () {
    function SubirObraPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SubirObraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubirObraPage');
    };
    SubirObraPage.prototype.irPagSiguiente = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__publicar_obra_publicar_obra__["a" /* PublicarObraPage */]);
    };
    SubirObraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subir-obra',template:/*ion-inline-start:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\subir-obra\subir-obra.html"*/'<!--\n\n  Generated template for the SubirObraPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	<ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Mi perfil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div text-center><img id="userpic" src="/assets/imgs/userpic.png" alt="logo"/> <h4> @toitoi_admin </h4>\n\n  <h6><ion-icon name="settings"></ion-icon><span>  </span>Editar datos de usuario <br></h6></div>\n\n<div text-center><button ion-button large (click)="irPagSiguiente()">Publicar una obra</button></div>\n\n<br>\n\n <ion-list>\n\n     <button ion-item>\n\n      <ion-icon name="brush" item-start></ion-icon>\n\n      Mis obras\n\n    </button>\n\n	\n\n    <button ion-item>\n\n      <ion-icon name="cart" item-start></ion-icon>\n\n      Ventas\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="mail-open" item-start></ion-icon>\n\n      Pedidos\n\n    </button>\n\n\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\subir-obra\subir-obra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SubirObraPage);
    return SubirObraPage;
}());

//# sourceMappingURL=subir-obra.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/comprar-obra/comprar-obra.module": [
		273,
		1
	],
	"../pages/principal/principal.module": [
		277,
		4
	],
	"../pages/publicar-obra/publicar-obra.module": [
		274,
		3
	],
	"../pages/subir-obra/subir-obra.module": [
		276,
		2
	],
	"../pages/ver-obra/ver-obra.module": [
		275,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_subir_obra_subir_obra__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_publicar_obra_publicar_obra__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(196);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_subir_obra_subir_obra__["a" /* SubirObraPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_publicar_obra_publicar_obra__["a" /* PublicarObraPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/comprar-obra/comprar-obra.module#ComprarObraPageModule', name: 'ComprarObraPage', segment: 'comprar-obra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/publicar-obra/publicar-obra.module#PublicarObraPageModule', name: 'PublicarObraPage', segment: 'publicar-obra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-obra/ver-obra.module#VerObraPageModule', name: 'VerObraPage', segment: 'ver-obra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subir-obra/subir-obra.module#SubirObraPageModule', name: 'SubirObraPage', segment: 'subir-obra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_subir_obra_subir_obra__["a" /* SubirObraPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_publicar_obra_publicar_obra__["a" /* PublicarObraPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_subir_obra_subir_obra__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */] },
            { title: 'Mi perfil', component: __WEBPACK_IMPORTED_MODULE_5__pages_subir_obra_subir_obra__["a" /* SubirObraPage */] },
            { title: 'Cerrar sesión', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Toi-toi</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Entra a Toi-toi</h3>\n\n\n\n <button ion-button (click)="login()"> Login </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\principal\principal.html"*/'<!--\n\n  Generated template for the PrincipalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>\n\n		Últimas obras\n\n		</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ion-card>\n\n  <img src="/assets/imgs/street.jpg" title=\'street\'/>\n\n  <div class="card-title">Street</div>\n\n  <div class="card-subtitle">@urbanart_newyork</div>\n\n  </ion-card>\n\n\n\n<ion-card>\n\n\n\n  <ion-list>\n\n    <button ion-item>\n\n      <ion-icon name="cart" item-start></ion-icon>\n\n      Comprar\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="brush" item-start></ion-icon>\n\n      Ver obra\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      Ver artista\n\n    </button>\n\n\n\n\n\n  </ion-list>\n\n</ion-card>\n\n\n\n  <ion-card>\n\n  <img src="/assets/imgs/explosion.jpg" title=\'explosion\'/>\n\n  <div class="card-title">Explosion</div>\n\n  <div class="card-subtitle">@judith_art</div>\n\n  </ion-card>\n\n\n\n<ion-card>\n\n\n\n  <ion-list>\n\n    <button ion-item>\n\n      <ion-icon name="cart" item-start></ion-icon>\n\n      Comprar\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="brush" item-start></ion-icon>\n\n      Ver obra\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      Ver artista\n\n    </button>\n\n\n\n\n\n  </ion-list>\n\n</ion-card>\n\n\n\n  <ion-card>\n\n  <img src="/assets/imgs/birds.jpg" title=\'birds\'/>\n\n  <div class="card-title">Birds</div>\n\n  <div class="card-subtitle">@raul288</div>\n\n  </ion-card>\n\n\n\n<ion-card>\n\n\n\n  <ion-list>\n\n    <button ion-item>\n\n      <ion-icon name="cart" item-start></ion-icon>\n\n      Comprar\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="brush" item-start></ion-icon>\n\n      Ver obra\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      Ver artista\n\n    </button>\n\n\n\n\n\n  </ion-list>\n\n</ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\principal\principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map