import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the VerObraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-obra',
  templateUrl: 'ver-obra.html',
})
export class VerObraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerObraPage');
  }
  
    irPagSiguiente(){
  	this.navCtrl.push('ComprarObraPage');
  	}
  	
  irHome(){
  	this.navCtrl.setRoot(HomePage);
  	}

}
