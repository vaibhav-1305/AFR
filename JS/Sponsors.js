const hamMenu = document.querySelector('.ham');
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');
const navMenu = document.querySelector('.nav-menu');
const ddList = document.querySelectorAll('.dd');
const aboutdropdownList = document.querySelector('.about-dd');
const carsdropdownList = document.querySelector('.cars-dd');
//click events on the navbar
hamMenu.addEventListener('click', function () {
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
const platinum=[
    {fileName:"1.png",url:"https://www.murrelektronik.com/"},
    {fileName:"2.jpeg",url:"https://shreerapid.com/"},
    {fileName:"3.png",url:"https://www.tatasteel.com/"},
    {fileName:"4.jpg",url:"https://www.bossard.com/in-en/"},
    {fileName:"5.png",url:"http://udtechs.com/"},
    {fileName:"6.jpg",url:"https://tataadvancedsystems.com/"},
    {fileName:"7.jpg",url:"https://www.rosenberger.com/index.php"},
    {fileName:"8.svg",url:"https://www.jugnoo.in/"},
    {fileName:"9.png",url:"https://www.ricoauto.com/"},
    {fileName:"10.png",url:"https://www.continental.com/en"},
    {fileName:"11.png",url:"https://www.mitutoyo.co.jp/eng/"},
    {fileName:"12.png",url:"https://karam.in/"},
    {fileName:"13.png",url:"http://nikolindia.com/"}
]
const gold=[
    {fileName:"1.png",url:"https://www.vedantalimited.com/Pages/Home.aspx"},
    {fileName:"2.png",url:"https://www.vecmocon.com/"},
    {fileName:"3.png",url:"https://www.sbg-systems.com/"},
    {fileName:"4,jpg",url:"https://www.littelfuse.com/"},
    {fileName:"5.png",url:"https://www.petronas.com/"},
    {fileName:"6.png",url:"https://www.xsens.com/"},
    {fileName:"7.png",url:"http://www.vicorpower.com/"},
    {fileName:"8.png",url:"https://www.fronius.com/en"},
    {fileName:"9.png",url:"http://electorq.com/"},
    {fileName:"10.png",url:"https://www.lappgroup.com/"},
    {fileName:"11.png",url:"https://www.krcomposites.com/"},
    {fileName:"12.jpg",url:"https://www.schroth.com/en/"},
    {fileName:"13.jpg",url:"https://www.melasta.com/"},
    {fileName:"14.jpeg",url:"https://www.passosync.com/"},
    {fileName:"15.png",url:"https://asianpaintsppg.com/"},
    {fileName:"16.png",url:"https://www.blackanddecker.com/"},
    {fileName:"17.png",url:"http://alkraft.com/"},
    {fileName:"18.png",url:"https://www.st.com/content/st_com/en.html"},
    {fileName:"19.png",url:"https://www.kvaser.com/"},
    {fileName:"20.png",url:"https://www.rkelectro.com/"},
    {fileName:"21.png",url:"https://www.jbmgroup.com/"},
    {fileName:"22.png",url:"https://icat.in/"},
    {fileName:"23.png",url:"https://www.pcbpower.com/"}
]
const silver=[
    {fileName:"1.png",url:"https://ipg-automotive.com/"},
    {fileName:"2.png",url:"https://www.bender-in.com/"},
    {fileName:"3.png",url:"https://www.te.com/usa-en/home.html"},
    {fileName:"4.png",url:"https://emrax.com/"},
    {fileName:"5.png",url:"https://in.mathworks.com/"},
    {fileName:"6.png",url:"https://www.solidworks.com/"},
    {fileName:"7.png",url:"https://www.ansys.com/en-in"},
    {fileName:"8.png",url:"https://3dconnexion.com/uk/"},
    {fileName:"9.png",url:"https://delfingen.com/"},
    {fileName:"10.png",url:"https://www.calspan.com/"},
    {fileName:"11.png",url:"https://www.sensata.com/"},
    {fileName:"12.jpeg",url:"https://pitchbook.com/"},
    {fileName:"13.png",url:"https://www.altium.com/"},
    {fileName:"14.png",url:"https://www.resistorsonline.com/"},
    {fileName:"15.png",url:"https://rapidharness.com/"},
    {fileName:"16.png",url:"https://www.technocnc.in/"}
]
let platinumImages="";
const platinumSponsor=document.querySelector(".platinum-images");
for(let i=0;i<platinum.length;i++){
    platinumImages+=`<a href='${platinum[i].url}' target='_blank'><img src='Photos/platinum/${platinum[i].fileName}' alt=""></a>`
}
platinumSponsor.innerHTML=platinumImages;

let goldImages="";
const goldSponsor=document.querySelector(".gold-images");
for(let i=0;i<gold.length;i++){
    goldImages+=`<a href='${gold[i].url}' target='_blank'><img src='Photos/gold/${gold[i].fileName}' alt=""></a>`
}
goldSponsor.innerHTML=goldImages;

let silverImages="";
const silverSponsor=document.querySelector(".silver-images");
for(let i=0;i<silver.length;i++){
    silverImages+=`<a href='${silver[i].url}' target='_blank'><img src='Photos/silver/${silver[i].fileName}' alt=""></a>`
}
silverSponsor.innerHTML=silverImages;