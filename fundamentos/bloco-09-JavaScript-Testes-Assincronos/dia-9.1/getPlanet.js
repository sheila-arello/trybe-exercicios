const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(() => {
    console.log("Returned planet: ", mars);
  }, 4000);
};

getPlanet(); // imprime Marte depois de 4 segundos

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
// function sendMarsTemperature(callback) {
//   const temperature = getMarsTemperature();
//   setTimeout(() => {
//     console.log(`Mars temperature is: ${temperature} degree Celsius`);
//   }, callback());  
// }
// sendMarsTemperature(messageDelay); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// 5. 
const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...
// crie a função sendMarsTemperature abaixo
function sendMarsTemperature(callback) {
  const temperature = getMarsTemperature();
  setTimeout(() => {
    console.log(`Mars temperature is: ${temperature} degree Celsius`);
  }, callback());  
}

sendMarsTemperature(messageDelay);
sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
