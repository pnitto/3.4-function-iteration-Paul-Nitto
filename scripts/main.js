/* prices: Number

*/

var total = 0
items.forEach(function(item) {
  total += item.price;
  //console.log(total);
  averageTotal = (total / items.length).toFixed(2);
});
//console.log(averageTotal);

items.filter(function(item) {
  if(item.price >= 14 && item.price <= 18) {
  //console.log(item.title);
};
});

items.filter(function(item) {
  if(item.currency_code === "GBP") {
    //console.log(item.title + " " + item.price + "\u00A3")
  };
});

items.forEach(function(item) {
  if(item.materials.indexOf('wood') > -1){
    //console.log(item.title);
  };
});

items.forEach(function(item){
  if(item.materials.length >= 8){
    //console.log(item.materials);
  };
});

items.filter(function(item){
  if(item.who_made.indexOf('i_did') > -1) {
    //console.log(item.title.value);
  }
});


/*function Price(prevItem, currentItem) {
  return
  }
  var totalPrice = items;
  var result = items.reduce(Price, 0);
  console.log(result);*/
