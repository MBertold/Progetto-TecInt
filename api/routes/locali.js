const router = require("express").Router();
const Locali = require("../modelli/locali")
//ELENCO NAZIONI
router.get("/shopRegister",async (req,res)=>{


});


router.post("/shopRegister",async(req,res)=>{
    const nuovoLocale = new Locali({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,

    })
})