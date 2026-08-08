// =====================================
// KARRAR PORTFOLIO
// CINEMATIC MOTION ENGINE
// =====================================



// ================================
// MOUSE LIGHT FOLLOW
// ================================

const root = document.documentElement;


window.addEventListener("mousemove", (e)=>{


    const x = (e.clientX / window.innerWidth) * 100;

    const y = (e.clientY / window.innerHeight) * 100;


    root.style.setProperty("--mouseX", x + "%");

    root.style.setProperty("--mouseY", y + "%");


});





// ================================
// CUSTOM CURSOR
// ================================


const cursor = document.querySelector(".cursor");


let mouseX = 0;

let mouseY = 0;


let cursorX = 0;

let cursorY = 0;



window.addEventListener("mousemove",(e)=>{


    mouseX = e.clientX;

    mouseY = e.clientY;


});



function animateCursor(){


    cursorX += (mouseX - cursorX) * .15;

    cursorY += (mouseY - cursorY) * .15;


    cursor.style.left = cursorX + "px";

    cursor.style.top = cursorY + "px";


    requestAnimationFrame(animateCursor);


}


animateCursor();





// Cursor hover effect


const interactive = document.querySelectorAll(

"a, button, .service, .process-grid div"

);



interactive.forEach(item=>{


    item.addEventListener("mouseenter",()=>{


        cursor.style.width="70px";

        cursor.style.height="70px";

        cursor.style.background="rgba(0,229,255,.15)";


    });



    item.addEventListener("mouseleave",()=>{


        cursor.style.width="30px";

        cursor.style.height="30px";

        cursor.style.background="transparent";


    });


});








// ================================
// HERO 3D PARALLAX
// ================================


const heroTitle = document.querySelector(".hero-title");



window.addEventListener("mousemove",(e)=>{


    const x =

    (e.clientX / window.innerWidth - .5);



    const y =

    (e.clientY / window.innerHeight - .5);



    if(heroTitle){


        heroTitle.style.transform = `

        rotateX(${y * -8}deg)

        rotateY(${x * 10}deg)

        translateZ(40px)

        `;


    }


});








// ================================
// FLOATING BACKGROUND PARALLAX
// ================================


const objects = document.querySelectorAll(
".floating-object"
);



window.addEventListener("mousemove",(e)=>{


const x =

(e.clientX / window.innerWidth - .5);



const y =

(e.clientY / window.innerHeight - .5);



objects.forEach((obj,index)=>{


    const speed = (index + 1) * 18;


    obj.style.transform = `

    translate3d(

    ${x * speed}px,

    ${y * speed}px,

    0

    )

    `;



});



});








// ================================
// SCROLL REVEAL
// ================================


const reveals = document.querySelectorAll(
".reveal"
);



const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add(
            "active"
        );


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





reveals.forEach(el=>{


observer.observe(el);


});









// ================================
// NAV BACKGROUND ON SCROLL
// ================================


const nav = document.querySelector(".nav");



window.addEventListener("scroll",()=>{


if(window.scrollY > 80){


nav.style.background =

"rgba(3,3,3,.85)";


nav.style.backdropFilter=

"blur(15px)";


}

else{


nav.style.background=

"linear-gradient(black,transparent)";


}


});









// ================================
// SMOOTH MAGNETIC BUTTON
// ================================


const buttons = document.querySelectorAll(
".show-btn,.nav-btn"
);



buttons.forEach(btn=>{


btn.addEventListener("mousemove",(e)=>{


const rect = btn.getBoundingClientRect();


const x = e.clientX - rect.left - rect.width/2;

const y = e.clientY - rect.top - rect.height/2;



btn.style.transform =

`

translate(

${x*.15}px,

${y*.15}px

)

scale(1.05)

`;



});




btn.addEventListener("mouseleave",()=>{


btn.style.transform="";


});


});









// ================================
// PAGE LOAD CINEMATIC INTRO
// ================================


window.addEventListener(
"load",
()=>{


document.body.classList.add(
"loaded"
);


});







// ================================
// MOBILE MENU
// ================================


const menu =
document.querySelector(".menu-button");



const links =
document.querySelector(".nav-links");



if(menu){


menu.addEventListener("click",()=>{


links.classList.toggle(
"open"
);


});


}
