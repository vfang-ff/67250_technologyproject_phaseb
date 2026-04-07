const now = new Date();
const hours = now.getHours();

function greeting(hours) {
    var greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        if ((hours >= 20 && hours < 24) || (hours < 5)) {
            greetingElement.innerHTML = "Good Night! Welcome to The Hip-Hop Dance Museum.";
        } else if (hours < 12) {
            greetingElement.innerHTML = "Good Morning! Welcome to The Hip-Hop Dance Museum.";
        } else if (hours < 18) {
            greetingElement.innerHTML = "Good Afternoon! Welcome to The Hip-Hop Dance Museum.";
        } else {
            greetingElement.innerHTML = "Good Evening! Welcome to The Hip-Hop Dance Museum.";
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
    if (tickets.value === "" || parseInt(tickets.value) < 1 || parseInt(tickets.value) > 10) {
        alert("Please enter a number of tickets between 1 and 10.");
        tickets.focus();
        return;
    }

    var total = parseInt(tickets.value) * 15;
    document.getElementById("purchaseForm").style.display = "none";

    var confirmation = document.getElementById("orderConfirmation");
    document.getElementById("confirm-name").textContent = name.value.trim();
    document.getElementById("confirm-date").textContent = date.value;
    document.getElementById("confirm-tickets").textContent = tickets.value + (tickets.value == 1 ? " ticket" : " tickets");
    document.getElementById("confirm-total").textContent = "$" + total;
    confirmation.style.display = "block";
    confirmation.scrollIntoView({ behavior: "smooth" });
}
