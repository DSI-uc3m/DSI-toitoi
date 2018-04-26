webpackJsonp([5],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprarObraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
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
 * Generated class for the ComprarObraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComprarObraPage = /** @class */ (function () {
    function ComprarObraPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.metodoPago = "Paypal";
    }
    ComprarObraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComprarObraPage');
    };
    ComprarObraPage.prototype.irHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ComprarObraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comprar-obra',template:/*ion-inline-start:"D:\Rielbe\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\comprar-obra\comprar-obra.html"*/'<!--\n\n  Generated template for the ComprarObraPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n	<ion-navbar>\n\n	<button ion-button menuToggle>\n\n		<ion-icon name="menu"></ion-icon>\n\n   	</button>\n\n    <ion-title>Comprar obra</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<div text-center><h1> Detalles de la compra </h1></div>\n\n<hr/>\n\n\n\n<div id="imagen" text-center>\n\n    <img id="imagenArte" src="https://vignette.wikia.nocookie.net/mitologa/images/a/a3/Imagen_por_defecto.png/revision/latest?cb=20150824230838&path-prefix=es">\n\n    <img [src]="image" *ngIf="image" />\n\n  </div>\n\n  \n\n<div text-center><h6>Título de la obra</h6> \n\n\n\n\n\n<h3><img id="avatarAutor" src="/assets/imgs/userpic.png" alt="logo"><span> </span>Autor<br></h3>\n\n</div> \n\n<br/>\n\n  \n\n<br/>\n\n  \n\n<ion-list>\n\n  <ion-item>\n\n    <ion-label>Método de pago</ion-label>\n\n    <ion-select [(ngModel)]="metodoPago">\n\n      <ion-option value="paypal">Paypal</ion-option>\n\n      <ion-option value="trans">Transferencia</ion-option>	  \n\n      <ion-option value="tarj">Tarjeta de crédito</ion-option>\n\n      <ion-option value="contr">Contra reembolso</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n\n\n<button ion-button block id="publicar">Pagar</button>\n\n\n\n<br/>\n\n\n\n<div text-center><h1>Precio total: XX.XX € </h1></div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Rielbe\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\comprar-obra\comprar-obra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ComprarObraPage);
    return ComprarObraPage;
}());

