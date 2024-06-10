// JS for toggle menu
// JavaScript menu toggle ke liye

var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
  // menutoggle() function toggle karta hai menu ki visibility ko
  if (MenuItems.style.maxHeight === "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

// JS for product gallery
// JavaScript product image gallery ke liye

var productimg = document.getElementById("product-img");
var smallimg = document.getElementsByClassName("small-img");

for (var i = 0; i < smallimg.length; i++) {
  smallimg[i].onclick = function () {
    // Chhote image par click karne par mukhya image badalne wala function
    productimg.src = this.src;
  }
}

// Account Page form
// Account page ke form ke liye JavaScript

var loginform = document.getElementById("login-form");
var regform = document.getElementById("register-form");
var Indicator = document.getElementById("Indicator");

function register() {
  // register() function dikhata hai register form aur indicator ko move karta hai
  regform.style.transform = "translateX(0px)";
  loginform.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(100px)";
}

function login() {
  // login() function dikhata hai login form aur indicator ko move karta hai
  regform.style.transform = "translateX(300px)";
  loginform.style.transform = "translateX(300px)";
  Indicator.style.transform = "translateX(0px)";
}
