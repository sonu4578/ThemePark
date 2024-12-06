// Function to show the relevant section (Rides, Dining, or Shop)
function showSection(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((sec) => {
        sec.style.display = 'none';
    });

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach((btn) => {
        btn.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(section).style.display = 'block';

    // Add active class to the clicked button
    document.querySelector(`[onclick="showSection('${section}')"]`).classList.add('active');
}

// Default to show Rides when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showSection('rides');
});
