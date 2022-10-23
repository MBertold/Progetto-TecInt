const router = require("express").Router();
const User = require("../modelli/user")
const Prodotti = require("../modelli/prodotti")

//mostar  CARRELLO
router.get("/show/", async (req, res) => {
  try {
    var queryf = { username: req.query?.username }
    const user = await User.findOne(queryf)
    res.status(200).json(user.cart);


  } catch (err) {
    res.status(500).json(err);
  }
})
//ADD ITEM
router.post("/add/:username", async (req, res) => {
  try {
    const item = await Prodotti.findById(req.body.id)
    await User.findOneAndUpdate(
      req.params?.username,

      {
        $push: {
          cart: {
            shop: req.body.proprietario,
            item: item
          }

        }
      })
    res.send();
  } catch (err) {
    res.status(500).json(err);
  }


})
//DELETE ITEM
router.put("/delete/:username", async (req, res) => {

  try {
    const item = await Prodotti.findById(req.body.id)
    await User.findOneAndUpdate(
      req.params.username,
      {
        "$pull": {
          "cart":
          {
            item : item
          }
            
        }
      })
    res.send();
  } catch (err) {
    res.status(400).json(err);
  }
})


//CALCOLO TOTALE 
router.get("/total/", async (req, res) => {

  try {
    var total = 0;
    var queryf = { username: req.query.username }
    const user = await User.findOne(queryf)
    for (let i = 0, l = user.cart.length; i < l; i++) {

      total += user.cart[i].item.prezzo;
    }

    res.status(200).json(total.toFixed(2))
  } catch (err) {
    res.status(400).json(err);
  }
})

module.exports = router