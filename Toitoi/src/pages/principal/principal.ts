import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerObraPage } from '../ver-obra/ver-obra';
/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
    public user;
	public pic;

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
	this.user =  this.navParams.get('username');
	this.pic = this.navParams.get('userpic');
  }
    loginObra()
  {
  	this.navCtrl.setRoot(VerObraPage);
  }

}
