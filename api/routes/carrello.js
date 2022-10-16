const router = require("express").Router();
const User = require("../modelli/user")

//mostar  CARRELLO
router.get("/show/", async (req, res) => {
  try {
    var queryf = { username: req.query.username }
    const user = await User.find(queryf)
    res.status(200).json(user[0].cart);


  } catch (err) {
    res.status(500).json(err);
  }
})
//ADD ITEM
router.put("/add/", async (req, res) => {
  var newItem = {
    productId: req.body.productId,
    productName: req.body.productName,
    productPrice: req.body.productPrice
  }
  await User.findOneAndUpdate(
    { username: req.body.username },
    {
      $push:{
        cart: newItem
      }
    })

})

module.exports = router