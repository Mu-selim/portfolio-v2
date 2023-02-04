const moreLessBtn = document.getElementById('more-less-btn');
const moreLessText = document.getElementById('more-less-text');
const noteworthySpinner = document.querySelector('.noteworthy-spinner');

const showMore = async() => {
    try {
        let response = await fetch('/api/selim/projects');
        let projects = await response.json();
        projects = projects.noteworthy_projects;

        const length = document.querySelectorAll('.noteworthy-grid-projects').length;
        for(let i = length; i < projects.length; i++) {
            const projectBox = document.createElement('div');
            projectBox.classList.add('noteworthy-grid-projects');

            /* project floder */
            const floder = document.createElement('span');
            floder.classList.add('noteworthy-floder');
            floder.innerHTML = folderIcon();

            /* project title */
            const title = document.createElement('h2');
            title.classList.add('noteworthy-title');
            title.textContent = projects[i].title;

            /* project description */
            const description = document.createElement('p');
            description.classList.add('noteworthy-description');
            description.innerHTML = convertMarkdownToHTML(projects[i].description);

            /* project tools */
            const tools = document.createElement('ul');
            tools.classList.add('noteworthy-tools');

            const projectTools = projects[i].tools;
            projectTools.forEach( tool => {
              /* project tool */
              const item = document.createElement('li');
              item.textContent = tool;
              tools.appendChild(item);
            });
        
            /* project links */
            const links = document.createElement('div');
            links.classList.add('noteworthy-links');
        
            const githubLink = document.createElement('a');
            githubLink.classList.add('noteworthy-github');
            githubLink.href = projects[i].github;
            githubLink.target = '_blank';
            githubLink.innerHTML = githubIcon();
        
            const externalLink = document.createElement('a');
            externalLink.classList.add('noteworthy-preview');
            externalLink.href = projects[i].extrnal_link;
            externalLink.target = '_blank';
            externalLink.innerHTML = externalIcon();
        
            links.appendChild(githubLink);
            /* if project has external link */
            if(projects[i].extrnal_link != null) {
              links.appendChild(externalLink); 
            }
        
            /* append all elements to project box */
            projectBox.appendChild(floder);
            projectBox.appendChild(title);
            projectBox.appendChild(description);
            projectBox.appendChild(tools);
            projectBox.appendChild(links);
        
            /* append project box to grid */
            document.getElementById('noteworthy-grid').appendChild(projectBox);
        }
    }
    catch(err) {
        console.log(err);
    }
    noteworthySpinner.classList.remove('load');
};

const showLess = () => {
    const projects = document.querySelectorAll('.noteworthy-grid-projects');
    for(let i = 4; i < projects.length; i++) {
        projects[i].remove();
    }
    noteworthySpinner.classList.remove('load');
}

moreLessBtn.addEventListener('click', async() => {
    noteworthySpinner.classList.add('load');
    if(moreLessText.textContent.toLocaleLowerCase() === 'show more') {
        moreLessText.textContent = 'show less';
        showMore();
    } else {
        moreLessText.textContent = 'show more';
        setTimeout(showLess, 500);
    }
});