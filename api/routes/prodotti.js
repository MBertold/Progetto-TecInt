const router = require("express").Router();
const Prodotti =require("../modelli/prodotti")


//ADD ITEM

router.post("/add/",async(req,res)=>{
    const nuovoProdotto = new Prodotti({
        nome:req.body.nome,
        descrizione:req.body.descrizione,
        prezzo:req.body.prezzo,
        proprietario:req.body.proprietario
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


//DELETE ITEM
router.delete("/delete/:id", async (req, res) => {
    try {
      await Prodotti.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //UPDATE ITEM
  router.put("/put/:id", async (req, res) => {
    try {
      await Prodotti.findByIdAndUpdate(req.params.id, {
        nome:req.body.nome,
        descrizione:req.body.descrizione,
        prezzo:req.body.prezzo,
      });
      // Send response in here
      res.send('Item Updated!');

    } catch(err) {
        console.error(err.message);
        res.send(400).send('Server Error');
    }
  });
module.exports = router