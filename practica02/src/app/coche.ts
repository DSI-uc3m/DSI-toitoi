export class Coche {

public marca:string;
public modelo:string;
public foto:string;
public fecha_modelo:Date;
public fecha_venta:Date;
public precio:number;
public estado:EstadoCoche;

public number getPVP(){
	return this.precio*1.21;
}

public enum EstadoCoche { BUENO, MALO };

}
