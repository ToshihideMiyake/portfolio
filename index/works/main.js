document.getElementById("close").addEventListener("click",()=>{
    document.getElementById("background").classList.add("fadeout-b");
    setTimeout(()=>{
      location.href="../../../index.html"
    },750);
  });
  // Intersection Observer API
    var scrtotop=document.getElementById("scrtotop");
    const items = document.querySelectorAll('#lastelm');
    const options = {
      root: null,
      rootMargin: '0px',
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