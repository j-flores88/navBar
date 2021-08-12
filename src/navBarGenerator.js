const navSection = document.querySelector('nav');

const navBarGenerator = (pageTitle, ...links) => {
    const navTitle = document.createElement('div');
    const navList = document.createElement('ul');

    navTitle.innerText = pageTitle;
    
    navSection.appendChild(navTitle);
    navSection.appendChild(navList);

    const individualLink = links.forEach((link) => {
        const newLi = document.createElement('li');
        newLi.innerText = link;
        navList.appendChild(newLi);
    });
}

export { navBarGenerator as default };
