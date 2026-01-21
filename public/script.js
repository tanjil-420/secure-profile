function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  .then(res => {
    if(!res.ok) throw new Error('Invalid');
    return res.json();
  })
  .then(data => {
    if(data.success) {
      window.location.href = '/dashboard.html';
    }
  })
  .catch(err => {
    document.getElementById('msg').innerText = 'Access Denied ❌';
  });
}
