const express = require("express");
const User = require("../models/User");
const LoginAttempt = require("../models/LoginAttempt");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const success = user && user.password === password;

  await LoginAttempt.create({ email, success, timestamp: new Date() });

  if (success) {
    res.json({ message: "Login bem-sucedido!" });
  } else {
    res.json({ message: "Email ou senha incorretos." });
  }
});

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    res.json({ message: "Um link para redefinir sua senha foi enviado ao seu email." });
  } else {
    res.json({ message: "Email não encontrado." });
  }
});

router.post("/change-password", async (req, res) => {
  const { email, newPassword } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    user.password = newPassword;
    await user.save();
    res.json({ message: "Senha alterada com sucesso!" });
  } else {
    res.json({ message: "Email não encontrado." });
  }
});

module.exports = router;
