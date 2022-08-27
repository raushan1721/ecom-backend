const router = require("express").Router();
const paymentCtrl = require("../controllers/paymentCtrl");
const auth = require("../middleware/auth");

router
  .route("/payment")
  .get(auth, paymentCtrl.getPayments)
  .post(auth, paymentCtrl.createPayment);

router.post("/makepayment", auth, paymentCtrl.makePayment);

module.exports = router;
