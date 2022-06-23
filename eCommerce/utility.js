let taxValue = 0,
  subTotalValue = 0,
  totalValue = 0;

import {
  menuItems,
  cart,
  empty,
  subtotalDiv,
  taxDiv,
  totalDiv
} from './app.js';

const updatePrice = () => {
  subTotalValue = 0;
  for (let i = 0; i < menuItems.length; i++) {
    subTotalValue += menuItems[i].price * menuItems[i].count;
  }
  taxValue = Math.round(subTotalValue * 0.0975) / 100;
  subTotalValue = subTotalValue / 100;
  taxDiv.innerText = '$' + taxValue;
  totalValue = subTotalValue + taxValue;
  totalValue = Math.round(totalValue * 100) / 100;
  subtotalDiv.innerText = '$' + subTotalValue;
  totalDiv.innerText = '$' + totalValue;
  empty.style.display = subTotalValue == 0 ? 'block' : 'none';
};

const updateItem = (item, quantity, subtotal) => {
  quantity.innerHTML = item.count;
  subtotal.innerHTML = '$' + (item.count * item.price) / 100;
  updatePrice();
};

const addImage = (btn) => {
  const img = document.createElement('img');
  img.setAttribute('src', 'images/check.svg');
  btn.append(img);
};

const removeFromCart = (li, btn) => {
  cart.removeChild(li);
  btn.classList.remove('in-cart');
  btn.classList.add('add');
  btn.disabled = false;
  btn.innerText = 'Add to cart';
};

const addItem = (btn, index) => {
  let li = document.createElement('li');
  li.setAttribute('id', index);
  let img = document.createElement('img');

  let divPlate = document.createElement('div');
  divPlate.setAttribute('class', 'plate');
  img.setAttribute('src', `images/${menuItems[index].image}`);
  img.setAttribute('alt', menuItems[index].alt);
  img.setAttribute('class', 'plate');
  divPlate.append(img);
  let quantity = document.createElement('div');
  quantity.setAttribute('class', 'quantity');
  menuItems[index].count += 1;
  quantity.innerHTML = menuItems[index].count;
  divPlate.append(quantity);
  li.append(divPlate);

  let divContent = document.createElement('div');
  divContent.setAttribute('class', 'content');
  let name = document.createElement('p');
  name.setAttribute('class', 'menu-item');
  name.innerHTML = menuItems[index].name;
  divContent.append(name);
  let price = document.createElement('p');
  price.setAttribute('class', 'price');
  price.innerHTML = '$' + menuItems[index].price / 100;
  divContent.append(price);
  li.append(divContent);

  let divBtn = document.createElement('div');
  divBtn.setAttribute('class', 'quantity__wrapper');
  let decBtn = document.createElement('button');
  decBtn.setAttribute('class', 'decrease');
  img = document.createElement('img');
  img.setAttribute('src', 'images/chevron.svg');
  decBtn.append(img);
  divBtn.append(decBtn);
  divBtn.append(quantity);
  let incBtn = document.createElement('button');
  incBtn.setAttribute('class', 'increase');
  img = document.createElement('img');
  img.setAttribute('src', 'images/chevron.svg');
  incBtn.append(img);
  divBtn.append(incBtn);
  li.append(divBtn);

  let divSubtotal = document.createElement('div');
  divSubtotal.setAttribute('class', 'subtotal');
  divSubtotal.innerHTML =
    '$' + (menuItems[index].price * quantity.innerHTML) / 100;
  li.append(divSubtotal);

  decBtn.addEventListener('click', () => {
    if (menuItems[index].count == 1) {
      removeFromCart(li, btn);
    }
    menuItems[index].count--;
    updateItem(menuItems[index], quantity, divSubtotal);
  });

  incBtn.addEventListener('click', () => {
    menuItems[index].count++;
    updateItem(menuItems[index], quantity, divSubtotal);
  });

  cart.append(li);
  updatePrice();
};

const addToCart = (btn, index) => {
  addItem(btn, index);
  btn.classList.remove('add');
  btn.classList.add('in-cart');
  btn.innerHTML = '';
  addImage(btn);
  btn.append('In Cart');
  btn.disabled = true;
};

export { addToCart };
