
document.addEventListener("DOMContentLoaded", function () {
    const shops = document.querySelectorAll("svg [id^='s']");

    shops.forEach((shop) => {
        shop.style.cursor = "pointer";

        shop.addEventListener("mouseover", () => {
            shop.setAttribute("fill", "#ff0000");
        });

        shop.addEventListener("mouseout", () => {
            shop.setAttribute("fill", "#ccc");
        });

        shop.addEventListener("click", () => {
            window.location.href = `shops/${shop.id}.html`;
        });
    });
});
