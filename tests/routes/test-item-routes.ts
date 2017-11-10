import * as mocha from 'mocha';
import * as superTest from 'supertest';
import { SuperTest, Test } from 'supertest';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import {InsertBody,AvailableUpdateBody} from'../../src/controllers/items/index';
import {Items} from '../../src/services/common/items'
import app from '../../src/app';

describe("Items Route", function(){
    let request:SuperTest<Test>;
    let id:string;
    before(function () {
        chai.should();
        chai.use(chaiAsPromised);
        request = superTest(app);
    });

    it("insert items",function(){
        let item:Items ={
             
                nombre: "acetominofen",
                laboratorio:"genfar",
                precio:2000,
                drogueria:{
                    direccion:"calle1234",
                    nombre:"drogas la rebaja"
                }
            }
         
        return request.post("api/v1/items")
        .set("Content-Type", "application/json")
        .send(item)
        .expect(200)
        .should.eventually.property("body")
        .property("success").true
    });
   
    it.skip("insert items cantidad",function(){
        let item:InsertBody ={
            cantidad:10,
            item:{  
                nombre: "acetominofen",
                laboratorio:"genfar",
                precio:2000,
                drogueria:{
                    direccion:"calle1234",
                    nombre:"drogas la rebaja"
                }
            }
        } 
        return request.post("api/v1/items")
        .set("Content-Type", "application/json")
        .send(item)
        .expect(200)
        .should.eventually.property("body")
        .property("success").true
    });
   
    it("Delete item",function(){
        return request.delete("/api/v1/items/" + id)
        .expect(200)
        .should.eventually.property("body")
        .property("success").true;
    })
});