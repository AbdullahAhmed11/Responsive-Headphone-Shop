// function toggle menue

const navMenue = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const links = document.querySelectorAll(".nav-list li a");

navToggle.addEventListener("click", function () {
  navMenue.classList.toggle("show-menu");
});

// function scroll header
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);






// Show Scroll Up Btn
window.onscroll = () => {
  const scrollBtn = document.querySelector(".scrollup");
  if(this.scrollY > 200) {
    scrollBtn.style.display = "block"
  }else {
    scrollBtn.style.display = "none"
  }
}
scrollBtn.onclick = () => {
  window.scrollTo(0, 0)

}

// active on links

// links.forEach(item => {
//   item.parentElement.classList.remove("active")
// })
//   item

//add class active 
const navLinks = document.querySelectorAll(".nav-list li a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((lin) => {
      lin.classList.remove("active")
    });
    e.target.classList.add("active");
  })
})