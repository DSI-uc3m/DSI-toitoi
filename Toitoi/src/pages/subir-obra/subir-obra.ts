import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PublicarObraPage } from '../publicar-obra/publicar-obra';
import * as firebase from 'firebase';
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
  public user = this.navParams.get('user');
  public saldo;
  public username = this.user.username;
  public img = this.user.img;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
	this.user = this.navParams.get('user');
	this.username = this.user.username;
	this.img = this.user.img;
	this.saldo = this.user.saldo;
	var ref = firebase.database().ref("login/"+this.user.id);
				ref.on('child_changed', (snapshot, prevChildKey) =>{
					this.saldo = snapshot.val();
  });
  }
  
    irPagSiguiente(){
  	this.navCtrl.setRoot(PublicarObraPage, {user: this.user});
  	}

}
