import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Obra } from '../../models/obra.model'
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { ToastController } from 'ionic-angular';
import { SubirObraPage } from '../subir-obra/subir-obra';
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
	userobj = this.navParams.get('user');
    user: string = this.userobj.username;
    temp_pic: string = this.userobj.img;
    tit: string = null;
    desc: string = null;
    pri: number = null;
	public id = this.userobj.id;
    constructor(public navCtrl: NavController, private toastCtrl: ToastController, public navParams: NavParams, public camera: Camera, public dbFirebase:FirebaseDbProvider) {
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicarObraPage');
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
        let obra:Obra = new Obra(this.image,this.user,this.tit,this.desc,this.pri, this.id);
        this.dbFirebase.pushObra(obra);
        let toast = this.toastCtrl.create({
            message: 'Obra publicada correctamente',
            duration: 3000,
            position: 'bot'
        });
        toast.present();
        this.navCtrl.setRoot(SubirObraPage, {user: this.userobj});
    }

}
