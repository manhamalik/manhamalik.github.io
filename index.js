window.addEventListener('load', function() {
  // Get the navbar height to use for scroll offset
  const navbarHeight = document.querySelector('header').offsetHeight;

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a[data-section]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetSection = document.getElementById(this.dataset.section);
      if (targetSection) {
        // Scroll to the section with an offset to account for the navbar
        const targetPosition = targetSection.offsetTop - navbarHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL without reloading the page
        updateURL(this.dataset.section);
      }
    });
  });

  // Update URL function
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
        // Scroll to the section with an offset
        const targetPosition = targetSection.offsetTop - navbarHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });

  // Handle direct page loads or navigation with a hash in the URL (like #projects, #experience, etc.)
  const hash = window.location.hash;
  if (hash) {
    // Timeout to delay the default browser scroll behavior
    setTimeout(() => {
      const targetSection = document.querySelector(hash);
      if (targetSection) {
        // Calculate the offset position
        const targetPosition = targetSection.offsetTop - navbarHeight;

        // Scroll to the section with smooth behavior
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 0); // delay so that the browser doesn't scroll to the section prematurely
  }
});

// Hamburger and dropdown menu handling
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('#nav-links li a'); // Select all the links in the dropdown

// Toggle dropdown when hamburger is clicked
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // Toggle between hamburger and X icon
  const icon = hamburger.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// Close dropdown when any link is clicked
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    
    // Reset hamburger icon to bars
    const icon = hamburger.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
  });
});

// resume link variable
const resumeLink = "https://drive.google.com/file/d/1D3OVY26GyRY0vB_O5ef_qHy2QTKZ1RZ5/view?usp=sharing";

// Function to update all resume links
function updateResumeLinks() {
  const resumeElements = document.querySelectorAll(".resume-link, .resume-button");

  resumeElements.forEach(element => {
    element.setAttribute("href", resumeLink);
  });
}

// Call the function to update links
document.addEventListener("DOMContentLoaded", updateResumeLinks);

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
    tags: ['C#', 'Unity'],
    description: '● Recreated classic offline Dino Run game Dino Run as a web-based version using Unity.\n● Transformed visuals into sprites and used C# to enhance controls, animations, and obstacles.'
  },
  {
    title: 'My Portfolio',
    image: 'images/projects/mpp.png',
    link: 'https://manhamalik.com/Portfolio/',
    githubLink: 'https://github.com/manhamalik/manhamalik.github.io',
    tags: ['JavaScript', 'HTML', 'CSS', 'Figma'],
    description: '● Developed a responsive portfolio website with JavaScript, HTML, and CSS, featuring dynamic animations, interactive project galleries, and seamless navigation.\n● Designed and prototyped the user interface in Figma, ensuring an intuitive user experience across devices with smooth transitions and easy access to key information.',
    featured: true
  },
  {
    title: 'Discover Lincoln',
    image: 'images/projects/dl.png',
    link: 'https://manhamalik.com/Discover-Lincoln/',
    githubLink: 'https://github.com/manhamalik/DiscoverLincolnCode',
    tags: ['JavaScript', 'HTML', 'CSS', 'React', 'Figma', 'Next.js', 'Strapi CMS', 'Leaflet.js', 'Node.js'],
    description: '● Built a tourism platform with interactive maps, user authentication, and Strapi CMS, using Figma for design and prototyping.\n● Developed LincolnGuessr, inspired by GeoGuessr, allowing users to explore the Town of Lincoln’s landmarks through a gamified map experience with Leaflet.js.',
    featured:true
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
    image: 'images/projects/ggs.png',
    link: 'https://manhamalik.com/GlobalGuideAI/',
    githubLink: 'https://github.com/manhamalik/GlobalGuideAICode',
    tags: ['Python', 'JavaScript', 'HTML', 'CSS', 'Flask', 'MongoDB', 'spaCy', 'Figma'],
    description: '● Developed an AI-powered travel assistant using Python, Flask, MongoDB, and spaCy for natural language processing to deliver personalized travel recommendations.\n● Designed and prototyped the user experience with Figma, creating a responsive interface that integrates real-time data retrieval and a chatbot for seamless user interactions.',
    featured: true
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
  {
    title: 'BrainTumourDetectionAI',
    image: 'images/projects/bttd.png',
    link: 'https://manhamalik.com/BrainTumourDetectionAI/',
    githubLink: 'https://github.com/manhamalik/Brain_Tumour_Detection_AI',
    tags: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Matplotlib', 'OpenCV', 'Google Colab', 'Gradio'],
    description: '● Developed and trained convolutional neural network (CNN) models using Python, TensorFlow, and Keras for brain tumour detection from MRI scans, achieving up to 99% accuracy.\n● Leveraged transfer learning with pre-trained models (VGG16, InceptionV3, ResNet50) and integrated Gradio to create a real-time testing interface, enhancing deployment and accessibility across diverse datasets.', 
    featured: true
  },
  {
    title: 'AutoRentNexus',
    image: 'images/projects/arnv.png',
    link: 'https://manhamalik.com/AutoRentNexus/',
    githubLink: 'https://github.com/manhamalik/AutoRentNexusCode',
    tags: ['Java', 'JUnit', 'Maven', 'Lucidchart'],
    description: '● Developed a Java-based car rental management system that automates vehicle management, bookings, and customer profiles, enhancing operational efficiency for rental agencies.\n● Implemented real-time vehicle availability tracking and cost calculation algorithms; integrated JUnit for automated testing and Maven for build automation to ensure reliability and maintainability.', 
    featured: true
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

// Function to update project visibility and button state
function updateProjects() {
  const searchTerm = searchBar.value.toLowerCase();
  const sortOption = sortDropdown.value;

  filteredProjects = projects.filter(project => {
    return (
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      project.title.toLowerCase().includes(searchTerm)
    );
  });

  // Sort projects: featured projects at the top
  filteredProjects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    if (sortOption === 'title') return a.title.localeCompare(b.title);
    return 0;
  });

  const visibleProjects = filteredProjects.slice(0, displayedProjects);
  const hiddenProjects = filteredProjects.slice(displayedProjects);

  // Clear the project list
  projectList.innerHTML = '';

  // Add visible projects to the project list
  visibleProjects.forEach(project => {
    const projectBox = createProjectBox(project);
    projectList.appendChild(projectBox);
  });

  // Update the visibility of the "More Projects" and "Less Projects" buttons
  if (hiddenProjects.length > 0) {
    moreProjectsButton.style.display = 'block';
    lessProjectsButton.style.display = 'none';
  } else {
    moreProjectsButton.style.display = 'none';
    lessProjectsButton.style.display = 'block';
  }

  // Show the "Less Projects" button only when all projects are displayed
  if (displayedProjects >= filteredProjects.length) {
    lessProjectsButton.style.display = 'block';
  } else {
    lessProjectsButton.style.display = 'none';
  }
}

