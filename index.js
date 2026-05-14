// initialize the count as 0
let count = 0
let countEl = document.getElementById("count-el")

// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

function increment() {
    count += 1
    countEl.innerText = count
}