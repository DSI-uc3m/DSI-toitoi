import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerObraPage } from '../ver-obra/ver-obra';
import { ComprarObraPage } from '../comprar-obra/comprar-obra';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Obra } from '../../models/obra.model';
import * as firebase from 'firebase';
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
  public obras:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider) {
  }
  
    public user;

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
	this.user =  this.navParams.get('user');
	this.dbFirebase.getObras().subscribe(obras=>{this.obras=obras.reverse();});
  }
    verObra(obr:Obra)
  {
  	this.navCtrl.setRoot(VerObraPage, {user: this.user, obra: obr});
  }

      comprarObra(obr:Obra)
  {
    this.navCtrl.setRoot(ComprarObraPage, {user: this.user, obra: obr});
  }

  ionViewDidEnter() {
    //this.dbFirebase.getObras().subscribe(obras=>{this.obras=obras;});
	  var ref = firebase.database().ref("obras");
	  ref.on('child_added', (childSnapshot, prevChildKey) => {
		this.dbFirebase.getObras().subscribe(obras=>{this.obras=obras.reverse();});
	  });
  }

}
