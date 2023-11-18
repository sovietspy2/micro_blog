export function setupSubscribe() {

    const subscribed = localStorage.getItem('subscribed');
    const panel = document.querySelector("body aside");
    const subscribeCloseButton = document.getElementById("close");

    if (!subscribed) {
        const subscribeButton = document.getElementById("subscribe");

        subscribeButton.addEventListener("click", (event) => {
            event.preventDefault();
           
            localStorage.setItem("subscribed", true);
            
            hideComponent(panel);
        });
    }

    subscribeCloseButton.addEventListener("click", ()=>{
        hideComponent(panel);
    });
}

function hideComponent(element) {
    element.classList.add("hide");

    setTimeout(function () {
        element.style.display = 'none';
    }, 1000);
}