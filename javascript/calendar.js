open = true;
const tl = gsap.timeline({duration: 1});
const dropicon = document.getElementById("dropicon")
dropicon.addEventListener('click',dropDownMenu);
const mcontainer = document.getElementById("mcontainer");
//works here//
tl.to(mcontainer,{height:"100%"}, 0);
function dropDownMenu(){
    if(open === true){
        mcontainer.classList.toggle("is-active");
        open = false;
        //doesn't work here//
        tl.to(mcontainer,{height:"100%"}, 0);
    }
    if(open === false){
        tl.to(mcontainer,{height:"0"}, "<");
        open = true;
    }

}
