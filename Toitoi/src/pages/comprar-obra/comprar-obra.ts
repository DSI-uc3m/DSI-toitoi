import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { ToastController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
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
    public obra = this.navParams.get('obra');
	public userobj = this.navParams.get('user');
	public user = this.userobj.username;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.obra = this.navParams.get('obra');
	this.userobj = this.navParams.get('user');
	this.user = this.userobj.username;
  }
  	
  comprarObra() {
	    if(this.obra.username == this.user){
			let toast = this.toastCtrl.create({
                message: '¡No puedes comprar tus propias obras!',
                duration: 3000,
                position: 'top'
            });
            toast.present();
			return;
		}
        let toast = this.toastCtrl.create({
            message: '¡Compra realizada con éxito!',
            duration: 3000,
            position: 'top'
        });
        toast.present();        
        this.dbFirebase.pushNotificar( this.obra );
        this.navCtrl.setRoot(PrincipalPage, {user: this.userobj});
  }
}
