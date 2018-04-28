import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import {Login} from '../../models/login.model';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  logins:any;
  public user;
  public password;
  constructor(public navCtrl: NavController, public dbFirebase:FirebaseDbProvider, private toastCtrl: ToastController, public events: Events, private menu: MenuController) {

  }
  registro() {
    let log:Login = new Login(this.user,this.password, "../assets/imgs/logo.png");
    for(let x of this.logins) {
        if(log.username == x.username ) {
            let toast = this.toastCtrl.create({
                message: 'El usuario seleccionado no está disponible',
                duration: 3000,
                position: 'bot'
            });
            toast.present();
            return;
        }
    }
    this.dbFirebase.registrar(log);    
    let toast = this.toastCtrl.create({
        message: 'Registro correcto',
        duration: 3000,
        position: 'bot'
    });
    toast.present();    
	this.events.publish('test', this.user, log.img);
    this.navCtrl.setRoot(PrincipalPage, {username: this.user, userpic: log.img});
  }

  login()
  {
    for(let x of this.logins) {
        if(this.user == x.username && this.password == x.password) {
            let toast = this.toastCtrl.create({
                message: 'Inicio de sesión correcta',
                duration: 3000,
                position: 'bot'
            });
            toast.present();
            this.events.publish('listener');
			this.events.publish('test', this.user, x.img);
            this.navCtrl.setRoot(PrincipalPage, {username: this.user, userpic: x.img});
            return;
        }
    }

    let toast = this.toastCtrl.create({
        message: 'Usuario y/o contraseña incorrecto',
        duration: 3000,
        position: 'bot'
    });
    toast.present();
    
  }
  
  ionViewDidEnter() {
	this.menu.swipeEnable(false);
    this.dbFirebase.getClientes().subscribe(logins=>{this.logins=logins;});
  }
  
  ionViewWillLeave() {
    this.menu.swipeEnable(true);
   }
}
