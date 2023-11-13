console.log("Js loaded");

const content = document.getElementById('content');

function showContent(route) {

  fetch(`${route}.html`)
    .then(response => response.text())
    .then(content => {
      document.getElementById('content').innerHTML = content;
    })
    .catch(error => console.error('Error loading content:', error));

}


function handleLinkClick(event) {
  event.preventDefault(); // Prevent the default link behavior
  const href = event.target.getAttribute("href");
  showContent(href);
}

const links = document.querySelectorAll("ul li a");
links.forEach((link) => {
  link.addEventListener("click", handleLinkClick);
});


