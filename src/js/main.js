console.log("Js loaded");

document.addEventListener("DOMContentLoaded", ()=> {

// Fetch the Markdown content
fetch("/data/1.md")
  .then(response => response.text())
  .then(markdown => {
    // Convert Markdown to HTML using marked.js
    debugger;
    const text = marked.parse(markdown)

    // Display the HTML content in the post-content div
    //document.getElementById('post-content').innerHTML = html;
  })
  .catch(error => console.error('Error fetching the Markdown file:', error));



});