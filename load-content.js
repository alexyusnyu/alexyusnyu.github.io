document.addEventListener("DOMContentLoaded", function () {
  // Function to load content from an external file and insert it into a placeholder
  function loadContent(file, placeholderId) {
    fetch(file)
      .then(response => response.text())
      .then(content => {
        const placeholder = document.getElementById(placeholderId);
        placeholder.innerHTML = content;
      });
  }

  // Load header and navigation
  loadContent('header.html', 'header-placeholder');
  loadContent('nav.html', 'nav-placeholder');

  // Load about section
  loadContent('about.html', 'about-container');

  // Load projects section
  loadContent('projects.html', 'projects-container');

  // Load certificates section
  loadContent('certificates.html', 'certificates-container');

  // Load contact section
  loadContent('contact.html', 'contact-container');

  // Load footer
  loadContent('footer.html', 'footer-placeholder');
});
