export function setupSubscribe() {

    var subscribed = localStorage.getItem('subscribed');

    if (!subscribed) {
        const subscribeButton = document.getElementById("subscribe");

        subscribeButton.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("cliked on subscribe")
            localStorage.setItem("subscribed", true);

            const panel = document.querySelector("body aside");

            panel.style.display = "none";
        });
    }
}