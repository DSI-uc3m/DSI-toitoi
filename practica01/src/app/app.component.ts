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
  public plato:string;
  
  public lineas=[];
  public suma:number = 0;
  
  public addLinea()
  {
  	  let priceS= this.plato.substr(this.plato.indexOf('(')+1, this.plato.indexOf('€')-1);
  	  let price = parseFloat(priceS);
  	  this.suma = this.suma + price;
	  this.lineas.push(this.plato);
  }
  
  public delLinea(i)
  {
      console.log(this.lineas[i]);
  	  let priceS= this.lineas[i].substr(this.lineas[i].indexOf('(')+1, this.lineas[i].indexOf('€')-1);
  	  let price = parseFloat(priceS);
  	  this.suma = this.suma - price;
	  this.lineas.splice(i,1);
  	  
  }
}
