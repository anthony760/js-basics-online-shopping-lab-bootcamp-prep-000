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
    var output = `In your cart, you have `;
    for (let i = 0; i < numberOfItems - 1; i++) {
      output += `${items[i]}, `;
    }

    console.log(`${output}and ${items[numberOfItems - 1]}.`);
  }
}

function total() {
  var sum = 0;
  for (var key in cart) {
    sum += parseInt(cart[key][Object.keys(cart[key])]);
  }

  return sum;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
