import navBarGenerator from "./navBarGenerator";

navBarGenerator('NavBar', 'logo', 'Home', 'About', 'Contact', 'Social');

const showDropDown = () => {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('ul');

    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('burgerDropDown')
    });

    window.addEventListener('resize', () => {
        if(window.innerWidth > 786 && mobileMenu.classList.contains('burgerDropDown'))
        mobileMenu.classList.remove('burgerDropDown')
    })
}

showDropDown()