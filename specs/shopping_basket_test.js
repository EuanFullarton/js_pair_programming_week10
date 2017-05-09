var assert = require("assert");
var ShoppingBasket = require("../shopping_basket.js");
var Item = require("../item.js");

describe("Shopping Basket", function(){

  beforeEach(function() {
    this.shopping_basket = new ShoppingBasket([], 0, false);
    this.item1 = new Item("Chocolate", 2, true);
    this.item2 = new Item("Crisps", 1, false);
    this.discount_shopping_basket = new ShoppingBasket([], 0, true);
  });

  it("should start empty", function(){
    assert.equal(0, this.shopping_basket.items);
  });

  it("should start without a total_price", function(){
    assert.equal(0, this.shopping_basket.total_price);
  });

  it("should be able to add items", function(){
    this.shopping_basket.addItem(this.item1);
    assert.equal(1, this.shopping_basket.items.length);
  });

  it("should be able to remove items", function(){
    this.shopping_basket.addItem(this.item1);
    this.shopping_basket.addItem(this.item2);
    assert.equal(2, this.shopping_basket.items.length);
    this.shopping_basket.removeItem(this.item1);
    assert.equal(1, this.shopping_basket.items.length);
  });

  it("should be able to calculate total", function(){
    this.shopping_basket.addItem(this.item1);
    this.shopping_basket.addItem(this.item2);
    assert.equal(3, this.shopping_basket.calculateTotal());
  });

  it("should be able to apply 10% discount", function(){
    this.shopping_basket.addItem(this.item1);
    this.shopping_basket.addItem(this.item2);
    this.shopping_basket.calculateTotal();
    this.shopping_basket.tenPercentDiscount();
    assert.equal(2.7, this.shopping_basket.total_price);
  });

  it("should be able to apply 5% discount if has a loyalty card", function(){
    //no loyalty card
    this.shopping_basket.addItem(this.item1);
    this.shopping_basket.addItem(this.item2);
    this.shopping_basket.calculateTotal();
    this.shopping_basket.fivePercentDiscount();
    assert.equal(3, this.shopping_basket.total_price);
    //with loyalty card
    this.discount_shopping_basket.addItem(this.item1);
    this.discount_shopping_basket.addItem(this.item2);
    this.discount_shopping_basket.calculateTotal();
    this.discount_shopping_basket.fivePercentDiscount();
    assert.equal(2.85, this.discount_shopping_basket.total_price);
  });




});