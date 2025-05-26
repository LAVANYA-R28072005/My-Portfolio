var typed = new Typed(".text", {
  strings: ["Data Scientist", "Machine Learning Engineer", "Data Analyst", "Data Engineer","Python Developer","Business Intelligence (BI) Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

function showSkills() {
  const skills = document.getElementById("skills-section");

  // Only animate if section is not already visible
  if (skills.style.display !== "block") {
    skills.style.display = "block";
    skills.scrollIntoView({ behavior: "smooth" });

    const progressBars = skills.querySelectorAll(".progress-line span:first-child");

    // Mapping skill classes to their respective widths
    const skillWidths = {
      "html-css": "70%",
      "data-analysis": "75%",
      "data-visualization": "80%",
      "ml-dl": "75%",
      "mysql": "80%",
      "office-tools": "95%",
      "statistical": "90%",
      "python": "90%",
      "data-entry": "95%",
      "deployment": "70%",
      "tools-ide": "90%",
      "Communication": "80%",
      "quick-learner": "95%",
      "problem-solving": "90%",
      "creativity": "90%",
      "team-work": "80%",
      "disciplined-dedicated": "100%",
      "time-management": "95%"
    };

    progressBars.forEach(bar => {
      bar.style.width = '0'; // Reset before animating

      setTimeout(() => {
        bar.style.transition = "width 1s ease-in-out";

        // Find the progress-line container's class to determine width
        const containerClasses = bar.parentElement.classList;
        let targetWidth = "0%";

        for (const cls of containerClasses) {
          if (skillWidths[cls]) {
            targetWidth = skillWidths[cls];
            break;
          }
        }

        bar.style.width = targetWidth;
        bar.parentElement.style.setProperty('--bar-width', targetWidth);
      }, 50);
    });
  }
}






