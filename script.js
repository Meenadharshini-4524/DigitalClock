//Javascript for switch clock format
const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
  formatSwitchBtn.classList.toggle("active");

  let formatValue = formatSwitchBtn.getAttribute("data-format");

  if (formatValue === "12") {
    formatSwitchBtn.setAttribute("data-format", "24");
  } else {
    formatSwitchBtn.setAttribute("data-format", "12");
  }
});

function clock() {
  //get the time in javascript
  let Hour = document.getElementById("hours");
  let Minutes = document.getElementById("minutes");
  let Seconds = document.getElementById("seconds");
  let Ampm = document.getElementById("ampm");

  //   let hh = document.getElementById("hh");
  //   let mm = document.getElementById("mm");
  //   let ss = document.getElementById("ss");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  //set the time period (AM/PM)

  let a = h >= 12 ? "PM" : "AM";

  //set the 12-hr clock format
  let formatValue = formatSwitchBtn.getAttribute("data-format");
  if (formatValue === "12") {
    h = h > 12 ? h % 12 : h;
  }

  //Add the 0 for the values lower than 10
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  Hour.innerHTML = h + "<br><span>Hours</span>";
  Minutes.innerHTML = m + "<br><span>Minutes</span>";
  Seconds.innerHTML = s + "<br><span>Seconds</span>";
  Ampm.innerHTML = a;

  //get the date in javascript
  let date = document.getElementById("date");
  let day = document.getElementById("day");
  let month = document.getElementById("month");
  let year = document.getElementById("year");

  let dt = new Date().getDate();
  let dy = new Date().getDay();
  let mt = new Date().getMonth();
  let yr = new Date().getFullYear();

  switch (dy) {
    case 0:
      dy = "Sunday";
      break;
    case 1:
      dy = "Monday";
      break;
    case 2:
      dy = "Tueday";
      break;
    case 3:
      dy = "Wednesday";
      break;
    case 4:
      dy = "Thursday";
      break;
    case 5:
      dy = "Friday";
      break;
    case 6:
      dy = "Saturday";
      break;
  }

  dt = dt < 10 ? "0" + dt : dt;

  date.innerHTML = dt + ",";
  day.innerHTML = dy + ",";
  month.innerHTML = mt;
  year.innerHTML = yr;

  let hr_dot = document.querySelector(".hr_dot");
  let min_dot = document.querySelector(".min_dot");
  let sec_dot = document.querySelector(".sec_dot");

  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  //12 hrs clock
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  //60 hrs minutes
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;
  //60 hrs seconds

  hr_dot.style.transform = `rotate(${h * 30}deg)`;
  // 360deg / 12 = 30

  min_dot.style.transform = `rotate(${m * 6}deg)`;
  // 360deg / 60 = 6
  sec_dot.style.transform = `rotate(${s * 6}deg)`;
  // 360deg / 60 = 6
}
let updateClock = setInterval(clock, 1000);

//Javascript for dot menu toggle
const dotmenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");

dotmenuBtn.addEventListener("click", () => {
  dotMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (e.target.id !== "active-menu") dotMenu.classList.remove("active");
});
