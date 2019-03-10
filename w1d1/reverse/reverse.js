var args = process.argv.slice(2)

function reverse(input) {
 
  for (i = 0; i < input.length; i++) {
    var newWord = ''
  for (j = input[i].length - 1; j >= 0; j--) {
    newWord += input[i][j];
  }
  console.log(newWord)
}
}

reverse(args);
