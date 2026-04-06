let x = 5;
let y = 7;
let z = x + y;
console.log(z);

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
    console.log(x1 + x2);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

const now = new Date();
const hours = now.getHours();

function greeting(hours) {
    var greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        if ((hours >= 20 && hours < 24) || (hours < 5)) {
            document.getElementById("greeting").innerHTML = "Good night!";
        } else if (hours < 12) {
            document.getElementById("greeting").innerHTML = "Good morning!";
        } else if (hours < 18 && hours >= 12) {
            document.getElementById("greeting").innerHTML = "Good afternoon!";
        } else {
            document.getElementById("greeting").innerHTML = "Good evening!";
        }
    }
}

greeting(hours);

function addYear() {
    var yearElement = document.getElementById("copyYear");
    if (yearElement) {
        var currentYear = new Date().getFullYear();
        yearElement.innerHTML = "© " + currentYear + " MonoMuse. All rights reserved.";
    }
}

/* Sets the 'active' class on the navigation link that matches the current page URL. */
function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

ActiveNav();

// When the "Read Less" button is clicked
$("#readLess").click(function () {
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
});

// When the "Read More" button is clicked
$("#readMore").click(function () {
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
});

function showForm(date) {
    document.getElementById("purchaseForm").style.display = "block";
    document.getElementById("selectedDate").value = date;
}

function submitPurchase() {
    alert("Redirecting to payment system.");
}

/* Hamburger menu toggle for mobile nav */
function toggleNav() {
    var navbar = document.querySelector(".nav_bar");
    if (navbar) {
        navbar.classList.toggle("responsive");
    }
}