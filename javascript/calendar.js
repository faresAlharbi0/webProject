const dropicon = document.getElementById("dropicon")
dropicon.addEventListener('click',dropDownMenu);
const mcontainer = document.getElementById("mcontainer");
mcontainer.classList.toggle("is-active")
function dropDownMenu(){
    mcontainer.classList.toggle("is-active")
}
