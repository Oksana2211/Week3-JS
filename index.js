//корзина-скидка
const namber1 = document.getElementById("namber1");
const namber2 = document.getElementById("namber2");
const namber3 = document.getElementById("namber3");
const namber4 = document.getElementById("namber4");

const paid = document.querySelectorAll("output")[4];

const sum = 
Number.parseInt(namber1.innerHTML)+
Number.parseInt(namber2.innerHTML)+
Number.parseInt(namber3.innerHTML)+
Number.parseInt(namber4.innerHTML);

paid.textContent = sum;

let discountAppLied = false;

function clickDiscount() {

if(!discountAppLied){
  const discount = 0.2;
  let newSum = sum - sum * discount;

  namber1.innerHTML = (Number.parseInt(namber1.innerHTML)*(1 - discount)).toFixed(2);
  namber2.innerHTML = (Number.parseInt(namber2.innerHTML)*(1 - discount)).toFixed(2);
  namber3.innerHTML = (Number.parseInt(namber3.innerHTML)*(1 - discount)).toFixed(2);
  namber4.innerHTML = (Number.parseInt(namber4.innerHTML)*(1 - discount)).toFixed(2);

  paid.textContent = newSum.toFixed(2);

  discountAppLied = true;
}
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