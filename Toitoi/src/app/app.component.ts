import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SubirObraPage } from '../pages/subir-obra/subir-obra';
import { PrincipalPage } from '../pages/principal/principal';
import { Events } from 'ionic-angular';
import {FirebaseDbProvider} from '../providers/firebase-db/firebase-db';
import { ToastController } from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	public app_userobj;
	public app_username = "aa";
	public app_userpic;
	public app_saldo;
	public app_userid;
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

	events.subscribe('test', (user) => {
		this.app_userobj = user;
		this.app_username = this.app_userobj.username;
		this.app_userpic = this.app_userobj.img;
		this.app_saldo = this.app_userobj.saldo;
		this.app_userid = this.app_userobj.id;
	});
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
	  var refObras = firebase.database().ref("obras");
	  
	  	/*var ref = firebase.database().ref("login/"+this.app_userid);
				ref.on('child_changed', (snapshot, prevChildKey) =>{
					this.app_saldo = snapshot.val();
					this.user.saldo = this.app_saldo;
			});*/
	  
	  refObras.on('child_changed', (childSnapshot, prevChildKey) => {
		let noti = childSnapshot.child("notification").val();
		if (noti == 1){
			let autor = childSnapshot.child("username").val();
			let obr = childSnapshot.child("title").val();
			let id = childSnapshot.child("id").val();
			if (autor == this.app_username){
				let authorID = firebase.database().ref('login/'+this.app_userid+'/saldo');
				authorID.once("value").then( (snapshot) =>{
					let saldo = snapshot.val();
					saldo = saldo + parseFloat(childSnapshot.child("price").val());
					firebase.database().ref('login/'+this.app_userid+'/saldo').set(saldo);
					this.app_saldo = saldo;
					this.app_userobj.saldo = this.app_saldo;
				});
				let toast = this.toastCtrl.create({
				message: 'Tu obra ' + obr + ' ha sido comprada.',
				duration: 3000,
				position: 'top'
			});
			toast.present();
			firebase.database().ref('obras/'+id+'/notification').set("0");

			}
		}
		});
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, {user: this.app_userobj});
  }
}
