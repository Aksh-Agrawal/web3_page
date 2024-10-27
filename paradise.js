window.addEventListener('scroll', () => {
    const firstContainer = document.querySelector('.first');
   

    const scrollPosition = window.scrollY;

    // Check if scrolled down enough
    if (scrollPosition > 10) { // Adjust the threshold as needed
        firstContainer.classList.add('Srheader');
        secondContainer.style.display = 'block'; // Show the second container
    } else {
        firstContainer.classList.remove('Srheader');
        secondContainer.style.display = 'none'; // Hide the second container
    }
});



const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav1 ul li .link');

    // IntersectionObserver to observe when sections enter the viewport
    const options = {
      root: null, // null = viewport
      threshold: 0.6 // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          // Remove active class from all nav links
          navLinks.forEach(link => {
            link.classList.remove('active');
          });
          // Add active class to the current section's nav link
          document.getElementById(`nav-${id}`).classList.add('active');
        }
      });
    }, options);

    // Observe each section
    sections.forEach(section => {
      observer.observe(section);
    });

// const text = "Welcome to Programmers' Paradise.";
// let charIndex = 0;
// let currentText = "";
// let isDeleting = false;
// const typingSpeed = 100; // Typing speed in ms
// const pauseBetweenCycles = 4000; // Pause after full text is typed

// function type() {
//     const typewriter = document.getElementById('typewriter');

//     if (isDeleting) {
//         currentText = text.substring(0, charIndex--);
//     } else {
//         currentText = text.substring(0, charIndex++);
//     }

//     typewriter.textContent = currentText;

//     if (!isDeleting && charIndex === text.length) {
//         isDeleting = true;
//         setTimeout(type, pauseBetweenCycles); // Pause after fully typing the text
//     } else if (isDeleting && charIndex === 0) {
//         isDeleting = false;
//         setTimeout(type, typingSpeed); // Start typing again
//     } else {
//         setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed); // Speed up deletion
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     type();
// });

// const text2 = "Your gateway to the exciting world of coding and technology at CSVTU! Explore, learn, and innovate with us.";
// let charIndex2 = 0;
// let currentText2 = " ";
// let isDeleting2 = false;
// const typingSpeed2 = 50; // Typing speed in ms
// const pauseBetweenCycles2 = 7000; // Pause after full text is typed

// function type2() {
//     const typewriter2 = document.getElementById('typewriter2');

//     if (isDeleting2) {
//         currentText2 = text2.substring(0, charIndex2--);
//     } else {
//         currentText2 = text2.substring(0, charIndex2++);
//     }

//     typewriter2.textContent = currentText2;

//     if (!isDeleting2 && charIndex2 === text2.length) {
//         isDeleting2 = true;
//         setTimeout(type2, pauseBetweenCycles2); // Pause after fully typing the text
//     } else if (isDeleting2 && charIndex2 === 0) {
//         isDeleting2 = false;
//         setTimeout(type2, typingSpeed2); // Start typing again
//     } else {
//         setTimeout(type2, isDeleting2 ? typingSpeed2 / 2 : typingSpeed2); // Speed up deletion
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     type2();
// });

const container = document.getElementById('nav2');
const image = document.getElementById('college-logo');



container.addEventListener('mouseenter', () => {
  
    image.style.transform = 'translateX(-40vw)'; 
   
});

container.addEventListener('mouseleave', () => {
    image.style.transform = 'translateX(0)'; 
  
    
   
});


const container2 = document.getElementById('nav-2');
const image2 = document.getElementById('Blockchain');



container2.addEventListener('mouseenter', () => {
  
    image2.style.transform = 'translateX(25vw)'; 
   
});

container2.addEventListener('mouseleave', () => {
    image2.style.transform = 'translateX(0)'; 
  
    
   
});



function toggleDetails(detailType) {
  const detail = document.getElementById(`${detailType}-detail`);
  detail.classList.toggle('show');
}

window.onload = function() {
  setTimeout(function() {
    const coverScreen = document.getElementById('cover-screen');
    coverScreen.style.transform = 'translateY(-100%)'; // Move the cover screen up
    document.body.style.overflow = 'auto'; // Allow scrolling after transition
  }, 2000); // Change the delay time as needed
};