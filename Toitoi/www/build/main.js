webpackJsonp([5],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerObraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comprar_obra_comprar_obra__ = __webpack_require__(60);
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
        this.userobj = this.navParams.get('user');
        this.obra = this.navParams.get('obra');
        this.user = this.userobj.username;
    }
    VerObraPage.prototype.ionViewDidLoad = function () {
        this.userobj = this.navParams.get('user');
        this.obra = this.navParams.get('obra');
        this.user = this.userobj.username;
    };
    VerObraPage.prototype.irPagSiguiente = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__comprar_obra_comprar_obra__["a" /* ComprarObraPage */], { user: this.userobj, obra: this.obra });
    };
    VerObraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ver-obra',template:/*ion-inline-start:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\ver-obra\ver-obra.html"*/'<!--\n\n  Generated template for the VerObraPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>\n\nVisualizador		</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <img src="{{obra.image}}" title=\'{{obra.title}}\'/>\n\n<div> <div class=p>{{obra.username}} <ion-icon class="icon ion-ios-person"></ion-icon> </div><div class=t>{{obra.title}} </div></div>\n\n \n\n<hr/>\n\n<div id=descripcion> <h4>Descripción </h4>\n\n<div>{{obra.description}}</div></div>\n\n\n\n<button id=boton ion-button color="danger" icon-right small (click)="irPagSiguiente()">\n\nComprar\n\n<ion-icon name=\'arrow-forward\'></ion-icon>\n\n</button>\n\n</ion-content> '/*ion-inline-end:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\ver-obra\ver-obra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], VerObraPage);
    return VerObraPage;
}());

//# sourceMappingURL=ver-obra.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicarObraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_obra_model__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subir_obra_subir_obra__ = __webpack_require__(61);
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
        this.userobj = this.navParams.get('user');
        this.user = this.userobj.username;
        this.temp_pic = this.userobj.img;
        this.tit = null;
        this.desc = null;
        this.pri = null;
        this.id = this.userobj.id;
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
        var obra = new __WEBPACK_IMPORTED_MODULE_3__models_obra_model__["a" /* Obra */](this.image, this.user, this.tit, this.desc, this.pri, this.id);
        this.dbFirebase.pushObra(obra);
        var toast = this.toastCtrl.create({
            message: 'Obra publicada correctamente',
            duration: 3000,
            position: 'bot'
        });
        toast.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__subir_obra_subir_obra__["a" /* SubirObraPage */], { user: this.userobj });
    };
    PublicarObraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-publicar-obra',template:/*ion-inline-start:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\publicar-obra\publicar-obra.html"*/'<!DOCTYPE HTML>\n\n<!--\n\n  Generated template for the PublicarObraPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Publicar obra</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<!--\n\n<h1> Publicar una obra (subida) </h1>\n\n<hr/>\n\n<button ion-button icon-only (click)="irHome()">\n\n<ion-icon name="home"></ion-icon>\n\n</button>\n\n\n\n<button ion-button color="light" icon-left small (click)="whatver">\n\nPublicar obra\n\n<ion-icon name=\'arrow-forward\'></ion-icon>\n\n</button>\n\n-->\n\n  <div id="imagen" text-center>\n\n    <!--\n\n    <img id="defim" src="https://vignette.wikia.nocookie.net/mitologa/images/a/a3/Imagen_por_defecto.png/revision/latest?cb=20150824230838&path-prefix=es">-->\n\n    <img [src]="image" *ngIf="image" />\n\n    <button ion-button block (click)="getPicture()">Selecciona una imagen de tu galería</button>\n\n    <br>\n\n    <div text-center><h5>O</h5></div>\n\n    <button ion-button block (click)="takePicture()">Saca una foto a tu obra</button>\n\n  </div>\n\n  <hr/>\n\n  <h5> Título de la obra</h5>\n\n  <ion-input [(ngModel)]="tit" id="tit" placeholder="Dale un nombre a tu obra..."></ion-input>\n\n  <h5>Descripción</h5>\n\n  <ion-textarea [(ngModel)]="desc" id="desc" placeholder="Añade una descripción a tu obra..."></ion-textarea>\n\n  <h5>Precio</h5> <ion-input [(ngModel)]="pri" min="0" step="1" id="price" type="number" placeholder="¡Intenta no pasarte!"></ion-input>\n\n  <button ion-button block (click)="publicarObra()" id="publicar">Publicar obra</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\publicar-obra\publicar-obra.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
    ], PublicarObraPage);
    return PublicarObraPage;
}());

