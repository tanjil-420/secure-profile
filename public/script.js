function login() {
  fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  })
  .then(res => {
    if (!res.ok) throw new Error();
    return res.json();
  })
  .then(() => {
    window.location.href = "/dashboard.html";
  })
  .catch(() => {
    document.getElementById("msg").innerText = "Access Denied ❌";
  });
}
