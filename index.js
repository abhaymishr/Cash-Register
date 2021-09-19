const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
const noOfNotes = document.querySelectorAll(".no-of-notes");

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  console.log("Working");
  hideMessage();
  console.log(billAmount.value);
  console.log(cashGiven.value);

  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      console.log("amountToBeReturned", amountToBeReturned);
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Do You Wanna Wash Plates?");
    }
  } else {
    showMessage("Invalid Amount");
  }
});

function calculateChange(amountToBeReturned) {
  console.log(amountToBeReturned);
  console.log(noOfNotes);
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
    console.log(numberOfNotes);
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}