//# sourceMappingURL=comprar-obra.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerObraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comprar_obra_comprar_obra__ = __webpack_require__(110);
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
 * Generated class for the VerObraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerObraPage = /** @class */ (function () {
    function VerObraPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.obra = this.navParams.get('obra');
        this.user = this.navParams.get('username');
    }
    VerObraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerObraPage');
    };
    VerObraPage.prototype.irPagSiguiente = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__comprar_obra_comprar_obra__["a" /* ComprarObraPage */], { username: this.user, obra: this.obra });
    };
    VerObraPage.prototype.irHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    VerObraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ver-obra',template:/*ion-inline-start:"D:\Rielbe\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\ver-obra\ver-obra.html"*/'<!--\n\n  Generated template for the VerObraPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>\n\nVisualizador		</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <img src="{{obra.image}}" title=\'{{obra.title}}\'/>\n\n<div class=t>{{obra.title}} <div class=p>{{obra.username}} <ion-icon  name="contact" ></ion-icon> </div></div>\n\n \n\n<hr/>\n\n<div id=descripcion> <h4>Descripción </h4>\n\n<div>{{obra.description}}</div></div>\n\n\n\n<button id=boton ion-button color="light" icon-right small (click)="irPagSiguiente()">\n\nComprar\n\n<ion-icon name=\'arrow-forward\'></ion-icon>\n\n</button>\n\n</ion-content> '/*ion-inline-end:"D:\Rielbe\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\ver-obra\ver-obra.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], VerObraPage);
    return VerObraPage;
    var _a, _b;
}());

//# sourceMappingURL=ver-obra.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicarObraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_obra_model__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subir_obra_subir_obra__ = __webpack_require__(58);
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
    function PublicarObraPage(navCtrl, toastCtrl, navParams, camera, dbFirebase) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.dbFirebase = dbFirebase;
        this.image = null;
        this.user = this.navParams.get('username');
        this.temp_pic = this.navParams.get('userpic');
        this.tit = null;
        this.desc = null;
        this.pri = null;
    }
    PublicarObraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PublicarObraPage');
    };
    PublicarObraPage.prototype.getPicture = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: 2,
            allowEdit: true,
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
        //var defim = document.getElementById('defim');
        //defim.setAttribute("style","display: none");
    };
    PublicarObraPage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: 1,
            allowEdit: true,
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
        //var defim = document.getElementById('defim');
        //defim.setAttribute("style","display: none");
    };
    PublicarObraPage.prototype.publicarObra = function () {
        if (this.image === null) {
            alert("Debes elegir o sacar una foto para tu obra");
            return;
        }
        if (this.tit === null) {
            alert("El título de la obra no puede estar vacío");
            return;
        }
        if (this.desc === null) {
            alert("La descripción de la obra no puede estar vacía");
            return;
        }
        if (this.pri === null) {
            alert("Debes elegir un precio para publicar tu obra");
            return;
        }
        var obra = new __WEBPACK_IMPORTED_MODULE_3__models_obra_model__["a" /* Obra */](this.image, this.user, this.tit, this.desc, this.pri);
        this.dbFirebase.pushObra(obra);
        var toast = this.toastCtrl.create({
            message: 'Obra publicada correctamente',
            duration: 3000,
            position: 'bot'
        });
        toast.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__subir_obra_subir_obra__["a" /* SubirObraPage */], { username: this.user, userpic: this.temp_pic });
    };
    PublicarObraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-publicar-obra',template:/*ion-inline-start:"D:\Rielbe\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\publicar-obra\publicar-obra.html"*/'<!DOCTYPE HTML>\n\n<!--\n\n  Generated template for the PublicarObraPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Publicar obra</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<!--\n\n<h1> Publicar una obra (subida) </h1>\n\n<hr/>\n\n<button ion-button icon-only (click)="irHome()">\n\n<ion-icon name="home"></ion-icon>\n\n</button>\n\n\n\n<button ion-button color="light" icon-left small (click)="whatver">\n\nPublicar obra\n\n<ion-icon name=\'arrow-forward\'></ion-icon>\n\n</button>\n\n-->\n\n  <div id="imagen" text-center>\n\n    <!--\n\n    <img id="defim" src="https://vignette.wikia.nocookie.net/mitologa/images/a/a3/Imagen_por_defecto.png/revision/latest?cb=20150824230838&path-prefix=es">-->\n\n    <img [src]="image" *ngIf="image" />\n\n    <button ion-button block (click)="getPicture()">Selecciona una imagen de tu galería</button>\n\n    <br>\n\n    <div text-center><h5>O</h5></div>\n\n    <button ion-button block (click)="takePicture()">Saca una foto a tu obra</button>\n\n  </div>\n\n  <hr/>\n\n  <h5> Título de la obra</h5>\n\n  <ion-input [(ngModel)]="tit" id="tit" placeholder="Dale un nombre a tu obra..."></ion-input>\n\n  <h5>Descripción</h5>\n\n  <ion-textarea [(ngModel)]="desc" id="desc" placeholder="Añade una descripción a tu obra..."></ion-textarea>\n\n  <h5>Precio</h5> <ion-input [(ngModel)]="pri" min="0" step="1" id="price" type="number" placeholder="¡Intenta no pasarte!"></ion-input>\n\n  <button ion-button block (click)="publicarObra()" id="publicar">Publicar obra</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Rielbe\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\publicar-obra\publicar-obra.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
    ], PublicarObraPage);
    return PublicarObraPage;
}());

//# sourceMappingURL=publicar-obra.js.map

/***/ }),

