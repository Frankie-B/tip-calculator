const formatMoney = (value) => { 
  value = Math.ceil(value * 100) / 100;
  return value.toFixed(2) + ' e';
};

const formatSplit = (value) => { 
  if (value === '1') {
    return value + ' person';
  };

  return value + ' people';
};

const update = () => {
  const bill = Number(document.querySelector('#yourBill').value);
  const tipPercent = document.querySelector('#tipInput').value;
  const split = document.querySelector('#splitInput').value;

  let tipValue = bill * (tipPercent / 100);
  let tipEach = tipValue / split;
  let totalEach = (bill + tipValue) / split;

  let tipAmount = document.querySelector('#tipPercent').innerHTML = tipPercent + '%';

  let tip = document.querySelector('#tipValue').innerHTML = formatMoney(tipValue);
  let total = document.querySelector('#totalWithTip').innerHTML = formatMoney(bill + tipValue);
  let splitBetween = document.querySelector('#splitValue').innerHTML = formatSplit(split);
  let billIndividual = document.querySelector('#billEach').innerHTML = formatMoney(totalEach);
  let tipIndividual = document.querySelector('#tipEach').innerHTML = formatMoney(tipEach);

}

let container = document.querySelector('#container');
container.addEventListener('input', update);
