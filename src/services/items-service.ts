import {Con,DBconnection} from'./db-connection';
import {Collection,ObjectID} from'mongodb';
import{Items,AvailableItem} from './common/items';

export class ItemService{
    get db(): Collection<Items>{
        return this.con.db.collection("items");

    }

    constructor(private con:DBconnection){}
     insert(item:Items){
         return this.db.insertOne(item)
     }

    update(id:string, item:Items){
        return this.db.updateOne({_id: new ObjectID(id)},
        {$set: item});

    }
    delete(id:string){
        return this.db.deleteOne({_id:new ObjectID(id)})
    }

    allByDrogueria(id:string){
        return this.db.find({
            "drogueria._id": id           
        })
        .toArray();
    }
    allByPresentations(presentations: string[]){
        return this.db.find({
            presentations:{
                $in: presentations
            }
        }).toArray();
    }
    
    deleteAllPresentations(id: string){
        return this.db.updateOne({_id:new ObjectID(id)},
        {$set:{ presentations:[]}});
    }
    addPesentation(id:string,presentation:string){
        return this.db.updateOne({_id:new ObjectID(id)},
        {$push:{presentations: presentation}});
    }

    insertWithCantidad(item:Items, numberItems: number) {
        let cantidad: AvailableItem[] = [];
        for (let i = 0; i < numberItems; i++) {
            cantidad.push({ numero: i + 1, available:true })
        }
        item.cantidad = cantidad;
        return this.db.insertOne(item);
    }
    itemsByAvailable(id:string){
        return this.db.aggregate([
            {$match:{_id: new ObjectID(id)}},
            {$project:{items: 1}},
            {$unwind:"$cantidad"},
            {$match:{"cantidad.available":true}},
            {$group:{_id: "$_id", cantidad:{$push:"$cantidad"}}}
        ])
        .toArray()
        .then(res=>{
            return Promise.resolve(res[0].cantidad)
        })
    }

    availableUpdate(id:string, cantidad:number, available:boolean){
        return this.db.updateOne({_id:new ObjectID(id),"cantidad.numero":cantidad},
        {$set:{
            "cantidad.$.available":available
        }});
    }
    
    
}

export const itemService= new ItemService(Con);