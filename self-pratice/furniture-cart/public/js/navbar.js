//sidebar navigation
const sidebarEl=document.getElementById("sidebar-show1")
const sidebaropenEl= document.getElementById("open-nav-sidebar1")
const sidebarcloseEl=document.getElementById("sidebar-close1")
sidebaropenEl.addEventListener("click",()=>{
   sidebarEl.classList.toggle("sidebar-show1")
})
sidebarcloseEl.addEventListener("click",()=>{
  sidebarEl.classList.toggle("sidebar-show1")
})