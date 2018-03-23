import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

class Vehiculo{
	public foto:string;
	public marca:string;
	public modelo:string;
	public year:date;
	public fventa:date;
	public precio:number;
	public pvp:number;
	
	
	
}
