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
        descrizione:req.body.descrizione,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC),

    });
    try {
        const savedShop = await nuovoLocale.save();
        const accessToken = await jwt.sign(
            {
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
//LOGIN
router.post("/shoplogin", async (req, res) => {
    try {
        const shop = await Locali.findOne({ email: req.body.email })
        !shop && res.status(401).json("shop errato!")

        const hashedPassword = CryptoJS.AES.decrypt(shop.password, process.env.PASS_SEC);
        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        Originalpassword !== req.body.password &&
            res.status(401).json("password errata!");
        const accessToken = await jwt.sign(
            {
                email: shop.email,
                password:shop.password
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );
        const { password, ...others } = shop._doc;
        res.status(200).json({ ...others, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
})
//SHOW RESTURANT
router.get("/show", async (req,res)=>{
try{
    const shops = await Locali.find();
    res.status(201).json(shops)
}catch (err){
    res.status(500).json(err)
}
})
//SHOW SELECTED RESTURANT
router.get("/showone",async(req,res)=>{
    try{
     const shop =  await Locali.findById(req.params.id)
     
    }catch(err){

    }
})
//ADD ORDER
router.post("/addorder",async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})
module.exports = router