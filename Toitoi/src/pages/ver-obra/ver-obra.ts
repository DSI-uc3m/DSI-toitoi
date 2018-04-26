import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ComprarObraPage} from '../comprar-obra/comprar-obra';
import { Obra } from '../../models/obra.model';

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
  obra = this.navParams.get('obra');
  user = this.navParams.get('username');
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerObraPage');
  }
  
    irPagSiguiente(){
  	this.navCtrl.setRoot(ComprarObraPage, {username: this.user, obra:this.obra});
  	}
  	
  irHome(){
  	this.navCtrl.setRoot(HomePage);
  	}

}
