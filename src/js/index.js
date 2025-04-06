let isToggled = false;

function toggleMenu() {
  const sidemenu = document.querySelector(".SideMenu");
  if (!isToggled) {
    sidemenu.style.display = "block";
  }
  else sidemenu.style.display = "none";

  changeToggleIcon();
  isToggled = !isToggled;
}

function changeToggleIcon() {
  const iconElement = document.querySelector(".side-menu-opener");
  const classes = iconElement.classList;

  if (classes.contains("fa-xmark")) {
    classes.replace("fa-xmark", "fa-bars");
  } else if (classes.contains("fa-bars")) {
    classes.replace("fa-bars", "fa-xmark");
  }
}

window.onscroll = (e) => {
  const sidemenu = document.querySelector(".SideMenu");
  sidemenu.style.display = "none";
  if (isToggled) changeToggleIcon();
  isToggled = false;
};
