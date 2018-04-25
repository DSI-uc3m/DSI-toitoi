import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { ComprarObraPage } from '../comprar-obra/comprar-obra';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import {Login} from '../../models/login.model'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  logins:any;
  public user;
  public password;
  constructor(public navCtrl: NavController, public dbFirebase:FirebaseDbProvider, private toastCtrl: ToastController) {

  }
  registro() {
    let log:Login = new Login(this.user,this.password);
    this.dbFirebase.registrar(log);
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
            this.navCtrl.setRoot(PrincipalPage);
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
    this.dbFirebase.getClientes().subscribe(logins=>{this.logins=logins;});
  }
}
