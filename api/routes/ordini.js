const router = require("express").Router();
const User = require("../modelli/user")
const Prodotti = require("../modelli/prodotti")
const Ordine = require("../modelli/ordine")


router.post("/add", async (req, res) => {

    const nuovoOrdine = new Ordine({
        
        nomeUtente : req.body.nomeUtente,
        ncard: req.body.ncard,
        items: req.body.cart
    });
    try {
        const ordine = await nuovoOrdine.save();
        console.log(ordine)
        res.status(200).json("ordine aggiunto")
    } catch (error) {
        res.status(500).json(error);

    }

})
router.get("/showuser",async(req,res)=>{
    try {
        var query = {nomeUtente:req.body.nomeUtente};
        const ordini = await Ordine.find(query);
        res.status(200).json(ordini)
    } catch (error) {
       res.status(500).json(error); 
    }
})

module.exports = router