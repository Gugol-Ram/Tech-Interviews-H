// OPCION LUIS
function HasBalancedBrackets(string) {
  // Your code here:
  const LIBRARY = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  const queue = [];
  for (const char of string) {
    const lastChar = queue[queue.length - 1];
    if (!lastChar || LIBRARY[lastChar] !== char) queue.push(char);
    else queue.pop(char);
  }

  return !queue.length;
}

//COMPLEJIDAD: O:N

// OPCION MAXI
/*
function HasBalancedBrackets(string) {
  // Your code here:
  const stack = [];
  const brackets = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    } else if (char === "}" || char === "]" || char === ")") {
      const bracketApertura = brackets[char];
      if (stack.pop() !== bracketApertura) {
        return false;
      }
    }
  }
  */
//
module.exports = HasBalancedBrackets;

//TO
