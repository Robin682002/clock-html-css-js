function showTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let timeStr = "";
  timeStr += hours < 10 ? "0" + hours : hours;
  timeStr += ":";
  timeStr += minutes < 10 ? "0" + minutes : minutes;
  timeStr += ":";
  timeStr += seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("clock").textContent = timeStr;
}

setInterval(showTime, 1000); // Update the clock every second