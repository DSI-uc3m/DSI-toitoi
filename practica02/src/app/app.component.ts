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
  public filtro;
  
  public coches:Array<Coche>=[new Coche('dacia', 'sandero', new Date(2007, 10, 1), new Date (2018, 3, 1), 5000, 'sandero.jpg', EstadoCoche.BUENO, 0),
  new Coche('opel', 'corsa', new Date(2002, 11, 14), new Date (2018, 3, 6), 1200, '', EstadoCoche.MALO, 1),
  new Coche('dacia', 'logan', new Date(2005, 2, 14), new Date (2018, 3, 1), 3340, '', EstadoCoche.MALO, 2),
  new Coche('citroen', 'xsara picasso', new Date(2001, 1, 30), new Date (2018, 1, 3), 2350, '', EstadoCoche.BUENO, 3)]
  
  public filtrados = [];
  
  
  ngOnInit(){
  	for(let i = 0; i < this.coches.length; i++)
  	this.filtrados.push(this.coches[i]);
  	}
  
  //TODO: Solucionar el tema de los índices
  public rebajar(i){
	this.coches[i].precio = this.coches[i].precio*0.9;
}

  public vendido(i){
	this.coches.splice(i, 1);
}

  //TODO: Solucionar que se muestren los que EMPIEZAN por ese substring en lugar de los que lo contienen
  public getFiltrados(){
  
  	if (this.filtro == null) return this.filtrados;
  
  	for(let x = 0; x < this.coches.length; x++){
  		if(this.coches[x].marca.includes(this.filtro) && this.filtrados.indexOf(this.coches[x]) == -1){
  			this.filtrados.push(this.coches[x]);
  		}
  		
  		if(!this.coches[x].marca.includes(this.filtro) && this.filtrados.indexOf(this.coches[x]) != -1){
  			this.filtrados.splice(this.filtrados.indexOf(this.coches[x]));
  		}
  		
  		
  	}
  	return this.filtrados;
  }
}


