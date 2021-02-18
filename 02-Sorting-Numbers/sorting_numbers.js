//insert your pseudocode below
/*
1.Create a list of numbers
2.Assign the list to a variable
3.make the list in order decending or ascending
4.print the result
*/

//insert your code below
var numbers;

function listsGetSortCompare(type, direction) {
  var compareFuncs = {
    "NUMERIC": function(a, b) {
        return Number(a) - Number(b); },
    "TEXT": function(a, b) {
        return a.toString() > b.toString() ? 1 : -1; },
    "IGNORE_CASE": function(a, b) {
        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },
  };
  var compare = compareFuncs[type];
  return function(a, b) { return compare(a, b) * direction; }
}


numbers = [8, 6, 4];

window.alert(numbers.slice().sort(listsGetSortCompare("NUMERIC", 1)));