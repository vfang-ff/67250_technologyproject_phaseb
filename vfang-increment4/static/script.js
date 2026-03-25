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

// // for loop version
// var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === "Banana") {
//             alert("Banana found!");
//         }
//     }
// }

// findTheBanana(L1);
// findTheBanana(L2);

// // forEach version
// function findTheBananaForEach(arr) {
//     arr.forEach(function(item) {
//         if (item === "Banana") {
//             alert("Banana found!");
//         }
//     });
// }

// findTheBananaForEach(L1);
// findTheBananaForEach(L2);


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
    

/* Sets the 'active' class on the navigation link that matches the current page URL.*/

function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Iterate over each link
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

// Execute the function to set the active navigation link on page load
ActiveNav();


// When the "Read Less" button is clicked
$("#readLess").click(function(){ 
    $("#longIntro").hide(); // Hide the long introduction text
    $("#readLess").hide();  // Hide the "Read Less" button itself
    $("#readMore").show();  // Show the "Read More" button  
    });
  
// When the "Read More" button is clicked
$("#readMore").click(function(){
    $("#longIntro").show();  // Show the long introduction text
    $("#readLess").show();   // Show the "Read Less" button
    $("#readMore").hide();   // Hide the "Read More" button  
    });


function showForm(date) {
    document.getElementById("purchaseForm").style.display = "block";
    document.getElementById("selectedDate").value = date;
}

function submitPurchase() {
    alert("Redirecting to payment system.");
}