// apiScript.js 

const API_URL = 'https://icanhazdadjoke.com/';

const append = (data) => document.getElementById('jokeContainer').innerText = data.joke;

// const fetchJoke = () => {
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };

//   return data = fetch(API_URL, myObject)
//     .then(response => response.json())
//     .then(data => append(data));

// };

const fetchJoke = () => {
  fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data =>
      document.getElementById('jokeContainer').innerText = data.joke
    );
}

window.onload = () => fetchJoke();
