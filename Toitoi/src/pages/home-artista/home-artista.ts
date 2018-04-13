import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
/**
 * Generated class for the HomeArtistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-artista',
  templateUrl: 'home-artista.html',
})
export class HomeArtistaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeArtistaPage');
  }

  irPagSiguiente(){
  	this.navCtrl.push('SubirObraPage');
  	}
  	
  irHome(){
  	this.navCtrl.setRoot(HomePage);
  	}

}
