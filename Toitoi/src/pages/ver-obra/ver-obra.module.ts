import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerObraPage } from './ver-obra';
import { ComprarObraPage } from '../comprar-obra/comprar-obra';

@NgModule({
  declarations: [
    VerObraPage,
	ComprarObraPage
	
  ],
  imports: [
    IonicPageModule.forChild(VerObraPage),
  ],
   entryComponents: [
  ComprarObraPage,
  
  ],
})
export class VerObraPageModule {}
