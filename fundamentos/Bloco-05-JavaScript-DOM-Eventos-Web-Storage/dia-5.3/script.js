function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercicio 1
// Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione 
// como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão 
// no array pois representam respectivamente Domingo e Segunda-feira.
let fridaysArray = [];
const corLegenda = 'DeepPink';

function createDaysofDez() {
  let dezDaysList = [29, 30];
  const daysList = document.querySelector('#days');

  for (let dia = 1; dia <= 31; dia++){
    dezDaysList.push(dia);    
  }
  for (let day of dezDaysList){
    let dayElem = document.createElement('li');
    dayElem.innerHTML = day;
    dayElem.className = "day";
  // Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também 
  // a classe holiday . Ex: <li class="day holiday">24</li>
  if (day === 24 || day === 25 || day === 31){
    dayElem.classList.add("holiday");
    }
    if (day === 4 || day === 11 || day === 18 || day === 25){
      fridaysArray.push(day);
      dayElem.classList.add("friday");
    }
    daysList.appendChild(dayElem);
  }
}
createDaysofDez();

// Exercicio 2
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createButtonFeriados (feriados){
  const button = document.createElement('button');
  button.id = "btn-holiday";
  button.innerText = feriados;
  document.querySelector('.buttons-container').appendChild(button);
}

createButtonFeriados('Feriados');

//Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
function clickDisplayFeriados (){
  const button = document.getElementById('btn-holiday');
  const holidayDays = document.querySelectorAll('.holiday');
  const novaCor = 'red';
  const semFundo = 'rgb(238,238,238)';

  button.addEventListener('click', function() {   
    for (let index = 0; index < holidayDays.length; index += 1) {
      if (holidayDays[index].style.backgroundColor === novaCor){        
        holidayDays[index].style.backgroundColor = semFundo;
      } else {
        holidayDays[index].style.backgroundColor = novaCor;
      }
    }
  })
}

clickDisplayFeriados();

function createButtonSextas (buttonName){
  const button = document.createElement('button');
  button.id = "btn-friday";
  button.innerText = buttonName;
  document.querySelector('.buttons-container').appendChild(button);
}

createButtonSextas('Sexta-Feira');

function clickDisplaySextas (){
  const button = document.getElementById('btn-friday');
  const fridayDays = document.querySelectorAll('.friday');
  const sextou = 'Sextou!';

  button.addEventListener('click', function() {
    for (let index = 0; index < fridayDays.length; index += 1) {
      if (fridayDays[index].innerText === sextou){        
        fridayDays[index].innerText = fridaysArray[index];
      } else {
        fridayDays[index].innerText = sextou;
      }
    }
  })
}

clickDisplaySextas();

function zoomDays(){
  const dezDays = document.querySelectorAll('.day');

  for (let day of dezDays) {
    day.addEventListener('mouseover', function(e){
      e.target.style.fontSize = '36px';
      e.target.style.fontWeigth = '500';
    })
  }

  for (let day of dezDays) {
    day.addEventListener('mouseout', function(e){
      e.target.style.fontSize = '20px';
      e.target.style.fontWeigth = '200';    
    })
  }
}

zoomDays();

function addTask (taskName) {
  const myTask = document.querySelector('.my-tasks');
  const newTask = document.createElement('span');
  newTask.innerHTML = taskName;
  myTask.appendChild(newTask);  
}

addTask('Projeto Bonus 1 e 2');

function legenda (cor) {
  const myTask = document.querySelector('.my-tasks');
  const legTask = document.createElement('div');
  legTask.className = 'task';
  legTask.style.backgroundColor = cor;
  myTask.appendChild(legTask);  
}

legenda(corLegenda);

function selectTask (){
  const task = document.querySelector('.task');
  task.addEventListener('click', function() {
    if (task.classList.contains('selected')){        
      task.classList.remove('selected');
    } else {
      task.classList.add('selected');
    }
  })
}

selectTask();

function taskDays(cor){
  const dezDays = document.querySelectorAll('.day');

  for (let day of dezDays) {
    day.addEventListener('click', function(e){
      const task = document.querySelector('.task');
      if (task.classList.contains('selected')){        
        e.target.style.color = cor;
      } else {
        e.target.style.color = 'rgb(119,119,119)';
      }
    })
  }
}

taskDays(corLegenda);

function adicionaCompromisso(){
  const compromisso = document.getElementById('task-input').value;
  if (compromisso !== '') {
    const tasksList = document.querySelector('.task-list');
    const newTask = document.createElement('li');
    newTask.innerText = compromisso;
    tasksList.appendChild(newTask);
  } else {
    alert('Inserir compromisso antes de clicar');
  }
}


function btnAdicionaCompromisso(){
  const btnAdd = document.getElementById('btn-add');
  btnAdd.addEventListener('click', adicionaCompromisso);
}

btnAdicionaCompromisso();

function keyPressCompromisso(){
  const keyTaskInput = document.getElementById('task-input');
  keyTaskInput.addEventListener('keypress', function(event){
    const key = event.key;
    // Se for a tecla Enter, adiciona o compromisso
    if (key === 'Enter'){
      adicionaCompromisso();
    }
  });
}

keyPressCompromisso();  