const accesskey = "H1gPewD3hSNMzuEzk-IRMEToz-DHwvyJXIYWnvxcutM";
const formEl = document.getElementById("search-form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMoreButton = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = inputEl.value || "clothes";
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if (page === 1) {
        searchResults.innerHTML = "";
    }

    results.forEach((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description || "View Image";

        const price = document.createElement("div");
        price.classList.add("price");
        price.textContent = `$${(Math.random() * 100).toFixed(2)}`; // Random price for demonstration

        const review = document.createElement("div");
        review.classList.add("review");
        review.textContent = `${(Math.random() * 5).toFixed(1)} stars`; // Random review for demonstration
        
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        imageWrapper.appendChild(price);
        imageWrapper.appendChild(review);
        searchResults.appendChild(imageWrapper);
    });

    page++;
    if (page > 1) {
        showMoreButton.style.display = "block";
    }
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMoreButton.addEventListener("click", () => {
    searchImages();
});

var typed = new Typed('#element', {
    strings: ['Expert shops', 'order now', 'Wordpress Developer', 'Php Developer', 'Python Developer'],
    typeSpeed: 50,
});

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    document.querySelector("header ul").classList.toggle("show");
});
