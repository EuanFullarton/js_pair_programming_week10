var assert = require("assert");
var Item = require("../item.js");

describe("Item", function(){

  beforeEach(function() {
    this.item = new Item("Chocolate", 2, true);
  });

  it("should have a name", function(){
    assert.equal("Chocolate", this.item.name);
  });

  it("should have a price", function(){
    assert.equal(2, this.item.price);
  })

  it("should have a boolean value for discount", function(){
    assert.equal(true, this.item.discount);
  })

});