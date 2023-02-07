const date = new Date();
const lastDate = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate();
const monthDays = document.querySelector(".days")
const month = [
  "January",
  "February",
  "April",
  "March",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
const firstDayIndex = date.getDay();
document.querySelector(".date h1").innerHTML = month[date.getMonth()];
document.querySelector(".date p").innerHTML = date.toDateString();
let days = "";
for(let x = firstDayIndex +1; x>0; x--){
  days += "<div class='prev-date'>"+(prevLastDay-x+1) +"</div>";
}
for(let i =1; i<=lastDate; i++){
  days += "<div>"+i+"</div>";
}
monthDays.innerHTML = days;
//drop menue animation
const dropicon = document.getElementById("dropicon");
dropicon.addEventListener("click", dropDownMenu);
const mcontainer = document.getElementById("mcontainer");
const tl = gsap.timeline({
    reversed: true,
    paused: true,
    defaults: {
      duration: 1
    }
  });
  tl.set(mcontainer, { autoAlpha: 1 });
  tl.to(mcontainer, { height: "100%" });
  function dropDownMenu() {
    // play or reverse the timeline
    tl.reversed() ? tl.play() : tl.reverse();
  }
