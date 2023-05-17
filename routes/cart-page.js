import { Router } from "express";
import cart from "../Data/cart.js";

var router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("cart-page", {
    cart: cart,
    // Email: req.session.Email === undefined ? "" : req.session.Email,
  });
});

export default router;
