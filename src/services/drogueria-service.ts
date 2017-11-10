import {Con,DBconnection} from './db-connection';
import {Drogueria} from'./common/drogueria';
import {Collection,ObjectID} from 'mongodb';

export class DrogueriaService{
    private get db():Collection<Drogueria>{
        return this.con.db.collection("droguerias");
    }

    constructor(private con: DBconnection){}

    insert(res:Drogueria){
        return this.db.insertOne(res);
    }
    update(id:string, res:Drogueria){
        return this.db.updateOne({_id:new ObjectID(id)},{$set:res});
    }
    delete(id:string){
        return this.db.deleteOne({_id: new ObjectID(id)});
    }
    
    all(skip: number=0, limit:number =0){
        return this.db.find()
        .skip(skip)
        .limit(limit)
        .toArray();
    }
    allByLocation(lon:number,lat:number, km:number=1){
        return this.db.find({
            localizacion:{
                $geoWithin:{
                    $centerSphere:[[lon,lat],km/6378]
                }
            }
        })
            .toArray();
    }

}
export const drogueriaService = new DrogueriaService(Con);