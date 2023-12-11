const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('../models/userShema.js'); // import Schema

// Get all by async-await
router.get('/', async (req, res, next) => {
  try{
    let users = await User.find({})
    res.json(users);
  } catch (error) {
    next(error);
  }
  
})

// // Get all by find-then
// router.get('/', (req, res, next) => {
//   User.find({}).then((users) =>{
//     res.json(users);
//   })
//   .catch((error) => {
//     next(error);
//   });
// })

// Get single data
router.get('/:id',async (req, res, next) => {
  try {
    let singleUser = await User.findById(req.params.id);
    res.json(singleUser);
  } catch (error){
    next(error);
  }
  
})

// Add Usermane and password
router.post('/', async (req, res, next) => {
  try {
    let insertData = await User.create(req.body);
    res.json(insertData);
  } catch (error){
    next(error);
    console.log(error);
  }
  
})

// Update data
router.put('/:id', async (req, res, next) => {
  try {
    let updateData = await User.findByIdAndUpdate(req.params.id, req.body);
    res.json(updateData);
  } catch (error){
    next(error);
    console.log(error);
  }
  
})

// Delete data
router.delete('/:id', async (req, res, next) =>{
  try {
    let deleteData = await User.findByIdAndDelete(req.params.id);
    res.json(deleteData);
  } catch (error){
    next(error);
    console.log(error);
  }
  
})

module.exports = router;