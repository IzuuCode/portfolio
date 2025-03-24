let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");


menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};


function removeActiveClass() {
  navLinks.forEach((link) => link.classList.remove("active"));
}


function highlightActiveSection() {
  let scrollPosition = window.scrollY + window.innerHeight / 3; 
  let currentSection = null;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSection = section.id;
    }
  });

  removeActiveClass();

  if (currentSection) {
    let activeLink = document.querySelector(
      `header nav a[href="#${currentSection}"]`
    );
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }
}


window.addEventListener("scroll", highlightActiveSection);


document.addEventListener("DOMContentLoaded", highlightActiveSection);


emailjs.init("LyFVf1s9j8lfvnka2"); 

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const title = document.getElementById("title").value;
  const message = document.getElementById("msg").value; 
  const phone = document.getElementById("phone").value;

  
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Title:", title);
  console.log("Message:", message); 
  console.log("Phone:", phone);

  
  emailjs
    .send("service_ayuk0ex", "template_o5pluge", {
      name,
      email,
      title,
      message, 
      phone,
    })
    .then((response) => {
      console.log("Success!", response);
      alert("Your message has been sent successfully!");
      document.getElementById("contactForm").reset(); 
    })
    .catch((error) => {
      console.log("Failed...", error);
      alert("Sorry, something went wrong.");
    });
});
