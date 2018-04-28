import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PublicarObraPage } from '../publicar-obra/publicar-obra';
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
  public user;
  public pic;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubirObraPage');
	this.user = this.navParams.get('username');
	this.pic = this.navParams.get('userpic');
  }
  
    irPagSiguiente(){
  	this.navCtrl.setRoot(PublicarObraPage, {username: this.user, userpic: this.pic});
  	}

}
