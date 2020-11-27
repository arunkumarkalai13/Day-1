function gethour(hour) {
  if (hour < 10) {
    let s = "0" + hour;
    return s;
  } else {
    if (hour > 12) {
      let st = hour - 12;
      return st;
    } else {
      return hour;
    }
  }
}
function countdown() {
    let newyear = new Date(`December 25 2020 12:00:00 `).getTime();
  let current = new Date().getTime();
  let diff = newyear - current;
   let seconds = 1000;
  let min = seconds * 60;
  let h = min * 60;
  let d = h * 24;
  let day = Math.floor(diff / d);
  let hour = Math.floor((diff % d) / h);
  let minutes = Math.floor((diff % h) / min);
  let sec = Math.floor((diff % min) / seconds);

  document.querySelector(
    "h1"
  ).textContent = `${day} : ${hour} : ${minutes} : ${sec}`;
  document.querySelector(
    "h4"
  ).textContent = "  Day  : Hour : Minutes : Seconds";
}
setInterval(() => {
  countdown();
}, 1000);