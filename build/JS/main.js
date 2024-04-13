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

// gsap.set("#mobilemenu", {
//   y: -800,
// });
// gsap.to("#mobilemenu", {
//   y: 5,
//   yoyo: true,
//   duration: 4,
// });
// document.addEventListener("DOMcontentLoaded", initApp);
// harmburgerbutton.addEventListener("click", () => {
//   sideBar.classList.toggle("hidden");
// });

///////////////////////// working
// const sideBar = document.querySelector("#mobilemenu");
// const harmburgerbutton = document.querySelector("#harmburgerbutton");

// harmburgerbutton.addEventListener("click",  () => {
//   sideBar.classList.toggle("hidden");
// });
// animation1///////////////////////////////////////
// gsap.to("#imgdab", {
//   rotation: 360,
//   duration: 2,
//   ease: "bounce.out",
// });

// img animation///////////////////////////
gsap.set("#imgdab", {
  y: -450,
});
gsap.to("#imgdab", {
  y: 5,
  yoyo: true,
  duration: 2,
});
// h1 Animation//////////////////////////
gsap.set("#boldly", {
  x: -700,
});
gsap.to("#boldly", {
  x: 0,
  duration: 2,
});
// p Animation//////////////////////////
gsap.set("#think", {
  x: 1200,
});
gsap.to("#think", {
  x: 0,
  duration: 2,
});
