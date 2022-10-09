// TOMATO COUNTER APP

// pseudo code steps:
// 1 intialize the count as 0
// 2 listen for clicks on the increment button
// 3 increment the count variable when the button is clicked
// 4 change the count-el in the HTML to reflect the new count

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let counterStr = count + " - ";
    saveEl.textContent += counterStr;
    // to make sure spacing remains intact: textContent preserves all info in strings - inc non-human readable content (i.e., spaces) - as innerText does not
    countEl.textContent = 0;
    count = 0;
}


