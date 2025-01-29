const closeEL = document.querySelector(".close");
const burgerEl = document.querySelector(".burger");
const sideBarEl = document.querySelector(".side-bar")

// close and open function implementation

function closeBar() {
    sideBarEl.classList.remove("open-side-bar");
    sideBarEl.classList.add("side-bar");
}
function openBar() {
    sideBarEl.classList.add("open-side-bar");
}









closeEL.addEventListener('click',closeBar);
burgerEl.addEventListener('click',openBar);