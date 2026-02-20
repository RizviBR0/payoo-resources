document.querySelector("#cashout-btn").addEventListener("click", () => {
  const cashoutNumberInput = getValueFromInput("cashout-number");
  const cashoutAmountInput = getValueFromInput("cashout-amount");
  const cashoutPinInput = getValueFromInput("cashout-pin");

  if (cashoutNumberInput.length !== 11) {
    daisyModal("⚠️ Error", "Invalid agent number", "red");
    return;
  }

  if (cashoutAmountInput.length === 0 || isNaN(cashoutAmountInput)) {
    daisyModal("⚠️ Error", "Invalid amount", "red");
    return;
  }

  if (Number(cashoutAmountInput) <= 0) {
    daisyModal("⚠️ Error", "Amount must be greater than zero", "red");
    return;
  }

  const newBalance = getBalance() - Number(cashoutAmountInput);

  if (newBalance <= 0) {
    daisyModal("⚠️ Error", "Insufficient balance", "red");
    return;
  } else {
    setBalance(newBalance);
  }

  if (cashoutPinInput === "1234") {
    daisyModal("🎉 Congratulations!", "Cashout Successful", "green");
  } else {
    daisyModal("⚠️ Error", "Invalid PIN", "red");
  }
});