/***/ 124:
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
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/comprar-obra/comprar-obra.module": [
		341,
		4
	],
	"../pages/principal/principal.module": [
		343,
		3
	],
	"../pages/publicar-obra/publicar-obra.module": [
		342,
		2
	],
	"../pages/subir-obra/subir-obra.module": [
		344,
		1
	],
	"../pages/ver-obra/ver-obra.module": [
		345,
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
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(246);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fireBaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_db_firebase_db__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_subir_obra_subir_obra__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_principal_principal__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_publicar_obra_publicar_obra__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_comprar_obra_comprar_obra__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_ver_obra_ver_obra__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var fireBaseConfig = {
    apiKey: "AIzaSyAwHn9tvxa3rAaq_-CLf0PatvIt_HgSlPM",
    authDomain: "toitoi-b7e8e.firebaseapp.com",
    databaseURL: "https://toitoi-b7e8e.firebaseio.com",
    projectId: "toitoi-b7e8e",
    storageBucket: "toitoi-b7e8e.appspot.com",
    messagingSenderId: "951785874859"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_subir_obra_subir_obra__["a" /* SubirObraPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_ver_obra_ver_obra__["a" /* VerObraPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_publicar_obra_publicar_obra__["a" /* PublicarObraPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_comprar_obra_comprar_obra__["a" /* ComprarObraPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/comprar-obra/comprar-obra.module#ComprarObraPageModule', name: 'ComprarObraPage', segment: 'comprar-obra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/publicar-obra/publicar-obra.module#PublicarObraPageModule', name: 'PublicarObraPage', segment: 'publicar-obra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subir-obra/subir-obra.module#SubirObraPageModule', name: 'SubirObraPage', segment: 'subir-obra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-obra/ver-obra.module#VerObraPageModule', name: 'VerObraPage', segment: 'ver-obra', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(fireBaseConfig),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_subir_obra_subir_obra__["a" /* SubirObraPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_ver_obra_ver_obra__["a" /* VerObraPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_publicar_obra_publicar_obra__["a" /* PublicarObraPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_comprar_obra_comprar_obra__["a" /* ComprarObraPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login = /** @class */ (function () {
    function Login(us, pass, pic) {
        this.id = "";
        this.username = us;
        this.password = pass;
        this.img = pic;
    }
    return Login;
}());

//# sourceMappingURL=login.model.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Obra; });
var Obra = /** @class */ (function () {
    function Obra(im, us, tit, desc, pri) {
        this.id = "";
        this.image = im;
        this.username = us;
        this.title = tit;
        this.description = desc;
        this.price = pri;
    }
    return Obra;
}());

//# sourceMappingURL=obra.model.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_subir_obra_subir_obra__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__ = __webpack_require__(57);
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
    function MyApp(platform, statusBar, splashScreen, events) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.events = events;
        this.app_username = "aa";
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */] },
            { title: 'Mi perfil', component: __WEBPACK_IMPORTED_MODULE_5__pages_subir_obra_subir_obra__["a" /* SubirObraPage */] },
            { title: 'Cerrar sesión', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
        events.subscribe('test', function (user, pic) {
            _this.app_username = user;
            _this.app_userpic = pic;
        });
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
        this.nav.setRoot(page.component, { username: this.app_username, userpic: this.app_userpic });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Rielbe\Documents\GitHub\DSI-toitoi\Toitoi\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Rielbe\Documents\GitHub\DSI-toitoi\Toitoi\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_login_model__ = __webpack_require__(312);
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
    function HomePage(navCtrl, dbFirebase, toastCtrl, events) {
        this.navCtrl = navCtrl;
        this.dbFirebase = dbFirebase;
        this.toastCtrl = toastCtrl;
        this.events = events;
    }
    HomePage.prototype.registro = function () {
        var log = new __WEBPACK_IMPORTED_MODULE_4__models_login_model__["a" /* Login */](this.user, this.password, "../assets/imgs/logo.png");
        for (var _i = 0, _a = this.logins; _i < _a.length; _i++) {
            var x = _a[_i];
            if (log.username == x.username) {
                var toast_1 = this.toastCtrl.create({
                    message: 'El usuario seleccionado no está disponible',
                    duration: 3000,
                    position: 'bot'
                });
                toast_1.present();
                return;
            }
        }
        this.dbFirebase.registrar(log);
        var toast = this.toastCtrl.create({
            message: 'Registro correcto',
            duration: 3000,
            position: 'bot'
        });
        toast.present();
        this.events.publish('test', this.user, log.img);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */], { username: this.user, userpic: log.img });
    };
    HomePage.prototype.login = function () {
        for (var _i = 0, _a = this.logins; _i < _a.length; _i++) {
            var x = _a[_i];
            if (this.user == x.username && this.password == x.password) {
                var toast_2 = this.toastCtrl.create({
                    message: 'Inicio de sesión correcta',
                    duration: 3000,
                    position: 'bot'
                });
                toast_2.present();
                this.events.publish('test', this.user, x.img);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */], { username: this.user, userpic: x.img });
                return;
            }
        }
        var toast = this.toastCtrl.create({
            message: 'Usuario y/o contraseña incorrecto',
            duration: 3000,
            position: 'bot'
        });
        toast.present();
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getClientes().subscribe(function (logins) { _this.logins = logins; });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Rielbe\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Toi-toi</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div text-center>\n\n  <h3>Entra a Toi-toi</h3>\n\n  <ion-input [(ngModel)]="user" id="login" placeholder="Usuario"></ion-input>\n\n  <ion-input type="password" [(ngModel)]="password" id="login" placeholder="Password"></ion-input>\n\n <button ion-button block (click)="login()"> Login </button>\n\n <br>\n\n <button ion-button block (click)="registro()"> Registro </button>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Rielbe\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ver_obra_ver_obra__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comprar_obra_comprar_obra__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__ = __webpack_require__(84);
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
    function PrincipalPage(navCtrl, navParams, dbFirebase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbFirebase = dbFirebase;
    }
    PrincipalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrincipalPage');
        this.user = this.navParams.get('username');
        this.pic = this.navParams.get('userpic');
    };
    PrincipalPage.prototype.verObra = function (obr) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__ver_obra_ver_obra__["a" /* VerObraPage */], { username: this.user, obra: obr });
    };
    PrincipalPage.prototype.comprarObra = function (obr) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__comprar_obra_comprar_obra__["a" /* ComprarObraPage */], { username: this.user, obra: obr });
    };
    PrincipalPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getObras().subscribe(function (obras) { _this.obras = obras; });
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"D:\Rielbe\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\principal\principal.html"*/'<!--\n\n  Generated template for the PrincipalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>\n\n		Últimas obras\n\n		</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<div *ngFor="let obra of obras">\n\n<ion-card>\n\n  <img src="{{obra.image}}" title=\'{{obra.title}}\'/>\n\n  <div class="card-title">{{obra.title}}</div>\n\n  <div class="card-subtitle">@{{obra.username}}</div>\n\n  </ion-card>\n\n\n\n<ion-card>\n\n\n\n  <ion-list>\n\n    <button ion-item (click)="comprarObra(obra)">\n\n      <ion-icon name="cart" item-start></ion-icon>\n\n      Comprar\n\n    </button>\n\n\n\n    <button ion-item (click)="verObra(obra)">\n\n      <ion-icon name="brush" item-start></ion-icon>\n\n      Ver obra\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      Ver artista\n\n    \n\n    </button>\n\n\n\n\n\n  </ion-list>\n\n</ion-card>\n\n\n\n</div>\n\n<!--\n\n<ion-card>\n\n  <img src="/assets/imgs/street.jpg" title=\'street\'/>\n\n  <div class="card-title">Street</div>\n\n  <div class="card-subtitle">@urbanart_newyork</div>\n\n  </ion-card>\n\n\n\n<ion-card>\n\n\n\n  <ion-list>\n\n    <button ion-item >\n\n      <ion-icon name="cart" item-start></ion-icon>\n\n      Comprar\n\n    </button>\n\n\n\n    <button ion-item (click)="loginObra()">\n\n      <ion-icon name="brush" item-start></ion-icon>\n\n      Ver obra\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      Ver artista\n\n	  \n\n    </button>\n\n\n\n\n\n  </ion-list>\n\n</ion-card>\n\n\n\n  <ion-card>\n\n  <img src="/assets/imgs/explosion.jpg" title=\'explosion\'/>\n\n  <div class="card-title">Explosion</div>\n\n  <div class="card-subtitle">@judith_art</div>\n\n  </ion-card>\n\n\n\n<ion-card>\n\n\n\n  <ion-list>\n\n    <button ion-item>\n\n      <ion-icon name="cart" item-start></ion-icon>\n\n      Comprar\n\n    </button>\n\n\n\n    <button ion-item (click)="loginObra()">\n\n      <ion-icon name="brush" item-start></ion-icon>\n\n      Ver obra\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      Ver artista\n\n    </button>\n\n\n\n\n\n  </ion-list>\n\n</ion-card>\n\n\n\n  <ion-card>\n\n  <img src="/assets/imgs/birds.jpg" title=\'birds\'/>\n\n  <div class="card-title">Birds</div>\n\n  <div class="card-subtitle">@raul288</div>\n\n  </ion-card>\n\n\n\n<ion-card>\n\n\n\n  <ion-list>\n\n    <button ion-item>\n\n      <ion-icon name="cart" item-start></ion-icon>\n\n      Comprar\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="brush" item-start></ion-icon>\n\n      Ver obra\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      Ver artista\n\n    </button>\n\n\n\n\n\n  </ion-list>\n\n</ion-card>\n\n-->\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Rielbe\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\principal\principal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]) === "function" && _c || Object])
    ], PrincipalPage);
    return PrincipalPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubirObraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publicar_obra_publicar_obra__ = __webpack_require__(112);
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
        this.user = this.navParams.get('username');
        this.pic = this.navParams.get('userpic');
    };
    SubirObraPage.prototype.irPagSiguiente = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__publicar_obra_publicar_obra__["a" /* PublicarObraPage */], { username: this.user, userpic: this.pic });
    };
    SubirObraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subir-obra',template:/*ion-inline-start:"D:\Rielbe\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\subir-obra\subir-obra.html"*/'<!--\n\n  Generated template for the SubirObraPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	<ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Mi perfil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div text-center><img id="userpic" src={{pic}} alt="logo"/> <h4> @{{user}} </h4>\n\n  <h6><ion-icon name="settings"></ion-icon><span>  </span>Editar datos de usuario <br></h6></div>\n\n<div text-center><button ion-button large (click)="irPagSiguiente()">Publicar una obra</button></div>\n\n<br>\n\n <ion-list>\n\n     <button ion-item>\n\n      <ion-icon name="brush" item-start></ion-icon>\n\n      Mis obras\n\n    </button>\n\n	\n\n    <button ion-item>\n\n      <ion-icon name="cart" item-start></ion-icon>\n\n      Ventas\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="mail-open" item-start></ion-icon>\n\n      Pedidos\n\n    </button>\n\n\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Rielbe\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\subir-obra\subir-obra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SubirObraPage);
    return SubirObraPage;
}());

