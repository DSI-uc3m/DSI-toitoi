import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Camera, CameraOptions } from '@ionic-native/camera'
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
    constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera) {
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
      var defim = document.getElementById('defim');
      defim.setAttribute("style","display: none");
  }

}
