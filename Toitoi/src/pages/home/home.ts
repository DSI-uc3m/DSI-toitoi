import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import {Login} from '../../models/login.model';
import { Events } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    providers: [
    Camera
  ]
})
export class HomePage {
  logins:any;
  public user;
  public password;
  public hideMe;
  public userR="";
  public passwordR="";
  image: string = null;
	
  constructor(public navCtrl: NavController, public dbFirebase:FirebaseDbProvider, private toastCtrl: ToastController, public events: Events, private menu: MenuController, public camera: Camera) {

  }
  
  
  
  
  // Registro
  
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
			let toast = this.toastCtrl.create({
					message: 'Imagen seleccionada',
					duration: 3000,
					position: 'bot'
				});
				toast.present();
          })
          .catch(error =>{
            console.error( error );
          });
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
				let toast = this.toastCtrl.create({
					message: 'Imagen seleccionada',
					duration: 3000,
					position: 'bot'
				});
				toast.present();
            })
            .catch(error =>{
                console.error( error );
            });
    }

    registro() {
        if(this.image === null) {
            this.image = "../assets/imgs/userpic.png";
        }
		if (this.userR == "" || this.passwordR == ""){
			let toast = this.toastCtrl.create({
					message: 'Tienes que introducir un nombre y una contraseña',
					duration: 3000,
					position: 'bot'
				});
				toast.present();
				return;
		}
		let log:Login = new Login(this.userR,this.passwordR, this.image);
		for(let x of this.logins) {
			if(log.username == x.username ) {
				let toast = this.toastCtrl.create({
					message: 'Ese nombre de usuario no está disponible',
					duration: 3000,
					position: 'bot'
				});
				toast.present();
				return;
			}
		}
		this.dbFirebase.registrar(log);    
		let toast = this.toastCtrl.create({
			message: 'Usuario creado',
			duration: 3000,
			position: 'bot'
		});
		toast.present();    
		this.events.publish('test', log);
		this.navCtrl.setRoot(PrincipalPage, {user: log});
		
    }
  
  login()
  {
    for(let x of this.logins) {
        if(this.user == x.username && this.password == x.password) {
            let toast = this.toastCtrl.create({
                message: '¡Bienvenido, @'+x.username+'!',
                duration: 3000,
                position: 'bot'
            });
            toast.present();
			this.events.publish('test', x);
            this.navCtrl.setRoot(PrincipalPage, {user: x});
            return;
        }
    }

    let toast = this.toastCtrl.create({
        message: 'Usuario y/o contraseña incorrecto',
        duration: 3000,
        position: 'bot'
    });
    toast.present();
    
  }
  
  hide() {
  if(this.hideMe == true){
	this.hideMe = false;
  }
  else{
	this.hideMe = true;
  }
}
  
  ionViewDidEnter() {
	this.menu.swipeEnable(false);
    this.dbFirebase.getClientes().subscribe(logins=>{this.logins=logins;});
  }
  
  ionViewWillLeave() {
    this.menu.swipeEnable(true);
   }
}
