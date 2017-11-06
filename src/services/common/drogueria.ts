export class Location{
    type:string;
    coordinates:number[];
}

export class Drogueria{
    _id:string;
    nombre:string;
    direccion:string;
    contacto:string;
    imagen:string;
    localizacion:Location;    
}
