
var isCollapsed = false;
function myFunction() {
    if (isCollapsed) {
      document.getElementsByClassName("branding-content")[0].style.height = 
      "0px";
      document.getElementsByClassName("navbar")[0].style.transform = 
      "translateX(0px)";
      document.getElementById("main-content").style.transform =
        "translateX(0px)";
      document.getElementById("main-content").style.width =
        "calc(100% - 300px)";
      const buttons = document.getElementsByClassName("hide-navbar");
      buttons[0].style.transform = "translateX(0) scaleX(1)";
      buttons[0].style.backgroundColor = "#FFF";
      isCollapsed = false;
    } else {
      document.getElementsByClassName("navbar")[0].style.transform = 
      "translateX(-300px)";
      document.getElementById("main-content").style.width = "100%";
      document.getElementById("main-content").style.transform =
        "translateX(-300px)";
      const buttons = document.getElementsByClassName("hide-navbar");
      buttons[0].style.transform = "translateX(-290px) scaleX(-1)";
      buttons[0].style.backgroundColor = "#F8F8F8";
      document.getElementsByClassName("branding-content")[0].style.height = 
      "25px";
      isCollapsed = true;
    }
  }