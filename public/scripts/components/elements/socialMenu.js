const createSocialMenu = () => {
    const constainer = document.createElement('aside');
    constainer.classList.add('media-links-box');

    const innerContainer = document.createElement('div');
    innerContainer.classList.add('links-container');

    const links = [
        ['github-link', githubIcon()],
        ['linkedin-link', linkedinIcon()],
        ['twitter-link', twitterIcon()],
        ['instagram-link', instagramIcon()],
    ]

    links.forEach(link => {
        const socialAnchor = document.createElement('a');
        socialAnchor.setAttribute('id', link[0]);
        socialAnchor.target = '_blank';
        socialAnchor.innerHTML = link[1];

        innerContainer.appendChild(socialAnchor);
    });
    constainer.appendChild(innerContainer);
    
    return constainer;
};