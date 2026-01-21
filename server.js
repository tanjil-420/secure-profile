const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static("public"));

const USER = {
  email: "admin@gmail.com",
  password: "123456"
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});

app.listen(process.env.PORT || 3000);
