// =====================================
// KARRAR PORTFOLIO — EDIT SUITE ENGINE
// =====================================

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ================================
// FILM LEADER INTRO
// ================================
(function initLeader(){

  const leader = document.getElementById("leader");
  const numberEl = document.getElementById("leaderNumber");
  const sweep = document.getElementById("dialSweep");
  const skipBtn = document.getElementById("leaderSkip");

  const alreadySeen = sessionStorage.getItem("karrar_leader_seen");

  function closeLeader(){
    leader.classList.add("leader-out");
    sessionStorage.setItem("karrar_leader_seen", "1");
    setTimeout(()=>{ leader.style.display = "none"; }, 650);
  }

  if(reducedMotion || alreadySeen){
    leader.style.display = "none";
    return;
  }

  const CIRCUM = 540;
  let count = 5;
  numberEl.textContent = count;

  function tick(){
    const progress = (5 - count + 1) / 5;
    sweep.style.strokeDashoffset = CIRCUM - (CIRCUM * progress);

    if(count <= 1){
      setTimeout(closeLeader, 450);
      return;
    }

    setTimeout(()=>{
      count -= 1;
      numberEl.textContent = count;
      tick();
    }, 450);
  }

  tick();

  skipBtn.addEventListener("click", closeLeader);

})();


// ================================
// MOBILE NAV
// ================================
(function initMobileNav(){

  const menuBtn = document.getElementById("hudMenu");
  const mobileNav = document.getElementById("mobileNav");

  if(!menuBtn) return;

  menuBtn.addEventListener("click", ()=>{
    mobileNav.classList.toggle("open");
  });

  mobileNav.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click", ()=>{
      mobileNav.classList.remove("open");
    });
  });

})();


// ================================
// TIMELINE / SCRUB BAR
// ================================
(function initTimeline(){

  const timecodeEl = document.getElementById("timecode");
  const track = document.getElementById("scrubTrack");
  const fill = document.getElementById("scrubFill");
  const playhead = document.getElementById("scrubPlayhead");
  const chapterLabel = document.getElementById("chapterLabel");

  const sections = Array.from(document.querySelectorAll(".reel[data-chapter]"));

  const FPS = 24;
  const TOTAL_SECONDS = 360; // fake 6-minute runtime for the whole "cut"
  const TOTAL_FRAMES = FPS * TOTAL_SECONDS;

  function pad(n){
    return n.toString().padStart(2, "0");
  }

  function frameToTimecode(frames){
    const totalSecs = Math.floor(frames / FPS);
    const ff = frames % FPS;
    const hh = Math.floor(totalSecs / 3600);
    const mm = Math.floor((totalSecs % 3600) / 60);
    const ss = totalSecs % 60;
    return `${pad(hh)}:${pad(mm)}:${pad(ss)}:${pad(ff)}`;
  }

  function scrollableHeight(){
    return Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  }

  function buildMarkers(){
    track.querySelectorAll(".scrub-marker").forEach(m=>m.remove());

    sections.forEach(section=>{
      const pct = Math.min(100, Math.max(0, (section.offsetTop / scrollableHeight()) * 100));
      const marker = document.createElement("div");
      marker.className = "scrub-marker";
      marker.style.left = pct + "%";
      marker.title = section.dataset.chapter;
      marker.addEventListener("click", ()=>{
        section.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
      });
      track.appendChild(marker);
    });
  }

  let ticking = false;

  function updateOnScroll(){
    const frac = Math.min(1, Math.max(0, window.scrollY / scrollableHeight()));

    fill.style.width = (frac * 100) + "%";
    playhead.style.left = (frac * 100) + "%";

    const frames = Math.floor(frac * TOTAL_FRAMES);
    timecodeEl.textContent = frameToTimecode(frames);

    ticking = false;
  }

  window.addEventListener("scroll", ()=>{
    if(!ticking){
      requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  });

  window.addEventListener("resize", buildMarkers);

  window.addEventListener("load", ()=>{
    buildMarkers();
    updateOnScroll();
  });

  // fallback in case load already fired
  buildMarkers();
  updateOnScroll();

  // ================================
  // ACTIVE CHAPTER TRACKING
  // ================================
  const chapterObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        chapterLabel.textContent = entry.target.dataset.chapter;
      }
    });
  }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });

  sections.forEach(section=> chapterObserver.observe(section));

})();


// ================================
// SCROLL REVEAL
// ================================
(function initReveal(){

  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));

})();
