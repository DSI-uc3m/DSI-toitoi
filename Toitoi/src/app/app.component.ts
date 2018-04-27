import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SubirObraPage } from '../pages/subir-obra/subir-obra';
import { PrincipalPage } from '../pages/principal/principal';
import { ComprarObraPage } from '../pages/comprar-obra/comprar-obra';
import { Events } from 'ionic-angular';
import {FirebaseDbProvider} from '../providers/firebase-db/firebase-db';
import { Obra } from '../models/obra.model';
import { ToastController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	public app_username = "aa";
	public app_userpic;
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  obras:any;
  pages: Array<{title: string, component: any}>;
  constructor(public platform: Platform, public statusBar: StatusBar, public dbFirebase:FirebaseDbProvider, public splashScreen: SplashScreen, public events: Events, private toastCtrl: ToastController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: PrincipalPage },
      { title: 'Mi perfil', component: SubirObraPage },
      { title: 'Cerrar sesión', component: HomePage }
    ];

	events.subscribe('test', (user, pic) => {
		this.app_username = user;
		this.app_userpic = pic;
	});
    /*
    events.subscribe('listener',() => {
        this.timer = setInterval(this.listener, 5000);
    });
    */
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, {username: this.app_username, userpic: this.app_userpic});
  }
}
