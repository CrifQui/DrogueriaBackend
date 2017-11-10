import * as chai from 'chai' ;
import * as chaiAsPromised from'chai-as-promised';
import * as mocha from 'mocha';

import{DBconnection} from '../../src/services/db-connection';
import{DrogueriaService} from '../../src/services/drogueria-service';
import {Drogueria,Location} from '../../src/services/common/drogueria';
describe("Drogueria Service", function(){
    let db:DBconnection;
    let service:DrogueriaService;
    let drogueria:Drogueria = {
        nombre:"Drogas La Rebaja",
        direccion:"calle123",
        contacto:"23435",
        imagen:"http://",
        localizacion:{
           type:"Point",
           coordinates:[-76.59766137599945,
            2.4531361343614724]
        }  
    }
    let lon:number=-76.598183 ;
    let lat:number=2.452403 ;
    let km:number= 1;

    before(function(done){
        chai.should();
        chai.use(chaiAsPromised);
        db=new DBconnection({
            host:"mongodb://localhost",
            port:27017,
            database: "drogueriaTest"
        },()=>{
            service = new DrogueriaService(db);
            done();
        });
    });

    it("Get empty", function(){
        return service.all().should.eventually.to.deep.equal([]);
    });
    it("Insert",function(){
        return service.insert(drogueria).should.eventually.not.null;
    });
    it("Get all", function(){
        return service.all().should.eventually.to.have.lengthOf(1);
    });
    it("Get by Location",function(){
        return service.allByLocation(lon,lat,km).should.eventually.lengthOf(1);
    });
    it("Get empty Location",function(){
        return service.allByLocation(0.234,0.34,1).should.eventually.lengthOf(0);
    });
    it("Delete drogueria",function(){
        return service.delete(drogueria._id).should.eventually.not.null;
    });

    after(function(done){
        db.db.dropCollection("droguerias",function(err){
            if(err) done(err)
            else{
                db.db.close();
                done();
            }
        });
    });
});