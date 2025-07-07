let cards = document.querySelectorAll('.produtos .card');
let modalFundo = document.getElementById('modalFundo');
let fecharBtn = document.getElementById('fecharBtn');

// Abre o modal ao clicar em qualquer card
cards.forEach(card => {
    card.addEventListener('click', () => {
        modalFundo.style.display = 'flex';
    })
})

// Fecha o modal
fecharBtn.addEventListener('click', () => {
    modalFundo.style.display = 'none';
})

// Dropdown 1
let btn1 = document.querySelector('.dropdown-btn');
let menu1 = document.querySelector('.dropdown .dropdown-menu');

btn1.addEventListener('click', (e) => {
    e.stopPropagation(); 
    menu1.style.display = menu1.style.display === 'block' ? 'none' : 'block';
})

document.querySelector('.dropdown .dropdown-menu').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        btn1.innerHTML = `${e.target.textContent} <span class="icon">▼</span>`;
        menu1.style.display = 'none';
    }
});

// Dropdown 2
let btn2 = document.querySelector('.dropdown-btn2');
let menu2 = document.querySelector('.dropdown2 .dropdown-menu');

btn2.addEventListener('click', (e) => {
    e.stopPropagation();
    menu2.style.display = menu2.style.display === 'block' ? 'none' : 'block';
});

document.querySelector('.dropdown2 .dropdown-menu').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        btn2.innerHTML = `${e.target.textContent} <span class="icon">+</span>`;
        menu2.style.display = 'none';
    }
});

// Fecha dropdowns se clicar fora
window.addEventListener('click', (e) => {
    if (!document.querySelector('.dropdown').contains(e.target)) {
        menu1.style.display = 'none';
    }
    if (!document.querySelector('.dropdown2').contains(e.target)) {
        menu2.style.display = 'none';
    }
});
