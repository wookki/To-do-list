const input = document.querySelector("#input input");
const button = document.querySelector("#input button");

button.addEventListener('click', function() {
  const inputstring = input.value;
  if(inputstring === '') {
    alert('empty')
    return;
  } 
  addItem(inputstring);

})

function addItem(str) {
  const list = document.querySelector('.List');

  const li = document.createElement('li');
  li.classList.add('item-li');

  const itemName = document.createElement('span');
  itemName.innerHTML = str;
  itemName.classList.add('item-title');

  const cancleBtn = document.createElement('div');
  cancleBtn.classList.add('material-icons')
  cancleBtn.innerHTML = 'close';
  cancleBtn.addEventListener('click', function () {
    onHandleRemoveButton(li);
  })  
  
  
  li.append(itemName);
  li.append(cancleBtn);

  list.append(li);
}



function onHandleRemoveButton(li) {
  li.remove();
}