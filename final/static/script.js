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
            greetingElement.innerHTML = "Good night! Welcome to The Hip-Hop Dance Museum.";
        } else if (hours < 12) {
            greetingElement.innerHTML = "Good morning! Welcome to The Hip-Hop Dance Museum.";
        } else if (hours < 18) {
            greetingElement.innerHTML = "Good afternoon! Welcome to The Hip-Hop Dance Museum.";
        } else {
            greetingElement.innerHTML = "Good evening! Welcome to The Hip-Hop Dance Museum.";
        }
    }
}
greeting(hours);

function addYear() {
    var yearElement = document.getElementById("copyYear");
    if (yearElement) {
        var currentYear = new Date().getFullYear();
        yearElement.innerHTML = "© " + currentYear + " The Hip-Hop Dance Museum. All rights reserved.";
    }
}

function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}
ActiveNav();

$("#readLess").click(function () {
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
});

$("#readMore").click(function () {
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
});

function toggleNav() {
    var navbar = document.querySelector(".nav_bar");
    if (navbar) {
        navbar.classList.toggle("responsive");
    }
}

function showForm(date) {
    var form = document.getElementById("purchaseForm");
    if (form) {
        form.style.display = "block";
        document.getElementById("selectedDate").value = date;
        form.scrollIntoView({ behavior: "smooth" });
    }
}

function submitPurchase() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var tickets = document.getElementById("tickets");
    var date = document.getElementById("selectedDate");

    if (!name || !email || !tickets || !date) return;

    if (name.value.trim() === "") {
        alert("Please enter your full name.");
        name.focus();
        return;
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        alert("Please enter a valid email address.");
        email.focus();
        return;
    }
    if (tickets.value === "" || tickets.value < 1 || tickets.value > 10) {
        alert("Please enter a number of tickets between 1 and 10.");
        tickets.focus();
        return;
    }

    var params = new URLSearchParams({
        name: name.value.trim(),
        tickets: tickets.value,
        date: date.value
    });
    window.location.href = "checkout.html?" + params.toString();
}