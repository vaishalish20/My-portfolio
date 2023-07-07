
//   // Function to handle the document load event
//   function handleDocumentLoad() {
//     var navbar = document.querySelector('.navbar');

//     // Add the class to trigger the animation after 1 second
//     setTimeout(function() {
//       navbar.classList.add('slide-down');
//     }, 1000);
//   }

//   // Add document load event listener
//   document.addEventListener('DOMContentLoaded', handleDocumentLoad);




//   // Function to handle the document load event
//   function handleDocumentLoad() {
//     var navbar = document.querySelector('.navbar');
//     var heading = document.querySelector('.heading');
//     var paragraph = document.querySelector('.paragraph');

//     // Add the class to trigger the navbar animation after 1 second
//     setTimeout(function() {
//       navbar.classList.add('slide-down');
//     }, 1000);

//     // Add the class to trigger the heading and paragraph animation after 2 seconds
//     setTimeout(function() {
//       heading.classList.add('slide-up');
//       paragraph.classList.add('slide-up');
//     }, 2000);
//   }

//   // Add document load event listener
//   document.addEventListener('DOMContentLoaded', handleDocumentLoad);
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(function(card) {
      card.addEventListener('click', function() {
        this.classList.toggle('active');
      });
  
      card.addEventListener('mouseleave', function() {
        this.classList.remove('active');
      });
    });
  });
  
  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var offset = navbar.offsetHeight;
  
    if (scrolled > offset) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
  
  