//# sourceMappingURL=subir-obra.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';


/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseDbProvider = /** @class */ (function () {
    function FirebaseDbProvider(afDB) {
        this.afDB = afDB;
        this.clientesRef = this.afDB.list('login');
        this.obrasRef = this.afDB.list('obras');
        console.log('Hello FirebaseDbProvider Provider');
    }
    FirebaseDbProvider.prototype.registrar = function (loginTuple) {
        if (loginTuple.id == "") {
            loginTuple.id = "" + Date.now();
        }
        return this.afDB.database.ref('login/' + loginTuple.id).set(loginTuple);
    };
    FirebaseDbProvider.prototype.login = function (user, password) {
        //
    };
    FirebaseDbProvider.prototype.getClientes = function () {
        return this.clientesRef.valueChanges();
    };
    FirebaseDbProvider.prototype.pushObra = function (obra) {
        if (obra.id == "") {
            obra.id = "OB" + Date.now();
        }
        return this.afDB.database.ref('obras/' + obra.id).set(obra);
    };
    FirebaseDbProvider.prototype.getObras = function () {
        return this.obrasRef.valueChanges();
    };
    FirebaseDbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], FirebaseDbProvider);
    return FirebaseDbProvider;
    var _a;
}());

//# sourceMappingURL=firebase-db.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.js.map