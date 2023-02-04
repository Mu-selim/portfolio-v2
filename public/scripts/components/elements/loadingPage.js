const createLoadingPage = () => {
    const loadingPage = document.createElement('div');
    loadingPage.classList.add('loading-page');

    const logo = document.createElement('img');
    logo.src = '/public/images/logo.svg';
    logo.alt = 'Muhammad Selim';
    loadingPage.appendChild(logo);

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    for(let i = 0; i < 5; i++) {
        const div = document.createElement('div');
        spinner.appendChild(div);
    }
    loadingPage.appendChild(spinner);

    return loadingPage;
};