var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(index) {
  var squared = Math.pow(index.x, 2) + Math.pow(index.y, 2);
  return Math.sqrt(squared);
});

console.log(result)
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);