// =========================
// SEARCH FUNCTION
// =========================

const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

searchButton.addEventListener("click", function () {

    const searchValue = searchInput.value.trim();

    if (searchValue === "") {
        alert("Please enter a restaurant, cuisine or dish.");
        searchInput.focus();
        return;
    }

    alert("Searching for: " + searchValue);
});


// =========================
// ENTER KEY SEARCH
// =========================

searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        searchButton.click();
    }

});