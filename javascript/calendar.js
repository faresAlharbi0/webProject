const date = new Date();
const renderCalendar = () =>{
  const lastDate = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate();
const monthDays = document.querySelector(".days")
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
const lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1,0).getDay();
const firstDayIndex = date.getDay();
const nextDays = 7 - lastDayIndex -1;
document.querySelector(".date h1").innerHTML = month[date.getMonth()];
document.querySelector(".date p").innerHTML = new Date().toDateString();
let days = "";
for(let x = firstDayIndex; x>0; x--){
  days += "<div class='prev-date'>"+(prevLastDay-x+1) +"</div>";
}
for(let i =1; i<=lastDate; i++){
  if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
    days += "<div class='today'>"+i+"</div>";
    console.log("was here");
  }else{
    days += "<div>"+i+"</div>";
  }
}
for(let j = 1; j <= nextDays; j++){
  days += "<div class='next-date'>"+j+"</div>";
}
monthDays.innerHTML = days;
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
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
