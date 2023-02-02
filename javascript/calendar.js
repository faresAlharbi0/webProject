open = true;
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
  // Make the element visable, read more about FOUC https://greensock.com/fouc/
  tl.set(mcontainer, { autoAlpha: 1 });
  tl.to(mcontainer, { height: "100%" });
  function dropDownMenu() {
    if (open === true) {
      mcontainer.classList.toggle("is-active");
      open = false;
      //doesn't work here//
      // tl.to(mcontainer,{height:"100%"}, 0);
    }
    if (open === false) {
      // tl.to(mcontainer, { height: "0" }, "<");
      open = true;
    }
    // play or reverse the timeline
    tl.reversed() ? tl.play() : tl.reverse();
  }
