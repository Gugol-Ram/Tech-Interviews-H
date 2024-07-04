function HasBalancedBrackets(string) {
  // Your code here:
  console.log(string);
  const validOpeningBrackets = ["{", "[", "("];
  const validClosingBrackets = ["}", "]", ")"];

  let openBrackets = []; //array vacio para ir pusheando los opening brackets
  console.log(openBrackets);
  let closeBrackets = []; //array vacio para ir pusheando los closing brackets

  for (let i = 0; i < string.length; i++) {
    const bracket = string[i];
    console.log(bracket);

    if (validOpeningBrackets.includes(bracket)) {
      console.log(bracket);
      //va entrando solo a los brackets de apertura
      openBrackets.push(bracket); //aca mando esos bracket al array
    }
    if (validClosingBrackets.includes(bracket)) {
      console.log(bracket);
      // closeBrackets.push(bracket)
      const i = validClosingBrackets.indexOf(bracket);
      const brother = validOpeningBrackets[i];
      console.log(brother);
      const lastOpen = openBrackets[openBrackets.length - 1]; //estoy agarrando el ultimo indice
      console.log(lastOpen);

      if (lastOpen === brother) {
        openBrackets.pop;
      } else return false;
    }
  }
  if (!openBrackets.length) return true;
}

module.exports = HasBalancedBrackets;

//complejidad O:

console.log(HasBalancedBrackets("{[]()}"));
console.log(HasBalancedBrackets("{ [ ( ] ) }"));
console.log(HasBalancedBrackets("{ [ ] ) }"));
console.log(HasBalancedBrackets("{ [ }"));
console.log(HasBalancedBrackets("{ [ ( [ { ( )[ ]{ } } ] ) ] }"));
