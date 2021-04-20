/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(input){
  const hourNumber = parseInt(input.split(":")[0]);
  if (hourNumber < 12) {
    return "Good Morning";
  } else if (hourNumber < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  document.getElementById("greeting").innerText = string;
}