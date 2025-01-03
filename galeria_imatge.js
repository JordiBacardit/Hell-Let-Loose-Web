window.onload = function() {
    let images = document.querySelectorAll("section img");

    images.forEach((img) => {
        img.addEventListener("click", () => {
            let expandir = img.classList.contains("expanded");

            images.forEach((image) => {
                image.classList.remove("expanded");
            });

            if (!expandir) {
                img.classList.add("expanded");
            }
        });
    });
};