document.querySelector("#cashout-btn").addEventListener("click", () => {
  const cashoutNumberInput = getValueFromInput("cashout-number");
  const cashoutAmountInput = getValueFromInput("cashout-amount");
  const cashoutPinInput = getValueFromInput("cashout-pin");

  if (cashoutNumberInput.length !== 11) {
    alert("Invalid agent number");
    return;
  }

  if (cashoutAmountInput.length === 0 || isNaN(cashoutAmountInput)) {
    alert("Invalid amount");
    return;
  }

  if (Number(cashoutAmountInput) <= 0) {
    alert("Amount must be greater than zero");
    return;
  }

  const newBalance = getBalance() - Number(cashoutAmountInput);

  if (newBalance <= 0) {
    alert("Invalid amount");
    return;
  } else {
    setBalance(newBalance);
  }

  if (cashoutPinInput === "1234") {
    my_modal_1.showModal();
  } else {
    alert("Invalid PIN");
  }
});
