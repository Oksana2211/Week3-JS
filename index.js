const namber1 = document.getElementById("namber1").innerHTML;
const namber2 = document.getElementById("namber2").innerHTML;
const namber3 = document.getElementById("namber3").innerHTML;
const namber4 = document.getElementById("namber4").innerHTML;
const paid = document.querySelectorAll("output")[4];
const sum = Number.parseInt(namber1) + Number.parseInt(namber2) + Number.parseInt(namber3) + Number.parseInt(namber4);
paid.textContent = sum;


let sum2 = sum-((sum*20)/100);

function click() {

}
