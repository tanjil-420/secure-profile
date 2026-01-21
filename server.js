const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// Simple Login Credentials
const USER = {
  email: "admin@gmail.com",
  password: "123456"
};

// Serve login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Login API
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if(email === USER.email && password === USER.password) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});

// Serve dashboard
app.get('/dashboard.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
