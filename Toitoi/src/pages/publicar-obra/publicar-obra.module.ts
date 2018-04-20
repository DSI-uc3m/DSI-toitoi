import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicarObraPage } from './publicar-obra';

@NgModule({
  declarations: [
    PublicarObraPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicarObraPage),
  ],
})
export class PublicarObraPageModule {}
