// const initApp = () => {
//   const hamburgerBtn = document.getElementById("harmburger-button");
//   const mobileMenu = document.getElementById("mobile-menu");

//   const toggleMenu = () => {
//     mobileMenu.classList.toggle("hidden");
//     mobileMenu.classList.toggle("flex");
//   };
//   hamburgerBtn.addEventListener("click", toggleMenu);
//   mobileMenu.addEventListener("click", toggleMenu);
// };
// document.addEventListener("DOMcontentLoaded", initApp);

const sideBar = document.querySelector("#mobilemenu");
const harmburgerbutton = document.querySelector("#harmburgerbutton");

const toggleMenu = () => {
  sideBar.classList.toggle("hidden");
  sideBar.classList.toggle("flex");
};
harmburgerbutton.addEventListener("click", toggleMenu);
sideBar.addEventListener("click", toggleMenu);
// harmburgerbutton.addEventListener("click", () => {
//   sideBar.classList.toggle("hidden");
// });

///////////////////////// working
// const sideBar = document.querySelector("#mobilemenu");
// const harmburgerbutton = document.querySelector("#harmburgerbutton");

// harmburgerbutton.addEventListener("click",  () => {
//   sideBar.classList.toggle("hidden");
// });
