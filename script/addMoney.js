document.querySelector("#add-money-btn").addEventListener("click", () => {
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "none") {
    daisyModal("⚠️ Error", "Please select a bank", "red");
    return;
  }

  const accno = getValueFromInput("add-money-number");
  if (accno.length != 11) {
    daisyModal("⚠️ Error", "Invalid account number", "red");
    return;
  }

  const amount = getValueFromInput("add-money-amount");
  if (amount.length === 0 || isNaN(amount) || Number(amount) <= 0) {
    daisyModal(
      "⚠️ Error",
      "Amount must be grater than zero or a valid amount",
      "red",
    );
    return;
  }

  const newBalance = getBalance() + Number(amount);
  const pin = getValueFromInput("add-money-pin");

  if (pin == "1234") {
    setBalance(newBalance);
    daisyModal(
      "🎉 Success",
      `Added $${amount} from ${bankAccount} at ${new Date().toLocaleString()}. New balance is $${newBalance}`,
      "green",
    );
  } else {
    daisyModal("⚠️ Error", "Invalid PIN", "red");
  }
});
