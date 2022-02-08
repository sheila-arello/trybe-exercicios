const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const Url = "https://api.coincap.io/v2/assets";
const moedas = ['bitcoin', 'binance-coin', 'ethereum', 'polkadot', 'shiba-inu'];

// const fetchCoins = () => {
//   return fetch(Url, requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// };

// const append = (data) => {
//   document.getElementById('nameCripto').innerText = data.name;
//   document.getElementById('priceCripto').innerText = data.priceUsd;
// }

function append(data) {
  console.log(data);
  document.getElementById('criptocontainer').innerHTML = data;
  // const ul = document.querySelector('ul');
  
  // const li = document.createElement('li');
  // const divNome = document.createElement('div');
  // const divPrice = document.createElement('div');

  // divNome.innerHTML = data.name;
  // divPrice.innerHTML = data.priceUsd;

  // li.appendChild(divNome);
  // li.appendChild(divPrice);

  // ul.appendChild(li);
}
// funcao com async/ away
async function fetchCoinsComAsync (moeda) {
  try {
    const Url = `https://api.coincap.io/v2/assets/${moeda}`;
    console.log(Url);
    const response = await fetch(Url, requestOptions);
    const data = await response.json();
    // moedas.forEach((moeda) => {
    //   const dataMoeda = data.find
    //   console.log(data[0][moeda]); // append(data[moeda]));
    // });
    append(data);
  } catch (err) {
    console.log(err);
  }

}

function getMoeda () {
  moedas.forEach((moeda) => fetchCoinsComAsync(moeda));
}
window.onload = () => getMoeda();