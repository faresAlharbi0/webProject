open = true;
animating = false;
const tl = gsap.timeline().from(".is-active",{yPercent:-50,opacity:0,});
const tl2 = gsap.timeline().fromTo(".is-active",{opacity:1},{opacity:0,duration: 0.3});
const dropicon = document.getElementById("dropicon")
const mcontainer = document.getElementById("mcontainer");
mcontainer.classList.toggle("is-active");
dropicon.addEventListener('click',dropDownMenu);
//works here//
function dropDownMenu(){
    if(open === true){
        mcontainer.classList.toggle("is-active")
        open = false;
        //doesn't work here//
        if(!tl.isActive() && !tl2.isActive()){
            tl.play(0);
        }
        console.log(1);
        return;
    } 
    if(open === false){
        if((!tl.isActive()) && (!tl2.isActive())){
            tl2.play(0);
        }
        open = true;
        console.log(2);
        setTimeout(()=>mcontainer.classList.toggle("is-active"),1000);
        return;
    }
}
