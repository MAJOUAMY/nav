let menu=document.querySelector(".menu-icon")
// i forgot a dot in the queryselctor
let nav=document.querySelector('.nav')
menu.onclick=()=>{
    menu.classList.toggle("active")
    nav.classList.toggle("show")

}