function HasBalancedBrackets(string) {
  // Your code here:
  const validateBrackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let openBrackets = [];
  for (let i = 0; i < string.length; i++) {
    let bracket = string[i];
    if (validateBrackets[bracket]) openBrackets.push(bracket);
    //si validatebracket tiene un valor, pushea. pongo bracket en corchete para que acceda a los valores de cierre( "} ) ]") si dejara solo corchete vacio muestra todo
    else {
      const lastOpen = openBrackets[openBrackets.length - 1];
      if (validateBrackets[lastOpen] === bracket) {
        openBrackets.pop();
      } else return false;
    }
  }
  console.log(openBrackets);
  if (openBrackets.length) return false;
}

//COMPLEJIDAD: O:N

module.exports = HasBalancedBrackets;
