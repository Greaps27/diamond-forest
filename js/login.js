document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please enter email and password.");
    return;
  }

  // Fake login (store user in localStorage)
  localStorage.setItem("user", JSON.stringify({ email: email }));

  document.getElementById("login-message").style.display = "block";
  document.getElementById("login-message").textContent = `✅ Welcome back, ${email}`;

  setTimeout(() => {
    window.location.href = "orders.html"; // redirect after login
  }, 1500);
});
