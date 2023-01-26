const router = require("express").Router();
const User = require("../modelli/user.js");
const CryptoJS = require("crypto-js");
require("dotenv").config();
//REGISTER
router.post("/register", async (req, res) => {
    try {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        address : req.body.address,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC)

    });
        const savedUser = await newUser.save();
        const { password, ...others } = savedUser._doc;
        res.json({status:'ok',savedUser});

    } catch (err) {
        res.json({status:'error',error:'Utente già registrato'});
    }


});


//LOGIN

router.post("/login", async (req, res) => {
    
        const user = await User.findOne({ username: req.body.username })
        if(!user){
            return { status: 'error', error: 'Invalid login' }
        }

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        if(Originalpassword !== req.body.password)
        {
            res.json({status:'error',error:'password errata'});
        }
         else{
            const { password, ...others } = user._doc;
            res.json({status:'ok',user});
   
         }   
       
        
})

module.exports = router