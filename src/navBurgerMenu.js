const navBurgerMenu = () => {
    const burgerDiv = document.createElement('div');
    burgerDiv.classList.add('burger');
    burgerDiv.innerHTML = `
        <div></div>
        <div></div>
        <div></div>
    `
    return burgerDiv
}

export { navBurgerMenu as default };
