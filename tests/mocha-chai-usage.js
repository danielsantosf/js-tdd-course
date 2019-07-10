//to use chai.expect. There's also should and assert
var expect = require('chai').expect;

describe('Main', function() {
  //hooks make for independent, clean tests


  var arr;

  //runs once before block
  before(function() {
    //begin db connection
    //create a dataset
  });

  //runs once after the block
  after(function() {
    //close db connection
    //wipe dataset
  });

  //runs every time, before EACH block
  beforeEach(function() {
    arr = [1,2,3];
  });

  //runs every time, after EACH block
  afterEach(function() {

  });

  //smoke test: to check whether it has been defined, or its type
  it('should be an array', function(){
    expect(arr).to.be.an('array');
  });

  it('should have a size of 4 when push another value to the array', function(){
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('it should remove the value 3 when using pop', function(){
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should return true when popping value 3', function(){
    expect(arr.pop() === 3).to.be.true;
  });

  it('it should have a size of 2 when popping a value from the array', function(){
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });



});
