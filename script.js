const btnmenu = document.querySelector('#btn-menu');
const closeIcon = document.querySelector('#close-icon');
const navHeader = document.querySelector('#nav-header');


btnmenu.addEventListener('click', () => {
    navHeader.classList.add('nav-visible');
    navHeader.classList.remove('nav-hidden');
    closeIcon.style.display = 'block';
    btnmenu.style.display = 'none';   
});

closeIcon.addEventListener('click', () => {
    navHeader.classList.add('nav-hidden');
    navHeader.classList.remove('nav-visible');
    closeIcon.style.display = 'none';  
    btnmenu.style.display = 'inline-block';
});