//# sourceMappingURL=publicar-obra.js.map

/***/ }),

/***/ 126:
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
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/comprar-obra/comprar-obra.module": [
		354,
		4
	],
	"../pages/principal/principal.module": [
		355,
		3
	],
	"../pages/publicar-obra/publicar-obra.module": [
		357,
		2
	],
	"../pages/subir-obra/subir-obra.module": [
		356,
		1
	],
	"../pages/ver-obra/ver-obra.module": [
		358,
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
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_login_model__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(186);
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
    function HomePage(navCtrl, dbFirebase, toastCtrl, events, menu, camera) {
        this.navCtrl = navCtrl;
        this.dbFirebase = dbFirebase;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.menu = menu;
        this.camera = camera;
        this.userR = "";
        this.passwordR = "";
        this.image = null;
    }
    // Registro
    HomePage.prototype.getPicture = function () {
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
            var toast = _this.toastCtrl.create({
                message: 'Imagen seleccionada',
                duration: 3000,
                position: 'bot'
            });
            toast.present();
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    HomePage.prototype.takePicture = function () {
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
            var toast = _this.toastCtrl.create({
                message: 'Imagen seleccionada',
                duration: 3000,
                position: 'bot'
            });
            toast.present();
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    HomePage.prototype.registro = function () {
        if (this.image === null) {
            this.image = "https://i.imgur.com/bQQ93fW.png";
        }
        if (this.userR == "" || this.passwordR == "") {
            var toast_1 = this.toastCtrl.create({
                message: 'Tienes que introducir un nombre y una contraseña',
                duration: 3000,
                position: 'bot'
            });
            toast_1.present();
            return;
        }
        var log = new __WEBPACK_IMPORTED_MODULE_4__models_login_model__["a" /* Login */](this.userR, this.passwordR, this.image);
        for (var _i = 0, _a = this.logins; _i < _a.length; _i++) {
            var x = _a[_i];
            if (log.username == x.username) {
                var toast_2 = this.toastCtrl.create({
                    message: 'Ese nombre de usuario no está disponible',
                    duration: 3000,
                    position: 'bot'
                });
                toast_2.present();
                return;
            }
        }
        this.dbFirebase.registrar(log);
        var toast = this.toastCtrl.create({
            message: 'Usuario creado',
            duration: 3000,
            position: 'bot'
        });
        toast.present();
        this.events.publish('test', log);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */], { user: log });
    };
    HomePage.prototype.login = function () {
        for (var _i = 0, _a = this.logins; _i < _a.length; _i++) {
            var x = _a[_i];
            if (this.user == x.username && this.password == x.password) {
                var toast_3 = this.toastCtrl.create({
                    message: '¡Bienvenido, @' + x.username + '!',
                    duration: 3000,
                    position: 'bot'
                });
                toast_3.present();
                this.events.publish('test', x);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */], { user: x });
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
    HomePage.prototype.hide = function () {
        if (this.hideMe == true) {
            this.hideMe = false;
        }
        else {
            this.hideMe = true;
        }
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.menu.swipeEnable(false);
        this.dbFirebase.getClientes().subscribe(function (logins) { _this.logins = logins; });
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.menu.swipeEnable(true);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Toi-toi</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div text-center>\n\n  <h3>Entra a Toi-toi</h3>\n\n  <ion-input [(ngModel)]="user" id="login" placeholder="Usuario"></ion-input>\n\n  <ion-input type="password" [(ngModel)]="password" id="login" placeholder="Password"></ion-input>\n\n <button ion-button block (click)="login()"> Login </button>\n\n <br>\n\n \n\n <h4>¿No tienes cuenta?: </h4><button ion-button outline icon-end (click)="hide()">Regístrate <ion-icon name="ios-arrow-dropdown"></ion-icon> </button>\n\n <div *ngIf="hideMe"> \n\n <br>\n\n Elige un nombre de usuario y una contraseña: <br>\n\n   <ion-input [(ngModel)]="userR" id="login" placeholder="Usuario"></ion-input>\n\n   <ion-input type="password" [(ngModel)]="passwordR" id="login" placeholder="Password"></ion-input>\n\n <br>\n\n Elige una foto de perfil (opcional): <br>\n\n	<button ion-button small (click)="getPicture()">Selecciona una imagen</button>\n\n	<button ion-button small (click)="takePicture()">Saca una foto</button>\n\n	<br><br>\n\n	<button ion-button color="secondary" block (click)="registro()">Confirmar registro</button>\n\n </div>\n\n \n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\home\home.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(250);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fireBaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_db_firebase_db__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_subir_obra_subir_obra__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_principal_principal__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_publicar_obra_publicar_obra__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_comprar_obra_comprar_obra__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_ver_obra_ver_obra__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(228);
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
                        { loadChildren: '../pages/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subir-obra/subir-obra.module#SubirObraPageModule', name: 'SubirObraPage', segment: 'subir-obra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/publicar-obra/publicar-obra.module#PublicarObraPageModule', name: 'PublicarObraPage', segment: 'publicar-obra', priority: 'low', defaultHistory: [] },
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
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Obra; });
var Obra = /** @class */ (function () {
    function Obra(im, us, tit, desc, pri, authorid) {
        this.id = "";
        this.image = im;
        this.username = us;
        this.title = tit;
        this.description = desc;
        this.price = pri;
        this.notification = 0;
        this.authorID = authorid;
    }
    return Obra;
}());

//# sourceMappingURL=obra.model.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(169);
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


;
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
    FirebaseDbProvider.prototype.pushNotificar = function (obra) {
        obra.notification = 1;
        return this.afDB.database.ref('obras/' + obra.id).set(obra);
    };
    FirebaseDbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseDbProvider);
    return FirebaseDbProvider;
}());

