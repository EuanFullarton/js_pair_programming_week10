var ShoppingBasket = function(items, total_price, discount_card){
  this.items = items;
  this.total_price = total_price;
  this.discount_card = discount_card;
};

ShoppingBasket.prototype = {
  addItem: function(item){
    this.items.push(item);
  },

  removeItem: function(item){
    var itemIndex = this.items.indexOf(item);

    if (this.items.length > 0){
      this.items.splice(itemIndex, 1);
    }
    else{
      return "Shopping basket is empty!";
    }
  },

  calculateTotal: function(){ 
     var new_total = 0;
    for (this.item of this.items){
      new_total += this.item.price;
    }

    this.total_price = new_total;

    return this.total_price;
  },


  tenPercentDiscount: function(){
    this.total_price = (this.total_price * 0.9);
    return this.total_price;
  },

  fivePercentDiscount: function(){
    if (this.discount_card === true){
      this.total_price = Math.ceil((this.total_price * 0.95) * 100) / 100;
      return this.total_price;
    }
  }



};

module.exports = ShoppingBasket;