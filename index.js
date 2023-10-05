// script to remove the hashtags when clicking the header buttons
document.addEventListener('DOMContentLoaded', function() {
// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a[data-section]');
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetSection = document.getElementById(this.dataset.section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Update URL without reloading the page
const updateURL = function(sectionId) {
  const stateObj = { sectionId };
  history.pushState(stateObj, '', `#${sectionId}`);
};

// Handle back/forward navigation
window.addEventListener('popstate', function(event) {
  const sectionId = event.state ? event.state.sectionId : '';
  if (sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
});

// script content for main container
const mainText = "Hello, I'm Manha.";
const subText = "I'm a computer science enthusiast dedicated to crafting innovative digital solutions.";

const mainElement = document.getElementById("main-text");
const subElement = document.getElementById("second-text");
const mainCursor = document.getElementById("main-cursor");
const secondCursor = document.getElementById("second-cursor");

const subHeadingTypingSpeed = 52;

function typeText(element, text, cursor, speed) {
  let index = 0;
  const typingInterval = setInterval(() => {
    element.textContent = text.slice(0, index);
    index++;

    if (index > text.length) {
      clearInterval(typingInterval);
      cursor.style.display = "none";
    }
  }, speed);
}

setTimeout(() => {
  // Hide opening animation
  const openingAnimation = document.querySelector(".opening-animation");
  openingAnimation.style.display = "none";

  // Show main content
  const mainContainer = document.querySelector(".main-container");
  mainContainer.style.display = "flex";

  // Start typing animations
  mainCursor.style.display = "inline-block";
  typeText(mainElement, mainText, mainCursor, 100);

  setTimeout(() => {
    secondCursor.style.display = "inline-block";
    typeText(subElement, subText, secondCursor, subHeadingTypingSpeed);
  }, mainText.length * 100);
}, 2000); // the delay

// projects container
const projects = [
  {
    title: 'Algorithmic Applications',
    image: 'images/projects/aa.png',
    link: 'https://manhamalik.github.io/AlgorithmicApplications/',
    githubLink: 'https://github.com/manhamalik/AlgorithmicApplications',
    tags: ['Python', 'HTML', 'CSS', 'Flask'],
    description: '● <b>Objective:</b> Construct diverse applications showcasing data structures and algorithms proficiency.\n● Utilized Python to create applications demonstrating data classes, arrays, stacks, queues, linked lists, binary search trees, hashing, and sorting.'
  },
  {
    title: 'Carbon Impact',
    image: 'images/projects/ci.png',
    link: 'https://manhamalik.github.io/CarbonImpact/',
    githubLink: 'https://github.com/manhamalik/CarbonImpact',
    tags: ['JavaScript', 'HTML', 'CSS', 'JQuery'],
    description: '● <b>Objective:</b> Promote eco-consciousness with live carbon footprint data and calculation tools.\n● Includes development of a real-time planetary statistics page and carbon footprint calculator.'
  },
  {
    title: 'Dino Run',
    image: 'images/projects/dr.png',
    link: 'https://manhamalik.github.io/DinoRun/',
    githubLink: 'https://github.com/manhamalik/DinoRun',
    tags: ['C#', 'JavaScript', 'HTML', 'CSS', 'Unity'],
    description: '● <b>Objective:</b> Recreate the classic offline Dino Game as a web-based version for entertainment using Unity and C#.\n● Utilized Unity and C# to replicate the game experience, converting images into sprites and incorporating C# for game mechanics.'
  },
  {
    title: 'FlappyBird',
    image: 'images/projects/fb.png',
    link: 'https://manhamalik.github.io/FlappyBird/',
    githubLink: 'https://github.com/manhamalik/FlappyBird',
    tags: ['C#', 'JavaScript', 'HTML', 'CSS', 'Unity'],
    description: '● <b>Objective:</b> Recreate the classic Flappy Bird game for web-based enjoyment using Unity and C#.\n● Translated visual assets into sprites and employed C# scripting to enhance controls, animations, and obstacle interactions.'
  },
  {
    title: 'GlobalGuideAI',
    image: 'images/projects/gga.png',
    // link: 'https://globalguideai.netlify.app/',
    link: 'https://globalguideai.mxnha77.repl.co/',
    githubLink: 'https://github.com/manhamalik/GlobalGuideAI',
    tags: ['Python', 'JavaScript', 'HTML', 'CSS', 'Flask', 'MongoDB', 'spaCy'],
    description: '● <b>Objective:</b> Simplified travel planning through an AI chatbot recommending activities based on user input.\n● Includes MongoDB integration for data storage and spaCy for natural language processing.'
  },
  {
    title: 'HawkHub',
    image: 'images/projects/hh.png',
    link: 'https://manhamalik.github.io/HawkHub/',
    githubLink: 'https://github.com/manhamalik/HawkHub',
    tags: ['JavaScript', 'HTML', 'CSS', 'Google Firebase', 'Google Cloud Console'],
    description: '● <b>Objective:</b> Unify Laurier students with a platform where they can discover and create events.\n● Includes Google sign-in authentication and a functional real-time database for up-to-date event information.'
  },
  {
    title: 'Productify',
    image: 'images/projects/prod.png',
    link: 'https://manhamalik.github.io/Productify/',
    githubLink: 'https://github.com/manhamalik/Productify',
    tags: ['JavaScript', 'HTML', 'CSS', 'Google Firebase'],
    description: '● <b>Objective:</b> Maximize productivity with effective tools and resources, beating procrastination.\n● Includes successful implementation of Google Sign-In authentication, feature-rich calendar and to-do list pages, and a curated collection of productive apps for enhanced productivity.'
  },
  {
    title: 'CalcSwift',
    image: 'images/projects/casw.png',
    link: 'https://manhamalik.github.io/CalcSwift/',
    githubLink: 'https://github.com/manhamalik/CalcSwiftCode',
    tags: ['Swift', 'Objective-C', 'Xcode', 'iOS'],
    description: '● <b>Objective:</b> Create a sleek and efficient calculator app for iOS devices using Xcode.\n● Includes implementation of Swift and Objective-C for robust performance and a user-friendly interface.'
  },
  {
    title: 'EspressoExpress',
    image: 'images/projects/ese.png',
    link: 'https://manhamalik.github.io/EspressoExpress/',
    githubLink: 'https://github.com/manhamalik/EspressoExpress',
    tags: ['Swift', 'Objective-C', 'Xcode', 'iOS'],
    description: '● <b>Objective:</b> Create an interactive menu app for a cafe company specializing in muffins, coffee, and cinnamon rolls.\n● Implements Swift and Objective-C to provide a user-friendly iOS experience.'
  },
    {
    title: 'WeatherWorld',
    image: 'images/projects/weawor.png',
    link: 'https://manhamalik.github.io/WeatherWorld/',
    githubLink: 'https://github.com/manhamalik/WeatherWorld',
    tags: ['JavaScript', 'HTML', 'CSS', 'XML', 'JSON', 'AJAX', 'REST API', 'SOAP API'],
    description: '● <b>Objective:</b> Provide up-to-date weather information for a desired location based on user input.\n● Implements JavaScript, JSON, and REST API to fetch and display the latest weather data.\n● Utilizes SOAP API and XML for additional data sources and functionality.'
  },
];

const searchBar = document.getElementById('searchBar');
const sortDropdown = document.getElementById('sortDropdown');
const projectList = document.querySelector('.project-list');
const moreProjectsButton = document.getElementById('moreProjectsButton');
const lessProjectsButton = document.getElementById('lessProjectsButton');

const projectsPerPage = 6;
let displayedProjects = projectsPerPage;
let filteredProjects = projects; // Initialize with all projects

function updateProjects() {
  const searchTerm = searchBar.value.toLowerCase();
  const sortOption = sortDropdown.value;

  filteredProjects = projects.filter(project => {
    return (
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      project.title.toLowerCase().includes(searchTerm)
    );
  });

  if (sortOption === 'title') {
    filteredProjects.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === 'language') {
    filteredProjects.sort((a, b) => a.tags[0][0].localeCompare(b.tags[0][0]));
  }

  const visibleProjects = filteredProjects.slice(0, displayedProjects);
  const hiddenProjects = filteredProjects.slice(displayedProjects);

  // Clear the project list
  projectList.innerHTML = '';

  // Add visible projects to the project list
  visibleProjects.forEach(project => {
    const projectBox = createProjectBox(project);
    projectList.appendChild(projectBox);
  });

  // Show or hide the "More Projects" button based on the number of remaining projects
  if (hiddenProjects.length === 0) {
    moreProjectsButton.style.display = 'none';
  } else {
    moreProjectsButton.style.display = 'block';
  }
}

function createProjectBox(project) {
  const projectBox = document.createElement('a');
  projectBox.href = project.link;
  projectBox.target = '_blank';
  projectBox.classList.add('project-box');

  const projectImage = document.createElement('img');
  projectImage.src = project.image;
  projectImage.alt = project.title;
  projectBox.appendChild(projectImage);

  const projectTitle = document.createElement('h3');
  projectTitle.textContent = project.title;
  projectBox.appendChild(projectTitle);

  const projectTags = document.createElement('div');
  projectTags.classList.add('project-tags-container');
  projectBox.appendChild(projectTags);

  project.tags.forEach(tag => {
    const tagContainer = document.createElement('span');
    tagContainer.textContent = tag;
    tagContainer.classList.add('project-tag');
    projectTags.appendChild(tagContainer);
  });

  const projectDescription = document.createElement('p');
  projectDescription.classList.add('project-description');
  projectDescription.innerHTML = project.description.replace(/\n/g, '<br>');
  projectBox.appendChild(projectDescription);

  const projectDetailsContainer = document.createElement('div');
  projectDetailsContainer.classList.add('project-details');
  projectBox.appendChild(projectDetailsContainer);

  const viewProjectText = document.createElement('span');
  viewProjectText.textContent = 'View Project';
  viewProjectText.classList.add('view-project-text');
  projectDetailsContainer.appendChild(viewProjectText);

  const arrowImage = document.createElement('img');
  arrowImage.src = 'images/projects/arrow.png';
  arrowImage.alt = 'Arrow';
  arrowImage.classList.add('arrow-image');
  projectDetailsContainer.appendChild(arrowImage);

  const githubLink = document.createElement('a');
  githubLink.href = project.githubLink;
  githubLink.target = '_blank';

  const githubLogo = document.createElement('img');
  githubLogo.src = 'images/ghi.png';
  githubLogo.alt = 'GitHub';
  githubLogo.classList.add('github-logo');

  githubLink.appendChild(githubLogo);
  projectBox.appendChild(githubLink);

  return projectBox;
}

searchBar.addEventListener('input', updateProjects);
sortDropdown.addEventListener('change', updateProjects);

moreProjectsButton.addEventListener('click', () => {
  // Increment the number of displayed projects
  displayedProjects += projectsPerPage;
  updateProjects();

  // Show the "Less Projects" button when "More Projects" is clicked
  lessProjectsButton.style.display = 'block';
});

lessProjectsButton.addEventListener('click', () => {
  // Decrement the number of displayed projects
  displayedProjects -= projectsPerPage;
  updateProjects();

  // Hide the "Less Projects" button when reverting to the original state
  lessProjectsButton.style.display = 'none';

  // Scroll to the top of the projects container
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// Initial projects update
updateProjects();

    // Add click event listeners for icons
    const searchIcon = document.getElementById('searchIcon');
    const sortDropdownIcon = document.getElementById('sortDropdownIcon');

    searchIcon.addEventListener('click', () => {
      searchBar.focus();
    });

  sortDropdownIcon.addEventListener('click', () => {
    sortDropdown.style.display = sortDropdown.style.display === 'none' ? 'block' : 'none';
  });

// scroll in animation
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.experience-container, .experience-text, .projects-heading, .projects-text, .search-wrapper');
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });

// go up button
const goUpButton = document.getElementById('goUpButton'); //reference to "Go Up" button

// Function to show or hide the button based on scroll position
function toggleGoUpButton() {
  if (window.scrollY > 300) {
    goUpButton.style.display = 'block';
  } else {
    goUpButton.style.display = 'none';
  }
}

// Add scroll event listener to toggle button visibility
window.addEventListener('scroll', toggleGoUpButton);

// Smooth scrolling function when the button is clicked
goUpButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
