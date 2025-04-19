function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const clock = document.getElementById('clock');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();

// Enhanced Theme Management
function setTheme(theme) {
    // Smooth transition for all elements
    document.body.style.transition = 'background-color 0.5s ease, color 0.3s ease';
    document.querySelectorAll('main, header, section, .service-card, .hero, .sidebar').forEach(el => {
        el.style.transition = 'background-color 0.5s ease, color 0.3s ease, border-color 0.3s ease';
    });
    
    // Apply theme
    document.body.classList.toggle("dark-theme", theme === 'dark');
    localStorage.setItem('theme', theme);
    
    // Update icon
    const icon = document.getElementById("themeToggle");
    icon.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    icon.classList.add('active');
    
    setTimeout(() => {
        icon.classList.remove('active');
    }, 300);
    
    // Remove transitions after animation completes
    setTimeout(() => {
        document.body.style.transition = '';
        document.querySelectorAll('main, header, section, .service-card, .hero, .sidebar').forEach(el => {
            el.style.transition = '';
        });
    }, 500);
}

// Initialize theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

document.getElementById("themeToggle").addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("dark-theme") ? 'light' : 'dark';
    setTheme(currentTheme);
});

// Contact Form Handling
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("nameInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();
    if (name === "" || message === "") {
        alert("Please fill out all fields.");
    } else {
        document.getElementById("response").innerText = `Thanks, ${name}. We'll get back to you soon!`;
        e.target.reset();
    }
});

// FAQ Toggle Functionality
document.querySelectorAll(".question").forEach((q) => {
    q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        
        // Toggle current question
        q.classList.toggle("expanded");
        answer.classList.toggle("visible");
        
        // Close other answers when opening a new one
        if (answer.classList.contains("visible")) {
            document.querySelectorAll(".answer").forEach((otherAnswer) => {
                if (otherAnswer !== answer && otherAnswer.classList.contains("visible")) {
                    otherAnswer.classList.remove("visible");
                    otherAnswer.previousElementSibling.classList.remove("expanded");
                }
            });
        }
    });
});