//# sourceMappingURL=firebase-db.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_subir_obra_subir_obra__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_firebase_db_firebase_db__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
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
    function MyApp(platform, statusBar, dbFirebase, splashScreen, events, toastCtrl) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.dbFirebase = dbFirebase;
        this.splashScreen = splashScreen;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.app_username = "aa";
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */] },
            { title: 'Mi perfil', component: __WEBPACK_IMPORTED_MODULE_5__pages_subir_obra_subir_obra__["a" /* SubirObraPage */] },
            { title: 'Cerrar sesión', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
        events.subscribe('test', function (user) {
            _this.app_userobj = user;
            _this.app_username = _this.app_userobj.username;
            _this.app_userpic = _this.app_userobj.img;
            _this.app_saldo = _this.app_userobj.saldo;
            _this.app_userid = _this.app_userobj.id;
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            var refObras = __WEBPACK_IMPORTED_MODULE_8_firebase__["database"]().ref("obras");
            /*var ref = firebase.database().ref("login/"+this.app_userid);
                    ref.on('child_changed', (snapshot, prevChildKey) =>{
                        this.app_saldo = snapshot.val();
                        this.user.saldo = this.app_saldo;
                });*/
            refObras.on('child_changed', function (childSnapshot, prevChildKey) {
                var noti = childSnapshot.child("notification").val();
                if (noti == 1) {
                    var autor = childSnapshot.child("username").val();
                    var obr = childSnapshot.child("title").val();
                    var id = childSnapshot.child("id").val();
                    if (autor == _this.app_username) {
                        var authorID = __WEBPACK_IMPORTED_MODULE_8_firebase__["database"]().ref('login/' + _this.app_userid + '/saldo');
                        authorID.once("value").then(function (snapshot) {
                            var saldo = snapshot.val();
                            saldo = saldo + parseFloat(childSnapshot.child("price").val());
                            __WEBPACK_IMPORTED_MODULE_8_firebase__["database"]().ref('login/' + _this.app_userid + '/saldo').set(saldo);
                            _this.app_saldo = saldo;
                            _this.app_userobj.saldo = _this.app_saldo;
                        });
                        var toast = _this.toastCtrl.create({
                            message: 'Tu obra ' + obr + ' ha sido comprada.',
                            duration: 3000,
                            position: 'top'
                        });
                        toast.present();
                        __WEBPACK_IMPORTED_MODULE_8_firebase__["database"]().ref('obras/' + id + '/notification').set("0");
                    }
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component, { user: this.app_userobj });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _g || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login = /** @class */ (function () {
    function Login(us, pass, pic) {
        this.id = "" + Date.now();
        this.username = us;
        this.password = pass;
        this.img = pic;
        this.saldo = 0;
    }
    return Login;
}());

//# sourceMappingURL=login.model.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ver_obra_ver_obra__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comprar_obra_comprar_obra__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
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
        var _this = this;
        console.log('ionViewDidLoad PrincipalPage');
        this.user = this.navParams.get('user');
        this.dbFirebase.getObras().subscribe(function (obras) { _this.obras = obras.reverse(); });
    };
    PrincipalPage.prototype.verObra = function (obr) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__ver_obra_ver_obra__["a" /* VerObraPage */], { user: this.user, obra: obr });
    };
    PrincipalPage.prototype.comprarObra = function (obr) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__comprar_obra_comprar_obra__["a" /* ComprarObraPage */], { user: this.user, obra: obr });
    };
    PrincipalPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //this.dbFirebase.getObras().subscribe(obras=>{this.obras=obras;});
        var ref = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref("obras");
        ref.on('child_added', function (childSnapshot, prevChildKey) {
            _this.dbFirebase.getObras().subscribe(function (obras) { _this.obras = obras.reverse(); });
        });
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\principal\principal.html"*/'<!--\n\n  Generated template for the PrincipalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>\n\n		Últimas obras\n\n		</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<div *ngFor="let obra of obras">\n\n<ion-card>\n\n  <img src="{{obra.image}}" title=\'{{obra.title}}\'/>\n\n  <div class="card-title">{{obra.title}}</div>\n\n  <div class="card-subtitle">@{{obra.username}}</div>\n\n  </ion-card>\n\n\n\n<ion-card>\n\n\n\n  <ion-list>\n\n    <button ion-item (click)="comprarObra(obra)">\n\n      <ion-icon name="cart" item-start></ion-icon>\n\n      Comprar\n\n    </button>\n\n\n\n    <button ion-item (click)="verObra(obra)">\n\n      <ion-icon name="brush" item-start></ion-icon>\n\n      Ver obra\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      Ver artista\n\n    \n\n    </button>\n\n\n\n\n\n  </ion-list>\n\n</ion-card>\n\n\n\n</div>\n\n<!--\n\n<ion-card>\n\n  <img src="/assets/imgs/street.jpg" title=\'street\'/>\n\n  <div class="card-title">Street</div>\n\n  <div class="card-subtitle">@urbanart_newyork</div>\n\n  </ion-card>\n\n\n\n<ion-card>\n\n\n\n  <ion-list>\n\n    <button ion-item >\n\n      <ion-icon name="cart" item-start></ion-icon>\n\n      Comprar\n\n    </button>\n\n\n\n    <button ion-item (click)="loginObra()">\n\n      <ion-icon name="brush" item-start></ion-icon>\n\n      Ver obra\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      Ver artista\n\n	  \n\n    </button>\n\n\n\n\n\n  </ion-list>\n\n</ion-card>\n\n\n\n  <ion-card>\n\n  <img src="/assets/imgs/explosion.jpg" title=\'explosion\'/>\n\n  <div class="card-title">Explosion</div>\n\n  <div class="card-subtitle">@judith_art</div>\n\n  </ion-card>\n\n\n\n<ion-card>\n\n\n\n  <ion-list>\n\n    <button ion-item>\n\n      <ion-icon name="cart" item-start></ion-icon>\n\n      Comprar\n\n    </button>\n\n\n\n    <button ion-item (click)="loginObra()">\n\n      <ion-icon name="brush" item-start></ion-icon>\n\n      Ver obra\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      Ver artista\n\n    </button>\n\n\n\n\n\n  </ion-list>\n\n</ion-card>\n\n\n\n  <ion-card>\n\n  <img src="/assets/imgs/birds.jpg" title=\'birds\'/>\n\n  <div class="card-title">Birds</div>\n\n  <div class="card-subtitle">@raul288</div>\n\n  </ion-card>\n\n\n\n<ion-card>\n\n\n\n  <ion-list>\n\n    <button ion-item>\n\n      <ion-icon name="cart" item-start></ion-icon>\n\n      Comprar\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="brush" item-start></ion-icon>\n\n      Ver obra\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      Ver artista\n\n    </button>\n\n\n\n\n\n  </ion-list>\n\n</ion-card>\n\n-->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\principal\principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprarObraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__principal_principal__ = __webpack_require__(47);
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
    function ComprarObraPage(navCtrl, navParams, dbFirebase, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbFirebase = dbFirebase;
        this.toastCtrl = toastCtrl;
        this.metodoPago = "";
        this.obra = this.navParams.get('obra');
        this.userobj = this.navParams.get('user');
        this.user = this.userobj.username;
    }
    ComprarObraPage.prototype.ionViewDidLoad = function () {
        this.obra = this.navParams.get('obra');
        this.userobj = this.navParams.get('user');
        this.user = this.userobj.username;
    };
    ComprarObraPage.prototype.comprarObra = function () {
        if (this.obra.username == this.user) {
            var toast_1 = this.toastCtrl.create({
                message: '¡No puedes comprar tus propias obras!',
                duration: 3000,
                position: 'top'
            });
            toast_1.present();
            return;
        }
        if (this.metodoPago == "") {
            var toast_2 = this.toastCtrl.create({
                message: 'Por favor, selecciona un método de pago',
                duration: 3000,
                position: 'top'
            });
            toast_2.present();
            return;
        }
        var toast = this.toastCtrl.create({
            message: '¡Compra realizada con éxito!',
            duration: 3000,
            position: 'top'
        });
        toast.present();
        this.dbFirebase.pushNotificar(this.obra);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__principal_principal__["a" /* PrincipalPage */], { user: this.userobj });
    };
    ComprarObraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comprar-obra',template:/*ion-inline-start:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\comprar-obra\comprar-obra.html"*/'<!--\n\n  Generated template for the ComprarObraPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n	<ion-navbar>\n\n	<button ion-button menuToggle>\n\n		<ion-icon name="menu"></ion-icon>\n\n   	</button>\n\n    <ion-title>Comprar obra</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<div text-center><h1> Detalles de la compra </h1></div>\n\n<hr/>\n\n\n\n<div id="imagen" text-center>\n\n    <img id="imagenArte" src="{{obra.image}}" title=\'{{obra.title}}\'/>\n\n    <img [src]="image" *ngIf="image" />\n\n  </div>\n\n  \n\n<div text-center><h6>{{obra.title}}</h6> \n\n\n\n<ion-item text-center>\n\n  <ion-icon class="icon ion-ios-person-outline"></ion-icon> \n\n  <span class="text">@{{obra.username}}</span>\n\n</ion-item>\n\n</div> \n\n<br/>\n\n  \n\n<br/>\n\n  \n\n<ion-list>\n\n  <ion-item>\n\n    <ion-label>Método de pago</ion-label>\n\n    <ion-select [(ngModel)]="metodoPago">\n\n      <ion-option value="paypal">Paypal</ion-option>\n\n      <ion-option value="trans">Transferencia</ion-option>	  \n\n      <ion-option value="tarj">Tarjeta de crédito</ion-option>\n\n      <ion-option value="contr">Contra reembolso</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n\n\n<button ion-button block color="danger" (click)="comprarObra()" id="publicar">Pagar</button>\n\n\n\n<br/>\n\n\n\n<div text-center><h1>Precio total: {{obra.price}} € </h1></div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\comprar-obra\comprar-obra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ComprarObraPage);
    return ComprarObraPage;
}());

