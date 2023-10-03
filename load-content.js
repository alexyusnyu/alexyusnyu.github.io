document.addEventListener("DOMContentLoaded", function() {
  function loadContent(file, placeholderId) {
    fetch(file)
      .then(response => response.text())
      .then(content => {
        const placeholder = document.getElementById(placeholderId);
        placeholder.innerHTML = content;
      });
  }

  loadContent('header.html', 'header-placeholder');
  loadContent('about.html', 'about-container');
  loadContent('projects.html', 'projects-container');
  loadContent('certificates.html', 'certificates-container');
  loadContent('contact.html', 'contact-container');
  loadContent('footer.html', 'footer-placeholder');

  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", function() {
    mobileMenu.style.display = mobileMenu.style.display === "block" ? "none" : "block";
    menuButton.classList.toggle("active");
  });
});
