// const products = [
//   { name: "Laptop", price: 850000 },
//   { name: "Mouse", price: 15000 },
//   { name: "Keyboard", price: 30000 },
// ];
// const gadgetList = document.querySelector("#gadget-list");
// const cartCount = document.querySelector("#cart-count");
// const cartItems = document.querySelector("cart-items");
// const cartTotal = document.querySelector("#cart-total");
// products.forEach(function (product) {
//   const card = document.createElement("div");
//   card.innerHTML = `
//   <h2>${product.name}</h2>
//   <p>Price: #${product.price.toLocaleString()}</p> 
//   <bUtton class="cart-btn"> Add to Cart <button>
//   `;
//   gadgetList.appendChild(card);
//   const cartCount = document.querySelector("#cart-btn");
//   let cartCountValue = 0;

//   const addButton = card.querySelector(".cart-btn");
//   addButton.addEventListener("click", function () {
//     cartCountValue++;
//     cartCount.textContent = cartCountValue;
//   });
// });
// const cart = [{ name: "Laptop", price: 850000, quantity: 1 }];


const products = [
  { name: "Laptop", price: 850000 },
  { name: "Mouse", price: 15000 },
  { name: "Keyboard", price: 30000 },
];

const gadgetList = document.querySelector("#gadget-list");
const cartCount = document.querySelector("#cart-count");
const cartItems = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");

const cart = [];

// DISPLAY PRODUCTS
products.forEach(function (product) {
  const card = document.createElement("div");

  card.innerHTML = `
    <h2>${product.name}</h2>
    <p>Price: ₦${product.price.toLocaleString()}</p>
    <button class="cart-btn">Add to Cart</button>
  `;

  gadgetList.appendChild(card);

  const addButton = card.querySelector(".cart-btn");

  // ADD TO CART
  addButton.addEventListener("click", function () {
    const existingItem = cart.find(function (item) {
      return item.name === product.name;
    });

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    displayCart();
  });
});

// DISPLAY CART
function displayCart() {
  cartItems.innerHTML = "";

  let total = 0;
  let count = 0;

  cart.forEach(function (item, index) {
    total += item.price * item.quantity;
    count += item.quantity;

    const cartCard = document.createElement("div");

    cartCard.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: ₦${item.price.toLocaleString()}</p>
      <p>Quantity: ${item.quantity}</p>
      <p>Subtotal: ₦${(item.price * item.quantity).toLocaleString()}</p>

      <button class="increase-btn">+</button>
      <button class="decrease-btn">-</button>
      <button class="remove-btn">Remove</button>
    `;

    cartItems.appendChild(cartCard);

    // INCREASE QUANTITY
    cartCard.querySelector(".increase-btn").addEventListener("click", function () {
      item.quantity++;
      displayCart();
    });

    // DECREASE QUANTITY
    cartCard.querySelector(".decrease-btn").addEventListener("click", function () {
      item.quantity--;

      if (item.quantity <= 0) {
        cart.splice(index, 1);
      }

      displayCart();
    });

    // REMOVE FROM CART
    cartCard.querySelector(".remove-btn").addEventListener("click", function () {
      cart.splice(index, 1);
      displayCart();
    });
  });

  cartCount.textContent = count;
  cartTotal.textContent = total.toLocaleString();
}