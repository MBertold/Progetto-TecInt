const router = require("express").Router();
const Prodotti =require("../modelli/prodotti")


//ADD ITEM

router.post("/add/:id",async(req,res)=>{
    const nuovoProdotto = new Prodotti({
        nome:req.body.nome,
        descrizione:req.body.descrizione,
        prezzo:req.body.prezzo,
        //imageUrl:req.body.imageUrl
        proprietario:req.params.id
    });
    try{
        const savedItem = await nuovoProdotto.save();
        const {...others} = savedItem._doc;
        res.status(201).json({...others})
    }catch(err){
        res.status(500).json(err);
    }
})

//DISPLAY ITEM
router.get("/show/",async(req,res)=>{
    try {
        var queryf = {proprietario : req.query.proprietario}
        const item = await Prodotti.find(queryf)
        res.status(200).json(item);
      } catch (err) {
        res.status(500).json(err);
      }
})
module.exports = router