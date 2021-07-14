let nav = document.getElementById("nav-link");
let a;

function show_nav() {
  if (a == 1) {
    nav.style.display = "block";

    return (a = 0);
  } else {
    nav.style.display = "none";

    return (a = 1);
  }
}
