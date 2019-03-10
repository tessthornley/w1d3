var countdownGenerator = function (x) {
  /* your code here */
  var number = x

  return function(){  
  if (number >= 1) {
    console.log('T-minus ' + number)
  } else if (number === 0) {
    console.log('Blast Off!')
  } else {
    console.log('Rockets already gone, bub!')
  }
  number --
}
};

var countdown = countdownGenerator(3);

countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
