// Array of projects with added 'date' field
const projects = [
  {
    title: "Python Dual-Task ML Lab",
    description: "A machine learning lab focusing on data imputation and text classification.",
    tools: "Python, TensorFlow",
    link: "#",
    image: "./assets/img/git.png",
    date: "2024-01-01",
  },
  {
    title: "Python Lab",
    description: "A machine learning lab focusing on data imputation and text classification.",
    tools: "Python, TensorFlow",
    link: "#",
    image: "./assets/img/git.png",
    date: "2024-09-19",
  },
  {
    title: "SQL Toronto Waste Collection Database Analysis",
    description: "A database analysis project focused on waste collection management in Toronto.",
    tools: "SQL, Python",
    link: "#",
    image: "/assets/img/project-waste-collection.jpg",
    date: "2023-07-20",
  },
  {
    title: "Python Realtime Face Mask Detection",
    description: "A deep learning model that detects face masks using SSD architecture.",
    tools: "Python, TensorFlow, OpenCV",
    link: "#",
    image: "/assets/img/project-mask-detection.jpg",
    date: "2023-10-15",
  },
  {
    title: "Python Othello Game",
    description: "A Python-based Othello game with advanced AI using Minimax and Alpha-Beta pruning.",
    tools: "Python, AI",
    link: "#",
    image: "/assets/img/project-othello.jpg",
    date: "2023-09-05",
  },
  {
    title: "ARM Assembly Love Maze",
    description: "A software maze project running on DE1-SoC, controlled by PS/2 keyboard.",
    tools: "ARM Assembly, DE1-SoC",
    link: "#",
    image: "/assets/img/project-maze.jpg",
    date: "2023-03-18",
  },
  {
    title: "C++ Graphic Information System",
    description: "A program that visualizes and solves path-finding problems using A* and Dijkstra.",
    tools: "C++, GTK, OSM",
    link: "#",
    image: "/assets/img/project-gis.jpg",
    date: "2022-12-12",
  }
];

// Sort projects by date in descending order
projects.sort((a, b) => new Date(b.date) - new Date(a.date));

// Variables to control how many projects are shown
let currentIndex = 1; // Start from the second project
const projectsPerPage = 3;

// Function to create HTML for a project
function createProjectHTML(project) {
  return `
    <div class="col s12 m6 l4">
      <div class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
          <img alt="${project.title}" src="${project.image}" style="height: 100%; width: 100%" class="activator" />
        </div>
        <div class="card-content">
          <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
          <p>${project.description}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
          <ul>
            <li><strong>Tools:</strong> ${project.tools}</li>
          </ul>
          <div class="card-action">
            <a href="${project.link}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey"><i class="fa fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Function to load and display more projects
function loadProjects() {
  const recentProjectsDiv = document.getElementById("recent-projects");

  // Load projectsPerPage number of projects
  for (let i = currentIndex; i < currentIndex + projectsPerPage && i < projects.length; i++) {
    const projectHTML = createProjectHTML(projects[i]);
    recentProjectsDiv.innerHTML += projectHTML;
  }

  // Update the index to track how many projects have been loaded
  currentIndex += projectsPerPage;

  // If all projects are loaded, hide the "Load More" button
  if (currentIndex >= projects.length) {
    document.getElementById("load-more-btn").style.display = "none";
  }
}

// Load the most recent project when the page loads
window.onload = function() {
  const recentProjectsDiv = document.getElementById("recent-projects");
  const mostRecentProjectHTML = createProjectHTML(projects[0]); // Show the first (most recent) project
  recentProjectsDiv.innerHTML = mostRecentProjectHTML;
};

// Add event listener to "Load More" button to load more projects
document.getElementById("load-more-btn").addEventListener("click", function() {
  loadProjects();
});