import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComprarObraPage} from '../comprar-obra/comprar-obra';

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
    public userobj = this.navParams.get('user');
	public obra = this.navParams.get('obra');
	public user = this.userobj.username;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.userobj = this.navParams.get('user');
	this.obra = this.navParams.get('obra');
	this.user = this.userobj.username;
  }
  
    irPagSiguiente(){
  	this.navCtrl.setRoot(ComprarObraPage, {user: this.userobj, obra:this.obra});
  	}
  	
}
