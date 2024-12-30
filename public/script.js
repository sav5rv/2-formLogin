document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  
    const result = await response.json();
    alert(result.message);
  });
  
  document.getElementById("forgotPassword").addEventListener("click", async () => {
    const email = prompt("Digite seu email:");
    const response = await fetch("/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  
    const result = await response.json();
    alert(result.message);
  });
  
  document.getElementById("changePassword").addEventListener("click", async () => {
    const email = prompt("Digite seu email:");
    const newPassword = prompt("Digite sua nova senha:");
    const response = await fetch("/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, newPassword }),
    });
  
    const result = await response.json();
    alert(result.message);
  });
  