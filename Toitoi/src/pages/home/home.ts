import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { ComprarObraPage } from '../comprar-obra/comprar-obra';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user;
  public password;
  constructor(public navCtrl: NavController, public dbFirebase:FirebaseDbProvider) {

  }
  
  login()
  {
    alert(this.user+" "+this.password);
    console.log(this.dbFirebase.getClientes().subscribe(listaClientes=>{this.listaClientes=listaClientes;}));
    /*let usuario = {"id": "", "username": "hector", "password": "commit"};
    this.dbFirebase.registrar(usuario).then(res=>{
        alert("Cliente registrado");
    });*/

  	this.navCtrl.setRoot(PrincipalPage);
  }

}
