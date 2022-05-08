const input = document.querySelector("#input input");
const button = document.querySelector("#input button");

button.addEventListener('click', function() {
  const inputString = input.value;
  if(inputString === '') {
    alert('empty')
    return;
  } 
  addItem(inputString);


})

function addItem(str) {
  const list = document.querySelector('.List');

  const li = document.createElement('li');
  li.classList.add('item-li');

  const dolist = document.querySelector('#selectBox');
  const dolistContents = dolist.options[dolist.selectedIndex].text;
  
  console.log(dolistContents);

  const itemName = document.createElement('span');
  itemName.innerHTML = dolistContents + '-' + str;
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