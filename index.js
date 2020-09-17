const update = () => {
  const bill = Number(document.querySelector('#yourBill').value);
  const tipPercent = document.querySelector('#tipInput').value;
  const split = document.querySelector('#splitInput').value;
  
  let tipValue = bill * (tipPercent / 100);
  let tipEach = tipValue / split;
  let totalEach = (bill + tipValue) / split;

  let tipAmount = document.querySelector('#tipPercent').innerHTML = tipPercent + '%';

  let tip = document.querySelector('#tipValue').innerHTML = tipValue;
  let total = document.querySelector('#totalWithTip').innerHTML = bill + tipValue;
  let splitBetween = document.querySelector('#splitValue').innerHTML = split;
  let billIndividual = document.querySelector('#billEach').innerHTML = totalEach;
  let tipIndividual = document.querySelector('#tipEach').innerHTML = tipEach;

}

let container = document.querySelector('#container');
container.addEventListener('input', update);
