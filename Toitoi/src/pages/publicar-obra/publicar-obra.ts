import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Obra } from '../../models/obra.model'
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { PrincipalPage } from '../principal/principal';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the PublicarObraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publicar-obra',
  templateUrl: 'publicar-obra.html',
  providers: [
    Camera
  ]
})
export class PublicarObraPage {
    image: string = null;
    user: string = "Test"; //Aquí recibiría el user a través de las páginas anteriores
    tit: string = null;
    desc: string = null;
    pri: number = null;

    constructor(public navCtrl: NavController, private toastCtrl: ToastController, public navParams: NavParams, public camera: Camera, public dbFirebase:FirebaseDbProvider) {
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicarObraPage');
  }
  	
  irHome(){
  	this.navCtrl.setRoot(HomePage);
  }

    getPicture() {
        let options: CameraOptions = {
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: 2,
            allowEdit: true,
            targetWidth: 500,
            targetHeight: 500,
            quality: 100,
            correctOrientation: true
          }
          this.camera.getPicture( options )
          .then(imageData => {
            this.image = `data:image/jpeg;base64,${imageData}`;
          })
          .catch(error =>{
            console.error( error );
          });
          //var defim = document.getElementById('defim');
          //defim.setAttribute("style","display: none");
    }

    takePicture() {
        let options: CameraOptions = {
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: 1,
            allowEdit: true,
            targetWidth: 500,
            targetHeight: 500,
            quality: 100,
            correctOrientation: true
        }
        this.camera.getPicture( options )
            .then(imageData => {
                this.image = `data:image/jpeg;base64,${imageData}`;
            })
            .catch(error =>{
                console.error( error );
            });
        //var defim = document.getElementById('defim');
        //defim.setAttribute("style","display: none");
    }

    publicarObra() {

        if(this.image === null) {
            alert("Debes elegir o sacar una foto para tu obra");
            return;
        }

        if(this.tit === null) {
            alert("El título de la obra no puede estar vacío");
            return;
        }

        if(this.desc === null) {
            alert("La descripción de la obra no puede estar vacía");
            return;
        }

        if(this.pri === null) {
            alert("Debes elegir un precio para publicar tu obra");
            return;
        }
        let obra:Obra = new Obra(this.image,this.user,this.tit,this.desc,this.pri);
        this.dbFirebase.pushObra(obra);
        let toast = this.toastCtrl.create({
            message: 'Obra publicada correctamente',
            duration: 3000,
            position: 'bot'
        });
        toast.present();
        this.navCtrl.setRoot(PrincipalPage);
    }

}
