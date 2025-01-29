const priceEl = document.getElementById("price");
const reductionEl = document.getElementById("reduction");
const outputEl=document.getElementById("output")
const btnEl=document.getElementById("soumettre")

function reduce() {
 const prix= priceEl.value;
 const reduct =reductionEl.value;
 const result =prix-(prix*reduct)/100;
 outputEl.innerHTML= `<span>total:</span>${result.toFixed(2)}`

}


btnEl.addEventListener("click",reduce)
