let zoomLevel = 1;

function zoomIn() {
    zoomLevel += 0.1;
    document.body.style.transform = `scale(${zoomLevel})`;
    document.body.style.transformOrigin = '0 0'; // Keeps the zoom aligned with the top-left corner
}

function zoomOut() {
    if (zoomLevel > 0.5) {  // Set a minimum zoom level to avoid zooming out too much
        zoomLevel -= 0.1;
        document.body.style.transform = `scale(${zoomLevel})`;
        document.body.style.transformOrigin = '0 0'; 
    }
}

// function animateGiftHorizontally() {
//     let gift = document.getElementById("gift");
//     let position = 0;      
//     let direction = 1;     
    
//     function move() {
        
//         position += 2 * direction;  
        
//         // Reverse direction when hitting the edges
//         if (position >= 30 || position <= 0) {
//             direction *= -1;  // Reverse the direction
//         }

//         // Apply the movement using translateX
//         gift.style.transform = `translateX(${position}px)`;
//     }
    
//     setInterval(move, 100);  // Control the speed of the movement
// }

// animateGiftHorizontally();



let slideIndex = 0;
const slides = document.querySelectorAll(".carousel img");
const dots = document.querySelectorAll(".dot");
let slideInterval;

function showSlides() {
    // Hide all images and remove the active class from dots
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    // Move to the next slide
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    // Show the current slide and activate the dot
    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}

function startSlides() {
    slideInterval = setInterval(showSlides, 3000); // Change slide every 3 seconds
}

function currentSlide(n) {
    clearInterval(slideInterval); // Stop the automatic sliding
    slideIndex = n; // Set the current slide index
    showSlides(); // Show the selected slide
    startSlides(); // Restart the automatic sliding
}

// Show the first slide and then start the interval
showSlides(); // Show the first slide
startSlides(); // Start the interval for automatic sliding


function toggleLinks() {
    var links = document.querySelectorAll('.links-list');
    var button = document.getElementById('toggleButton');

    links.forEach(function(list) {
        list.classList.toggle('expanded');
    });

    if (button.innerText === 'Show More') {
        button.innerText = 'Show Less';
    } else {
        button.innerText = 'Show More';
    }
}
