//Function for Remove class
function hiddenClass(id){
  document.getElementById(id).classList.remove('hidden');
  //document.getElementById("history-container").classList.add('hidden');
}
// Function for adding class
function addClass(id){
    document.getElementById(id).classList.add("hidden");
}
function callBlog(){
   //window.location.href="blog.html";
   window.open("blog.html", "_blank");
    
    
}
// For calling Home page
function callHome(){
   
    console.log("call home");
     window.location.href="index.html";
    //window.open("index.html", "_blank");
}

// Receive Input from input field:
function getInputFieldValue(id){
    const input = document.getElementById(id).value;
    console.log(input);
    return input;
}
// Update balcnce:

function updateBalance(cardValue){
  const currentBalance = document.getElementById("current-balance-btn").innerText;
  console.log(currentBalance);

  const updateBalance =parseFloat(currentBalance)- parseFloat(cardValue);
  document.getElementById("current-balance-btn").innerText = updateBalance;
}

