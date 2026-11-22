(function () {
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  var links = nav.querySelectorAll("a");

  // Mobile menu
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  links.forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });

  // Highlight the nav link for the section in view
  if ("IntersectionObserver" in window) {
    var sections = document.querySelectorAll("main section[id]");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { observer.observe(s); });
  }

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
