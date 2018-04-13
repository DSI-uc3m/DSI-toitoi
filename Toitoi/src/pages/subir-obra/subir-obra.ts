import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the SubirObraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subir-obra',
  templateUrl: 'subir-obra.html',
})
export class SubirObraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubirObraPage');
  }
  
    irPagSiguiente(){
  	this.navCtrl.push('PublicarObraPage');
  	}
  	
  irHome(){
  	this.navCtrl.setRoot(HomePage);
  	}

}
