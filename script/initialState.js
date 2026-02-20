const addMoney = document.querySelector("#add-money");
const cashout = document.querySelector("#cashout");

initialState();

function hideAll() {
  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");
}

function initialState() {
  hideAll();
  document.querySelector(`#add-money`).classList.remove("hidden");
  document
    .querySelector(`button[onclick="showOnly('add-money')"]`)
    .classList.add("btn-active");
}

function showOnly(id) {
  hideAll();
  document.querySelector(`#${id}`).classList.remove("hidden");

  const btnGroup = document.querySelector("#button-group");
  btnGroup.querySelectorAll("button").forEach((btn) => {
    btn.classList.remove("btn-active");
  });

  document
    .querySelector(`button[onclick="showOnly('${id}')"]`)
    .classList.add("btn-active");
}
