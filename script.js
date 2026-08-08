// =====================================
// KARRAR — EDITORIAL ANNUAL
// =====================================

// TOC DROPDOWN
(function initToc(){
  const toggle = document.getElementById("tocToggle");
  const dropdown = document.getElementById("tocDropdown");

  if(!toggle) return;

  toggle.addEventListener("click", (e)=>{
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });

  document.addEventListener("click", (e)=>{
    if(!dropdown.contains(e.target) && e.target !== toggle){
      dropdown.classList.remove("open");
    }
  });

  dropdown.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click", ()=> dropdown.classList.remove("open"));
  });
})();


// SCROLL REVEAL
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
