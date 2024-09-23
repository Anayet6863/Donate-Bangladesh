// Call for removing class.
document.getElementById("donate-btn").addEventListener('click', function () {
    //console.log("frature Loaded");
    hiddenClass("hidden-items");
    addClass("history-container");
})
//Call for adding class.
document.getElementById("history-btn").addEventListener('click', function () {
    //console.log("frature Loaded");
    hiddenClass("history-container");
    addClass("hidden-items");
})
// Calling  blog page:
document.getElementById("call-blog").addEventListener('click', function () {
    console.log("feature call");
    callBlog();
})




// input call for card1
document.getElementById("donate-now-btn1").addEventListener('click', function () {

    const card1Value = getInputFieldValue("card1-input");
    if (card1Value>='0' && card1Value<='9') {
        console.log(parseFloat(card1Value));
        updateBalance(card1Value);
        // Update Self Card balance:
        const selfCardBalance = document.getElementById("self-card1-btn").innerText;
        // console.log(selfCardBalance);
        document.getElementById("self-card1-btn").innerText = parseFloat(selfCardBalance) + parseFloat(card1Value);
    }
    else {
        alert("Input is invalid.");
    }



})


// Iput call for card2
document.getElementById("donate-now-btn2").addEventListener('click', function () {
    const card2Value = getInputFieldValue("card2-input");
    if (!isNaN(card2Value ) && card2Value == null) {

        updateBalance(card2Value);

        // Update Self Card balance:
        const selfCardBalance = document.getElementById("self-card1-btn").innerText;
        // console.log(selfCardBalance);
        document.getElementById("self-card2-btn").innerText = parseFloat(selfCardBalance) + parseFloat(card2Value);
    }
    else {
        alert("Input is invalid.");
    }


})
// Iput call for card3
document.getElementById("donate-now-btn3").addEventListener('click', function () {
    const card3Value = getInputFieldValue("card3-input");
    if (!isNaN(card3Value) && card3Value == null) {

        updateBalance(card3Value);

        // Update Self Card balance:
        const selfCardBalance = document.getElementById("self-card3-btn").innerText;
        // console.log(selfCardBalance);
        document.getElementById("self-card3-btn").innerText = parseFloat(selfCardBalance) + parseFloat(card3Value);
    }
    else{
        alert("Input is invalid.")
    }


})