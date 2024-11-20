function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


      AOS.init({
          duration: 800,
          offset: 100,
          mirror: true,  // This enables animations when scrolling up
          once: false    // This allows animations to repeat
      });
  
     
      window.addEventListener('load', function() {
        const loader = document.getElementById('loader-wrapper');
        const mainContent = document.getElementById('main-content');

        // Show the main content
        mainContent.classList.remove('hidden');
        mainContent.classList.add('visible');

        // Set timeout to hide the loader after 4000ms (4 seconds)
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.style.display = 'none'; // Remove the loader from the DOM
            }, 300); // Match this with the fade-out transition duration
        }, 2000); // Show loader for 4 seconds
    });


    var typed = new Typed(".auto-input", {
        strings: [
            "an Java developer",
            "a Java Full Stack Developer",
            "a Web Developer",
        ],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
    });




    document.getElementById('theme-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });



    document.addEventListener('scroll', function() {
        const animatedLines = document.querySelectorAll('.animated-line');
        const scrollPosition = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
    
        // Calculate the maximum scrollable height
        const maxScrollHeight = document.body.scrollHeight - windowHeight;
    
        // Calculate the percentage of how far the user has scrolled
        const scrollPercentage = Math.min(scrollPosition / maxScrollHeight, 1); // Ensure it doesn't exceed 100%
    
        // Set the width of each animated line based on scroll percentage
        animatedLines.forEach(line => {
            line.style.width = (scrollPercentage * 100) + '%';
        });
    });
    



    document.addEventListener('DOMContentLoaded', function() {
        const words = document.querySelectorAll('.word');
    
        function isElementInViewport(el) {
          const rect = el.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
        }
    
        function handleScroll() {
          words.forEach((word) => {
            if (isElementInViewport(word)) {
              word.classList.add('animate'); // Add the class to trigger animation
            }
          });
        }
    
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on page load
      });