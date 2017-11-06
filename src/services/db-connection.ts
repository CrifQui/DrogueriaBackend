import {config} from '../config/global';
import  {Db,MongoClient} from 'mongodb';

export class DBconnection{

    db:Db;

    constructor(configDB:any, callback:()=>void = null){
        const connection = configDB.host
        +":"+ configDB.port
        +"/"+ configDB.database;

        MongoClient.connect(connection)
        .then(db=>{
            this.db=db;
            db.collection("droguerias").createIndex({localizacion:"2dsphere"});
            if(callback) callback();
        }).catch(err => console.log(err));
    }
}

export const Con = new DBconnection(config.database,()=>{});