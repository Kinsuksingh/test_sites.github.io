const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";


// let a = 4;
// let myVariable;
// a = 3;
// myVariable = "cast";

// /*
// Everything in between is a comment.
// */

// // This is a comment

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//     alert("Yay, I love chocolate ice cream!");
// }
// else {
//     alert("Awwww, but chocolate is my favorite…");
// }

// myVariable = document.querySelector("h1");

// alert("hello!");


// function multiply(num1,num2){
//     let result = num1*num2;
//     return result;
// }

// multiply(2,3);

// multiply(4, 7);
// multiply(20, 20);
// multiply(0.5, 3);

// document.querySelector("html").addEventListener("click", function(){
//     alert("Ouch stop poking me!");
// });


// document.querySelector("html").addEventListener("click", () => {
//     alert("Ouch! Stop poking me!");
// });




const myImage = document.querySelector("img");

myImage.onclick = () => {
const mySrc = myImage.getAttribute("src");
if (mySrc === "images/gym_image.jpg") {
    myImage.setAttribute("src", "images/gym_image.jpg");
}
else {
    myImage.setAttribute("src", "images/9_gym.jpg");
}
};


let mybutton = document.querySelector("button");
let myheading = document.querySelector("h2");

// ading personalize message feature

function setUserName(){
    const myName = prompt("please enter your name.");
    if (!myName){
        setUserName()
    }
    else{
        localStorage.setItem("name",myName);
        myheading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")){
    setUserName();
}
else{
    let storedName = localStorage.getItem("name");
    myheading.textContent = `Mozilla is cool, ${storedName}`;
}

mybutton.onclick = function(){
    setUserName();
}

