import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeArtistaPage } from './home-artista';

@NgModule({
  declarations: [
    HomeArtistaPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeArtistaPage),
  ],
})
export class HomeArtistaPageModule {}
