// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
// Exclude hamburger button from this handler
// Only apply to anchor tags that are not inside .hamburger

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // If the clicked element or its parent has class 'hamburger', skip
        if (this.closest('.hamburger')) return;
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Create mailto link
    const mailtoLink = `mailto:alphavanessarmt@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Your email client will open with the message pre-filled. Please send the email to complete your inquiry.');
});

// Resume functions
function downloadResume() {
    // Use the correct path to the resume file
    const link = document.createElement('a');
    link.href = 'assets/docs/resume.pdf';
    link.download = 'Hanna_Alalim_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function printResume() {
    // Use the correct path to the resume file
    window.open('assets/docs/resume.pdf', '_blank');
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.stat-card, .skill-category, .timeline-content, .certificate-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
}); 

// Highlight active navbar link based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinksList = document.querySelectorAll('.nav-links a');

function activateNavLink() {
    let scrollY = window.pageYOffset;
    let found = false;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; // offset for navbar height
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight && !found) {
            navLinksList.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
            found = true;
        }
    });
    // If no section is found (scrolled above first), remove all active
    if (!found) {
        navLinksList.forEach(link => link.classList.remove('active'));
    }
}

window.addEventListener('scroll', activateNavLink);
window.addEventListener('DOMContentLoaded', activateNavLink); 