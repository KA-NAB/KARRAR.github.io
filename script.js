/* =========================
   LOADER
========================= */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});





/* =========================
   CUSTOM CURSOR
========================= */


const cursor = document.querySelector(".cursor");


document.addEventListener("mousemove",(e)=>{

    if(cursor){

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    }

});




const interactive =
document.querySelectorAll(
"a, .card, .circle-btn, .tool-list span"
);



interactive.forEach(item=>{


item.addEventListener("mouseenter",()=>{


if(cursor){

cursor.style.width="70px";
cursor.style.height="70px";

}


});



item.addEventListener("mouseleave",()=>{


if(cursor){

cursor.style.width="25px";
cursor.style.height="25px";

}


});


});







/* =========================
   3D HERO TEXT MOTION
========================= */


const heroText =
document.querySelector(".hero-title");



document.addEventListener("mousemove",(e)=>{


if(!heroText) return;



const x =
(e.clientX / window.innerWidth - .5) * 15;


const y =
(e.clientY / window.innerHeight - .5) * 15;



heroText.style.transform =

`
perspective(1200px)
rotateX(${-y}deg)
rotateY(${x}deg)
`;



});







/* =========================
   BACKGROUND PARALLAX
========================= */


const background =
document.querySelector(".background");



document.addEventListener("mousemove",(e)=>{


if(!background) return;



const x =
(e.clientX / window.innerWidth - .5);



const y =
(e.clientY / window.innerHeight - .5);



background.style.transform =

`
translate(
${x * 30}px,
${y * 30}px
)

`;



});







/* =========================
   CARD 3D TILT
========================= */


const cards =
document.querySelectorAll(".card");



cards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


const rect =
card.getBoundingClientRect();



const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;



const centerX =
rect.width / 2;


const centerY =
rect.height / 2;



const rotateX =
(y-centerY) / 15;


const rotateY =
(centerX-x) / 15;



card.style.transform =

`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-15px)
`;



});





card.addEventListener("mouseleave",()=>{


card.style.transform =
"translateY(0) rotateX(0) rotateY(0)";


});



});







/* =========================
   SCROLL REVEAL
========================= */


const reveal =
document.querySelectorAll(
".section, .work, .contact, .card, .process-list div, .tool-list span"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("visible");


observer.unobserve(entry.target);


}


});


},
{
threshold:.15
}

);



reveal.forEach(item=>{


item.classList.add("hidden");


observer.observe(item);


});







/* =========================
   SMOOTH NAV
========================= */


document.querySelectorAll("a[href^='#']")
.forEach(link=>{


link.addEventListener("click",(e)=>{


const target =
document.querySelector(
link.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});







/* =========================
   MAGNETIC BUTTON
========================= */


const buttons =
document.querySelectorAll(
".circle-btn"
);



buttons.forEach(btn=>{


btn.addEventListener("mousemove",(e)=>{


const box =
btn.getBoundingClientRect();



const x =
e.clientX - box.left - box.width/2;


const y =
e.clientY - box.top - box.height/2;



btn.style.transform =

`
translate(
${x*.2}px,
${y*.2}px
)
rotate(10deg)
`;



});




btn.addEventListener("mouseleave",()=>{


btn.style.transform =
"translate(0,0)";


});


});
