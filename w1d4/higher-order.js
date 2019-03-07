
var words = ["ground", "control", "to", "major", "tom"];

// function map(arr, action) {
//   arr.forEach(function map(arr, index) {
//     console.log(action(arr))
//   })
// }

var map = function(arr, action) {

  var x = arr.map(function(element) {
    return action(element)
  })
  console.log(x)
// for (i = 0; i < arr.length; i ++){
// console.log(action(arr))
// }
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
