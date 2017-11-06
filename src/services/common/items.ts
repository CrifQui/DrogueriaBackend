export class DrogueriaItem {
    _id:string;
    nombre:string;
    direccion:string;

}

export class AvailableItem{
    numero:number;
    disponible:boolean;
}
export class Items{
    _id:string;
    nombre:string;
    laboratorio:string;
    presentacion:string;
    precio:number;
    impuesto:number;
    total:number;
    drogueria:DrogueriaItem;
    cantidad?:AvailableItem[];
}
