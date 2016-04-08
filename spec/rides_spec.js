var ridesFunction = require('../lib/rides');

describe('Miles', function() {
  
  it('determines if a a child is too short', function() {
    
    var child1 = {
      height: 3,
      name: "Julian",
      age: 3
    };

    var child2 = {
      height: 4,
      name: "Cero",
      age: 4
    };
    var ride1 = {
      minHeight: 3,
      maxHeight: 7
    };

    var ride2 = {
      minHeight: 4,
      maxHeight: 7
    };

    expect(ridesFunction.isTallEnough(child1, ride1)).toEqual(true)
    })
  })