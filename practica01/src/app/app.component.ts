import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Aplicación ANGULAR - Ejemplo 2';
  
  public txtNombre:string="Pepe";
  public txtApellidos:string="Martin Manso";
  
  private platos:Array<[string,number]>=[['Conejo al brandy',12],['Crema de batatas',5],['Tallarines a la carbonara',8.5],['Entrecot',20]];
  public cod_color:Array<[string,string]>;
  public cod_color2=0;
  
  public lineas=['Esto es una linea prueba'];
  
  public addLinea()
  {
	  this.lineas.push(this.cod_color[2]);
  }
  
  public delLinea(i)
  {
	  this.lineas.splice(i,1);
  }
}
