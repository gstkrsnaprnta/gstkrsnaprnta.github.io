document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript loaded");

    // Filter projects
    window.filterProjects = function(category) {
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => {
            if (category === 'all' || project.dataset.category === category) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    };

    // Form validation
    const form = document.getElementById('contactForm');
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for reaching out!");
        form.reset();
    });
});
