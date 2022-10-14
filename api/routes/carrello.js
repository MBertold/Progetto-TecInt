const router = require("express").Router();
const Prodotti = require("../modelli/prodotti")
const User = require("../modelli/user")

//mostar  CARRELLO
router.get("/show/", async (req, res) => {
  try {
    var queryf = { username: req.query.username }
    const user = await User.find(queryf)


    for (const cart in user) {
      const items = user[cart].cart
      res.status(200).json(items);
    }

  } catch (err) {
    res.status(500).json(err);
  }
})
//ADD ITEM
router.post("/add/", async (req, res) => {
  var newItem = { productId: req.body.productId, productName: req.body.productName, productPrice: req.body.productPrice };
  User.findOneAndUpdate(
    { username: req.body.username },
    {
      $push: {
        cart: {
          productId: req.body.productId,
          productName: req.body.productName,
          productPrice: req.body.productPrice
        }
      }
    },
    function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log(success);
      }
    })

})

module.exports = router