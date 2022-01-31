// const getPlanet = () => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   setTimeout(() => {
//     console.log("Returned planet: ", mars);
//   }, 4000);
// };

// getPlanet(); // imprime Marte depois de 4 segundos

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// // crie a função sendMarsTemperature abaixo
// function sendMarsTemperatureSemCallback() {
//   const temperature = getMarsTemperature();
//   setTimeout(() => {
//     console.log(`Mars temperature is: ${temperature} degree Celsius`);
//   }, messageDelay());  
// }
// sendMarsTemperatureSemCallback(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// 5. adicione na função sendMarsTemperature uma callback que contenha as ações a serem tomadas em cima da temperatura.
const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

function sendMarsTemperature(onSucces, onError) {
  const temperature = getMarsTemperature();
  setTimeout(() => {
    const isMsgSent = Math.random() <= 0.6;
    if (isMsgSent) onSucces(temperature)
      else onError("Robot is busy");
  }, messageDelay());  
}

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);

// sendMarsTemperature(messageDelay);
// sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
