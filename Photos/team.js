const hamMenu=document.querySelector('.ham');
const line1=document.querySelector('.line-1');
const line2=document.querySelector('.line-2');
const line3=document.querySelector('.line-3');
const navMenu=document.querySelector('.nav-menu');
const ddList=document.querySelectorAll('.dd');
const aboutdropdownList=document.querySelector('.about-dd');
const carsdropdownList=document.querySelector('.cars-dd');
//click events on the navbar
hamMenu.addEventListener('click',function(){
    line2.classList.toggle('menu-2');
    line3.classList.toggle('menu-3');
    line1.classList.toggle('menu-1');
    navMenu.classList.toggle('show');
    //to disable scroll when menu icon is clicked
    document.querySelector('body').classList.toggle('noScrollY');
    aboutdropdownList.classList.remove('dropdown');
    carsdropdownList.classList.remove('dropdown');
})
//click events on the window
document.addEventListener('click',function(e){
    if(e.target===document.querySelector('body')){
        if(aboutdropdownList.classList.contains('dropdown') || carsdropdownList.classList.contains('dropdown')){
            aboutdropdownList.classList.remove('dropdown');
            carsdropdownList.classList.remove('dropdown');
        }
    }
    else if(e.target===document.querySelector('.about')){
        aboutdropdownList.classList.toggle('dropdown');
        carsdropdownList.classList.remove('dropdown');
    }else if(e.target===document.querySelector('.cars')){
        carsdropdownList.classList.toggle('dropdown');
        aboutdropdownList.classList.remove('dropdown');
    }
})

//to add scroll animations

ScrollReveal().reveal('.row',{duration:1000,easing: 'cubic-bezier(0.5, 0, 0, 1)',mobile:true,
    rotate:{
        x:20,
        y:20
    }
});

ScrollReveal().reveal('.banner-heading',{duration:1000,mobile:true,distance:'100px'});
ScrollReveal().reveal('.banner-img',{duration:1000,mobile:true,distance:'100px'});

const preloader=document.querySelector(".preloader");
window.addEventListener("load",function(){
    preloader.classList.add("hide-preloader");
})