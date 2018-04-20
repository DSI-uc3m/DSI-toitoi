import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { ComprarObraPage } from '../comprar-obra/comprar-obra';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  login()
  {
  	this.navCtrl.setRoot(PrincipalPage);
  }

}
