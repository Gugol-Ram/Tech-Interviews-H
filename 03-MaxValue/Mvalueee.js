function MaxValue(shares) {
  // Your code here:
  // opcion 1
  // console.log(shares);

  // let maxProfit = -Infinity;

  // for (let i = 0; i < shares.length - 1; i++) {
  //   const buy = shares[i];
  //   console.log(buy);

  //   for (let j = 0; j < shares.length; j++) {
  //     const sell = shares[j];
  //     console.log(sell);

  //     const actualProfit = shares[j] - shares[i]; //sell - buy
  //     console.log(actualProfit);

  //     if (actualProfit > maxProfit) maxProfit = actualProfit;
  //     console.log(maxProfit);
  //   }
  // }
  // return maxProfit;

  //complejidad: O(n^2)

  // Opcion 2
  let maxProfit = -Infinity;
  let minValue = shares[0];

  for (let i = 0; i < shares.length - 1; i++) {
    const sell = shares[i];
    console.log(sell);

    const actualProfit = sell - minValue;

    if (actualProfit > maxProfit) maxProfit = actualProfit;

    if (sell < minValue) minValue = sell;
  }
  return maxProfit;

  //compeljidad: O(n)
}

module.exports = MaxValue;

console.log(MaxValue([4, 3, 2, 5, 11]));
