function MaxValue(shares) {
  // Your code here:
  console.log(shares);

  let maxProfit = -Infinity;

  for (let i = 0; i < shares.length - 1; i++) {
    const buy = shares[i];
    console.log(buy);

    for (let j = 0; j < shares.length; j++) {
      const sell = shares[j];
      console.log(sell);

      const actualProfit = sell - buy;
      console.log(actualProfit);

      if (actualProfit > maxProfit) maxProfit = actualProfit;
      console.log(maxProfit);
    }
  }
  return maxProfit;
}

module.exports = MaxValue;

console.log(MaxValue([4, 3, 2, 5, 11]));

// COMPLEJIDAD N^2, ya que lo tengo que iterar 2 veces. pero se puede bajar la complejidad

// for (let i = 0; i < shares.length; i++) {
//   console.log(shares[i]);

//   for (let j = 0; j < shares.length; j++) {
//     console.log(shares[j]);
//   }
// }
