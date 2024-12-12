// Selecting the bulb icon and setting up the event listener
const themeToggle = document.getElementById('theme-icon');

// Check for previously stored theme preference in local storage
let isDarkMode = localStorage.getItem('dark-mode') === 'true';

// Apply initial theme based on preference
if (isDarkMode) {
    document.body.classList.add('dark-mode');
}

// Event listener for the theme toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;

    // Store the user's preference in local storage
    localStorage.setItem('dark-mode', isDarkMode);
});
