import { Component } from '@angular/core';
import { Coche } from './coche';
import { EstadoCoche } from './coche';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Minipráctica 02';
  
  public EstadoCoche:any = EstadoCoche;
  
  public coches:Array<Coche>=[new Coche('dacia', 'sandero', new Date(2007, 10, 1), new Date (2018, 3, 1), 5000, '', EstadoCoche.BUENO),
  new Coche('opel', 'corsa', new Date(2002, 11, 14), new Date (2018, 3, 6), 1200, '', EstadoCoche.MALO),
  new Coche('dacia', 'logan', new Date(2005, 2, 14), new Date (2018, 3, 1), 3340, '', EstadoCoche.MALO),
  new Coche('citroen', 'xsara picasso', new Date(2001, 1, 30), new Date (2018, 1, 3), 2350, '', EstadoCoche.BUENO)]
}


