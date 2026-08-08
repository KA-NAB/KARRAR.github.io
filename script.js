/* =========================
   MOBILE MENU
========================= */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");


if(menuButton){

menuButton.addEventListener("click",()=>{

    mobileMenu.classList.toggle("active");

});

}



document.querySelectorAll(".mobile-menu a").forEach(link=>{

link.addEventListener("click",()=>{

    mobileMenu.classList.remove("active");

});

});





/* =========================
   CUSTOM CURSOR
========================= */


const cursor = document.querySelector(".cursor");


if(cursor){

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});



const hoverElements = document.querySelectorAll(
"a, .service, .tools-grid span"
);



hoverElements.forEach(item=>{


item.addEventListener("mouseenter",()=>{

cursor.style.width="60px";
cursor.style.height="60px";

});



item.addEventListener("mouseleave",()=>{

cursor.style.width="25px";
cursor.style.height="25px";

});


});


}







/* =========================
   SCROLL REVEAL
========================= */


const revealElements = document.querySelectorAll(
".section, .service, .work-box, .process-grid div, .tools-grid span, .contact"
);



const revealObserver = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


revealObserver.unobserve(entry.target);


}


});


},
{
threshold:.15
}
);



revealElements.forEach(element=>{


element.classList.add("hidden");

revealObserver.observe(element);


});






/* =========================
   HERO PARALLAX
========================= */


const heroTitle =
document.querySelector(".hero-title");



window.addEventListener("scroll",()=>{


if(!heroTitle) return;


let scroll = window.scrollY;


if(scroll < window.innerHeight){


heroTitle.style.transform =
`translateY(${scroll * .12}px)`;


}


});







/* =========================
   MAGNETIC BUTTON EFFECT
========================= */


const magneticButtons =
document.querySelectorAll(
".show-btn,.nav-btn"
);



magneticButtons.forEach(button=>{


button.addEventListener("mousemove",(e)=>{


const rect = button.getBoundingClientRect();


const x =
e.clientX - rect.left - rect.width/2;


const y =
e.clientY - rect.top - rect.height/2;



button.style.transform =
`translate(${x*.15}px,${y*.15}px)`;


});



button.addEventListener("mouseleave",()=>{


button.style.transform="translate(0,0)";


});


});






/* =========================
   ACTIVE NAVIGATION
========================= */


const sections =
document.querySelectorAll("section[id]");


const navLinks =
document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


const top =
section.offsetTop - 200;



if(window.scrollY >= top){

current =
section.getAttribute("id");

}


});



navLinks.forEach(link=>{


link.style.color="";


if(link.getAttribute("href")
=== "#"+current){


link.style.color =
"#00e5ff";


}


});


});







/* =========================
   TEXT SPLIT ANIMATION
========================= */


const titles =
document.querySelectorAll(
".hero-title h1, .work-box h2, .contact h2"
);



titles.forEach(title=>{


title.style.opacity="0";


setTimeout(()=>{


title.style.transition =
"1s cubic-bezier(.2,.8,.2,1)";


title.style.opacity="1";


},300);



});






/* =========================
   SMOOTH IMAGE / VIDEO READY
========================= */


document.querySelectorAll("video")
.forEach(video=>{


video.addEventListener("mouseenter",()=>{

video.play();

});


video.addEventListener("mouseleave",()=>{

video.pause();

});


});
