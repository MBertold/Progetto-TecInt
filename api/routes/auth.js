const router = require("express").Router();
const User = require("../modelli/user.js");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        address : req.body.address,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC)

    });

    try {
        const savedUser = await newUser.save();
        const accessToken = await jwt.sign(
            { email: savedUser.email },
            process.env.JWT_SEC,
            {
                expiresIn: "5min",
            }
        );
        const { password, ...others } = savedUser._doc;
        res.status(201).json({ ...others, accessToken });

    } catch (err) {
        res.status(500).json(err);
    }


});


//LOGIN

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(401).json("user errato!")

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        Originalpassword !== req.body.password &&
            res.status(401).json("password errata!");
        const accessToken = await jwt.sign(
            {
                email: user.email
            },
            process.env.JWT_SEC,
            { expiresIn: "5min" }
        );
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router