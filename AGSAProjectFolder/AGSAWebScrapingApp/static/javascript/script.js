// Select elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');

// Function to handle search
const performSearch = () => {
    const query = searchInput.value.trim();
    if (query) {
        alert(`Searching for: ${query}`);
        // Implement search logic here
    }
};

// Event listener for input to toggle icon and clear button
searchInput.addEventListener('input', () => {
    const icon = searchButton.querySelector('i');
    if (searchInput.value) {
        icon.classList.remove('bi-search');
        icon.classList.add('bi-x');
    } else {
        icon.classList.remove('bi-x');
        icon.classList.add('bi-search');
    }
});

// Event listener for button click
searchButton.addEventListener('click', () => {
    if (searchInput.value) {
        searchInput.value = '';
        const icon = searchButton.querySelector('i');
        icon.classList.remove('bi-x');
        icon.classList.add('bi-search');
    } else {
        performSearch();
    }
});

// Event listener for Enter key
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        performSearch();
    }
});


// JavaScript to manage the active class for sub-nav links
document.querySelectorAll('.sub-nav a').forEach(link => {
    link.addEventListener('click', function () {
        // Remove 'active' class from the currently active link
        document.querySelector('.sub-nav a.active').classList.remove('active');
        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});


