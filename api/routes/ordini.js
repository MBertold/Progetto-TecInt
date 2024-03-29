const router = require("express").Router();
const User = require("../modelli/user")
const Ordine = require("../modelli/ordine")


router.post("/add", async (req, res) => {
    const date = new Date();
    const cart = req.body.cart;
    const ncard = req.body.ncard;
    const indirizzo = req.body.indirizzo;
    const nomeUtente = req.body.nomeUtente;
    const orderShop = [];
    for (const item in cart) {

        if (!orderShop.includes(cart[item].item.proprietario)) {
            orderShop.push(cart[item].item.proprietario)
        }
    }

    for (let i = 0, l = orderShop.length; i < l; i++) {
        const cartTemp = [];
        for (const item in cart) {
            if (cart[item].item.proprietario === orderShop[i]) {
                cartTemp.push(cart[item].item);
            }
        }
        const nuovoOrdine = new Ordine({

            nomeUtente: nomeUtente,
            ncard: ncard,
            items: cartTemp,
            indirizzo : indirizzo,
            idLocale: orderShop[i],
            giorno: date.getDate(),
            mese: date.getMonth(),
            anno: date.getFullYear()

        });
        await nuovoOrdine.save();

    }
    try {
        await User.findOneAndUpdate(
            nomeUtente, {
            $set: {
                cart: []
            }
        }
        )
        res.status(200).json("ordine aggiunto")
    } catch (error) {
        res.status(500).json(error);

    }


})
router.get("/showuser", async (req, res) => {
    try {
        var query = { nomeUtente: req.query.username };
        const ordini = await Ordine.find(query);
        res.status(200).json(ordini)
    } catch (error) {
        res.status(500).json(error);
    }
})
router.get("/showshop", async (req, res) => {
    try {
        var query = { idLocale: req.query.id };
        const ordini = await Ordine.find(query);
        res.status(200).json(ordini)
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router