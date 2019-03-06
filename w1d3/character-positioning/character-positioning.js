function characterPosition(phrase) {
  var newPhrase = phrase.split(' ').join('')

  var output = {}

for (i = 0; i < newPhrase.length; i++) {
  if (!output[newPhrase[i]]) {
    output[newPhrase[i]] = [i]
  } else {
    output[newPhrase[i]].push([i]);
  }
}
return output
}



console.log(characterPosition("lighthouse in the house"));