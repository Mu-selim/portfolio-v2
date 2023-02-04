const insertComponents = () => {
    const body = document.querySelector('body');
    body.prepend(createSocialMenu());
    body.prepend(createNavbar());
    body.prepend(createLoadingPage());
};

insertComponents();