
var isCollapsed = false;
var isTextEmpty = true;

function checkIfTextIsEmpty(){
  var input = document.getElementById("search-box").value;
   if(input != ""){
     document.getElementById("clear-text").style.visibility = "visible";
  }else{
    document.getElementById("clear-text").style.visibility = "hidden";
  }
}

function checkIfSubmitted(){
  if(window.event.keyCode == 13){
    document.getElementsByClassName("search-box")[0].style.width = "0rem";
    document.getElementById("search-icon").style.width = "24px";
    document.getElementById("search-box").value = "";
  }
}

function viewSearchBox(){
  document.getElementsByClassName("search-box")[0].style.width = "18rem";
  document.getElementById("search-icon").style.width = "0rem";
}

function myFunction() {
    if (isCollapsed) {
      document.getElementsByClassName("branding-content")[0].style.width = 
      "0px";
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
      "24px";
      document.getElementsByClassName("branding-content")[0].style.width = 
      "auto";
      isCollapsed = true;
    }
  }