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
