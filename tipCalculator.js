document.getElementById('tipForm').addEventListener('submit', function (e) {
  e.preventDefault();
  calculateTip();
});
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
})


function calculateTip() {
  const billAmount = parseFloat(document.querySelector('.my-Amount').value);
  const tipPercentage = parseFloat(document.querySelector('.my-tip').value);

  if (billAmount && tipPercentage) {
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;
    document.querySelector('.result').innerText =
      `Tip Amount: PKR ${tipAmount}\nTotal Amount: PKR ${totalAmount}`;
  } else {
    document.querySelector('.result').innerText = `Please enter valid numbers.`;
  }
}