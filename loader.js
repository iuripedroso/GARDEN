window.addEventListener("load", () => {

  const preloader = document.querySelector(".preloader");
 

  setTimeout(() => {
    preloader.style.opacity = 0;
    preloader.style.pointerEvents = "none";
    content.style.opacity = 1;
    document.body.style.overflow = "auto";
  }, 2500); 
});
