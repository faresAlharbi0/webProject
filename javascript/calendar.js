const dropicon = document.getElementById("dropicon")
dropicon.addEventListener('click',dropDownMenu);
const mcontainer = document.getElementById("mcontainer");
function dropDownMenu(){
    mcontainer.classList.toggle("is-active")
}
