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

document.querySelectorAll('.sub-nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default behavior

        // Remove 'active' class from the currently active link
        document.querySelector('.sub-nav a.active').classList.remove('active');

        // Add 'active' class to the clicked link
        this.classList.add('active');

        // Hide all content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show the corresponding content section
        const sectionId = this.getAttribute('href').substring(1) + '-content';
        document.getElementById(sectionId).classList.add('active');
    });
});



// ===========================================================

const cards = document.querySelectorAll('.card');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

function updateSlider(index) {
  cards.forEach((card, idx) => {
    card.classList.remove('active', 'inactive-left', 'inactive-right');
    if (idx === index) {
      card.classList.add('active'); // Current active card
    } else if (idx < index) {
      card.classList.add('inactive-left'); // Cards to the left
    } else {
      card.classList.add('inactive-right'); // Cards to the right
    }
  });

  // Update active indicator
  indicators.forEach(indicator => indicator.classList.remove('active'));
  indicators[index].classList.add('active');
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % cards.length;
  updateSlider(currentIndex);
}

// Event listeners for indicators
indicators.forEach(indicator => {
  indicator.addEventListener('click', (e) => {
    const index = parseInt(e.target.getAttribute('data-index'));
    currentIndex = index;
    updateSlider(index);
  });
});

// Auto-slide every 3 seconds
setInterval(autoSlide, 3000);

// Initialize slider
updateSlider(currentIndex);





// ====================================================




