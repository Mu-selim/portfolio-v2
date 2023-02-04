const fillMetadata = (metadata) => {
  /* metadata filled data */
  document.title = metadata.title;
  document.querySelector('#github-link').href = metadata.github;
  document.querySelector('#linkedin-link').href = metadata.linkedin;
  document.querySelector('#twitter-link').href = metadata.twitter;
  document.querySelector('#instagram-link').href = metadata.instagram;
}

const fillMain = (main) => {
  document.querySelector('#main-title').textContent = main.title;
  document.querySelector('#main-sub-title').textContent = main.sub_title;
  document.querySelector('#main-description').innerHTML = convertMarkdownToHTML(main.description);
  const mainButton = document.querySelector('#main-button');
  mainButton.textContent = main.button_text;
  mainButton.href = main.button_link;
  document.querySelector('#inner-image-box').style.backgroundImage = `url('${main.personal_picture}')`;
}

const fillAbout = (about) => {
  document.querySelector('#about-section-title').textContent = about.section;
  const aboutParagraphs = about.paragraphs;
  aboutParagraphs.forEach( paragraph => {
    const aboutParagraph = document.createElement('p');
    aboutParagraph.innerHTML = convertMarkdownToHTML(paragraph);
    document.querySelector('#about-paragraphs').appendChild(aboutParagraph);
  });
  const technologies = about.technologies;
  technologies.forEach( technology => {
    const technologyElement = document.createElement('li');
    technologyElement.textContent = technology;
    technologyElement.classList.add('tech-list-item');
    document.querySelector('#about-technologies-list').appendChild(technologyElement);
  });
}

const fillExperience = (experience) => {
  document.getElementById('work-section-title').textContent = experience.section;
  const places = experience.places;
  places.forEach( place => {

    /* work place header */
    const workPlaceHeader = document.createElement('div');
    const workTitle = document.createElement('h2');
    const workPlaceTitle = document.createElement('a');

    workPlaceHeader.classList.add('work-place-header');
    workTitle.classList.add('work-title');
    workPlaceTitle.classList.add('highlight-link', 'work-place-title');
    workPlaceTitle.href = place.site;
    workPlaceTitle.target = '_blank';

    workTitle.textContent = place.job;
    workPlaceTitle.textContent = `@ ${place.title}`;
    workPlaceHeader.appendChild(workTitle);
    workPlaceHeader.appendChild(workPlaceTitle);

    /* work place duration */
    const duration = document.createElement('p');
    duration.classList.add('work-duration');
    duration.textContent = `${place.start_month} ${place.start_year} - ${place.end_month} ${place.end_year}`;

    /* work place description */
    const description = place.description;
    const workDescription = document.createElement('ul');
    workDescription.classList.add('work-description');

    description.forEach( paragraph => {
      const item = document.createElement('li');
      item.innerHTML = convertMarkdownToHTML(paragraph);
      workDescription.appendChild(item);
    });

    /* work place box */
    const workPlaceBox = document.createElement('div');
    workPlaceBox.classList.add('work-place-box');
    workPlaceBox.appendChild(workPlaceHeader);
    workPlaceBox.appendChild(duration);
    workPlaceBox.appendChild(workDescription);

    document.getElementById('work-experience-box').appendChild(workPlaceBox);
  });
}

const fillProjectSectionTitle = (title) => {
  const header = document.createElement('h2');
  header.classList.add('projects-section-title');
  header.textContent = title;

  document.getElementById('projects-section').prepend(header);
};

