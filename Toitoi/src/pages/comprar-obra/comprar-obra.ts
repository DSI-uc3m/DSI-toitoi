import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the ComprarObraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comprar-obra',
  templateUrl: 'comprar-obra.html',
})
export class ComprarObraPage {
  metodoPago: string = "Paypal";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComprarObraPage');
  }
  	
  irHome(){
  	this.navCtrl.setRoot(HomePage);
  	}

}
