function fearNotLetter(str) {
  let charCode = [];
  let letters = [];
  //let missingLetters = "";
  for (var i = 0; i < str.length; i++) {
    charCode.push(str.charCodeAt(i));
  }

  for (var i = charCode[0]; i <= charCode[charCode.length - 1]; i++) {
    letters.push(String.fromCharCode(i));
  }

  for (var i = 0; i < letters.length; i++) {
    if (str.indexOf(letters[i]) === -1) {
      return letters[i];
    }
  }
  return undefined;
}

console.log(fearNotLetter("stvwx"));
