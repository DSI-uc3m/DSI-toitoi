import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerObraPage } from '../ver-obra/ver-obra';
import { ComprarObraPage } from '../comprar-obra/comprar-obra';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Obra } from '../../models/obra.models';
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
  obras:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider) {
  }
  
    public user;
	public pic;

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
	this.user =  this.navParams.get('username');
	this.pic = this.navParams.get('userpic');
  }
    verObra(obr:Obra)
  {
  	this.navCtrl.setRoot(VerObraPage, {username: this.user, obra:obr});
  }

      comprarObra(obr:Obra)
  {
    this.navCtrl.setRoot(ComprarObraPage, {username: this.user, obra:obr});
  }

  ionViewDidEnter() {
    this.dbFirebase.getObras().subscribe(obras=>{this.obras=obras;});
  }

}
