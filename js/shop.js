const container = document.getElementById("product-list");

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" />
    <h3>${product.title}</h3>
    <p>${product.metal} • ${product.carat}</p>
    <strong>₹${product.price}</strong>
    <button onclick="addToCart('${product.id}')">Add to Cart</button>
  `;

  container.appendChild(card);
});

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    const item = products.find((p) => p.id === productId);
    cart.push({ ...item, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
