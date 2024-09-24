// Call for removing class.
document.getElementById("donate-btn").addEventListener('click', function () {
    //console.log("frature Loaded");
    hiddenClass("hidden-items");
    addClass("history-container");
    // Toggle button:
    document.getElementById("history-btn").classList.remove('border-none');
    document.getElementById("donate-btn").classList.add('bg-[#B4F461]');
    document.getElementById("history-btn").classList.remove('bg-[#B4F461]');
    

})
//Call for adding class.
document.getElementById("history-btn").addEventListener('click', function () {
    //console.log("frature Loaded");
    hiddenClass("history-container");
    addClass("hidden-items");
    //Toggle button:
    document.getElementById("history-btn").classList.add('bg-[#B4F461]');
    document.getElementById("donate-btn").classList.remove('bg-[#B4F461]');
    document.getElementById("history-btn").classList.add('border-none');

})
// Calling  blog page:
document.getElementById("call-blog").addEventListener('click', function () {
    console.log("feature call");
    callBlog();
})




// input call for card1
document.getElementById("donate-now-btn1").addEventListener('click', function () {


    const card1Value = getInputFieldValue("card1-input");
     document.getElementById("card1-input").value = "";
    if (card1Value === 'null' || card1Value == 0 || isNaN(card1Value) || card1Value < 0 || card1Value == "") {
        alert("Invalid Input.Please try again.");
       
    }
    else {

        const currentBalance = document.getElementById("current-balance-btn").innerText;
        if (parseFloat(card1Value) > parseFloat(currentBalance)) {
            alert("Insuffient Balance! Connot donate.");
        }
        else {
            //console.log(parseFloat(card1Value));
            updateBalance(card1Value);
            // Update Self Card balance:
            const selfCardBalance = document.getElementById("self-card1-btn").innerText;
            document.getElementById("self-card1-btn").innerText = parseFloat(selfCardBalance) + parseFloat(card1Value);
            // Transection history added:
            historyAdded(card1Value, "donated for Flood at Noakhali, Bangladesh");
            openModal();
            
        }

    }







})


// Iput call for card2
document.getElementById("donate-now-btn2").addEventListener('click', function () {
    const card2Value = getInputFieldValue("card2-input");
    document.getElementById("card2-input").value = "";
    if (card2Value === 'null' || card2Value == 0 || isNaN(card2Value) || card2Value < 0 || card2Value == "") {
        alert("Invalid Input.Please try again.");
    }
    else {
        const currentBalance = document.getElementById("current-balance-btn").innerText;
        if (parseFloat(card2Value) > parseFloat(currentBalance)) {

            alert("Insuffient Balance! Connot donate.");

        }
        else {


            updateBalance(card2Value);

            // Update Self Card balance:
            const selfCardBalance = document.getElementById("self-card2-btn").innerText;
            // console.log(selfCardBalance);
            document.getElementById("self-card2-btn").innerText = parseFloat(selfCardBalance) + parseFloat(card2Value);

            // Transection history added:
            historyAdded(card2Value, "donated for Flood Relief in Feni,Bangladesh");
            openModal();
        }

    }



})
// Iput call for card3
document.getElementById("donate-now-btn3").addEventListener('click', function () {
    const card3Value = getInputFieldValue("card3-input");
    document.getElementById("card3-input").value = "";
    if (card3Value === 'null' || card3Value == 0 || isNaN(card3Value) || card3Value < 0 || card3Value === "") {
        alert("Invalid Input.Please try again.");
    }
    else {
        const currentBalance = document.getElementById("current-balance-btn").innerText;
        if (parseFloat(card3Value) > parseFloat(currentBalance)) {

            alert("Insuffient Balance! Connot donate.");
        }
        else {




            updateBalance(card3Value);

            // Update Self Card balance:
            const selfCardBalance = document.getElementById("self-card3-btn").innerText;
            // console.log(selfCardBalance);
            document.getElementById("self-card3-btn").innerText = parseFloat(selfCardBalance) + parseFloat(card3Value);
            // History added:
            historyAdded(card3Value, "donated for Aid for Injured in the Quota Movement, Bangladesh");
            openModal();
        }
    }



})