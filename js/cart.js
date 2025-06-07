const cartItemsDiv = document.getElementById("cart-items");
const totalSpan = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartDisplay() {
  cartItemsDiv.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    totalSpan.innerText = "0";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <div>
        <h4>${item.title}</h4>
        <p>${item.metal} • ${item.carat}</p>
        <p>₹${item.price} × <input type="number" min="1" value="${item.qty}" data-index="${index}" class="qty-input" /></p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
    cartItemsDiv.appendChild(itemDiv);
  });

  totalSpan.innerText = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
}

cartItemsDiv.addEventListener("input", (e) => {
  if (e.target.classList.contains("qty-input")) {
    const index = parseInt(e.target.dataset.index);
    cart[index].qty = parseInt(e.target.value);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
  }
});

updateCartDisplay();