// Modify the project box creation function
function createProjectBox(project) {
  const projectBox = document.createElement('a');
  projectBox.href = project.link;
  projectBox.target = '_blank';
  projectBox.classList.add('project-box');

  if (project.featured) {
    const starIcon = document.createElement('i');
    starIcon.classList.add('fas', 'fa-star', 'gold-star'); // Font Awesome star icon
    starIcon.setAttribute('title', 'Featured'); 
    projectBox.appendChild(starIcon);
  }

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
  // Check if there are more projects to display
  if (displayedProjects < filteredProjects.length) {
    displayedProjects += projectsPerPage; // Increment by projects per page
    updateProjects();
  }

  // Show "Less Projects" button when all projects are displayed
  if (displayedProjects >= filteredProjects.length) {
    lessProjectsButton.style.display = 'block';
  }
});

lessProjectsButton.addEventListener('click', () => {
  // Reset to show the initial number of projects
  displayedProjects = projectsPerPage;
  updateProjects();

  // Hide the "Less Projects" button after resetting
  lessProjectsButton.style.display = 'none';
  moreProjectsButton.style.display = 'block';
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

  const elementsToAnimate = document.querySelectorAll('.experience-container, .experience-text, .projects-heading, .projects-text, .search-wrapper, .certification-container, .community-container, .community-text');
elementsToAnimate.forEach(element => {
  observer.observe(element);
});

// community involvement carousel
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.next-button');
  const prevButton = document.querySelector('.prev-button');
  
  let currentSlide = 0;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let isDragging = false;

  function updateSlidePosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = 'translateX(' + (-slideWidth * currentSlide) + 'px)';
  }

  function moveToSlide(slideIndex) {
    // Wrap around if out of bounds
    if (slideIndex < 0) {
      currentSlide = slides.length - 1; // Go to last slide
    } else if (slideIndex >= slides.length) {
      currentSlide = 0; // Go to first slide
    } else {
      currentSlide = slideIndex;
    }
    updateSlidePosition();
  }

  nextButton.addEventListener('click', () => {
    moveToSlide(currentSlide + 1);
  });

  prevButton.addEventListener('click', () => {
    moveToSlide(currentSlide - 1);
  });

  window.addEventListener('resize', updateSlidePosition);

  // Drag events for mouse and touch
  track.addEventListener('mousedown', dragStart);
  track.addEventListener('touchstart', dragStart);
  track.addEventListener('mousemove', dragMove);
  track.addEventListener('touchmove', dragMove);
  track.addEventListener('mouseup', dragEnd);
  track.addEventListener('touchend', dragEnd);
  track.addEventListener('mouseleave', dragEnd);

  function dragStart(event) {
    isDragging = true;
    startX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    currentTranslate = prevTranslate;
    track.classList.add('dragging');
  }

  function dragMove(event) {
    if (isDragging) {
      const currentX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
      const deltaX = currentX - startX;
      currentTranslate = prevTranslate + deltaX;
      track.style.transform = `translateX(${currentTranslate}px)`;
    }
  }

  function dragEnd() {
    if (isDragging) {
      isDragging = false;
      track.classList.remove('dragging'); // Remove dragging class

      const slideWidth = slides[0].getBoundingClientRect().width;
      const movedBy = currentTranslate - prevTranslate;
      
      if (movedBy < -100 && currentSlide < slides.length - 1) {
        currentSlide++;
      } else if (movedBy > 100 && currentSlide > 0) {
        currentSlide--;
      } else if (movedBy < -100 && currentSlide === slides.length - 1) {
        currentSlide = 0; // Wrap around to first slide
      } else if (movedBy > 100 && currentSlide === 0) {
        currentSlide = slides.length - 1; // Wrap around to last slide
      }

      moveToSlide(currentSlide);
      prevTranslate = -slideWidth * currentSlide; // Update previous translate for smooth dragging
    }
  }

  // Certification carousel functionality
const certificationTrack = document.querySelector('.carousel-certification-track');
const certificationSlides = Array.from(certificationTrack.children);
const nextCertificationButton = document.querySelector('.carousel-certification-button.next-button');
const prevCertificationButton = document.querySelector('.carousel-certification-button.prev-button');

let currentCertificationSlide = 0;
let startCertificationX = 0;
let currentCertificationTranslate = 0;
let prevCertificationTranslate = 0;
let isCertificationDragging = false;

// Update slide position for the certification track
function updateCertificationSlidePosition() {
  const slideWidth = certificationSlides[0].getBoundingClientRect().width;
  certificationTrack.style.transform = `translateX(${-slideWidth * currentCertificationSlide}px)`;
}

// Move to a specific certification slide
function moveToCertificationSlide(slideIndex) {
  // Wrap around if out of bounds
  if (slideIndex < 0) {
    currentCertificationSlide = certificationSlides.length - 1;
  } else if (slideIndex >= certificationSlides.length) {
    currentCertificationSlide = 0;
  } else {
    currentCertificationSlide = slideIndex;
  }
  updateCertificationSlidePosition();
}

// Click events for next and previous certification buttons
nextCertificationButton.addEventListener('click', () => {
  moveToCertificationSlide(currentCertificationSlide + 1);
});

prevCertificationButton.addEventListener('click', () => {
  moveToCertificationSlide(currentCertificationSlide - 1);
});

// Responsive adjustment
window.addEventListener('resize', updateCertificationSlidePosition);

// Drag functionality for certification carousel (mouse and touch events)
certificationTrack.addEventListener('mousedown', certificationDragStart);
certificationTrack.addEventListener('touchstart', certificationDragStart);
certificationTrack.addEventListener('mousemove', certificationDragMove);
certificationTrack.addEventListener('touchmove', certificationDragMove);
certificationTrack.addEventListener('mouseup', certificationDragEnd);
certificationTrack.addEventListener('touchend', certificationDragEnd);
certificationTrack.addEventListener('mouseleave', certificationDragEnd);

function certificationDragStart(event) {
  isCertificationDragging = true;
  startCertificationX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  currentCertificationTranslate = prevCertificationTranslate;
  certificationTrack.classList.add('dragging');
}

function certificationDragMove(event) {
  if (isCertificationDragging) {
    const currentX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    const deltaX = currentX - startCertificationX;
    currentCertificationTranslate = prevCertificationTranslate + deltaX;
    certificationTrack.style.transform = `translateX(${currentCertificationTranslate}px)`;
  }
}

function certificationDragEnd() {
  if (isCertificationDragging) {
    isCertificationDragging = false;
    certificationTrack.classList.remove('dragging');

    const slideWidth = certificationSlides[0].getBoundingClientRect().width;
    const movedBy = currentCertificationTranslate - prevCertificationTranslate;

    // Determine slide based on drag distance
    if (movedBy < -100 && currentCertificationSlide < certificationSlides.length - 1) {
      currentCertificationSlide++;
    } else if (movedBy > 100 && currentCertificationSlide > 0) {
      currentCertificationSlide--;
    } else if (movedBy < -100 && currentCertificationSlide === certificationSlides.length - 1) {
      currentCertificationSlide = 0;
    } else if (movedBy > 100 && currentCertificationSlide === 0) {
      currentCertificationSlide = certificationSlides.length - 1;
    }

    moveToCertificationSlide(currentCertificationSlide);
    prevCertificationTranslate = -slideWidth * currentCertificationSlide;
  }
}

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
