//корзина-скидка
const namber1 = document.getElementById("namber1").innerHTML;
const namber2 = document.getElementById("namber2").innerHTML;
const namber3 = document.getElementById("namber3").innerHTML;
const namber4 = document.getElementById("namber4").innerHTML;
const paid = document.querySelectorAll("output")[4];
const sum = Number.parseInt(namber1) + Number.parseInt(namber2) + Number.parseInt(namber3) + Number.parseInt(namber4);
paid.textContent = sum;

function clickDiscount() {
paid.textContent = sum-((sum*20)/100);
}
//

//вычисление квадрата
const input1 = document.getElementsByClassName('input-mrg')[0];
const input2 = document.getElementsByClassName('input-mrg')[1];

function clicCalculation() {
  let num1 = input1.value;
  input2.value = num1**2;
}
//