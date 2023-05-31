let menu = document.querySelector(".header .toogle-menu");
let closeM = document.querySelector(".header .close");
let nav = document.querySelector(".header nav");
let list = document.querySelector(".header nav ul");
let videos = document.querySelectorAll(".video-sliding video");
let contents = document.querySelectorAll(".landing .content");
console.log(contents)
let dots = document.querySelectorAll(".slider-dots i");



menu.addEventListener("click", ()=>{
    menu.style.display = "none";
    closeM.style.display = "block";
    list.style.display = "flex";
    nav.classList.add("nav-appear");
    list.classList.add("list-appear");

})
closeM.addEventListener("click",()=>{
    menu.style.display = "block";
    closeM.style.display = "none";
    list.style.display = "none";
    nav.classList.remove("nav-appear");
    list.classList.remove("list-appear");
})

var slidNav = function(element){
    dots.forEach((dot)=>dot.classList.remove("active"));
    dots[element].classList.add("active");

    videos.forEach((vid)=>vid.classList.remove("active"));
    videos[element].classList.add("active");

    contents.forEach((content)=>content.classList.remove("active"));
    contents[element].classList.add("active");
}

dots.forEach((dot,i)=>{
    dot.addEventListener("click",()=>{
        slidNav(i)
    })
})