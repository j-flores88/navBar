const navSection = document.querySelector('nav');

const navBarGenerator = (pageTitle, titleClass, ...links) => {
    const navTitle = document.createElement('div');
    const navList = document.createElement('ul');

    navTitle.innerText = pageTitle;
    if(titleClass) navTitle.classList.add(titleClass);

    navSection.appendChild(navTitle);
    navSection.appendChild(navList);

    const individualLink = links.forEach((link) => {
        const newLi = document.createElement('li');
        newLi.innerHTML = `
            <a href=#>${link}</a>
        `
        navList.appendChild(newLi);
    });
}

export { navBarGenerator as default };
