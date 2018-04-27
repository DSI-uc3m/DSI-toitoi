import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerObraPage } from '../ver-obra/ver-obra';
import { ComprarObraPage } from '../comprar-obra/comprar-obra';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Obra } from '../../models/obra.model';
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
   listener(firebase) {
    this.obras = firebase.comprobarNoti();
    //firebase.getObras().subscribe(obras=>{this.obras=obras;});
    console.log(this.obras);
    for(obra in this.obras) {
        if(obra.notification === 1 && obra.username === this.app_username) {
                let toast = this.toastCtrl.create({
                    message: obra.title+' vendida.',
                    duration: 3000,
                    position: 'top'
                });
        }
    }
   }
  ionViewDidEnter() {

    this.dbFirebase.getObras().subscribe(obras=>{this.obras=obras;});
    this.timer = setInterval(this.listener(this.dbFirebase), 5000);
  }

}
