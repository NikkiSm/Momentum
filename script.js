const time = document.querySelector('.time');
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    setTimeout(showTime, 1000);
    time.textContent = currentTime
  }
  showTime();