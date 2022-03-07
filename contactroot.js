const router = require("express").Router();
const express = require("express");
const Contact = require("../model/contact");
 


router.post('/sendMessage', async (req, res) => {
  //hashing the password
  
 
  //const { email, password } = req.body;
  const newContact = new Contact({
      nom: req.body.nom,
      email: req.body.email,
      msg:req.body.msg
    });
  await newContact.save();
//const token = await jwt.sign({_id: newUser._id}, 'secretkey');
  //res.status(200).json({token});
  res.status(200).json("contact ajouté avec succès");
});

//get 
router.get("/getContact", (req, res) => {
  Contact.find()
  .then(list => res.status(200).json(list))
  .catch(err => console.log(error()));
}) 


//nzid export 7aja mouhima
//export
module.exports = router;