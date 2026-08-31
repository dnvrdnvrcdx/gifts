document.addEventListener("DOMContentLoaded", () => {
    const openGift = document.getElementById("openGift");

    if (!openGift) return;

    openGift.addEventListener("click", () => {
        document.body.classList.add("opening");

        setTimeout(() => {
            window.location.href = "bouquet.html";
        }, 350);
    });
});
