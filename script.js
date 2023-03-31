const time = document.querySelector('.time');
const dates = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const body = document.querySelector('body');
const name = document.querySelector('.name');
//body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    setTimeout(showTime, 1000);
    time.textContent = currentTime
    showDate();
    showGreeting();
  }
  showTime();
  function showDate() {
    const date = new Date();
    const options = {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC'};
    const currentDate = date.toLocaleDateString('ru-RU', options);
    dates.textContent = currentDate
  }
  
  function showGreeting() {
    const date = new Date();
  const hours = date.getHours();
    const timeOfDay = getTimeOfDay();
    
    function getRandomNum(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); }
    
    getRandomNum(1, 20);
let randomNum = getRandomNum();

function setBg() {
  
  let bgNum = randomNum.padstart(2, "0");
  let BGimage = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${bgNum}.jpg`;
  body.style.backgroundImage = BGimage
  //body.style.backgroundImage = BGimage


 }
setBg()
//function createString(number) {
  //return `${host}/login/oauth/authorize?client_id=${clientId}&scope=${scope}`
//}

createOAuthString('https://github.com', 'abc123', 'repo,user')
function getTimeOfDay(){
  if (hours > 0 && hours < 6)
   return 'Night';
  else if  (hours > 6 && hours < 12)
  return 'Morning';
  else if  (hours > 12 && hours < 18)
  return 'Day';
  else if  (hours > 18 && hours < 24)
  return 'Evening';
}
const greetingText = `Good ${timeOfDay}`;
greeting.textContent = greetingText;
}
function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)
function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage)
//body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/17.jpg')";