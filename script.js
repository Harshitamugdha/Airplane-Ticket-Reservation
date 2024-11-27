// Script to add active class to the current page's navigation link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function() {
        document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
        this.classList.add("active");
    });
});

// Simple form validation for the Contact Us page
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        e.preventDefault(); // Prevent form submission
        alert("Please fill in all fields.");
    } else {
        alert("Message sent successfully!");
    }
});

// Form validation for the Reservation page
document.querySelector(".reservation-form").addEventListener("submit", function(e) {
    const origin = document.getElementById("origin").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;

    if (!origin || !destination || !date) {
        e.preventDefault(); // Prevent form submission
        alert("Please fill in all fields.");
    }
});

// Add smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

