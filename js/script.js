// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

//klik hamburger
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

//klik luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

//Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelector(".item-detail-button");
const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const itemDetailButton2 = document.querySelector(".item-detail-button2");
const itemDetailModal3 = document.querySelector("#item-detail-modal3");
const itemDetailButton3 = document.querySelector(".item-detail-button3");
const itemDetailModal4 = document.querySelector("#item-detail-modal4");
const itemDetailButton4 = document.querySelector(".item-detail-button4");

itemDetailButton.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};

// Modal box 2
itemDetailButton2.onclick = (e) => {
  itemDetailModal2.style.display = "flex";
  e.preventDefault();
};

// Modal box 3
itemDetailButton3.onclick = (e) => {
  itemDetailModal3.style.display = "flex";
  e.preventDefault();
};

// Modal box 4
itemDetailButton4.onclick = (e) => {
  itemDetailModal4.style.display = "flex";
  e.preventDefault();
};

//klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal2 .close-icon2").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal3 .close-icon3").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal4 .close-icon4").onclick = (e) => {
  itemDetailModal4.style.display = "none";
  e.preventDefault();
};
