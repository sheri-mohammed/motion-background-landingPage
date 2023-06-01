let menu = document.querySelector(".header .toogle-menu");
let closeM = document.querySelector(".header .close");
let nav = document.querySelector(".header nav");
let list = document.querySelector(".header nav ul");
let videos = document.querySelectorAll(".video-sliding video");
let contents = document.querySelectorAll(".landing .content");
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

function execut(arr,element){
    console.log(element)
    arr.forEach((el)=>el.classList.remove("active"));
    arr[element].classList.add("active");
}


const slidNav = function(element){
    execut(dots,element);
    execut(videos,element);
    execut(contents,element);
}

dots.forEach((dot,i)=>{
    dot.addEventListener("click",()=>{
        slidNav(i)
    })
})