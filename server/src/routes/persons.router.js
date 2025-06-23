const express = require("express");
const {
  create,
  confirmEmail,
  getByEmail,
  deleteUser,
  resetPass,
  generateTokenByUser,
  getUsers,
  imgByUser
} = require("../controller/person.controller");
const router = express.Router();

router.post("/totalUsuarios", getUsers);
router.post("/imgByUser", imgByUser);
router.post("/createUser", create);
router.post("/confirmEmail", confirmEmail);
router.post("/getUserByEmail", getByEmail);
router.post("/deleteUser", deleteUser);
router.post("/resetPass", resetPass);
router.post("/generateTokenByUser", generateTokenByUser);


module.exports = router;
