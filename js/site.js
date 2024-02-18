//visa listan av producter

var foods = [
  {
    id: 1,
    name: "Pho",
    description: `Vietnamese rice noodle soup with coriander, chive, sweet basil, bean sprouts. 
    Served with beef or chicken.`,
  },
  {
    id: 2,
    name: "Bun Cha",
    description: `Grilled pork meat marinated with vietnamese spices.
    Served with rice noodles and special fish sauce.`,
  },
  {
    id: 3,
    name: "Banh Xeo",
    description: `Vietnamese crêpes stuffed with shrimp, pork belly and bean sprouts. 
    Served with lettuce, sweet basil, mint and special fish sauce.`,
  },
  {
    id: 4,
    name: "Banh Cuon",
    description: `Thinly steamed rice rolls filled with a mixture of cooked ground pork, mushroom, roasted shallots.
    Served with special fish sauce and vietnamese sasauge.`,
  },
];

//visa kundvagn

let cart = [];

//lägga till och ta bort saker från kundvagn

function addToCart(foods) {
  const food = cart.find((item) => item.name === foods.name);

  cart.push({
    id: foods.id,
    name: foods.name,
    description: foods.description,
  });
  console.log(cart);
  updateCartDisplay();
}

var addToCartBtn = Document.getElementById("addToCartBtn");
addToCartBtn.addEventListener("click", function () {
  var productName = addToCartBtn.getAttribute("data-product-name");
  var productId = addToCartBtn.getAttribute("data-product-id");
  addToCart(productName, productId);
});

function updateCartDisplay() {
  const cartDropdown = document.getElementById("cart");
  const cartItems = cartDropdown.querySelector(`.dropdown-menu`);
  cartItems.innerText = "";

  cart.forEach(function (foods) {
    const li = document.createElement("li");
    li.innerHTML = `<a class="dropdown-item" href="#">` + foods.name + `</a>`;
    cartItems.appendChild(li);
  });
}

function removeFromCart(prod) {
  cart.splice(prod, 1);
  updateCartDisplay();
}

//event

// const viewCart = document.getElementById("view-cart-link");
