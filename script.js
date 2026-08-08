
// =====================================
// KARRAR MOTION PORTFOLIO ENGINE
// =====================================



// ===============================
// CURSOR
// ===============================


const cursor = document.querySelector(".cursor");


let mouse = {

x:0,

y:0

};


let cursorPos={

x:0,

y:0

};



window.addEventListener(
"mousemove",
(e)=>{


mouse.x=e.clientX;

mouse.y=e.clientY;



// light movement

document.documentElement.style.setProperty(
"--mouseX",
mouse.x+"px"
);


document.documentElement.style.setProperty(
"--mouseY",
mouse.y+"px"
);



});





function cursorAnimation(){


cursorPos.x +=
(mouse.x-cursorPos.x)*0.15;


cursorPos.y +=
(mouse.y-cursorPos.y)*0.15;



cursor.style.left =
cursorPos.x+"px";


cursor.style.top =
cursorPos.y+"px";



requestAnimationFrame(cursorAnimation);


}


cursorAnimation();







// ===============================
// CURSOR HOVER
// ===============================


const hoverElements =
document.querySelectorAll(
"a,.service-card,.project-card,.main-btn"
);



hoverElements.forEach(el=>{


el.addEventListener(
"mouseenter",
()=>{


cursor.style.width="70px";

cursor.style.height="70px";

cursor.style.background=
"rgba(0,229,255,.15)";


});



el.addEventListener(
"mouseleave",
()=>{


cursor.style.width="25px";

cursor.style.height="25px";

cursor.style.background=
"transparent";


});


});








// ===============================
// HERO 3D MOVEMENT
// ===============================


const hero =
document.querySelector(".hero-title");



window.addEventListener(
"mousemove",
(e)=>{


if(!hero)return;



let x =
(e.clientX/window.innerWidth-.5);



let y =
(e.clientY/window.innerHeight-.5);




hero.style.transform=

`

rotateX(${y*-8}deg)

rotateY(${x*12}deg)

translateZ(50px)

`;



});









// ===============================
// CARD 3D TILT
// ===============================


const cards =
document.querySelectorAll(
".service-card,.project-card,.stats div"
);



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


let rect =
card.getBoundingClientRect();



let x =
e.clientX-rect.left;


let y =
e.clientY-rect.top;



let centerX =
rect.width/2;


let centerY =
rect.height/2;



let rotateX =
(y-centerY)/15;


let rotateY =
(centerX-x)/15;




card.style.transform=

`

perspective(900px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

translateY(-15px)

`;



});





card.addEventListener(
"mouseleave",
()=>{


card.style.transform="";



});


});









// ===============================
// SCROLL REVEAL
// ===============================


const reveal =
document.querySelectorAll(
".service-card,.project-card,.stats div,.process-grid div,.about-grid"
);



const observer =
new IntersectionObserver(

entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


observer.unobserve(
entry.target
);


}



});


},


{

threshold:.15

}


);






reveal.forEach(el=>{


el.style.opacity="0";


el.style.transform=
"translateY(80px)";


el.style.transition=
"1s cubic-bezier(.16,1,.3,1)";



observer.observe(el);



});









// ===============================
// 3D ICON FLOAT
// ===============================


const icons =
document.querySelectorAll(
".icon-3d"
);



icons.forEach(
(icon,index)=>{


icon.animate(

[

{

transform:
"translateY(0) rotateY(0deg)"

},

{

transform:
"translateY(-12px) rotateY(180deg)"

},

{

transform:
"translateY(0) rotateY(360deg)"

}

],


{


duration:
4000+(index*500),

iterations:
Infinity,

easing:
"ease-in-out"


}


);



});









// ===============================
// SIDE MENU ACTIVE
// ===============================


const sections =
document.querySelectorAll(
"section[id]"
);


const menuLinks =
document.querySelectorAll(
".side-links a"
);





window.addEventListener(
"scroll",
()=>{


let current="";



sections.forEach(section=>{


let top =
window.scrollY;


let offset =
section.offsetTop-300;



if(top>=offset){

current=
section.getAttribute("id");

}



});




menuLinks.forEach(link=>{


link.style.color="#777";



if(
link.getAttribute("href")
==
"#"+current
){


link.style.color=
"#00e5ff";


}


});



});









// ===============================
// MAGNETIC BUTTONS
// ===============================


const magnetic =
document.querySelectorAll(
".main-btn,.circle-btn,.whatsapp-float"
);



magnetic.forEach(btn=>{


btn.addEventListener(
"mousemove",
(e)=>{


let box =
btn.getBoundingClientRect();



let x =
e.clientX-box.left-box.width/2;


let y =
e.clientY-box.top-box.height/2;



btn.style.transform=

`

translate(

${x*.2}px,

${y*.2}px

)

scale(1.05)

`;



});





btn.addEventListener(
"mouseleave",
()=>{


btn.style.transform="";



});



});









// ===============================
// INTRO ANIMATION
// ===============================


window.addEventListener(
"load",
()=>{


document.body.classList.add(
"ready"
);


});
