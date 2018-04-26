//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { fireBaseConfig } from '../../app/app.module';
import { Login } from '../../models/login.model'
import { Obra } from '../../models/obra.model'
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
  private obrasRef=this.afDB.list<Obra>('obras');

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

    pushObra( obra:Obra ) {
        if(obra.id=="") {
            obra.id="OB"+Date.now();
        }
        return this.afDB.database.ref('obras/'+obra.id).set(obra);
    }

    getObras() {
      return this.obrasRef.valueChanges();
    }
}
