document.addEventListener('DOMContentLoaded', function() {
    
    // Reusable Resume Download Function
    function downloadResume() {
        const link = document.createElement('a');
        link.href = 'photos/Resume/Devang_Resume_Nestle_.pdf'; // Path to your resume
        link.download = 'Devang_Gupta_Resume.pdf'; // File name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Typewriting effect
    var typed = new Typed('#element', {
        strings: ['Engineer', 'Front-End Developer', 'Digital Marketer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
    });

    const contactForm = document.getElementById('contact-form');
    const contactFormToast = document.getElementById('contact-form-toast');
    const contactFormToastMessage = document.getElementById('contact-form-toast-message');
    const contactButton = document.querySelector('#contact-button');
    const downloadResumeButton = document.querySelector('#download-resume-button');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const formDataObject = Object.fromEntries(formData.entries());
            console.log(formDataObject);

            try {
                // Send data to Formspree
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Show success message with SweetAlert
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your message was sent successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });

                    // Reset the form
                    contactForm.reset();
                } else {
                    throw new Error('Failed to send the message');
                }
            } catch (error) {
                // Show error message with SweetAlert
                Swal.fire({
                    title: 'Error!',
                    text: error.message || 'An error occurred while sending your message.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        });
    }

    function showContactFormToast(message, type) {
        if (contactFormToast && contactFormToastMessage) {
            contactFormToastMessage.textContent = message;
            contactFormToast.className = `contact-form-toast ${type}`;
            contactFormToast.style.display = 'block';

            setTimeout(() => {
                contactFormToast.style.display = 'none';
            }, 3000);
        } else {
            console.error('Toast elements not found in the DOM');
        }
    }

    // Contact button hover effect
    if (contactButton) {
        contactButton.addEventListener('mouseover', function() {
            this.querySelector('.hover-text').style.width = '100%';
        });

        contactButton.addEventListener('mouseleave', function() {
            this.querySelector('.hover-text').style.width = '0%';
        });
    }

    // Download resume button effects
    if (downloadResumeButton) {
        downloadResumeButton.addEventListener('mouseover', function() {
            const before = this.children[0];
            const after = this.children[1];
            before.style.transform = 'translate(0%, 0%)';
            after.style.transform = 'translate(0%, -200%)';
        });

        downloadResumeButton.addEventListener('mouseleave', function() {
            const before = this.children[0];
            const after = this.children[1];
            before.style.transform = 'translate(0%, 90%)';
            after.style.transform = 'translate(0%, -100%)';
        });

        downloadResumeButton.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });

        downloadResumeButton.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });

        // Attach the resume download functionality to the button
        downloadResumeButton.addEventListener('click', downloadResume);
    }

    // Function to toggle the menu visibility of NavBar
    window.toggleMenu = function() {
        const navContent = document.querySelector('.nav_content');
        navContent.classList.toggle('active');
    }
});