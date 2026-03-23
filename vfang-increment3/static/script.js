var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
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


now = new Date();
hours = now.getHours();

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