// Check if user is logged in
const user = JSON.parse(localStorage.getItem("user"));
if (!user) {
  window.location.href = "login.html";
}

const ordersList = document.getElementById("orders-list");
const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
const userOrders = allOrders.filter(order => order.email === user.email);

if (userOrders.length === 0) {
  ordersList.innerHTML = "<p>You have no orders yet.</p>";
} else {
  userOrders.forEach((order, index) => {
    const div = document.createElement("div");
    div.className = "faq-item";
    div.innerHTML = `
      <div>
        <h4>Order #${index + 1}</h4>
        <p><strong>Status:</strong> ${order.status}</p>
        <ul>
          ${order.items.map(item => `<li>${item.title} - ₹${item.price} × ${item.qty}</li>`).join("")}
        </ul>
        <p><strong>Total:</strong> ₹${order.total}</p>
      </div>
    `;
    ordersList.appendChild(div);
  });
}
