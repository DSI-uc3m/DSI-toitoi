//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { fireBaseConfig } from '../../app/app.module';

/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider {
  constructor(public afDB:AngularFireDatabase) {
	console.log('Hello FirebaseDbProvider Provider');
  }
  private clientesRef=this.afDB.list<Login>('login');

  registrar( loginTuple:Login ) {
  	if(loginTuple.id=="") {
  		loginTuple.id=""+Date.now();
  	}
  	return this.afDB.database.ref('login/'+loginTuple.id).set(loginTuple);
  }
  login( user, password ) {
  	//
  }
  getClientes() {
	return this.clientesRef.valueChanges();
  } 
}
