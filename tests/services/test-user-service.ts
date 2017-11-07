import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as mocha from 'mocha';

import { DBconnection } from '../../src/services/db-connection';
import { UserService } from '../../src/services/user-service';

describe("User Service", function () {

  let db: DBconnection;
  let service: UserService;
  let user = {
    nombre: "Cristian",
    apellido:"Quinayas",
    celular: "301",
    email: "dario@email.com",
    password: "123"
  };

  before(function (done) {
    chai.should();
    chai.use(chaiAsPromised);

    db = new DBconnection({
      host: "mongodb://localhost",
      port: 27017,
      database: "droguertiaTest"
    }, ()=> {
      
      service = new UserService(db);
      done();
    });
  });

  it("Signin", function () {
    return service.singin(user)
      .should.eventually.property("insertedCount").equal(1);

  });

  it("Signin with existing user", function () {
    return service.singin(user)
      .should.eventually.rejected
  });

  it("Login", function () {
    return service.login(user.email, user.password)
      .should.eventually.not.null;
  });

  it("Incorrect Login", function(){
    return service.login("dasdasdas", "123123")
      .should.eventually.null;
  });

  after(function(done){
    db.db.dropCollection("users",function(err){
      if(err) done(err)
      else{
        db.db.close();
        done();
      }
    });
    
  });


});

