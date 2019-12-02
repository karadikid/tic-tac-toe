console.log("script loaded");


const divContainer = document.querySelectorAll("div");
let gameArray = {};
let counter = 0;

divContainer.forEach(item => item.addEventListener("click", function (){
    checkScore();
    console.log(checkScore());
    if (counter % 2 == 0) {
        item.style.backgroundColor = 'red';
        counter += 1;
        console.log(item, counter);
    } else {
        item.style.backgroundColor = 'blue';
        counter += 1;
        console.log(item, counter)
    }
    
}));

function changeColor(){
    document.querySelector("div").backgroundColor = "red";
}

function checkScore(){
    if (document.querySelector("#zero").style.backgroundColor == "red" && document.querySelector("#one").style.backgroundColor == "red" && document.querySelector("#two") == "red" ||
    document.querySelector("#three").style.backgroundColor == "red" && document.querySelector("#four").style.backgroundColor == "red" && document.querySelector("#five") == "red" ||
    document.querySelector("#six").style.backgroundColor == "red" && document.querySelector("#seven").style.backgroundColor == "red" && document.querySelector("#eight") == "red" ||
    document.querySelector("#zero").style.backgroundColor == "red" && document.querySelector("#four").style.backgroundColor == "red" && document.querySelector("#eight") == "red"||
    document.querySelector("#two").style.backgroundColor == "red" && document.querySelector("#four").style.backgroundColor == "red" && document.querySelector("#six") == "red"
    ) {
        alert("Red Wins!");
    } else if (document.querySelector("#zero").style.backgroundColor == "blue" && document.querySelector("#one").style.backgroundColor == "blue" && document.querySelector("#two") == "blue" ||
    document.querySelector("#three").style.backgroundColor == "blue" && document.querySelector("#four").style.backgroundColor == "blue" && document.querySelector("#five") == "blue" ||
    document.querySelector("#six").style.backgroundColor == "blue" && document.querySelector("#seven").style.backgroundColor == "blue" && document.querySelector("#eight") == "blue" ||
    document.querySelector("#zero").style.backgroundColor == "blue" && document.querySelector("#four").style.backgroundColor == "blue" && document.querySelector("#eight") == "blue"||
    document.querySelector("#two").style.backgroundColor == "blue" && document.querySelector("#four").style.backgroundColor == "blue" && document.querySelector("#six") == "blue"
    ) {
        alert("Blue Wins!");
    } else {
        return 0;
    }
}   