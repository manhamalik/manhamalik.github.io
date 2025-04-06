// Hamburger and dropdown menu handling
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('#nav-links li a'); // Select all the links in the dropdown

// Get the navbar height dynamically
const navbarHeight = document.querySelector('header').offsetHeight;

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

// Handle navigation to sections
links.forEach(link => {
  link.addEventListener('click', function(event) {
    // Only prevent default behavior if the link has a data-section attribute
    const targetSectionId = this.dataset.section;
    
    if (targetSectionId) {
      event.preventDefault(); // Prevent default link behavior only for links with data-section

      if (targetSectionId === "contact") {
        if (window.location.pathname.includes("about.html")) {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            // Calculate scroll position with offset for navbar
            const targetPosition = contactSection.offsetTop - navbarHeight;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        } else {
          // If not on about.html, redirect to index.html and go to the contact section
          window.location.href = `/${targetSectionId ? '#' + targetSectionId : ''}`;
        }
      } else {
        // For other sections like experience, projects, etc.
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
          const targetPosition = targetSection.offsetTop - navbarHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        } else {
          // Redirect to index.html with the target section anchor if not found on about.html
          window.location.href = `/${targetSectionId ? '#' + targetSectionId : ''}`;
        }
      }
    }
  });
});

// resume link variable
const resumeLink = "https://drive.google.com/file/d/1l3gn8x5kT0ORxwxsFzGnhpsR6h1hwFJT/view?usp=sharing";

// Function to update all resume links
function updateResumeLinks() {
  const resumeElements = document.querySelectorAll(".resume-link, .resume-button");

  resumeElements.forEach(element => {
    element.setAttribute("href", resumeLink);
  });
}

// Call the function to update links
document.addEventListener("DOMContentLoaded", updateResumeLinks);
