import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrincipalPage } from './principal';
import { VerObraPage } from '../ver-obra/ver-obra';

@NgModule({
  declarations: [
    PrincipalPage,
	VerObraPage
  ],
  imports: [
    IonicPageModule.forChild(PrincipalPage),
  ],

  entryComponents: [
  VerObraPage,
  
  ],
})
export class PrincipalPageModule {}
