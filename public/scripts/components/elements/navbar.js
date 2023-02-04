const createNavLogo = () => {
    const logoBox = document.createElement('div');
    logoBox.classList.add('logo-box');

    const logoImg = document.createElement('img');
    logoImg.src = '/public/images/logo.svg';
    logoImg.alt = 'Muhammad Selim';
    logoBox.appendChild(logoImg);

    return logoBox;
};

const createNavList = () => {
    const list = document.createElement('ul');
    list.classList.add('nav-list');

    const listItems = [
        ['About', '/#about-section'],
        ['experience', '/#work-section'],
        ['projects', '/#projects-section'],
        ['contact', '/#contact-section']
    ];

    listItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('nav-list-item');

        const link = document.createElement('a');
        link.classList.add('active');
        link.href = item[1];
        link.textContent = item[0];
        listItem.appendChild(link);

        list.appendChild(listItem);
    });

    const listItem = document.createElement('li');
    listItem.classList.add('nav-list-item');

    const link = document.createElement('a');
    link.classList.add('active');
    link.href = '/public/resume/Muhammad Selim Resume.pdf';
    link.target = '_blank';
    link.textContent = 'Resume';
    listItem.appendChild(link);
    list.appendChild(listItem);

    return list;
};

const createNavMenu = () => {
    const menu = document.createElement('button');
    menu.classList.add('menu');
    menu.setAttribute('aria-label', 'Main Menu');
    menu.innerHTML = `
            <svg width="48" height="48" viewBox="0 0 100 100">
                <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path class="line line2" d="M 20,50 H 80" />
                <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>`;

    return menu;
};

const createNavbar = () => {
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    nav.appendChild(createNavLogo());
    nav.appendChild(createNavList());
    nav.appendChild(createNavMenu());

    return nav;
};