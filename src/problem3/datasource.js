// your code here
import fetch from "node-fetch";
async function getPrices() {
  let response = await fetch("https://static.ngnrs.io/test/prices");
  let data = await response.json();
  data.data.prices.forEach((price) => {
    price.mid = function () {
      return (price.buy + price.sell) / 2;
    };
    price.quote = function () {
      return price.pair.slice(3);
    };
  });
  return data.data.prices;
}
// I added mid and quote as a function to the prices object and returned it, so you can export the method and use it as such:
getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  })
  .catch((error) => {
    console.error(error);
  });
