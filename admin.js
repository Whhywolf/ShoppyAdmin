function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email === "admin@shoppy.com" && pass === "admin123") {
    alert("Login successful!");
    document.getElementById("dashboard").style.display = "block";
  } else {
    alert("Invalid credentials!");
  }
}

function logout() {
  document.getElementById("dashboard").style.display = "none";
}
