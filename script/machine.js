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

function daisyModal(title, body, color) {
  document.querySelector("#modal-title").innerText = title;
  document.querySelector("#modal-title").style.color = color;
  document.querySelector("#modal-body").innerText = body;
  document.querySelector("#my_modal_1").showModal();
}
