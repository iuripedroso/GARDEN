
window.addEventListener("load", () => {

    let preloader = document.querySelector(".preloader");
    let content = document.querySelector(".site-content");

    setTimeout(() => {
        preloader.style.opacity = 0;
        preloader.style.pointerEvents = "none"; /*Impede interações */
        content.style.opacity = 1;
        document.body.style.overflow = "auto";
    }, 2500); 
});


let p = document.getElementById('scrollToView');
let about = document.getElementById('scrollToViewAbout')


p.addEventListener('click', () => {
    window.scrollTo({
        top: 668,
        behavior: 'smooth'
    });
});

about.addEventListener('click', () => {
    window.scrollTo({
        top: 2000,
        behavior: 'smooth'
    });
});

let buy = document.querySelector('.buy');

buy.addEventListener('click', () => {
    modalFundo.style.display = 'none';
});
