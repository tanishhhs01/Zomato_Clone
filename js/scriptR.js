// ===============================
// SUBSCRIBE FORM
// ===============================

const emailInput = document.getElementById("email");
const subscribeBtn = document.getElementById("subscribeBtn");
const subscribeMessage = document.getElementById("subscribeMessage");

subscribeBtn.addEventListener("click", function () {

    const email = emailInput.value.trim();

    if (email === "") {
        subscribeMessage.textContent = "Please enter your email.";
        subscribeMessage.style.color = "#e23744";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        subscribeMessage.textContent = "Please enter a valid email address.";
        subscribeMessage.style.color = "#e23744";
        return;
    }

    subscribeMessage.textContent =
        "Thank you! You have been subscribed to our updates.";

    subscribeMessage.style.color = "green";

    emailInput.value = "";
});


// ===============================
// ENTER KEY
// ===============================

emailInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        subscribeBtn.click();
    }

});


// ===============================
// CARD ANIMATION
// ===============================

const cards = document.querySelectorAll(".business-card");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.style.animation =
                    "fadeUp 0.6s ease forwards";

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function (card) {
    card.style.opacity = "0";
    observer.observe(card);
});