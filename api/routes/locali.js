const router = require("express").Router();
const Locali = require("../modelli/locali")
const CryptoJS = require("crypto-js");
require("dotenv").config();


//REGISTER
router.post("/shopRegister", async (req, res) => {
    try {
    const nuovoLocale = new Locali({
        name: req.body.name,
        email: req.body.email,
        tags: req.body.tags,
        address: req.body.address,
        descrizione: req.body.descrizione,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC),

    });
    
        const savedShop = await nuovoLocale.save();
        
        const { password, ...others } = savedShop._doc;
        res.json({status:'ok',savedShop});
    } catch (err) {
        res.json({status:'error',error:'Locale già registrato'});
    }
})
//LOGIN
router.post("/shoplogin", async (req, res) => {
    
        const shop = await Locali.findOne({ email: req.body.email })
        if(!shop)
        {
            return { status: 'error', error: 'Invalid login' }
        }

        const hashedPassword = CryptoJS.AES.decrypt(shop.password, process.env.PASS_SEC);
        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        if(Originalpassword !== req.body.password)
        {
            res.json({status:'error',error:'password errata'});
        }
        else{
            const { password, ...others } = shop._doc;
            res.json({status:'ok',shop})
        }
        
    
})
//SHOW RESTURANT
router.get("/show", async (req, res) => {
    try {
        if(req.query.tags === ""){
            var query = {tags : ["Pizza","Pesce","Carne","Vegetariano","Vegano","Etnico","Panini"]};
        }else{
            var query = { tags: req.query.tags }
        }
        

        const shops = await Locali.find(query);
        res.status(201).json(shops)
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET NAME BY ID 
router.get("/getname", async (req, res) => {
    try {
        var query = { _id: req.query.id }
        const locale = await Locali.findOne(query)
        res.status(200).json(locale)
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router