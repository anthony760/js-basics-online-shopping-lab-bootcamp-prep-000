var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObject = { [item]: Math.floor(Math.random() * (100 - 1 + 1)) + 1 };
  cart.push(newObject);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var items = new Array();
  var keys = Object.keys(cart);

  for (var key in keys) {
    if (cart.hasOwnProperty(keys[key])) {
      items.push(`${keys[key]} at \$${cart[keys[key]]}`);
    }
  }

  var numberOfItems = items.length;

  if (numberOfItems < 1) {
    console.log(`Your shopping cart is empty.`);
  } else if (numberOfItems === 1) {
    console.log(`In your cart, you have ${items[0]}.`);
  } else {
    console.log(`In your cart, you have `);
    for (let i = 0; i < numberOfItems - 1; i++) {
      console.log(`${items[i]}, `);
    }

    console.log(`and ${items[numberOfItems - 1]}.`);
  }
}

function total() {
  var total = 0;
  var keys = Object.keys(cart);

  for (var key in keys) {
    if (cart.hasOwnProperty(keys[key])) {
      total = total + cart[keys[key]];
    }
  }
  //console.log(total);
  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
