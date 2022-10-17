const router = require("express").Router();
const User = require("../modelli/user")
const Prodotti = require("../modelli/prodotti")

//mostar  CARRELLO
router.get("/show/", async (req, res) => {
  try {
    var queryf = { username: req.query.username }
    const user = await User.findOne(queryf)
    res.status(200).json(user.cart);


  } catch (err) {
    res.status(500).json(err);
  }
})
//ADD ITEM
router.post("/add/:username", async (req, res) => {
  try {
    await User.findOneAndUpdate(
      req.params.username,
      {
        $push: {
          cart:{
            productId : req.body.productId,
            productName : req.body.productName,
            productPrice : req.body.productPrice
          } 
        }
      })
      res.send();
  } catch (err){
    console.error(err.message);
    res.send(400).send('Server Error');  }
  

})
//DELETE ITEM
router.put("/delete/:username",async(req,res)=>{
  
  try{
    await User.findOneAndUpdate(
      req.params.username,
      {
        "$pull": {
          "cart": {
            "productId" : req.body.productId
          }
        }
      })
      res.send();
  } catch (err){
    console.error(err.message);
    res.send(400).send('Server Error');
  }
})
module.exports = router