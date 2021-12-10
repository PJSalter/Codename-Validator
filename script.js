const store = document.getElementById('codeName');

const pressed = document.getElementById('transform-button');

const notifyAlert = document.getElementById('message');

function checkLength(str) {
  //console.log(str);
  //let regex = str.match(/\w{6,}/)
  //console.log(regex);
  if (str.length > 5) {
    return true;
  } else {
    return false;
  }
}
function isAllPresent(str) {
  // Regex to check if a string contains an uppercase or lowercase.
  let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z]).+$");
  //console.log(pattern);
  // If the string is empty then return false
  if (!str || str.length === 0) {
    return true;
  } 
   // return true If the string matches with the Regex
  if (pattern.test(str)) {
    return true;
  } else {
    return false;
  }
};

pressed.addEventListener('click', function(){
  let stringy = store.value;
  //console.log(stringy)
  let password = checkLength(stringy) && isAllPresent(stringy);
  //console.log(password)
  //let stringy = store.textContent;

  //if password is correct then pop up message with access granted
  // else if the password is wrong then pop up with incorrect password
  //Adding classes in JavaScript for styling the correct or incorrect passwords.
  if (password == true) {
    notifyAlert.innerText
     = "A Correct Reptilian Message Yay you are a true Reptilian Species";
     notifyAlert.classList.remove("invalid");
     notifyAlert.classList.add("valid");
  } else {
    notifyAlert.innerText = "Incorrect! You are not a Worthy Reptilian";
    notifyAlert.classList.remove("valid");
    notifyAlert.classList.add("invalid");
   }
})


