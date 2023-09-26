const express = require("express");
// const { protect } = require("../middleware/authMiddleware");
const isLoggedIn = require('../middleware/isLoggedIn');

const router = express.Router();

const {
  registerUser,
  //   loginUser,
  //   getUser,
} = require("../controllers/userController");

router.post("/", registerUser);
// router.get("/",  async(req, res, ) => {
//   res.send({message: 'ok'})
// })
// router.post("/login", loginUser);
// router.get("/me", protect, getMe);

module.exports = router;
