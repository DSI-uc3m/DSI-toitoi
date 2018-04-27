import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Obra } from '../../models/obra.model';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
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
  obra = this.navParams.get('obra');
  user = this.navParams.get('username');

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComprarObraPage');
  }
  	
  irHome(){
  	this.navCtrl.setRoot(HomePage);
  	}
  comprarObra() {
        this.dbFirebase.pushNotificar( this.obra );
  }
}
