@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');


:root{

    --bg:#050505;
    --text:#f5f5f2;
    --muted:#858585;
    --line:#202020;

    --accent:#00e5ff;
    --accent2:#8a2be2;

}


*{

    margin:0;
    padding:0;
    box-sizing:border-box;

}


html{

    scroll-behavior:smooth;

}


body{

    background:var(--bg);
    color:var(--text);

    font-family:"Inter",sans-serif;

    overflow-x:hidden;

}


a{

    text-decoration:none;
    color:inherit;

}



/* NOISE */


.noise{

position:fixed;

inset:0;

pointer-events:none;

z-index:9999;

opacity:.035;


background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");

}




/* CURSOR */


.cursor{

position:fixed;

width:25px;

height:25px;

border:1px solid var(--accent);

border-radius:50%;

pointer-events:none;

z-index:9998;

transform:translate(-50%,-50%);

transition:.25s ease;

mix-blend-mode:difference;

}



/* NAV */


.nav{

position:fixed;

top:0;

left:0;

width:100%;

height:90px;

padding:0 5vw;

display:flex;

justify-content:space-between;

align-items:center;

z-index:1000;


background:linear-gradient(
to bottom,
rgba(5,5,5,.8),
transparent
);

}



.logo{

font-family:"Space Grotesk";

font-size:1.5rem;

font-weight:700;

letter-spacing:-1px;

}


.logo span{

color:var(--accent);

}



.nav-links{

display:flex;

gap:40px;

}



.nav-links a{

font-size:.7rem;

text-transform:uppercase;

letter-spacing:2px;

color:#aaa;

transition:.3s;

}


.nav-links a:hover{

color:white;

}



.nav-btn{

font-size:.7rem;

text-transform:uppercase;

letter-spacing:2px;

}



.menu-button{

display:none;

background:none;

border:0;

}



.menu-button span{

display:block;

height:1px;

width:30px;

background:white;

margin:8px;

}




/* HERO */


.hero{

height:100vh;

padding:150px 5vw 60px;

display:flex;

flex-direction:column;

justify-content:space-between;

position:relative;

overflow:hidden;

}



.hero-glow{

position:absolute;

width:600px;

height:600px;

right:-200px;

bottom:-200px;

background:radial-gradient(
circle,
rgba(0,229,255,.18),
transparent 65%
);

filter:blur(30px);

}



.hero-top{

display:flex;

justify-content:space-between;

font-size:.65rem;

letter-spacing:2px;

text-transform:uppercase;

color:var(--muted);

}



.hero-title h1{

font-family:"Space Grotesk";

font-size:clamp(5rem,14vw,15rem);

line-height:.8;

letter-spacing:-8px;

animation:titleReveal 1.5s ease forwards;

}



.hero-title em{

display:block;

font-style:normal;

color:transparent;

-webkit-text-stroke:1px #555;

margin-left:10vw;

}



.hero-bottom{

display:flex;

justify-content:space-between;

align-items:end;

}



.hero-bottom p{

width:350px;

color:var(--muted);

line-height:1.8;

font-size:.9rem;

}



.show-btn{

width:140px;

height:140px;

border:1px solid #333;

border-radius:50%;

display:flex;

align-items:center;

justify-content:center;

text-transform:uppercase;

font-size:.65rem;

letter-spacing:2px;

transition:.5s;

}



.show-btn:hover{

background:var(--accent);

color:black;

transform:rotate(15deg);

}



@keyframes titleReveal{

from{

opacity:0;

transform:translateY(80px);

}

to{

opacity:1;

transform:none;

}

}



/* MARQUEE */


.marquee{

border-top:1px solid var(--line);

border-bottom:1px solid var(--line);

padding:30px 0;

overflow:hidden;

white-space:nowrap;

}



.marquee div{

font-family:"Space Grotesk";

font-size:4rem;

letter-spacing:-3px;

animation:move 20s linear infinite;

}



@keyframes move{

to{

transform:translateX(-50%);

}

}





/* SECTIONS */


.section{

padding:150px 5vw;

}



.label{

font-size:.65rem;

letter-spacing:3px;

color:var(--accent);

margin-bottom:80px;

text-transform:uppercase;

}



/* ABOUT */


.about-grid{

display:grid;

grid-template-columns:1.4fr .8fr;

gap:10vw;

}



.about h2{

font-family:"Space Grotesk";

font-size:clamp(4rem,10vw,10rem);

line-height:.8;

letter-spacing:-7px;

}



.about h2 span{

color:transparent;

-webkit-text-stroke:1px #555;

}



.about-text p{

color:var(--muted);

line-height:1.8;

}



.about-text .large{

font-size:1.8rem;

color:white;

margin-bottom:40px;

}



/* SERVICES */


.services-list{

border-top:1px solid var(--line);

}



.service{

display:grid;

grid-template-columns:80px 1fr 1fr;

gap:30px;

padding:50px 0;

border-bottom:1px solid var(--line);

transition:.5s;

}



.service:hover{

padding-left:30px;

}



.service span{

color:var(--accent);

}



.service h3{

font-family:"Space Grotesk";

font-size:4rem;

}



.service p{

color:var(--muted);

line-height:1.7;

}



/* WORK */


.work{

padding:150px 5vw;

border-top:1px solid var(--line);

border-bottom:1px solid var(--line);

}



.work-box h2{

font-family:"Space Grotesk";

font-size:clamp(4rem,12vw,12rem);

line-height:.8;

letter-spacing:-7px;

}



.work-box span{

display:block;

color:transparent;

-webkit-text-stroke:1px #555;

}



.work-box p{

margin-top:50px;

color:var(--muted);

}



/* PROCESS */


.process-grid{

display:grid;

grid-template-columns:repeat(4,1fr);

gap:30px;

}



.process-grid div{

border-top:1px solid var(--line);

padding-top:30px;

}



.process-grid span{

color:var(--accent);

}



.process-grid h3{

font-family:"Space Grotesk";

font-size:2rem;

margin:20px 0;

}



.process-grid p{

color:var(--muted);

}



/* TOOLS */


.tools-grid{

display:flex;

flex-wrap:wrap;

gap:20px;

}



.tools-grid span{

border:1px solid var(--line);

padding:20px 35px;

border-radius:50px;

transition:.3s;

}



.tools-grid span:hover{

border-color:var(--accent);

transform:translateY(-5px);

}



/* CONTACT */


.contact{

padding:150px 5vw;

min-height:80vh;

}



.contact h2{

font-family:"Space Grotesk";

font-size:clamp(4rem,12vw,13rem);

line-height:.8;

letter-spacing:-8px;

}



.contact h2 span{

display:block;

color:transparent;

-webkit-text-stroke:1px #555;

}



.email{

display:inline-block;

margin-top:70px;

font-size:2rem;

border-bottom:1px solid #555;

}



.social{

margin-top:50px;

display:flex;

gap:40px;

color:var(--muted);

}



/* FOOTER */


footer{

border-top:1px solid var(--line);

padding:30px 5vw;

display:flex;

justify-content:space-between;

font-size:.65rem;

color:#666;

text-transform:uppercase;

}





/* MOBILE */


@media(max-width:800px){


.nav-links,
.nav-btn{

display:none;

}


.menu-button{

display:block;

}



.hero-title h1{

font-size:20vw;

letter-spacing:-4px;

}


.hero-bottom{

flex-direction:column;

align-items:start;

gap:30px;

}


.about-grid,
.process-grid{

grid-template-columns:1fr;

}



.service{

grid-template-columns:40px 1fr;

}



.service h3{

font-size:2.5rem;

}



footer{

flex-direction:column;

gap:15px;

}


}
