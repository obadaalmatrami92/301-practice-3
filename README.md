# 301-practice-3

#question #1
How long is the array returned by .map()? .filter()?

.map() Basically is takes 2 arguments, a callback and an optional context (will be considered as this in the callback) which I did not use in the previous example. The callback runs for each value in the array and returns each new value in the resulting array.

.filter() Basically, if the callback function returns true, the current element will be in the resulting array. If it returns false, it won’t be.

#question #2
What does the following code do:
$('button#primary').on('click', function() {
  placeOrder(shoppingCartItems);
});
it run the function if the click on the button id primary





#question #3 
Write a function that takes an array of names as an argument and outputs each name in uppercase to the console.

names = ['obada','ibrahim','hamza','laith'];
var namesupper = str.map (function toUpper (names){
return names.toUpperCase();
});
console.log("array names" , names);

