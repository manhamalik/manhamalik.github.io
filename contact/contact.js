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

document.addEventListener('DOMContentLoaded', function() {
  // Handle select element color change
  const selectElement = document.querySelector('.form-container select');
  selectElement.addEventListener('change', function() {
    selectElement.style.color = 'white';
  });

  // Handle the "Other" subject input display
  const subjectSelect = document.getElementById('subject');
  const otherInput = document.getElementById('other-input');
  const otherOption = [...subjectSelect.options].find(option => option.value === 'Other');
  
  subjectSelect.addEventListener('change', function () {
    if (subjectSelect.value === 'Other') {
      otherOption.text = 'Other:';
      otherInput.style.display = 'block';
      otherInput.focus();
      otherInput.required = true;  // Make "Other" input required
    } else {
      otherOption.text = 'Other';
      otherInput.style.display = 'none';
      otherInput.required = false;  // Remove required attribute
    }
  });

  // Custom form validation
  function validateForm() {
    const form = document.getElementById('contact-form');
    if (!form.checkValidity()) {
      form.reportValidity(); // Native browser validation error display
      return false;
    }
    return true;
  }

  // Handle form submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Validate the form before proceeding
    if (!validateForm()) {
      return; // Stop submission if the form is invalid
    }

    // Trigger invisible reCAPTCHA
    grecaptcha.execute();
  });
});

// function triggered by reCAPTCHA when validation passes
function onSubmit(token) {
  // submits the form after successful reCAPTCHA verification
  const formData = {
    from_name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
    'g-recaptcha-response': token
  };

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
    .then(function(response) {
      console.log('EmailJS response:', response);
      
      const contactContent = document.querySelector('.contact-content');
      contactContent.innerHTML = `
        <div class="thank-you-message">
          <img src="../images/check.png" class="check-image" alt="Check Mark" style="width: 12.5vw; height: auto;">
          <h1>THANK YOU</h1>
          <p>I will get back to you as soon as possible!</p>
          <button class="send-another-message" onclick="resetForm()">Send another message</button>
        </div>
      `;

      // Function to adjust the image size for mobile
      function adjustCheckImage() {
        const checkImage = document.querySelector('.check-image');
        if (window.innerWidth <= 768) {
          checkImage.style.width = "33vw";  // Mobile size
        } else {
          checkImage.style.width = "12.5vw";  // Default size
        }
      }

      // Run on page load
      adjustCheckImage();

    })
    .catch(function(error) {
      console.error('EmailJS error:', error);
      alert('Failed to send the message. Please try again later.');
    });
}

function resetForm() {
  location.reload();
}
