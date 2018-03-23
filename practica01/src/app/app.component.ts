import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Menú de restaurante';
  
  public txtNombre:string="Pepe";
  public txtApellidos:string="Martin Manso";
  
  private platos:Array<[string,number]>=[['Conejo al brandy',12],['Crema de batatas',5],['Tallarines a la carbonara',8.5],['Entrecot',20]];
  private plato:string;
  
  public lineas=[];
  
  public addLinea()
  {
	  this.lineas.push(this.plato);
  }
  
  public delLinea(i)
  {
	  this.lineas.splice(i,1);
  }
}
