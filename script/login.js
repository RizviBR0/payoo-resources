const numberInput = document.querySelector("#input-number");
const pinInput = document.querySelector("#input-pin");

document.querySelector("#login-btn").addEventListener("click", () => {
  if (numberInput.value == "01234567890" && pinInput.value == "1234") {
    window.location.assign("/home.html");
  } else {
    alert("Invalid number or pin");
  }
});
