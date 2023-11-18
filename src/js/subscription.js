export function setupSubscribe() {

    const subscribed = localStorage.getItem('subscribed');
    const panel = document.querySelector("body aside");
    const subscribeCloseButton = document.getElementById("close");

    if (!subscribed) {
        const subscribeButton = document.getElementById("subscribe");

        subscribeButton.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("cliked on subscribe")
            localStorage.setItem("subscribed", true);
            panel.style.display = "none";
        });
    }

    subscribeCloseButton.addEventListener("click", ()=>{
        panel.style.display = "none";
    });
}