//# sourceMappingURL=comprar-obra.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubirObraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publicar_obra_publicar_obra__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
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
        this.user = this.navParams.get('user');
        this.username = this.user.username;
        this.img = this.user.img;
    }
    SubirObraPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.user = this.navParams.get('user');
        this.username = this.user.username;
        this.img = this.user.img;
        this.saldo = this.user.saldo;
        var ref = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("login/" + this.user.id);
        ref.on('child_changed', function (snapshot, prevChildKey) {
            _this.saldo = snapshot.val();
        });
    };
    SubirObraPage.prototype.irPagSiguiente = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__publicar_obra_publicar_obra__["a" /* PublicarObraPage */], { user: this.user });
    };
    SubirObraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subir-obra',template:/*ion-inline-start:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\subir-obra\subir-obra.html"*/'<!--\n\n  Generated template for the SubirObraPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	<ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Mi perfil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div text-center><img id="userpic" src={{img}} alt="logo" style="max-width: 80%"/> <h4> @{{username}} </h4>\n\n  <h6><ion-icon name="settings"></ion-icon><span>  </span>Editar datos de usuario <br></h6></div>\n\n<div text-center><button ion-button large (click)="irPagSiguiente()">Publicar una obra</button></div>\n\n<br>\n\n<div text-center>Dinero ganado con la app: {{saldo}}€</div>\n\n<br>\n\n <ion-list>\n\n     <button ion-item>\n\n      <ion-icon name="brush" item-start></ion-icon>\n\n      Mis obras\n\n    </button>\n\n	\n\n    <button ion-item>\n\n      <ion-icon name="cart" item-start></ion-icon>\n\n      Ventas\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="mail-open" item-start></ion-icon>\n\n      Pedidos\n\n    </button>\n\n\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\carlos\Documents\GitHub\DSI-toitoi\Toitoi\src\pages\subir-obra\subir-obra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SubirObraPage);
    return SubirObraPage;
}());

//# sourceMappingURL=subir-obra.js.map

/***/ })

},[230]);
//# sourceMappingURL=main.js.map