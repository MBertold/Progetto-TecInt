const router = require("express").Router();
const Locali = require("../modelli/locali")
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
require("dotenv").config();


//REGISTER
router.post("/shopRegister", async (req, res) => {
    const nuovoLocale = new Locali({
        name: req.body.name,
        email: req.body.email,
        tags: req.body.tags,
        address: req.body.address,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC),

    });
    try {
        const savedShop = await nuovoLocale.save();
        const accessToken = await jwt.sign(
            {
                name: savedShop.name,
                email: savedShop.email,
                password: savedShop.password
            },
            process.env.JWT_SEC,
            {
                expiresIn: "3d"
            }
        );
        const { password, ...others } = savedShop._doc;
        res.status(201).json({ ...others, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
})
router.get("/:id",async (req, res) => {
    try {
      const shop = await Locali.findById(req.params.id);
      const { password, ...others } = shop._doc;
      res.status(200).json(...others,accessToken);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router