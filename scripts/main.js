/* prices: Number => Number

I want to iterate thru all the objects and get the price for each object. Then I
want to get the average of the objects prices.

Examples
object1 = {price: 16}
object2 = {price: 20}
object3 = {price: 18}
*/

function itemPrice(item){
  return item.price;
}
var prices = items.map(itemPrice);

function AveragePrice(arr){
  return arr.reduce(function(x,y){
    return Math.round(Number(x +y));
  })/arr.length;
}
AveragePrice(prices);

/*
prices : Number => Number
I want to iterate thru all the objects and find the objects whose price is between 14 and 18. filter will be the
function iterator I use get the required results.

Examples:
object-1 = [{price: 20}, => false
            {price: 15}, => true
            {price: 18}, => true
          ]

*/
 function itemsBtw14_18(item){
  if(item.price >= 14 && item.price <= 18) {
    return true;
  } else {
    return false;
  }
}
  var itemList = items.filter(itemsBtw14_18);

  function title(item){
    return item.title;
  }
var titleList = itemList.map(title);
 //console.log(titleList);
/*
currency-code = "string"(item)-argument
I need to iterate thru all the objects and filter on the currency-code to get the type of currency that equals "GBP".

Examples:
object-1 =[{object-1: currency-code: "GBP" } => true
          {object-2: currency-code: "USD"} => false
          {object-3: currency-code: "YIN"} =>false
  ]
*/

function findGBP(item) {
  if(item.currency_code === "GBP") {
    return true;
  } else {
    return false;
  }
};
  var GBPlist = items.filter(findGBP);
 function titleAndPrice(item){
   return item.title + " "+ item.price + "\u00A3"
 }
 var GBPtitlelist = GBPlist.map(titleAndPrice);
 console.log(GBPtitlelist);
/*
item: wood => "string"
 I need to iterate thru every object and get the array of materials. once, I get that array I need to iterate thru that array
 and find the string "wood" then display that object containing that string of "wood".

 Examples:
 object-1 = [{materials:['wood', 'ceramic', 'glass']},
              {materials: ['wood'],
              title: "name of item"}
]
*/
function getWoodItem(item) {
  if(item.materials.indexOf('wood') > -1){
    return true;
  } else {
    return false;
  }
}
var woodList = items.filter(getWoodItem);
var wooditems = woodlist.map(title);

console.log(wooditems);

    //console.log(item.title);


/*
item: materials-array

I need to iterate thru every object and filter on the materials attribute. Then I need to get the length of each object's material attribute
and print the objects whose length of the materials array is greater than 8.

Examples:
object-1 = [{materials:['wood', 'ceramic', 'glass']}, => false
             {materials: ['wood','glass','take', 'up','space','through','hello','bye','adios'], => true
             title: "name of item"}
           ]
*/

 function Morethan8Materials(item) {
  if(item.materials.length >= 8){
    return true;
  }else {
    return false;
  }
};
var Morethan8List = items.filter(Morethan8Materials);
Morethan8List.forEach(function(item){
  console.log(item.title);
  item.materials.forEach(function(mats, x){
    console.log(item.materials[x]);
  });
});
/*
item : 'string'- who made-"i_did"-count
I need to iterate thru every object and find the who_made attribute for each object. Then I need to count how many times the string "I_did"
appears for all the objects.

Examples:
object-1: [{"who_made": "i_did"}, => true
          {"who_made": "someone_else"}, => false
          {"who_made": "i_did"} => true
        ]
*/

function madeBy(item){
  if(item.who_made === 'i_did'){
    return true;
  } else {
    return false;
  }
};
var madebyList = items.filter(madeBy);
console.log(madebyList.length);
