let count = 0; //Initialize count to 0

function increaseCount() {
    count++; //Increment the count by 1
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML=count; //Display the count in the HTML
}

function checkCountValue() {
    if (count === 10) {
        alert ("Your instagram post gained 10 followers! Congrats!");
    } else if (count === 20) {
        alert ("Your Instagram post gained 20 followers! Congrats!")
    }
}

function resetCounter() {
    count = 0;
    displayCount();
    checkeResetCounter();
}

function checkeResetCounter() {
    alert ("Your counter has been reset.");
}
