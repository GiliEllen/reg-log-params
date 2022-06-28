"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCont_1 = require("../controllers/userCont");
var router = express_1["default"].Router();
router.post('/login', userCont_1.userLogin)
    .post('/register', userCont_1.userRegister);
exports["default"] = router;
