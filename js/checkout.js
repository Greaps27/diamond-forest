const form = document.getElementById("checkout-form");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("Please login before checking out.");
    window.location.href = "login.html";
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const newOrder = {
    email: user.email,
    items: cart,
    total: total,
    status: "Pending",
    date: new Date().toISOString()
  };

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(newOrder);
  localStorage.setItem("orders", JSON.stringify(orders));

  localStorage.removeItem("cart");

  confirmation.textContent = "✅ Payment successful! Your order has been placed.";
  confirmation.style.display = "block";
  form.reset();
});
