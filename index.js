const update = () => {
  const bill = document.querySelector('#yourBill').value;
  const tipPercent = document.querySelector('#tipInput').value;
  const split = document.querySelector('#splitInput').value;
  console.log('I was clicked', { bill, tipPercent, split });
}

let container = document.querySelector('#container');
container.addEventListener('input', update);
