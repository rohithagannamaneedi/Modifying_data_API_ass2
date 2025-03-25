const express = require("express");
const router = express.Router();

const userSchema = require("./schema");

router.post('/menu',async(req,res)=>{
    try {
      const {name,description,price} = req.body;
      if(!name || !price){
        res.status(400).send({msg:"All fields are required"});
      }
      const data = new userSchema({name,description,price});
      await data.save();
      res.status(200).send({msg:"Item created successfully"});
    } catch (error) {
      res.status(500).send({msg:"Something went wrong"});
    }
  })

router.get('/menu',async(req,res)=>{
    try {
      const data = await userSchema.find();
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send({msg:"Something went wrong"});
    }
  })  

router.put('/menu/:id', async (req, res) => {
    try {
        const { id } = req.params; // 
        const { name, description, price } = req.body;
        const updatedData = await userSchema.findByIdAndUpdate(
            id,
            { name, description, price }
        );
        if (!updatedData) {
            return res.status(404).send({ msg: "Menu item not found" });
        }
        res.status(200).send(updatedData);
    } catch (error) {
        res.status(500).send({ msg: "Something went wrong" });
    }
});

router.delete('/menu/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedData = await userSchema.findByIdAndDelete(id);
        if (!deletedData) {
            return res.status(404).send({ msg: "Menu item not found" });
        }
        res.status(200).send({ msg: "Item deleted successfully" });
    } catch (error) {
        res.status(500).send({ msg: "Something went wrong" });
    }
});

module.exports = router