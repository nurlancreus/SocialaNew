let headerBtns = document.querySelectorAll(".header__nav__ul > li > a");

for (let i = 0; i < headerBtns.length; i++) {
  headerBtns[i].addEventListener("click", function changeCurrentpage() {
    let currentPage = document.querySelectorAll(".header__nav__ul > li");

    for (li of currentPage) {
      if (li.hasAttribute("aria-current")) {
        li.removeAttribute("aria-current");
      }
    }
    currentPage[i].setAttribute("aria-current", "page");
  });
}
