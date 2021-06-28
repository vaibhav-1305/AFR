const hamMenu = document.querySelector('.ham');
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');
const navMenu = document.querySelector('.nav-menu');
const ddList = document.querySelectorAll('.dd');
const aboutdropdownList = document.querySelector('.about-dd');
const carsdropdownList = document.querySelector('.cars-dd');
const electric=document.querySelector(".electric");
const electricDD=document.querySelector(".electric-dd");
// electric.addEventListener("mouseover",function(){
//     electricDD.classList.toggle("click");
// })
//click events on the navbar
hamMenu.addEventListener('click', function () {
    line2.classList.toggle('menu-2');
    line3.classList.toggle('menu-3');
    line1.classList.toggle('menu-1');
    navMenu.classList.toggle('show');
    //to disable scroll when menu icon is clicked
    // document.querySelector('body').classList.toggle('noScrollY');
    aboutdropdownList.classList.remove('dropdown');
    carsdropdownList.classList.remove('dropdown');
})
//click events on the window
document.addEventListener('click', function (e) {
    console.log(e.target);
    if (aboutdropdownList.classList.contains('dropdown') || carsdropdownList.classList.contains('dropdown')) {
        aboutdropdownList.classList.remove('dropdown');
        carsdropdownList.classList.remove('dropdown');
    }
    else if (e.target === document.querySelector('.about')) {
        aboutdropdownList.classList.toggle('dropdown');
        carsdropdownList.classList.remove('dropdown');
    } else if (e.target === document.querySelector('.cars')) {
        carsdropdownList.classList.toggle('dropdown');
        aboutdropdownList.classList.remove('dropdown');
    }
})

//for departmental breakdown
const technical=document.querySelector(".technical");
const operational=document.querySelector(".operational");

technical.addEventListener("click",function(){
    window.location.href = "http://automobileclub.iitd.ac.in/page19.html";
})
operational.addEventListener("click",function(){
    window.location.href = "http://automobileclub.iitd.ac.in/page34.html";
})