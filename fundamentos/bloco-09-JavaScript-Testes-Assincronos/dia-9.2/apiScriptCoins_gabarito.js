
// api.js
const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}

const setCoins = async () => {
  const coins = await fetchCoins();

  const coinsList = document.getElementById('coins-list');

  coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');

      newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;

      coinsList.appendChild(newLi);
    });
}

// Nessa solução utilizamos a propriedade `rank` da moeda para fazer o filtro das 10 primeiras.
// ou
// Outra soluçao

// const setCoins = async () => {
//   const coins = await fetchCoins();

//   const coinsList = document.getElementById('coins-list');

//   coins
//     .filter((_, index) => index < 10)
//     .forEach((coin) => {
//       const newLi = document.createElement('li');

//       newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;

//       coinsList.appendChild(newLi);
//     });
// }

window.onload = () => setCoins();