//DOM
let userName = document.getElementById("userName");
let submit = document.getElementById("sub-btn");

//EVT Lisener
submit.addEventListener("click", (evt) => {
  evt.preventDefault();
  palindrome();
});

//function
function palindrome() {
  //takes user name and sets its value to lower case
  let forward = userName.value.toLowerCase();
  //takes lowercase username and reverses it
  let reverse = forward.split("").reverse().join("");
  //if forward equals reverse, then its a palindrome
  if (forward === reverse) {
    alert(userName.value + " is a palindrome name!");
  } else { //else it isnt
    alert(userName.value + " is not a palindrome name");
  }
}
