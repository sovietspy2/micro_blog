
export function showContent(route) {
    loadAndSetContent(route);
    setLinkActive(route);
}

export function setLinkActive(route) {
    const elements = document.querySelectorAll(`nav ul li a`);

    elements.forEach(e => {
        e.classList.remove("selected");

        const url = new URL(e.href);
        const path = url.pathname;
        if (path === route) {
            e.classList.add("selected");
        }
    });
}

export function loadAndSetContent(route) {
    fetch(`${route}.html`)
        .then(response => response.text())
        .then(content => {
            document.getElementById('content').innerHTML = content;
        })
        .catch(error => console.error('Error loading content:', error));
}

export function handleLinkClick(event) {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    showContent(href);
}

export function initLinks() {
    const links = document.querySelectorAll("ul li a");
    links.forEach((link) => {
        link.addEventListener("click", handleLinkClick);
    });
}
