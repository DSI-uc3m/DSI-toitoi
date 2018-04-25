import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public dbFirebase:FirebaseDbProvider) {

  }
  
  login()
  {
    let log:Login = new Login(this.user,this.password);
    this.dbFirebase.registrar(log);

  	this.navCtrl.setRoot(PrincipalPage);
  }

}
