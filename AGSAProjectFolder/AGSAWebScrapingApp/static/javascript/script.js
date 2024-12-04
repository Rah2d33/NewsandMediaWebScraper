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

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const tiles = Array.from(document.querySelectorAll(".tile"));
    const indicators = document.querySelectorAll(".indicator");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    let currentIndex = 0;
    const slideInterval = 2500; // Auto-slide interval
    let autoSlide;

    const updateCarousel = () => {
        // Update tiles
        tiles.forEach((tile, index) => {
            if (index === currentIndex) {
                // Active tile
                tile.classList.add("active");
                tile.style.transform = "translateX(0)"; // Bring into view
            } else {
                // Inactive tiles
                tile.classList.remove("active");
                tile.style.transform = index < currentIndex ? "translateX(-100%)" : "translateX(100%)"; // Move out of view
            }

            // Ensure opacity is set for each tile, active ones are visible
            tile.style.opacity = index === currentIndex ? "1" : "0";
        });

        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === currentIndex);
        });

        // Update buttons
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === tiles.length - 1;
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % tiles.length;
        updateCarousel();
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + tiles.length) % tiles.length;
        updateCarousel();
    };

    prevButton.addEventListener("click", () => {
        clearInterval(autoSlide);
        prevSlide();
        autoSlide = setInterval(nextSlide, slideInterval);
    });

    nextButton.addEventListener("click", () => {
        clearInterval(autoSlide);
        nextSlide();
        autoSlide = setInterval(nextSlide, slideInterval);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            clearInterval(autoSlide);
            currentIndex = index;
            updateCarousel();
            autoSlide = setInterval(nextSlide, slideInterval);
        });
    });

    // Initialize carousel and start auto-sliding
    updateCarousel();
    autoSlide = setInterval(nextSlide, slideInterval);
});




// ====================================================




