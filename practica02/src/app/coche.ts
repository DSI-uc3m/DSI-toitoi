export enum EstadoCoche { BUENO, MALO }

export class Coche {

public marca:string;
public modelo:string;
public foto:string;
public fecha_modelo:Date;
public fecha_venta:Date;
public precio:number;
public estado:EstadoCoche;
public id:number;

public getPVP(){
	return this.precio*1.21;
}



constructor(marca1, modelo1, fecha_modelo1, fecha_venta1, precio1, foto1, estado1, id1){
this.marca = marca1;
this.modelo = modelo1;
this.foto = foto1;
this.fecha_modelo = fecha_modelo1;
this.fecha_venta = fecha_venta1;
this.precio = precio1;
this.estado = estado1;
this.id = id1;
}

}
