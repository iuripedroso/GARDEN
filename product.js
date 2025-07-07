
let cards = document.querySelectorAll('.produtos .card');
let modalFundo = document.getElementById('modalFundo');
let fecharBtn = document.getElementById('fecharBtn');

cards.forEach(card => {
    card.addEventListener('click', () => {
        modalFundo.style.display = 'flex';
    });
});

fecharBtn.addEventListener('click', () => {
    modalFundo.style.display = 'none';
});

// Dropdown 1
let btn1 = document.querySelector('.dropdown-btn');
let menu1 = document.querySelector('.dropdown .dropdown-menu');

let buy = document.querySelector('.buy')

btn1.addEventListener('click', (e) => {
    e.stopPropagation(); // impede o fechamento automático
    if (menu1.style.display === 'block') {
        menu1.style.display = 'none';
        buy.style.zIndex = '1000';
    } else {
        menu1.style.display = 'block';
        buy.style.zIndex = '-2';
    }

});

document.querySelectorAll('.dropdown .dropdown-menu li').forEach(option => {
    option.addEventListener('click', () => {
        btn1.innerHTML = `${option.textContent} <span class="icon">▼</span>`;
        menu1.style.display = 'none';
    });
});

// Dropdown 2
let btn2 = document.querySelector('.dropdown-btn2');
let menu2 = document.querySelector('.dropdown2 .dropdown-menu');

btn2.addEventListener('click', (e) => {
    e.stopPropagation();
    menu2.style.display = menu2.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.dropdown2 .dropdown-menu li').forEach(option => {
    option.addEventListener('click', () => {
        btn2.innerHTML = `${option.textContent} <span class="icon">+</span>`;
        menu2.style.display = 'none';
    });
});

// Fechar dropdowns ao clicar fora
window.addEventListener('click', (e) => {
    if (!document.querySelector('.dropdown').contains(e.target)) {
        menu1.style.display = 'none';
    }
    if (!document.querySelector('.dropdown2').contains(e.target)) {
        menu2.style.display = 'none';
    }
});

