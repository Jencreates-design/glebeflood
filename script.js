document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const msg = document.getElementById("form-success");

    if (form) {
        form.addEventListener("submit", function () {
            msg.classList.add("show");
        });
    }
});
