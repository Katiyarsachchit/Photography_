// --- 1. Portfolio Filtering Logic ---

filterSelection("all") // Execute the function and show all columns

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove it from the others
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

// Helper function to add class
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Helper function to remove class
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// --- 2. Booking Functionality ---

let selectedPackage = "";

function openBookingForm(packageName) {
    selectedPackage = packageName;
    // Reveal the contact form
    document.querySelector('.contact-form').style.display = 'block';
    // Scroll to the form
    document.querySelector('.contact-form').scrollIntoView({ behavior: 'smooth' });
    alert("You selected the " + packageName + " package. Please fill in your details below.");
}

function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if(name === "" || email === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Thank you, " + name + "! \nWe have received your request for the '" + selectedPackage + "' package.\nWe will contact you at " + email + " shortly.");
        // Clear fields
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.querySelector('.contact-form').style.display = 'none';
    }
}