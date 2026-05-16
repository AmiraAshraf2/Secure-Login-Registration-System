const express = require('express');

const loginuser = require("../controllers/auth.controller")

const router = express.Router();

router.post('/login', loginuser.login);
router.post('/register', loginuser.register);

module.exports=router