/* prices: Number => Number

I want to iterate thru all the objects and get the price for each object. Then I
want to get the average of the objects prices.

Examples
object1 = {price: 16}
object2 = {price: 20}
object3 = {price: 18}
*/

var total = 0
items.forEach(function(item) {
  total += item.price;
  //console.log(total);
  averageTotal = (total / items.length).toFixed(2);
});
//console.log(averageTotal);

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
items.filter(function(item) {
  if(item.price >= 14 && item.price <= 18) {
  //console.log(item.title);
};
});

/*
currency-code = "string"(item)-argument
I need to iterate thru all the objects and filter on the currency-code to get the type of currency that equals "GBP".

Examples:
object-1 =[{object-1: currency-code: "GBP" } => true
          {object-2: currency-code: "USD"} => false
          {object-3: currency-code: "YIN"} =>false
  ]
*/

items.filter(function(item) {
  if(item.currency_code === "GBP") {
    //console.log(item.title + " " + item.price + "\u00A3")
  };
});
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

items.forEach(function(item) {
  if(item.materials.indexOf('wood') > -1){
    //console.log(item.title);
  };
});

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

items.forEach(function(item){
  if(item.materials.length >= 8){
    //console.log(item.materials);
  };
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

items.filter(function(item){
  if(item.who_made.indexOf('i_did') > -1) {
    //console.log(item.title.value);
  }
});
