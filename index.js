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
    description: '● Developed a project website featuring multiple applications, each utilizing a specific data structure for various functions.\n● Includes a Personal Finance Tracker using sorting, and an Event Scheduler using binary search trees.'
  },
  {
    title: 'Carbon Impact',
    image: 'images/projects/ci.png',
    link: 'https://manhamalik.github.io/CarbonImpact/',
    githubLink: 'https://github.com/manhamalik/CarbonImpact',
    tags: ['JavaScript', 'HTML', 'CSS', 'JQuery'],
    description: '● Crafted eco-awareness site with JavaScript, HTML, CSS, and JQuery, featuring a carbon footprint calculator.\n● Integrated live carbon footprint data and real-time planetary statistics for impact awareness.'
  },
  {
    title: 'Dino Run',
    image: 'images/projects/dr.png',
    link: 'https://manhamalik.github.io/DinoRun/',
    githubLink: 'https://github.com/manhamalik/DinoRun',
    tags: ['C#', 'JavaScript', 'HTML', 'CSS', 'Unity'],
    description: '● Recreated classic offline Dino Run game Dino Run as a web-based version using Unity.\n● Transformed visuals into sprites and used C# to enhance controls, animations, and obstacles.'
  },
  {
    title: 'FlappyBird',
    image: 'images/projects/fb.png',
    link: 'https://manhamalik.github.io/FlappyBird/',
    githubLink: 'https://github.com/manhamalik/FlappyBird',
    tags: ['C#', 'JavaScript', 'HTML', 'CSS', 'Unity'],
    description: '● Adapted the beloved Flappy Bird gameplay into an engaging web-based experience using Unity and C#.\n● Used sprites and C# to refine gameplay mechanics for an immersive experience.'
  },
  {
    title: 'GlobalGuideAI',
    image: 'images/projects/gga.png',
    link: 'https://manhamalik.com/GlobalGuideAI/',
    githubLink: 'https://github.com/manhamalik/GlobalGuideAICode',
    tags: ['Python', 'JavaScript', 'HTML', 'CSS', 'Flask', 'MongoDB', 'spaCy'],
    description: '● Streamlined travel planning with a Python AI chatbot for personalized travel recommendations.\n● Optimized user engagement with MongoDB data storage and spaCy natural language processing integration.'
  },
  {
    title: 'HawkHub',
    image: 'images/projects/hh.png',
    link: 'https://manhamalik.github.io/HawkHub/',
    githubLink: 'https://github.com/manhamalik/HawkHub',
    tags: ['JavaScript', 'HTML', 'CSS', 'Google Firebase', 'Google Cloud Console'],
    description: '● Developed a Laurier students event platform using JavaScript, HTML, and CSS, integrating Google Firebase for security and real-time updates, alongside Maps and Calendar for efficient event management.'
  },
  {
    title: 'Productify',
    image: 'images/projects/prod.png',
    link: 'https://manhamalik.github.io/Productify/',
    githubLink: 'https://github.com/manhamalik/Productify',
    tags: ['JavaScript', 'HTML', 'CSS', 'Google Firebase'],
    description: '● Maximized productivity with effective tools and resources, beating procrastination.\n● Includes successful implementation of Google Sign-In authentication, feature-rich calendar and to-do list pages, and a curated collection of productive apps for enhanced productivity.'
  },
  {
    title: 'CalcSwift',
    image: 'images/projects/casw.png',
    link: 'https://manhamalik.github.io/CalcSwift/',
    githubLink: 'https://github.com/manhamalik/CalcSwiftCode',
    tags: ['Swift', 'Objective-C', 'Xcode', 'iOS'],
    description: '● Created a sleek and efficient calculator app for iOS devices using Xcode.\n● Implements Swift and Objective-C for robust performance and a user-friendly interface.'
  },
  {
    title: 'EspressoExpress',
    image: 'images/projects/ese.png',
    link: 'https://manhamalik.github.io/EspressoExpress/',
    githubLink: 'https://github.com/manhamalik/EspressoExpress',
    tags: ['Swift', 'Objective-C', 'Xcode', 'iOS'],
    description: '● Developed an interactive menu app for a cafe specializing in baked goods and coffee.\n● Implements Swift, Objective-C and storyboards to provide a user-friendly iOS experience.'
  },
  {
    title: 'WeatherWorld',
    image: 'images/projects/weawor.png',
    link: 'https://manhamalik.github.io/WeatherWorld/',
    githubLink: 'https://github.com/manhamalik/WeatherWorld',
    tags: ['JavaScript', 'HTML', 'CSS', 'XML', 'JSON', 'AJAX', 'REST API', 'SOAP API'],
    description: '● Developed using JavaScript, HTML, CSS, and multiple APIs for comprehensive weather data retrieval.\n● Delivered real-time weather updates and intuitive exploration features seamlessly integrated for user convenience.'
  },
  {
      title: 'FitnessAssistance',
    image: 'images/projects/fitna.png',
    link: 'https://manhamalik.github.io/FitnessAssistance/',
    githubLink: 'https://github.com/manhamalik/FitnessAssistanceCode',
    tags: ['Java', 'Java Swing', 'GUI'],
    description: '● Engineered a Java Swing-based application for precise fitness metric tracking through dynamic calculations.\n● Designed an intuitive interface delivering personalized, motivational feedback to enhance user engagement.'
  },
  {
      title: 'ClimateConnect',
    image: 'images/projects/clco.png',
    link: 'https://cc-climateconnect.netlify.app/',
    githubLink: 'https://github.com/manhamalik/ClimateConnect',
    tags: ['JavaScript', 'HTML', 'CSS', 'React.js', 'Node.js', 'JSON', 'AJAX', 'REST API'],
    description: '● Developed a dynamic web application providing real-time weather insights tailored to user-specified locations.\n● Built with JavaScript, ReactJS, NodeJS, and REST API for seamless user experience and weather data retrieval.'
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
