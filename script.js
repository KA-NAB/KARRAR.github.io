
// =====================================
// KARRAR CINEMATIC MOTION ENGINE V3
// =====================================



// ===============================
// LOADER EXIT
// ===============================


window.addEventListener("load",()=>{


const loader=document.querySelector(".loader");


setTimeout(()=>{


loader.style.opacity="0";

loader.style.transition="1s ease";


setTimeout(()=>{


loader.remove();


},1000);



},1600);



});









// ===============================
// CUSTOM CURSOR
// ===============================


const cursor=document.querySelector(".cursor");


let mouseX=0;

let mouseY=0;


let currentX=0;

let currentY=0;



window.addEventListener(
"mousemove",
(e)=>{


mouseX=e.clientX;

mouseY=e.clientY;



});




function moveCursor(){


currentX +=
(mouseX-currentX)*0.15;


currentY +=
(mouseY-currentY)*0.15;



cursor.style.left=
currentX+"px";


cursor.style.top=
currentY+"px";



requestAnimationFrame(moveCursor);


}


moveCursor();









// ===============================
// MENU PANEL
// ===============================


const menuButton=
document.querySelector(".menu");


const menuPanel=
document.querySelector(".menu-panel");




menuButton.addEventListener(
"click",
()=>{


menuPanel.classList.toggle(
"active"
);



});




const menuLinks=
document.querySelectorAll(
".menu-panel a"
);



menuLinks.forEach(link=>{


link.addEventListener(
"click",
()=>{


menuPanel.classList.remove(
"active"
);



});


});









// ===============================
// HERO PARALLAX
// ===============================


const heroContent=
document.querySelector(
".hero-content"
);



window.addEventListener(
"mousemove",
(e)=>{


if(!heroContent)return;



const x=
(e.clientX/window.innerWidth-.5);



const y=
(e.clientY/window.innerHeight-.5);



heroContent.style.transform=`

translate3d(
${x*25}px,
${y*20}px,
0
)

rotateX(${y*-3}deg)

rotateY(${x*4}deg)

`;



});









// ===============================
// PROJECT IMAGE MOVEMENT
// ===============================


const projects=
document.querySelectorAll(
".project"
);



projects.forEach(project=>{


project.addEventListener(
"mousemove",
(e)=>{


const image=
project.querySelector(
".project-image"
);



const rect=
project.getBoundingClientRect();



const x=
e.clientX-rect.left;


const y=
e.clientY-rect.top;



const rotateY=
(x-rect.width/2)/30;


const rotateX=
-(y-rect.height/2)/40;



image.style.transform=

`

perspective(1000px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

scale(.98)

`;



});





project.addEventListener(
"mouseleave",
()=>{


const image=
project.querySelector(
".project-image"
);



image.style.transform="";


});



});









// ===============================
// SCROLL REVEAL
// ===============================


const revealItems=
document.querySelectorAll(
".section, .project, .service-item, .process-list div"
);



const revealObserver=
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){



entry.target.classList.add(
"show"
);



}



});


},

{

threshold:.15

}


);



revealItems.forEach(item=>{


item.classList.add(
"hidden"
);


revealObserver.observe(item);



});









// ===============================
// CURSOR HOVER EFFECT
// ===============================


const hoverElements=
document.querySelectorAll(
"a,button,.project-image,.service-item"
);



hoverElements.forEach(el=>{


el.addEventListener(
"mouseenter",
()=>{


cursor.style.width="70px";

cursor.style.height="70px";

cursor.style.borderColor="#c6a15b";


});




el.addEventListener(
"mouseleave",
()=>{


cursor.style.width="25px";

cursor.style.height="25px";

cursor.style.borderColor="#c6a15b";


});


});









// ===============================
// SMOOTH SCROLL
// ===============================


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{


anchor.addEventListener(
"click",
function(e){


e.preventDefault();


document.querySelector(
this.getAttribute("href")
)
.scrollIntoView({

behavior:"smooth"

});



});


});









// ===============================
// GOLD LIGHT FOLLOW
// ===============================


document.addEventListener(
"mousemove",
(e)=>{


document.documentElement.style.setProperty(

"--mx",

e.clientX+"px"

);



document.documentElement.style.setProperty(

"--my",

e.clientY+"px"

);



});
