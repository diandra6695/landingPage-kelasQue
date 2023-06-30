const navbarNav = document.querySelector('.navbar-nav');
const container = document.querySelector('.container');
// ketika hamburger menu di klik
document.querySelector('#btn-navbar').onclick = (e) => {
    navbarNav.classList.toggle('active');
    container.classList.toggle('blur-sm');
    e.preventDefault();
};

document.querySelector('#btn-navbar2').onclick = (e) => {
    navbarNav.classList.remove('active');
    container.classList.remove('blur-sm');
    e.preventDefault();
};

document.addEventListener('keydown', function(event) {
    if (event.key === 'm') {
        navbarNav.classList.toggle('active');
        container.classList.toggle('blur-sm');  
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        navbarNav.classList.remove('active');
        container.classList.remove('blur-sm');  
    }
});

window.addEventListener('load', function() {
    var element = document.querySelector('.warning');
    element.classList.add('show');
});

document.querySelector('#btn-hidden').onclick = (e) => {
    var element = document.querySelector('.warning');
    element.classList.remove('show');
    e.preventDefault();
}


// const warning = document.querySelector('.warning');

// document.querySelector('#btn-warning').onclick = () => {
//     warning.classList.toggle('hidden');
// };