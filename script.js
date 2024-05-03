// scripts.js

// Animation on scroll
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      const elements = document.querySelectorAll(".hidden");
      elements.forEach(function(element) {
        if (isElementInViewport(element)) {
          element.classList.add("fadeIn");
          element.classList.remove("hidden");
        }
      });
    });
  });
  
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Form validation
  const submissionForm = document.getElementById("submissionForm");
  submissionForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const artwork = document.getElementById("artwork").value;
  
    if (name.trim() === "" || email.trim() === "" || artwork.trim() === "") {
      alert("Please fill in all fields.");
    } else {
      // Send form data to backend or display success message
      alert("Submission successful!");
      submissionForm.reset();
    }
  });
  
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("message").value;
  
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields.");
    } else {
      // Send form data to backend or display success message
      alert("Message sent successfully!");
      contactForm.reset();
    }
  });
// scripts.js

// Open modal
function openModal(title, description) {
    alert("hello")
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
  
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.style.display = "block";
  }
  
  // Close modal
  function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  // Close modal when clicking outside of it
  window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // scripts.js

// Animation on scroll to form section
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      const formSection = document.getElementById("submission");
      const form = document.getElementById("submissionForm");
      const triggerOffset = formSection.offsetTop - window.innerHeight + 200; // Adjust 200 for desired offset
  
      if (window.pageYOffset > triggerOffset) {
        form.classList.remove("hidden");
        form.classList.add("slideIn");
      }
    });
  });
  
    