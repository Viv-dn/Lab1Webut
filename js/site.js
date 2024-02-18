//visa listan av producter

// var foods = [
//   { id: 1, name: "Pho" },
//   { id: 2, name: "Bun Cha" },
//   { id: 3, name: "Banh Xeo" },
//   { id: 4, name: "Banh Cuon" },
// ];

//visa kundvagn

let cart = [];

//lägga till och ta bort saker från kundvagn

function addToCart(productName, productId) {
  var food = {
    id: productId,
    name: productName,
  };
  cart.push(food);
  console.log(cart);
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
    const li = document.createElement(`li`);
    li.innerHTML = `<a class="dropdown-item" href="#">` + foods.name + `</a>`;
    cartItems.appendChild(li);
  });
}

//event

// const viewCart = document.getElementById("view-cart-link");
