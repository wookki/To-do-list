const input = document.querySelector('#input input');
const button = document.querySelector('#input button');
const dolist = document.querySelector('#selectBox');



button.addEventListener('click', function() {
  const inputString = input.value;
  let dolistContents = dolist.options[dolist.selectedIndex].text;

  if(inputString === '') {
    alert('empty')
    return;
  } 
  switch (dolistContents) {
  case '코딩':
  addItemCoding(inputString, dolistContents);
  break;
  case '전기':
  addItemEletric(inputString, dolistContents);
  break;
  case '운동':
  addItemWork(inputString, dolistContents);
  break;
  case '데이트':
  addItemDate(inputString, dolistContents);
  break;
  }
})

function addItemCoding(str, dolistContents) {
  const list = document.querySelector('.list-coding');

  const li = document.createElement('li');
  li.classList.add('item-li');


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


function addItemEletric(str, dolistContents) {
  const list = document.querySelector('.list-eletric');

  const li = document.createElement('li');
  li.classList.add('item-li');


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


function addItemWork(str, dolistContents) {
  const list = document.querySelector('.list-work-out');

  const li = document.createElement('li');
  li.classList.add('item-li');


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


function addItemDate(str, dolistContents) {
  const list = document.querySelector('.list-date');

  const li = document.createElement('li');
  li.classList.add('item-li');


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

const coding = document.querySelector('.btnCoding')
const eletric = document.querySelector('.btnEletric')
const work = document.querySelector('.btnWork')
const date = document.querySelector('.btnDate')

const listCoding = document.querySelector('.list-coding');
const listEletric = document.querySelector('.list-eletric');
const listWork = document.querySelector('.list-work-out');
const listDate = document.querySelector('.list-date');
coding.addEventListener('click', function () {
  listCoding.style.display = 'block';
  listEletric.style.display = 'none';
  listWork.style.display = 'none';
  listDate.style.display = 'none';
})
eletric.addEventListener('click', function () {
  listCoding.style.display = 'none';
  listEletric.style.display = 'block';
  listWork.style.display = 'none';
  listDate.style.display = 'none';
})
work.addEventListener('click', function () {
  listCoding.style.display = 'none';
  listEletric.style.display = 'none';
  listWork.style.display = 'block';
  listDate.style.display = 'none';
})
date.addEventListener('click', function () {
  listCoding.style.display = 'none';
  listEletric.style.display = 'none';
  listWork.style.display = 'none';
  listDate.style.display = 'block';
})