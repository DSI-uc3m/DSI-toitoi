import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SubirObraPage } from '../pages/subir-obra/subir-obra';
import { PrincipalPage } from '../pages/principal/principal';
import { PublicarObraPage } from '../pages/publicar-obra/publicar-obra';
import { ComprarObraPage } from '../pages/comprar-obra/comprar-obra';
import { VerObraPage } from '../pages/ver-obra/ver-obra';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const fireBaseConfig={
apiKey: "AIzaSyDuZH454-a8v05TUaRa5wG8N911-0DwuGE",
 authDomain: "dsi-ionic.firebaseapp.com",
 databaseURL: "https://dsi-ionic.firebaseio.com",
 projectId: "dsi-ionic",
 storageBucket: "dsi-ionic.appspot.com",
messagingSenderId: "652473996242"};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SubirObraPage,
    PrincipalPage,
	VerObraPage,
	PublicarObraPage,
	ComprarObraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SubirObraPage,
    PrincipalPage,
	VerObraPage,
	PublicarObraPage,
	ComprarObraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseDbProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDbProvider
  ]
})
export class AppModule {}

