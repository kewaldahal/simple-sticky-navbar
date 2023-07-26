const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetSection = document.querySelector(link.getAttribute('href'));
    const offsetTop = targetSection.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});
//typing animation ko code 
//copy garnu pare credit diyera garda hunxa 
document.addEventListener('DOMContentLoaded', function() {
  const typed = new Typed('.typed-text', {
    strings: ["LEARNER", "FUTURE DEVELOPER", "TECHNERD", "LAZY"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });
});
