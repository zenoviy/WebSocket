var assert = require('assert');
var operations = require('../business/app methods');

  describe('Array', function() {
    describe('#indexOf()', function() {
      it('should return -1 when the value is not present', function() {
        assert.equal([1, 2, 3].indexOf(4), -1);
      });
    });
  });

  describe('test for add elements', function() {
    let result = operations.add(7, 5), expect = 12;
    it('should return 12', function(){
      assert.equal(result, expect)
      /*if(expect !== result){
        throw  Error(`Expected ${result}, but got ${expect}`);
      }*/
    })
  })
  it('try to multiply numbers', function(){
    let expectation = 15;
    let result = operations.multiply(3,5);
    if(result !== expectation){
      throw  Error(`Expected ${expectedResult}, but got ${result}`);
    }
  })
  describe('test business logic', function(){
    it('test compare array', function(){
      const object1 = [1,2,3,4,5], object2 = [4,5,9,34, 23];
      let res = operations.compare(object1, object2)
    })
    it('test compare text', function(){
      const object1 = "test", object2 = "world";
      let res = operations.compare(object1, object2)
    })
    it('test compare large data', function(){
      const object1 = [{
        name:"test",
        age:33,
        possition:"developer",
        details: {
          livingPlace: "LA",
          job: {
            company: "facebook",
            revenue: 3500
          }
        }
      },{
        name:"John",
        age:26,
        possition:"PM",
        details: {
          livingPlace: "LA",
          job: {
            company: "facebook",
            revenue: 3500
          }
        }
      }], object2 = [{
        name:"Sarah",
        age:30,
        possition:"HR",
        details: {
          livingPlace: "Lviv",
          job: {
            company: "SoftServe",
            revenue: 1500
          }
        }
      }];
      let res = operations.compare(object1, object2)
    })
    describe('unfunctional testing', function(){
      it('test compare boolean', function(){
        const object1 = false, object2 = true;
        let res = operations.compare(object1, object2)
      })
      it('test compare undefined', function(){
        const object1 = undefined, object2 = undefined;
        let res = operations.compare(object1, object2)
      })
      it('test compare function', function(){
        const object1 = ()=>{}, object2 = ()=>{};
        let res = operations.compare(object1, object2)
      })
    })
  })