const fillFeaturedProjects = (featuredProjects) => {
  const features = featuredProjects.featured;
  features.forEach( project => {
    /* featured project box */
    const featuredProjectBox = document.createElement('div');
    featuredProjectBox.classList.add('featured-project-box');

    /* featured project data */
    const featuredProjectData = document.createElement('div');
    featuredProjectData.classList.add('featured-data');

    /* featured project title */
    const featuredProjectTitle = document.createElement('a');
    featuredProjectTitle.classList.add('featured-project-title');
    featuredProjectTitle.href = project.extrnal_link;
    featuredProjectTitle.target = '_blank';
    featuredProjectTitle.textContent = project.title;

    /* featured project description */
    const featuredProjectDescription = document.createElement('p');
    featuredProjectDescription.classList.add('featured-project-description');
    featuredProjectDescription.innerHTML = convertMarkdownToHTML(project.description);

    const list = document.createElement('ul');
    list.classList.add('featured-project-list');

    /* featured project tools */
    const tools = project.tools;
    tools.forEach( tool => {
      const item = document.createElement('li');
      item.textContent = tool;
      list.appendChild(item);
    });

    const links = document.createElement('div');
    links.classList.add('featured-links');

    const githubLink = document.createElement('a');
    githubLink.classList.add('featured-project-github');
    githubLink.href = project.github;
    githubLink.target = '_blank';
    githubLink.innerHTML = githubIcon();

    const externalLink = document.createElement('a');
    externalLink.classList.add('featured-project-preview');
    externalLink.href = project.extrnal_link;
    externalLink.target = '_blank';
    externalLink.innerHTML = externalIcon();

    links.appendChild(githubLink);
    links.appendChild(externalLink);
    
    featuredProjectData.appendChild(featuredProjectTitle);
    featuredProjectData.appendChild(featuredProjectDescription);
    featuredProjectData.appendChild(list);
    featuredProjectData.appendChild(links);

    const featuredImageBox = document.createElement('div');
    featuredImageBox.classList.add('featured-image-box');

    const featuredImage = document.createElement('img');
    featuredImage.src = project.image;
    featuredImage.alt = project.title;
    featuredImageBox.appendChild(featuredImage);

    featuredProjectBox.appendChild(featuredProjectData);
    featuredProjectBox.appendChild(featuredImageBox);

    document.getElementById('featured-section').appendChild(featuredProjectBox);
  });
}

const fillProjects = (projects) => {
  let length = Math.min(projects.length, 5);
  for (let i = 0; i < length; i++) {
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
};

const fillFooter = (footer) => {
  const anchor = document.createElement('a');
  anchor.href = footer.repo_link;
  anchor.target = '_blank';

  const title = document.createElement('h4');
  title.classList.add('design-built');
  title.textContent = footer.title;
  anchor.appendChild(title);

  const statisticsBox = document.createElement('div');
  statisticsBox.classList.add('statistics-box');

  const span1 = document.createElement('span');
  span1.classList.add('stars-icon');
  span1.innerHTML = starIcon();

  const span2 = document.createElement('span');
  span2.classList.add('stars-count');
  span2.textContent = footer.stars;

  const span3 = document.createElement('span');
  span3.classList.add('fork-icon');
  span3.innerHTML = forkIcon();

  const span4 = document.createElement('span');
  span4.classList.add('forks-count');
  span4.textContent = footer.forks;

  statisticsBox.appendChild(span1);
  statisticsBox.appendChild(span2);
  statisticsBox.appendChild(span3);
  statisticsBox.appendChild(span4);

  anchor.appendChild(statisticsBox);
  document.querySelector('.footer').appendChild(anchor);
};

/* Counter of min-max time of loading view */
const loadingPage = (startTime) => {
  const elapsedTime = Date.now() - startTime;
  const delay = Math.max(1000 - elapsedTime, 0);
  setTimeout(() => {
    document.querySelector('.loading-page').classList.add('loaded');
    document.querySelector('body').classList.remove('loaded');
    document.querySelector('body').classList.add('anim-load');
  }, delay);
}

async function loadApi() {
  try {
    const startTime = Date.now();
    
    const response = await fetch('/api/selim');
    const data = await response.json();
    
    const about = data.about;
    const experience = data.experience;
    
    /* metadata filled data */
    fillMetadata(data.metadata);
    
    /* main filled data */
    fillMain(data.main);
    
    /* about filled data */
    fillAbout(about);

    /* experience filled data */
    fillExperience(experience);

    /* projects section title filled data */
    fillProjectSectionTitle(data.projects.section);

    /* featured projects filled data */
    fillFeaturedProjects(data.projects);

    /* noteworthy projects filled data */
    fillProjects(data.projects.noteworthy_projects);

    /* footer filled data */
    fillFooter(data.footer);

    /* Counter of min-max time of loading view */
    loadingPage(startTime);
  }
  catch (error) {
    console.log(error);
  }
}

loadApi();