// Ativa os Feather Icons
feather.replace();

// Atualiza o ano no footer
document.getElementById('current-year').textContent = new Date().getFullYear();

const scrollElements = document.querySelectorAll('.animate-on-scroll');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
    });
}

handleScrollAnimation();

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');

const openMenu = () => {
    mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
};

const closeAction = () => {
    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
};

menuToggle.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeAction);
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeAction);
});