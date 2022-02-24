function noscroll(event){
    event.preventDefault();
  }
  function reload(){
    location.reload();
  }
  document.getElementById("sites").addEventListener("click",()=>{
    Array.from(document.getElementsByClassName("app")).forEach(e=>e.classList.add("disable"));
    Array.from(document.getElementsByClassName("site")).forEach(e=>e.classList.remove("disable"));
  });
  document.getElementById("apps").addEventListener("click",()=>{
    Array.from(document.getElementsByClassName("site")).forEach(e=>e.classList.add("disable"));
    Array.from(document.getElementsByClassName("app")).forEach(e=>e.classList.remove("disable"));
  });
  function reset(){
   document.querySelectorAll(".site,.app").forEach(e=>e.classList.remove("disable"));
  }
  
  
  function link(ele){
    Array.from(document.getElementsByClassName("fade-on")).forEach(f=>f.classList.add("fadeout"));
    var clickedID=ele.getAttribute("id");
    setTimeout(() => {
      switch(clickedID){
        case "about":
          location.href="./index/about/index.html";
          break;
        case "portfolio":
          location.href="./index/works/my-portfolio/index.html";
          break;
        case "kinyoku":
          location.href="./index/works/kinyoku/index.html";
          break;
        case "memopro":
          location.href="./index/works/memopro/index.html";
          break;
        case "memo":
          location.href="./index/works/memo/index.html";
          break;
        case "kuraberu":
          location.href="./index/works/kuraberu/index.html";
          break;
        case "kuraberu-pro":
          location.href="./index/works/kuraberu-pro/index.html";
          break;
        case "speedgrid":
          location.href="./index/works/speedgrid/index.html";
          break;
        case "colon":
          location.href="./index/works/colon/index.html";
          break;
        default:
          console.log(clickedID);
      }
    }, 750);
  }
  window.onload=()=>{
    document.getElementById("body").classList.add("fadein");
  }
  var PLUS=document.getElementById("plus");
    PLUS.addEventListener("click",()=>{
    PLUS.classList.toggle("cross");
    document.getElementById("mobile-nav-page").classList.toggle("slide");
    if(document.getElementById("mobile-nav-page").classList.contains("slide")){
      document.addEventListener('touchmove', noscroll, { passive: false });
      document.addEventListener('mousewheel', noscroll, { passive: false });
    }else{
      document.removeEventListener('touchmove', noscroll, { passive: false });
      document.removeEventListener('mousewheel', noscroll, { passive: false });
    }
  });
  
  Array.from(document.getElementsByClassName("menus")).forEach(e=>e.addEventListener("click",()=>{
    var menuID=e.getAttribute("id");
    switch(menuID){
        case "menu-all":
          document.querySelectorAll(".site,.app").forEach(e=>e.classList.remove("none"));
          document.getElementById("menu-all").classList.add("menus-border");
          document.getElementById("menu-site").classList.remove("menus-border");
          document.getElementById("menu-app").classList.remove("menus-border");
          break;
        case "menu-site":
          Array.from(document.getElementsByClassName("app")).forEach(e=>e.classList.add("none"));
          Array.from(document.getElementsByClassName("site")).forEach(e=>e.classList.remove("none"));
          document.getElementById("menu-all").classList.remove("menus-border");
          document.getElementById("menu-site").classList.add("menus-border");
          document.getElementById("menu-app").classList.remove("menus-border");
          break;
        case "menu-app":
          Array.from(document.getElementsByClassName("app")).forEach(e=>e.classList.remove("none"));
          Array.from(document.getElementsByClassName("site")).forEach(e=>e.classList.add("none"));
          document.getElementById("menu-all").classList.remove("menus-border");
          document.getElementById("menu-site").classList.remove("menus-border");
          document.getElementById("menu-app").classList.add("menus-border");
          break;
        default:
          console.log(menuID);
      }
  }));
  
  window.addEventListener("resize",()=>{
    document.querySelectorAll(".site,.app").forEach(e=>e.classList.remove("none"));
  });
  
  // Intersection Observer API
  var scrtotop=document.getElementById("scrtotop");
    const items = document.querySelectorAll('#mobile-lastelm');
    const options = {
      root: null,
      rootMargin: '10px',
      threshold: 1
    }
    const observer = new IntersectionObserver(itemIntersect, options)
  
    items.forEach(item => {
      observer.observe(item)
    })
    function itemIntersect (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          scrtotop.classList.add('is-active')
        } else {
          scrtotop.classList.remove('is-active')
        }
      })
    }
    var body=document.getElementById("body");
    scrtotop.addEventListener("click",()=>{
      body.scrollIntoView({
        behavior:"smooth"
      });
    });