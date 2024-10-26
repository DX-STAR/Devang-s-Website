//For Typewriting effect
var typed = new Typed('#element', {
  strings: ['Engineer', 'Front-End Developer', 'Digital Marketer'],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// Add event listener for contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('contact-form-name').value;
    const email = document.getElementById('contact-form-email').value;
    const reason = document.getElementById('contact-form-reason').value;
    const message = document.getElementById('contact-form-message').value;

    // Here you would typically send this data to your backend
    console.log({ name, email, reason, message });

    // Show toast notification
    showContactFormToast("Message Sent! Thank you for reaching out. I'll get back to you soon.");

    // Reset form
    this.reset();
});

// Function to show contact form toast notification
function showContactFormToast(message) {
    const toast = document.getElementById('contact-form-toast');
    const toastMessage = document.getElementById('contact-form-toast-message');
    toastMessage.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Add hover effect for contact button
document.querySelector('#contact-button').addEventListener('mouseover', function() {
    this.querySelector('.hover-text').style.width = '100%';
});

document.querySelector('#contact-button').addEventListener('mouseleave', function() {
    this.querySelector('.hover-text').style.width = '0%';
});

// Add interaction effects for download resume button
const button = document.querySelector('#download-resume-button');

button.addEventListener('mouseover', function() {
    const before = this.children[0];
    const after = this.children[1];
    before.style.transform = 'translate(0%, 0%)';
    after.style.transform = 'translate(0%, -200%)';
});

button.addEventListener('mouseleave', function() {
    const before = this.children[0];
    const after = this.children[1];
    before.style.transform = 'translate(0%, 90%)';
    after.style.transform = 'translate(0%, -100%)';
});

button.addEventListener('mousedown', function() {
    this.style.transform = 'scale(0.95)';
});

button.addEventListener('mouseup', function() {
    this.style.transform = 'scale(1)';
});

// Function to toggle the menu visibility of NavBar
function toggleMenu() {
    const navContent = document.querySelector('.nav_content');
    navContent.classList.toggle('active');
}

function downloadResume() {
  window.location.href = 'your_resume_link_here.pdf'; // Replace with the link to your resume
}

