// Function to open modal
function openModal(projectId) {
    var modal = document.getElementById("myModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalDescription = document.getElementById("modalDescription");

    // Set modal content based on projectId
    if (projectId === "project1") {
        modalTitle.textContent = "Project Title 1";
        modalDescription.textContent = "Description of Project 1.";
    } else if (projectId === "project2") {
        modalTitle.textContent = "Project Title 2";
        modalDescription.textContent = "Description of Project 2.";
    }

    modal.style.display = "block";
}

// Function to close modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
