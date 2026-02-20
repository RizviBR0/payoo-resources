const currentBalance = document.querySelector("#balance");

function getValueFromInput(id) {
  const input = document.getElementById(id);
  return input.value;
}

function getBalance() {
  return Number(currentBalance.innerText);
}

function setBalance(value) {
  currentBalance.innerText = Number(value);
}
